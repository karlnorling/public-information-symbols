// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M129.441 118.084h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-129.44 -118.084)"/><path d="m169.572 125.739-3.261 5.079h1.505l-2.54 3.889h1.38l-2.604 3.952h4.234v3.481h2.571v-3.481h4.235l-2.604-3.952h1.38l-2.54-3.89h1.505zm-19.774 8.802a2.799 2.799 0 1 0 0 5.597 2.799 2.799 0 0 0 0-5.597m-3.554 5.197a2.64 2.64 0 0 0-2.174 1.206l-5.783 8.897a2.64 2.64 0 0 0 .777 3.661c.653.45 1.217.78 2.006.767l7.424.08.297 1.506h-11.267a.815.815 0 0 0-.817.817c0 .452.365.817.817.817h11.59l.856 4.335a1.35 1.35 0 0 0 1.59 1.066 1.347 1.347 0 0 0 1.065-1.59l-.777-3.81h4.665l-1.925 5.352 1.403.504 2.106-5.857h10.976l2.107 5.857 1.403-.504-1.925-5.353h2.485a.816.816 0 0 0 .818-.817.815.815 0 0 0-.818-.817h-3.073l-2.077-5.774h4.907a.816.816 0 0 0 .818-.817.816.816 0 0 0-.818-.818h-24.15a.816.816 0 0 0-.818.818c0 .453.365.817.818.817h10.428l-2.076 5.774h-5.586l-.623-3.053c-.189-.926-1.017-1.25-1.925-1.255l-5.012.074 4.698-7.208 1.933 2.175c.48.504.965.528 1.843.534h5.314c.548 0 .99-.442.99-.99a.99.99 0 0 0-.99-.99h-5.192c-1.265-1.113-3.332-3.825-4.46-4.741l-.36-.234a2.64 2.64 0 0 0-1.487-.43m14.518 10.343h5.647l2.076 5.774h-9.8z" style="fill:#000;stroke-width:1.7" transform="translate(-129.44 -118.084)"/>`;
const _DefaultDesc = `Picnic area`;
const _DefaultTitle = "Picnic area";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tc004PicnicArea = defineComponent({
  name: "Tc004PicnicArea",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tc-004-picnic-area`;
      const titleId = `pi-title-tc-004-picnic-area`;
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
