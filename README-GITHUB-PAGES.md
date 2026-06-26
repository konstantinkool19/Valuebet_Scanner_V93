# Valuebet Scanner + Tracker V93 — GitHub Pages

1. Extract this ZIP.
2. Upload the **contents** of the extracted folder directly into the repository root (where `index.html` is).
3. In GitHub: Settings → Pages → Deploy from a branch → select the branch and `/ (root)`.
4. Open the site once using a hard refresh. The scanner API key is stored per browser/origin, so save it again under Settings after moving from a local file to GitHub Pages.

This V93 service worker intentionally has no fetch cache handler. Odds-API.io requests are therefore not cached or intercepted by the PWA.
