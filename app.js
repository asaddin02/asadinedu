// Asadin Edu landing: language switch, header state, mobile menu, the worlds index and gentle reveals.
// Loaded in <head> (small, no dependencies) so the reveal state is known before first paint.
(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');

  const EN = {
    skip: 'Skip to content',
    'brand.aria': 'Asadin Edu, home',
    'nav.aria': 'Main navigation',
    'nav.worlds': 'Learning spaces',
    'nav.about': 'About',
    'nav.founder': 'Founder',
    'nav.support': 'Support',
    'nav.menu': 'Menu',
    'hero.eyebrow': 'An independent umbrella for education in Indonesia',
    'hero.t1': 'Four worlds of knowledge,',
    'hero.t2': 'one umbrella.',
    'hero.lede': 'Asadin Edu shelters four learning spaces for pupils from primary school to university, and for their teachers. All of them are free, with no ads, no accounts, and a source behind every fact.',
    'hero.cta': 'Choose a learning space',
    'hero.cta2': 'About Asadin Edu',
    'hero.by': 'Run by',
    'tiles.aria': 'Four learning spaces',
    'bio.field': 'Biology',
    'chem.field': 'Chemistry',
    'phys.field': 'Physics',
    'myth.field': 'Mythology',
    'rb.1': 'curated species cards',
    'rb.2': 'chemical elements and their isotopes',
    'rb.3': 'levelled physics lessons',
    'rb.4': 'illustrated mythological beings',
    'rb.5': 'cost to learn',
    'rb.6': 'ads and accounts',
    'worlds.kicker': 'Learning spaces',
    'worlds.title': 'Four worlds, each standing on its own.',
    'worlds.note': '<em>Loka</em> means world or realm. Each learning space has its own address and can be explored without signing up: <b class="t-bio">life</b>, <b class="t-chem">chemistry</b>, <b class="t-phys">physics</b> and <b class="t-myth">myth</b>.',
    'worlds.index': 'Learning spaces',
    code: 'Source code',
    'bio.lede': 'An open atlas of life. Explore millions of species from GBIF and iNaturalist, a tree of life down to species level, and biology lessons that follow your school level.',
    'bio.f1': 'topics across 8 fields of biology',
    'bio.f2': 'curated species cards',
    'bio.f3': 'virtual labs',
    'bio.f4': 'modes: primary to teacher',
    'bio.cta': 'Open Biotaloka',
    'chem.lede': 'An interactive chemistry encyclopedia, from matter and atoms to reactions. Scientific values come from reference bodies such as IUPAC, PubChem and NIST, each with its source.',
    'chem.f1': 'elements with IUPAC atomic weights',
    'chem.f2': 'nuclides, 60 ions, 76 reactions',
    'chem.f3': 'curated molecules and materials',
    'chem.f4': 'virtual labs',
    'chem.cta': 'Open Kimialoka',
    'phys.lede': 'A physics learning space in Indonesian. Every lesson moves from intuition to explanation, worked examples, activities and a quiz, with the assumptions and limits of each model stated plainly.',
    'phys.f1': 'lessons, primary to university',
    'phys.f2': 'interactive labs',
    'phys.f3': 'connected domains of physics',
    'phys.f4': 'equations, 14 with a calculator',
    'phys.cta': 'Open Fisikaloka',
    'myth.lede': 'An encyclopedia of mythological and folkloric beings from many civilisations. Every entry rests on quoted sources, separates authentic tradition from pop culture, and respects beliefs that are still alive.',
    'myth.f1': 'illustrated beings',
    'myth.f2': 'cultural traditions',
    'myth.f3': 'languages: Indonesian, English',
    'myth.f4': 'learning guides',
    'myth.cta': 'Open Mitoloka',
    'ab.kicker': 'About Asadin Edu',
    'ab.title': 'Not a school, not a company. An umbrella.',
    'ab.p1': 'Asadin Edu is the umbrella name Prasada Arif Nurudin created for his work in education. It is run by one person, with one aim: to make learning in Indonesia easier and more affordable.',
    'ab.p2': 'Each learning space stands on its own, at its own address, but they all keep the same four principles.',
    'pr.1.t': 'No barriers',
    'pr.1.p': 'Free, with no ads, no accounts and no trackers. Study notes stay on your own device.',
    'pr.2.t': 'Every fact is sourced',
    'pr.2.p': 'Values, claims and images link to their references, such as IUPAC, GBIF, OpenStax and Wikidata. What is not yet available is marked, never invented.',
    'pr.3.t': 'One topic, many levels',
    'pr.3.p': 'The same topic is written in layers, from a primary pupil’s language to university depth, and teachers get ready-to-use material.',
    'pr.4.t': 'Open to inspection',
    'pr.4.p': 'The code of all four learning spaces is open on GitHub. Anyone may check it, report a mistake or use it in class.',
    'f.alt': 'Prasada Arif Nurudin, founder and maintainer of Asadin Edu',
    'f.kicker': 'Founder and maintainer',
    'f.role': 'Software developer · IT coordinator at Rahoclub, Surabaya',
    'f.p1': 'Prasada created Asadin Edu as an umbrella for his work in education: learning spaces that are clear, accurate and within reach of everyone, from classrooms in big cities to homes in remote villages.',
    'f.p2': 'With more than four years of building mobile apps, backends and ERP systems, he works on all four worlds of Asadin Edu himself, from source research to interfaces that are friendly to children.',
    'f.site': 'Visit his personal site',
    's.kicker': 'Support',
    's.title': 'Help keep it all free.',
    's.text': 'Asadin Edu shows no ads and sells no data. Voluntary support helps pay for research, illustration and servers. Every lesson stays free, with or without your support.',
    's.local': 'From Indonesia',
    's.local.hint': 'Support in rupiah',
    's.intl': 'International',
    's.intl.hint': 'Support from abroad',
    'ft.about': 'An independent umbrella for education in Indonesia, run by Prasada Arif Nurudin from Pasuruan, East Java.',
    'ft.contact': 'Contact',
    'ft.founder': 'Founder’s site',
    'ft.top': 'Back to top',
  };
  const META = {
    en: {
      title: 'Asadin Edu — Four worlds of knowledge, one umbrella',
      description: 'Asadin Edu is an independent umbrella for education in Indonesia, run by Prasada Arif Nurudin. Under it are Biotaloka, Kimialoka, Fisikaloka and Mitoloka: biology, chemistry, physics and mythology learning spaces from primary school to university, free, ad-free and with no account.',
    },
  };

  const KEY = 'asadinedu-lang';
  const readLang = () => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'id' || saved === 'en') return saved;
    } catch {}
    const nav = (navigator.language || 'id').toLowerCase();
    return nav.startsWith('en') ? 'en' : 'id';
  };

  // The Indonesian text in the HTML is the source; remember it before the first switch.
  const original = new WeakMap();
  const base = (el, kind, read) => {
    let store = original.get(el);
    if (!store) original.set(el, (store = {}));
    if (!(kind in store)) store[kind] = read();
    return store[kind];
  };

  function applyLang(lang) {
    const en = lang === 'en';
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const id = base(el, 'text', () => el.textContent);
      el.textContent = en ? EN[el.dataset.i18n] ?? id : id;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const id = base(el, 'html', () => el.innerHTML);
      el.innerHTML = en ? EN[el.dataset.i18nHtml] ?? id : id;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const id = base(el, 'alt', () => el.getAttribute('alt'));
      el.setAttribute('alt', en ? EN[el.dataset.i18nAlt] ?? id : id);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const id = base(el, 'aria', () => el.getAttribute('aria-label'));
      el.setAttribute('aria-label', en ? EN[el.dataset.i18nAria] ?? id : id);
    });
    const desc = document.querySelector('meta[name="description"]');
    const idTitle = base(document.head, 'title', () => document.title);
    const idDesc = base(document.head, 'desc', () => desc?.content || '');
    document.title = en ? META.en.title : idTitle;
    desc?.setAttribute('content', en ? META.en.description : idDesc);
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  function init() {
    let lang = readLang();
    if (lang !== 'id') applyLang(lang);
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.lang === lang) return;
        lang = btn.dataset.lang;
        try { localStorage.setItem(KEY, lang); } catch {}
        applyLang(lang);
      });
    });

    const year = document.querySelector('[data-year]');
    if (year) year.textContent = String(new Date().getFullYear());

    // Header rule once the page scrolls.
    const masthead = document.querySelector('[data-masthead]');
    const onScroll = () => masthead?.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu.
    const menuBtn = document.querySelector('[data-menu-btn]');
    const menu = document.querySelector('[data-mobile-menu]');
    const setMenu = (open, focusFirst = false) => {
      if (!menuBtn || !menu) return;
      menuBtn.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
      if (open && focusFirst) menu.querySelector('a')?.focus();
    };
    menuBtn?.addEventListener('click', e => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true', e.detail === 0));
    menu?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuBtn.focus();
      }
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

    const io = (cb, opts) => ('IntersectionObserver' in window ? new IntersectionObserver(cb, opts) : null);

    // Current section in the main navigation.
    const navLinks = [...document.querySelectorAll('[data-nav] a')];
    const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const inView = new Set();
    const navObserver = io(entries => {
      entries.forEach(e => (e.isIntersecting ? inView.add(e.target.id) : inView.delete(e.target.id)));
      const active = sections.find(s => inView.has(s.id));
      navLinks.forEach(a => a.setAttribute('aria-current', String(Boolean(active) && a.getAttribute('href') === `#${active.id}`)));
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => navObserver?.observe(s));

    // The sticky worlds index follows the panel in view.
    const spies = [...document.querySelectorAll('[data-spy]')];
    const panels = spies.map(a => document.getElementById(a.dataset.spy)).filter(Boolean);
    const setActive = id => spies.forEach(a => {
      const on = a.dataset.spy === id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    let ticking = false;
    const spy = () => {
      ticking = false;
      const line = window.innerHeight * 0.4;
      let current = panels[0];
      for (const p of panels) if (p.getBoundingClientRect().top <= line) current = p;
      if (current) setActive(current.id);
    };
    if (panels.length) {
      spy();
      window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
      window.addEventListener('resize', spy, { passive: true });
    }

    // Gentle reveal below the fold.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.panel, .about__intro, .rules li, .founder__grid, .support__grid');
    const revealObserver = !reduce && io(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        revealObserver.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    if (revealObserver) {
      targets.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top > window.innerHeight) { el.classList.add('reveal'); revealObserver.observe(el); }
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
