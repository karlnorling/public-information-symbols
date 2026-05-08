// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M78.507 121.869h52.917v52.917H78.507z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-78.507 -121.87)"/><path d="M88.79 131.465v33.683h10.325v-7.442h4.196c.906.002 1.934-.614 1.934-1.531v-5.309c1.18-.8 1.484-1.531.28-2.452l-.002-.526c1.58-.49.859-1.48-.024-2.366v-2.786h3.592c1.34-.035 1.608-1.526.938-2.575l-4.504-7.535v-1.161zm20.167 13.768a1.48 1.48 0 0 0-1.484 1.484v10.411l-2.361 4.037 1.187 4.026h14.841v-8.086c-.01-.853-.57-1.482-1.234-1.64-.695-.166-1.504.179-1.857 1.184l-.313.015c.198-1.086-.02-1.898-1.074-2.237-.83-.267-1.817.023-2.079 1.263l-.608-.13c.178-.978.178-1.578-.77-2.097-.8-.346-2.101.16-2.224 1.543l-.454-.019v-8.27a1.48 1.48 0 0 0-1.484-1.484z" style="display:inline;fill:#000;stroke-width:.499999" transform="translate(-78.507 -121.87)"/>`;
const _DefaultDesc = `Quiet please or Silence`;
const _DefaultTitle = 'Quiet please or Silence';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Bp001QuietPleaseOrSilence = defineComponent({
  name: 'Bp001QuietPleaseOrSilence',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-bp-001-quiet-please-or-silence`;
      const titleId = `pi-title-bp-001-quiet-please-or-silence`;
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
