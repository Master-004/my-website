# Toby Alder — Portfolio

Personal portfolio site for Toby Alder, full-stack developer and MISM student at BYU.

Live at [salder004.com](https://salder004.com)

## Tech

- Static HTML with [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Font Awesome](https://fontawesome.com/) for icons
- [Lottie](https://airbnb.io/lottie/) for animations
- Vanilla JS for interactivity (carousels, theme toggle, mobile nav)
- Hosted on GitHub Pages with a custom domain

## Structure

```
/
├── index.html              # Main portfolio page
├── CNAME                   # Custom domain config for GitHub Pages
├── css/
│   └── styles.css
├── js/
│   └── animations.js
├── images/
│   └── projects/           # Project screenshots
├── projects/               # Individual project detail pages
│   ├── locker-system/
│   ├── pokemon-explorer/
│   ├── byu-intex-2025/
│   ├── mission-nutrition/
│   ├── byu-intex-2024/
│   └── airbnb-dashboard/
├── blog/
└── TobyAlderResume.pdf
```

## Running locally

No build step required — open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python -m http.server
```
