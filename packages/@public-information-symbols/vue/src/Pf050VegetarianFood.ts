// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M134.204 52.176h52.917v52.917h-52.917z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-134.204 -52.176)"/><path d="M147.927 60.297s-.701 6.285-.41 9.178c.137 1.37.412 2.076 1.04 3.223.763 1.475 1.902 2.05 2.5 3.363.146.332.2.637.2.837-.03 5.775-.168 16.732-.195 18.917l-.005.384c.284.31.652.448 1.044.497v.003l.053.004q.185.02.375.016.188.002.374-.016.027 0 .054-.004v-.003c.392-.05.76-.187 1.044-.497l-.005-.384c-.028-2.185-.165-13.142-.195-18.917a2.2 2.2 0 0 1 .2-.837c.597-1.314 1.737-1.888 2.5-3.363.627-1.147.902-1.853 1.04-3.223.29-2.893-.41-9.178-.41-9.178h-1.288v8.18a.617.617 0 0 1-.619.62.617.617 0 0 1-.618-.62v-8.18h-1.46v8.18a.617.617 0 0 1-.618.62.617.617 0 0 1-.618-.62v-8.18h-1.459v8.18a.617.617 0 0 1-.619.62.617.617 0 0 1-.618-.62v-8.18zm13.462 0 1.75 5.824c-1.323.376-2.496 2.875-2.284 4.241l.418 2.699 1.144.013h1.375c0 .375-.265.72-.694.907a1.76 1.76 0 0 1-1.38-.008 1.4 1.4 0 0 1-.337-.213l.783 5.048 1.353.015h1.375c0 .375-.264.721-.693.907a1.76 1.76 0 0 1-1.381-.008c-.285-.127-.494-.326-.599-.556l2.34 15.101c.23 1.48 1.167 2.704 2.796 2.704 1.63 0 2.566-1.223 2.796-2.704l2.34-15.102c-.106.23-.314.43-.6.557-.424.191-.951.194-1.38.008s-.694-.532-.694-.907h1.376l1.353-.015.782-5.048a1.4 1.4 0 0 1-.336.213 1.76 1.76 0 0 1-1.38.008c-.43-.186-.694-.532-.694-.907h1.375l1.144-.013.418-2.699c.212-1.366-.962-3.865-2.284-4.241l1.75-5.824h-1.52l-1.171 5.773h-.928l.932-5.773h-1.414l-.261 5.773h-1.274l.403-5.773h-1.467l.404 5.773h-1.274l-.261-5.773h-1.414l.931 5.773h-.927l-1.171-5.773zm4.591 9.96 1.375.016h1.375c0 .375-.264.721-.693.907a1.76 1.76 0 0 1-1.381-.008c-.425-.19-.683-.54-.676-.914zm0 5.801 1.375.015h1.375c0 .375-.264.722-.693.907a1.76 1.76 0 0 1-1.381-.008c-.425-.19-.683-.54-.676-.914m0 5.6 1.375.016h1.375c0 .375-.264.721-.693.907a1.76 1.76 0 0 1-1.381-.008c-.425-.19-.683-.54-.676-.915m-2.788 2.9 1.375.016h1.375c0 .375-.264.721-.693.907a1.76 1.76 0 0 1-1.381-.008c-.425-.19-.683-.54-.676-.915m8.326 0c.007.376-.251.725-.676.915a1.76 1.76 0 0 1-1.381.008c-.429-.185-.694-.532-.694-.907h1.376zm-5.538 2.9 1.375.016h1.375c0 .375-.264.721-.693.907a1.76 1.76 0 0 1-1.381-.008c-.425-.19-.683-.54-.676-.914z" style="display:inline;fill:#000;stroke-width:1.7;stroke-linecap:round" transform="translate(-134.204 -52.176)"/>`;
const _DefaultDesc = `Vegetarian food`;
const _DefaultTitle = 'Vegetarian food';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf050VegetarianFood = defineComponent({
  name: 'Pf050VegetarianFood',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-050-vegetarian-food`;
      const titleId = `pi-title-pf-050-vegetarian-food`;
      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;
      const resolvedTitle = props.title ?? _DefaultTitle;
      const resolvedDesc = props.description ?? _DefaultDesc;
      const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
      return h('span', {
        ...attrs,
        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },
        innerHTML: svgHtml,
      });
    };
  },
});
