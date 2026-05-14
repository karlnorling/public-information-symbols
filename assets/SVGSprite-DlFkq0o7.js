import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as o,C as i,a as c}from"./blocks-CFPdZ4fe.js";import{S as d,A as h,a as r}from"./SVGSprite.stories-ss1lWwqV.js";import"./preload-helper-Bcsn5fLb.js";import"./iframe-CEkzhLJW.js";import"./index-BnYVibb5.js";import"./index-BuCz66Rl.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(s.h1,{id:"svg-sprite",children:"SVG Sprite"}),`
`,e.jsxs(s.p,{children:["A single ",e.jsx(s.code,{children:"sprite.svg"})," contains all ISO 7001 public information symbols as ",e.jsx(s.code,{children:"<symbol>"})," elements. Reference any symbol with ",e.jsx(s.code,{children:'<use href="#id">'})," — one HTTP request serves every symbol."]}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npm install @public-information-symbols/sprite
`})}),`
`,e.jsx(s.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Approach"}),e.jsx(s.th,{children:"Best for"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"SVG sprite"})}),e.jsx(s.td,{children:"Plain HTML, no framework, single network request"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"React components"}),e.jsx(s.td,{children:"React/JSX — richer props, TypeScript, tree-shakeable"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Web Components"}),e.jsx(s.td,{children:"Any framework or plain HTML with JS"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"CSS sprite"}),e.jsx(s.td,{children:"Class-driven usage, CMS output, zero JavaScript"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"external-file-reference-recommended",children:"External file reference (recommended)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<svg width="64" height="64" role="img" aria-label="Full accessibility">
  <title>Full accessibility</title>
  <use href="/path/to/sprite.svg#ac-001" />
</svg>
`})}),`
`,e.jsx(s.h3,{id:"inline-sprite",children:"Inline sprite"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<svg width="64" height="64" role="img" aria-label="Full accessibility">
  <title>Full accessibility</title>
  <use href="#ac-001" />
</svg>
`})}),`
`,e.jsx(s.h3,{id:"react-with-bundler-import",children:"React with bundler import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import spriteUrl from "@public-information-symbols/sprite/sprite.svg";

<svg width={64} height={64} role="img" aria-label="Full accessibility">
  <title>Full accessibility</title>
  <use href={\`\${spriteUrl}#ac-001\`} />
</svg>;
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"symbol-id-pattern",children:"Symbol ID pattern"}),`
`,e.jsxs(s.p,{children:["Symbol IDs are the code slug: ",e.jsx(s.code,{children:"ac-001"}),", ",e.jsx(s.code,{children:"pf-015"}),", ",e.jsx(s.code,{children:"tf-001"}),". Enumerate all IDs from ",e.jsx(s.code,{children:"sprite-ids.json"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import ids from "@public-information-symbols/sprite/sprite-ids.json";
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"all-symbols",children:"All symbols"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"single-symbol-with-controls",children:"Single symbol with controls"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(c,{of:r})]})}function b(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{b as default};
