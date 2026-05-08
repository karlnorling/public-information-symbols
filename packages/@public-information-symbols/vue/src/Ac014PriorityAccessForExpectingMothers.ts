// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M111.01 154.004h52.917v52.917H111.01z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-111.01 -154.004)"/><path d="M26.845 7.943a2.687 2.687 0 1 0 0 5.374 2.687 2.687 0 0 0 0-5.374m1.219 6.338a2.38 2.38 0 0 0-2.24 1.648l-1.165 3.573c-3.68.144-4.317 4.59-4.47 5.79l-1.914 11.206c-.247 1.452.67 1.5 1.5 1.5h5.444v5.358c0 .896.722 1.618 1.618 1.618s1.619-.722 1.619-1.618v-5.357h2.02c.831 0 1.753-.019 1.5-1.5l-1.512-8.857c.128.106.277.191.445.246a1.34 1.34 0 0 0 1.703-.86l1.78-5.699c.348-1.112.552-1.58-.392-2.334l-4.023-3.793V15.2c-.595-.546-1.164-.923-1.913-.92zm1.946 4.79 1.83 1.657-1.682 5.12-.678-4.842c-.044-.21-.025-.343.044-.556z"/>`;
const _DefaultDesc = `Priority access for expecting mothers`;
const _DefaultTitle = "Priority access for expecting mothers";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Ac014PriorityAccessForExpectingMothers = defineComponent({
  name: "Ac014PriorityAccessForExpectingMothers",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-ac-014-priority-access-for-expecting-mothers`;
      const titleId = `pi-title-ac-014-priority-access-for-expecting-mothers`;
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
