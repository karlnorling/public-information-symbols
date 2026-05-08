// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M132 72.457h52.917v52.917H132z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-132 -72.457)"/><path d="M149.302 84.938v4.891h1.201v-3.691h25.553v25.552h-25.553v-16.9h-1.201v18.102h27.955V84.938Zm-6.579 4.295a3.064 3.064 0 0 0-3.064 3.063 3.064 3.064 0 0 0 3.064 3.064 3.06 3.06 0 0 0 2.925-2.152h.373v.246a.548.548 0 1 0 1.099 0v-.246h.655l.725-.818 1.099.818.701-.795.935.842.796-.795.959.795.771-.701-.865-1.357h-5.776v-.082a.549.549 0 1 0-1.1 0v.082h-.437a3.06 3.06 0 0 0-2.86-1.964m-1.286 2.128a.935.935 0 0 1 .935.935.935.935 0 0 1-.935.936.935.935 0 0 1-.936-.936.935.935 0 0 1 .936-.935m20.771 1.833c-.581 0-1.049.468-1.049 1.05v1.343h-4.266v12.771h13.083v-12.77h-4.266v-1.345c0-.58-.468-1.049-1.049-1.049zm.46.818h1.533c.363 0 .655.293.655.656v.92h-2.843v-.92c0-.363.292-.656.655-.656m-7.303 1.575c-.78 0-1.408.628-1.408 1.408v9.955c0 .78.628 1.408 1.408 1.408h.248v-12.77Zm15.891 0v12.771h.248c.78 0 1.407-.629 1.407-1.408v-9.955c0-.78-.628-1.408-1.407-1.408z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1.1335;stroke-opacity:1" transform="translate(-132 -72.457)"/></g>`;
const _DefaultDesc = `Baggage lockers or coin lockers`;
const _DefaultTitle = "Baggage lockers or coin lockers";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf013BaggageLockersOrCoinLockers = defineComponent({
  name: "Pf013BaggageLockersOrCoinLockers",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-013-baggage-lockers-or-coin-lockers`;
      const titleId = `pi-title-pf-013-baggage-lockers-or-coin-lockers`;
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
