// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M70.058 101.993h52.917v52.917H70.058z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-70.058 -101.993)"/><path d="M96.077 109.716a12.27 12.27 0 0 0-12.295 12.295v.94q0 .088.003.175l-.003.045v13.863c0 .834.645 1.505 1.447 1.505h22.574c.801 0 1.446-.671 1.446-1.505V123.17l-.002-.043.002-.177v-.94a12.27 12.27 0 0 0-12.294-12.295zm-1.514 1.913h3.906c.59 0 1.066.476 1.066 1.066v.425c0 .59-.476 1.065-1.066 1.065h-3.906c-.59 0-1.066-.475-1.066-1.065v-.425c0-.59.476-1.066 1.066-1.066m-5.668 3.783h2.273c.452 0 .816.266.816.596v12.953c0 .33-.364.596-.816.596h-4.077c-.452 0-.815-.266-.815-.596v-8.343c.478-1.979 1.34-4.124 2.619-5.206m6.021 0h3.2c.599 0 1.082.28 1.082.627v12.892c0 .347-.483.626-1.083.626h-3.199c-.599 0-1.081-.28-1.081-.626v-12.892c0-.347.482-.627 1.081-.627m6.947 0h2.275c1.278 1.082 2.14 3.227 2.618 5.207v8.342c0 .33-.364.596-.815.596h-4.078c-.451 0-.815-.266-.815-.596v-12.953c0-.33.364-.596.815-.596m-13.22 15.723a2.085 2.085 0 0 1 2.085 2.084 2.085 2.085 0 0 1-2.085 2.085 2.085 2.085 0 0 1-2.085-2.085 2.085 2.085 0 0 1 2.085-2.084m15.746 0a2.085 2.085 0 0 1 2.084 2.084 2.085 2.085 0 0 1-2.084 2.085 2.085 2.085 0 0 1-2.085-2.085 2.085 2.085 0 0 1 2.085-2.084m-18.897 8.431-4.266 7.621h3.544l2.854-7.62zm19.916 0 2.854 7.621h3.544l-4.265-7.62z" style="display:inline;fill:#000;stroke-width:.7" transform="translate(-70.058 -101.993)"/>`;
const _DefaultDesc = `Underground, or Metro railway station, or Trains`;
const _DefaultTitle = "Underground, or Metro railway station, or Trains";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf003UndergroundOrMetroRailwayStationOrTrains = defineComponent({
  name: "Tf003UndergroundOrMetroRailwayStationOrTrains",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-003-underground-or-metro-railway-station-or-trains`;
      const titleId = `pi-title-tf-003-underground-or-metro-railway-station-or-trains`;
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
