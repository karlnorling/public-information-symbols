// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M89.403 72.457h52.917v52.917H89.403z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-89.403 -72.457)"/><path d="M123.306 80.407a.864.864 0 0 0-.865.866v1.11h-3.522v10.542h10.8V82.382h-3.521v-1.11a.864.864 0 0 0-.866-.865zm.38.675h1.266c.3 0 .54.241.54.541v.76h-2.346v-.76c0-.3.24-.54.54-.54m-17.299.217v.021a4 4 0 0 0-.275.033c-.62.104-1.15.384-1.608.667-.3.185-.578.445-.818.671-.239.227-.421.42-.421.42l-.166.174v1.67h-.94c-1.538 0-2.777 2.714-2.777 6.086 0 .67.05 1.315.14 1.918h14.272c.09-.603.14-1.247.14-1.918 0-3.372-1.239-6.086-2.778-6.086H110.1v-1.67l-.165-.174s-.183-.193-.422-.42c-.24-.226-.52-.486-.821-.671-.458-.283-.988-.563-1.607-.667a4 4 0 0 0-.273-.033V81.3s-.089 0-.213.007zm11.27 1.083a1.16 1.16 0 0 0-1.162 1.163v8.217a1.16 1.16 0 0 0 1.163 1.163h.204V82.382Zm13.119 0v10.543h.204a1.16 1.16 0 0 0 1.162-1.163v-8.217a1.16 1.16 0 0 0-1.162-1.163zm-24.177.132c.122.008.25.016.288.023.373.062.778.258 1.176.504.127.078.408.315.624.52.121.115.145.143.214.212v1.182h-4.603v-1.182c.068-.07.093-.097.214-.212.216-.205.497-.442.623-.52.399-.246.804-.442 1.177-.504a5 5 0 0 1 .287-.023m-8.167 11.428c-.495 0-.893.413-.893.926s.398.926.893.926h34.859c.494 0 .893-.413.893-.926s-.399-.926-.893-.926zm7.626 7.871a.864.864 0 0 0-.866.866v1.11h-3.522v10.542h10.8V103.79h-3.52v-1.11a.864.864 0 0 0-.867-.866zm18.673.577-.001.022a4 4 0 0 0-.275.033c-.62.103-1.15.384-1.607.666-.3.185-.58.445-.819.672-.24.226-.422.42-.422.42l-.166.173v1.67h-.938c-1.539 0-2.778 2.715-2.778 6.086 0 .671.05 1.315.14 1.918h14.272c.09-.603.14-1.247.14-1.918 0-3.371-1.24-6.085-2.778-6.085h-1.056v-1.67l-.166-.174s-.182-.194-.422-.42c-.239-.227-.52-.487-.82-.672-.457-.282-.988-.563-1.607-.666a4 4 0 0 0-.273-.033v-.022s-.089 0-.213.007zm-18.293.098h1.265c.3 0 .541.241.541.541v.76h-2.347v-.76c0-.3.241-.54.541-.54m18.504 1.117c.122.008.25.017.289.023.373.063.777.258 1.175.504.127.079.408.316.624.52.122.115.146.143.215.213v1.182h-4.604v-1.182c.068-.07.093-.098.215-.213.215-.204.496-.441.623-.52.399-.246.803-.442 1.176-.504.038-.006.166-.015.287-.023m-24.533.184a1.16 1.16 0 0 0-1.162 1.162v8.218a1.16 1.16 0 0 0 1.162 1.162h.205v-10.542zm13.118 0v10.542h.205a1.16 1.16 0 0 0 1.161-1.162v-8.218a1.16 1.16 0 0 0-1.161-1.162zm-15.095 11.783c-.495 0-.893.413-.893.926s.398.926.893.926h34.859c.494 0 .893-.413.893-.926s-.399-.926-.893-.926z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.935721;stroke-opacity:1" transform="translate(-89.403 -72.457)"/></g>`;
const _DefaultDesc = `Baggage storage or left baggage`;
const _DefaultTitle = "Baggage storage or left baggage";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf012BaggageStorageOrLeftBaggage = defineComponent({
  name: "Pf012BaggageStorageOrLeftBaggage",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-012-baggage-storage-or-left-baggage`;
      const titleId = `pi-title-pf-012-baggage-storage-or-left-baggage`;
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
