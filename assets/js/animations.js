function scrambleText(el, text, duration, onDone) {
  var pool  = '0123456789ABCDEF!@#$%&?<>/\\';
  var total = Math.ceil(duration / 16);
  var frame = 0;

  function tick() {
    frame++;
    var locked = Math.floor((frame / total) * text.length);
    var out = '';
    for (var i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        out += ' ';
      } else if (i < locked) {
        out += text[i];
      } else {
        out += pool[Math.floor(Math.random() * pool.length)];
      }
    }
    el.textContent = out;
    if (locked < text.length) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = text;
      if (onDone) onDone();
    }
  }

  requestAnimationFrame(tick);
}

function initAnimations() {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Canvas de fundo roda independente do GSAP
  if (!reducedMotion) initHeroBg();

  // Se GSAP não carregou (offline / CDN blocked), não faz nada.
  // O conteúdo já está visível via CSS — sem dependência de JS para legibilidade.
  if (typeof gsap === 'undefined') return;

  if (reducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  // ── Hero name: fade + scramble simultâneos ──
  var heroNameEl = document.querySelector('.hero-name-text');
  if (heroNameEl) {
    var finalText = heroNameEl.textContent.trim();

    gsap.from(heroNameEl, {
      opacity: 0,
      y: 24,
      duration: 0.4,
      ease: 'power2.out',
      clearProps: 'all',
    });

    scrambleText(heroNameEl, finalText, 1100);
  }

  // ── Hero: blocos em sequência ──
  gsap.from([
    '.hero-label',
    '.hero-subtitle',
    '.hero-paragraph',
    '.hero-location',
    '.hero-meta',
    '.scroll-indicator',
  ].join(','), {
    opacity: 0,
    y: 24,
    stagger: 0.09,
    duration: 0.55,
    ease: 'power2.out',
    delay: 0.75,
    clearProps: 'all',
  });

  // ── Scramble nos textos do hero (delay espelha o stagger do GSAP) ──
  var scrambleTargets = [
    { sel: '.hero-label',    delay: 750,  dur: 600 },
    { sel: '.hero-subtitle', delay: 840,  dur: 850 },
    { sel: '.hero-location', delay: 1020, dur: 500 },
    { sel: '.cta-primary',   delay: 1110, dur: 380 },
    { sel: '.cta-ghost',     delay: 1200, dur: 380 },
  ];

  scrambleTargets.forEach(function (t) {
    var el = document.querySelector(t.sel);
    if (!el) return;
    var savedHTML = el.innerHTML;
    var plainText = el.textContent.trim();
    setTimeout(function () {
      scrambleText(el, plainText, t.dur, function () {
        el.innerHTML = savedHTML;
      });
    }, t.delay);
  });

  // ── Scroll-triggered fade-ups (elementos individuais) ──
  // Elementos dentro de stagger-groups são excluídos para evitar conflito.
  var staggerSelectors = '.projects-grid, .projects-github-grid, .certs-grid, .exp-cards';
  gsap.utils.toArray('.fade-up').forEach(function (el) {
    if (el.closest(staggerSelectors)) return;
    gsap.from(el, {
      opacity: 0,
      y: 28,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'all',
      scrollTrigger: {
        trigger: el,
        start: 'top 86%',
        once: true,
      },
    });
  });

  // ── Stagger nas grids ──
  var staggerGroups = [
    { container: '.exp-cards',            items: '.exp-card',      stagger: 0.10 },
    { container: '.projects-grid',        items: '.project-card',  stagger: 0.09 },
    { container: '.projects-github-grid', items: '.proj-github',   stagger: 0.10 },
    { container: '.certs-grid',           items: '.cert-item',     stagger: 0.04 },
  ];

  staggerGroups.forEach(function (g) {
    var container = document.querySelector(g.container);
    if (!container) return;
    var items = container.querySelectorAll(g.items);
    if (!items.length) return;

    gsap.from(items, {
      opacity: 0,
      y: 28,
      duration: 0.55,
      ease: 'power2.out',
      stagger: g.stagger,
      clearProps: 'all',
      scrollTrigger: {
        trigger: container,
        start: 'top 82%',
        once: true,
      },
    });
  });

  // ── Auto-typing no terminal ──
  initTerminalAutoType();

  // ── Cursor customizado (apenas desktop) ──
  if (!window.matchMedia('(pointer: coarse)').matches) {
    initCursor();
    initMagneticButtons();
  }
}

function initTerminalAutoType() {
  var section = document.getElementById('terminal');
  var input   = document.getElementById('terminal-input');
  if (!section || !input) return;

  ScrollTrigger.create({
    trigger: section,
    start: 'top 65%',
    once: true,
    onEnter: function () {
      input.value = '';
      var cmd = 'whoami';
      var i   = 0;

      setTimeout(function type() {
        if (i < cmd.length) {
          input.value += cmd[i++];
          setTimeout(type, 55 + Math.random() * 40);
        } else {
          setTimeout(function () {
            input.dispatchEvent(new KeyboardEvent('keydown', {
              key: 'Enter', code: 'Enter', keyCode: 13,
              bubbles: true, cancelable: true,
            }));
          }, 260);
        }
      }, 700);
    },
  });
}

function initMagneticButtons() {
  var strength = 0.32;

  document.querySelectorAll('.cta-primary, .cta-ghost').forEach(function (btn) {
    var xTo = gsap.quickTo(btn, 'x', { duration: 0.3, ease: 'power2.out' });
    var yTo = gsap.quickTo(btn, 'y', { duration: 0.3, ease: 'power2.out' });

    btn.addEventListener('mousemove', function (e) {
      var r  = btn.getBoundingClientRect();
      var cx = r.left + r.width  / 2;
      var cy = r.top  + r.height / 2;
      xTo((e.clientX - cx) * strength);
      yTo((e.clientY - cy) * strength);
    });

    btn.addEventListener('mouseleave', function () {
      gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

function initCursor() {
  var cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursor);

  // xPercent/yPercent fazem o centramento — GSAP gerencia tudo junto,
  // sem conflito com o transform que seria definido no CSS.
  gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

  var xTo = gsap.quickTo(cursor, 'x', { duration: 0.16, ease: 'power2.out' });
  var yTo = gsap.quickTo(cursor, 'y', { duration: 0.16, ease: 'power2.out' });

  var visible = false;

  document.addEventListener('mousemove', function (e) {
    xTo(e.clientX);
    yTo(e.clientY);
    if (!visible) {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
      visible = true;
    }
  });

  document.addEventListener('mouseleave', function () {
    gsap.to(cursor, { opacity: 0, duration: 0.2 });
    visible = false;
  });

  document.addEventListener('mouseenter', function () {
    gsap.to(cursor, { opacity: 1, duration: 0.2 });
    visible = true;
  });

  function addLinkHover(selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('on-link'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('on-link'); });
    });
  }

  addLinkHover('a');
  addLinkHover('button');

  document.querySelectorAll('.project-card').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      cursor.classList.remove('on-link');
      cursor.classList.add('expanded');
    });
    el.addEventListener('mouseleave', function () {
      cursor.classList.remove('expanded');
    });
  });
}

