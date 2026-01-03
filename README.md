# Personal site — Jeevan Bhoot

## Structure
- `index.md` — homepage with banner hero, about note, selected projects, and recent posts.
- `writing.md` — list of all posts.
- `_posts/` — Markdown posts (see the included example).
- `_layouts/default.html` — base layout with navigation and footer.
- `assets/css/style.css` — bespoke styling (no frameworks).
- `assets/avatar.jpeg` — placeholder asset.

## Local development
```bash
bundle install        # first run
bundle exec jekyll serve
# open http://localhost:4000
```

## Customization
- Update contact links (hero + footer) to your email/links (`hello@jeevanbhoot.com` is a placeholder).
- Replace the hero artwork by setting `--hero-image` in `assets/css/style.css` to your commissioned image/gradient.
- Add posts by creating new files in `_posts/YYYY-MM-DD-title.md` with `type: post` in front matter.
- Colors, spacing, and typography live in `assets/css/style.css` via CSS variables.
