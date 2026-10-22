/* ===== DATA (add products here) ===== */
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=70`;
const IMGS = ['1617137968427-85924c800a22', '1594938298603-c8148c4dae35', '1515886657613-9f3515b0c78f', '1542272604-787c3835535d', '1542291026-7eec264c27ff', '1490481651871-ab68de25d43d', '1521572163474-6864f9cf17ab', '1434389677669-e08b4cac3105', '1548036328-c9fa89d128fa', '1596755094514-f87e34085b2c', '1503342217505-b0a15ec3261c', '1523381210434-271e8be1f52b'].map(U);
const CLOTH = ['XS', 'S', 'M', 'L', 'XL'], SHOE = ['7', '8', '9', '10', '11'], ONE = ['One size'];
const COLORS = { Black: '#111', White: '#f2f2f2', Navy: '#1c2a4a', Beige: '#c8b79a', Olive: '#5b6340', Red: '#a62b2b', Blue: '#6f8fc9', 'Teal Check': '#0d5c63' };
// P(id, name, category, subCategory, img index, alt img index, original, sale, tags, colors, gallery)
const P = (id, name, cat, sub, i, j, o, s, tags, colors, gallery) => ({
  id, name, category: cat, sub,
  image: typeof i === 'string' ? i : IMGS[i],
  image2: typeof j === 'string' ? j : IMGS[j],
  gallery: gallery || null,
  original: o, sale: s,
  sizes: cat === 'Shoes' ? SHOE : cat === 'Accessories' ? ONE : CLOTH, colors, tags,
  description: `${name}: a refined ${sub.toLowerCase()} cut from premium fabric with a clean, modern fit. Easy to style from office to evening.`
});
const PRODUCTS = [
  P(1, 'Stretch Cotton Satin Shirt', 'Men', 'Shirts', 1, 9, 3799, 1823, ['best', 'new'], ['White', 'Blue', 'Beige']),
  P(2, 'Regular Fit Geometric Shirt', 'Men', 'Shirts', 9, 1, 3499, 1749, ['best'], ['Black', 'Navy']),
  P(3, 'Boxy Plain T-Shirt', 'Men', 'T-Shirts', 6, 10, 2199, 1099, ['new'], ['White', 'Black', 'Olive']),
  P(4, 'Slim Stretch Denim', 'Men', 'Denim', 3, 0, 3299, 2299, ['best'], ['Blue', 'Black']),
  P(5, 'Tailored Wool Blazer', 'Men', 'Blazers', 'coat-1.png?v=2', 'coat-2.png?v=2', 8999, 6299, ['new'], ['Teal Check', 'Navy', 'Black'], ['coat-1.png?v=2', 'coat-2.png?v=2', 'coat-3.png?v=2', 'coat-4.png?v=2', 'coat-5.png?v=2']),
  P(6, 'Oxford Button-Down', 'Men', 'Shirts', 'shirt-1.png?v=2', 'shirt-2.png?v=2', 3999, 1599, ['best'], ['Black', 'Navy', 'White'], ['shirt-1.png?v=2', 'shirt-2.png?v=2', 'shirt-3.png?v=2', 'shirt-4.png?v=2', 'shirt-5.png?v=2']),
  P(7, 'Graphic Crew Tee', 'Men', 'T-Shirts', 10, 6, 1999, 999, ['sale'], ['Black', 'Beige']),
  P(8, 'Pleated Formal Trousers', 'Men', 'Trousers', 'pant-1.png?v=2', 'pant-2.png?v=2', 3499, 3499, ['new'], ['Black', 'Navy', 'Beige'], ['pant-1.png?v=2', 'pant-2.png?v=2']),
  P(9, 'Tailored Blazer', 'Women', 'Blazers', 2, 7, 7499, 5249, ['best', 'new'], ['Beige', 'Black']),
  P(10, 'Fluid Satin Blouse', 'Women', 'Shirts', 7, 2, 3299, 1649, ['best'], ['White', 'Red']),
  P(11, 'Wide-Leg Trousers', 'Women', 'Trousers', 5, 2, 3999, 3199, ['new'], ['Navy', 'Black']),
  P(12, 'High-Rise Straight Jeans', 'Women', 'Denim', 3, 5, 3499, 2099, ['sale', 'best'], ['Blue', 'Black']),
  P(13, 'Layered Knit Top', 'Women', 'T-Shirts', 5, 7, 2299, 2299, ['new'], ['Beige', 'White']),
  P(14, 'Court Leather Sneakers', 'Shoes', 'Sneakers', 4, 4, 5999, 3999, ['best'], ['White', 'Black']),
  P(15, 'Chelsea Boots', 'Shoes', 'Boots', 4, 3, 7999, 5599, ['new'], ['Black', 'Beige']),
  P(16, 'Structured Tote Bag', 'Accessories', 'Bags', 8, 8, 4999, 3499, ['best', 'sale'], ['Beige', 'Black']),
  P(17, 'Mini Shoulder Bag', 'Accessories', 'Bags', 8, 5, 3999, 3999, ['new'], ['Red', 'Black']),
  P(18, 'Kids Cotton Polo', 'Kids', 'T-Shirts', 10, 6, 1499, 899, ['sale'], ['Navy', 'Red']),
  P(19, 'Kids Denim Jacket', 'Kids', 'Denim', 3, 10, 2499, 1749, ['new'], ['Blue']),
  P(20, 'Oversized Wool Overcoat', 'Women', 'Blazers', 7, 2, 10999, 7699, ['sale', 'new'], ['Beige', 'Black'])
];
const CATS = [['Men', 0], ['Women', 2], ['Shirts', 9], ['T-Shirts', 6], ['Denim', 3], ['Trousers', 0], ['Shoes', 4], ['Accessories', 8]];
const SLIDES = [
  {
    kicker: 'NEW STYLES, SO MANY COLORS: OUR KNITWEAR',
    titleMain: 'COLORFUL',
    titleSerif: 'CLASSICS',
    img: 'hero-campaign.png',
    buttons: [
      { text: 'WOMEN', cat: 'Women' },
      { text: 'MEN', cat: 'Men' }
    ]
  },
  {
    kicker: 'CONTEMPORARY TAILORING & SILHOUETTES',
    titleMain: 'MODERN',
    titleSerif: 'ELEGANCE',
    i: 2,
    buttons: [
      { text: 'WOMEN', cat: 'Women' },
      { text: 'EXPLORE', cat: 'All' }
    ]
  },
  {
    kicker: 'HANDCRAFTED LEATHER & ACCESSORIES',
    titleMain: 'STEP',
    titleSerif: 'FORWARD',
    i: 4,
    buttons: [
      { text: 'SHOES', cat: 'Shoes' },
      { text: 'ACCESSORIES', cat: 'Accessories' }
    ]
  }
];

/* ===== STATE & HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ld = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d } catch { return d } };
const st = { cart: ld('mk_cart', []), wish: ld('mk_wish', []), recent: ld('mk_recent', []), q: '', cat: 'All', size: '', color: '', price: '', sale: false, sort: 'pop', onlyWish: false };
const save = () => { try { localStorage.setItem('mk_cart', JSON.stringify(st.cart)); localStorage.setItem('mk_wish', JSON.stringify(st.wish)); localStorage.setItem('mk_recent', JSON.stringify(st.recent)) } catch { } };
const inr = n => '₹' + n.toLocaleString('en-IN');
const disc = p => Math.round((1 - p.sale / p.original) * 100);
const byId = id => PRODUCTS.find(p => p.id == id);
const PH = t => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><rect width="100%" height="100%" fill="#1a1a1a"/><text x="50%" y="50%" fill="#777" font-family="sans-serif" font-size="26" text-anchor="middle">${t}</text></svg>`);
document.addEventListener('error', e => { if (e.target.tagName === 'IMG' && !e.target.dataset.f) { e.target.dataset.f = 1; e.target.src = PH(e.target.alt || 'Tanyata') } }, true);
let toastT; const toast = m => { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2000) };
const tagOf = p => disc(p) > 0 ? [`SAVE ${disc(p)}%`, 'sale'] : p.tags.includes('best') ? ['BEST SELLER', ''] : p.tags.includes('new') ? ['NEW ARRIVAL', ''] : null;

