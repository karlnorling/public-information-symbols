// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M4.412 16.122h52.917v52.917H4.412z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-4.412 -16.122)"/><path d="m16.73 8.76 2.884 4.215c.817 1.213.931 1.929.71 3.238l-2.35 11.931-.267.931-.4.71-2.705 2.795-.665 1.507.532 1.642 8.294-4.835c3.231-7.389 8.226-9.52 9.803-10.379 1.707-1.38 1.712-4.561.044-5.455l-2.379-1.403c-.795-.517-1.12-.912-1.48-1.614l-1.508-3.282zm12.752 22.807-7.376 4.386-9.38 2.882c-1.627.41-2.98 1.232-3.325 2.311l-.91 3.01H27.17c2.35-1.46 4.819-2.506 7.512-2.43l.022 2.43h7.952c.658-3.496 3.382-9.095.41-11.837-4.667 1.728-9.67 4.518-13.583-.752"/>`;
const _DefaultDesc = `Take off your shoes`;
const _DefaultTitle = 'Take off your shoes';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Bp007TakeOffYourShoes = defineComponent({
  name: 'Bp007TakeOffYourShoes',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-bp-007-take-off-your-shoes`;
      const titleId = `pi-title-bp-007-take-off-your-shoes`;
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
