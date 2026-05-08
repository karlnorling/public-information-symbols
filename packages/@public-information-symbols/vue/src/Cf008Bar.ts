// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M227.523 163.856h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-227.523 -163.856)"/><path d="m265.679 172.913-5.769 5.113h-21.348l7.71 6.884 6.34 5.662v15h-5.254a1.07 1.07 0 0 0-1.072 1.072 1.07 1.07 0 0 0 1.072 1.071h13.247a1.07 1.07 0 0 0 1.072-1.071 1.07 1.07 0 0 0-1.072-1.072h-5.255v-15l6.341-5.662 7.71-6.884h-7.2l4.486-3.976zm-10.6 12.209a1.4 1.4 0 0 1 1.399 1.399 1.4 1.4 0 0 1-1.4 1.399 1.4 1.4 0 0 1-1.399-1.399 1.4 1.4 0 0 1 1.4-1.4" style="display:inline;stroke-width:.348739;stroke-linecap:round" transform="translate(-227.523 -163.856)"/>`;
const _DefaultDesc = `Bar`;
const _DefaultTitle = "Bar";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf008Bar = defineComponent({
  name: "Cf008Bar",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-008-bar`;
      const titleId = `pi-title-cf-008-bar`;
      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;
      const resolvedTitle = props.title ?? _DefaultTitle;
      const resolvedDesc = props.description ?? _DefaultDesc;
      const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
      return h("span", {
        ...attrs,
        style: {
          display: "contents",
          ...(typeof attrs.style === "object" ? (attrs.style as Record<string, unknown>) : {}),
        },
        innerHTML: svgHtml,
      });
    };
  },
});
