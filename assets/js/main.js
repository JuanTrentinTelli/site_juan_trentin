// ── Tema ──────────────────────────────────────────────
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  updateThemeIcon(theme);
}

function toggleTheme() {
  var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
}

function initTheme() {
  var stored    = localStorage.getItem('theme');
  var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(stored || preferred);
}

// ── Header: esconde ao rolar pra baixo, aparece ao rolar pra cima ──
function initHeader() {
  var header  = document.querySelector('.header');
  if (!header) return;

  var lastY   = 0;
  var ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        var y = window.scrollY;
        header.classList.toggle('scrolled', y > 60);
        header.classList.toggle('hidden', y > lastY && y > 200);
        lastY   = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ── Barra de progresso de scroll ──────────────────────
function initScrollProgress() {
  var bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', function () {
    var total   = document.body.scrollHeight - window.innerHeight;
    var percent = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = percent + '%';
  }, { passive: true });
}

// ── Relógio em tempo real no hero ─────────────────────
function initClock() {
  var el = document.getElementById('hero-clock');
  if (!el) return;

  function tick() {
    var now = new Date();
    var iso = now.toISOString().slice(0, 19).replace('T', ' ');
    el.textContent = iso + ' UTC';
  }

  tick();
  setInterval(tick, 1000);
}

// ── Smooth scroll nos links âncora ───────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id     = link.getAttribute('href');
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Preloader ─────────────────────────────────────────
function initPreloader() {
  var el = document.getElementById('preloader');
  if (!el) return 0;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.remove();
    return 0;
  }

  document.body.style.overflow = 'hidden';

  var l1  = document.getElementById('pl-1');
  var l2  = document.getElementById('pl-2');
  var bar = el.querySelector('.pl-bar');
  var l3  = document.getElementById('pl-3');

  setTimeout(function () { l1.classList.add('show'); }, 150);
  setTimeout(function () {
    l2.classList.add('show');
    setTimeout(function () { bar.style.width = '100%'; }, 60);
  }, 400);
  setTimeout(function () { l3.classList.add('show'); }, 1020);
  setTimeout(function () {
    el.classList.add('exit');
    document.body.style.overflow = '';
    setTimeout(function () { el.remove(); }, 370);
  }, 1430);

  return 1350;
}

// ── Menu mobile ──────────────────────────────────────
function initMobileMenu() {
  var btn  = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  var links = menu.querySelectorAll('a');

  function open() {
    btn.classList.add('open');
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    btn.classList.contains('open') ? close() : open();
  });

  links.forEach(function (link) { link.addEventListener('click', close); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
}

// ── Boot ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initHeader();
  initScrollProgress();
  initClock();
  initSmoothScroll();
  initMobileMenu();
  initTerminal();

  var delay = initPreloader();
  setTimeout(initAnimations, delay);

  var toggle = document.getElementById('theme-toggle');
  if (toggle) toggle.addEventListener('click', toggleTheme);
});
