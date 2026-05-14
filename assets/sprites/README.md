# @public-information-symbols/sprite

SVG symbol sprite for all **ISO 7001** public information symbols — embed any symbol inline with `<use href="#id">`.

[![npm](https://img.shields.io/npm/v/@public-information-symbols/sprite)](https://www.npmjs.com/package/@public-information-symbols/sprite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/public-information-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @public-information-symbols/sprite
# or
yarn add @public-information-symbols/sprite
```

---

## Usage

### External file reference (recommended)

Serve `sprite.svg` as a static file and reference any symbol by ID:

```html
<svg width="64" height="64" role="img" aria-label="Full accessibility">
  <title>Full accessibility</title>
  <use href="/path/to/sprite.svg#ac-001" />
</svg>
```

### Inline sprite

Embed the sprite once invisibly at the top of your document to avoid cross-origin `<use>` issues:

```html
<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<!-- Reference any symbol anywhere -->
<svg width="64" height="64" role="img" aria-label="General information">
  <title>General information</title>
  <use href="#pf-001" />
</svg>
```

### React with bundler import

```tsx
import spriteUrl from '@public-information-symbols/sprite/sprite.svg';

function Accessibility() {
  return (
    <svg width={64} height={64} role="img" aria-label="Full accessibility">
      <title>Full accessibility</title>
      <use href={`${spriteUrl}#ac-001`} />
    </svg>
  );
}
```

---

## Symbol IDs

Symbol IDs are the lowercase code slug — e.g. `ac-001`, `pf-015`, `tf-001`. Use `sprite-ids.json` to enumerate all available IDs:

```ts
import ids from '@public-information-symbols/sprite/sprite-ids.json';
// → string[]  e.g. ["ac-001", "ac-002", "pf-001", …]
```

---

## Accessibility

The sprite itself is presentational. Always add `role="img"`, `aria-label`, and a `<title>` child to each referencing `<svg>`:

```html
<svg width="64" height="64" role="img" aria-label="Wheelchair accessible entrance">
  <title>Wheelchair accessible entrance</title>
  <desc>International symbol of access.</desc>
  <use href="#ac-001" />
</svg>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7001 symbol SVG graphics are sourced from Wikimedia Commons. See each file's Commons page for the specific licence of its artwork.
