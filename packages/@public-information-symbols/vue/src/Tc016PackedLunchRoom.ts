// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M63.02 103.285h52.917v52.917H63.02z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-63.02 -103.285)"/><path d="M88.864 110.965 70.83 122.958v3.59l18.035-12.014 18.036 12.013v-3.59zm-.108 10.09a4.19 4.19 0 0 0-4.198 4.197v2.86h8.395v-2.86a4.19 4.19 0 0 0-4.197-4.197m-4.198 9.125v17.886h8.395V130.18zm-12.697 2.864q-.363.004-.764.026c.09 2.803 1.024 3.488 3.849 3.224.014-2.755-1.116-3.263-3.085-3.25m6.305.137c-.951.942-1.741 1.777-2.106 2.977q-.138.453-.188.957a5.734 5.734 0 0 0-4.912 5.674 5.734 5.734 0 0 0 5.734 5.734 5.734 5.734 0 0 0 5.734-5.734 5.734 5.734 0 0 0-4.844-5.665 3 3 0 0 1 .103-.472c.23-.755.752-1.35 1.674-2.263zm17.251 3.022v9.308a2.67 2.67 0 0 0 2.677 2.677h3.924a2.67 2.67 0 0 0 2.677-2.677v-.673h1.648c1.008 0 1.786-.874 1.786-1.865v-3.43c0-.992-.778-1.866-1.786-1.866h-1.648v-1.474zm9.278 2.974h1.648c.14 0 .285.121.285.366v3.43c0 .244-.145.365-.285.365h-1.648z" style="stroke-width:2.4;stroke-linecap:round" transform="translate(-63.02 -103.285)"/>`;
const _DefaultDesc = `Packed lunch room`;
const _DefaultTitle = "Packed lunch room";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tc016PackedLunchRoom = defineComponent({
  name: "Tc016PackedLunchRoom",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tc-016-packed-lunch-room`;
      const titleId = `pi-title-tc-016-packed-lunch-room`;
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
