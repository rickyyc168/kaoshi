// api/admin/verify.js — 管理员核验/拒绝订单
const { kv } = require('@vercel/kv');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', req.headers['origin'] || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Admin-Secret');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { orderId, action } = req.body || {};

  // 管理员鉴权 — 通过 header，不通过 body/query
  const auth = req.headers['authorization'] || '';
  const adminSecret = auth.startsWith('Bearer ') ? auth.slice(7) : (req.headers['x-admin-secret'] || '');

  if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: '无权限' });
  }

  if (!orderId || !action) {
    return res.status(400).json({ error: '缺少参数' });
  }

  const raw = await kv.get('order:' + orderId);
  if (!raw) return res.status(404).json({ error: '订单不存在' });

  const order = typeof raw === 'string' ? JSON.parse(raw) : raw;

  if (action === 'verify') {
    order.status = 'verified';
    order.verifiedAt = new Date().toISOString();
  } else if (action === 'reject') {
    order.status = 'rejected';
    order.rejectedAt = new Date().toISOString();
  } else {
    return res.status(400).json({ error: '无效操作，支持 verify/reject' });
  }

  await kv.set('order:' + orderId, JSON.stringify(order), { ex: 60 * 60 * 24 * 30 });

  // 从 confirmed/pending 列表移除
  await kv.lrem('orders:confirmed', 0, orderId);
  await kv.lrem('orders:pending', 0, orderId);

  return res.status(200).json({ success: true, order });
};
