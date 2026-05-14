import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as d,C as i,a as l}from"./blocks-CFPdZ4fe.js";import{R as o,S as r,A as h,P as a,T as x,B as j,C as m,a as p,b}from"./ReactComponents.stories-BkL-Q5kj.js";import"./preload-helper-Bcsn5fLb.js";import"./iframe-CEkzhLJW.js";import"./index-BnYVibb5.js";import"./index-BuCz66Rl.js";function c(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(s.h1,{id:"react-components",children:"React Components"}),`
`,e.jsxs(s.p,{children:["Inline SVG components for all ISO 7001 public information symbols. Each component is tree-shakeable, fully accessible, and accepts the same ",e.jsx(s.code,{children:"SymbolProps"})," interface."]}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npm install @public-information-symbols/react
`})}),`
`,e.jsx(s.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsx(s.p,{children:"Named components are generated for every symbol:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import {
  Ac001FullAccessibilityOrToiletsAccessible,
  Pf001GeneralInformation,
} from "@public-information-symbols/react";

export default function SignagePanel() {
  return (
    <>
      <Ac001FullAccessibilityOrToiletsAccessible width={64} />
      <Pf001GeneralInformation width={64} title="Information desk" />
    </>
  );
}
`})}),`
`,e.jsx(s.h2,{id:"dynamic-rendering-by-id",children:"Dynamic rendering by ID"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { SymbolById } from "@public-information-symbols/react";

<SymbolById id="ac-001-full-accessibility-or-toilets-accessible" width={64} />;
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"props-reference--symbolprops",children:["Props reference — ",e.jsx(s.code,{children:"SymbolProps"})]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Prop"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"width"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number | string"})}),e.jsx(s.td,{children:"SVG intrinsic width"}),e.jsxs(s.td,{children:["Width of the ",e.jsx(s.code,{children:"<svg>"})," element"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"height"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number | string"})}),e.jsx(s.td,{children:"SVG intrinsic height"}),e.jsxs(s.td,{children:["Height of the ",e.jsx(s.code,{children:"<svg>"})," element"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"title"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"Symbol name"}),e.jsxs(s.td,{children:["Accessible title (",e.jsx(s.code,{children:"<title>"})," inside SVG)"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"description"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"Symbol description"}),e.jsxs(s.td,{children:["Accessible description (",e.jsx(s.code,{children:"<desc>"})," inside SVG)"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"className"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"—"}),e.jsxs(s.td,{children:["CSS class on the root ",e.jsx(s.code,{children:"<span>"})," wrapper"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"style"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"React.CSSProperties"})}),e.jsx(s.td,{children:"—"}),e.jsxs(s.td,{children:["Inline styles on the root ",e.jsx(s.code,{children:"<span>"})," wrapper"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"aria-label"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"—"}),e.jsxs(s.td,{children:["Overrides ",e.jsx(s.code,{children:"aria-labelledby"})," with a direct label"]})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"categories",children:"Categories"}),`
`,e.jsx(s.h3,{id:"accessibility-ac",children:"Accessibility (AC)"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h3,{id:"public-facilities-pf",children:"Public Facilities (PF)"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(s.h3,{id:"transportation-tf",children:"Transportation (TF)"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h3,{id:"behaviour-bp",children:"Behaviour (BP)"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h3,{id:"commercial-cf",children:"Commercial (CF)"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s.h3,{id:"tourism--culture-tc",children:"Tourism & Culture (TC)"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.h3,{id:"sporting-activities-sa",children:"Sporting Activities (SA)"}),`
`,e.jsx(i,{of:b})]})}function P(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(c,{...n})}):c(n)}export{P as default};
