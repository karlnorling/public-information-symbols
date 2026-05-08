// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M78.219 152.38h52.917v52.917H78.219z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-78.219 -152.38)"/><path d="M119.976 162.946q-.135 0-.257.004l-5.293.046-24.512 8.98c-1.157.456-2.065.828-2.038 2.886v13.745l2.487-.911a1 1 0 0 0-.407.804 1 1 0 0 0 .998.998 1 1 0 0 0 .998-.998 1 1 0 0 0-.998-.998l-.067.003 2.527-.926a1 1 0 0 0-.42.812 1 1 0 0 0 .999.998 1 1 0 0 0 .997-.998 1 1 0 0 0-.997-.997l-.082.003 19.747-7.235a1 1 0 0 0-.455.836 1 1 0 0 0 .998.998 1 1 0 0 0 .998-.998 1 1 0 0 0-.998-.998 1 1 0 0 0-.126.01l2.693-.987a1 1 0 0 0-.498.864 1 1 0 0 0 .998.998 1 1 0 0 0 .997-.998 1 1 0 0 0-.997-.998 1 1 0 0 0-.18.017l4.282-1.57v-12.142c0-1.117-.767-1.246-1.394-1.248m-4.833 2.193h4.445c.185 0 .334.149.334.334v4.54a.333.333 0 0 1-.334.333h-4.445a.333.333 0 0 1-.333-.334v-4.54c0-.184.149-.333.333-.333m-6.355 2.235h4.446c.184 0 .333.149.333.334v4.54a.333.333 0 0 1-.333.333h-4.446a.333.333 0 0 1-.333-.334v-4.54c0-.184.148-.333.333-.333m-6.355 2.235h4.446c.184 0 .333.148.333.333v4.54a.333.333 0 0 1-.333.333h-4.446a.333.333 0 0 1-.333-.333v-4.54c0-.185.148-.333.333-.333m-6.355 2.234h4.445c.185 0 .334.149.334.334v4.54a.333.333 0 0 1-.334.333h-4.445a.333.333 0 0 1-.334-.334v-4.54c0-.184.149-.333.334-.333m-6.355 2.235h4.445c.185 0 .334.149.334.334v4.539a.333.333 0 0 1-.334.334h-4.445a.333.333 0 0 1-.333-.334v-4.54c0-.184.148-.333.333-.333m35.375 4.693-40.841 14.364v1.597l40.841-14.365z" style="fill:#000;stroke-width:1.3" transform="translate(-78.219 -152.38)"/>`;
const _DefaultDesc = `Funicular, or Cable railway`;
const _DefaultTitle = "Funicular, or Cable railway";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf012FunicularOrCableRailway = defineComponent({
  name: "Tf012FunicularOrCableRailway",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-012-funicular-or-cable-railway`;
      const titleId = `pi-title-tf-012-funicular-or-cable-railway`;
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
