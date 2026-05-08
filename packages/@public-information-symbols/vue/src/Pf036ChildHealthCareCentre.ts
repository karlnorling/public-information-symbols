// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M120.627 84.987h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-120.627 -84.987)"/><path d="M156.907 92.664v3.64h-3.64v3.18h3.64v3.64h3.18v-3.64h3.64v-3.18h-3.64v-3.64zm-13.261 3.655a5.35 5.35 0 0 0-5.35 5.35 5.35 5.35 0 0 0 5.35 5.35 5.35 5.35 0 0 0 5.35-5.35 5.35 5.35 0 0 0-5.35-5.35m-10.85 11.5a2.345 2.345 0 0 0-2.35 2.35 2.345 2.345 0 0 0 2.35 2.351h5.3v4.8h11.1v-4.8h5.3a2.345 2.345 0 0 0 2.35-2.35 2.345 2.345 0 0 0-2.35-2.35zm5.202 10.836c-1.203 1.093-2.43 2.238-3.623 3.315a2.11 2.11 0 0 0-.016 2.993l4.586 4.635c.825.833 2.16.84 2.993.015.834-.825.84-2.16.016-2.993l-2.068-2.09 1.9-1.74zm11.296 0-3.788 4.134 1.9 1.741-2.068 2.09a2.11 2.11 0 0 0 .015 2.993 2.11 2.11 0 0 0 2.993-.015l4.587-4.635a2.11 2.11 0 0 0-.016-2.993c-1.193-1.077-2.42-2.222-3.623-3.315" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:7.19206" transform="translate(-120.627 -84.987)"/>`;
const _DefaultDesc = `Child health care centre`;
const _DefaultTitle = 'Child health care centre';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf036ChildHealthCareCentre = defineComponent({
  name: 'Pf036ChildHealthCareCentre',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-036-child-health-care-centre`;
      const titleId = `pi-title-pf-036-child-health-care-centre`;
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
