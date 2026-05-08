// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M116.896 103.767h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-116.896 -103.767)"/><path d="M152.884 111.693v4.626h-4.626v3.984h4.626v4.626h3.983v-4.626h4.626v-3.984h-4.626v-4.626zm-22.9 6.094c-.957 0-1.73.771-1.73 1.73 0 .958.773 1.73 1.73 1.73h.134v4.346h-1.353a3.54 3.54 0 0 0-3.548 3.549v13.262a3.54 3.54 0 0 0 3.548 3.548h7.718a3.54 3.54 0 0 0 3.548-3.548v-13.262a3.54 3.54 0 0 0-3.548-3.549h-1.354v-4.346h.134c.958 0 1.73-.772 1.73-1.73 0-.959-.772-1.73-1.73-1.73zm19.15 10.024a5.056 5.056 0 0 0-5.055 5.057 5.056 5.056 0 0 0 5.056 5.056 5.056 5.056 0 0 0 5.056-5.056 5.056 5.056 0 0 0-5.056-5.057m0 1.264a3.79 3.79 0 0 1 3.793 3.793 3.79 3.79 0 0 1-3.792 3.792 3.79 3.79 0 0 1-3.792-3.792 3.79 3.79 0 0 1 3.792-3.793m-.598.915v5.721h1.198v-5.721zm-21.64 1.325h11.455c.157 0 .283.126.283.282v5.467a.28.28 0 0 1-.283.283h-11.454a.28.28 0 0 1-.283-.283v-5.467c0-.156.126-.282.283-.282m31.016 8.393a3.2 3.2 0 0 0-1.375.311l-5.687 2.71a3.16 3.16 0 0 0-1.496 4.223 3.16 3.16 0 0 0 4.222 1.496l5.687-2.71a3.16 3.16 0 0 0 1.496-4.223 3.16 3.16 0 0 0-2.847-1.807m-.033 1.153a2.02 2.02 0 0 1 1.823 1.158 2.024 2.024 0 0 1-.958 2.703l-2.187 1.043-1.745-3.662L157 141.06c.285-.136.585-.2.88-.199" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1.8" transform="translate(-116.896 -103.767)"/>`;
const _DefaultDesc = `Pharmacy`;
const _DefaultTitle = "Pharmacy";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf007Pharmacy = defineComponent({
  name: "Cf007Pharmacy",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-007-pharmacy`;
      const titleId = `pi-title-cf-007-pharmacy`;
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
