// api/order/[id].js — 查询单个订单状态 & 用户确认付款
const { kv } = require('@vercel/kv');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { id } = req.query;

  if (req.method === 'GET') {
    const raw = await kv.get('order:' + id);
    if (!raw) return res.status(404).json({ error: '订单不存在' });
    const order = typeof raw === 'string' ? JSON.parse(raw) : raw;
    return res.status(200).json({ order });
  }

  if (req.method === 'POST') {
    // 用户确认已付款
    const raw = await kv.get('order:' + id);
    if (!raw) return res.status(404).json({ error: '订单不存在' });
    const order = typeof raw === 'string' ? JSON.parse(raw) : raw;

    if (order.status !== 'pending') {
      return res.status(400).json({ error: '订单状态异常', status: order.status });
    }

    order.status = 'user_confirmed';
    order.userConfirmedAt = new Date().toISOString();

    await kv.set('order:' + id, JSON.stringify(order), { ex: 60 * 60 * 24 * 30 });

    // 从 pending 移到 confirmed 列表
    await kv.lrem('orders:pending', 0, id);
    await kv.lpush('orders:confirmed', id);
    await kv.expire('orders:confirmed', 60 * 60 * 24 * 30);

    return res.status(200).json({ success: true, order });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
