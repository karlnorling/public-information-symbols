// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M82.637 98.811h52.917v52.917H82.637z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-82.637 -98.811)"/><path d="M107.965 108.56q-.28.008-.549.084c-.517.15-.979.494-1.264.997a2.133 2.133 0 0 0 .764 2.879l.307-.516a1.525 1.525 0 0 1-.547-2.069 1.525 1.525 0 0 1 2.057-.591 1.524 1.524 0 0 1 .634 2.042l.536.274a2.136 2.136 0 0 0-.887-2.846 2.1 2.1 0 0 0-1.051-.253m1.367 3.485a2.15 2.15 0 0 0-1.863 1.078 2.135 2.135 0 0 0 .762 2.88l.308-.515a1.525 1.525 0 0 1-.548-2.068 1.526 1.526 0 0 1 2.056-.594 1.524 1.524 0 0 1 .635 2.043l.535.274a2.133 2.133 0 0 0-1.885-3.098m-2.882.785c-.74 0-1.474.368-1.752 1.162v.002l-2.522 7.453-.002.006c-.135.454-.158.927.041 1.326.2.4.645.666 1.233.676l.01-.6c-.434-.007-.604-.141-.705-.344s-.108-.53-.002-.886l2.513-7.434.002-.002v-.002c.196-.552.622-.758 1.184-.758zm4.126 2.666a1.96 1.96 0 0 0-1.961 1.962 1.96 1.96 0 0 0 1.961 1.962 1.96 1.96 0 0 0 1.963-1.962 1.96 1.96 0 0 0-1.963-1.962m-3.087.855c-.74 0-1.472.371-1.75 1.165l-.003.002-2.519 7.452-.002.006c-.135.454-.158.925.041 1.324.2.4.645.669 1.233.678l.01-.599c-.434-.007-.604-.144-.705-.346s-.11-.53-.004-.887l2.515-7.435v.004c.195-.556.621-.764 1.184-.764zm.529 3.477c-.35.003-.55.225-.667.522l-2.714 8.598a.665.665 0 0 0 .434.836l.033.01c.352.111.763-.083.874-.435l2.09-6.624-.038 7.942-.268 10.356c-.014.524.422.947.946.947a.953.953 0 0 0 .947-.947c.105 3.421.247-9.957.268-10.265-.044-.501.924-.361.88 0 .022.35.192 7.238.27 10.265a.953.953 0 0 0 .945.947c.525 0 .96-.423.947-.947l-.269-10.356-.07-7.925 2.091 6.623c.111.352.554.53.906.419l.032-.01a.665.665 0 0 0 .435-.836l-2.714-8.598c-.117-.297-.318-.52-.667-.522h-2.897zm-1.803 10.162v8.359c.008.253.158.431.3.551.14.12.287.197.42.243l.194-.569a1 1 0 0 1-.226-.131.3.3 0 0 1-.086-.11v-8.343zm-1.369.715v3.93l.002.008c.01.228.122.386.242.523s.258.248.408.324l.272-.535a1 1 0 0 1-.227-.186c-.07-.08-.096-.165-.096-.152v-3.912z" style="stroke-width:2;stroke-linecap:round" transform="translate(-82.637 -98.811)"/>`;
const _DefaultDesc = `Line up or queue in single file`;
const _DefaultTitle = "Line up or queue in single file";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Bp003LineUpOrQueueInSingleFile = defineComponent({
  name: "Bp003LineUpOrQueueInSingleFile",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-bp-003-line-up-or-queue-in-single-file`;
      const titleId = `pi-title-bp-003-line-up-or-queue-in-single-file`;
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
