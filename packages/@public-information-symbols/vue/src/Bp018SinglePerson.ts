// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M78.507 121.869h52.917v52.917H78.507z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-78.507 -121.87)"/><path d="M26.194 79.214a2.764 2.764 0 1 0 0 5.529 2.764 2.764 0 0 0 0-5.529m14.561 5.426a1.997 1.997 0 1 0 0 3.994 1.997 1.997 0 0 0 0-3.994m12.952 0a1.997 1.997 0 1 0 0 3.994 1.997 1.997 0 0 0 0-3.994m-32.384 1.07a1.967 1.967 0 0 0-1.97 1.883v.003l-.002.066v12.541c0 .706.568 1.275 1.274 1.275h.103c.706 0 1.274-.569 1.274-1.275v-9.92c-.006-.473.738-.443.738-.006v25.58c0 .786.632 1.419 1.418 1.419h.237c.786 0 1.418-.632 1.418-1.418V101.47c-.003-.188.197-.286.41-.3.213.014.413.112.41.3v14.388c0 .786.632 1.418 1.418 1.418h.238c.785 0 1.418-.633 1.418-1.418V90.276c0-.437.743-.467.737.005v9.921c0 .706.568 1.275 1.274 1.275h.103c.706 0 1.274-.569 1.274-1.275V87.661l-.002-.066v-.003a1.966 1.966 0 0 0-1.969-1.883h-4.901zm15.913 3.623a1.42 1.42 0 0 0-1.423 1.36v.002l-.001.048v9.06c0 .51.41.92.92.92h.074c.51 0 .92-.41.92-.92v-7.167c-.003-.341.533-.32.533-.004v18.48c0 .567.457 1.024 1.025 1.024h.171a1.02 1.02 0 0 0 1.024-1.024v-10.394c-.002-.136.143-.207.297-.217.154.01.298.081.296.218v10.393a1.02 1.02 0 0 0 1.024 1.024h.171c.568 0 1.025-.457 1.025-1.024V92.63c0-.315.537-.337.533.004v7.167c0 .51.41.921.92.921h.074c.51 0 .921-.41.921-.92v-9.061q0-.024-.002-.047v-.003a1.42 1.42 0 0 0-1.422-1.36h-3.54zm12.952 0a1.42 1.42 0 0 0-1.423 1.36v.002l-.001.048v9.06c0 .51.41.92.92.92h.074c.51 0 .92-.41.92-.92v-7.167c-.003-.341.534-.32.534-.004v18.48c0 .567.456 1.024 1.024 1.024h.171c.568 0 1.025-.456 1.025-1.024v-10.394c-.002-.136.142-.207.296-.217.154.01.298.081.296.218v10.393c0 .568.457 1.024 1.025 1.024h.171c.568 0 1.025-.457 1.025-1.024V92.63c0-.315.536-.337.532.004v7.167c0 .51.41.921.92.921h.074c.51 0 .921-.41.921-.92v-9.061l-.001-.047v-.003a1.42 1.42 0 0 0-1.422-1.36h-3.541z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.55867" transform="translate(-12.676 -71.786)"/><path d="M86.925 41.475v1.832h13.887L99.381 57.12l1.821.19 1.452-14.003h14.077v-1.832h-13.887l1.432-13.813-1.822-.19-1.452 14.003z" style="fill:#b71f2e;fill-opacity:1;stroke:none;stroke-width:.452506;stroke-linecap:round" transform="rotate(42.04 87.067 -52.387)"/>`;
const _DefaultDesc = `Single person`;
const _DefaultTitle = 'Single person';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Bp018SinglePerson = defineComponent({
  name: 'Bp018SinglePerson',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-bp-018-single-person`;
      const titleId = `pi-title-bp-018-single-person`;
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
