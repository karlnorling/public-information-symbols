// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M54.416 127.72h52.917v52.917H54.416z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-54.416 -127.72)"/><path d="m89.707 137.57-1.058 7.605h3.194v7.847h1.338v-7.847h3.194l-1.058-7.605zM63.17 150.31a1.2 1.2 0 0 0-.867 2.002c.47.52.739.914.74 2.346v7.313l.001.007v8.808h2.4v-3.833h30.955v3.833h2.4v-12.248c.005-1.553.056-2.528.754-3.568a1.2 1.2 0 0 0-1.992-1.338c-.845 1.258-1.075 2.55-1.138 3.83h-.024v2.443c-.451-.467-.984-.926-1.718-.963l-18.92-.956c-1.233-.109-2.565 1.408-2.606 2.449l-.078 2.718h23.322v.515H65.443v-9.012c-.002-1.86-.618-3.13-1.36-3.951a1.2 1.2 0 0 0-.914-.395zm6.497 6.821a2.441 2.441 0 1 0 0 4.883 2.441 2.441 0 0 0 0-4.883" style="fill:#000;stroke-width:1.5" transform="translate(-54.416 -127.72)"/>`;
const _DefaultDesc = `Hotel or Accommodation`;
const _DefaultTitle = 'Hotel or Accommodation';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Cf003HotelOrAccommodation = defineComponent({
  name: 'Cf003HotelOrAccommodation',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-003-hotel-or-accommodation`;
      const titleId = `pi-title-cf-003-hotel-or-accommodation`;
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
