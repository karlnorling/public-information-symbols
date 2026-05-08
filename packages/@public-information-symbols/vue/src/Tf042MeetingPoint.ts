// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M73 135.291h52.917v52.917H73z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-73 -135.291)"/><path d="M103.524 145.133a2.403 2.403 0 1 0 0 4.806 2.403 2.403 0 0 0 0-4.806m-14.449.091a2.403 2.403 0 1 0 0 4.806 2.403 2.403 0 0 0 0-4.806m-1.319 5.651c-1.639.048-2.57.826-2.913 2.139-.542 2.915-1.721 6.106-2.163 8.863l-2.188 14.54a1.543 1.543 0 0 0 1.297 1.761 1.543 1.543 0 0 0 1.757-1.3l1.896-12.596c.051-.41.259-.326.326.037l2.251 12.698a1.543 1.543 0 1 0 3.041-.54l-2.516-14.19c.434-1.94 1.013-3.942 1.524-5.898l4.458 5.425c.47.573 1.22.754 1.801.476.443.075.935-.06 1.322-.405l4.052-3.612.98-1.555c.523 1.85 1.11 3.84 1.605 5.833l-2.295 13.89a1.513 1.513 0 0 0 1.23 1.758 1.513 1.513 0 0 0 1.757-1.23l2.279-12.884c.058-.371.19-.368.317.022l3.832 13.166a1.513 1.513 0 0 0 1.88 1.032l.015-.005a1.513 1.513 0 0 0 1.033-1.88l-2.337-8.03 6.446-1.115-.983-5.688-2.815.486-.331-1.912-.61.105a1.2 1.2 0 0 0-.02-.541l-1.218-4.434c-.247-.897-.574-1.219-1.45-1.6l-4.38-2.237-.006-.003c-1.228-.7-2.748-.788-3.623.122-1.154 1.233-2.2 3.086-3.17 4.624l-3.645 3.249-6.271-7.633a3.12 3.12 0 0 0-2.165-.938m20.522 4.29 1.849.856 1.178 4.3q.046.183.14.336l-.451.078.33 1.913-.95.164c-.715-2.562-1.378-5.067-2.096-7.647m5.628 5.574.246 1.42-2.335.403-.245-1.419.314-.054c.265.15.586.204.906.124a1.24 1.24 0 0 0 .638-.392z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:.600001" transform="translate(-73 -135.291)"/>`;
const _DefaultDesc = `Meeting point`;
const _DefaultTitle = "Meeting point";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf042MeetingPoint = defineComponent({
  name: "Tf042MeetingPoint",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-042-meeting-point`;
      const titleId = `pi-title-tf-042-meeting-point`;
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
