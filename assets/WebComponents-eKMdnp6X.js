import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as d,C as i,a as c}from"./blocks-BBHi4z1h.js";import{W as o,A as h,S as l}from"./WebComponents.stories-BlVwnMYH.js";import"./preload-helper-Bcsn5fLb.js";import"./iframe-Ck_nr96i.js";import"./index-a61pA9U_.js";import"./index-BuCz66Rl.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(s.h1,{id:"web-components",children:"Web Components"}),`
`,e.jsx(s.p,{children:"Custom elements for all ISO 7001 public information symbols — framework-agnostic, works with any HTML page or JavaScript framework."}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npm install @public-information-symbols/elements
`})}),`
`,e.jsx(s.h2,{id:"setup",children:"Setup"}),`
`,e.jsxs(s.p,{children:["Call ",e.jsx(s.code,{children:"defineCustomElements()"})," once at app startup to register all custom elements:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { defineCustomElements } from '@public-information-symbols/elements';
defineCustomElements();
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"generic-element--pi-symbol",children:["Generic element — ",e.jsx(s.code,{children:"<pi-symbol>"})]}),`
`,e.jsx(s.p,{children:"Renders any symbol by slug ID. Use this when the symbol ID is dynamic or unknown at build time."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<pi-symbol symbol-id="ac-001-full-accessibility-or-toilets-accessible" width="64"></pi-symbol>
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { defineCustomElements } from '@public-information-symbols/elements';
defineCustomElements();
`})}),`
`,e.jsx(s.h3,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Attribute"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"symbol-id"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"—"}),e.jsxs(s.td,{children:["Slug ID, e.g. ",e.jsx(s.code,{children:"ac-001-full-accessibility-or-toilets-accessible"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"width"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string | number"})}),e.jsx(s.td,{children:"SVG intrinsic"}),e.jsxs(s.td,{children:["Width forwarded to the ",e.jsx(s.code,{children:"<svg>"})," element"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"height"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string | number"})}),e.jsx(s.td,{children:"SVG intrinsic"}),e.jsxs(s.td,{children:["Height forwarded to the ",e.jsx(s.code,{children:"<svg>"})," element"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"title"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"Symbol name"}),e.jsxs(s.td,{children:["Overrides the accessible ",e.jsx(s.code,{children:"<title>"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"description"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"Symbol description"}),e.jsxs(s.td,{children:["Overrides the accessible ",e.jsx(s.code,{children:"<desc>"})]})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"named-elements",children:"Named elements"}),`
`,e.jsxs(s.p,{children:["Each symbol has its own named element — e.g. ",e.jsx(s.code,{children:"<pi-ac-001-full-accessibility-or-toilets-accessible>"}),". Named elements accept the same ",e.jsx(s.code,{children:"width"}),", ",e.jsx(s.code,{children:"height"}),", ",e.jsx(s.code,{children:"title"}),", and ",e.jsx(s.code,{children:"description"})," attributes."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<pi-ac-001-full-accessibility-or-toilets-accessible
  width="64"
></pi-ac-001-full-accessibility-or-toilets-accessible>
<pi-pf-001-general-information width="64"></pi-pf-001-general-information>
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-in-frameworks",children:"Usage in frameworks"}),`
`,e.jsx(s.h3,{id:"vue-3",children:"Vue 3"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-vue",children:`<script setup>
import { defineCustomElements } from '@public-information-symbols/elements';
defineCustomElements();
<\/script>
<template>
  <pi-symbol symbol-id="ac-001-full-accessibility-or-toilets-accessible" width="64" />
</template>
`})}),`
`,e.jsx(s.h3,{id:"angular",children:"Angular"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '@public-information-symbols/elements';
defineCustomElements();

@NgModule({ schemas: [CUSTOM_ELEMENTS_SCHEMA] })
export class AppModule {}
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"all-symbols",children:"All symbols"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"single-symbol-with-controls",children:"Single symbol with controls"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(c,{of:l})]})}function f(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{f as default};
