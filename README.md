# PDFUnsign 📄🔓

> **100% Client-Side Digital Signature Remover and PDF Unlocker.**
> Fast, private, and secure. Strip digital signatures, form locks, and PDF/A read-only restrictions directly in your browser.

🌐 **Website**: [https://pdfunsign.com/](https://pdfunsign.com/)  
🇫🇷 **Version Française**: [https://pdfunsign.com/fr/](https://pdfunsign.com/fr/)

---

## ✨ Features

- **🔒 100% Client-Side Privacy**: All processing runs locally in browser RAM using JavaScript. Files never leave your device (Zero server uploads, fully GDPR compliant).
- **✍️ Digital Signature Stripping**: Eliminates PAdES, CAdES, DocMDP, and `/Sig` signature dictionaries.
- **🔓 Unlocks Form & Edit Restrictions**: Purges `/AcroForm`, `/Perms`, and `/Legal` security locks from the document catalog.
- **📖 Neutralizes PDF/A Read-Only Mode**: Removes `pdfaid` conformance metadata forcing Adobe Acrobat into locked consultation mode.
- **🎨 100% Native Vector Quality**: No rasterization, no flattening into pictures. Preserves selectable text, embedded fonts, and vector graphics.
- **⚡ Fast & Batch Capable**: Instant unlocking for one or multiple PDF documents.
- **🌍 Bilingual & SEO Optimized**: English (`/`) and French (`/fr/`) with full Schema.org structured data, sitemap, and `llms.txt` integration.

---

## 🛠️ Tech Stack

- **Core**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Engine**: [pdf-lib](https://github.com/Hopding/pdf-lib) (bundled locally + CDN fallback)
- **Minifier**: [Terser](https://github.com/terser/terser)
- **Styling**: Modern, lightweight light design system with Plus Jakarta Sans

---

## 🚀 Quick Start (Local Development)

### 1. Install dependencies
```bash
npm install
```

### 2. Minify JavaScript & CSS
```bash
npm run build
```

### 3. Watch mode (auto-minify JS & CSS on save)
```bash
npm run watch
```

### 4. Serve locally
You can use any static HTTP server:
```bash
# Using Python
python -m http.server 8080

# Or using npx serve
npx serve .
```
Then visit `http://localhost:8080/`.

---

## 📦 Deployment

Because PDFUnsign is 100% static and client-side, it can be hosted for **$0/month** on:
- **Cloudflare Pages** (recommended with `pdfunsign.com`)
- **Vercel** / **Netlify**
- **GitHub Pages**
- **Apache / Nginx** (a ready-to-use `.htaccess` with Gzip & caching is included)

---

## 🤖 LLM & AI Search Optimization

PDFUnsign implements Generative Engine Optimization (GEO) standards:
- `/llms.txt` and `/llms-full.txt` documentation for AI search crawlers
- `robots.txt` configuration for GPTBot, PerplexityBot, ClaudeBot, and Google-Extended
- Schema.org JSON-LD `WebApplication`, `HowTo`, and `FAQPage`

---

## 📄 License

ISC License.
