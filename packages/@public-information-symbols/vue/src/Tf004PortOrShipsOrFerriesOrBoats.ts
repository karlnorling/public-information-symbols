// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M56.701 41.993h52.917V94.91H56.701z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-56.701 -41.993)"/><path d="m76.535 51.866-.83.003c-.001.001-.85 8.132-1.108 10.21h-1.65l-1.579 5.888-7.26-.046 3.556 9.765c.482-.137.925-.33 1.393-.533 1.132-.491 2.39-1.039 4.477-1.183 2.672-.185 4.286.493 5.808 1.134 1.1.463 2.148.904 3.517.888 1.638-.02 3.06-.601 4.407-1.152 1.35-.551 2.633-1.076 4.113-1.088 1.773-.015 3.084.504 4.377 1.015 1.407.556 2.79 1.102 4.722.748l1.744-6.977h-2.9l-.771-2.882h-1.116l.615-12.852-.848-.036-1.146 12.888h-1.4l-.98-3.66h-5.809l-.92-3.429-6.151-1.555-.99 5.02h-1.91l-.523-1.953h-1.218zm-.017 13.51h4.914v2.899h-4.137zm6.505 0h4.243v2.899h-4.243zm5.728 0h3.571l.743 2.899H88.75zm2.645 12.375c-1.48.012-2.763.536-4.113 1.088-1.347.55-2.768 1.131-4.407 1.151-1.368.017-2.416-.424-3.517-.888-1.522-.64-3.135-1.319-5.807-1.134-2.087.145-3.346.692-4.477 1.183-1.27.553-2.355 1.024-4.54.539l-.437-.114c.096.746.094 1.646 1.01 1.774 2.09.29 3.262-.218 4.605-.802 1.008-.437 2.128-.925 3.95-1.05 2.29-.16 3.724.444 5.077 1.014 1.252.527 2.444 1.028 4.155 1.007 1.951-.023 3.511-.66 4.99-1.265 1.21-.494 2.36-.964 3.524-.974 1.458-.012 2.628.45 3.782.907 1.588.627 3.148 1.242 5.41.866.596-.15.703-.894.77-1.737l-.443.106c-2.163.525-3.644-.06-5.154-.657-1.293-.51-2.605-1.029-4.378-1.014m0 3.517c-1.48.012-2.763.536-4.113 1.087-1.347.55-2.768 1.132-4.407 1.152-1.368.016-2.416-.424-3.517-.888-1.522-.64-3.135-1.319-5.807-1.134-2.087.145-3.346.692-4.477 1.183-1.27.552-2.355 1.023-4.54.538l-.437-.114c.096.746.094 1.647 1.01 1.774 2.09.291 3.262-.217 4.605-.801 1.008-.438 2.128-.925 3.95-1.051 2.29-.159 3.724.445 5.077 1.014 1.252.527 2.444 1.029 4.155 1.008 1.951-.024 3.511-.662 4.99-1.266 1.21-.494 2.36-.964 3.524-.974 1.458-.012 2.628.45 3.782.907 1.588.627 3.148 1.243 5.41.867.596-.151.703-.895.77-1.738l-.443.106c-2.163.525-3.644-.06-5.154-.656-1.293-.51-2.605-1.03-4.378-1.014" style="display:inline;stroke-width:.219409" transform="translate(-56.701 -41.993)"/>`;
const _DefaultDesc = `Port, or Ships, or Ferries, or Boats`;
const _DefaultTitle = 'Port, or Ships, or Ferries, or Boats';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf004PortOrShipsOrFerriesOrBoats = defineComponent({
  name: 'Tf004PortOrShipsOrFerriesOrBoats',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-004-port-or-ships-or-ferries-or-boats`;
      const titleId = `pi-title-tf-004-port-or-ships-or-ferries-or-boats`;
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
