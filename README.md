# Online-CV

Online resume of **Fernando Nahuel Tuquina**, Senior Software Engineer.

- **Live site (Vercel):** https://fernandotuquina-cv.vercel.app (English by default)
- **Spanish:** https://fernandotuquina-cv.vercel.app/?lang=es
- **English:** https://fernandotuquina-cv.vercel.app/?lang=en

## Features

- **Bilingual:** English (default) and Spanish, with a language toggle. The language comes from `?lang=`, then the visitor's last choice, and otherwise English.
- **Four views:** Resume (`#cv`), Achievements (`#achievements`), Projects (`#projects`) and Cover letter (`#cover-letter`). Projects is web only: personal projects with a short intro, screenshots and demo/code links, not included in the PDFs.
- **Downloads:** the *Download* menu generates three separate PDFs in the active language: resume, achievements and cover letter.
- **ATS and AI friendly PDFs:** single column, standard section headings and real, selectable text (not images), with title, author and keywords in the PDF metadata.
- **Responsive:** works from 320 px phones to desktop, without horizontal scrolling. On phones and tablets a bottom bar opens a sections menu (profile, experience, skills… plus achievements and cover letter).
- **Light and dark themes:** follows the system setting, with a manual toggle.
- **Lightweight:** plain HTML, CSS and JavaScript modules, inline SVG icons, no build step. The PDF library (jsPDF) is only loaded when someone clicks *Download*.
- **Readable by search engines and AI assistants:** schema.org `Person` data in `index.html` and a plain-text summary in `llms.txt`.
- **Print styles:** printing the page from the browser also gives a clean A4 layout.

## Project structure

```
index.html              Page shell, metadata, JSON-LD and SVG icons
assets/
  css/styles.css        Styles (tokens, layout, dark theme, responsive, print)
  js/content.js         ALL the CV content, in Spanish and English
  js/app.js             Renders the views and handles language, theme and downloads
  js/pdf.js             Builds the PDFs with jsPDF
  js/format.js          Date and URL helpers shared by the page and the PDFs
  img/profile.jpg       Profile photo
  img/signature.png     Signature used in the cover letter
llms.txt                Plain-text summary for AI assistants
vercel.json             Vercel headers and settings
```

## Updating the CV

1. Edit `assets/js/content.js`. Each language has the same structure: `basics`, `summary`, `experience`, `education`, `skills`, `certifications`, `languages`, `competencies`, `interests`, `achievements` and `coverLetter`.
   - Dates use `YYYY-MM`; `end: null` means *Present*.
   - Entries with irregular dates can use a free-text `period` instead of `start` / `end`.
2. Update `LAST_UPDATED` at the end of the same file (it is shown in the footer).
3. If the experience or skills changed, review `llms.txt` and the JSON-LD block in `index.html`.

The page and the PDFs read from the same content, so they always stay in sync.

## Run locally

ES modules need an HTTP server; opening `index.html` directly from disk will not work. Any static server is enough, for example:

```bash
npx serve .
```

## Deployment

The repository is linked to the Vercel project **online-cv**:

- Every push to `master` deploys to production.
- Every pull request gets its own preview URL.
- `.github/workflows/codex-auto-merge.yml` merges a pull request automatically when the Codex review finishes with no unresolved findings on the latest commit. If Codex reports findings, the PR stays open for a manual review.

No build command or framework is configured; Vercel serves the files as they are.

## Contact

- Email: fernandotuquina@gmail.com
- LinkedIn: https://www.linkedin.com/in/fernando-nahuel-tuquina-0ba2a1245/
- GitHub: https://github.com/Tuquina
