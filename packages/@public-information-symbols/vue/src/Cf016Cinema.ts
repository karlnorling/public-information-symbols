// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M54.416 85.734h52.917v52.917H54.416z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-54.416 -85.734)"/><path d="M64.162 95.566v33.253h33.426V95.566Zm3.298 3.29a52.4 52.4 0 0 0 13.414 1.75c4.529 0 9.038-.589 13.415-1.75v15.884c-4.377-1.16-8.886-1.885-13.415-1.886-4.528.001-9.037.726-13.414 1.887zm4.355 18.084a1.82 1.82 0 0 1 1.818 1.817 1.82 1.82 0 0 1-1.818 1.818 1.82 1.82 0 0 1-1.818-1.818 1.82 1.82 0 0 1 1.818-1.817m9.385 0a1.82 1.82 0 0 1 1.818 1.817 1.82 1.82 0 0 1-1.818 1.818 1.82 1.82 0 0 1-1.817-1.818 1.82 1.82 0 0 1 1.817-1.817m9.348 0a1.82 1.82 0 0 1 1.818 1.817 1.82 1.82 0 0 1-1.818 1.818 1.82 1.82 0 0 1-1.818-1.818 1.82 1.82 0 0 1 1.818-1.817m-20.99 4.09h4.514c1.038 0 1.872.848 1.872 1.9v2.8h-8.258v-2.8c0-1.052.835-1.9 1.873-1.9m9.386 0h4.514c1.037 0 1.872.848 1.872 1.9v2.8H77.07v-2.8c0-1.052.836-1.9 1.873-1.9m9.347 0h4.514c1.037 0 1.872.848 1.872 1.9v2.8H86.42v-2.8c0-1.052.835-1.9 1.872-1.9" style="display:inline;fill:#000;fill-opacity:1;stroke-width:1.5" transform="translate(-54.416 -85.734)"/>`;
const _DefaultDesc = `Cinema`;
const _DefaultTitle = "Cinema";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf016Cinema = defineComponent({
  name: "Cf016Cinema",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-016-cinema`;
      const titleId = `pi-title-cf-016-cinema`;
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