/* ===== RENDER ===== */
function card(p) {
  const t = tagOf(p), w = st.wish.includes(p.id), d = disc(p);
  return `<article class="card"><button class="pic" data-open="${p.id}" aria-label="Quick view ${p.name}">
    ${t ? `<span class="tag ${t[1]}">${t[0]}</span>` : ''}
    <img src="${p.image}" alt="${p.name}" loading="lazy"><img class="b" src="${p.image2}" alt="" loading="lazy"><span class="qa" data-add-quick="${p.id}" role="button" aria-label="Add ${p.name} to cart">ADD TO CART</span></button>
    <button class="heart ${w ? 'on' : ''}" data-wish="${p.id}" aria-label="${w ? 'Remove from' : 'Add to'} wishlist" aria-pressed="${w}"><i class="icon-wishlist-heart-empty" aria-hidden="true"><svg viewBox="0 0 24 24" width="16.8" height="16" fill="${w ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></i></button>
    <div class="info"><h4>${p.name}</h4>
    <div class="pr">${d ? `<s>${inr(p.original)}</s>` : ''}<b>${inr(p.sale)}</b></div>
    <div class="sw">${p.colors.map(c => `<i title="${c}" style="background:${COLORS[c]}"></i>`).join('')}</div></div></article>`;
}
const fill = (sel, list, empty = 'No products found.') => { $(sel).innerHTML = list.length ? list.map(card).join('') : `<p class="empty">${empty}</p>` };

