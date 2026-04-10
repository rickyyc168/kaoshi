// ===== PRODUCT DATA =====
const PRODUCTS = {
  cet: [
    { id: 'einstein-en', emoji: '🧠', img: 'assets/images/avatars/einstein-en.jpg', name: '爱因斯坦的脑子・英语加强版', desc: '通用智商 +1000，四六级阅读秒懂，听力全对，写作直接出满分范文', price: 0.5, tags: ['全网爆款', '自带流量'], iq: 1000, hot: true },
    { id: 'yuminhong', emoji: '📚', img: 'assets/images/avatars/yuminhong.jpg', name: '俞敏洪的词汇脑', desc: '新东方创始人专属，单词过目不忘，阅读长难句秒解', price: 0.8, tags: ['考研四六级', '认知度拉满'], iq: 900 },
    { id: 'shakespeare', emoji: '✒️', img: 'assets/images/avatars/shakespeare.jpg', name: '莎士比亚的文豪脑', desc: '写作 buff 拉满，高级词汇直接用，阅卷老师直接给满分', price: 1.0, tags: ['文化梗', '逼格拉满'], iq: 1200 }
  ],
  finals: [
    { id: 'gauss', emoji: '📐', img: 'assets/images/avatars/gauss.jpg', name: '高斯的脑子・数学王子版', desc: '通用智商 +1000，高数/线代/概率论秒解，计算题全对', price: 0.06, tags: ['数学之神', '理工刚需'], iq: 1000, hot: true },
    { id: 'huaronggeng', emoji: '🧮', img: 'assets/images/avatars/huaronggeng.jpg', name: '华罗庚的脑子', desc: '通用智商 +100，数理化全科目 buff，期末不挂科', price: 0.02, tags: ['国产大师', '性价比款'], iq: 100 },
    { id: 'zuchongzhi', emoji: '📏', img: 'assets/images/avatars/zuchongzhi.jpg', name: '祖冲之的脑子', desc: '计算精度拉满，计算题零失误，理科考试稳过', price: 0.02, tags: ['历史名人', '玩梗属性'], iq: 500 },
    { id: 'qianzhongshu', emoji: '📖', img: 'assets/images/avatars/qianzhongshu.png', name: '钱钟书的过目不忘脑', desc: '记忆力 +1000，文科知识点全记住，背题秒会', price: 0.99, tags: ['文科专属', '记忆拉满'], iq: 1000 },
    { id: 'weidongyi', emoji: '🏆', img: 'assets/images/avatars/weidongyi.jpg', name: '韦东奕的数学脑', desc: '北大韦神专属，高数难题直接秒，期末满绩不是梦', price: 1.99, tags: ['当代网红', '自带流量'], iq: 1500, hot: true }
  ],
  thesis: [
    { id: 'einstein-res', emoji: '🔬', img: 'assets/images/avatars/einstein-res.jpg', name: '爱因斯坦的脑子・科研版', desc: '科研思维拉满，论文创新点直接有，答辩对答如流', price: 0.01, tags: ['万能款', '全学科适用', '可批量100份'], iq: 10, batchMax: 100 },
    { id: 'tuyouyou', emoji: '💊', img: 'assets/images/avatars/tuyouyou.jpg', name: '屠呦呦的科研脑', desc: '实验数据零误差，论文查重率为 0，导师疯狂点赞', price: 1.99, tags: ['诺奖得主', '学术权威'], iq: 1800 },
    { id: 'yuanlongping', emoji: '🌾', img: 'assets/images/avatars/yuanlongping.jpg', name: '袁隆平的实干脑', desc: '论文逻辑严谨，答辩不卡壳，评委全票通过', price: 1.99, tags: ['国民科学家', '情怀在线'], iq: 1600 },
    { id: 'qianxuesen', emoji: '🚀', img: 'assets/images/avatars/qianxuesen.jpg', name: '钱学森的学术脑', desc: '跨学科科研 buff，论文深度拉满，答辩直接封神', price: 2.99, tags: ['高端款', '硕博专属'], iq: 2500, hot: true },
    { id: 'luxun', emoji: '🖊️', img: 'assets/images/avatars/luxun.jpg', name: '鲁迅的文豪脑', desc: '论文写作逻辑拉满，摘要/结论直接封神，审稿人秒过', price: 0.99, tags: ['文科社科', '写作Buff'], iq: 900 }
  ]
};

