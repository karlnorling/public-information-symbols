import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as l}from"./blocks-CFPdZ4fe.js";import"./preload-helper-Bcsn5fLb.js";import"./iframe-CEkzhLJW.js";import"./index-BnYVibb5.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"ISO 7001/Vue 3"}),`
`,e.jsx(n.h1,{id:"vue-3-components",children:"Vue 3 Components"}),`
`,e.jsx(n.p,{children:"Inline SVG components for all ISO 7001 public information symbols — fully typed, tree-shakeable, and built for Vue 3's Composition API."}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @public-information-symbols/vue
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsx(n.h3,{id:"dynamic-rendering-by-id",children:"Dynamic rendering by ID"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { SymbolById } from "@public-information-symbols/vue";
<\/script>
<template>
  <SymbolById id="ac-001-full-accessibility-or-toilets-accessible" :width="64" />
</template>
`})}),`
`,e.jsx(n.h3,{id:"named-components",children:"Named components"}),`
`,e.jsx(n.p,{children:"Each symbol has a generated named component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import {
  Ac001FullAccessibilityOrToiletsAccessible,
  Pf001GeneralInformation,
} from "@public-information-symbols/vue";
<\/script>
<template>
  <Ac001FullAccessibilityOrToiletsAccessible :width="64" />
  <Pf001GeneralInformation :width="64" title="Information desk" />
</template>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"props--symbolprops",children:["Props — ",e.jsx(n.code,{children:"SymbolProps"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"width"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number | string"})}),e.jsx(n.td,{children:"SVG intrinsic width"}),e.jsxs(n.td,{children:["Width of the ",e.jsx(n.code,{children:"<svg>"})," element"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"height"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number | string"})}),e.jsx(n.td,{children:"SVG intrinsic height"}),e.jsxs(n.td,{children:["Height of the ",e.jsx(n.code,{children:"<svg>"})," element"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Symbol name"}),e.jsxs(n.td,{children:["Accessible title (",e.jsx(n.code,{children:"<title>"})," inside SVG)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"description"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Symbol description"}),e.jsxs(n.td,{children:["Accessible description (",e.jsx(n.code,{children:"<desc>"})," inside SVG)"]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"all-symbols-grid",children:"All symbols grid"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { SymbolById } from "@public-information-symbols/vue";
import { getAllSymbols } from "@public-information-symbols/core";

const symbols = getAllSymbols();
<\/script>
<template>
  <div style="display:flex; flex-wrap:wrap; gap:0.75rem">
    <div v-for="s in symbols" :key="s.id" style="text-align:center">
      <SymbolById :id="s.id" :width="64" :height="64" />
      <div style="font-size:0.7rem">{{ s.code }}</div>
    </div>
  </div>
</template>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"category-filtering",children:"Category filtering"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { SymbolById } from "@public-information-symbols/vue";
import { getSymbolsByCategory } from "@public-information-symbols/core";

const symbols = getSymbolsByCategory("accessibility");
<\/script>
<template>
  <SymbolById v-for="s in symbols" :key="s.id" :id="s.id" :width="64" />
</template>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"programmatic-api",children:"Programmatic API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { getAllSymbols, getSymbol, getSymbolsByCategory } from "@public-information-symbols/core";

const all = getAllSymbols(); // PISymbol[]
const symbol = getSymbol("ac-001-full-accessibility-or-toilets-accessible"); // PISymbol | undefined
const accessibility = getSymbolsByCategory("accessibility"); // PISymbol[]
`})})]})}function m(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
