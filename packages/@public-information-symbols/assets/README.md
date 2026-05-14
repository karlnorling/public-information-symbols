# @public-information-symbols/assets

Static image assets for all **ISO 7001** public information symbols — SVG, PNG, JPG, and WebP at five sizes (240–2048 px).

[![npm](https://img.shields.io/npm/v/@public-information-symbols/assets)](https://www.npmjs.com/package/@public-information-symbols/assets)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/public-information-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @public-information-symbols/assets
# or
yarn add @public-information-symbols/assets
```

---

## Directory layout

Assets are organised by ISO 7001 category and symbol code:

```
assets/
  accessibility/
    ac-001/
      ISO_7001_PI_*.svg
      ISO_7001_PI_*_240x240.png
      ISO_7001_PI_*_512x512.png
      ISO_7001_PI_*_768x768.png
      ISO_7001_PI_*_1024x1024.png
      ISO_7001_PI_*_2048x2048.png
      ISO_7001_PI_*_240x240.jpg
      ISO_7001_PI_*_240x240.webp
      …
  public-facilities/
  transportation/
  behaviour/
  commercial/
  tourism/
  sporting/
```

---

## Usage

### Import by path

```ts
import accessibility from '@public-information-symbols/assets/assets/accessibility/ac-001/ISO_7001_PI_PF_006.svg';
```

### Resolve paths via the core API

```ts
import { getSymbol } from '@public-information-symbols/core';

const symbol = getSymbol('ac-001-full-accessibility-or-toilets-accessible');
if (symbol) {
  console.log(symbol.assets.svg); // 'accessibility/ac-001/ISO_7001_PI_*.svg'
  console.log(symbol.assets.png[512]); // 'accessibility/ac-001/ISO_7001_PI_*_512x512.png'
  console.log(symbol.assets.webp[240]); // 'accessibility/ac-001/ISO_7001_PI_*_240x240.webp'
}
```

---

## Available sizes

Each raster format is generated at five sizes:

| Size | Pixels      |
| ---- | ----------- |
| xs   | 240 × 240   |
| sm   | 512 × 512   |
| md   | 768 × 768   |
| lg   | 1024 × 1024 |
| xl   | 2048 × 2048 |

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7001 symbol SVG graphics are sourced from Wikimedia Commons. See each file's Commons page for the specific licence of its artwork.
