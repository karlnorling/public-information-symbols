// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M90.208 73.345h52.917v52.917H90.208z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-90.208 -73.345)"/><path d="M110.856 80.565v10.767c-.188.08-.356.212-.48.394l-1.853 2.703-1.416-2.858a.1.1 0 0 0-.027-.035 1.76 1.76 0 0 0-1.513-.856l-7.782-.001a1.76 1.76 0 0 0-1.762 1.686v.003l-.002.059v11.224c0 .632.508 1.14 1.14 1.14h.092c.632 0 1.14-.508 1.14-1.14v-8.88c-.005-.423.66-.395.66-.004v22.894c0 .703.566 1.27 1.27 1.27h.128c.704 0 1.27-.567 1.27-1.27v-12.887c-.01-.347.822-.352.817.01v12.877c0 .703.566 1.27 1.269 1.27h.129c.703 0 1.269-.567 1.269-1.27V94.77c-.006-.351.467-.373.595-.064l1.15 2.902c.522 1.32 1.753 1.26 2.512-.067l2.906-4.45a1.11 1.11 0 0 0-.289-1.543l-.16-.11a1.1 1.1 0 0 0-.405-.172v-5.71l6.225-2.409-6.496-2.575zm-8.711 4.302a2.474 2.474 0 0 0-2.474 2.473 2.474 2.474 0 0 0 2.474 2.474 2.474 2.474 0 0 0 2.474-2.474 2.474 2.474 0 0 0-2.474-2.473m30.287.122A2.433 2.433 0 0 0 130 87.422a2.433 2.433 0 0 0 2.433 2.434 2.433 2.433 0 0 0 2.434-2.434 2.433 2.433 0 0 0-2.434-2.433m-11.168.018a2.433 2.433 0 0 0-2.434 2.433 2.433 2.433 0 0 0 2.434 2.434 2.433 2.433 0 0 0 2.433-2.434 2.433 2.433 0 0 0-2.433-2.433m10.766 5.572a2.443 2.443 0 0 0-2.449 2.449v2.3l-3.905 4.81a1.346 1.346 0 0 0 .197 1.897c.58.472 1.427.384 1.898-.196l1.81-2.229v18.016c0 .774.624 1.398 1.399 1.398.774 0 1.398-.624 1.398-1.398v-5.676l2.26 5.025a1.395 1.395 0 0 0 1.848.701 1.395 1.395 0 0 0 .702-1.848l-3.818-8.635 1.733-3.486v-10.68a2.443 2.443 0 0 0-2.449-2.448zm-11.168.017a2.443 2.443 0 0 0-2.45 2.45v2.3l-3.905 4.809a1.346 1.346 0 0 0 .197 1.898c.58.471 1.427.384 1.898-.196l1.81-2.23v18.016c0 .775.624 1.398 1.399 1.398.774 0 1.398-.623 1.398-1.398v-5.675l2.26 5.025a1.395 1.395 0 0 0 1.849.7 1.395 1.395 0 0 0 .7-1.848l-3.817-8.635 1.733-3.485v-10.68a2.443 2.443 0 0 0-2.449-2.449z" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:.499999" transform="translate(-90.208 -73.345)"/>`;
const _DefaultDesc = `Tour group meeting point`;
const _DefaultTitle = 'Tour group meeting point';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf043TourGroupMeetingPoint = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-043-tour-group-meeting-point`;
    const titleId = `pi-title-tf-043-tour-group-meeting-point`;
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
Tf043TourGroupMeetingPoint.displayName = 'Tf043TourGroupMeetingPoint';
