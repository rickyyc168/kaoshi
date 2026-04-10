// api/order.js — 创建订单 & 管理员查询 & 用户确认付款
const { kv } = require('@vercel/kv');
const { PRODUCTS, VALID_DISCOUNTS } = require('./_products');

function generateOrderId() {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).substring(2, 8);
  return 'KS' + ts + rand;
}

// 服务端校验：根据商品表重新计算价格，拒绝客户端传入的 total/discount
function validateAndCalcOrder(items, discountCode) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return { error: '缺少订单信息' };
  }

  let serverTotal = 0;
  const validatedItems = [];

  for (const item of items) {
    if (!item.id || !item.qty || typeof item.qty !== 'number' || item.qty < 1) {
      return { error: '商品信息不完整' };
    }

    const product = PRODUCTS[item.id];
    if (!product) {
      return { error: `商品不存在: ${item.id}` };
    }

    // 检查批量上限
    const qty = Math.floor(item.qty);
    if (product.batchMax && qty > product.batchMax) {
      return { error: `${product.name} 单次最多购买 ${product.batchMax} 份` };
    }

    serverTotal += product.price * qty;
    validatedItems.push({
      id: item.id,
      name: product.name,
      price: product.price,
      qty: qty,
    });
  }

  // 四舍五入到分
  serverTotal = Math.round(serverTotal * 100) / 100;

  // 折扣：只接受服务端认可的折扣码
  let discount = 1;
  if (discountCode && VALID_DISCOUNTS[discountCode]) {
    discount = VALID_DISCOUNTS[discountCode];
  }

  const finalTotal = Math.round(serverTotal * discount * 100) / 100;

  return { items: validatedItems, subtotal: serverTotal, discount, total: finalTotal };
}

// 从 Authorization header 提取管理员密码
function getAdminSecret(req) {
  const auth = req.headers['authorization'] || '';
  if (auth.startsWith('Bearer ')) return auth.slice(7);
  // 兼容：也接受 x-admin-secret header
  return req.headers['x-admin-secret'] || '';
}

module.exports = async function handler(req, res) {
  // CORS — 限制为同源或你的域名
  const origin = req.headers['origin'] || '';
  // 如果是同域请求（Vercel 自身），允许；否则按需放行
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Admin-Secret');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    // === 创建订单（服务端定价） ===
    const { items, discountCode } = req.body || {};

    const result = validateAndCalcOrder(items, discountCode);
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    const orderId = generateOrderId();
    const order = {
      id: orderId,
      items: JSON.stringify(result.items),
      subtotal: result.subtotal,
      discount: result.discount,
      total: result.total,
      status: 'pending',
      createdAt: new Date().toISOString(),
      userConfirmedAt: null,
      verifiedAt: null,
    };

    // 存到 KV，30天过期
    await kv.set('order:' + orderId, JSON.stringify(order), { ex: 60 * 60 * 24 * 30 });
    await kv.lpush('orders:pending', orderId);
    await kv.expire('orders:pending', 60 * 60 * 24 * 30);

    // 返回服务端计算的价格，前端以此为准
    return res.status(200).json({ orderId, order: { id: orderId, items: result.items, subtotal: result.subtotal, discount: result.discount, total: result.total, status: 'pending' } });
  }

  if (req.method === 'PATCH') {
    // === 用户确认付款 ===
    const { orderId } = req.body || {};
    if (!orderId) {
      return res.status(400).json({ error: '缺少订单号' });
    }

    const raw = await kv.get('order:' + orderId);
    if (!raw) return res.status(404).json({ error: '订单不存在' });

    const order = typeof raw === 'string' ? JSON.parse(raw) : raw;

    if (order.status !== 'pending') {
      return res.status(400).json({ error: '订单状态不是待付款，当前状态: ' + order.status });
    }

    order.status = 'user_confirmed';
    order.userConfirmedAt = new Date().toISOString();

    await kv.set('order:' + orderId, JSON.stringify(order), { ex: 60 * 60 * 24 * 30 });

    // 移入已确认列表
    await kv.lrem('orders:pending', 0, orderId);
    await kv.lpush('orders:confirmed', orderId);
    await kv.expire('orders:confirmed', 60 * 60 * 24 * 30);

    return res.status(200).json({ success: true, order });
  }

  if (req.method === 'GET') {
    const { orderId } = req.query || {};

    // 查询单个订单 — 只返回基本信息，不暴露敏感字段
    if (orderId) {
      const raw = await kv.get('order:' + orderId);
      if (!raw) return res.status(404).json({ error: '订单不存在' });
      const order = typeof raw === 'string' ? JSON.parse(raw) : raw;
      return res.status(200).json({
        order: {
          id: order.id,
          total: order.total,
          status: order.status,
          createdAt: order.createdAt,
        }
      });
    }

    // 管理员查询所有订单 — 必须通过 header 鉴权
    const adminSecret = getAdminSecret(req);
    if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
      return res.status(401).json({ error: '无权限' });
    }

    const pendingIds = await kv.lrange('orders:pending', 0, -1) || [];
    const confirmedIds = await kv.lrange('orders:confirmed', 0, -1) || [];
    const allIds = [...new Set([...pendingIds, ...confirmedIds])];

    const orders = [];
    for (const id of allIds) {
      const raw = await kv.get('order:' + id);
      if (raw) {
        try {
          orders.push(typeof raw === 'string' ? JSON.parse(raw) : raw);
        } catch {}
      }
    }

    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return res.status(200).json({ orders });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
