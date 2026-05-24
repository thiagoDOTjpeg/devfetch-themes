# Contributing

Thanks for wanting to add a theme! The process is straightforward.

## Adding a theme

**1. Fork and clone the repo**

**2. Create your theme file**

Add a new file at `themes/<your-theme-id>.json`. The `id` must be kebab-case and unique.

```json
{
  "id": "your-theme-id",
  "label": "Your Theme Name",
  "author": "your-github-username",
  "bg": "#000000",
  "surface": "#111111",
  "border": "#222222",
  "accent": "#ffffff",
  "blue": "#aabbcc",
  "green": "#aabbcc",
  "purple": "#aabbcc",
  "orange": "#aabbcc",
  "yellow": "#aabbcc",
  "text": "#eeeeee",
  "muted": "#888888",
  "artFill": "#444444",
  "artOpacity": 0.1,
  "heat": ["#111111", "#223322", "#335533", "#44aa44"],
  "dots": ["#ff5555", "#ffaa00", "#55ff55"],
  "crosshatch": false,
  "ornate": false
}
```

All colors must be 6-digit hex (`#rrggbb`). `artOpacity` must be between `0` and `1`.

**Field reference:**

| Field | Description |
|-------|-------------|
| `bg` | Main background |
| `surface` | Card/panel background |
| `border` | Borders and dividers |
| `accent` | Headers, ornaments, ASCII art |
| `blue/green/purple/orange/yellow` | Syntax-like semantic colors |
| `text` | Primary text |
| `muted` | Secondary/dim text |
| `artFill` | Background art color |
| `artOpacity` | Background art opacity (0–1) |
| `heat` | Heatmap gradient `[low, mid, high, max]` |
| `dots` | Titlebar dots `[close, minimize, maximize]` |
| `crosshatch` | Enable diagonal crosshatch overlay |
| `ornate` | Enable double borders and diamond corners |

**3. Register it in `index.json`**

Add an entry to the `themes` array:

```json
{
  "id": "your-theme-id",
  "label": "Your Theme Name",
  "author": "your-github-username",
  "file": "themes/your-theme-id.json"
}
```

**4. Validate**

Your JSON must match `schema.json`. You can validate locally with any JSON Schema validator, for example:

```bash
npx ajv-cli validate -s schema.json -d themes/your-theme-id.json
```

**5. Open a pull request**

Use the title format: `feat(theme): add <theme-name>`.

PRs are reviewed for schema compliance and color contrast. Keep original theme palettes accurate — avoid arbitrary recoloring of established themes.
