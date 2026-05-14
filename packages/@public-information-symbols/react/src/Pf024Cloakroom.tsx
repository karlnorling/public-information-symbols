// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M71.122 157.703h52.917v52.917H71.122z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-71.122 -157.703)"/><path d="M94.965 167.543c-.692.607-1.132 1.588-1.11 2.85h.002v.005a.6.6 0 0 0 1.2 0l-.01-.517c-.008-.499.295-1.071.711-1.436s.997-.529 1.578-.5c.808.04 1.506.597 1.66 1.258.155.66-.113 1.584-1.765 2.545l-.006.002-.006.004c-.524.321-.638.918-.631 1.275.017.86.052 1.57.074 1.979-1.011.277-6.993 1.92-12.91 3.58-1.569.44-2.439 1.616-2.369 2.77.07 1.156 1.145 2.137 2.668 2.108 3.443.046 8.81.048 13.447.037 4.637.011 10.005.01 13.448-.036 1.523.028 2.6-.953 2.67-2.108s-.803-2.332-2.372-2.772c-6.243-1.752-12.952-3.59-13.38-3.709-.018-.282-.056-.824-.077-1.87-.003-.172-.004-.191.06-.231 1.909-1.115 2.611-2.597 2.32-3.848-.294-1.253-1.573-2.12-2.704-2.157-1.13-.037-1.849.201-2.498.77m2.532 8.478c.575.158 7.256 1.993 13.423 3.723 1.17.328 1.528 1.028 1.496 1.543-.03.516-.386 1-1.447.98h-.02c-1.237.017-2.774.026-13.458.027-10.684 0-12.196-.01-13.442-.027h-.02c-1.061.02-1.418-.465-1.449-.98-.031-.516.327-1.215 1.496-1.543a2802 2802 0 0 1 13.421-3.723m-11.331 14.875v.02a3 3 0 0 0-.252.03c-.568.095-1.055.352-1.474.61-.275.17-.53.408-.75.616s-.386.385-.386.385l-.152.16v1.53h-.86c-1.41 0-2.546 2.487-2.546 5.577 0 .615.046 1.206.129 1.758h13.078c.083-.552.13-1.143.13-1.758 0-3.09-1.136-5.577-2.547-5.577h-.967v-1.53l-.152-.16s-.168-.177-.387-.385-.477-.445-.752-.615c-.42-.259-.905-.516-1.473-.61a3 3 0 0 0-.25-.031v-.02s-.081.001-.195.006c-.113-.006-.194-.006-.194-.006m.194 1.113c.112.007.229.016.264.022.341.057.712.237 1.078.462.116.072.373.289.57.476.112.106.135.131.198.195v1.083h-4.22v-1.083c.064-.064.086-.09.197-.195a5 5 0 0 1 .572-.476c.365-.225.735-.405 1.077-.462a6 6 0 0 1 .264-.022m17.253 1.459q-.154-.001-.33.043c-1.595.5-1.228 3.136-1.227 4.508h9.62c0-1.372.367-4.007-1.228-4.509-1.206-.303-1.508 1.092-3.582 1.19-1.872-.089-2.301-1.233-3.253-1.232m-1.592 5.847v1.092h-3.184a.52.52 0 1 0 0 1.042h16.057a.52.52 0 1 0 0-1.042h-3.183v-1.092z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.935721;stroke-opacity:1" transform="translate(-71.122 -157.703)"/>`;
const _DefaultDesc = `Cloakroom`;
const _DefaultTitle = 'Cloakroom';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf024Cloakroom = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-024-cloakroom`;
    const titleId = `pi-title-pf-024-cloakroom`;
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
Pf024Cloakroom.displayName = 'Pf024Cloakroom';
