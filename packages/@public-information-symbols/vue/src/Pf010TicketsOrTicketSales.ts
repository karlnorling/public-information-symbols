// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M87.881 72.775h52.917v52.917H87.881z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-87.881 -72.775)"/><path d="m117.17 83.635-5.72 10.06-.065.006-2.793.093-5.586.282h-.014c-.81.081-1.45.365-1.957.767-.506.402-.883.894-1.304 1.42l-6.477 8.135.135.326 4.148 10.108.561-.245c2.203-.952 3.387-2.23 4.3-3.42s1.567-2.248 2.811-3.046l.002-.002 6.028-3.21 6.327 3.597 10.385-18.918zm12.104 1.125-3.572 1.984 4.233 2.514-7.342 13.692 12.833-7.475zm-11.559 4.762a.827.827 0 0 1 .827.827.827.827 0 0 1-.827.827.827.827 0 0 1-.827-.827.827.827 0 0 1 .827-.827m2.1 1.141a.827.827 0 0 1 .827.827.827.827 0 0 1-.827.827.827.827 0 0 1-.827-.827.827.827 0 0 1 .827-.827m2.067 1.141a.827.827 0 0 1 .827.827.827.827 0 0 1-.827.827.827.827 0 0 1-.827-.827.827.827 0 0 1 .827-.827m6.912 2.348a.827.827 0 0 1 .827.827.827.827 0 0 1-.827.827.827.827 0 0 1-.826-.827.827.827 0 0 1 .826-.827m-18.042.77-1.827 3.212-3.182.422c-.49.057-.99.111-1.471.336s-.913.666-1.13 1.289l-.007.014-.004.013c-.169.566-.334 1.255.01 1.928.173.337.597.63 1.036.633.438.004.86-.172 1.368-.486L110 99.8c1.468-.693 2.404-.094 2.789.786s.2 2.08-1.352 2.859l-.006.004-6.846 3.646-.021.012c-1.49.955-2.25 2.2-3.117 3.33-.769 1.002-1.723 1.924-3.295 2.726l-3.52-8.57 6.037-7.58v-.002c.425-.53.761-.949 1.114-1.228.352-.28.714-.45 1.328-.512h.002l5.53-.28zm-2.576 4.521-3.25 1.812-.012.008c-.39.242-.628.292-.703.295-.03-.089-.042-.6.069-.988.128-.359.261-.479.5-.59.241-.112.623-.177 1.101-.232h.004z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1.3;stroke-dasharray:none;stroke-opacity:1" transform="translate(-87.881 -72.775)"/></g>`;
const _DefaultDesc = `Tickets or ticket sales`;
const _DefaultTitle = "Tickets or ticket sales";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf010TicketsOrTicketSales = defineComponent({
  name: "Pf010TicketsOrTicketSales",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-010-tickets-or-ticket-sales`;
      const titleId = `pi-title-pf-010-tickets-or-ticket-sales`;
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
