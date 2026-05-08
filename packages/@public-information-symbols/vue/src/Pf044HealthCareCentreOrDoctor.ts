// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M92.341 55.57h52.917v52.917H92.341z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-92.341 -55.57)"/><path d="M128.587 63.107a.124.124 0 0 0-.125.124v3.56h-3.559a.125.125 0 0 0-.125.124v3.14c0 .07.056.125.125.125h3.559v3.559c0 .069.056.125.125.125h3.14a.125.125 0 0 0 .125-.125V70.18h3.558c.07 0 .125-.056.125-.125v-3.14a.125.125 0 0 0-.125-.125h-3.558v-3.559a.124.124 0 0 0-.125-.124zm-12.809 3.614a5.374 5.374 0 0 0-5.373 5.375 5.374 5.374 0 0 0 5.373 5.374 5.374 5.374 0 0 0 5.375-5.374 5.374 5.374 0 0 0-5.375-5.375m-8.297 12.369c-2.086.383-3.475 1.733-3.686 3.548l-1.716 15.707a2.345 2.345 0 0 0 2.081 2.591 2.345 2.345 0 0 0 2.592-2.08l1.292-10.988c.093-.96 1.445-1.017 1.5-.044v12.531h12.47V87.824c.055-.973 1.406-.915 1.5.044l1.292 10.987a2.345 2.345 0 0 0 2.59 2.081 2.345 2.345 0 0 0 2.082-2.591l-1.715-15.707c-.384-1.926-2.087-3.507-3.687-3.548h-4.198v5.353a4.11 4.11 0 0 1-3.35 4.03v3.85a2.25 2.25 0 0 1 1.5 2.12 2.25 2.25 0 0 1-2.25 2.25 2.25 2.25 0 0 1-2.25-2.25 2.25 2.25 0 0 1 1.5-2.12v-3.85a4.11 4.11 0 0 1-3.349-4.03V79.09zm5.597 0v5.353a2.68 2.68 0 0 0 2.7 2.7c1.509 0 2.7-1.192 2.7-2.7V79.09z" style="display:inline;fill:#000;stroke-width:1.2" transform="translate(-92.341 -55.57)"/>`;
const _DefaultDesc = `Health care centre or Doctor`;
const _DefaultTitle = 'Health care centre or Doctor';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf044HealthCareCentreOrDoctor = defineComponent({
  name: 'Pf044HealthCareCentreOrDoctor',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-044-health-care-centre-or-doctor`;
      const titleId = `pi-title-pf-044-health-care-centre-or-doctor`;
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
