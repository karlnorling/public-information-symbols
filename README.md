# public-information-symbols

Accessible, framework-agnostic packages for all **178 ISO 7001** public information symbols — SVG, React, Vue 3, Web Components, CSS sprite, and static assets.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Storybook](https://img.shields.io/badge/Storybook-docs-FF4785)](https://karlnorling.github.io/public-information-symbols/)

---

## Packages

| Package | npm | Description |
| ------- | --- | ----------- |
| [`@public-information-symbols/core`](packages/@public-information-symbols/core) | [![npm](https://img.shields.io/npm/v/@public-information-symbols/core)](https://www.npmjs.com/package/@public-information-symbols/core) | Typed symbol data and lookup functions |
| [`@public-information-symbols/react`](packages/@public-information-symbols/react) | [![npm](https://img.shields.io/npm/v/@public-information-symbols/react)](https://www.npmjs.com/package/@public-information-symbols/react) | React components (inline SVG) |
| [`@public-information-symbols/vue`](packages/@public-information-symbols/vue) | [![npm](https://img.shields.io/npm/v/@public-information-symbols/vue)](https://www.npmjs.com/package/@public-information-symbols/vue) | Vue 3 components (inline SVG) |
| [`@public-information-symbols/elements`](packages/@public-information-symbols/elements) | [![npm](https://img.shields.io/npm/v/@public-information-symbols/elements)](https://www.npmjs.com/package/@public-information-symbols/elements) | Web Components (Custom Elements) |
| [`@public-information-symbols/css`](packages/@public-information-symbols/css) | [![npm](https://img.shields.io/npm/v/@public-information-symbols/css)](https://www.npmjs.com/package/@public-information-symbols/css) | CSS sprite (background-image) |
| [`@public-information-symbols/sprite`](packages/@public-information-symbols/sprite) | [![npm](https://img.shields.io/npm/v/@public-information-symbols/sprite)](https://www.npmjs.com/package/@public-information-symbols/sprite) | SVG sprite sheet |
| [`@public-information-symbols/assets`](packages/@public-information-symbols/assets) | [![npm](https://img.shields.io/npm/v/@public-information-symbols/assets)](https://www.npmjs.com/package/@public-information-symbols/assets) | Static SVG/PNG/JPG/WebP files (240–2048 px) |

---

## Quick start

Install the package for your framework:

```sh
# React
npm install @public-information-symbols/react

# Vue 3
npm install @public-information-symbols/vue

# Web Components (framework-agnostic)
npm install @public-information-symbols/elements

# CSS sprite (no JS required)
npm install @public-information-symbols/css
```

### React

```tsx
import { Ac001FullAccessibilityOrToiletsAccessible, SymbolById } from '@public-information-symbols/react';

<Ac001FullAccessibilityOrToiletsAccessible width={64} />
<SymbolById id="pf-001-general-information" width={64} />
```

### Vue 3

```vue
<script setup>
import { Ac001FullAccessibilityOrToiletsAccessible } from '@public-information-symbols/vue';
</script>
<template>
  <Ac001FullAccessibilityOrToiletsAccessible :width="64" />
</template>
```

### Web Components

```ts
import { defineCustomElements } from '@public-information-symbols/elements';
defineCustomElements();
```

```html
<pi-symbol symbol-id="ac-001-full-accessibility-or-toilets-accessible" width="64"></pi-symbol>
```

### CSS sprite

```js
import '@public-information-symbols/css/sprite.css';
```

```html
<span class="pi-ac-001" style="display:inline-block;width:64px;height:64px" role="img" aria-label="Full accessibility"></span>
```

---

## ISO 7001 Categories

| Category            | Prefix | Symbols |
| ------------------- | ------ | ------- |
| Accessibility       | AC     | 22      |
| Public Facilities   | PF     | 47      |
| Transportation      | TF     | 38      |
| Behaviour           | BP     | 27      |
| Commercial          | CF     | 22      |
| Tourism & Culture   | TC     | 15      |
| Sporting Activities | SA     | 7       |

---

## Development

```sh
# Install dependencies
yarn install

# Download SVGs and generate raster assets
yarn update

# Generate TypeScript source from assets
yarn generate

# Build all packages
yarn build

# Run Storybook
yarn storybook
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7001 symbol SVG graphics are sourced from Wikimedia Commons. See each file's Commons page for the specific licence of its artwork.
