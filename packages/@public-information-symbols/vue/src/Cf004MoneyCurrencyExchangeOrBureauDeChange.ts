// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M78.163 129.097h52.917v52.917H78.163z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-78.163 -129.097)"/><path d="m117.85 136.238-32.395 11.486 5.937 16.744 4.91-1.74a5.065 5.065 0 1 0 9.539-3.383l17.947-6.363zm-.898 1.778 5.017 14.15-16.818 5.964a5 5 0 0 0-.987-.974l16.395-5.813-4.183-11.799-20.557 7.29 3.433 9.68a5.065 5.065 0 0 0-3.183 4.7l.005.134-3.784 1.342-5.018-14.15zm-10.204 5.976.308.87c.749-.225 1.65-.427 2.087-.345l.042 1.503c-.61-.04-.999.09-1.634.238l.732 2.064q1.299.023 1.992.404.693.374.97 1.158.321.904-.036 1.656-.36.747-1.348 1.232l.419 1.181-.764.271-.35-.986c-.709.247-1.931.31-2.658.195v-1.287c.744-.01 1.503.062 2.224-.133l-.782-2.205q-1.392-.04-2.037-.43-.641-.399-.924-1.194a2.13 2.13 0 0 1 .065-1.66c.245-.54.62-1.109 1.235-1.4l-.305-.861zm.047 2.559c-.615.51-.227 1.51.551 1.554zm2.029 3.296.678 1.914c.517-.964.323-1.816-.678-1.914m-7.528 7.824q.49 0 .915.104c.167.041.133.03.285.096l-.226.873c-.026-.007-.05.004-.132-.013-1.246-.27-2.606.19-2.945 1.355h3.258v.662h-3.383q-.045.468-.006.874h3.389v.662h-3.298q.41 1.73 1.99 1.73.744 0 1.546-.412v.724a3.8 3.8 0 0 1-1.603.35q-2.427 0-2.894-2.392h-.524v-.662h.45a2.4 2.4 0 0 1-.022-.364q0-.226.034-.51h-.462v-.662h.581q.29-1.134 1.092-1.772.807-.643 1.955-.643m15.717.015a5.475 5.475 0 1 0 0 10.95 5.475 5.475 0 0 0 0-10.95m.848 1.85c.41 0 .821.063 1.184.177v.899c-1.2-.363-2.324-.095-2.341 1.022v.956h1.464v.796h-1.464v2.073h1.947v.881h-4.448v-.88h1.194v-2.074h-.714v-.796h.698v-1.002c.006-1.483 1.246-2.053 2.48-2.053m-10.81 6.484a4.426 4.426 0 1 0 0 8.852 4.426 4.426 0 0 0 0-8.852m-2.129 1.915h.99l.992 1.899c.084.143.154.408.21.538h.018c.04-.103.113-.375.22-.56l.99-1.877h.947l-1.49 2.552h.95V171h-1.276v.636h1.276v.514h-1.276v1.082h-.864v-1.082h-1.145v-.514h1.145V171h-1.145v-.514h.943z" style="display:inline;fill:#000;stroke-width:2.4;stroke-linecap:round" transform="translate(-78.163 -129.097)"/>`;
const _DefaultDesc = `Money/currency exchange or Bureau-de-change`;
const _DefaultTitle = 'Money/currency exchange or Bureau-de-change';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Cf004MoneyCurrencyExchangeOrBureauDeChange = defineComponent({
  name: 'Cf004MoneyCurrencyExchangeOrBureauDeChange',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-cf-004-money-currency-exchange-or-bureau-de-change`;
      const titleId = `pi-title-cf-004-money-currency-exchange-or-bureau-de-change`;
      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;
      const resolvedTitle = props.title ?? _DefaultTitle;
      const resolvedDesc = props.description ?? _DefaultDesc;
      const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
      return h('span', {
        ...attrs,
        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },
        innerHTML: svgHtml,
      });
    };
  },
});
