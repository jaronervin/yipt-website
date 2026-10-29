# Changelog

## v0.7.0 (2026-10-29): SEO, sharing and launch prep (build step 7)
- Favicons and app icons in `assets/icons/` plus `favicon.ico`, rendered from the original badge SVG with its real fonts. (The old `brand/...badge..._1.png` export had a fallback font; these don't.)
- Sharing image `assets/images/og-card.png` (1200x630): the cream logo, unchanged, framed in orange on the dark background.
- Every public page now has a canonical link, Open Graph tags (title, description, image) and a large-image Twitter/X card. The blog post uses `og:type` "article".
- Added `sitemap.xml`, `robots.txt`, `site.webmanifest` and a `404.html` ("Yeah, we didn't print that.").
- Added `README.md` (folder layout, previewing, common edits, GitHub Pages and domain setup) and `.gitignore`.
- All addresses assume `https://www.yeahidprintthat.com`. There's no `CNAME` file yet; GitHub creates it when the custom domain is set.
- Shortened the welcome post's page title (it repeated the site name).

## v0.6.0 (2026-10-29): About and Contact (build step 6)
- Added `about.html`: intro, "How this started" story with a 4:5 photo, three promises (no jargon, show the process, make it fun), a workshop gear list and a call to action. The story is an outline for you to write in your own words.
- Added `contact.html`: email panel with a mailto link and button, plus "Good things to write about" and a pointer to the FAQ. Plain email link only; GitHub Pages can't process forms.
- The email address `hello@yeahidprintthat.com` is a placeholder: it appears twice in `contact.html` (link text and `mailto:`).
- New styles in `site.css` section 12: picture/text split layout and the contact panel.
- Every page now exists, so no nav link leads to a 404. Checked all internal links across 9 pages (none broken) and every page at phone width (no sideways scrolling, one `<h1>` each, the right nav item highlighted).

## v0.5.0 (2026-10-29): Blog (build step 5)
- Added `blog/index.html`: page intro and a newest-first grid of post cards. The whole card is clickable.
- Added `blog/_template.html`: a post page that demonstrates every text element (headings, lists, photo with caption, pull quote). Instructions for writing a new post are in its top comment. It carries a `noindex` tag; delete that line in real posts.
- Added `blog/hello-world.html`, a first "Welcome" post made from the template (copy marked `[PLACEHOLDER]`).
- Blog pages live one folder down, so their links and stylesheets use `../`.
- Added `assets/images/placeholder-16x9.svg` for post images.
- New styles in `site.css` section 11: post meta line, post cards, post header, long-form text (lists, figures, quotes) and the post footer.

## v0.4.0 (2026-10-29): Gallery (build step 4)
- Added `gallery.html`: page intro, a grid of 8 placeholder print cards, and a "Want one?" call to action that points to the contact page (no shop yet).
- Each card has a photo, title, short description and a spec line (material, print time, layer height) that ties the art back to how it was made.
- Cards use real `<img>` tags pointing at `assets/images/placeholder-4x5.svg`, so adding a print means changing the file name, not the markup. The first row loads right away; the rest load lazily.
- A comment above the grid explains how to add a real print, including the two photo sizes to export and the `srcset` markup.
- New styles in `site.css` section 10: 4:5 photo frame and the spec line.

## v0.3.0 (2026-10-29): How It's Made (build step 3)
- Added `how-its-made.html`: page intro with jump links, "What is 3D printing?", four illustrated steps (find/design, slice, print, finish), materials (PLA, PETG, TPU, resin), a "Words you'll hear" glossary, an FAQ and a call to action pointing to the gallery.
- Copy is written as a real first draft, but every block is still marked `[PLACEHOLDER]` for your review.
- New styles in `site.css` section 9: page intro, jump-link pills, alternating picture/text steps, glossary cards, and FAQ dropdowns using native `<details>` (no JS).
- Placeholder photos are 4:3. Shot list: a 3D model on screen, slicer software, the printer mid-print, a finished painted print.

## v0.2.0 (2026-10-29): Header, footer and home page (build step 2)
- Added `index.html`: hero, "How a print happens" in three steps, featured prints, latest blog posts and a closing call to action. All copy is marked `[PLACEHOLDER]`.
- Shared header: round badge (inlined from the brand SVG so it uses the real fonts) plus main nav. On phones the nav collapses behind a Menu button; tablet and up shows it in a row with an orange underline on the current page.
- Shared footer: tagline, copyright, footer nav, placeholder for social links.
- The hero shows the full cream logo as-is in a rounded panel until the dark-background version is ready.
- Added `assets/js/site.js`: mobile menu toggle (Escape closes it). Without JS, the nav just stays open.
- New token: `--header-badge-size` (4rem).
- Nav links to pages that don't exist yet (How It's Made, Gallery, Blog, About, Contact) show a 404 locally until those steps are built.

## v0.1.0 (2026-10-29): Tokens and base styles (build step 1)
- Copied the original SVG logos from Downloads into `brand/`. Their colors are the source of truth.
- Added `assets/css/tokens.css`: brand colors, primary palette, type scale, spacing, layout, motion and focus tokens. The alternate cyan/navy palette is stubbed as a TODO.
- Added `assets/css/site.css`: reset, base typography, focus states, skip link, reduced-motion support, container/section/grid layout, buttons, cards, `[PLACEHOLDER]` tags and placeholder image boxes.
- Added `styleguide.html` (noindex) to review every token and component in one place.
- Contrast check: cream, yellow, orange and gray all pass on the dark background. Orange or gray text on cream fails (2.5:1), so use orange only as decoration on light sections.
