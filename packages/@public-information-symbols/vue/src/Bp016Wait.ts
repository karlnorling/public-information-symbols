// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M183.606 181.122h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-183.606 -181.122)"/><path d="M199.915 192.415v2.163h3.16v6.149c.004 2.688 2.865 5.887 4.975 5.998v1.543c-2.11.112-4.972 3.31-4.974 5.998v6.316h-3.161v2.165h20.3v-2.165h-3.162v-6.316c-.003-2.688-2.865-5.886-4.974-5.998v-1.543c2.11-.111 4.971-3.31 4.974-5.998v-6.149h3.161v-2.163zm4.125 3.077h12.048v5.247c-.053 2.08-2.439 4.949-4.974 5.123v3.268c2.535.174 4.921 3.042 4.974 5.124v5.246H204.04v-5.246c.054-2.082 2.44-4.95 4.975-5.124v-3.268c-2.535-.174-4.921-3.042-4.975-5.123v-.004zm1.998 2.642c-.71.002-.965.704-.958 1.645.063 2.115 1.817 4.134 3.472 4.981.534.274 1.053.255 1.506.248.423.003.908.048 1.398-.178 1.75-.806 3.637-2.901 3.593-5.05.007-.942-.25-1.644-.958-1.646h-4.524zm4.012 14.428a.6.6 0 0 0-.294.096c-1.78.27-4.505 2.685-4.598 3.572l-.033 2.328h9.786l-.034-2.328c-.092-.89-2.755-3.32-4.525-3.575a.6.6 0 0 0-.302-.093" style="color:#000;fill:#000;fill-opacity:1;-inkscape-stroke:none" transform="translate(-183.606 -181.122)"/>`;
const _DefaultDesc = `Wait`;
const _DefaultTitle = 'Wait';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Bp016Wait = defineComponent({
  name: 'Bp016Wait',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-bp-016-wait`;
      const titleId = `pi-title-bp-016-wait`;
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