const REVIEWS = [
  { name: '匿名学霸', avatar: '🦊', stars: 5, text: '买了爱因斯坦脑子，四级居然真的过了！虽然不知道是不是玄学，但心态确实稳了哈哈', item: '爱因斯坦的脑子・英语加强版', time: '2小时前', verified: true },
  { name: '期末战士', avatar: '🐺', stars: 5, text: '高数挂了三年，今年买了高斯的脑子，61分飘过！！！感谢高斯！！！', item: '高斯的脑子・数学王子版', time: '5小时前', verified: true },
  { name: '论文难民', avatar: '🐱', stars: 4, text: '买了鲁迅文豪脑，论文写作确实顺了很多（也可能是熬夜效果）总之过了！', item: '鲁迅的文豪脑', time: '1天前', verified: true },
  { name: '卷王本王', avatar: '🦁', stars: 5, text: '一口气买了100份爱因斯坦科研版，智商直接+1000，导师问我最近是不是开窍了', item: '爱因斯坦的脑子・科研版', time: '2天前', verified: true },
  { name: '六级难民', avatar: '🐰', stars: 5, text: '四六级考前拜了莎士比亚，写作果然用上了好几个高级词汇，感谢文豪！', item: '莎士比亚的文豪脑', time: '3天前', verified: true },
  { name: '韦神粉丝', avatar: '🐻', stars: 5, text: '韦东奕的脑子也太好用了吧！！线代直接满分好吧（手动狗头）', item: '韦东奕的数学脑', time: '3天前', verified: true },
  { name: '后悔买家', avatar: '🐸', stars: 2, text: '买了华罗庚的脑子结果考试还是不会，后来发现是没复习……智商 +100 可能不够用吧（悲', item: '华罗庚的脑子', time: '1周前', verified: false },
  { name: '玄学大师', avatar: '🧙', stars: 5, text: '建议配套使用：爱因斯坦脑子 + 韦东奕脑子 + 高斯脑子 = 三体人智商，考试直接碾压', item: '爱因斯坦的脑子・英语加强版', time: '2周前', verified: false },
  { name: '挂科之王', avatar: '💀', stars: 1, text: '买了钱学森脑子结果答辩评委问我火箭原理……智商 +2500 也救不了我（摊手）', item: '钱学森的学术脑', time: '3周前', verified: true },
  { name: '幸运儿', avatar: '🍀', stars: 5, text: '抽到了免单券！直接全款拿下全套脑子！今晚智商溢出！', item: '锦鲤抽奖', time: '4天前', verified: false }
];

// Lucky draw prizes
const LUCKY_PRIZES = [
  { type: 'discount', title: '🎫 8折优惠券', desc: '全场商品打8折！学霸脑子更便宜了', weight: 30, code: 'DISC20', discValue: 0.8 },
  { type: 'discount', title: '🎟️ 5折优惠券', desc: '半价抢购！这波不亏', weight: 15, code: 'DISC50', discValue: 0.5 },
  { type: 'buff', title: '🧠 隐藏款·锦鲤脑', desc: '欧气加持 +500，考试选择题蒙对率+50%', weight: 10, iq: 500 },
  { type: 'buff', title: '⚡ 隐藏款·考神附体', desc: '全科目 buff +2000，什么考试都能过', weight: 5, iq: 2000 },
  { type: 'none', title: '😭 谢谢参与', desc: '下次一定！建议多买几个脑子提升运气', weight: 30 },
  { type: 'none', title: '🤔 空气Buff', desc: '什么都没抽到，但你的乐观精神 +100', weight: 10 },
];

// ===== STATE =====
let cart = [];
let totalIq = 0;
let discount = 1.0;
let discountCode = null; // 服务端折扣码（抽奖获得）
let luckyDrawCount = 3;
let toastTimeout = null;

// ===== INIT =====
$(document).ready(function () {
  renderProducts();
  renderReviews();
  initCart();
  animateCounters();
  initScrollProgress();
  initBackToTop();
  initBrainClick();
  initSearchAndFilter();
  initSectionReveal();

  // Re-trigger wow.js for dynamically added elements
  setTimeout(function () {
    new WOW({ scrollContainer: null }).init();
  }, 200);

  // Remove preloader
  setTimeout(function () {
    var preloader = document.getElementById('js-preloader');
    if (preloader) preloader.classList.add('loaded');
  }, 600);
});

