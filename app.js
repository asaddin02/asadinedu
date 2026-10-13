// Asadin Edu landing: language switch, header state, the four-worlds preview, mobile menu and reveals.
// Loaded in <head> (small, no dependencies) so the reveal state is set before first paint.
(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');

  const EN = {
    skip: 'Skip to content',
    'nav.worlds': 'Four worlds',
    'nav.principles': 'Principles',
    'nav.founder': 'Founder',
    'nav.support': 'Support',
    'nav.menu': 'Menu',
    'lang.group': 'Language',
    'hero.eyebrow': 'Independent education institution · since 2026',
    'hero.title.a': 'Four worlds of knowledge.',
    'hero.title.b': 'One door, always open.',
    'hero.lede': 'Asadin Edu was founded by Prasada Arif Nurudin to make learning easier and more affordable. We build interactive learning spaces for pupils from primary school to university, and for their teachers: free, ad-free, no account needed, and every fact sourced.',
    'hero.cta': 'Explore the four worlds',
    'hero.cta2': 'Meet the founder',
    'w.bio.field': 'Biology · the world of living things',
    'w.chem.field': 'Chemistry · the world of matter and change',
    'w.phys.field': 'Physics · the world of force, energy and light',
    'w.myth.field': 'Mythology · the world of stories and legendary beings',
    'loka.kicker': 'Why “-loka”?',
    'loka.text': '<em>Loka</em> means world or realm. Each of our learning spaces is a world you can explore on your own: <span class="hl hl--bio">life</span>, <span class="hl hl--chem">chemistry</span>, <span class="hl hl--phys">physics</span> and <span class="hl hl--myth">myth</span>. The door is the same for everyone. No sign-up, no fee.',
    'worlds.kicker': 'Four worlds',
    'worlds.title': 'Each one complete, levelled and sourced.',
    code: 'Source code',
    'w.bio.short': 'Biology',
    'w.bio.lede': 'An open atlas of life. Explore millions of species from GBIF and iNaturalist, a tree of life down to species level, and biology lessons that follow your school level.',
    'w.bio.f1': 'topics across 8 fields of biology, written in four layers from primary school to university',
    'w.bio.f2': 'curated species cards in plain language',
    'w.bio.f3': 'virtual labs, from photosynthesis to the genetic code',
    'w.bio.f4': 'learning modes: primary, junior high, senior high, university and teacher',
    'w.bio.cta': 'Open Biotaloka',
    'w.chem.short': 'Chemistry',
    'w.chem.lede': 'An interactive chemistry encyclopedia, from matter and atoms to reactions. Scientific values come from reference bodies such as IUPAC, PubChem and NIST, each with its source.',
    'w.chem.f1': 'elements with IUPAC standard atomic weights and their natural isotopes',
    'w.chem.f2': 'nuclides, plus 60 ions and 76 balanced reactions',
    'w.chem.f3': 'curated molecules and materials, plus search across 100+ million PubChem compounds',
    'w.chem.f4': 'virtual labs and 29 levelled lessons',
    'w.chem.cta': 'Open Kimialoka',
    'w.phys.short': 'Physics',
    'w.phys.lede': 'A physics learning space in Indonesian. Every lesson moves from intuition to explanation, worked examples, activities and a quiz, with the assumptions and limits of each model stated plainly.',
    'w.phys.f1': 'lessons across primary, junior high, senior high, university and teacher paths',
    'w.phys.f2': 'labs: projectiles, pendulum, Doppler, orbits, DC circuits and more',
    'w.phys.f3': 'connected domains of physics',
    'w.phys.f4': 'equations, 14 of them with a calculator',
    'w.phys.cta': 'Open Fisikaloka',
    'w.myth.short': 'Mythology',
    'w.myth.lede': 'An encyclopedia of mythological and folkloric beings from many civilisations. Every entry rests on quoted sources, separates authentic tradition from pop culture, and respects beliefs that are still alive.',
    'w.myth.f1': 'beings with complete research and reviewed illustrations',
    'w.myth.f2': 'cultural traditions, from the Indonesian archipelago to the Andes',
    'w.myth.f3': 'languages: Indonesian and English',
    'w.myth.f4': 'learning guides, opening with “The humans behind every creature”',
    'w.myth.cta': 'Open Mitoloka',
    'pr.kicker': 'Principles',
    'pr.title': 'How we build learning spaces.',
    'pr.1.t': 'Affordable means no barriers',
    'pr.1.p': 'Free, no ads, no accounts and no analytics. The sites are built to be light so they open comfortably on a phone. Your study notes stay on your own device.',
    'pr.2.t': 'Every fact has a source',
    'pr.2.p': 'Values, claims and images link to their references: IUPAC, GBIF, iNaturalist, OpenStax, Wikidata and other institutions. What is not yet available is marked, never invented.',
    'pr.3.t': 'One topic, many levels',
    'pr.3.p': 'The same topic is written in layers, from a primary pupil’s language to university depth, and teachers get learning goals, assessments and print-ready material.',
    'pr.4.t': 'Open to inspection',
    'pr.4.p': 'The code of all four projects is open on GitHub. Anyone may check how it works, report a mistake or use it in class.',
    'f.alt': 'Prasada Arif Nurudin, founder of Asadin Edu',
    'f.caption': 'Founder of Asadin Edu',
    'f.kicker': 'Founder',
    'f.role': 'Software developer · IT coordinator at Rahoclub, Surabaya',
    'f.p1': 'Prasada founded Asadin Edu as an independent institution with one aim: to put clear, accurate learning material within reach of everyone, from classrooms in big cities to homes in remote villages.',
    'f.p2': 'After more than four years building mobile apps, backends and ERP systems, he now designs the four worlds of Asadin Edu, from source research to interfaces that are friendly to children.',
    'f.site': 'Visit his personal site',
    's.kicker': 'Support',
    's.title': 'Help keep the door open.',
    's.text': 'Asadin Edu shows no ads and sells no data. Voluntary support helps pay for research, illustration and servers. Every lesson stays free, with or without your support.',
    's.local': 'From Indonesia',
    's.local.hint': 'For support in rupiah',
    's.intl': 'International',
    's.intl.hint': 'For support from abroad',
    'ft.about': 'Independent education institution. Pasuruan, East Java, Indonesia.',
    'ft.contact': 'Contact',
    'ft.founder': 'Founder’s site',
    'ft.top': 'Back to top',
  };
  const META = {
    id: {
      title: 'Asadin Edu — Empat dunia ilmu, terbuka untuk semua',
      description: document.querySelector('meta[name="description"]')?.content || '',
      brand: 'Asadin Edu, beranda',
      nav: 'Navigasi utama',
    },
    en: {
      title: 'Asadin Edu — Four worlds of knowledge, open to all',
      description: 'Asadin Edu is an independent education institution founded by Prasada Arif Nurudin. Biotaloka, Kimialoka, Fisikaloka and Mitoloka: biology, chemistry, physics and mythology learning spaces from primary school to university, free, ad-free and with no account.',
      brand: 'Asadin Edu, home',
      nav: 'Main navigation',
    },
  };

  const KEY = 'asadinedu-lang';
  const readLang = () => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'id' || saved === 'en') return saved;
    } catch {}
    const nav = (navigator.language || 'id').toLowerCase();
    return nav.startsWith('id') || nav.startsWith('ms') ? 'id' : nav.startsWith('en') ? 'en' : 'id';
  };

  const original = new Map();
  function remember(el, attr) {
    const k = el;
    if (!original.has(k)) original.set(k, {});
    const store = original.get(k);
    if (!(attr in store)) {
      store[attr] = attr === 'text' ? el.textContent : attr === 'html' ? el.innerHTML : el.getAttribute(attr);
    }
    return store[attr];
  }

  function applyLang(lang) {
    const en = lang === 'en';
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const base = remember(el, 'text');
      el.textContent = en ? EN[el.dataset.i18n] ?? base : base;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const base = remember(el, 'html');
      el.innerHTML = en ? EN[el.dataset.i18nHtml] ?? base : base;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const base = remember(el, 'alt');
      el.setAttribute('alt', en ? EN[el.dataset.i18nAlt] ?? base : base);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const base = remember(el, 'aria-label');
      el.setAttribute('aria-label', en ? EN[el.dataset.i18nAria] ?? base : base);
    });
    const meta = META[lang];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('.masthead .brand')?.setAttribute('aria-label', meta.brand);
    document.querySelector('[data-nav]')?.setAttribute('aria-label', meta.nav);
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  function init() {
    // Language
    let lang = readLang();
    applyLang(lang);
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.lang === lang) return;
        lang = btn.dataset.lang;
        try { localStorage.setItem(KEY, lang); } catch {}
        applyLang(lang);
      });
    });

    // Year
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = String(new Date().getFullYear());

    // Header border once the page scrolls
    const masthead = document.querySelector('[data-masthead]');
    const onScroll = () => masthead?.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu
    const menuBtn = document.querySelector('[data-menu-btn]');
    const menu = document.querySelector('[data-mobile-menu]');
    const setMenu = open => {
      if (!menuBtn || !menu) return;
      menuBtn.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
      if (open) menu.querySelector('a')?.focus();
    };
    menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
    menu?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuBtn.focus();
      }
    });
    window.matchMedia('(min-width: 821px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

    // Four-worlds preview
    const items = [...document.querySelectorAll('.atlas__item')];
    const shots = new Map([...document.querySelectorAll('[data-preview-img]')].map(img => [img.dataset.previewImg, img]));
    const caption = document.querySelector('[data-preview-caption]');
    let current = '';
    const show = world => {
      if (!shots.has(world) || world === current) return;
      current = world;
      shots.forEach((img, key) => img.classList.toggle('is-active', key === world));
      items.forEach(a => a.classList.toggle('is-active', a.dataset.world === world));
      if (caption) caption.textContent = `${world}.asadinedu.com`;
    };
    show(items[0]?.dataset.world);
    let userPicked = false;
    items.forEach(a => {
      const pick = () => { userPicked = true; show(a.dataset.world); };
      a.addEventListener('mouseenter', pick);
      a.addEventListener('focus', pick);
    });
    // A gentle cycle while the hero is visible, until the visitor points at a world.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const atlas = document.querySelector('.atlas');
    let timer = 0;
    const cycle = () => {
      if (userPicked || reduce.matches || document.hidden) return;
      const i = items.findIndex(a => a.dataset.world === current);
      show(items[(i + 1) % items.length].dataset.world);
    };
    if (atlas && 'IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        clearInterval(timer);
        if (entry.isIntersecting && !userPicked) timer = setInterval(cycle, 3800);
      }, { threshold: 0.35 }).observe(atlas);
    }

    // Reveal on scroll
    const reveals = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && !reduce.matches) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      reveals.forEach(el => io.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('is-in'));
    }

    // Current section in the navigation
    const links = [...document.querySelectorAll('[data-nav] a')];
    const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
      const visible = new Set();
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        const active = sections.find(sec => visible.has(sec.id));
        links.forEach(a => a.setAttribute('aria-current', String(Boolean(active) && a.getAttribute('href') === `#${active.id}`)));
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(sec => io.observe(sec));
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
