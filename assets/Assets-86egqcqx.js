import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as r}from"./blocks-BBHi4z1h.js";import"./preload-helper-Bcsn5fLb.js";import"./iframe-Ck_nr96i.js";import"./index-a61pA9U_.js";function n(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"ISO 7001/Assets & API"}),`
`,e.jsx(s.h1,{id:"assets--programmatic-api",children:"Assets & Programmatic API"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"@public-information-symbols/core"})," package exposes typed data for all ISO 7001 symbols alongside helper functions for filtering and lookup. The ",e.jsx(s.code,{children:"@public-information-symbols/assets"})," package provides pre-built image files at multiple resolutions."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npm install @public-information-symbols/core @public-information-symbols/assets
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"programmatic-api",children:"Programmatic API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { getAllSymbols, getSymbol, getSymbolsByCategory } from '@public-information-symbols/core';
`})}),`
`,e.jsx(s.h3,{id:"getallsymbols",children:e.jsx(s.code,{children:"getAllSymbols()"})}),`
`,e.jsx(s.p,{children:"Returns all 178 ISO 7001 symbols."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`const all = getAllSymbols();
// → PISymbol[]
`})}),`
`,e.jsx(s.h3,{id:"getsymbolid",children:e.jsx(s.code,{children:"getSymbol(id)"})}),`
`,e.jsx(s.p,{children:"Look up a single symbol by its slug ID."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`const symbol = getSymbol('ac-001-full-accessibility-or-toilets-accessible');
// → PISymbol | undefined

const info = getSymbol('pf-001-general-information');
`})}),`
`,e.jsx(s.h3,{id:"getsymbolsbycategorycategory",children:e.jsx(s.code,{children:"getSymbolsByCategory(category)"})}),`
`,e.jsx(s.p,{children:"Filter symbols by ISO 7001 category."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`const accessibility = getSymbolsByCategory('accessibility'); // AC-series
const publicFacilities = getSymbolsByCategory('public-facilities'); // PF-series
const transportation = getSymbolsByCategory('transportation'); // TF-series
const behaviour = getSymbolsByCategory('behaviour'); // BP-series
const commercial = getSymbolsByCategory('commercial'); // CF-series
const tourism = getSymbolsByCategory('tourism'); // TC-series
const sporting = getSymbolsByCategory('sporting'); // SA-series
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"pisymbol-type",children:[e.jsx(s.code,{children:"PISymbol"})," type"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`interface PISymbol {
  id: string; // e.g. 'ac-001-full-accessibility-or-toilets-accessible'
  code: string; // e.g. 'AC 001'
  name: string; // e.g. 'Full accessibility or toilets - accessible'
  category: SymbolCategory;
  description: string; // accessible description
  svg: string; // inline SVG markup (SVGO-optimised)
  assets: SymbolAssets;
}

interface SymbolAssets {
  svg: string; // relative path to original SVG
  png: Record<number, string>; // size → relative path (240, 512, 768, 1024, 2048)
  jpg: Record<number, string>; // same sizes
  webp: Record<number, string>; // same sizes
}

type SymbolCategory =
  | 'accessibility'
  | 'public-facilities'
  | 'transportation'
  | 'behaviour'
  | 'commercial'
  | 'tourism'
  | 'sporting';
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"iso-7001-categories",children:"ISO 7001 Categories"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Category"}),e.jsx(s.th,{children:"Prefix"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Accessibility"}),e.jsx(s.td,{children:"AC"}),e.jsx(s.td,{children:"Wheelchair access, hearing loop, assistance dogs, priority seating"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Public Facilities"}),e.jsx(s.td,{children:"PF"}),e.jsx(s.td,{children:"Toilets, information, elevator, recycling, shower, baby care"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Transportation"}),e.jsx(s.td,{children:"TF"}),e.jsx(s.td,{children:"Airport, taxi, parking, baggage, vehicle charging, ferry"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Behaviour"}),e.jsx(s.td,{children:"BP"}),e.jsx(s.td,{children:"Queue here, no photography, silence, phone charging"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Commercial"}),e.jsx(s.td,{children:"CF"}),e.jsx(s.td,{children:"Restaurant, hotel, pharmacy, shop, cinema, ATM"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Tourism & Culture"}),e.jsx(s.td,{children:"TC"}),e.jsx(s.td,{children:"Museum, camping, trail, planetarium, gallery"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Sporting Activities"}),e.jsx(s.td,{children:"SA"}),e.jsx(s.td,{children:"Athletic facilities"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"asset-files",children:"Asset files"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"@public-information-symbols/assets"})," package ships pre-converted raster images at five resolutions (240, 512, 768, 1024, 2048 px²) in PNG, JPG, and WebP formats alongside the original SVGs."]}),`
`,e.jsx(s.h3,{id:"directory-layout",children:"Directory layout"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`assets/
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
`})}),`
`,e.jsx(s.h3,{id:"resolve-asset-paths-via-the-api",children:"Resolve asset paths via the API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { getSymbol } from '@public-information-symbols/core';

const symbol = getSymbol('ac-001-full-accessibility-or-toilets-accessible');
if (symbol) {
  console.log(symbol.assets.svg); // 'accessibility/ac-001/ISO_7001_PI_*.svg'
  console.log(symbol.assets.png[512]); // 'accessibility/ac-001/ISO_7001_PI_*_512x512.png'
  console.log(symbol.assets.webp[240]); // 'accessibility/ac-001/ISO_7001_PI_*_240x240.webp'
}
`})})]})}function h(i={}){const{wrapper:s}={...t(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{h as default};
