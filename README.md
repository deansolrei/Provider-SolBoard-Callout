# Provider SolBoard Callout Demo

An HTML browser show-and-tell of the SolBoard provider dashboard. Click on a
button or icon in the PRE-VISIT or POST-VISIT sample screens and a callout
card pops up describing what that element does.

## Status

Interactive static site scaffold is implemented with responsive hotspot overlays,
centered callout cards, and connector lines.

## Local viewing

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 8001
```

Then visit `http://localhost:8001`.

## Structure

- `index.html` – landing page, redirects to `pre-visit.html`
- `pre-visit.html` / `post-visit.html` – the two interactive pages
- `css/styles.css` – shared styles
- `js/hotspots.js` – hotspot definitions and shared callout/connector behavior
- `images/pre-visit-final.png` – PRE-VISIT background image
- `images/post-visit-final.png` – POST-VISIT background image

## Replace placeholder images (required)

The `images/pre-visit-final.png` and `images/post-visit-final.png` files are
currently placeholders (light gray labeled rectangles).

Replace each file with the real screenshot using the **same filename** and
approximately the same dimensions:

- `pre-visit-final.png` ≈ `2576 x 1310`
- `post-visit-final.png` ≈ `2576 x 1450`

No code changes are needed if filenames/dimensions stay aligned.

## Hotspot coordinate tuning workflow

Hotspots are positioned with percentage-based coordinates in `js/hotspots.js`
using `top`, `left`, `width`, and `height` values so overlays scale
responsively with the image.

To fine-tune:

1. Open `pre-visit.html` or `post-visit.html`.
2. Open browser dev tools and inspect `.hotspot-btn[data-id="..."]`.
3. Adjust hotspot percentages in `js/hotspots.js`.
4. Refresh and repeat until overlays match the exact UI targets.

Each page has its own hotspot data object entries (`pre-visit` and
`post-visit`) to keep editing straightforward.
