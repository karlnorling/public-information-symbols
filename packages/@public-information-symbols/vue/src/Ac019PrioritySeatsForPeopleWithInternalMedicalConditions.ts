// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M311.151 82.981h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-311.151 -82.98)"/><path d="M333.797 93.857a2.829 2.829 0 1 0 0 5.658 2.829 2.829 0 0 0 0-5.658m.496 6.501q-.09 0-.182.007a3.5 3.5 0 0 0-.703.055 3.46 3.46 0 0 0-2.801 4.03l1.438 7.998c.353 1.902 1.415 3.03 3.562 3.014h6.075l.6 7.938c.072.967.9 1.687 1.856 1.616a1.737 1.737 0 0 0 1.598-1.872l-.803-10.799a1.736 1.736 0 0 0-1.85-1.616 1.8 1.8 0 0 0-.418-.05h-4.168c-.37-3.296-.439-10.352-4.204-10.32zm-1.342 3.446c.496-.008 1 .227 1.305.79l.045.024.045-.023c.76-1.406 2.76-.765 2.77.579-.032 1.88-1.504 3.353-2.674 3.897-.017.005-.05.025-.14.025s-.125-.02-.142-.025c-1.17-.544-2.641-2.018-2.672-3.897.005-.805.724-1.358 1.464-1.37m1.002 1.515v.84h-.84v.7h.84v.84h.7v-.84h.84v-.7h-.84v-.84zm-4.475 11.291v1.704h10.25v-1.704z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:1.2;stroke-linecap:round" transform="translate(-311.151 -82.98)"/>`;
const _DefaultDesc = `Priority seats for people with internal medical conditions`;
const _DefaultTitle = "Priority seats for people with internal medical conditions";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Ac019PrioritySeatsForPeopleWithInternalMedicalConditions = defineComponent({
  name: "Ac019PrioritySeatsForPeopleWithInternalMedicalConditions",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-ac-019-priority-seats-for-people-with-internal-medical-conditions`;
      const titleId = `pi-title-ac-019-priority-seats-for-people-with-internal-medical-conditions`;
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
