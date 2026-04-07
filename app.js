// ===== PRODUCT DATA =====
const PRODUCTS = {
  cet: [
    { id: 'einstein-en', emoji: '🧠', name: '爱因斯坦的脑子・英语加强版', desc: '通用智商 +1000，四六级阅读秒懂，听力全对，写作直接出满分范文', price: 0.5, tags: ['全网爆款', '自带流量'], iq: 1000 },
    { id: 'chenlin', emoji: '🎓', name: '陈琳的英语脑', desc: '外语教育家陈琳专属 buff，口语发音 native，翻译不踩坑', price: 0.6, tags: ['国内名人', '认知度高'], iq: 800 },
    { id: 'liyang', emoji: '📢', name: '李阳疯狂英语脑', desc: '疯狂背单词 buff，词汇量瞬间拉满，作文金句信手拈来', price: 0.3, tags: ['怀旧梗', '传播力强'], iq: 600 },
    { id: 'yuminhong', emoji: '📚', name: '俞敏洪的词汇脑', desc: '新东方创始人专属，单词过目不忘，阅读长难句秒解', price: 0.8, tags: ['考研四六级', '认知度拉满'], iq: 900 },
    { id: 'shakespeare', emoji: '✒️', name: '莎士比亚的文豪脑', desc: '写作 buff 拉满，高级词汇直接用，阅卷老师直接给满分', price: 1.0, tags: ['文化梗', '逼格拉满'], iq: 1200 }
  ],
  finals: [
    { id: 'gauss', emoji: '📐', name: '高斯的脑子・数学王子版', desc: '通用智商 +1000，高数/线代/概率论秒解，计算题全对', price: 0.06, tags: ['数学之神', '理工刚需'], iq: 1000 },
    { id: 'huaronggeng', emoji: '🧮', name: '华罗庚的脑子', desc: '通用智商 +100，数理化全科目 buff，期末不挂科', price: 0.02, tags: ['国产大师', '性价比款'], iq: 100 },
    { id: 'zuchongzhi', emoji: '📏', name: '祖冲之的脑子', desc: '计算精度拉满，计算题零失误，理科考试稳过', price: 0.02, tags: ['历史名人', '玩梗属性'], iq: 500 },
    { id: 'qianzhongshu', emoji: '📖', name: '钱钟书的过目不忘脑', desc: '记忆力 +1000，文科知识点全记住，背题秒会', price: 0.99, tags: ['文科专属', '记忆拉满'], iq: 1000 },
    { id: 'weidongyi', emoji: '🏆', name: '韦东奕的数学脑', desc: '北大韦神专属，高数难题直接秒，期末满绩不是梦', price: 1.99, tags: ['当代网红', '自带流量'], iq: 1500 }
  ],
  thesis: [
    { id: 'einstein-res', emoji: '🔬', name: '爱因斯坦的脑子・科研版', desc: '科研思维拉满，论文创新点直接有，答辩对答如流', price: 0.01, tags: ['万能款', '全学科适用', '可批量100份'], iq: 10, batchMax: 100 },
    { id: 'tuyouyou', emoji: '💊', name: '屠呦呦的科研脑', desc: '实验数据零误差，论文查重率为 0，导师疯狂点赞', price: 1.99, tags: ['诺奖得主', '学术权威'], iq: 1800 },
    { id: 'yuanlongping', emoji: '🌾', name: '袁隆平的实干脑', desc: '论文逻辑严谨，答辩不卡壳，评委全票通过', price: 1.99, tags: ['国民科学家', '情怀在线'], iq: 1600 },
    { id: 'qianxuesen', emoji: '🚀', name: '钱学森的学术脑', desc: '跨学科科研 buff，论文深度拉满，答辩直接封神', price: 2.99, tags: ['高端款', '硕博专属'], iq: 2500 },
    { id: 'luxun', emoji: '🖊️', name: '鲁迅的文豪脑', desc: '论文写作逻辑拉满，摘要/结论直接封神，审稿人秒过', price: 0.99, tags: ['文科社科', '写作Buff'], iq: 900 }
  ]
};

