// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M120.8 98.09h52.917v52.917H120.8z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-120.8 -98.09)"/><path d="m167.624 105.59-13.474 4.887-.183-.511a.8.8 0 0 0-.705-.53.8.8 0 0 0-.315.047l-12.465 4.443a.81.81 0 0 0-.484 1.02l.21.588-13.316 4.83v1.384l18.676-6.774-3.496 10.183h-10.188c-.826 0-1.491.666-1.491 1.492v15.368c0 .826.665 1.49 1.49 1.49h30.396c.826 0 1.491-.664 1.491-1.49v-15.368c0-.826-.665-1.492-1.491-1.492H152.09l-3.83-11.16 19.363-7.024zm-20.542 8.977 1.136 3.311h-2.273zm-1.584 4.612h3.167l.889 2.588h-4.944zm-1.335 3.889H150l.717 2.09h-7.271zm-11.976 4.087h6.047v8.132h-6.047zm7.915 0h6.046v8.132h-6.046zm7.914 0h6.046v8.132h-6.046zm7.914 0h6.046v8.132h-6.046z" style="color:#000;display:inline;fill:#000;stroke-width:1.3;-inkscape-stroke:none" transform="translate(-120.8 -98.09)"/>`;
const _DefaultDesc = `Cable car`;
const _DefaultTitle = "Cable car";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf011CableCar = defineComponent({
  name: "Tf011CableCar",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-011-cable-car`;
      const titleId = `pi-title-tf-011-cable-car`;
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