function filtered() {
  let l = PRODUCTS.filter(p => {
    const q = st.q.toLowerCase();
    if (q && !(`${p.name} ${p.category} ${p.sub} ${p.description}`.toLowerCase().includes(q))) return false;
    if (st.cat !== 'All' && p.category !== st.cat && p.sub !== st.cat) return false;
    if (st.size && !p.sizes.includes(st.size)) return false;
    if (st.color && !p.colors.includes(st.color)) return false;
    if (st.price) { const [a, b] = st.price.split('-').map(Number); if (p.sale < a || p.sale >= b) return false }
    if (st.sale && !disc(p)) return false;
    if (st.onlyWish && !st.wish.includes(p.id)) return false;
    return true
  });
  const s = { pop: (a, b) => b.tags.includes('best') - a.tags.includes('best') || disc(b) - disc(a), new: (a, b) => b.tags.includes('new') - a.tags.includes('new') || b.id - a.id, lo: (a, b) => a.sale - b.sale, hi: (a, b) => b.sale - a.sale }[st.sort];
  return l.sort(s);
}
function renderShop() {
  const l = filtered();
  fill('#grid', l, st.onlyWish ? 'Your wishlist is empty. Tap the heart on any product to save it.' : 'No products match these filters. Clear a filter to see more.');
  $('#count').textContent = `Showing ${l.length} of ${PRODUCTS.length} products`;
  $('#shopTitle').textContent = st.onlyWish ? 'Your wishlist' : st.q ? `Results for “${st.q}”` : st.cat === 'All' ? 'All products' : st.cat;
  $$('.cat-nav .cat-item, .nav a').forEach(a => {
    const cat = a.dataset.cat;
    const isMatch = (cat === st.cat) || (st.cat === 'Women' && cat === 'Woman') || (st.cat === 'Men' && cat === 'Man');
    a.classList.toggle('on', isMatch);
  });
}
function renderHome() {
  fill('#newRail', PRODUCTS.filter(p => p.tags.includes('new')));
  fill('#bestGrid', PRODUCTS.filter(p => p.tags.includes('best')).slice(0, 8));
  fill('#offerGrid', PRODUCTS.filter(p => disc(p) >= 35).slice(0, 4));
  const r = st.recent.map(byId).filter(Boolean); $('#recentSec').hidden = !r.length; fill('#recentRail', r);
}
function renderAll() { renderShop(); renderHome(); $('#wishCount').textContent = st.wish.length; $('#cartCount').textContent = st.cart.reduce((n, i) => n + i.qty, 0); renderCart() }

