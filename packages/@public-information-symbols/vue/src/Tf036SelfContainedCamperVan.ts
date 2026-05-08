// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M156.638 101.993h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-156.638 -101.993)"/><path d="M200.058 114.61q-.06 0-.118.004h-9.51l-8.405 3.136h-16.497c-.789 0-1.703.316-1.967 1.137l-2.688 8.182c-.306.931-.32 1.728.066 2.656l3.02 8.035h3.99a5.31 5.31 0 0 1 5.263-4.641 5.31 5.31 0 0 1 5.265 4.641h12.431a5.31 5.31 0 0 1 5.262-4.641 5.31 5.31 0 0 1 5.265 4.641h4.113v-8.406l-3.45-7.778c-.173-.462-.217-.801.426-.752h.876c1.08-.012 1.206-1.108.703-2.115l-1.134-2.504c-.508-1.122-1.614-1.57-2.792-1.593zm-5.596 6.784c.022-.002.034.012.028.05h5.583a.31.31 0 0 1 .31.31l2.884 7.495.022 2.817a.314.314 0 0 1-.31.31l-3.204-.012-.966-2.493h-4.319a.31.31 0 0 1-.31-.31v-7.807c0-.135.205-.353.282-.36m-28.098.094h8.16a.31.31 0 0 1 .312.31v4.79a.31.31 0 0 1-.311.31h-8.161a.31.31 0 0 1-.31-.31v-4.79a.31.31 0 0 1 .31-.31m18.331.015c1.74 0 3.15 1.336 3.15 2.983s-1.41 2.983-3.15 2.983-3.149-1.336-3.149-2.983 1.41-2.983 3.15-2.983m0 6.243c1.948 0 3.526.944 3.526 2.107s-1.578 2.107-3.526 2.107-3.526-.943-3.526-2.107 1.579-2.107 3.526-2.107m0 1.044c-1.116 0-2.02.437-2.02.975 0 .539.904.976 2.02.975 1.116 0 2.021-.436 2.02-.975.001-.538-.904-.975-2.02-.975m-3.408 2.037c.213.278.233.288.39.465l-.02.49v.002c.248 1.437 1.573 1.265 1.666 2.316.03.291.024.528.026.764.027.6.744 1.057 1.346 1.078.602.003 1.361-.508 1.352-1.078.001-.236-.012-.473.018-.764.055-1.193 1.38-.805 1.668-2.316v-.002l.011-.528c.14-.142.144-.147.357-.424l.003.943c.007.609-.335 1.064-.668 1.357-.332.293-.67.497-.804.64l-.002.003c-.156.173-.182.268-.198.42-.016.154.01.382.006.695v.008l-.002.008c-.025.524-.28.967-.652 1.182-.31.18-.648.229-.989.24v.005l-.1-.001h-.1v-.003c-.341-.011-.679-.061-.99-.24-.37-.216-.629-.657-.653-1.182v-.016c-.004-.313.021-.541.006-.696s-.043-.246-.204-.423c-.136-.144-.471-.348-.802-.64-.333-.292-.673-.748-.666-1.357zm-8.075 3.734a3.865 3.865 0 1 0 0 7.731 3.865 3.865 0 0 0 0-7.73m22.958 0a3.865 3.865 0 1 0 0 7.731 3.865 3.865 0 0 0 0-7.73" style="display:inline;fill:#000;stroke-width:1.8" transform="translate(-156.638 -101.993)"/>`;
const _DefaultDesc = `Self-contained camper van`;
const _DefaultTitle = "Self-contained camper van";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf036SelfContainedCamperVan = defineComponent({
  name: "Tf036SelfContainedCamperVan",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tf-036-self-contained-camper-van`;
      const titleId = `pi-title-tf-036-self-contained-camper-van`;
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
