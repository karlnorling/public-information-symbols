// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M78.751 122.219h52.917v52.917H78.751z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-78.751 -122.219)"/><path d="M95.482 132.196a8.8 8.8 0 0 1-8.063 7.802v1.204c4.874-.337 8.798-4.17 9.272-9.006zm3.34 0a12.13 12.13 0 0 1-11.403 11.137v1.202c6.711-.347 12.116-5.666 12.604-12.339zm3.332 0a15.4 15.4 0 0 1-3.403 8.74h-2.092v2.13a15.4 15.4 0 0 1-9.24 3.595v1.199a16.6 16.6 0 0 0 9.24-3.276v2.873a18.96 18.96 0 0 1-9.24 2.778v1.2a20.1 20.1 0 0 0 9.24-2.596v7.576h21.478v-15.48h-13.664a20.1 20.1 0 0 0 2.466-8.739h-1.201a18.9 18.9 0 0 1-2.64 8.74h-2.848a16.57 16.57 0 0 0 3.106-8.74zM98.82 142.87h17.156v11.61H98.82Zm-2.072 14.535-4.8 5.724v2.03H123v-2.03l-4.8-5.724h-15.085z" style="color:#000;display:inline;fill:#000;-inkscape-stroke:none" transform="translate(-78.751 -122.219)"/>`;
const _DefaultDesc = `Wireless LAN`;
const _DefaultTitle = "Wireless LAN";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf018WirelessLan = defineComponent({
  name: "Cf018WirelessLan",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-018-wireless-lan`;
      const titleId = `pi-title-cf-018-wireless-lan`;
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