/* Static sections */
if ($('#catGrid')) $('#catGrid').innerHTML = CATS.map(([n, i]) => `<div class="cat" tabindex="0" role="button" data-cat="${n}"><img src="${IMGS[i]}" alt="${n}" loading="lazy"><span>${n === 'Men' || n === 'Women' ? n + '’s wear' : n}</span></div>`).join('');
$$('.ed img').forEach(i => i.src = IMGS[i.dataset.i]);
const opt = (el, arr) => arr.forEach(v => el.insertAdjacentHTML('beforeend', `<option>${v}</option>`));
$('#fCat').innerHTML = '<option value="All">All categories</option>';
opt($('#fCat'), [...new Set(PRODUCTS.flatMap(p => [p.category, p.sub]))]);
opt($('#fSize'), [...new Set(PRODUCTS.flatMap(p => p.sizes))]); opt($('#fColor'), Object.keys(COLORS));

/* Hero carousel */
$('#slides').innerHTML = SLIDES.map((s, n) => `
  <div class="slide ${n ? '' : 'on'}">
    <img src="${s.img || IMGS[s.i]}" alt="Campaign: ${s.titleMain} ${s.titleSerif}">
    <div class="tx hero-center-tx">
      ${s.kicker ? `<p class="hero-kicker">${s.kicker}</p>` : ''}
      <h1 class="hero-title">
        <span class="hero-title-main">${s.titleMain}</span>
        <span class="hero-title-serif">${s.titleSerif}</span>
      </h1>
      ${s.buttons ? `
        <div class="hero-btns">
          ${s.buttons.map(b => `<button class="hero-btn" data-cat="${b.cat}">${b.text}</button>`).join('')}
        </div>
      ` : ''}
    </div>
  </div>
`).join('');
$('#dots').innerHTML = SLIDES.map((_, n) => `<button aria-label="Slide ${n + 1}" data-go="${n}"></button>`).join('');
let cur = 0, timer;
function go(n) { cur = (n + SLIDES.length) % SLIDES.length; $$('.slide').forEach((s, i) => s.classList.toggle('on', i === cur)); $$('#dots button').forEach((b, i) => b.classList.toggle('on', i === cur)); clearInterval(timer); timer = setInterval(() => go(cur + 1), 6000) }

