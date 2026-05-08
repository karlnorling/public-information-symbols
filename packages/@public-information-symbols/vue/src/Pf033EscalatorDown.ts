// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M98.123 131.85h52.917v52.917H98.123z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-98.123 -131.85)"/><path d="M127.262 143.388a1.968 1.968 0 1 0 0 3.936 1.968 1.968 0 0 0 0-3.936m-6.317 3.853a1.968 1.968 0 1 0 0 3.936 1.968 1.968 0 0 0 0-3.936m6.317.777c-1.09 0-1.968.878-1.968 1.968v3.582l3.936-2.327v-1.255c0-1.09-.878-1.968-1.968-1.968m9.255 1.896c-1.506-.008-2.969.132-4.086.859l-19.121 11.112c-1.187-.014-2.157 0-3.215 0h-.004a5.69 5.69 0 0 0-5.071 5.652c0 2.724 1.891 5.162 4.566 5.68.366.02.739.008 1.107.008h3.715c2.472 0 4.273-1.65 5.837-2.479l.018-.01 16.376-9.444 1.816.024v.009a5.689 5.689 0 0 0 .05-11.377v-.003c-.625 0-1.304-.027-1.988-.031m-15.572 1.825c-1.09 0-1.968.878-1.968 1.968v3.595l3.936-2.327v-1.268c0-1.09-.878-1.968-1.968-1.968m17.51.352v.006a3.539 3.539 0 0 1 .01 7.077v-.003l-2.401-.023-16.86 9.72c-1.865.995-3.396 2.212-4.795 2.212h-3.7v-.005a3.54 3.54 0 0 1-3.54-3.54 3.54 3.54 0 0 1 3.078-3.504c1.105.005 2.371 0 3.637 0l19.746-11.476c.587-.41.98-.4 1.375-.453zm-23.795 5.828-2.255 1.293-3.214-.012.745-1.013-1.634.012-1.444 1.56 1.444 1.559 1.634.012-.745-1.013c1.186-.003 2.372-.01 3.557-.012l2.459-1.44z" style="stroke-width:.384759" transform="translate(-98.123 -131.85)"/>`;
const _DefaultDesc = `Escalator, down`;
const _DefaultTitle = "Escalator, down";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf033EscalatorDown = defineComponent({
  name: "Pf033EscalatorDown",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-033-escalator-down`;
      const titleId = `pi-title-pf-033-escalator-down`;
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
