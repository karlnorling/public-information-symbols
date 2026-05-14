// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M186.442 53.324h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-186.442 -53.324)"/><path d="M203.115 61.661a2.575 2.575 0 1 0-.052 5.15 2.575 2.575 0 0 0 .052-5.15m13.31 3.004a2.334 2.334 0 0 0-2.344 2.326c0 1.276 1.052 2.326 2.344 2.326a2.34 2.34 0 0 0 2.348-2.326 2.33 2.33 0 0 0-2.348-2.326m-14.79 3.091c-.543.01-1.093.238-1.546.757l-3.588 4.116a.9.9 0 0 0-.181.336 1 1 0 0 0-.044.168l-1.01 6.253a.865.865 0 0 0 .717.994.865.865 0 0 0 .994-.718l.935-5.793.005-.006 1.262-1.448c-.634 7.124-1.9 14.032-3.094 21.11a1.575 1.575 0 0 0 1.293 1.818 1.575 1.575 0 0 0 1.819-1.293l2.24-13.271q.087-.033.169-.074l2.892 4.117-1.135 7.64c-.17.712.34 1.438 1.052 1.609a1.32 1.32 0 0 0 1.595-.979l1.443-8.581a1.32 1.32 0 0 0-.173-1.022 1.3 1.3 0 0 0-.21-.273c-1.387-1.744-2.327-3.299-3.876-5.15l.243-1.797 3.106 2.976a.865.865 0 0 0 1.225-.007.863.863 0 0 0-.007-1.225l-3.94-4.199.18-3.498c.116-1.336-.958-2.438-2.134-2.55a2 2 0 0 0-.232-.01m15.112 2.097a2 2 0 0 0-.3.014c-1.083.122-1.872.96-1.768 1.878l.889 7.872c.451 1.26 1.21 1.529 2.344 1.514h5.88l2.794 6.422c.32.736 1.114 1.094 1.78.805l.12-.053c.667-.29.945-1.115.625-1.85l-3.06-7.034c-.395-.766-.72-.955-1.545-.989h-5.113l-.263-2.335h4.368a.91.91 0 0 0 .914-.914.91.91 0 0 0-.914-.915h-4.575l-.334-2.964c-.094-.832-.888-1.436-1.842-1.451m-2.33 5.616a8.44 8.44 0 0 0-3.709 6.983c0 4.649 3.788 8.437 8.437 8.437a8.43 8.43 0 0 0 6.694-3.31l-.89-2.046a6.55 6.55 0 0 1-5.804 3.485 6.553 6.553 0 0 1-6.567-6.566c0-1.88.783-3.57 2.041-4.765zM231.89 89.39l-37.979 8.513h37.98z" style="color:#000;fill:#000;stroke-width:1.27244;-inkscape-stroke:none" transform="translate(-186.442 -53.324)"/>`;
const _DefaultDesc = `Slope or ramped access`;
const _DefaultTitle = 'Slope or ramped access';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ac002SlopeOrRampedAccess = defineComponent({
  name: 'Ac002SlopeOrRampedAccess',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-ac-002-slope-or-ramped-access`;
      const titleId = `pi-title-ac-002-slope-or-ramped-access`;
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
