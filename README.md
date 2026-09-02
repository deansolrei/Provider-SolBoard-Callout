# Provider SolBoard Callout Demo

An HTML browser show-and-tell of the SolBoard provider dashboard. Click on a
button or icon in the PRE-VISIT or POST-VISIT sample screens and a callout
card pops up describing what that element does.

## Status

Initial scaffold — full build in progress via Copilot coding agent.

## Local viewing

Once built, open `index.html` directly in a browser, or serve the folder
locally:

```
python -m http.server
```

Then visit `http://localhost:8000`.

## Structure (planned)

- `index.html` – landing page, redirects to `pre-visit.html`
- `pre-visit.html` / `post-visit.html` – the two interactive pages
- `css/styles.css` – shared styles
- `js/hotspots.js` – hotspot/callout data and logic
- `images/` – background screenshots (to be supplied/replaced by repo owner)
