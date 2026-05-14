# @public-information-symbols/core

Typed symbol data and lookup functions for all **ISO 7001** public information symbols.

[![npm](https://img.shields.io/npm/v/@public-information-symbols/core)](https://www.npmjs.com/package/@public-information-symbols/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/public-information-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @public-information-symbols/core
# or
yarn add @public-information-symbols/core
```

---

## Usage

```ts
import { getAllSymbols, getSymbol, getSymbolsByCategory } from '@public-information-symbols/core';

// All symbols
const all = getAllSymbols();

// Single symbol by slug ID
const symbol = getSymbol('ac-001-full-accessibility-or-toilets-accessible');
// → PISymbol | undefined

// Symbols by category
const accessibility = getSymbolsByCategory('accessibility');
const transport = getSymbolsByCategory('transportation');
```

---

## API

### `getAllSymbols(): PISymbol[]`

Returns all 178 ISO 7001 public information symbols.

### `getSymbol(id: string): PISymbol | undefined`

Returns a single symbol by its slug ID (e.g. `"ac-001-full-accessibility-or-toilets-accessible"`), or `undefined` if not found.

### `getSymbolsByCategory(category: SymbolCategory): PISymbol[]`

Returns all symbols in a category. Categories: `"accessibility"`, `"public-facilities"`, `"transportation"`, `"behaviour"`, `"commercial"`, `"tourism"`, `"sporting"`.

---

## Types

```ts
type SymbolCategory =
  | 'accessibility'
  | 'public-facilities'
  | 'transportation'
  | 'behaviour'
  | 'commercial'
  | 'tourism'
  | 'sporting';

interface PISymbol {
  assets: SymbolAssets;
  category: SymbolCategory;
  code: string; // e.g. "AC 001"
  description: string; // accessible description
  id: string; // e.g. "ac-001-full-accessibility-or-toilets-accessible"
  name: string; // e.g. "Full accessibility or toilets - accessible"
  svg: string; // inline SVG markup
}

interface SymbolAssets {
  jpg: Record<number, string>; // size → relative path (240, 512, 768, 1024, 2048)
  png: Record<number, string>;
  svg: string; // relative path to original SVG
  webp: Record<number, string>;
}
```

---

## ISO 7001 Categories

| Category            | Prefix | Description                                                        |
| ------------------- | ------ | ------------------------------------------------------------------ |
| Accessibility       | AC     | Wheelchair access, hearing loop, assistance dogs, priority seating |
| Public Facilities   | PF     | Toilets, information, elevator, recycling, shower, baby care       |
| Transportation      | TF     | Airport, taxi, parking, baggage, vehicle charging, ferry           |
| Behaviour           | BP     | Queue here, no photography, silence, phone charging                |
| Commercial          | CF     | Restaurant, hotel, pharmacy, shop, cinema, ATM                     |
| Tourism & Culture   | TC     | Museum, camping, trail, planetarium, gallery                       |
| Sporting Activities | SA     | Athletic facilities                                                |

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7001 symbol SVG graphics are sourced from Wikimedia Commons. See each file's Commons page for the specific licence of its artwork.
