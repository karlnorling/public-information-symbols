// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.742 49.742"`;
const _Body = `<path d="M79.904 123.56h49.742v49.742H79.904z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-79.904 -123.56)"/><path d="M102.831 131.033c-.868 0-1.55.752-1.55 1.64v8.894l-2.17 2.173c-.461.45-.74.887-.552 1.254.199.388.62.383 1.222.383l1.5-.027v1.46c0 .887.682 1.639 1.55 1.639h18.963c.868 0 1.552-.752 1.552-1.64v-14.136c0-.888-.684-1.64-1.552-1.64zm0 .753h18.963c.434 0 .799.375.799.887v14.136c0 .512-.365.887-.799.887h-18.963c-.434 0-.799-.375-.799-.887l-.023-2.188-2.656.048 2.68-2.656v-9.34c0-.512.364-.887.798-.887m-8.408 12.26a2.812 2.812 0 1 0 0 5.623 2.812 2.812 0 0 0 0-5.624m-2.892 6.71a2.767 2.767 0 0 0-2.773 2.773v10.92h-2.554v1.38h24.262v-1.38H98.252v-9.402l2.48 3.57c.769 1.02 1.24 1.456 2.491.602l3.898-3.576a1.376 1.376 0 0 0 .12-1.946 1.376 1.376 0 0 0-1.945-.12l-2.752 2.5c-1.064-1.234-2.428-3.578-3.46-4.84a1.7 1.7 0 0 0-1.194-.481z" style="fill:#000;stroke-width:1" transform="translate(-79.904 -123.56)"/>`;
const _DefaultDesc = `Communication in the specified language`;
const _DefaultTitle = "Communication in the specified language";
const _DefaultWidth = `188`;
const _DefaultHeight = `188`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf062CommunicationInTheSpecifiedLanguage = defineComponent({
  name: "Pf062CommunicationInTheSpecifiedLanguage",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-062-communication-in-the-specified-language`;
      const titleId = `pi-title-pf-062-communication-in-the-specified-language`;
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
