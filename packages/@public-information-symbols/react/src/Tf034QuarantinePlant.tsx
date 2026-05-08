// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M208.939 197.238h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-208.939 -197.238)"/><path d="m240.56 209.863 1.11 2.418h6.632l.228-1.17zm1.303 3.341-1.272 1.38h.995a3.363 3.363 0 0 0 3.338 3.748c1.715 0 3.365-1.498 3.363-3.362v-1.765zm-17.15 5.918q-.016.001-.025.01v-.001c-1.466.988-1.894 3.342-.214 4.741l-.03 1.052c-.757-.776-1.351-1.17-2.061-1.16-.393.004-.82.133-1.332.387l3.36 1.953-.045 1.638c-1.046-1.092-1.848-1.647-2.813-1.634-.516.007-1.078.175-1.749.51l4.52 2.628-.043 1.833c-1.337-1.406-2.405-2.386-3.674-2.368-.721.01-1.508.256-2.447.744l6.057 3.675-.018.824h1.026l-.018-.824 6.057-3.675c-.94-.488-1.726-.734-2.447-.744-1.269-.018-2.337.961-3.674 2.368l-.044-1.833 4.52-2.629c-.67-.334-1.232-.502-1.748-.51-.965-.012-1.767.543-2.813 1.635l-.046-1.638 3.36-1.953c-.51-.254-.938-.383-1.33-.388-.71-.01-1.305.385-2.062 1.16l-.03-1.05c1.678-1.4 1.253-3.75-.211-4.74q-.011-.009-.027-.01zm15.455.1c-.976.021-1.514.751-2.1 1.801l-5.22 12.258h3.572l3.477-7.454v7.535h11.675v-12.278c.008-.88-1.062-1.845-1.981-1.831h-2.61l-1.43 3.739h-.39l-1.662-3.77zm-21.472 15.509c-.775 0-1.4.624-1.4 1.4s.625 1.4 1.4 1.4H252.1c.775 0 1.4-.625 1.4-1.4 0-.776-.625-1.4-1.4-1.4z" style="fill:#000;stroke-width:3.94633" transform="translate(-208.939 -197.238)"/>`;
const _DefaultDesc = `Quarantine, plant`;
const _DefaultTitle = "Quarantine, plant";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf034QuarantinePlant = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-034-quarantine-plant`;
    const titleId = `pi-title-tf-034-quarantine-plant`;
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
        style={{ display: "contents", ...style }}
      />
    );
  },
);
Tf034QuarantinePlant.displayName = "Tf034QuarantinePlant";
