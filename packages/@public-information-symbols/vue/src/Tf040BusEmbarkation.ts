// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M124.278 67.838h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-124.278 -67.838)"/><path d="M160.285 81.084c-2.445 0-4.673.308-7.443.966-.445.091-.81.374-.87.63-.006.01-2.619 8.691-2.619 8.691a.8.8 0 0 0-.06.298v11.694c0 .422.34.762.762.762h1.364v1.763c0 .782.63 1.411 1.412 1.411h.063c.782 0 1.411-.63 1.411-1.411v-1.763h11.887v1.763c0 .782.63 1.411 1.411 1.411h.064c.781 0 1.41-.63 1.41-1.411v-1.763h1.366a.76.76 0 0 0 .761-.762V91.669a.8.8 0 0 0-.061-.301l-2.59-8.659c-.06-.266-.392-.588-.867-.659-2.917-.62-4.956-.966-7.4-.966m-6.034 3.317h11.995c.578 0 .86.496 1.044 1.044l2.117 6.317c.184.548-.466 1.044-1.044 1.044h-16.228c-.579 0-1.229-.496-1.045-1.044l2.117-6.317c.184-.548.466-1.044 1.044-1.044m-12.406 2.587a1.474 1.474 0 1 0 0 2.949 1.474 1.474 0 0 0 0-2.949m-.227 3.729c-.514-.004-1.101.06-1.466.511l-3.263 5.877a.76.76 0 0 0 .296 1.036.76.76 0 0 0 1.036-.296l2.103-3.787c.304-.524.416-.358.422.045 0 1.758 0 3.494.014 5.244l1.14 1.09v.141c-1.007.901-2.015 1.813-3.021 2.717a.767.767 0 0 0-.057 1.086.767.767 0 0 0 1.085.057l1.992-1.793v3.988c0 .43.346.776.776.776s.777-.346.777-.776V96.62l1.086 1.18a.659.659 0 1 0 .97-.894l-2.056-2.233v-2.587a1.35 1.35 0 0 0-1.353-1.353c-.145-.005-.309-.014-.48-.015m-3.85 8.111-.628.009-1.552 2.689-.157-.032c-1.06-.714-2.706-.964-3.464.312l-1.652 2.777c-.137.264-.016.608.23.795l1.668.963a1.05 1.05 0 0 1 1.453-.408zm15.267.073a1.882 1.882 0 1 1 0 3.764 1.882 1.882 0 0 1 0-3.764m14.427 0a1.882 1.882 0 1 1 0 3.764 1.882 1.882 0 0 1 0-3.764m-34.32 7.352a.596.596 0 1 0 0 1.192.596.596 0 0 0 0-1.192" style="fill:#000;fill-opacity:1;stroke-width:.600001" transform="translate(-124.278 -67.838)"/>`;
const _DefaultDesc = `Bus embarkation`;
const _DefaultTitle = 'Bus embarkation';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf040BusEmbarkation = defineComponent({
  name: 'Tf040BusEmbarkation',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-040-bus-embarkation`;
      const titleId = `pi-title-tf-040-bus-embarkation`;
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
