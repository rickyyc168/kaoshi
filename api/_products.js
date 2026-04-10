// api/_products.js — 服务端商品价格表（唯一可信来源）
// 前端展示用的价格也必须与此保持一致
const PRODUCTS = {
  // 四六级
  'einstein-en':  { name: '爱因斯坦的脑子・英语加强版', price: 0.50, iq: 1000 },
  'yuminhong':    { name: '俞敏洪的词汇脑',           price: 0.80, iq: 900  },
  'shakespeare':  { name: '莎士比亚的文豪脑',         price: 1.00, iq: 1200 },
  // 期末
  'gauss':        { name: '高斯的脑子・数学王子版',   price: 0.06, iq: 1000 },
  'huaronggeng':  { name: '华罗庚的脑子',             price: 0.02, iq: 100  },
  'zuchongzhi':   { name: '祖冲之的脑子',             price: 0.02, iq: 500  },
  'qianzhongshu': { name: '钱钟书的过目不忘脑',       price: 0.99, iq: 1000 },
  'weidongyi':    { name: '韦东奕的数学脑',           price: 1.99, iq: 1500 },
  // 论文
  'einstein-res': { name: '爱因斯坦的脑子・科研版',   price: 0.01, iq: 10,   batchMax: 100 },
  'tuyouyou':     { name: '屠呦呦的科研脑',           price: 1.99, iq: 1800 },
  'yuanlongping': { name: '袁隆平的实干脑',           price: 1.99, iq: 1600 },
  'qianxuesen':   { name: '钱学森的学术脑',           price: 2.99, iq: 2500 },
  'luxun':        { name: '鲁迅的文豪脑',             price: 0.99, iq: 900  },
};

// 合法折扣（由服务端发放，不接受客户端自定义）
const VALID_DISCOUNTS = {
  'DISC20': 0.8,  // 8折
  'DISC50': 0.5,  // 5折
};

module.exports = { PRODUCTS, VALID_DISCOUNTS };
