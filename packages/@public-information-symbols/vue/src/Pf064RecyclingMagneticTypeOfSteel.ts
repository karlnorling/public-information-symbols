// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M109.313 74.804h52.917v52.917h-52.917z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-109.313 -74.804)"/><path d="m147.892 82.118-2.868.012c-.772-.023-1.113.145-1.641 1.053l-1.228 2.211 2.517 1.486 2.12-3.601c.406-.68.535-.804 1.1-1.16m.395.332c-.209.009-.425.09-.646.258-.442.413-.97 1.317-1.01 1.56l.715 1.244-.95.45 2.931.041 1.481-2.59-.906.641-.246-.516c-.353-.66-.835-1.11-1.369-1.088m2.887 3.695-2.556 1.471 1.54 2.538 1.614-.012c.36-.016.998-.555.869-1.388zm-8.177.854-2.89.046.743.385-.265.555c-.623.948-.837 1.143-.338 2.103.355.683.93 1.66 1.603 2.71-.206-.472-.07-1.025.284-1.551l1.372-2.31.845.523zm5.433 2.486-1.38 2.58 1.38 2.51.006-1.042h.635c1.326.082 1.468.033 2.129-1.015.416-.66.918-1.464 1.483-2.573-.311.41-1.023.514-1.514.57l-2.717.007zm-5.43 1.05-.602.92c-.284.494-.234 1.805.595 2.054l3.045-.002-.055-2.949zm-16.448 1.781a7.6 7.6 0 0 0-5.115 1.881c-3.11 2.73-3.505 7.586-.682 10.635l9.094 9.818 3.326-2.916-9.115-9.843c-1.19-1.285-1.035-3.205.295-4.372s3.25-1.069 4.375.276l8.605 10.288 3.324-2.914-8.59-10.27c-1.415-1.694-3.458-2.557-5.517-2.583m11.75 10.346 2.078 2.486-3.023 2.65-2.085-2.493zm2.706 3.094-2.823 2.477.342.391 2.824-2.477zm.877 1.012-2.823 2.477.343.391 2.823-2.477zm.876.988-2.824 2.477.343.39 2.823-2.476zm2.096.415-12.565 11.024.915 1.044 12.565-11.024zm-14.188 1.15 2.22 2.397-3.024 2.653-2.228-2.405zm2.675 3.16-2.824 2.478.344.39 2.823-2.476zm.877 1.012-2.823 2.478.343.391 2.823-2.477zm.875.988-2.823 2.477.343.392 2.823-2.478z" style="color:#000;fill:#000" transform="translate(-109.313 -74.804)"/>`;
const _DefaultDesc = `Recycling – magnetic type of steel`;
const _DefaultTitle = "Recycling – magnetic type of steel";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf064RecyclingMagneticTypeOfSteel = defineComponent({
  name: "Pf064RecyclingMagneticTypeOfSteel",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-064-recycling-magnetic-type-of-steel`;
      const titleId = `pi-title-pf-064-recycling-magnetic-type-of-steel`;
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
