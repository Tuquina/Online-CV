import { content, LANGS, LAST_UPDATED } from './content.js';
import { formatMonth, formatPeriod, formatToday, prettyUrl } from './format.js';

/*==================== STATE ====================*/
const VIEWS = ['cv', 'achievements', 'cover-letter'];
const DEFAULT_VIEW = 'cv';
const DEFAULT_LANG = 'en';

const storage = {
    get(key) {
        try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
        try { localStorage.setItem(key, value); } catch { /* private mode: ignore */ }
    },
};

const detectLang = () => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    const saved = storage.get('lang');
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
};

const detectView = () => {
    const hash = location.hash.slice(1);
    return VIEWS.includes(hash) ? hash : DEFAULT_VIEW;
};

const state = { lang: detectLang(), view: detectView() };
const t = () => content[state.lang];

/*==================== TEMPLATES ====================*/
const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

const list = (items, render, className = '') =>
    `<ul class="${className}">${items.map((item) => `<li>${render(item)}</li>`).join('')}</ul>`;

const section = (title, body, id) =>
    `<section class="block" id="${id}"><h2 class="block__title">${esc(title)}</h2>${body}</section>`;

const contactItems = (b) => [
    { icon: 'pin', label: b.location },
    { icon: 'mail', label: b.email, href: `mailto:${b.email}` },
    { icon: 'phone', label: b.phone, href: `tel:${b.phone.replace(/\s/g, '')}` },
    { icon: 'linkedin', label: 'LinkedIn', href: b.linkedin },
    { icon: 'github', label: prettyUrl(b.github), href: b.github },
];

const contactList = (b) =>
    list(contactItems(b), (c) => {
        const inner = `${icon(c.icon)}<span>${esc(c.label)}</span>`;
        if (!c.href) return inner;
        const external = c.href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
        return `<a href="${esc(c.href)}"${external}>${inner}</a>`;
    }, 'contact');

const docHeader = (b, { photo = false } = {}) => `
    <header class="doc-header">
        ${photo ? `<img class="doc-header__photo" src="${esc(b.photo)}" alt="${esc(b.name)}" width="104" height="104">` : ''}
        <div class="doc-header__text">
            <h1 class="doc-header__name">${esc(b.name)}</h1>
            <p class="doc-header__headline">${esc(b.headline)}</p>
            ${contactList(b)}
        </div>
    </header>`;

const job = (j, tr) => `
    <article class="job${j.end === null ? ' job--current' : ''}">
        <header class="job__head">
            <h3 class="job__role">${esc(j.role)}</h3>
            <span class="job__period">${esc(formatPeriod(j, tr))}</span>
        </header>
        <p class="job__company">${esc(j.company)}</p>
        ${j.context ? `<p class="job__context">${esc(j.context)}</p>` : ''}
        ${j.highlights ? list(j.highlights, esc, 'bullets') : ''}
        ${j.tags ? list(j.tags, esc, 'tags') : ''}
    </article>`;

const renderCv = (tr) => {
    const s = tr.ui.sections;
    const main = [
        section(s.summary, `<p class="summary">${esc(tr.summary)}</p>`, 'profile'),
        section(s.experience, `<div class="timeline">${tr.experience.map((j) => job(j, tr)).join('')}</div>`, 'experience'),
        section(s.education, tr.education.map((e) => `
            <div class="edu">
                <div class="job__head">
                    <h3 class="job__role">${esc(e.degree)}</h3>
                    <span class="job__period">${esc(e.period)}</span>
                </div>
                <p class="job__company">${esc(e.school)}</p>
            </div>`).join(''), 'education'),
    ].join('');

    const aside = [
        section(s.skills, tr.skills.map((g) => `
            <div class="skill-group">
                <h3 class="skill-group__title">${esc(g.group)}</h3>
                ${list(g.items, esc, 'tags')}
            </div>`).join(''), 'skills'),
        section(s.languages, list(tr.languages, (l) => `<span>${esc(l.name)}</span><span class="muted">${esc(l.level)}</span>`, 'pairs'), 'languages'),
        section(s.certifications, list(tr.certifications, (c) => `
            <span class="cert__name">${esc(c.name)}</span>
            <span class="muted">${esc([c.issuer, c.year].filter(Boolean).join(' · '))}</span>`, 'certs'), 'certifications'),
        section(s.competencies, list(tr.competencies, esc, 'plain'), 'competencies'),
        section(s.interests, list(tr.interests, esc, 'plain'), 'interests'),
    ].join('');

    return `
        <article class="sheet cv">
            ${docHeader(tr.basics, { photo: true })}
            <div class="cv__body">
                <div class="cv__main">${main}</div>
                <aside class="cv__aside">${aside}</aside>
            </div>
        </article>`;
};

