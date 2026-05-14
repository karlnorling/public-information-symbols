# @public-information-symbols/react

React components (inline SVG) for all **ISO 7001** public information symbols. Tree-shakeable, fully accessible, zero runtime dependencies beyond React.

[![npm](https://img.shields.io/npm/v/@public-information-symbols/react)](https://www.npmjs.com/package/@public-information-symbols/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/public-information-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @public-information-symbols/react
# or
yarn add @public-information-symbols/react
```

---

## Usage

### Named components

Each ISO 7001 symbol is a named component in PascalCase derived from its slug ID:

```tsx
import {
  Ac001FullAccessibilityOrToiletsAccessible,
  Pf001GeneralInformation,
  Tf001Airport,
} from '@public-information-symbols/react';

export default function SignagePanel() {
  return (
    <>
      <Ac001FullAccessibilityOrToiletsAccessible width={64} />
      <Pf001GeneralInformation width={64} title="Information desk" />
      <Tf001Airport width={64} />
    </>
  );
}
```

### Dynamic rendering by ID

Use `SymbolById` when the symbol ID comes from an API response or user input:

```tsx
import { SymbolById } from '@public-information-symbols/react';

<SymbolById id="ac-001-full-accessibility-or-toilets-accessible" width={120} />
<SymbolById id={symbolId} width={64} height={64} />
```

Returns `null` for unrecognised IDs — no error thrown.

---

## Props

Every component and `SymbolById` accept the same props:

| Prop          | Type                  | Default              | Description                                          |
| ------------- | --------------------- | -------------------- | ---------------------------------------------------- |
| `width`       | `number \| string`    | SVG intrinsic width  | Width of the `<svg>` element                         |
| `height`      | `number \| string`    | SVG intrinsic height | Height of the `<svg>` element                        |
| `title`       | `string`              | Symbol name          | Accessible title (`<title>` inside SVG)              |
| `description` | `string`              | Symbol description   | Accessible description (`<desc>` inside SVG)         |
| `className`   | `string`              | —                    | CSS class forwarded to the root `<span>` wrapper     |
| `style`       | `React.CSSProperties` | —                    | Inline styles forwarded to the root `<span>` wrapper |

`SymbolById` also requires:

| Prop | Type     | Description                                                      |
| ---- | -------- | ---------------------------------------------------------------- |
| `id` | `string` | Symbol slug ID, e.g. `"ac-001-full-accessibility-or-toilets-accessible"` |

---

## Accessibility

Every component renders `role="img"` with `aria-labelledby` pointing to a `<title>` and `<desc>` injected inside the SVG. Screen readers announce the symbol name and description automatically.

Override defaults when needed:

```tsx
<Ac001FullAccessibilityOrToiletsAccessible
  width={120}
  title="Wheelchair accessible entrance"
  description="International symbol of access"
/>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7001 symbol SVG graphics are sourced from Wikimedia Commons. See each file's Commons page for the specific licence of its artwork.
