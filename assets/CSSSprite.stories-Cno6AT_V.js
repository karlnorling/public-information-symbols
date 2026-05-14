import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as A}from"./index-BuCz66Rl.js";const $=({size:s})=>{const l=A().map(r=>`.${`pi-${r.code.toLowerCase().replace(" ","-")}`} { background-image: url('/assets/${r.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`).join(`
`),p=`.pi-icon { display: inline-block; width: ${s}px; height: ${s}px; }`;return e.jsx("style",{children:`${l}
${p}`})},c=({size:s=96,category:a})=>{const l=A(),p=a?l.filter(r=>r.category===a):l;return p.length===0?e.jsxs("p",{style:{color:"#888",fontFamily:"sans-serif"},children:["No symbols loaded. Run ",e.jsx("code",{children:"yarn update"})," to populate symbol data."]}):e.jsxs(e.Fragment,{children:[e.jsx($,{size:s}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem",padding:"1rem"},children:p.map(r=>{const d=`pi-${r.code.toLowerCase().replace(" ","-")}`;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx("span",{className:`pi-icon ${d}`,role:"img","aria-label":r.name,title:r.name}),e.jsx("span",{style:{fontSize:"0.7rem",textAlign:"center",color:"#555"},children:r.code})]},r.id)})})]})},F={title:"ISO 7001/CSS Sprite",component:c,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:32,max:256,step:8}},category:{control:"select",options:["","accessibility","public-facilities","transportation","behaviour","commercial","tourism","sporting"]}}},i={name:"All Symbols",render:({size:s,category:a})=>e.jsx(c,{size:s,category:a}),args:{size:96}},t={render:({size:s})=>e.jsx(c,{size:s,category:"accessibility"}),args:{size:96}},o={name:"Public Facilities",render:({size:s})=>e.jsx(c,{size:s,category:"public-facilities"}),args:{size:96}},n={render:({size:s})=>e.jsx(c,{size:s,category:"transportation"}),args:{size:96}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "All Symbols",
  render: ({
    size,
    category
  }) => <CSSGrid size={size} category={category} />,
  args: {
    size: 96
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,b,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    size
  }) => <CSSGrid size={size} category="accessibility" />,
  args: {
    size: 96
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,z,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Public Facilities",
  render: ({
    size
  }) => <CSSGrid size={size} category="public-facilities" />,
  args: {
    size: 96
  }
}`,...(j=(z=o.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var f,h,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    size
  }) => <CSSGrid size={size} category="transportation" />,
  args: {
    size: 96
  }
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const P=["AllSymbols","Accessibility","PublicFacilities","Transportation"],v=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:t,AllSymbols:i,PublicFacilities:o,Transportation:n,__namedExportsOrder:P,default:F},Symbol.toStringTag,{value:"Module"}));export{i as A,v as C,o as P,n as T,t as a};