// ===== SECTION SCROLL REVEAL =====
function initSectionReveal() {
  var sections = document.querySelectorAll('.section, .our-services, .about-us, .lucky-draw-section, .our-portfolio, .our-blog');
  sections.forEach(function (s) { s.classList.add('section-reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  sections.forEach(function (s) { observer.observe(s); });
}

// ===== RENDER PRODUCTS =====
function renderProducts(filter) {
  var cetHtml = '';
  PRODUCTS.cet.forEach(function (p, i) {
    if (filter && filter !== 'all' && filter !== 'cet') return;
    cetHtml += '<div class="col-lg-6 col-sm-6 buff-card wow fadeInUp" data-wow-duration="1s" data-wow-delay="' + (0.3 + i * 0.1) + 's">'
      + buildCard(p) + '</div>';
  });
  $('#cetProducts').html(cetHtml || '<p class="text-center" style="color:rgba(255,255,255,0.3)">暂无匹配商品</p>');

  var finalsHtml = '';
  PRODUCTS.finals.forEach(function (p, i) {
    if (filter && filter !== 'all' && filter !== 'finals') return;
    finalsHtml += '<div class="col-lg-6 col-sm-6 buff-card wow fadeIn" data-wow-duration="1s" data-wow-delay="' + (0.5 + i * 0.2) + 's">'
      + buildCard(p) + '</div>';
  });
  $('#finalsProducts').html(finalsHtml || '<p class="text-center" style="color:rgba(255,255,255,0.3)">暂无匹配商品</p>');

  var thesisHtml = '';
  PRODUCTS.thesis.forEach(function (p, i) {
    if (filter && filter !== 'all' && filter !== 'thesis') return;
    thesisHtml += '<div class="col-lg-6 col-sm-6 buff-card wow fadeInUp" data-wow-duration="1s" data-wow-delay="' + (0.3 + i * 0.1) + 's">'
      + buildCard(p) + '</div>';
  });
  $('#thesisProducts').html(thesisHtml || '<p class="text-center" style="color:rgba(255,255,255,0.3)">暂无匹配商品</p>');
}

function buildCard(p) {
  var tags = p.tags.map(function (t) { return '<span class="buff-tag">' + t + '</span>'; }).join('');
  var hotClass = p.hot ? ' hot' : '';
  var avatarHtml = p.img
    ? '<div class="buff-avatar"><img src="' + p.img + '" alt="' + p.name + '" loading="lazy" /></div>'
    : '<div class="buff-emoji">' + p.emoji + '</div>';
  return '<div class="buff-card-inner' + hotClass + '">'
    + avatarHtml
    + '<div class="buff-name">' + p.name + '</div>'
    + '<div class="buff-desc">' + p.desc + '</div>'
    + '<div class="buff-tags">' + tags + '</div>'
    + '<div class="buff-bottom">'
    + '<span class="buff-price">¥' + p.price.toFixed(2) + '</span>'
    + '<button class="buff-add" data-id="' + p.id + '">加入购物车</button>'
    + '</div></div>';
}

// ===== RENDER REVIEWS =====
function renderReviews() {
  var html = '';
  REVIEWS.forEach(function (r, i) {
    var stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    var verified = r.verified ? '<span class="review-verified">✓ 已购认证</span>' : '';
    html += '<div class="col-lg-4 col-sm-6 review-card wow fadeInUp" data-wow-duration="1s" data-wow-delay="' + (0.3 + i * 0.15) + 's">'
      + '<div class="review-card-inner">'
      + '<div class="review-header">'
      + '<div class="review-avatar">' + r.avatar + '</div>'
      + '<div><div class="review-name">' + r.name + verified + '</div><div class="review-time">' + r.time + '</div></div>'
      + '</div>'
      + '<div class="review-stars">' + stars + '</div>'
      + '<div class="review-text">' + r.text + '</div>'
      + '<div class="review-item">📦 ' + r.item + '</div>'
      + '</div></div>';
  });
  $('#reviewsGrid').html(html);
}

// ===== CART LOGIC =====
$(document).on('click', '.buff-add', function (e) {
  e.stopPropagation();
  var id = $(this).data('id');
  var product = findProduct(id);
  if (!product) return;

  // Ripple effect
  var btn = $(this);
  var ripple = $('<span class="ripple"></span>');
  var rect = this.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  ripple.css({ left: x + 'px', top: y + 'px' });
  btn.append(ripple);
  setTimeout(function () { ripple.remove(); }, 600);

  addToCart(product);

  // Button feedback
  btn.text('✓ 已添加').addClass('added');
  setTimeout(function () { btn.text('加入购物车').removeClass('added'); }, 1500);

  // Badge bump
  $('#cartCount').addClass('bump');
  setTimeout(function () { $('#cartCount').removeClass('bump'); }, 300);

  // Confetti burst
  burstConfetti(e.clientX, e.clientY, 15);
});

function findProduct(id) {
  for (var key in PRODUCTS) {
    var found = PRODUCTS[key].find(function (p) { return p.id === id; });
    if (found) return found;
  }
  return null;
}

function addToCart(product) {
  var existing = cart.find(function (c) { return c.id === product.id; });
  if (existing) {
    existing.qty++;
  } else {
    cart.push($.extend({}, product, { qty: 1 }));
  }
  updateCartUI();
  showToast('🧠 ' + product.name + ' 已加入购物车');
}

function changeQty(id, delta) {
  var item = cart.find(function (c) { return c.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(function (c) { return c.id !== id; });
  }
  updateCartUI();
}

function updateCartUI() {
  var count = cart.reduce(function (s, c) { return s + c.qty; }, 0);
  var subtotal = cart.reduce(function (s, c) { return s + c.price * c.qty; }, 0);
  var total = subtotal * discount;
  totalIq = cart.reduce(function (s, c) { return s + c.iq * c.qty; }, 0);

  $('#cartCount').text(count);
  if (discount < 1) {
    $('#cartTotal').html('<span style="text-decoration:line-through;opacity:0.4;font-size:14px">¥' + subtotal.toFixed(2) + '</span> ¥' + total.toFixed(2));
  } else {
    $('#cartTotal').text('¥' + total.toFixed(2));
  }

  var itemsEl = $('#cartItems');
  if (cart.length === 0) {
    itemsEl.html('<p class="cart-empty">空空如也，快去选购学霸脑子！</p>');
  } else {
    var html = '';
    cart.forEach(function (c) {
      html += '<div class="cart-item">'
        + '<span class="cart-item-emoji">' + c.emoji + '</span>'
        + '<div class="cart-item-info">'
        + '<div class="cart-item-name">' + c.name + '</div>'
        + '<div class="cart-item-price">¥' + c.price.toFixed(2) + ' × ' + c.qty + '</div>'
        + '</div>'
        + '<div class="cart-item-qty">'
        + '<button onclick="changeQty(\'' + c.id + '\', -1)">−</button>'
        + '<span>' + c.qty + '</span>'
        + '<button onclick="changeQty(\'' + c.id + '\', 1)">+</button>'
        + '</div></div>';
    });
    itemsEl.html(html);
  }

  updateIqBar();
}

function updateIqBar() {
  var current = parseInt($('#totalIq').text().replace(/,/g, '')) || 0;
  animateNumber($('#totalIq'), current, totalIq, 600);

  var pct = Math.min(totalIq / 20000 * 100, 100);
  $('#iqBar').css('width', pct + '%');

  var levels = [
    [0, '普通人类 (100)', '🧑'],
    [100, '聪明人 (500)', '🤓'],
    [500, '学霸 (1000)', '📚'],
    [1000, '天才 (5000)', '🧠'],
    [5000, '爱因斯坦附体 (10000)', '⚡'],
    [10000, '超人类 (20000)', '🌟'],
    [20000, '智力突破天际 🚀', '🚀']
  ];
  var level = levels[0];
  for (var i = 0; i < levels.length; i++) {
    if (totalIq >= levels[i][0]) level = levels[i];
  }
  $('#iqLevel').text(level[2] + ' ' + level[1]);
}

function animateNumber(el, from, to, duration) {
  var start = performance.now();
  function step(now) {
    var pct = Math.min((now - start) / duration, 1);
    var eased = 1 - Math.pow(1 - pct, 3);
    el.text(Math.round(from + (to - from) * eased).toLocaleString());
    if (pct < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ===== CART SIDEBAR =====
function initCart() {
  $('#cartToggleNav').on('click', function (e) {
    e.preventDefault();
    $('#cartSidebar').addClass('active');
    $('#cartOverlay').addClass('active');
  });
  $('#cartClose, #cartOverlay').on('click', function () {
    $('#cartSidebar').removeClass('active');
    $('#cartOverlay').removeClass('active');
  });
  $('#checkoutBtn').on('click', function () {
    if (cart.length === 0) { showToast('购物车是空的，快去选购！'); return; }
    $('#cartSidebar').removeClass('active');
    $('#cartOverlay').removeClass('active');
    showCheckoutModal();
  });
}

// ===== CHECKOUT MODAL =====
var currentOrderId = null;
var pollTimer = null;

function showCheckoutModal() {
  var subtotal = cart.reduce(function (s, c) { return s + c.price * c.qty; }, 0);
  var total = subtotal * discount;

  // 先显示加载中
  var itemsHtml = cart.map(function (c) {
    return '<div class="checkout-item"><span>' + c.emoji + ' ' + c.name + ' × ' + c.qty + '</span><span>¥' + (c.price * c.qty).toFixed(2) + '</span></div>';
  }).join('');

  var discountText = discount < 1
    ? '<div class="checkout-discount" style="color:#27ae60;font-size:14px;text-align:right;margin-top:8px">🎉 已使用 ' + Math.round((1 - discount) * 100) + '% 折扣券</div>'
    : '';

  var html = '<div class="checkout-summary">'
    + '<h3>⚡ 确认订单</h3>'
    + itemsHtml
    + discountText
    + '<div class="checkout-total"><span>合计</span><span>¥' + total.toFixed(2) + '</span></div>'
    + '</div>'
    + '<div class="checkout-payment" id="checkoutPayment">'
    + '<p style="color:var(--text-muted)">⏳ 正在创建订单...</p>'
    + '</div>';

  $('#modalBody').html(html);
  openModal();

  // 创建订单（只发 items 和折扣码，价格由服务端计算）
  var orderItems = cart.map(function (c) {
    return { id: c.id, qty: c.qty };
  });

  fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: orderItems, discountCode: discountCode })
  })
  .then(function (r) { return r.json(); })
  .then(function (data) {
    if (data.error) {
      $('#checkoutPayment').html('<p style="color:var(--red)">❌ ' + data.error + '</p>');
      return;
    }
    currentOrderId = data.orderId;
    // 用服务端返回的价格显示二维码
    showPaymentQR(data.order.total, data.orderId);
  })
  .catch(function () {
    $('#checkoutPayment').html('<p style="color:var(--red)">❌ 网络错误，请重试</p>');
  });
}

function showPaymentQR(total, orderId) {
  var payHtml = '<p>用微信扫下方二维码付款</p>'
    + '<div class="qr-real-wrap">'
    + '<img src="assets/images/wechat-qr.png" alt="微信收款" class="qr-real-img"/>'
    + '<div class="qr-amount">💰 ¥' + total.toFixed(2) + '</div>'
    + '<div class="qr-steps">'
    + '<p class="qr-step">1️⃣ 截图保存二维码，打开<strong>微信</strong>扫一扫 → 相册选取</p>'
    + '<p class="qr-step">2️⃣ 输入金额 <strong>¥' + total.toFixed(2) + '</strong></p>'
    + '<p class="qr-step">3️⃣ 复制下方订单号，粘贴到备注栏</p>'
    + '</div>'
    + '<div class="order-id-box">'
    + '<span class="order-id-text" id="orderIdText">' + orderId + '</span>'
    + '<button class="order-id-copy" onclick="copyOrderId(\'' + orderId + '\', this)">📋 复制</button>'
    + '</div>'
    + '<button class="main-button btn-confirm-pay" onclick="confirmPayment(this, \'' + orderId + '\')">💰 ✅ 我已付款</button>'
    + '<p class="checkout-note">⚠️ 金额必须为 ¥' + total.toFixed(2) + '，备注必须填订单号</p>'
    + '</div>';

  $('#checkoutPayment').html(payHtml);

  // 自动保存订单号到 sessionStorage，防止切微信后丢失
  try { sessionStorage.setItem('ks_last_order', orderId); } catch(e) {}
}

function confirmPayment(btn, orderId) {
  if (!btn) return;
  btn.disabled = true;
  btn.textContent = '⏳ 提交中...';

  fetch('/api/order', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId: orderId })
  })
  .then(function (r) { return r.json(); })
  .then(function (data) {
    if (data.error) {
      btn.disabled = false;
      btn.textContent = '💰 ✅ 我已付款';
      showToast('❌ ' + data.error);
      return;
    }

    // 显示确认成功
    $('#checkoutPayment').html(
      '<div style="text-align:center;padding:30px 0">'
      + '<div style="font-size:60px;margin-bottom:16px">🎉</div>'
      + '<h3 style="color:var(--text-primary);margin-bottom:8px">已收到付款确认</h3>'
      + '<p style="color:var(--text-dim);font-size:14px">订单号: ' + orderId + '</p>'
      + '<p style="color:var(--text-dim);font-size:13px;margin-top:12px">管理员将在 1-5 分钟内核验，核验通过后 Buff 即刻生效！</p>'
      + '</div>'
    );

    // 清空购物车
    cart = [];
    updateCartUI();

    // 纸屑庆祝
    setTimeout(function () {
      for (var i = 0; i < 3; i++) {
        (function (idx) {
          setTimeout(function () {
            burstConfetti(
              Math.random() * window.innerWidth,
              Math.random() * window.innerHeight * 0.5,
              15
            );
          }, idx * 300);
        })(i);
      }
    }, 200);
  })
  .catch(function () {
    btn.disabled = false;
    btn.textContent = '💰 ✅ 我已付款';
    showToast('❌ 网络错误，请检查后重试');
  });
}

