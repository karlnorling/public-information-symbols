# @public-information-symbols/vue

Vue 3 components (inline SVG) for all **ISO 7001** public information symbols. Tree-shakeable, fully accessible, zero runtime dependencies beyond Vue.

[![npm](https://img.shields.io/npm/v/@public-information-symbols/vue)](https://www.npmjs.com/package/@public-information-symbols/vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/public-information-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @public-information-symbols/vue
# or
yarn add @public-information-symbols/vue
```

---

## Usage

### Named components

```vue
<script setup>
import {
  Ac001FullAccessibilityOrToiletsAccessible,
  Pf001GeneralInformation,
} from "@public-information-symbols/vue";
</script>

<template>
  <Ac001FullAccessibilityOrToiletsAccessible :width="64" />
  <Pf001GeneralInformation :width="64" title="Information desk" />
</template>
```

### Dynamic rendering by ID

Use `SymbolById` when the ID comes from data rather than being known at compile time:

```vue
<script setup>
import { SymbolById } from '@public-information-symbols/vue';
defineProps<{ symbolId: string }>();
</script>

<template>
  <SymbolById :id="symbolId" :width="120" />
</template>
```

Returns `null` for unrecognised IDs.

---

## Props

| Prop          | Type               | Default              | Description                                  |
| ------------- | ------------------ | -------------------- | -------------------------------------------- |
| `width`       | `number \| string` | SVG intrinsic width  | Width of the `<svg>` element                 |
| `height`      | `number \| string` | SVG intrinsic height | Height of the `<svg>` element                |
| `title`       | `string`           | Symbol name          | Accessible title (`<title>` inside SVG)      |
| `description` | `string`           | Symbol description   | Accessible description (`<desc>` inside SVG) |

`SymbolById` also requires:

| Prop | Type     | Description                                                              |
| ---- | -------- | ------------------------------------------------------------------------ |
| `id` | `string` | Symbol slug ID, e.g. `"ac-001-full-accessibility-or-toilets-accessible"` |

---

## Accessibility

Every component renders with `role="img"` and `aria-labelledby` pointing to `<title>` and `<desc>` elements injected inside the SVG.

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7001 symbol SVG graphics are sourced from Wikimedia Commons. See each file's Commons page for the specific licence of its artwork.
