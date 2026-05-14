// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M104.222 162.49h52.917v52.917h-52.917z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-104.222 -162.49)"/><path d="M130.758 169.63a2.77 2.77 0 0 0-2.77 2.77 2.77 2.77 0 0 0 2.77 2.772 2.77 2.77 0 0 0 2.772-2.771 2.77 2.77 0 0 0-2.772-2.771m-3.594 6.784a2.25 2.25 0 0 0-2.257 2.257c-.01.292.001.484 0 .784v10.713a1.2 1.2 0 0 0 1.202 1.202c.302 0 .577-.11.788-.292v15.639c0 .859.69 1.55 1.55 1.55l.056-.003.06.003c.86 0 1.55-.691 1.55-1.55v-13.756c.004-.249.277-.368.567-.377.29.009.563.128.567.377v13.756c0 .859.69 1.55 1.55 1.55l.06-.003.057.003c.858 0 1.55-.691 1.55-1.55v-15.64c.21.183.485.293.787.293a1.2 1.2 0 0 0 1.202-1.202v-10.713c-.001-.3.01-.492 0-.784a2.25 2.25 0 0 0-2.257-2.257h-5.907zm1.483 2.068c.746-.012 1.506.335 1.965 1.166l.068.035.068-.035c1.145-2.073 4.157-1.128 4.17.855-.047 2.774-2.263 4.947-4.025 5.75-.026.008-.078.037-.213.037-.136 0-.187-.03-.213-.036-1.762-.804-3.978-2.977-4.025-5.75.007-1.189 1.091-2.004 2.205-2.022m2.475 1.967v1.363h-1.362v.925h1.362v1.363h.925v-1.363h1.363v-.925h-1.363v-1.363z" style="display:inline;fill:#000;stroke-width:3.394;stroke-linecap:round" transform="translate(-104.222 -162.49)"/>`;
const _DefaultDesc = `Priority access for people with internal medical conditions`;
const _DefaultTitle = 'Priority access for people with internal medical conditions';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ac012PriorityAccessForPeopleWithInternalMedicalConditions = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-ac-012-priority-access-for-people-with-internal-medical-conditions`;
    const titleId = `pi-title-ac-012-priority-access-for-people-with-internal-medical-conditions`;
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
Ac012PriorityAccessForPeopleWithInternalMedicalConditions.displayName = 'Ac012PriorityAccessForPeopleWithInternalMedicalConditions';
