// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M116.667 112.707h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-116.667 -112.707)"/><path d="m155.062 125.617.745 1.013c-1.185.003-2.49 0-3.675.001l-2.792 1.354.547.946 2.707-1.196 3.213.012-.745 1.013 1.634-.012 1.445-1.56-1.445-1.558zm-14.01.205a1.968 1.968 0 1 0 0 3.935 1.968 1.968 0 0 0 0-3.935m14.009 3.577c-1.506-.007-2.969.132-4.086.859l-19.121 11.112c-1.187-.014-2.157 0-3.215 0h-.004v.001a5.69 5.69 0 0 0-5.071 5.651c0 2.725 1.891 5.163 4.566 5.68.366.02.739.008 1.107.008h3.715c2.472 0 4.273-1.65 5.837-2.478l.018-.01 16.376-9.444 1.816.023v.009a5.689 5.689 0 0 0 .05-11.377v-.003c-.625 0-1.304-.027-1.988-.03zm-20.326.276a1.968 1.968 0 1 0 0 3.935 1.968 1.968 0 0 0 0-3.935m6.317.777c-1.09 0-1.968.877-1.968 1.968V136l3.936-2.326v-1.255c0-1.09-.878-1.968-1.968-1.968m15.947 1.125v.006a3.539 3.539 0 0 1 .01 7.077v-.003l-2.401-.023-16.86 9.72c-1.865.994-3.396 2.211-4.795 2.211h-3.7v-.005a3.54 3.54 0 0 1-3.54-3.539 3.54 3.54 0 0 1 3.078-3.505c1.105.005 2.371 0 3.637 0l19.746-11.475c.587-.41.98-.4 1.375-.453zm-22.264 2.595c-1.09 0-1.968.878-1.968 1.968v3.595l3.936-2.326v-1.269c0-1.09-.878-1.968-1.968-1.968" style="stroke-width:.384759" transform="translate(-116.667 -112.707)"/>`;
const _DefaultDesc = `Escalator, up`;
const _DefaultTitle = 'Escalator, up';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf034EscalatorUp = defineComponent({
  name: 'Pf034EscalatorUp',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-034-escalator-up`;
      const titleId = `pi-title-pf-034-escalator-up`;
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