// ── Hero background: linhas de código flutuantes ──────
function initHeroBg() {
  var canvas = document.getElementById('hero-bg');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');

  var snippets = [
    '> sys.init()', 'import flask', 'SELECT * FROM pedidos',
    'pfSense.rules.add()', 'ssh root@192.168.1.1', 'nmap -sV -sC',
    'python3 dashboard.py', 'def pentest(target):', '#!/bin/bash',
    'git commit -m "fix"', 'curl -X POST /api', 'DROP TABLE IF EXISTS',
    'grep -rn "vuln"', 'nc -lvnp 4444', 'import cx_Oracle',
    'report.cvss(7.8)', 'hashcat -m 1000', 'hydra -l admin',
    'chmod +x exploit.py', 'docker run --rm', 'iptables -A INPUT',
    'ollama run llama3', 'SELECT uid, pass', 'tcpdump -i eth0',
    'sqlmap -u target', 'msfconsole -q', 'ping -c 4 gateway',
  ];

  var particles = [];
  var raf;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    build();
  }

  function build() {
    particles = [];
    var count = Math.floor((canvas.width * canvas.height) / 22000);
    count = Math.max(16, Math.min(count, 40));

    for (var i = 0; i < count; i++) {
      particles.push(spawn(true));
    }
  }

  function spawn(randomY) {
    var size = 10 + Math.random() * 3;
    return {
      x:       Math.random() * canvas.width,
      y:       randomY ? Math.random() * canvas.height : canvas.height + 20,
      speed:   0.18 + Math.random() * 0.22,
      opacity: 0.016 + Math.random() * 0.020,
      size:    size,
      text:    snippets[Math.floor(Math.random() * snippets.length)],
    };
  }

  function getColor() {
    var isDark = document.documentElement.dataset.theme !== 'light';
    return isDark ? '212, 175, 55' : '100, 75, 0';
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var isDark = document.documentElement.dataset.theme !== 'light';
    var color  = getColor();
    ctx.font = '400 12px "JetBrains Mono", monospace';
    ctx.textBaseline = 'top';

    particles.forEach(function (p) {
      ctx.globalAlpha = isDark ? p.opacity : p.opacity * 4;
      ctx.fillStyle   = 'rgb(' + color + ')';
      ctx.fillText(p.text, p.x, p.y);

      p.y -= p.speed;

      if (p.y < -20) {
        var fresh = spawn(false);
        p.x       = fresh.x;
        p.y       = fresh.y;
        p.speed   = fresh.speed;
        p.opacity = fresh.opacity;
        p.text    = fresh.text;
      }
    });

    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  }

  resize();
  draw();

  window.addEventListener('resize', function () {
    cancelAnimationFrame(raf);
    resize();
    draw();
  }, { passive: true });
}
