// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M64.053 153.875h52.917v52.917H64.053z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-64.053 -153.875)"/><path d="M11.398 167.194c-2.158.051-3.589 11.462-3.872 15.142a49 49 0 0 1-5.459-.258c-3.337-.421 2.557 3.064 3.494 3.369 6.607 1.762 7.507 2.033 13.664 2.012 6.318.058 9.951-.781 13.664-2.012.936-.305 6.83-3.79 3.493-3.37-1.815.194-3.63.267-5.459.26-.283-3.68-1.714-15.092-3.871-15.143-2.661 0-5.187 1.227-7.827 1.355-2.64-.128-5.166-1.355-7.827-1.355m7.528 17.03c5.655 0 10.238.508 10.238 1.055s-4.589 1.206-10.243 1.206c-5.655 0-10.234-.66-10.234-1.206 0-.547 4.585-1.054 10.24-1.054" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.799999;stroke-linecap:round" transform="translate(7.017 -151.585)"/><path d="M112.64 111.014h53.687v2.665H112.64z" style="fill:#b71f2e;fill-opacity:1;stroke:none;stroke-width:.799999;stroke-linecap:round" transform="rotate(44.919 186.856 -67.305)"/>`;
const _DefaultDesc = `No headwear`;
const _DefaultTitle = 'No headwear';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Bp015NoHeadwear = defineComponent({
  name: 'Bp015NoHeadwear',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-bp-015-no-headwear`;
      const titleId = `pi-title-bp-015-no-headwear`;
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
