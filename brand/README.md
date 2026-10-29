# YIPT brand assets

Source files for the brand. The website reads from this folder; nothing in it gets recolored, stretched or redrawn.

## Source of truth
- `yipt-logo-592x292.svg`: full logo on cream. Its colors define the palette in `assets/css/tokens.css`.
- `yipt-logo-badge-circle-dark-orange.svg`: round badge on dark. Use for favicon, social card and small placements.

Both SVGs use live text (Black Han Sans / Oswald), not outlines. They render correctly when inlined in a page that loads those fonts. As an `<img>`, the fonts fall back.

## Other files
- `yipt-logo-592x292.png`: raster copy of the cream logo (592px, low-res for retina).
- `yipt-logo-badge-circle-dark-orange_1.png`: exported without the display font (shows a fallback font). Don't use on the site.
- `yipt-logo-light.pdn`, `yipt-logo-dark.pdn`: Paint.NET working files, not web-usable.

## Still needed
- [ ] Logo for dark backgrounds (transparent PNG at 2x, or SVG)
- [ ] Alternate palette (cyan/navy) hex values