const renderAchievements = (tr) => {
    const a = tr.achievements;
    return `
        <article class="sheet doc">
            ${docHeader(tr.basics)}
            <h2 class="doc__title">${esc(a.title)}</h2>
            <p class="doc__intro">${esc(a.intro)}</p>
            ${a.groups.map((g) => `
                <section class="block">
                    <div class="job__head">
                        <h3 class="block__title block__title--inline">${esc(g.title)}</h3>
                        <span class="job__period">${esc(g.period)}</span>
                    </div>
                    ${list(g.items, esc, 'bullets bullets--spaced')}
                </section>`).join('')}
        </article>`;
};

const renderCoverLetter = (tr) => {
    const c = tr.coverLetter;
    const b = tr.basics;
    return `
        <article class="sheet doc letter">
            ${docHeader(b)}
            <h2 class="visually-hidden">${esc(c.title)}</h2>
            <p class="letter__date">${esc(b.location.split(',')[0])}, ${esc(formatToday(tr))}</p>
            <p class="letter__greeting">${esc(c.greeting)}</p>
            ${c.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}
            <p>${esc(c.thanks)}</p>
            <div class="letter__sign">
                <p>${esc(c.closing)}</p>
                <img class="letter__signature" src="${esc(b.signature)}" alt="" width="153" height="80">
                <p class="letter__name">${esc(b.name)}</p>
            </div>
        </article>`;
};

const RENDERERS = { cv: renderCv, achievements: renderAchievements, 'cover-letter': renderCoverLetter };

/*==================== DOM ====================*/
const $ = (selector) => document.querySelector(selector);
const main = $('#main');
const downloadToggle = $('#download-toggle');
const downloadMenu = $('#download-menu');
const toast = $('#toast');
const topbar = $('.topbar');
const bottomNav = $('#bottom-nav');
const bottomSheet = $('#bottom-sheet');
const bottomToggle = $('#bottom-toggle');
const bottomBackdrop = $('#bottom-backdrop');

/*==================== MOBILE SECTIONS MENU ====================*/
// CV sections jump within the resume; the last two items switch views.
const NAV_ITEMS = [
    { section: 'top', icon: 'home', label: (tr) => tr.ui.nav.home },
    { section: 'profile', icon: 'user', label: (tr) => tr.ui.sections.summary },
    { section: 'experience', icon: 'briefcase', label: (tr) => tr.ui.sections.experience },
    { section: 'education', icon: 'book', label: (tr) => tr.ui.sections.education },
    { section: 'skills', icon: 'code', label: (tr) => tr.ui.sections.skills },
    { section: 'certifications', icon: 'award', label: (tr) => tr.ui.sections.certifications },
    { section: 'languages', icon: 'globe', label: (tr) => tr.ui.sections.languages },
    { section: 'competencies', icon: 'users', label: (tr) => tr.ui.sections.competencies },
    { section: 'interests', icon: 'heart', label: (tr) => tr.ui.sections.interests },
    { view: 'achievements', icon: 'trophy', label: (tr) => tr.ui.views.achievements },
    { view: 'cover-letter', icon: 'letter', label: (tr) => tr.ui.views.coverLetter },
];

let activeSection = 'top';

function renderBottomNav() {
    const tr = t();
    bottomNav.setAttribute('aria-label', tr.ui.nav.label);
    bottomSheet.innerHTML = NAV_ITEMS.map((item) => {
        const data = item.view ? `data-view-target="${item.view}"` : `data-section="${item.section}"`;
        return `<button class="sheet-item" type="button" ${data}>${icon(item.icon)}<span>${esc(item.label(tr))}</span></button>`;
    }).join('');
    updateBottomNavActive();
    setSheet(false);
}

function updateBottomNavActive() {
    bottomSheet.querySelectorAll('.sheet-item').forEach((item) => {
        const active = item.dataset.viewTarget
            ? item.dataset.viewTarget === state.view
            : state.view === 'cv' && item.dataset.section === activeSection;
        item.classList.toggle('is-active', active);
        if (active) item.setAttribute('aria-current', 'true');
        else item.removeAttribute('aria-current');
    });
}

function setSheet(open) {
    bottomSheet.hidden = !open;
    bottomBackdrop.hidden = !open;
    bottomNav.classList.toggle('is-open', open);
    bottomToggle.setAttribute('aria-expanded', String(open));
    bottomToggle.setAttribute('aria-label', open ? t().ui.nav.close : t().ui.nav.open);
}

const scrollToSection = (id) => {
    const target = id === 'top' ? null : document.getElementById(id);
    const top = target ? target.getBoundingClientRect().top + window.scrollY - topbar.offsetHeight - 12 : 0;
    window.scrollTo({ top, behavior: 'smooth' });
};

// Highlights the CV section currently under the top bar.
function trackActiveSection() {
    if (state.view !== 'cv') return;
    const line = topbar.offsetHeight + 80;
    let current = 'top';
    document.querySelectorAll('.cv section[id]').forEach((sectionEl) => {
        if (sectionEl.getBoundingClientRect().top <= line) current = sectionEl.id;
    });
    if (current !== activeSection) {
        activeSection = current;
        updateBottomNavActive();
    }
}