// ===== COPY ORDER ID =====
function copyOrderId(orderId, btnEl) {
  // 优先用 Clipboard API，降级用 textarea
  function onSuccess() {
    btnEl.textContent = '✅ 已复制';
    setTimeout(function() { btnEl.textContent = '📋 复制'; }, 2000);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(orderId).then(onSuccess).catch(function() {
      fallbackCopy(orderId, onSuccess);
    });
  } else {
    fallbackCopy(orderId, onSuccess);
  }

  function fallbackCopy(text, cb) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    try { document.execCommand('copy'); cb(); } catch(e) { showToast('复制失败，请手动复制'); }
    document.body.removeChild(ta);
  }
}

// ===== BUFF CERTIFICATE =====
function showCertificate() {
  var html = '<div class="cert">'
    + '<div class="cert-header">✦ BUFF 已生效 ✦</div>'
    + '<div class="cert-title">🧠 学霸脑子加持证书</div>'
    + '<div class="cert-canvas-wrap"><canvas id="certCanvas" width="600" height="420"></canvas></div>'
    + '<div class="cert-actions">'
    + '<button class="main-button" onclick="downloadCert()">💾 保存证书</button>'
    + '<button class="main-button" onclick="closeModal()" style="background:#555">关闭</button>'
    + '</div>'
    + '<div class="share-section">'
    + '<button class="share-btn" onclick="shareToClipboard()">📋 复制分享文案</button>'
    + '<button class="share-btn" onclick="shareCertImage()">🖼️ 保存证书图片</button>'
    + '</div>'
    + '</div>';
  $('#modalBody').html(html);
  openModal();
  setTimeout(drawCertificate, 100);
}

