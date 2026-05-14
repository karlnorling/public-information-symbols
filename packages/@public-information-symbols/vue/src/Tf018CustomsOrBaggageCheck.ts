// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M86.766 112.922h52.917v52.917H86.766z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-86.766 -112.922)"/><path d="M119.719 122.24c1.187 1.04 1.396 2.371 1.825 3.832h8.457c.136-.808.52-1.497.882-2.22zm1.978 5.28-1.635 1.463h1.28q-.03.246-.032.494a4.323 4.323 0 0 0 4.323 4.324c2.205-.001 4.325-1.926 4.323-4.323v-1.957zm-26.647 5.822c-.607 0-1.095.488-1.095 1.095v17.46a1.093 1.093 0 0 0 1.308 1.075v.02h2.129v2.092h.02q-.02.103-.02.213c0 .606.488 1.095 1.095 1.095h17.46a1.093 1.093 0 0 0 1.074-1.308h.021v-2.19h-19.59v-19.552h-2.19v.02a1 1 0 0 0-.212-.02m25.886 1.338c-.99.021-1.534.761-2.13 1.826l-7.513 14.996h3.62l5.75-10.128v15.147h11.832v-19.954c.008-.892-1.076-1.87-2.008-1.856h-2.646l-1.46 4.258h-.396l-1.673-4.289z" style="fill:#000;stroke-width:4" transform="translate(-86.766 -112.922)"/>`;
const _DefaultDesc = `Customs, or Baggage check`;
const _DefaultTitle = 'Customs, or Baggage check';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf018CustomsOrBaggageCheck = defineComponent({
  name: 'Tf018CustomsOrBaggageCheck',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-018-customs-or-baggage-check`;
      const titleId = `pi-title-tf-018-customs-or-baggage-check`;
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
