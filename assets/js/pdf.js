/*
 * Text-based PDF generation with jsPDF.
 *
 * The documents are single-column, use standard section headings and real
 * (selectable) text, so applicant tracking systems and AI tools can parse them.
 * Loaded on demand from app.js the first time someone clicks "Download".
 */
import { formatPeriod, formatToday, prettyUrl } from './format.js';

const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/3.0.4/jspdf.umd.min.js';
const JSPDF_SRI = 'sha512-TS6nmZ6dzIZEL203ow1+9tB9r5JQcAFqjjkcoU9wk0wXr3piY5XswLq2Dt1Q+tkgG9TXSdBJcWDF3OfarRJMmw==';

/*==================== PAGE SETUP (A4, points) ====================*/
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 54;
const MARGIN_TOP = 52;
const MARGIN_BOTTOM = 56;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const COLOR = {
    text: '#1f2937',
    muted: '#5b6472',
    accent: '#1e3a8a',
    rule: '#c7cdd6',
};

let jsPdfPromise;
const loadJsPdf = () => {
    jsPdfPromise ??= new Promise((resolve, reject) => {
        if (window.jspdf) return resolve(window.jspdf.jsPDF);
        const script = document.createElement('script');
        script.src = JSPDF_URL;
        script.integrity = JSPDF_SRI;
        script.crossOrigin = 'anonymous';
        script.onload = () => resolve(window.jspdf.jsPDF);
        script.onerror = () => {
            jsPdfPromise = undefined;
            reject(new Error('Could not load jsPDF'));
        };
        document.head.appendChild(script);
    });
    return jsPdfPromise;
};

