// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M96.301 43.124h52.917v52.917H96.301z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-96.301 -43.124)"/><path d="m124.322 55.81-4.545 4.473 4.666 4.666h-21.434a.75.75 0 0 0-.75.75v13.8c0 .416.335.75.75.75h5.225a1.59 1.59 0 0 0-1.149 1.518 1.59 1.59 0 0 0 1.587 1.588 1.59 1.59 0 0 0 1.588-1.588 1.59 1.59 0 0 0-1.148-1.517h3.185a1.59 1.59 0 0 0-1.15 1.517 1.59 1.59 0 0 0 1.588 1.588 1.59 1.59 0 0 0 1.588-1.588 1.59 1.59 0 0 0-1.148-1.517h19.17a1.59 1.59 0 0 0-1.148 1.517 1.59 1.59 0 0 0 1.587 1.588 1.59 1.59 0 0 0 1.588-1.588 1.59 1.59 0 0 0-1.149-1.517h3.185a1.59 1.59 0 0 0-1.149 1.517 1.59 1.59 0 0 0 1.589 1.588 1.59 1.59 0 0 0 1.587-1.588 1.59 1.59 0 0 0-1.149-1.517h5.225c.416 0 .75-.335.75-.75V68.499c0-1.967-1.45-3.55-3.25-3.55h-13.023l-4.654-4.654 4.554-4.484zm-20.144 11.104h4.336c.108 0 .195.087.195.194v10.587a.195.195 0 0 1-.195.195h-4.336a.194.194 0 0 1-.194-.195V67.108c0-.107.086-.194.194-.194m6.462 0h5.975c.108 0 .194.087.194.194v4.986a.194.194 0 0 1-.194.194h-5.975a.194.194 0 0 1-.195-.194v-4.986c0-.107.087-.194.195-.194m8.144 0h5.975c.108 0 .195.087.195.194v4.986a.194.194 0 0 1-.195.194h-5.975a.194.194 0 0 1-.195-.194v-4.986c0-.107.087-.194.195-.194m8.144 0h5.975c.108 0 .194.087.194.194v4.986a.194.194 0 0 1-.194.194h-5.975a.194.194 0 0 1-.195-.194v-4.986c0-.107.087-.194.195-.194m8.143 0h5.976c.107 0 .195.087.195.194v4.986a.194.194 0 0 1-.195.194h-5.976a.194.194 0 0 1-.194-.194v-4.986c0-.107.087-.194.194-.194" style="display:inline;fill:#000;stroke-width:.503299" transform="translate(-96.301 -43.124)"/>`;
const _DefaultDesc = `Tram, or Streetcar stop, or Trams, or Streetcars`;
const _DefaultTitle = 'Tram, or Streetcar stop, or Trams, or Streetcars';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf007TramOrStreetcarStopOrTramsOrStreetcars = defineComponent({
  name: 'Tf007TramOrStreetcarStopOrTramsOrStreetcars',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-007-tram-or-streetcar-stop-or-trams-or-streetcars`;
      const titleId = `pi-title-tf-007-tram-or-streetcar-stop-or-trams-or-streetcars`;
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
