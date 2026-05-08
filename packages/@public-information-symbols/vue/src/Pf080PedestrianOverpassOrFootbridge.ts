// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M244.042 139.765h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-244.042 -139.765)"/><path d="M266.673 148.863a2.023 2.023 0 1 0 0 4.046 2.023 2.023 0 0 0 0-4.046m-.88 4.85c-.456.01-.912.214-1.266.673l-2.615 3.402a.7.7 0 0 0-.126.273.7.7 0 0 0-.026.134l-.49 4.954a.68.68 0 0 0 .17.52l1.207-.605.431-4.37.004-.006.92-1.197c-.046 1.685-.259 5.024-.259 5.024l5.468-2.739-1.5-1.412-.028-2.753c.027-1.053-.868-1.866-1.797-1.897h-.092zm9.622 3.377-23.8 11.922v1.118l8.685-4.35v11.466h-1.191l-.034 3.838h-7.46v2.5h9.939l.033-3.838h7.717v-3.77h7.507v-3.787h12.574v-2.5h-12.884V158.09h12.884v-1zm.086 1.075v11.524h-1.19v3.788h-7.507v3.769H261.3v-11.967zm-4.897 2.925-1.352.678.856.725a.68.68 0 1 0 .897-1.025zm-2.61 1.308-4.419 2.214c-.275 3.187-.638 6.366-.98 9.587a1.237 1.237 0 0 0 1.103 1.364 1.24 1.24 0 0 0 1.364-1.102l1.116-10.519q.066-.03.129-.065l3.17 2.844-.716 4.091c-.1.568.336 1.113.903 1.212.568.1 1.105-.277 1.204-.845l.854-4.88a1.03 1.03 0 0 0-.184-.792 1 1 0 0 0-.178-.204c-1.178-1.045-2.226-1.916-3.365-2.905" style="color:#000;display:inline;fill:#000;-inkscape-stroke:none" transform="translate(-244.042 -139.765)"/>`;
const _DefaultDesc = `Pedestrian overpass or footbridge`;
const _DefaultTitle = 'Pedestrian overpass or footbridge';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf080PedestrianOverpassOrFootbridge = defineComponent({
  name: 'Pf080PedestrianOverpassOrFootbridge',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-080-pedestrian-overpass-or-footbridge`;
      const titleId = `pi-title-pf-080-pedestrian-overpass-or-footbridge`;
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
