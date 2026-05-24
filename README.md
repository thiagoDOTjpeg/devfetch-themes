# devfetch-themes

Community theme registry for [devfetch](https://github.com/thiagoDOTjpeg/devfetch). Themes are served directly via GitHub's CDN — no backend, no package manager.

## Available themes

| Theme | Author | Preview |
|-------|--------|---------|
| Gustave Doré | devfetch | `#0c0906` `#c9a84c` |
| GitHub Dark | devfetch | `#0d1117` `#58a6ff` |
| Nord | devfetch | `#2e3440` `#88c0d0` |
| Catppuccin | devfetch | `#1e1e2e` `#cba6f7` |
| Tokyo Night | enkia | `#1a1b2e` `#7aa2f7` |

## How it works

devfetch fetches the theme index at runtime from this repo's raw GitHub URL:

```
https://raw.githubusercontent.com/thiagoDOTjpeg/devfetch-themes/main/index.json
```

When you select a theme in the admin panel, the full theme JSON is fetched and stored in your config. No requests happen at badge render time.

## Theme schema

Each theme is a JSON file following [`schema.json`](./schema.json). Required fields:

```
id, label, author, bg, surface, border, accent,
blue, green, purple, orange, yellow, text, muted,
artFill, artOpacity, heat[4], dots[3], crosshatch, ornate
```

All colors must be 6-digit hex strings. See [`themes/dore.json`](./themes/dore.json) for a full example.

## Contributing

Want to add your theme? See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT
