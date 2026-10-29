# Yeah, I'd Print That (YIPT)

Website for YIPT: 3D printing for everyone. Plain HTML, CSS and a little JavaScript, hosted on GitHub Pages. No build step.

## Folder layout

```
brand/               source logos (never edited; see brand/README.md)
assets/css/tokens.css  every color, font, size and spacing value
assets/css/site.css    layout and components (uses tokens only)
assets/js/site.js      mobile menu toggle (the only JS)
assets/icons/          favicons and app icons, made from the badge
assets/images/         photos, placeholders and og-card.png (sharing image)
blog/                  blog index, _template.html, one file per post
*.html                 the pages
404.html               "page not found" (links use root paths)
sitemap.xml, robots.txt, site.webmanifest, favicon.ico
styleguide.html        internal reference for every token and component
CHANGELOG.md           what changed in each version
```

## Preview on your computer

From this folder, run:

```
py -m http.server 8080
```

then open http://127.0.0.1:8080. (Opening the files directly also works, except the 404 page.)

## Common edits

- **Colors, fonts, sizes:** `assets/css/tokens.css`. Everything else follows.
- **Header or footer:** copied into every page. Search for `SITE HEADER` / `SITE FOOTER` and change them all.
- **Add a print:** see the comment above the grid in `gallery.html`. Photos are portrait 4:5.
- **Write a blog post:** see the comment at the top of `blog/_template.html`. Then add a card to `blog/index.html` and a line to `sitemap.xml`.
- **Placeholder copy:** search for `[PLACEHOLDER]`.
- **Page title or description:** each page repeats them in its `og:title` / `og:description` tags. Change both.

## Going live on GitHub Pages

1. Push this folder to a GitHub repository (public, for free GitHub Pages).
2. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repo>/` within a minute or two. Note: on that address the 404 page's links point at the wrong place; they work once the custom domain is set up.

## Connecting yeahidprintthat.com

After registering the domain:

1. In **Settings → Pages → Custom domain**, enter `www.yeahidprintthat.com` and save. GitHub adds a `CNAME` file to the repo; pull it.
2. At your domain registrar, add DNS records:
   - `CNAME` record: `www` → `<username>.github.io`
   - `A` records for the bare domain (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Once GitHub shows the domain as verified, tick **Enforce HTTPS**.

The canonical links, sharing tags and sitemap already use `https://www.yeahidprintthat.com`.
