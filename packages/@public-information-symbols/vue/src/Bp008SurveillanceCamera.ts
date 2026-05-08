// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M92.767 63.316h52.917v52.917H92.767z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-92.767 -63.316)"/><path d="M27.809 10.109H25.99v13.993l-1.996-.53a1.06 1.06 0 0 0-1.302.756l-.26.985q-.004.01-.006.023l7.969 2.092v-.002l.262-.985a1.06 1.06 0 0 0-.756-1.302l-2.093-.555zM12.533 23.458h-.122a1.63 1.63 0 0 0-1.51 1.221l-2.334 8.888c-.23.878.29 1.77 1.168 2l21.238 5.578c.693.179 1.344-.603 2-1.167l8.452-7.906c.58-.59.452-.975-.859-1.295l-27.664-7.266a1.7 1.7 0 0 0-.37-.053m27.13 11.624-4.62 4.359 4.562 1.599c1.023.41 1.732.96 2.457 1.768l2.342-7.162c-.91.157-1.793.316-2.634.094z"/>`;
const _DefaultDesc = `Surveillance camera`;
const _DefaultTitle = 'Surveillance camera';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Bp008SurveillanceCamera = defineComponent({
  name: 'Bp008SurveillanceCamera',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-bp-008-surveillance-camera`;
      const titleId = `pi-title-bp-008-surveillance-camera`;
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