function drawCertificate() {
  var canvas = document.getElementById('certCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var w = canvas.width, h = canvas.height;

  // Background gradient
  var grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#1a0533');
  grad.addColorStop(0.3, '#0b0e1a');
  grad.addColorStop(0.7, '#0a1628');
  grad.addColorStop(1, '#1a0533');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Star particles in background
  ctx.fillStyle = 'rgba(255,215,0,0.3)';
  for (var i = 0; i < 50; i++) {
    var sx = Math.random() * w;
    var sy = Math.random() * h;
    var sr = Math.random() * 1.5 + 0.5;
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fill();
  }

  // Double border
  ctx.strokeStyle = '#ee5a24';
  ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, w - 24, h - 24);
  ctx.strokeStyle = 'rgba(238,90,36,0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(22, 22, w - 44, h - 44);

  // Corner decorations
  var corners = [[35, 40], [w - 35, 40], [35, h - 28], [w - 35, h - 28]];
  ctx.font = '18px serif';
  ctx.fillStyle = '#ffd700';
  ctx.textAlign = 'center';
  corners.forEach(function (c) { ctx.fillText('✦', c[0], c[1]); });

  // Subtitle
  ctx.font = '600 13px sans-serif';
  ctx.fillStyle = 'rgba(238,90,36,0.8)';
  ctx.fillText('✦ 非官方认证 · 玄学加持 ✦', w / 2, 65);

  // Title with glow
  ctx.shadowColor = '#ee5a24';
  ctx.shadowBlur = 20;
  ctx.font = '900 34px sans-serif';
  ctx.fillStyle = '#ee5a24';
  ctx.fillText('学霸脑子加持证书', w / 2, 110);
  ctx.shadowBlur = 0;

  // Brain emoji
  ctx.font = '64px serif';
  ctx.fillText('🧠', w / 2, 180);

  // Divider line
  ctx.strokeStyle = 'rgba(238,90,36,0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(w - 100, 200);
  ctx.stroke();

  // Info
  ctx.font = '500 16px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.fillText('加持智商: +' + totalIq.toLocaleString(), w / 2, 230);

  // Products purchased summary
  var productNames = cart.length > 0 ? cart.map(function (c) { return c.emoji; }).join(' ') : '🧠';
  if (cart.length === 0) {
    var cartItems = [];
    // Use a fallback
    productNames = '🧠✨';
  }
  ctx.font = '14px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.fillText('加持产品: ' + (cart.length > 0 ? cart.length + '件 Buff' : '神秘加持'), w / 2, 258);

  ctx.font = '500 16px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.fillText('购买时间: ' + new Date().toLocaleString('zh-CN'), w / 2, 288);
  ctx.fillText('证书编号: BUFF-' + Date.now().toString(36).toUpperCase(), w / 2, 318);

  // Seal / stamp effect
  ctx.save();
  ctx.translate(w - 90, h - 80);
  ctx.rotate(-0.15);
  ctx.strokeStyle = 'rgba(238,90,36,0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, 30, 0, Math.PI * 2);
  ctx.stroke();
  ctx.font = 'bold 12px sans-serif';
  ctx.fillStyle = 'rgba(238,90,36,0.5)';
  ctx.textAlign = 'center';
  ctx.fillText('BUFF', 0, -5);
  ctx.fillText('认证', 0, 12);
  ctx.restore();

  // Footer
  ctx.textAlign = 'center';
  ctx.font = '13px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.fillText('本证书为虚拟娱乐内容，无实际功效', w / 2, h - 42);
  ctx.fillText('心诚则灵 · 不是裸考 · 祝你逢考必过 ✨', w / 2, h - 22);
}

