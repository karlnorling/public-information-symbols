# @public-information-symbols/css

CSS background-image sprite for all **ISO 7001** public information symbols — class-based display, no JavaScript required.

[![npm](https://img.shields.io/npm/v/@public-information-symbols/css)](https://www.npmjs.com/package/@public-information-symbols/css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/public-information-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @public-information-symbols/css
# or
yarn add @public-information-symbols/css
```

---

## Setup

Import the stylesheet once in your entry point:

```js
import '@public-information-symbols/css/sprite.css';
```

```css
@import '@public-information-symbols/css/sprite.css';
```

---

## Usage

Apply a class to any block element with explicit dimensions:

```html
<span
  class="pi-ac-001"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Full accessibility"
></span>

<span
  class="pi-pf-001"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="General information"
></span>
```

---

## Class name pattern

CSS class names follow the pattern `pi-{code}` where `{code}` is the lowercase ISO 7001 code:

| Symbol                      | CSS class   |
| --------------------------- | ----------- |
| AC 001 Full accessibility   | `pi-ac-001` |
| PF 001 General information  | `pi-pf-001` |
| TF 001 Airport              | `pi-tf-001` |
| BP 001 Queue here           | `pi-bp-001` |
| CF 001 Restaurant           | `pi-cf-001` |
| TC 001 Museum               | `pi-tc-001` |
| SA 001 Sporting activities  | `pi-sa-001` |

---

## Accessibility

CSS background-images are not exposed to the accessibility tree. Always pair the element with `role="img"` and `aria-label`:

```html
<span
  class="pi-ac-001"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Full accessibility"
  title="Full accessibility"
></span>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7001 symbol SVG graphics are sourced from Wikimedia Commons. See each file's Commons page for the specific licence of its artwork.