const REVIEWS = [
  { name: '匿名学霸', avatar: '🦊', stars: 5, text: '买了爱因斯坦脑子，四级居然真的过了！虽然不知道是不是玄学，但心态确实稳了哈哈', item: '爱因斯坦的脑子・英语加强版', time: '2小时前' },
  { name: '期末战士', avatar: '🐺', stars: 5, text: '高数挂了三年，今年买了高斯的脑子，61分飘过！！！感谢高斯！！！', item: '高斯的脑子・数学王子版', time: '5小时前' },
  { name: '论文难民', avatar: '🐱', stars: 4, text: '买了鲁迅文豪脑，论文写作确实顺了很多（也可能是熬夜效果）总之过了！', item: '鲁迅的文豪脑', time: '1天前' },
  { name: '卷王本王', avatar: '🦁', stars: 5, text: '一口气买了100份爱因斯坦科研版，智商直接+1000，导师问我最近是不是开窍了', item: '爱因斯坦的脑子・科研版', time: '2天前' },
  { name: '六级难民', avatar: '🐰', stars: 5, text: '四六级考前拜了莎士比亚，写作果然用上了好几个高级词汇，感谢文豪！', item: '莎士比亚的文豪脑', time: '3天前' },
  { name: '韦神粉丝', avatar: '🐻', stars: 5, text: '韦东奕的脑子也太好用了吧！！线代直接满分好吧（手动狗头）', item: '韦东奕的数学脑', time: '3天前' }
];

// ===== STATE =====
let cart = [];
let totalIq = 0;

// ===== INIT =====
$(document).ready(function () {
  renderProducts();
  renderReviews();
  initCart();
  animateCounters();
  // Re-trigger wow.js for dynamically added elements
  setTimeout(function () {
    new WOW({ scrollContainer: null }).init();
  }, 200);
});

// ===== RENDER PRODUCTS =====
function renderProducts() {
  // CET - 5 items in col-6 (2 per row)
  var cetHtml = '';
  PRODUCTS.cet.forEach(function (p, i) {
    cetHtml += '<div class="col-lg-6 col-sm-6 buff-card wow fadeInUp" data-wow-duration="1s" data-wow-delay="' + (0.3 + i * 0.1) + 's">'
      + buildCard(p) + '</div>';
  });
  $('#cetProducts').html(cetHtml);

  // Finals - service items layout (2 per row)
  var finalsHtml = '';
  PRODUCTS.finals.forEach(function (p, i) {
    finalsHtml += '<div class="col-lg-6 col-sm-6 buff-card wow fadeIn" data-wow-duration="1s" data-wow-delay="' + (0.5 + i * 0.2) + 's">'
      + buildCard(p) + '</div>';
  });
  $('#finalsProducts').html(finalsHtml);

  // Thesis - 2 per row
  var thesisHtml = '';
  PRODUCTS.thesis.forEach(function (p, i) {
    thesisHtml += '<div class="col-lg-6 col-sm-6 buff-card wow fadeInUp" data-wow-duration="1s" data-wow-delay="' + (0.3 + i * 0.1) + 's">'
      + buildCard(p) + '</div>';
  });
  $('#thesisProducts').html(thesisHtml);
}

