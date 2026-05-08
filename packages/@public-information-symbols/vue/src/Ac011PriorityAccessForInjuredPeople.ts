// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M125.153 236.033h52.917v52.917h-52.917z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-125.153 -236.033)"/><path d="M153.761 243.173a2.771 2.771 0 1 0 .001 5.542 2.771 2.771 0 0 0 0-5.542m-3.08 6.784c-1.005.14-2 .72-2.316 1.611l-.941 4.02-2.57-.506a.63.63 0 0 0-.744.5l-.003.013a.63.63 0 0 0 .499.744l.716.14-1.103 6.784v.004c-.111.755-.043 1.311.29 2.006l1.907 4.003-2.654 12.494h1.023l5.178-24.377.9.178a.63.63 0 0 0 .743-.5l.003-.013a.63.63 0 0 0-.499-.744l-1.22-.24.161-.847c.324.232.891.42 1.162.454.805.078 1.362.61 1.362 1.361-.075 1.16-1.066 1.431-2.026 1.323l-.498 1.78v1.537a1.6 1.6 0 0 0-.035.327v18.251c0 .859.692 1.55 1.55 1.55.86 0 1.55-.691 1.55-1.55v-13.756c.009-.533 1.249-.479 1.25 0v13.756c0 .858.692 1.55 1.55 1.55.86 0 1.55-.692 1.55-1.55v-15.64c.211.182.486.293.788.293a1.2 1.2 0 0 0 1.202-1.202v-10.713c-.001-.3.01-.492 0-.785a2.25 2.25 0 0 0-2.257-2.256zm-4.378 6.715.829.164-.985 4.203a1.39 1.39 0 0 0 1.635 1.806l-1.024 4.822-1.345-2.826h-.002c-.285-.593-.3-.762-.204-1.421v-.004z" style="display:inline;fill:#000;stroke-width:3.394;stroke-linecap:round" transform="translate(-125.153 -236.033)"/>`;
const _DefaultDesc = `Priority access for injured people`;
const _DefaultTitle = "Priority access for injured people";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Ac011PriorityAccessForInjuredPeople = defineComponent({
  name: "Ac011PriorityAccessForInjuredPeople",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-ac-011-priority-access-for-injured-people`;
      const titleId = `pi-title-ac-011-priority-access-for-injured-people`;
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
