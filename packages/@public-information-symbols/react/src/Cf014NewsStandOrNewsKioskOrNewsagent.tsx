// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M87.09 142.09h52.917v52.917H87.09z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-87.09 -142.09)"/><path d="m109.262 151.396-14.149 3.175v25.834h8.355v-.001h.22l-.03-.224-.006-.04-.025-.029-1.604-1.832v-.002l-.002-.002c-.105-.134-.201-.489-.175-.814.026-.327.152-.603.412-.693l13.482-4.008.014-.002 5.978-1.933 8.812 2.313c-1.598.61-20.1 7.815-20.1 7.815l-6.922-3.952-.888.023 7.202 5.45 21.329-8.536-.866-.141-.055-.155 1.248-.528-9.767-2.565-5.943 1.92v-17.834h-6.52zm-13.156 4.17h18.683c.096 0 .172.077.172.172v16.978l-3.987 1.185h-5.236v.19h4.596l-3.867 1.149h-.729v.19h.09l-3.654 1.086-.002.002c-.392.135-.559.536-.59.922-.03.385.052.776.237 1.006l.002.002 1.052 1.203h-6.767a.17.17 0 0 1-.172-.173v-23.74c0-.095.076-.172.172-.172m2.042 5.014v1.24h14.656v-1.24zm0 2.9v.339h6.735v-.339zm7.59 0v.339h7.066v-.339zm-7.59 1.233v.34h6.735v-.34zm7.59 0v.34h7.066v-.34zm-7.59 1.459v.19h6.735v-.19zm7.59 0v.19h7.066v-.19zm-7.59 1.147v.19h6.735v-.19Zm7.59 0v.19h7.066v-.19Zm-7.59 1.257v.19h6.735v-.19zm7.59 0v.19h7.066v-.19zm-7.59 1.422v.19h6.735v-.19zm7.59 0v.19h7.066v-.19zm-7.59 1.34v.19h6.735v-.19zm7.59 0v.19h7.066v-.19zm-7.59 1.256v.19h6.735v-.19zm7.59 0v.19h7.066v-.19zm-7.59 1.307v.19h6.735v-.19zm32.993.714-21.444 9.471-7.32-6.407 6.899 8.021 22.708-10.71-.725-.117zm-32.993.625v.19h6.735v-.19z" style="display:inline;fill:#1f0000;stroke-width:1.104;paint-order:fill markers stroke" transform="translate(-87.09 -142.09)"/>`;
const _DefaultDesc = `News stand or News kiosk or Newsagent`;
const _DefaultTitle = 'News stand or News kiosk or Newsagent';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Cf014NewsStandOrNewsKioskOrNewsagent = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-cf-014-news-stand-or-news-kiosk-or-newsagent`;
    const titleId = `pi-title-cf-014-news-stand-or-news-kiosk-or-newsagent`;
    const _w = width !== undefined ? _h(String(width)) : _DefaultWidth;
    const _ht = height !== undefined ? _h(String(height)) : _DefaultHeight;
    const resolvedTitle = title ?? _DefaultTitle;
    const resolvedDesc = description ?? _DefaultDesc;
    const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
    return (
      <span
        aria-label={ariaLabel}
        className={className}
        dangerouslySetInnerHTML={{ __html: svgHtml }}
        style={{ display: 'contents', ...style }}
      />
    );
  },
);
Cf014NewsStandOrNewsKioskOrNewsagent.displayName = 'Cf014NewsStandOrNewsKioskOrNewsagent';