/* ===== CART ===== */
function renderCart() {
  const b = $('#dBody'), f = $('#dFoot');
  if (!st.cart.length) { b.innerHTML = '<p class="empty">Your bag is empty.<br>Add something you love.</p>'; f.innerHTML = '<button class="btn" style="width:100%" data-close>Continue shopping</button>'; return }
  b.innerHTML = st.cart.map((i, n) => {
    const p = byId(i.id); return `<div class="row"><img src="${p.image}" alt="${p.name}"><div><b>${p.name}</b><small>${i.color} · ${i.size}</small><small>${inr(p.sale)}</small>
   <div class="qty"><button data-q="${n}" data-d="-1" aria-label="Decrease">−</button><span>${i.qty}</span><button data-q="${n}" data-d="1" aria-label="Increase">+</button></div></div><button class="ic" data-rm="${n}" aria-label="Remove">✕</button></div>`
  }).join('');
  const sub = st.cart.reduce((s, i) => s + byId(i.id).sale * i.qty, 0);
  f.innerHTML = `<div class="tot"><span>Subtotal</span><span>${inr(sub)}</span></div><button class="btn" style="width:100%" data-checkout>Checkout</button>`;
}
function addToCart(id, size, color, qty) {
  const x = st.cart.find(i => i.id === id && i.size === size && i.color === color);
  x ? x.qty += qty : st.cart.push({ id, size, color, qty }); save(); renderAll(); toast('Added to bag');
}
function toggleWish(id) { const i = st.wish.indexOf(id); i < 0 ? st.wish.push(id) : st.wish.splice(i, 1); save(); renderAll(); toast(i < 0 ? 'Added to wishlist' : 'Removed from wishlist'); }
const drawer = o => { $('#drawer').classList.toggle('on', o); $('#scrim').classList.toggle('on', o); $('#drawer').setAttribute('aria-hidden', !o) };

/* ===== PRODUCT MODAL ===== */
let sel = {};
function openProduct(id) {
  const p = byId(id); if (!p) return;
  st.recent = [id, ...st.recent.filter(x => x !== id)].slice(0, 8); save(); renderHome();
  sel = { id, size: p.sizes.length === 1 ? p.sizes[0] : '', color: p.colors[0], qty: 1 };
  const rel = PRODUCTS.filter(r => r.id !== id && (r.category === p.category || r.sub === p.sub)).slice(0, 4);
  const d = disc(p), w = st.wish.includes(id), imgs = p.gallery || [p.image, p.image2];
  $('#mBox').innerHTML = `<button class="mx" data-mclose aria-label="Close">✕</button>
  <div class="gal"><img class="main" id="mMain" src="${p.image}" alt="${p.name}"><div class="thumbs">${imgs.map((s, n) => `<img src="${s}" alt="${p.name} view ${n + 1}" data-th="${s}" tabindex="0">`).join('')}</div></div>
  <div class="det"><h3>${p.name}</h3><small>${p.category} · ${p.sub}</small>
  <div class="pr" style="font-size:18px;margin-top:8px">${d ? `<s>${inr(p.original)}</s>` : ''}<b>${inr(p.sale)}</b>${d ? `<span class="d">${d}% off</span>` : ''}</div><p>${p.description}</p>
  <b>Color: <span id="mCol">${sel.color}</span></b><div class="opts">${p.colors.map(c => `<button class="opt ${c === sel.color ? 'on' : ''}" data-col="${c}">${c}</button>`).join('')}</div>
  <b>Size</b><div class="opts">${p.sizes.map(s => `<button class="opt ${s === sel.size ? 'on' : ''}" data-size="${s}">${s}</button>`).join('')}</div><div class="err" id="mErr"></div>
  <b>Quantity</b><div><div class="qty"><button data-mq="-1" aria-label="Decrease">−</button><span id="mQty">1</span><button data-mq="1" aria-label="Increase">+</button></div></div><br>
  <button class="btn" data-add>Add to bag</button> <button class="btn ghost" data-wish="${id}" id="mWish">${w ? '♥ Saved' : '♡ Wishlist'}</button></div>
  ${rel.length ? `<div class="rel"><h3>You may also like</h3><div class="rail">${rel.map(card).join('')}</div></div>` : ''}`;
  $('#modal').hidden = false; $('#mBox .mx').focus();
}
const closeModal = () => { $('#modal').hidden = true };

/* ===== NAVIGATION TOGGLE ===== */
function toggleNav(force) {
  const hdr = $('#hdr');
  const btn = $('#menuToggle');
  const backdrop = $('#navBackdrop');
  const isOpen = typeof force === 'boolean' ? force : !hdr.classList.contains('nav-open');
  hdr.classList.toggle('nav-open', isOpen);
  if (btn) {
    btn.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Close navigation categories' : 'Open navigation categories');
  }
  if (backdrop) backdrop.classList.toggle('active', isOpen);
  if (typeof updateHeaderOnScroll === 'function') updateHeaderOnScroll();
}
function closeNav() { toggleNav(false); }