function downloadCert() {
  var canvas = document.getElementById('certCanvas');
  if (!canvas) return;
  var link = document.createElement('a');
  link.download = '学霸buff证书.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('💾 证书已保存！');
}

function shareCertImage() {
  downloadCert();
  showToast('🖼️ 证书图片已保存到本地！');
}

function shareToClipboard() {
  var items = cart.length > 0 ? cart.map(function (c) { return c.emoji + c.name; }).join('、') : '全套学霸脑子';
  var text = '🧠 我在「不是裸考」购买了' + items + '\n'
    + '✨ 总加持智商: +' + totalIq.toLocaleString() + '\n'
    + '🎯 心诚则灵，逢考必过！\n'
    + '👉 不是裸考 — 学霸脑子玄学Buff商店';

  function fallbackCopy() {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showToast('📋 分享文案已复制！'); }
    catch(e) { showToast('复制失败，请手动复制'); }
    document.body.removeChild(ta);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () {
      showToast('📋 分享文案已复制！');
    }).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

// ===== MODAL =====
function openModal() { $('#modalOverlay').addClass('active'); }
function closeModal() { $('#modalOverlay').removeClass('active'); }
$('#modalClose').on('click', closeModal);
$('#modalOverlay').on('click', function (e) {
  if (e.target === this) closeModal();
});

