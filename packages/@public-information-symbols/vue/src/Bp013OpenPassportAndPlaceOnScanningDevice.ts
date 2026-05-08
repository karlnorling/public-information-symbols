// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M149.057 143.551h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-149.057 -143.55)"/><path d="M175.222 154.752v2.2h6.87c.637.02.89.18 1.064.388s.314.588.305 1.202v7.358l-3.524-3.49v3.042l4.592 4.548 4.593-4.548v-3.041l-3.462 3.428v-7.262c.015-.964-.201-1.912-.819-2.649-.617-.736-1.594-1.14-2.679-1.175h-.018zm-6.248.699a.8.8 0 0 0-.362.08l-11.599 4.34-.58-.004.003.556.002 22.648 14.41-.2h.015a1.9 1.9 0 0 0 1.354-.702c.324-.414.473-1.018.444-1.631l.094-18.985c-.014-.673-.656-1.224-1.523-1.466a3.6 3.6 0 0 0-.534-.1l.007-3.025c-.032-.362-.214-.683-.465-.934-.36-.36-.862-.58-1.266-.577m1.719 5.657c.283.052.506.137.647.218a1 1 0 0 1 .143.112c.119.114.17.246.18.458l-.099 18.7c-.017.586-.317 1.088-.907 1.172l-11.288.159 9.938-3.762c.797-.302 1.362-1.07 1.347-1.841zm-2.402 3.605v2.12l-3.524 1.152c-.218-.48-.664-.83-1.21-.87-.823-.063-1.538.601-1.609 1.458q-.018.228.023.442l-3.329 1.088v-2.258zm0 2.563v2.308l-9.649 3.133v-2.17l3.46-1.132c.224.465.664.8 1.198.841.823.062 1.536-.602 1.607-1.46q.016-.21-.017-.408zm-4.85.262q.04 0 .081.003c.576.043 1.01.581.958 1.224-.053.642-.57 1.109-1.146 1.065-.575-.043-1.012-.582-.96-1.224.05-.612.525-1.064 1.068-1.068zm21.355 5.482-.241.121c-2.764 1.382-5.437 2.7-8.407 3.38a.5.5 0 0 0-.375.599.5.5 0 0 0 .6.376c3.033-.695 5.714-2.01 8.406-3.355 2.568 1.461 5.28 2.385 8.018 3.277a.5.5 0 0 0 .63-.32.5.5 0 0 0-.32-.629c-2.82-.92-5.551-1.834-8.076-3.312zm-10.182 5.494v3.346h1.262v3.406h17.46v-3.406h1.262v-3.346zm17.83.86a.893.893 0 0 1 .893.893.893.893 0 0 1-.893.893.893.893 0 0 1-.893-.893.893.893 0 0 1 .893-.893" style="display:inline;fill:#000;stroke-width:5.00079" transform="translate(-149.057 -143.55)"/>`;
const _DefaultDesc = `Open passport and place on scanning device`;
const _DefaultTitle = "Open passport and place on scanning device";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Bp013OpenPassportAndPlaceOnScanningDevice = defineComponent({
  name: "Bp013OpenPassportAndPlaceOnScanningDevice",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-bp-013-open-passport-and-place-on-scanning-device`;
      const titleId = `pi-title-bp-013-open-passport-and-place-on-scanning-device`;
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
