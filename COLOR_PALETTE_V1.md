# Color Palette V1 — Original (Pre-Revamp)

Use this file to rollback to the original color palette if needed.

## CSS Variables (`app/globals.css` → `@theme`)

```css
--color-primary: #f59f0a;
--color-primary-light: #fcd34d;
--color-primary-dark: #b45309;
--color-background-light: #fcfaf8;
--color-background-dark: #221c10;
--color-neutral-light: #78716c;
--color-neutral-dark: #1c1917;
--color-card-light: #ffffff;
--color-card-dark: #2d261a;
--color-text-main: #1c160d;
--color-text-main-dark: #f4efe7;
--color-text-secondary: #9d7e48;
--color-text-secondary-dark: #d4b886;
--color-wa-green: #25d366;
```

## Shadows (used `rgba(245, 159, 10, ...)` — based on old primary `#f59f0a`)

```css
--shadow-soft: 0 4px 6px -1px rgba(245, 159, 10, 0.1), 0 2px 4px -1px rgba(245, 159, 10, 0.06);
--shadow-glow: 0 10px 15px -3px rgba(245, 159, 10, 0.2), 0 4px 6px -2px rgba(245, 159, 10, 0.1);
```

## Rollback Instructions

Replace the corresponding variables in `app/globals.css` inside the `@theme {}` block with the values above.
