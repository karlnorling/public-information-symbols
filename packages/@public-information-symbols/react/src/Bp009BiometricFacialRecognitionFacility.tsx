// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M75.409 171.771h52.917v52.917H75.409z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-75.41 -171.77)"/><path d="M83.242 178.747a.3.3 0 0 0-.362.22.3.3 0 0 0 .221.362c2.978.728 4.561 1.781 7.08 3.477 3.586 2.88 5.08 10.001 6.596 16.645.158.795.31 1.656.185 2.242-.062.293-.177.507-.382.664-.206.156-.526.265-1.034.265h-1.605l.014.002c-.07-.003-.124-.009-.188-.008s-.157.002-.261.078a.42.42 0 0 0-.157.272c-.011.073-.01.131-.01.203v3.48c-.01 1.824-1.944 4.229-5.2 4.369-.146-.006-.278-.027-.442.086a.47.47 0 0 0-.17.245.7.7 0 0 0-.02.22v2.678c.024.548-.169 1.262-.527 1.809s-.85.915-1.457.915h-2.502a.3.3 0 0 0-.299.301.3.3 0 0 0 .299.3h2.502c.852 0 1.527-.527 1.96-1.187.432-.66.654-1.464.624-2.165v-2.606c.02-.002-.008.003.023.004h.024c3.546-.148 5.775-2.734 5.785-4.969v-3.425h1.607c.596 0 1.06-.134 1.397-.39.337-.257.523-.625.605-1.016.166-.782-.024-1.686-.183-2.484v-.004l-.002-.004c-1.515-6.638-2.915-13.866-6.81-16.99l-.01-.008-.01-.008c-2.532-1.705-4.222-2.823-7.291-3.573m32.287 9.517v.46c-.142 0-.277.029-.401.078l-.475-.072-1.01 2.317h.792v2.056h-.562v.799h-2.631v.992h-1.643v1.254h-1.144v3.88h1.144v1.255h1.643v.992h2.63v.8h.563v3.286c0 .6.493 1.094 1.094 1.094h4.39c.602 0 1.095-.493 1.095-1.094v-16.545c0-.601-.493-1.092-1.094-1.092h-2.274v-.46zm0 .96h4.39c.333 0 .594.26.594.592v16.545a.59.59 0 0 1-.593.593h-4.39a.59.59 0 0 1-.595-.593v-16.545c0-.333.261-.592.594-.592m-25.615 3.83a1.575 1.575 0 0 0-1.575 1.575 1.575 1.575 0 0 0 1.575 1.575 1.575 1.575 0 0 0 1.574-1.575 1.575 1.575 0 0 0-1.574-1.574m21.828 1.348h2.13v7.373h-2.13v-.493h.002v-6.388h-.002zm-1.643.992h1.143v5.389h-1.143zm-1.144 1.254h.639v2.88h-.64zm-.084 15.112v2.661h3.914a2.01 2.01 0 0 1 1.982-1.688c.976 0 1.793.702 1.972 1.626h3.925v-2.599zm5.896 1.573c-.78 0-1.408.625-1.408 1.406s.627 1.408 1.408 1.408 1.409-.627 1.409-1.408-.628-1.406-1.409-1.406m1.982 1.725a2.014 2.014 0 0 1-1.982 1.69 2.015 2.015 0 0 1-1.971-1.627h-3.925v2.599h11.793v-2.662z" style="color:#000;fill:#000;stroke-linecap:round" transform="translate(-75.41 -171.77)"/>`;
const _DefaultDesc = `Biometric facial recognition facility`;
const _DefaultTitle = 'Biometric facial recognition facility';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Bp009BiometricFacialRecognitionFacility = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-bp-009-biometric-facial-recognition-facility`;
    const titleId = `pi-title-bp-009-biometric-facial-recognition-facility`;
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
Bp009BiometricFacialRecognitionFacility.displayName = 'Bp009BiometricFacialRecognitionFacility';
