// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M201.712 45.468h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-201.712 -45.468)"/><path d="m233.333 58.093 1.11 2.419h6.631l.229-1.171zm-12.483 1.155q-.055 0-.112.007c-.59.016-1.33.19-1.588.823-.302.677-.652 1.206-1.392 1.543l-6.495 3.544-.076.243.137.122.624-.243.852-.016c1.091.16 2.165.359 3.224.685l.092-.006.037.158.091.738-.015 1.056.175.115.692-.115-.494-.083-.03-1.59s.212-.176.38-.323l.469-.031.831 2.035 1.011.008-.03-.129-.555-.137s-.616-1.414-.608-1.468a5 5 0 0 1 .228-.423 4.1 4.1 0 0 0 1.558-.642c.97-.94 1.385-1.742 1.263-3.224.237-.519.42-.956.943-1.247l1.034-.259-.882-.06.76-.244-.851-.09c-.31-.354-.723-.753-1.273-.747m13.786 2.187-1.272 1.38h.995a3.363 3.363 0 0 0 3.338 3.748c1.715 0 3.365-1.498 3.362-3.363v-1.765zm-9.544 5.823-2.086 1.979-1.376 1.548 2.28 2.366c.457-.547.75-1.128.99-1.785h1.806c.355-.004.363-.266.559-.495.165-.046.172-.113.182-.246.017-.15-.013-.137-.14-.205l-1.14-.581-.013-.393c.031-.236-.165-.36-.287-.51-.267-.142-.538-.26-.753-.474zm7.849.195c-.976.021-1.514.75-2.101 1.8l-5.219 12.258h3.571l3.478-7.454v7.536h11.675V69.314c.008-.88-1.062-1.844-1.981-1.83h-2.61l-1.43 3.739h-.39l-1.662-3.77zm-21.434 1.256c-.202 1.25-.116 2.463 0 3.71l.608.974v3.894l-.67.912v2.342c0 .723 1.157.748 1.157 0v-2.038l1.764-1.642 1.217-2.13 5.293 1.643v3.863c.014 1.046 1.338 1.053 1.338.008v-4.114l1.339-2.19-2.495-2.677h-7.847zm-.038 14.252c-.775 0-1.4.624-1.4 1.4s.625 1.4 1.4 1.4h33.403c.775 0 1.4-.625 1.4-1.4 0-.776-.625-1.4-1.4-1.4z" style="fill:#000;stroke-width:3.94633" transform="translate(-201.712 -45.468)"/>`;
const _DefaultDesc = `Quarantine, animal`;
const _DefaultTitle = "Quarantine, animal";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf032QuarantineAnimal = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-032-quarantine-animal`;
    const titleId = `pi-title-tf-032-quarantine-animal`;
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
Tf032QuarantineAnimal.displayName = "Tf032QuarantineAnimal";
