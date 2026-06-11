# OS Admin Hub Frontend

Interactive static frontend extracted from `https://os-admin-hub.lovable.app/`.

## Run Locally

```sh
npm start
```

The preview server serves `site/` and falls back correctly for client-side routes such as `/staff`, `/audit`, and `/departments/d1`.

## Design Changes

Use `site/styles-overrides.css` for visual changes. It is loaded after the original bundled stylesheet, so design updates can be made without editing minified assets.

## Refresh From Source

```sh
npm run mirror
```

This re-downloads same-origin static assets, removes Lovable analytics/replay/badge markup, and rebuilds the local route fallbacks.
