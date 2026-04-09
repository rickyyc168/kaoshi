// api/order.js — 创建订单 & 管理员查询 & 用户确认付款
const { kv } = require('@vercel/kv');

function generateOrderId() {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).substring(2, 8);
  return 'KS' + ts + rand;
}

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    // 创建订单
    const { items, total, discount } = req.body || {};
    if (!items || !items.length || !total) {
      return res.status(400).json({ error: '缺少订单信息' });
    }

    const orderId = generateOrderId();
    const order = {
      id: orderId,
      items: JSON.stringify(items),
      total: parseFloat(total),
      discount: discount || 1,
      status: 'pending', // pending → user_confirmed → verified → rejected
      createdAt: new Date().toISOString(),
      userConfirmedAt: null,
      verifiedAt: null,
    };

    // 存到 KV，30天过期
    await kv.set('order:' + orderId, JSON.stringify(order), { ex: 60 * 60 * 24 * 30 });

    // 加入待处理订单列表
    await kv.lpush('orders:pending', orderId);
    await kv.expire('orders:pending', 60 * 60 * 24 * 30);

    return res.status(200).json({ orderId, order });
  }

  if (req.method === 'PATCH') {
    // 用户确认付款
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
    // 用户查询单个订单状态（不需要密码）
    const { admin, orderId } = req.query || {};

    if (orderId) {
      const raw = await kv.get('order:' + orderId);
      if (!raw) return res.status(404).json({ error: '订单不存在' });
      const order = typeof raw === 'string' ? JSON.parse(raw) : raw;
      return res.status(200).json({ order });
    }

    // 管理员查询所有订单（带 admin 密码校验）
    if (admin !== process.env.ADMIN_SECRET) {
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

    // 按时间倒序
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return res.status(200).json({ orders });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