/* ===== EVENTS ===== */
function shopCat(c, sale) {
  if (c === 'Woman') c = 'Women';
  if (c === 'Man') c = 'Men';
  st.cat = c;
  st.onlyWish = false;
  st.q = '';
  $('#q').value = '';
  st.sale = !!sale;
  $('#fSale').checked = !!sale;
  $('#fCat').value = c;
  renderShop();
  closeNav();
  $('#shop').scrollIntoView();
}
document.addEventListener('click', e => {
  const t = e.target, c = s => t.closest(s);
  let el;
  if (el = c('[data-hotspot]')) {
    e.stopPropagation();
    const item = el.closest('.lookbook-hotspot-item');
    const card = item ? item.querySelector('.lookbook-card') : null;
    const wasActive = el.classList.contains('active');
    $$('.lookbook-hotspot.active').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-expanded', 'false');
    });
    $$('.lookbook-card.active').forEach(cd => cd.classList.remove('active'));
    $$('.lookbook-hotspot-item.active').forEach(it => it.classList.remove('active'));
    if (!wasActive && card) {
      el.classList.add('active');
      el.setAttribute('aria-expanded', 'true');
      card.classList.add('active');
      if (item) item.classList.add('active');
    }
    return;
  }
  if (!c('.lookbook-hotspot-item') && $$('.lookbook-card.active').length) {
    $$('.lookbook-hotspot.active').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-expanded', 'false');
    });
    $$('.lookbook-card.active').forEach(cd => cd.classList.remove('active'));
    $$('.lookbook-hotspot-item.active').forEach(it => it.classList.remove('active'));
  }
  if (el = c('[data-wish]')) { e.stopPropagation(); toggleWish(+el.dataset.wish); if (!$('#modal').hidden && $('#mWish')) $('#mWish').textContent = st.wish.includes(sel.id) ? '♥ Saved' : '♡ Wishlist'; return }
  if (el = c('[data-add-quick]')) { e.stopPropagation(); e.preventDefault(); const p = byId(+el.dataset.addQuick); if (p) { addToCart(p.id, p.sizes[0], p.colors[0], 1); drawer(true) } return }
  if (el = c('[data-open]')) return openProduct(+el.dataset.open);
  if (el = c('[data-cat]')) { e.preventDefault(); return shopCat(el.dataset.cat, el.dataset.sale) }
  if (el = c('[data-go]')) return go(+el.dataset.go);
  if (el = c('[data-th]')) return $('#mMain').src = el.dataset.th;
  if (el = c('[data-col]')) { sel.color = el.dataset.col; $('#mCol').textContent = sel.color; return $$('[data-col]').forEach(b => b.classList.toggle('on', b === el)) }
  if (el = c('[data-size]')) { sel.size = el.dataset.size; $('#mErr').textContent = ''; return $$('[data-size]').forEach(b => b.classList.toggle('on', b === el)) }
  if (el = c('[data-mq]')) { sel.qty = Math.max(1, sel.qty + +el.dataset.mq); return $('#mQty').textContent = sel.qty }
  if (c('[data-add]')) { if (!sel.size) return $('#mErr').textContent = 'Select a size to continue.'; addToCart(sel.id, sel.size, sel.color, sel.qty); closeModal(); return drawer(true) }
  if (c('[data-mclose]') || t.id === 'modal') return closeModal();
  if (el = c('[data-q]')) { const i = st.cart[+el.dataset.q]; i.qty += +el.dataset.d; if (i.qty < 1) st.cart.splice(+el.dataset.q, 1); save(); return renderAll() }
  if (el = c('[data-rm]')) { st.cart.splice(+el.dataset.rm, 1); save(); return renderAll() }
  if (c('[data-checkout]')) return toast('Demo only — checkout is not connected');
  if (c('[data-close]')) return drawer(false);
  if (el = c('.ftr-acc-btn')) {
    e.preventDefault();
    const item = el.closest('.ftr-acc-item');
    if (item) {
      const isOpen = item.classList.contains('on');
      item.classList.toggle('on', !isOpen);
      el.setAttribute('aria-expanded', !isOpen);
    }
    return;
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeNav();
    closeModal();
    drawer(false);
    $$('.lookbook-hotspot.active').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-expanded', 'false'); });
    $$('.lookbook-card.active').forEach(cd => cd.classList.remove('active'));
    $$('.lookbook-hotspot-item.active').forEach(it => it.classList.remove('active'));
  }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('cat')) { e.preventDefault(); e.target.click() }
});
$('#next').onclick = () => go(cur + 1); $('#prev').onclick = () => go(cur - 1);
$('#bagBtn').onclick = () => drawer(true); $('#dClose').onclick = $('#scrim').onclick = () => drawer(false);
if ($('#menuToggle')) $('#menuToggle').onclick = (e) => { e.stopPropagation(); toggleNav(); };
if ($('#navBackdrop')) $('#navBackdrop').onclick = closeNav;
$('#wishBtn').onclick = () => { st.onlyWish = !st.onlyWish; renderShop(); $('#shop').scrollIntoView() };
$('#loginBtn').onclick = () => toast('Account login is not part of this demo');
$('#searchForm').onsubmit = e => { e.preventDefault(); st.q = $('#q').value.trim(); st.cat = 'All'; st.onlyWish = false; renderShop(); $('#shop').scrollIntoView() };
$('#q').oninput = e => { st.q = e.target.value.trim(); renderShop() };
[['fCat', 'cat'], ['fSize', 'size'], ['fColor', 'color'], ['fPrice', 'price'], ['sort', 'sort']].forEach(([id, k]) => $('#' + id).onchange = e => { st[k] = e.target.value; renderShop() });
$('#fSale').onchange = e => { st.sale = e.target.checked; renderShop() };
$('#reset').onclick = () => { Object.assign(st, { q: '', cat: 'All', size: '', color: '', price: '', sale: false, onlyWish: false }); $$('.filters select').forEach(s => s.selectedIndex = 0); $('#fSale').checked = false; $('#q').value = ''; renderShop() };
$('#news').onsubmit = e => { e.preventDefault(); e.target.reset(); toast('Thanks for subscribing') };
/* ===== SMART HEADER SCROLL (TRANSPARENT AT TOP, HIDE DOWN, BLACK UP) ===== */
let lastScrollY = window.scrollY;
function updateHeaderOnScroll() {
  const hdr = $('#hdr');
  if (!hdr) return;
  const y = window.scrollY;
  const isNavOpen = hdr.classList.contains('nav-open');

  if (isNavOpen) {
    hdr.classList.remove('hdr--hidden');
    hdr.classList.add('hdr--black');
    hdr.classList.remove('hdr--transparent');
    return;
  }

  // At the very top (hero section) -> transparent
  if (y <= 15) {
    hdr.classList.remove('hdr--hidden');
    hdr.classList.remove('hdr--black');
    hdr.classList.add('hdr--transparent');
  } else {
    const diff = y - lastScrollY;
    // Scrolling DOWNWARDS: hide header (goes up)
    if (diff > 5 && y > 60) {
      hdr.classList.add('hdr--hidden');
    }
    // Scrolling UPWARDS: reveal header in black colour
    else if (diff < -5) {
      hdr.classList.remove('hdr--hidden');
      hdr.classList.add('hdr--black');
      hdr.classList.remove('hdr--transparent');
    }
  }

  lastScrollY = y;
}

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

renderAll(); go(0);