// ===== LUCKY DRAW =====
function openLuckyDraw() {
  if (luckyDrawCount <= 0) {
    showToast('今日抽奖次数已用完，明天再来吧！');
    return;
  }

  var box = document.getElementById('luckyBox');
  box.classList.add('opening');

  setTimeout(function () {
    box.classList.remove('opening');

    // Weighted random
    var totalWeight = LUCKY_PRIZES.reduce(function (s, p) { return s + p.weight; }, 0);
    var rand = Math.random() * totalWeight;
    var cumulative = 0;
    var prize = LUCKY_PRIZES[0];
    for (var i = 0; i < LUCKY_PRIZES.length; i++) {
      cumulative += LUCKY_PRIZES[i].weight;
      if (rand <= cumulative) { prize = LUCKY_PRIZES[i]; break; }
    }

    // Apply prize
    if (prize.type === 'discount') {
      discountCode = prize.code;   // 保存服务端折扣码
      discount = prize.discValue;  // 前端显示用
      updateCartUI();
    }

    if (prize.type === 'buff' && prize.iq) {
      totalIq += prize.iq;
      updateIqBar();
    }

    // Show result
    luckyDrawCount--;
    var resultEl = document.getElementById('luckyResult');
    resultEl.innerHTML = '<div class="lucky-title">' + prize.title + '</div>'
      + '<div class="lucky-desc">' + prize.desc + '</div>';
    resultEl.classList.add('show');

    document.getElementById('luckyRemaining').textContent = '今日剩余 ' + luckyDrawCount + ' 次抽奖机会';

    // Confetti for good prizes
    if (prize.type !== 'none') {
      burstConfetti(window.innerWidth / 2, window.innerHeight / 2, 30);
    }

    box.textContent = prize.type === 'none' ? '😢' : '🎉';
    setTimeout(function () { box.textContent = '🎁'; }, 2000);
  }, 500);
}

