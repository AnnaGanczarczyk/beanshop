// BeanShop: wspolne funkcje frontendu
(() => {
const money = (v) => `${Number(v).toFixed(2).replace('.', ',')} zł`;

async function api(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) throw Object.assign(new Error(data?.message ?? 'Błąd'), { status: res.status, data });
  return data;
}

function toast(message) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2000);
}

// Symulacja opoznienia sieci przy odswiezaniu licznika koszyka (150-700 ms)
const simulatedLatency = () => 150 + Math.floor(Math.random() * 550);

async function refreshBadge() {
  const badge = document.querySelector('[data-testid="cart-count"]');
  if (!badge) return;
  try {
    const cart = await api('/cart');
    badge.textContent = String(cart.items.reduce((n, i) => n + i.quantity, 0));
  } catch {
    badge.textContent = '0';
  }
}

async function renderHeader() {
  const nav = document.querySelector('header nav');
  let me = null;
  try { me = await api('/auth/me'); } catch { /* niezalogowany */ }
  nav.innerHTML = `
    <a href="/">Sklep</a>
    <a href="/cart">Koszyk <span class="badge" data-testid="cart-count">0</span></a>
    ${me ? `<a href="/orders">Zamówienia</a><span data-testid="user-name">${me.name}</span><a href="#" id="logout">Wyloguj</a>`
         : `<a href="/login">Zaloguj</a><a href="/register">Załóż konto</a>`}`;
  document.getElementById('logout')?.addEventListener('click', async (e) => {
    e.preventDefault();
    await api('/auth/logout', { method: 'POST' });
    location.href = '/';
  });
  if (me) await refreshBadge();
  return me;
}

window.BeanShop = { api, money, toast, refreshBadge, renderHeader, simulatedLatency };
})();