const loadImage = async (url) => {
    const blob = await (await fetch(url)).blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

/*==================== LAYOUT HELPER ====================*/
class Writer {
    constructor(doc) {
        this.doc = doc;
        this.y = MARGIN_TOP;
    }

    font(size, style = 'normal', color = COLOR.text) {
        this.doc.setFont('helvetica', style);
        this.doc.setFontSize(size);
        this.doc.setTextColor(color);
    }

    // Starts a new page when `height` does not fit in what is left of this one.
    ensure(height) {
        if (this.y + height > PAGE_H - MARGIN_BOTTOM) {
            this.doc.addPage();
            this.y = MARGIN_TOP;
        }
    }

    space(points) {
        this.y += points;
    }

    // Wrapped paragraph. `y` is the top of the line box; text is drawn on its baseline.
    paragraph(text, { size = 10, style = 'normal', color = COLOR.text, indent = 0, width = CONTENT_W, leading = 1.4, align = 'left' } = {}) {
        this.font(size, style, color);
        const lineHeight = size * leading;
        const lines = this.doc.splitTextToSize(text, width - indent);
        lines.forEach((line) => {
            this.ensure(lineHeight);
            const x = align === 'right' ? MARGIN_X + width : MARGIN_X + indent;
            this.doc.text(line, x, this.y + size * 0.8, { align });
            this.y += lineHeight;
        });
    }

    bullets(items, { size = 9.8, gap = 2.5 } = {}) {
        items.forEach((item) => {
            // Keep each bullet on one page instead of splitting it.
            this.font(size);
            const lines = this.doc.splitTextToSize(item, CONTENT_W - 14).length;
            this.ensure(lines * size * 1.4);
            this.font(size, 'normal', COLOR.accent);
            this.doc.text('•', MARGIN_X + 3, this.y + size * 0.8);
            this.paragraph(item, { size, indent: 14 });
            this.space(gap);
        });
    }

    // Section heading: small caps-style title and a thin rule.
    heading(title) {
        this.ensure(40);
        this.space(10);
        this.font(10.5, 'bold', COLOR.accent);
        this.doc.text(title.toUpperCase(), MARGIN_X, this.y + 8.5, { charSpace: 0.6 });
        this.y += 13;
        this.doc.setDrawColor(COLOR.rule);
        this.doc.setLineWidth(0.6);
        this.doc.line(MARGIN_X, this.y, PAGE_W - MARGIN_X, this.y);
        this.space(8);
    }

    // Title on the left and a date range right-aligned on the same line.
    titleWithPeriod(title, period, { size = 10.8 } = {}) {
        this.font(9.5);
        const periodWidth = this.doc.getTextWidth(period);
        this.ensure(size * 1.4);
        const top = this.y;
        // Title first so text extraction (ATS, AI tools) reads "role, then dates".
        this.paragraph(title, { size, style: 'bold', width: CONTENT_W - periodWidth - 12 });
        this.font(9.5, 'normal', COLOR.muted);
        this.doc.text(period, PAGE_W - MARGIN_X, top + size * 0.8, { align: 'right' });
    }

    // Label column + wrapped value column, e.g. "Backend    C#, .NET, Java…".
    labelled(label, value, { labelWidth = 142, size = 9.8 } = {}) {
        this.font(size, 'bold');
        this.ensure(size * 1.4);
        this.doc.text(label, MARGIN_X, this.y + size * 0.8);
        this.paragraph(value, { size, indent: labelWidth });
        this.space(2);
    }

    // Name, headline and contact links shared by the three documents.
    header(b) {
        this.font(22, 'bold');
        this.doc.text(b.name, MARGIN_X, this.y + 18);
        this.y += 27;
        this.font(11.5, 'normal', COLOR.accent);
        this.doc.text(b.headline, MARGIN_X, this.y + 10);
        this.y += 18;

        const rows = [
            [{ text: b.location }, { text: b.email, url: `mailto:${b.email}` }, { text: b.phone, url: `tel:${b.phone.replace(/\s/g, '')}` }],
            [{ text: prettyUrl(b.linkedin), url: b.linkedin }, { text: prettyUrl(b.github), url: b.github }],
        ];
        this.font(9.2, 'normal', COLOR.muted);
        const separator = '  |  ';
        rows.forEach((row) => {
            let x = MARGIN_X;
            row.forEach((item, index) => {
                if (index > 0) {
                    this.doc.text(separator, x, this.y + 8);
                    x += this.doc.getTextWidth(separator);
                }
                this.doc.text(item.text, x, this.y + 8);
                const width = this.doc.getTextWidth(item.text);
                if (item.url) this.doc.link(x, this.y, width, 10, { url: item.url });
                x += width;
            });
            this.y += 13;
        });
        this.space(4);
        this.doc.setDrawColor(COLOR.accent);
        this.doc.setLineWidth(1.2);
        this.doc.line(MARGIN_X, this.y, PAGE_W - MARGIN_X, this.y);
        this.space(6);
    }

    pageNumbers(label, t) {
        const total = this.doc.getNumberOfPages();
        if (total < 2) return;
        for (let page = 1; page <= total; page++) {
            this.doc.setPage(page);
            this.font(8.5, 'normal', COLOR.muted);
            this.doc.text(`${label} — ${t.ui.page} ${page} ${t.ui.of} ${total}`, PAGE_W / 2, PAGE_H - 28, { align: 'center' });
        }
    }
}

/*==================== DOCUMENTS ====================*/
const buildCv = (w, t) => {
    const s = t.ui.sections;
    w.header(t.basics);

    w.heading(s.summary);
    w.paragraph(t.summary, { size: 10 });

    w.heading(s.experience);
    t.experience.forEach((job, index) => {
        if (index > 0) w.space(7);
        w.ensure(70); // keep the job title with its first bullets
        w.titleWithPeriod(job.role, formatPeriod(job, t));
        w.paragraph([job.company, job.context].filter(Boolean).join(' · '), { size: 9.8, color: COLOR.muted });
        w.space(3);
        w.bullets(job.highlights);
    });

    w.heading(s.skills);
    t.skills.forEach((group) => w.labelled(group.group, group.items.join(', ')));
    w.labelled(s.competencies, t.competencies.join(', '));

    w.heading(s.education);
    t.education.forEach((edu, index) => {
        if (index > 0) w.space(5);
        w.titleWithPeriod(edu.degree, edu.period, { size: 10.4 });
        w.paragraph(edu.school, { size: 9.8, color: COLOR.muted });
    });

    w.heading(s.certifications);
    t.certifications.forEach((cert) => {
        w.paragraph([cert.name, cert.issuer, cert.year].filter(Boolean).join(' — '), { size: 9.8 });
        w.space(1.5);
    });

    w.heading(s.languages);
    w.paragraph(t.languages.map((l) => `${l.name}: ${l.level}`).join('   |   '), { size: 9.8 });
};

const buildAchievements = (w, t) => {
    const a = t.achievements;
    w.header(t.basics);
    w.space(6);
    w.paragraph(a.title, { size: 15, style: 'bold' });
    w.space(4);
    w.paragraph(a.intro, { size: 10, color: COLOR.muted });
    a.groups.forEach((group) => {
        w.heading(group.title);
        w.font(9.5, 'normal', COLOR.muted);
        w.doc.text(group.period, PAGE_W - MARGIN_X, w.y - 13, { align: 'right' });
        w.bullets(group.items, { size: 10, gap: 4 });
    });
};

const buildCoverLetter = async (w, t) => {
    const c = t.coverLetter;
    const b = t.basics;
    w.header(b);
    w.space(10);
    w.paragraph(`${b.location.split(',')[0]}, ${formatToday(t)}`, { size: 10, color: COLOR.muted, align: 'right' });
    w.space(12);
    w.paragraph(c.greeting, { size: 10.5 });
    w.space(8);
    [...c.paragraphs, c.thanks].forEach((p) => {
        w.paragraph(p, { size: 10.5, leading: 1.5 });
        w.space(8);
    });
    w.ensure(110);
    w.paragraph(c.closing, { size: 10.5 });
    try {
        const signature = await loadImage(b.signature);
        w.doc.addImage(signature, 'PNG', MARGIN_X, w.y + 2, 96, 50);
        w.space(56);
    } catch {
        w.space(18); // the letter still works without the image
    }
    w.paragraph(b.name, { size: 10.5, style: 'bold' });
};

const DOCUMENTS = {
    cv: {
        build: buildCv,
        title: (t) => ({ en: 'Resume', es: 'CV' })[t.locale],
        file: (t) => ({ en: 'Fernando-Tuquina-Resume-EN.pdf', es: 'Fernando-Tuquina-CV-ES.pdf' })[t.locale],
    },
    achievements: {
        build: buildAchievements,
        title: (t) => t.achievements.title,
        file: (t) => ({ en: 'Fernando-Tuquina-Achievements-EN.pdf', es: 'Fernando-Tuquina-Logros-ES.pdf' })[t.locale],
    },
    coverLetter: {
        build: buildCoverLetter,
        title: (t) => t.coverLetter.title,
        file: (t) => ({ en: 'Fernando-Tuquina-Cover-Letter-EN.pdf', es: 'Fernando-Tuquina-Carta-de-Presentacion-ES.pdf' })[t.locale],
    },
};

export async function createPdf(kind, t) {
    const JsPdf = await loadJsPdf();
    const spec = DOCUMENTS[kind];
    const doc = new JsPdf({ unit: 'pt', format: 'a4', compress: true });
    const title = `${t.basics.name} — ${spec.title(t)}`;

    doc.setProperties({
        title,
        subject: `${t.basics.headline}. ${t.basics.location}.`,
        author: t.basics.name,
        keywords: t.skills.flatMap((g) => g.items).join(', '),
        creator: t.basics.name,
    });
    doc.setLanguage(t.locale === 'es' ? 'es-AR' : 'en-US');

    const writer = new Writer(doc);
    await spec.build(writer, t);
    writer.pageNumbers(`${t.basics.name} · ${spec.title(t)}`, t);
    return { doc, filename: spec.file(t) };
}

export async function downloadPdf(kind, t) {
    const { doc, filename } = await createPdf(kind, t);
    doc.save(filename);
}
