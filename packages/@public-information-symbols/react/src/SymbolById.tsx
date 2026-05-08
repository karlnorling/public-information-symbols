import * as React from "react";
import { getSymbol } from "@public-information-symbols/core";
import type { SymbolProps } from "./SymbolPropsBase";

export interface SymbolByIdProps extends SymbolProps {
  /** Symbol slug ID, e.g. `"ac-001-full-accessibility"`. */
  id: string;
}

const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

function scopeIds(body: string, prefix: string): string {
  const ids = new Set<string>();
  body.replace(/\bid="([^"]+)"/g, (_, id: string) => {
    ids.add(id);
    return _;
  });
  if (ids.size === 0) return body;
  let out = body;
  for (const id of ids) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out = out
      .replace(new RegExp(`\\bid="${esc}"`, "g"), `id="${prefix}-${id}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, "g"), `url(#${prefix}-${id})`)
      .replace(new RegExp(`href="#${esc}"`, "g"), `href="#${prefix}-${id}"`);
  }
  return out;
}

interface ParsedSvg {
  attrs: string;
  body: string;
  width: string;
  height: string;
}

const _cache = new Map<string, ParsedSvg>();

function parseSvg(svg: string, id: string): ParsedSvg {
  const svgAttrsMatch = svg.match(/<svg([^>]*)>/);
  const svgAttrs = svgAttrsMatch ? svgAttrsMatch[1] : "";
  const viewBoxMatch = svgAttrs.match(/\bviewBox="([^"]+)"/);
  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const bodyMatch = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const w = (widthMatch ? widthMatch[1] : "100%").replace(/px$/, "");
  const h = (heightMatch ? heightMatch[1] : "100%").replace(/px$/, "");
  const syntheticViewBox =
    !viewBoxMatch && /^\d+(\.\d+)?$/.test(w) && /^\d+(\.\d+)?$/.test(h)
      ? ` viewBox="0 0 ${w} ${h}"`
      : "";
  const otherAttrs = svgAttrs
    .replace(/\s*\bxmlns="[^"]*"/g, "")
    .replace(/\s*\bwidth="[^"]*"/, "")
    .replace(/\s*\bheight="[^"]*"/, "")
    .replace(/\s*\bviewBox="[^"]*"/, "")
    .trim();
  const viewBoxStr = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : syntheticViewBox;
  const body = scopeIds(bodyMatch ? bodyMatch[1] : "", id);
  return {
    attrs: `xmlns="http://www.w3.org/2000/svg"${viewBoxStr}${otherAttrs ? ` ${otherAttrs}` : ""}`,
    body,
    width: w,
    height: h,
  };
}

function getParsedSvg(svg: string, id: string): ParsedSvg {
  let parsed = _cache.get(id);
  if (!parsed) {
    parsed = parseSvg(svg, id);
    _cache.set(id, parsed);
  }
  return parsed;
}

export const SymbolById = React.memo<SymbolByIdProps>(
  ({ id, "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const symbol = getSymbol(id);
    if (!symbol) return null;

    const {
      attrs,
      body,
      width: defaultWidth,
      height: defaultHeight,
    } = getParsedSvg(symbol.svg, id);
    const resolvedTitle = title ?? symbol.name;
    const resolvedDesc = description ?? symbol.description;
    const _w = width !== undefined ? _h(String(width)) : defaultWidth;
    const _ht = height !== undefined ? _h(String(height)) : defaultHeight;
    const descId = `pi-desc-${id}`;
    const titleId = `pi-title-${id}`;

    const svgHtml = `<svg ${attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${body}</svg>`;

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
SymbolById.displayName = "SymbolById";