// ===== CONFETTI =====
function burstConfetti(x, y, count) {
  var colors = ['#ee5a24', '#f0932b', '#ffd700', '#27ae60', '#e74c3c', '#3498db'];
  var shapes = ['●', '■', '▲', '★', '🧠'];
  for (var i = 0; i < count; i++) {
    var el = document.createElement('div');
    el.className = 'confetti-piece';
    el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    el.style.left = (x + (Math.random() - 0.5) * 200) + 'px';
    el.style.top = y + 'px';
    el.style.fontSize = (Math.random() * 14 + 8) + 'px';
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (Math.random() * 1 + 1) + 's';
    el.style.animationDelay = (Math.random() * 0.3) + 's';
    document.body.appendChild(el);
    (function (elem) {
      setTimeout(function () { elem.remove(); }, 2500);
    })(el);
  }
}

// ===== TOAST =====
function showToast(msg) {
  var toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  clearTimeout(toastTimeout);
  toast.textContent = msg;
  toast.classList.remove('show');
  // Force reflow
  void toast.offsetWidth;
  toast.classList.add('show');
  toastTimeout = setTimeout(function () {
    toast.classList.remove('show');
  }, 2500);
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  var targets = { statBuyers: 99684, statIq: 12450000, statRate: 98 };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = targets[el.id];
        if (target) {
          animateNumber($(el), 0, target, 2000);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  Object.keys(targets).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
  var bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  });
}

// ===== BACK TO TOP =====
function initBackToTop() {
  var btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== BRAIN CLICK EASTER EGG =====
function initBrainClick() {
  var brain = document.querySelector('.brain-emoji');
  if (!brain) return;
  var clickCount = 0;
  brain.addEventListener('click', function () {
    clickCount++;
    if (clickCount >= 10) {
      showToast('🧠 你已经点了10次了！智商 +999 隐藏 buff 已激活！');
      totalIq += 999;
      updateIqBar();
      burstConfetti(window.innerWidth / 2, window.innerHeight / 3, 40);
      clickCount = 0;
    } else if (clickCount >= 5) {
      var msgs = ['继续点！有惊喜！', '快要激活隐藏buff了...', '你感觉智商在提升...', '脑子在发光！'];
      showToast('🧠 ' + msgs[clickCount - 5]);
    }
    burstConfetti(
      brain.getBoundingClientRect().left + 60,
      brain.getBoundingClientRect().top + 60,
      5
    );
  });
}

// ===== SEARCH & FILTER =====
function initSearchAndFilter() {
  // Search
  $(document).on('input', '#productSearch', function () {
    var query = $(this).val().toLowerCase().trim();
    if (!query) {
      renderProducts();
      return;
    }
    searchProducts(query);
  });

  // Tab filters
  $(document).on('click', '.tab-filter', function () {
    $('.tab-filter').removeClass('active');
    $(this).addClass('active');
    var filter = $(this).data('filter');
    if (filter === 'all') {
      renderProducts();
      // Show all sections
      $('#cet, #finals, #thesis').show();
    } else {
      renderProducts(filter);
      $('#cet, #finals, #thesis').each(function () {
        $(this).toggle(this.id === filter);
      });
    }
  });
}

function searchProducts(query) {
  var html = '';
  var found = false;
  for (var category in PRODUCTS) {
    PRODUCTS[category].forEach(function (p) {
      var searchable = (p.name + p.desc + p.tags.join(' ')).toLowerCase();
      if (searchable.indexOf(query) >= 0) {
        found = true;
        html += '<div class="col-lg-6 col-sm-6 buff-card">'
          + buildCard(p) + '</div>';
      }
    });
  }
  // Show results in a unified container
  $('#cet, #finals, #thesis').show();
  $('#cetProducts').html(found ? html : '<p class="text-center" style="color:rgba(255,255,255,0.3)">没有找到匹配的商品，试试别的关键词？</p>');
  $('#finalsProducts').html('');
  $('#thesisProducts').html('');
}

// ===== KEYBOARD SHORTCUTS =====
$(document).on('keydown', function (e) {
  // ESC to close modal/cart
  if (e.key === 'Escape') {
    closeModal();
    $('#cartSidebar').removeClass('active');
    $('#cartOverlay').removeClass('active');
  }
});
