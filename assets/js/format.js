/* Formatting helpers shared by the page and the PDF generator. */

export const formatMonth = (ym, t) => {
    if (!ym) return t.ui.present;
    const [year, month] = ym.split('-');
    return `${t.months[Number(month) - 1]} ${year}`;
};

export const formatPeriod = (item, t) =>
    item.period ?? `${formatMonth(item.start, t)} – ${formatMonth(item.end, t)}`;

export const formatToday = (t) =>
    new Intl.DateTimeFormat(t.locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());

// "https://www.linkedin.com/in/foo/" -> "linkedin.com/in/foo"
export const prettyUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
