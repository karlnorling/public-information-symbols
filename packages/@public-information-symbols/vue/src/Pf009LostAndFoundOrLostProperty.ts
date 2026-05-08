// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M59.075 72.775h52.917v52.917H59.075z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-59.075 -72.775)"/><path d="M74.296 80.702c-.288-.005-.57.247-.547.78l-.056 4.742c-.012.521-.09 1.24-.442 1.25-.445-.003-.614-.603-.606-1.305l-.149-2.441c-.026-.587.134-2.04-.563-2.032-.845.008-.486 1.154-.516 2.004l.13 4.002s.016.17-.01.258c-.031.102-.078.202-.173.251a.4.4 0 0 1-.348-.002c-.143-.074-.213-.217-.275-.366a1 1 0 0 1-.031-.186l-.553-3.237c-.058-.467-.106-.976-.655-.927-.406.02-.394.524-.33.941l.464 3.142.055.722.031.862-.11 9.849 3.012.627c-.19-1.895.041-2.637.832-2.647.895-.011.997.849.861 2.663l3.262-.706c-.621-6.21-1.32-6.051 2.91-10.356 1.315-1.462.463-3.126-.926-1.807-3.456 3.82-2.371 1.422-2.39-3.95.026-1.036-1.07-.87-1.114-.073l-.192 3.423c-.036 1.261-.98 1.32-.93-.06l-.05-4.654c-.007-.497-.302-.761-.59-.767m14.938.676L84.14 86.47l5.076 5.077 3.278-1.572c.786.72 2.549 2.455 3.23 3.128v2.287c-.283-.074-.519-.223-.578-.544-.043-.628-.419-.935-.797-.927s-.758.33-.81.963c-.054.31-.165.578-.332.604-.858.083-.861-.49-1.192-1.146-.404-.838-1.575-.285-.972 1.155l4.692 19.588v1.97a.664.664 0 1 0 1.33 0v-1.97l4.694-19.588c.602-1.44-.568-1.993-.972-1.155-.332.657-.334 1.229-1.193 1.146-.167-.026-.278-.295-.33-.604-.106-1.264-1.523-1.292-1.608-.036-.063.341-.326.488-.632.557V84.506c-.021-.683.157-1.105.376-1.36a1.03 1.03 0 0 1 .787-.37c.577-.009 1.201.362 1.21 1.435v.031a.65.65 0 0 0 .65.62.65.65 0 0 0 .648-.616h.002c.007-1.686-1.247-2.787-2.53-2.769-.64.01-1.29.286-1.751.822-.462.537-.72 1.31-.692 2.247v7.682l-2.766-2.69 1.335-3.034zm-.121 1.886a2.125 2.125 0 0 1 .593 4.166l-.019.005v1.013c0 .17-.1.306-.223.306h-.81c-.124 0-.223-.136-.223-.306V87.03c-.006-.188.012-.368.337-.52.708-.274 1.128-.164 1.207-1.128a.839.839 0 1 0-1.657.18h-1.322a2.125 2.125 0 0 1 2.117-2.298m-.036 5.753a.59.59 0 0 1 .59.59.59.59 0 0 1-.59.591.59.59 0 0 1-.59-.59.59.59 0 0 1 .59-.59m-11.39 15.37a.923.923 0 0 0-.925.926v1.185H73v11.267h11.54v-11.267h-3.764v-1.185a.924.924 0 0 0-.925-.926zm.406.722h1.353c.32 0 .578.258.578.578v.811h-2.509v-.811c0-.32.258-.578.578-.578m-6.443 1.39a1.24 1.24 0 0 0-1.241 1.242v8.781a1.24 1.24 0 0 0 1.241 1.243h.22v-11.267zm14.02 0v11.266h.218a1.24 1.24 0 0 0 1.243-1.243v-8.781a1.24 1.24 0 0 0-1.243-1.243z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1;stroke-opacity:1" transform="translate(-59.075 -72.775)"/></g>`;
const _DefaultDesc = `Lost and found or lost property`;
const _DefaultTitle = "Lost and found or lost property";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf009LostAndFoundOrLostProperty = defineComponent({
  name: "Pf009LostAndFoundOrLostProperty",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-009-lost-and-found-or-lost-property`;
      const titleId = `pi-title-pf-009-lost-and-found-or-lost-property`;
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
