// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M69.147 60.096h52.917v52.917H69.147z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-69.147 -60.096)"/><path d="M77.108 67.451v14.225h2V69.45h27.982v12.154h2V67.451zm9.636 6.24-1.174 1.23s.432.412.875.975.836 1.309.861 1.616c.05.593-.248 1.152-.706 1.896-.459.744-1.075 1.646-1.094 2.852-.018 1.046.458 2.038.886 2.876.429.839.86 1.487.86 1.487l1.416-.941s-.382-.576-.762-1.319c-.38-.742-.708-1.689-.701-2.076.01-.613.37-1.224.841-1.989.472-.764 1.057-1.712.954-2.931-.087-1.032-.693-1.853-1.22-2.521-.525-.669-1.036-1.155-1.036-1.155m5.84 0-1.174 1.23s.432.412.875.975.836 1.309.861 1.616c.05.593-.249 1.152-.707 1.896s-1.074 1.646-1.094 2.852c-.017 1.046.459 2.038.887 2.876.429.839.86 1.487.86 1.487l1.416-.941s-.382-.576-.762-1.319c-.38-.742-.708-1.689-.701-2.076.01-.613.37-1.224.841-1.989.472-.764 1.056-1.712.953-2.931-.087-1.032-.692-1.853-1.218-2.521-.526-.669-1.037-1.155-1.037-1.155m5.84 0-1.174 1.23s.431.412.875.975c.443.563.835 1.309.86 1.616.05.593-.248 1.152-.706 1.896-.459.744-1.074 1.646-1.094 2.852-.017 1.046.459 2.038.887 2.876.429.839.86 1.487.86 1.487l1.416-.941s-.382-.576-.762-1.319c-.38-.742-.708-1.689-.701-2.076.01-.613.37-1.224.841-1.989.472-.764 1.056-1.712.953-2.931-.087-1.032-.692-1.853-1.218-2.521-.526-.669-1.037-1.155-1.037-1.155m-3.788 18.957c-.99 0-.906.985-.134 1.45.692.42 1.374.749 2.14.762.944.03 2.641.02 3.587.043.533.031.501.67-.015.67H88.668a.873.873 0 0 0-.875.875c0 .394.256.725.612.836l1.317.04h4.809c.664.003.618.89-.045.9h-7.584a.873.873 0 0 0-.875.875c0 .485.39.875.875.875h7.53c.774-.002.646.882.196.9h-6.5a.3.3 0 0 1-.173-.05h-.237a.873.873 0 0 0-.875.875c0 .485.39.875.875.875h7.736c.636-.02.565.836.174.85h-5.435a.873.873 0 0 0-.875.876c0 .484.39.875.875.875h7.817c2.835 1.108 6.433.105 8.594-.976h7.5v-7.65h-7.35c-.486 0-1.622-3.894-5.55-3.9z" style="display:inline;fill:#000;stroke-width:.799999;stroke-linecap:round" transform="translate(-69.147 -60.096)"/>`;
const _DefaultDesc = `Hand Dryer`;
const _DefaultTitle = "Hand Dryer";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf075HandDryer = defineComponent({
  name: "Pf075HandDryer",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-075-hand-dryer`;
      const titleId = `pi-title-pf-075-hand-dryer`;
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