function buildCard(p) {
  var tags = p.tags.map(function (t) { return '<span class="buff-tag">' + t + '</span>'; }).join('');
  return '<div class="buff-card-inner">'
    + '<div class="buff-emoji">' + p.emoji + '</div>'
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
    html += '<div class="col-lg-4 col-sm-6 review-card wow fadeInUp" data-wow-duration="1s" data-wow-delay="' + (0.3 + i * 0.15) + 's">'
      + '<div class="review-card-inner">'
      + '<div class="review-header">'
      + '<div class="review-avatar">' + r.avatar + '</div>'
      + '<div><div class="review-name">' + r.name + '</div><div class="review-time">' + r.time + '</div></div>'
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
  addToCart(product);
  // Button feedback
  var btn = $(this);
  btn.text('✓ 已添加').addClass('added');
  setTimeout(function () { btn.text('加入购物车').removeClass('added'); }, 1500);
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
  var total = cart.reduce(function (s, c) { return s + c.price * c.qty; }, 0);
  totalIq = cart.reduce(function (s, c) { return s + c.iq * c.qty; }, 0);

  $('#cartCount').text(count);
  $('#cartTotal').text('¥' + total.toFixed(2));

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
function showCheckoutModal() {
  var total = cart.reduce(function (s, c) { return s + c.price * c.qty; }, 0);
  var itemsHtml = cart.map(function (c) {
    return '<div class="checkout-item"><span>' + c.emoji + ' ' + c.name + ' × ' + c.qty + '</span><span>¥' + (c.price * c.qty).toFixed(2) + '</span></div>';
  }).join('');

  var html = '<div class="checkout-summary">'
    + '<h3>⚡ 确认订单</h3>'
    + itemsHtml
    + '<div class="checkout-total"><span>合计</span><span>¥' + total.toFixed(2) + '</span></div>'
    + '</div>'
    + '<div class="checkout-payment">'
    + '<p>扫码支付（模拟）</p>'
    + '<div class="qr-placeholder">📱 支付二维码占位<br>（接入微信/支付宝后替换）<br><br>💰 ¥' + total.toFixed(2) + '</div>'
    + '<button class="main-button" onclick="simulatePayment()">💰 模拟支付成功</button>'
    + '<p class="checkout-note">⚠️ 虚拟娱乐商品，无实际功效，不保证考试通过</p>'
    + '</div>';

  $('#modalBody').html(html);
  openModal();
}

function simulatePayment() {
  closeModal();
  setTimeout(function () { showCertificate(); cart = []; updateCartUI(); }, 500);
}

// ===== BUFF CERTIFICATE =====
function showCertificate() {
  var html = '<div class="cert">'
    + '<div class="cert-header">✦ BUFF 已生效 ✦</div>'
    + '<div class="cert-title">🧠 学霸脑子加持证书</div>'
    + '<div class="cert-canvas-wrap"><canvas id="certCanvas" width="600" height="400"></canvas></div>'
    + '<div class="cert-actions">'
    + '<button class="main-button" onclick="downloadCert()">💾 保存证书</button>'
    + '<button class="main-button" onclick="closeModal()" style="background:#555">关闭</button>'
    + '</div></div>';
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
  grad.addColorStop(0.5, '#0b0e1a');
  grad.addColorStop(1, '#0a1628');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Border
  ctx.strokeStyle = '#ee5a24';
  ctx.lineWidth = 3;
  ctx.strokeRect(15, 15, w - 30, h - 30);
  ctx.strokeStyle = 'rgba(238,90,36,0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(25, 25, w - 50, h - 50);

  // Stars
  ctx.font = '20px serif';
  ctx.fillStyle = '#ffd700';
  ctx.textAlign = 'center';
  ctx.fillText('✦', 40, 50);
  ctx.fillText('✦', w - 40, 50);
  ctx.fillText('✦', 40, h - 30);
  ctx.fillText('✦', w - 40, h - 30);

  // Subtitle
  ctx.font = '600 14px sans-serif';
  ctx.fillStyle = '#ee5a24';
  ctx.fillText('✦ 非官方认证 ✦', w / 2, 68);

  // Title
  ctx.font = '900 32px sans-serif';
  ctx.fillStyle = '#ee5a24';
  ctx.fillText('学霸脑子加持证书', w / 2, 115);

  // Brain emoji
  ctx.font = '60px serif';
  ctx.fillText('🧠', w / 2, 185);

  // Info
  ctx.font = '500 16px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('加持智商: +' + totalIq.toLocaleString(), w / 2, 230);
  ctx.fillText('购买时间: ' + new Date().toLocaleString('zh-CN'), w / 2, 260);
  ctx.fillText('证书编号: BUFF-' + Date.now().toString(36).toUpperCase(), w / 2, 290);

  // Footer
  ctx.font = '14px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.fillText('本证书为虚拟娱乐内容，无实际功效', w / 2, 340);
  ctx.fillText('心诚则灵 · 不是裸考', w / 2, 365);
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

// ===== MODAL =====
function openModal() { $('#modalOverlay').addClass('active'); }
function closeModal() { $('#modalOverlay').removeClass('active'); }
$('#modalClose').on('click', closeModal);
$('#modalOverlay').on('click', function (e) {
  if (e.target === this) closeModal();
});

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

// ===== TOAST =====
function showToast(msg) {
  var toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function () { toast.classList.remove('show'); }, 2500);
}