function renderChrome() {
    const tr = t();
    const html = document.documentElement;
    html.lang = tr.locale;
    document.title = tr.meta.title;
    $('meta[name="description"]').setAttribute('content', tr.meta.description);

    // Tabs
    const key = { cv: 'cv', achievements: 'achievements', 'cover-letter': 'coverLetter' };
    document.querySelectorAll('[data-view]').forEach((tab) => {
        const view = tab.dataset.view;
        tab.innerHTML =
            `<span class="tabs__long">${esc(tr.ui.views[key[view]])}</span>` +
            `<span class="tabs__short">${esc(tr.ui.viewsShort[key[view]])}</span>`;
        tab.setAttribute('aria-current', view === state.view ? 'page' : 'false');
    });

    // Actions
    const langBtn = $('#lang-toggle');
    langBtn.querySelector('span').textContent = state.lang === 'es' ? 'EN' : 'ES';
    langBtn.setAttribute('aria-label', tr.ui.switchLanguage);
    langBtn.title = tr.ui.switchLanguage;

    $('#theme-toggle').setAttribute('aria-label', tr.ui.toggleTheme);
    $('#theme-toggle').title = tr.ui.toggleTheme;

    downloadToggle.querySelector('.btn__label').textContent = tr.ui.download;
    downloadToggle.setAttribute('aria-label', tr.ui.menu);
    downloadMenu.querySelectorAll('[data-download]').forEach((item) => {
        item.querySelector('span').textContent = tr.ui.downloads[item.dataset.download];
    });

    $('#footer').innerHTML =
        `<span>© ${new Date().getFullYear()} ${esc(tr.basics.name)}</span>` +
        `<span>${esc(tr.ui.lastUpdated)}: ${esc(formatMonth(LAST_UPDATED, tr))}</span>`;
}

function render() {
    renderChrome();
    main.innerHTML = RENDERERS[state.view](t());
    activeSection = 'top';
    renderBottomNav();
}

function setLang(lang) {
    state.lang = lang;
    storage.set('lang', lang);
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
    render();
}

/*==================== EVENTS ====================*/
window.addEventListener('hashchange', () => {
    state.view = detectView();
    render();
    window.scrollTo({ top: 0 });
});

$('#lang-toggle').addEventListener('click', () => setLang(state.lang === 'es' ? 'en' : 'es'));

// Mobile sections menu
bottomToggle.addEventListener('click', () => setSheet(bottomSheet.hidden));
bottomBackdrop.addEventListener('click', () => setSheet(false));

bottomSheet.addEventListener('click', (event) => {
    const item = event.target.closest('.sheet-item');
    if (!item) return;
    setSheet(false);
    if (item.dataset.viewTarget) {
        if (item.dataset.viewTarget === state.view) window.scrollTo({ top: 0, behavior: 'smooth' });
        else location.hash = item.dataset.viewTarget;
        return;
    }
    if (state.view !== 'cv') {
        state.view = 'cv';
        history.pushState(null, '', '#cv');
        render();
    }
    scrollToSection(item.dataset.section);
});

let spyFrame;
window.addEventListener('scroll', () => {
    cancelAnimationFrame(spyFrame);
    spyFrame = requestAnimationFrame(trackActiveSection);
}, { passive: true });

$('#theme-toggle').addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    storage.set('theme', next);
});

// Download menu
const setMenu = (open) => {
    downloadMenu.hidden = !open;
    downloadToggle.setAttribute('aria-expanded', String(open));
    if (open) downloadMenu.querySelector('[data-download]').focus();
};

downloadToggle.addEventListener('click', () => setMenu(downloadMenu.hidden));

document.addEventListener('click', (event) => {
    if (!downloadMenu.hidden && !event.target.closest('.dropdown')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !bottomSheet.hidden) {
        setSheet(false);
        bottomToggle.focus();
    }
    if (event.key === 'Escape' && !downloadMenu.hidden) {
        setMenu(false);
        downloadToggle.focus();
    }
    if (!downloadMenu.hidden && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
        const items = [...downloadMenu.querySelectorAll('[data-download]')];
        const index = items.indexOf(document.activeElement);
        const step = event.key === 'ArrowDown' ? 1 : -1;
        items[(index + step + items.length) % items.length].focus();
    }
});

let toastTimer;
const showToast = (message) => {
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2600);
};

downloadMenu.addEventListener('click', async (event) => {
    const item = event.target.closest('[data-download]');
    if (!item) return;
    setMenu(false);
    const tr = t();
    showToast(tr.ui.preparing);
    try {
        // The PDF code and jsPDF are only loaded when someone downloads something.
        const { downloadPdf } = await import('./pdf.js');
        await downloadPdf(item.dataset.download, tr);
        toast.hidden = true;
    } catch (error) {
        console.error(error);
        showToast(tr.ui.downloadError);
    }
});

render();
