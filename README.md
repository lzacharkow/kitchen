# Kitchen Remodel — decision pages

A small static site for tracking kitchen-remodel options. No build step —
open any `.html` file in a browser (or serve the folder with GitHub Pages
or `python3 -m http.server`).

## Layout

```
index.html          Overview — table of contents linking to every page
cabinets.html       Cabinets (Sapele chosen, finish open)
countertops.html    Stub — no content yet
tiles.html          Tiles (Heath + Zia orders)
paint.html          Stub — no content yet
appliances.html     Stub — no content yet
sinks.html          Sinks (four Kohler options)
finishes.html       Stub — no content yet
_template.html      Starter for new pages (never linked in nav)
assets/site.css     Shared styles — edit once, every page updates
assets/nav.js       The page list — the nav bar on every page renders from this
images/<topic>/     Photos for each page, e.g. images/appliances/range.jpg
```

To fill in a stub, replace its "Nothing here yet" note with sections built
from the patterns in `_template.html`, then update its row on the overview
page's table of contents (swap the `empty` class off the link and write a
real one-line status).

## Adding a page (e.g. appliances)

1. Copy the template:
   ```
   cp _template.html appliances.html
   ```
2. Edit the `<title>`, `<h1>`, and subtitle, then fill in cards using the
   examples in the file (each card = photo, name, specs, product link).
3. Register it in the nav — add one line to `PAGES` in `assets/nav.js`:
   ```js
   { href: "appliances.html", title: "Appliances" },
   ```
   The nav bar on **every** page updates automatically, with the current
   page highlighted.

## Pictures

- **Local photos** (your own sample shots): drop them in `images/<topic>/`
  and reference as `images/appliances/range.jpg`. To keep files small,
  resize before adding: `sips -Z 1200 photo.jpg`.
- **Remote product images** (manufacturer sites): use the URL directly,
  like sinks.html does with Kohler's images.
- **Crop behavior**: `class="swatch"` fills the square (good for texture/
  sample photos); `class="swatch fit"` shows the whole image with padding
  (good for product shots on white).

## Conventions

- **Card layouts**: use `<div class="grid">` + `class="card"` for many
  small cards (tile swatches); use `<div class="stack">` + `class="card wide"`
  for pages with only a card or two — image on the left, details on the
  right (stacks vertically on phones).
- **Badges**: green (`tag-green`) = decided/chosen; gold (`tag-gold`) =
  still open / TBD / front-runner. Old names (`tag-pick`, `tag-apron`,
  `tag-under`, `tag-floors`) still work.
- Comparison tables use the `.cmp` block; highlight the winning cell with
  `class="diff"`.
- Keep the "updated <date>" subtitle current when you change a page.
