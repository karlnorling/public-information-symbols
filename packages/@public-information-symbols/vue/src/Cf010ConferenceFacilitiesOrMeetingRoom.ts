// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M60.267 152.154h52.917v52.917H60.267z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-60.267 -152.154)"/><path d="M86.726 165.212a2.434 2.434 0 1 0-.001 4.867 2.434 2.434 0 0 0 0-4.867m-10.177.782a2.434 2.434 0 1 0 0 4.867 2.434 2.434 0 0 0 0-4.867m20.352 0a2.434 2.434 0 1 0 0 4.867 2.434 2.434 0 0 0 0-4.867m-11.87 4.704h-.054a.6.6 0 0 0-.11.014h-.61c-.48-.016-1.022.132-1.18.649l-1.873 5.541h1.748l.735-2.135a.21.21 0 0 1 .196-.142c.078.002.149.055.158.17v2.107h5.369v-2.107c.01-.115.081-.168.159-.17a.21.21 0 0 1 .195.142l.735 2.135h1.748l-1.872-5.541c-.158-.517-.7-.665-1.181-.65h-.609a1.2 1.2 0 0 0-.363 0H85.23a2 2 0 0 0-.199-.013m-8.482.832c-1.255 0-2.277.959-2.378 1.648a3.54 3.54 0 0 1 1.328 2.769 3.55 3.55 0 0 1-1.337 2.776v.135c.665.393 1.102 1 1.102 1.454 0 0 0 2.941-.003 3.98l3.748-6.959-.034.003c.007-.072-.038-4.05-.038-4.05 0-.691-1.065-1.756-2.388-1.756m20.352 0c-1.322 0-2.387 1.065-2.387 1.757 0 0-.045 3.977-.038 4.05l-.034-.003 3.748 6.957c-.004-1.037-.003-3.979-.003-3.979 0-.454.436-1.06 1.102-1.453v-.136a3.55 3.55 0 0 1-1.337-2.776c0-1.12.519-2.118 1.328-2.769-.101-.689-1.123-1.648-2.379-1.648m-25.445 2.126a2.433 2.433 0 1 0 0 4.867 2.433 2.433 0 0 0 0-4.867m30.539 0a2.434 2.434 0 1 0-.001 4.867 2.434 2.434 0 0 0 0-4.867m-22.033 4.76-6.88 13.263h27.286l-6.88-13.262Zm-8.506.776c-1.323 0-2.387 1.065-2.387 1.757v11.065h2.083l2.677-4.996.01-1.847c.006-.073.005-4.222.005-4.222 0-.692-1.065-1.757-2.388-1.757m30.539 0c-1.323 0-2.388 1.065-2.388 1.757 0 0-.002 4.15.005 4.222l.01 1.847 2.677 4.996h2.083v-11.065c0-.692-1.064-1.757-2.387-1.757" style="fill:#000;fill-opacity:1;stroke-width:2.63014;stroke-linecap:round" transform="translate(-60.267 -152.154)"/>`;
const _DefaultDesc = `Conference facilities or Meeting room`;
const _DefaultTitle = "Conference facilities or Meeting room";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf010ConferenceFacilitiesOrMeetingRoom = defineComponent({
  name: "Cf010ConferenceFacilitiesOrMeetingRoom",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-010-conference-facilities-or-meeting-room`;
      const titleId = `pi-title-cf-010-conference-facilities-or-meeting-room`;
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
