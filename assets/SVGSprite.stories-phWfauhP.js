import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Ck_nr96i.js";import{g as A}from"./index-BuCz66Rl.js";const z=()=>{const[e,n]=p.useState("");return p.useEffect(()=>{fetch("/public-information-symbols/assets/sprites/sprite.svg").then(s=>s.text()).then(n).catch(()=>{})},[]),e?r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",width:0,height:0,overflow:"hidden"},dangerouslySetInnerHTML:{__html:e}}):null},_=({id:e,label:n,size:s=120})=>r.jsxs("svg",{width:s,height:s,role:"img","aria-label":n,style:{display:"block"},children:[r.jsx("title",{children:n}),r.jsx("use",{href:`#${e}`})]}),c=A(),m=({size:e=120,category:n})=>{const s=n?c.filter(t=>t.category===n):c,L=t=>t.split("-").slice(0,2).join("-");return r.jsxs(r.Fragment,{children:[r.jsx(z,{}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem",padding:"1rem"},children:s.map(t=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[r.jsx(_,{id:L(t.id),label:t.name,size:e}),r.jsx("span",{style:{fontSize:"0.75rem",textAlign:"center",color:"#555"},children:t.code})]},t.id))})]})},O=({id:e,label:n,size:s})=>r.jsxs(r.Fragment,{children:[r.jsx(z,{}),r.jsx(_,{id:e,label:n,size:s})]}),E={title:"ISO 7001/SVG Sprite",component:m,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:32,max:512,step:8}},category:{control:"select",options:["","accessibility","public-facilities","transportation","behaviour","commercial","tourism","sporting"]}}},a={name:"All Symbols",render:({size:e,category:n})=>r.jsx(m,{size:e,category:n}),args:{size:120}},i={name:"All Large",render:({size:e,category:n})=>r.jsx(m,{size:e,category:n}),args:{size:200}},l=c.map(e=>({id:e.id.split("-").slice(0,2).join("-"),label:`${e.code} — ${e.name}`}));var d,S;const o={name:"Single Icon",parameters:{layout:"centered"},render:e=>r.jsx(O,{...e}),args:{id:((d=l[0])==null?void 0:d.id)??"ac-001",label:((S=l[0])==null?void 0:S.label)??"AC 001",size:200},argTypes:{id:{control:"select",options:l.map(e=>e.id),labels:Object.fromEntries(l.map(e=>[e.id,e.label]))},label:{control:"text"},size:{control:{type:"number",min:32,max:512,step:8}}}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'All Symbols',
  render: ({
    size,
    category
  }) => <SpriteGrid size={size} category={category} />,
  args: {
    size: 120
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,x,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'All Large',
  render: ({
    size,
    category
  }) => <SpriteGrid size={size} category={category} />,
  args: {
    size: 200
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var f,h,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Single Icon',
  parameters: {
    layout: 'centered'
  },
  render: args => <SingleSpriteIcon {...args} />,
  args: {
    id: SPRITE_SYMBOLS[0]?.id ?? 'ac-001',
    label: SPRITE_SYMBOLS[0]?.label ?? 'AC 001',
    size: 200
  },
  argTypes: {
    id: {
      control: 'select',
      options: SPRITE_SYMBOLS.map(s => s.id),
      labels: Object.fromEntries(SPRITE_SYMBOLS.map(s => [s.id, s.label]))
    },
    label: {
      control: 'text'
    },
    size: {
      control: {
        type: 'number',
        min: 32,
        max: 512,
        step: 8
      }
    }
  }
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const T=["AllSymbols","Large","SingleIcon"],P=Object.freeze(Object.defineProperty({__proto__:null,AllSymbols:a,Large:i,SingleIcon:o,__namedExportsOrder:T,default:E},Symbol.toStringTag,{value:"Module"}));export{a as A,P as S,o as a};
