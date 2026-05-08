// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M138.466 143.207h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-138.466 -143.207)"/><path d="M173.435 151.107a9.8 9.8 0 0 0-6.93 2.873 9.8 9.8 0 0 0-2.5 4.29l-.897-.898-1.646-1.645 1.733-1.733.379.378.64.64a11 11 0 0 1 .893-1.229l-.473-.472-1.44-1.439-3.853 3.856 3.347 3.345 12.633 12.628 3.336 3.334 3.788-3.79-1.639-1.638-.269-.269a11 11 0 0 1-1.239.883l.448.448.577.577-1.666 1.667-1.634-1.633-.943-.942a9.8 9.8 0 0 0 4.29-2.5 9.8 9.8 0 0 0-.004-13.862 9.8 9.8 0 0 0-6.931-2.87zm-3.282 6.676h.734v4.727h-.904v-3.4q-.496.462-1.168.684v-.82q.354-.115.769-.436.414-.324.57-.755m3.612 0q.685 0 1.07.488.46.579.46 1.917 0 1.337-.462 1.92-.383.482-1.068.482-.69 0-1.11-.526-.42-.53-.421-1.885 0-1.33.463-1.914.382-.482 1.068-.482m3.663 0q.684 0 1.07.488.46.579.46 1.917 0 1.337-.463 1.92-.382.482-1.067.482-.69 0-1.11-.526-.42-.53-.421-1.885 0-1.33.463-1.914.382-.482 1.068-.482m-3.684.749a.45.45 0 0 0-.272.106q-.128.102-.2.372-.093.35-.093 1.178 0 .83.084 1.14.083.309.209.411a.46.46 0 0 0 .293.103q.165 0 .292-.103.13-.106.2-.375.093-.347.093-1.176 0-.828-.084-1.136-.084-.312-.212-.414a.44.44 0 0 0-.29-.106zm3.663 0a.45.45 0 0 0-.272.106q-.128.102-.2.372-.092.35-.093 1.178 0 .83.084 1.14t.209.411a.46.46 0 0 0 .293.103q.164 0 .292-.103.13-.106.2-.375.093-.347.093-1.176 0-.828-.083-1.136-.084-.312-.213-.414a.44.44 0 0 0-.29-.106zm-28.235 3.935c-.394 0-.71.29-.71.648a.6.6 0 0 0 .015.136v.837h3.356v-.837a.6.6 0 0 0 .016-.136c0-.359-.317-.648-.71-.648zm-.565 1.974a.18.18 0 0 0-.173.183c0 .102.082.183.183.183h3.077a.183.183 0 1 0 0-.366zm.077.688v.632c-.624.6-1.088 1.52-1.43 2.747-.38 1.363-.61 3.052-.635 4.896q-.006.115-.008.243v.778h7.088v-.778q-.002-.132-.008-.249c-.026-1.843-.255-3.53-.634-4.892-.342-1.228-.808-2.148-1.432-2.746v-.63zm7.77 6.818c1.135 4.14 1.36 10.242-.063 16.278 2.427-.647 6.021-.63 13.173-.063-1.26-5.624-1.22-10.399-.063-16.12-1.572.48-4.062.74-13.047-.095m-9.842 3.074v9.33h7.087v-9.33zm21.37 1.344v3.083c-1.778.473-3.35 1.224-4.94 2.155-1.53 1.095-3.213 1.528-4.932 2.17v-3.083c1.762-.478 3.296-1.392 4.873-2.317 1.537-1.098 3.27-1.375 5-2.008m-21.37 8.583v1.087c0 .497.06.943.179 1.309.06.183.13.348.246.498s.317.316.59.316h5.057c.273 0 .474-.166.59-.316s.186-.315.246-.498c.118-.366.18-.812.18-1.309v-1.087z" style="color:#000;display:inline;fill:#000;stroke:none;stroke-width:.964999" transform="translate(-138.466 -143.207)"/>`;
const _DefaultDesc = `Snack machine`;
const _DefaultTitle = "Snack machine";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf020SnackMachine = defineComponent({
  name: "Cf020SnackMachine",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-020-snack-machine`;
      const titleId = `pi-title-cf-020-snack-machine`;
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
