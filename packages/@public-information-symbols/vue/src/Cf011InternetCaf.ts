// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M170.832 91.348h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-170.832 -91.348)"/><path d="M186.471 106.502v14.858c.006.557 1.093 2.809 3.504 2.818h14.238c2.298.003 3.496-1.898 3.504-2.817v-4.189h1.431a5.343 5.343 0 0 0 5.336-5.334 5.344 5.344 0 0 0-5.336-5.335h-1.43zm21.246 1.8h1.431a3.51 3.51 0 0 1 3.535 3.536 3.51 3.51 0 0 1-3.535 3.536h-1.43v-2.108zm-9.657.894q1.52 0 2.7.59 1.183.591 1.803 1.682.627 1.086.627 2.376a4.47 4.47 0 0 1-.946 2.78q-1.188 1.566-3.045 1.567-.5 0-.753-.175a.85.85 0 0 1-.338-.513q-.71.687-1.64.688-1 0-1.664-.688-.657-.693-.657-1.838 0-1.417.796-2.587.965-1.422 2.472-1.422 1.073-.001 1.585.82l.151-.67h1.592l-.91 4.323q-.085.41-.085.53 0 .15.066.23a.23.23 0 0 0 .17.072q.288 0 .747-.35.615-.457.994-1.23.38-.771.38-1.597 0-1.484-1.073-2.478-1.073-1.002-2.996-1.001c-1.09 0-2.39.207-3.15.653a4.23 4.23 0 0 0-1.712 1.875 5.8 5.8 0 0 0-.573 2.514q0 1.272.639 2.315a3.74 3.74 0 0 0 1.803 1.52q1.164.482 2.659.482 1.44 0 2.478-.404c.56-.193.903-.544 1.204-1.044h1.417c-.402.816-.686 1.3-1.518 1.761-.953.531-2.458.796-3.829.796-1.326 0-2.128-.225-3.093-.675q-1.446-.669-2.152-1.977a5.95 5.95 0 0 1-.705-2.858q0-1.694.802-3.153.802-1.465 2.194-2.194c.929-.49 2.366-.72 3.56-.72m-.507 3.545q-.518 0-.958.403-.441.398-.663 1.14t-.223 1.314q0 .765.307 1.127a.98.98 0 0 0 .772.362 1.3 1.3 0 0 0 .645-.168 1.6 1.6 0 0 0 .452-.38q.32-.368.548-1.073.236-.706.236-1.315 0-.681-.32-1.043a1 1 0 0 0-.796-.367M179.5 125.69c.027 1.034 2.756 3.45 5.614 3.42h24.354c2.858.03 5.588-2.386 5.614-3.42h-21.986z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-170.832 -91.348)"/>`;
const _DefaultDesc = `Internet café`;
const _DefaultTitle = "Internet café";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf011InternetCaf = defineComponent({
  name: "Cf011InternetCaf",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-011-internet-caf`;
      const titleId = `pi-title-cf-011-internet-caf`;
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
