// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from "vue";
import { symbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M219.064 94.909h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-219.064 -94.909)"/><path d="M228.771 111.044c.28.668.258 1.159.11 1.619-.178.548-1.042 1.027-1.536 1.558-1.944 1.918-2.016 4.266.503 5.554.68.2 1.341.176 1.928.136.586-.04 1.107-.092 1.483-.047.366.044.56.132.766.413.367.634.457 1.086.436 1.516-.021.44-.171.89-.332 1.444-.32 1.108-.541 2.64.76 4.723l.002.003.002.003c.142.222.429.64.666.984l1.08-.725c-.242-.354-.54-.79-.65-.961-1.132-1.815-.908-2.645-.613-3.665.148-.512.35-1.07.383-1.743.033-.674-.132-1.44-.625-2.274l-.013-.024-.017-.022c-.432-.61-1.089-.892-1.69-.963-.603-.072-1.183.004-1.728.041-2.79-.136-2.587-2.17-1.39-3.507.528-.568 1.54-1.178 1.821-2.044.238-.736.217-1.607-.168-2.542zm4.685-2.05c.373.845.372 1.433.224 1.93-.168.563-.94.941-1.44 1.428-1.221 1.03-1.986 2.277-1.179 3.653.408.981 1.03 1.667 1.806 1.856.744.15 1.418-.024 1.987-.188s1.057-.312 1.395-.303c.335.01.554.08.9.572.525.83.492 1.274.268 1.766-.227.496-.771 1.036-1.37 1.633-.598.598-1.258 1.268-1.55 2.203s-.114 2.068.723 3.298l.001.002c.143.223.326.475.473.674l1.082-.726a15 15 0 0 1-.47-.663l-.007-.008-.006-.008c-.694-1.018-.728-1.633-.557-2.18s.652-1.092 1.232-1.67c.579-.58 1.25-1.179 1.63-2.015.382-.836.343-1.918-.363-3.023l-.006-.012-.007-.01c-.527-.755-1.266-1.113-1.942-1.132s-1.257.2-1.786.352-.984.243-1.374.165c-1.312-1.166-1.099-2.197.026-3.306.551-.538 1.508-1.082 1.777-1.987.238-.798.176-1.75-.29-2.824zm4.688 17.736.848 1.263 22.466-15.072 1.585 2.362-22.467 15.072.848 1.264 23.702-15.901-3.28-4.889zm-4.1 3.03 3.021 4.504 3.68-2.47-3.021-4.503z" style="stroke-width:1.2" transform="translate(-219.064 -94.909)"/></g>`;
const _DefaultDesc = `Smoking area or smoking allowed`;
const _DefaultTitle = "Smoking area or smoking allowed";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf015SmokingAreaOrSmokingAllowed = defineComponent({
  name: "Pf015SmokingAreaOrSmokingAllowed",
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-015-smoking-area-or-smoking-allowed`;
      const titleId = `pi-title-pf-015-smoking-area-or-smoking-allowed`;
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
