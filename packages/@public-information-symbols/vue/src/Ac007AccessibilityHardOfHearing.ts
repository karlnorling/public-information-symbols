// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M101.959 85.553h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-101.959 -85.553)"/><path d="m143.468 92.723-5 5a11.7 11.7 0 0 1 2.866 5.212l6.334-6.312v-3.9zm-15.615 2.45a11.51 11.51 0 0 0-10.884 7.68.85.85 0 0 0 1.603.566 9.795 9.795 0 0 1 9.276-6.545 9.8 9.8 0 0 1 9.234 6.603c1.33 3.857.158 7.016-1.873 9.532-1.531 1.716-2.065 2.216-2.232 2.42-.601.729-1.794 2.142-2.18 3.545l-.002.01-.002.011c-.637 2.558-.969 4.204-1.791 5.003-.412.4-1.125.784-1.838.825-.713.042-1.472-.127-2.78-.597a.85.85 0 1 0-.574 1.6c1.437.516 2.397.756 3.452.695 1.054-.062 2.245-.642 2.925-1.302 1.36-1.32 1.61-3.224 2.254-5.814l-.004.02c.187-.68 1.297-2.24 1.852-2.914.14-.171.713-.819.835-.958a11.505 11.505 0 0 0 3.565-12.63 11.51 11.51 0 0 0-10.836-7.75m.066 4.544q-.128 0-.257.003a6.95 6.95 0 0 0-6.228 4.31.85.85 0 0 0 1.572.647 5.25 5.25 0 0 1 4.707-3.258 5.25 5.25 0 0 1 4.887 2.979 5.25 5.25 0 0 1-.739 5.675.85.85 0 0 0 1.293 1.102 6.95 6.95 0 0 0 .977-7.512 6.96 6.96 0 0 0-6.212-3.946m-6.053 14.608-12.7 12.7v4.275l3.713-.012 14.22-14.17a12 12 0 0 1-1.418-.45 11.7 11.7 0 0 1-3.048-1.776 12 12 0 0 1-.767-.567" style="color:#000;fill:#000;fill-opacity:1;stroke-linecap:round" transform="translate(-101.959 -85.553)"/>`;
const _DefaultDesc = `Accessibility, hard of hearing`;
const _DefaultTitle = "Accessibility, hard of hearing";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Ac007AccessibilityHardOfHearing = defineComponent({
  name: "Ac007AccessibilityHardOfHearing",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-ac-007-accessibility-hard-of-hearing`;
      const titleId = `pi-title-ac-007-accessibility-hard-of-hearing`;
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
