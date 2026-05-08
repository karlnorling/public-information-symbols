// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M125.367 53.324h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-125.367 -53.324)"/><path d="M152.191 65.335a1.968 1.968 0 1 0 0 3.935 1.968 1.968 0 0 0 0-3.935m-6.317 3.853a1.968 1.968 0 1 0 0 3.935 1.968 1.968 0 0 0 0-3.935m6.317.777c-1.09 0-1.968.877-1.968 1.968v3.581l3.936-2.326v-1.255c0-1.09-.878-1.968-1.968-1.968m11.57.953c-1.506-.008-2.969.132-4.086.859l-19.121 11.112c-1.187-.014-2.157 0-3.215 0h-.004a5.69 5.69 0 0 0-5.071 5.652c0 2.724 1.892 5.162 4.567 5.68.366.02.738.008 1.106.008h3.715c2.472 0 4.273-1.65 5.837-2.479l.018-.01 16.376-9.443 1.816.023v.009a5.689 5.689 0 0 0 .05-11.377v-.003c-.625 0-1.304-.027-1.988-.03zm1.938 2.177v.007a3.539 3.539 0 0 1 .01 7.077v-.003l-2.401-.023-16.86 9.72c-1.865.994-3.396 2.211-4.795 2.211h-3.7v-.004a3.54 3.54 0 0 1-3.54-3.54 3.54 3.54 0 0 1 3.078-3.504c1.105.005 2.371 0 3.637 0l19.746-11.476c.587-.41.98-.4 1.375-.453zm-19.825.59c-1.09 0-1.968.878-1.968 1.968v3.595l3.936-2.326v-1.269c0-1.09-.878-1.968-1.968-1.968" style="fill:#181818;stroke-width:2.26813" transform="translate(-125.367 -53.324)"/>`;
const _DefaultDesc = `Escalator`;
const _DefaultTitle = "Escalator";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf020Escalator = defineComponent({
  name: "Pf020Escalator",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-020-escalator`;
      const titleId = `pi-title-pf-020-escalator`;
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
