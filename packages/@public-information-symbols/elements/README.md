# @public-information-symbols/elements

Accessible Web Components (Custom Elements) for all **ISO 7001** public information symbols — framework-agnostic, zero runtime dependencies.

[![npm](https://img.shields.io/npm/v/@public-information-symbols/elements)](https://www.npmjs.com/package/@public-information-symbols/elements)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/public-information-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @public-information-symbols/elements
# or
yarn add @public-information-symbols/elements
```

---

## Usage

### Register all elements

```ts
import { defineCustomElements } from '@public-information-symbols/elements';
defineCustomElements();
```

Then use the elements in HTML:

```html
<!-- Generic element — render any symbol by ID -->
<pi-symbol symbol-id="ac-001-full-accessibility-or-toilets-accessible" width="64"></pi-symbol>

<!-- Named elements -->
<pi-ac-001-full-accessibility-or-toilets-accessible width="64"></pi-ac-001-full-accessibility-or-toilets-accessible>
<pi-pf-001-general-information width="64"></pi-pf-001-general-information>
```

### Custom prefix

Avoid tag-name conflicts with other libraries by passing a custom prefix:

```ts
defineCustomElements('pub');
// Registers: pub-symbol, pub-ac-001-full-accessibility-or-toilets-accessible, …
```

---

## Attributes

All elements accept the same attributes:

| Attribute     | Default              | Description                                                               |
| ------------- | -------------------- | ------------------------------------------------------------------------- |
| `symbol-id`   | —                    | Symbol slug ID (`<pi-symbol>` only), e.g. `"ac-001-full-accessibility-or-toilets-accessible"` |
| `title`       | Symbol name          | Accessible title (`<title>` inside SVG)                                   |
| `description` | Symbol description   | Accessible description (`<desc>` inside SVG)                              |
| `width`       | SVG intrinsic width  | Forwarded to the `<svg>` width attribute                                  |
| `height`      | SVG intrinsic height | Forwarded to the `<svg>` height attribute                                 |

All attributes are reactive — changing them re-renders the SVG.

---

## Framework usage

### Vue 3

```vue
<template>
  <pi-symbol symbol-id="ac-001-full-accessibility-or-toilets-accessible" width="64" />
</template>
```

### Angular

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '@public-information-symbols/elements';
defineCustomElements();

@NgModule({ schemas: [CUSTOM_ELEMENTS_SCHEMA] })
export class AppModule {}
```

---

## Accessibility

Each element renders with `role="img"` and `aria-labelledby` pointing to a `<title>` and `<desc>` injected inside the SVG. The host element gets `display: contents` so it is transparent to layout.

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7001 symbol SVG graphics are sourced from Wikimedia Commons. See each file's Commons page for the specific licence of its artwork.
