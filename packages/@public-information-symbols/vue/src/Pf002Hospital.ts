// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M90.78 69.25h52.917v52.917H90.78z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-90.782 -69.064)"/><path d="M115.31 78.556v4.613h-4.613v3.814h4.613v4.613h3.815v-4.613h4.612V83.17h-4.612v-4.613zm-14.817 19.067c-.63 0-1.16.292-1.16.807v14.549h2.528v-3.952h30.77v3.952h2.528V98.43c0-.515-.484-.807-1.114-.807h-.254c-.63 0-1.16.292-1.16.807v3.562a2 2 0 0 0-.065-.12c-.102-.173-.294-.275-.453-.398-.217-.168-.252-.251-.492-.383-.708-.388-2.54-.13-3.715-.176-5.397-.213-10.708-.612-16.315-.758-1.024.292-1.728 1.344-2.136 2.394-.242.755-.155 2.374-.155 2.374h23.33v.599h-30.769V98.43c0-.515-.484-.807-1.113-.807zm5.563 1.782a2.412 2.412 0 1 0 0 4.824 2.412 2.412 0 0 0 0-4.824" style="display:inline;stroke-width:1.09849" transform="translate(-90.782 -69.064)"/>`;
const _DefaultDesc = `Hospital`;
const _DefaultTitle = "Hospital";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf002Hospital = defineComponent({
  name: "Pf002Hospital",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-002-hospital`;
      const titleId = `pi-title-pf-002-hospital`;
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
