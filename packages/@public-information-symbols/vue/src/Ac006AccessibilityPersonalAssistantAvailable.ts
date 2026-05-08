// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M92.907 85.553h52.917v52.917H92.907z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-92.907 -85.553)"/><path d="M113.862 93.425a3.571 3.571 0 1 0 0 7.142 3.571 3.571 0 0 0 0-7.142m19.27 0a3.571 3.571 0 1 0 0 7.142 3.571 3.571 0 0 0 0-7.142m-21.673 8.133a3.645 3.645 0 0 0-3.444 2.5l-2.41 7.236c-.373 1.119-.177 2.285.186 2.834.027.066 1.494 1.898 1.494 1.898l4.767 5.76-1.876 6.005a2.123 2.123 0 0 0 1.339 2.694c1.117.375 2.351-.211 2.694-1.339l1.881-6.196c.6-1.974.862-2.338-.688-4.145l-3.231-4.428c.245-.59.413-1.067.66-1.67l3.795 1.02c.27.072.54.08.797.036a1.88 1.88 0 0 1-.144-1.353l.595-2.214a252 252 0 0 0-3.854-1.059l.923-2.772a3.643 3.643 0 0 0-2.31-4.618 3.7 3.7 0 0 0-1.174-.19m9.822 2.705a1.66 1.66 0 0 0-1.044.865 1.9 1.9 0 0 0-.492.85l-1.676 6.238a1.884 1.884 0 0 0 1.334 2.313 1.884 1.884 0 0 0 2.313-1.334l1.555-5.786 3.164-.884-1.589 4.77c-.372 1.118-.176 2.284.186 2.833.028.066 1.495 1.898 1.495 1.898l4.767 5.76-1.876 6.005a2.123 2.123 0 0 0 1.338 2.694c1.118.375 2.352-.211 2.694-1.339l1.882-6.196c.6-1.974.862-2.338-.688-4.145l-2.958-4.366c.943-2.585 1.617-5.427 2.498-8.075.543-3.902-2.101-5.08-4.405-4.663-1.735.41-5.28 1.663-8.498 2.562m-15.18 11.69-3.96 11.79a2.123 2.123 0 0 0 1.338 2.693 2.123 2.123 0 0 0 2.694-1.339l3.131-9.32zm19.242 0-3.961 11.79a2.123 2.123 0 0 0 1.339 2.693 2.123 2.123 0 0 0 2.694-1.339l3.13-9.32z" style="display:inline;fill:#000;stroke-width:1.4" transform="translate(-92.907 -85.553)"/>`;
const _DefaultDesc = `Accessibility, personal assistant available`;
const _DefaultTitle = "Accessibility, personal assistant available";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Ac006AccessibilityPersonalAssistantAvailable = defineComponent({
  name: "Ac006AccessibilityPersonalAssistantAvailable",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-ac-006-accessibility-personal-assistant-available`;
      const titleId = `pi-title-ac-006-accessibility-personal-assistant-available`;
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
