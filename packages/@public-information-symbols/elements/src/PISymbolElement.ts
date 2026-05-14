import { getSymbol } from '@public-information-symbols/core';

const _h = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');

function scopeIds(body: string, prefix: string): string {
  const ids = new Set<string>();
  body.replace(/\bid="([^"]+)"/g, (_, id: string) => {
    ids.add(id);
    return _;
  });
  if (ids.size === 0) return body;
  let out = body;
  for (const id of ids) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out
      .replace(new RegExp(`\\bid="${esc}"`, 'g'), `id="${prefix}-${id}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, 'g'), `url(#${prefix}-${id})`)
      .replace(new RegExp(`href="#${esc}"`, 'g'), `href="#${prefix}-${id}"`);
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
  const svgAttrs = svgAttrsMatch ? svgAttrsMatch[1] : '';
  const viewBoxMatch = svgAttrs.match(/\bviewBox="([^"]+)"/);
  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const bodyMatch = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const w = (widthMatch ? widthMatch[1] : '100%').replace(/px$/, '');
  const h = (heightMatch ? heightMatch[1] : '100%').replace(/px$/, '');
  const syntheticViewBox =
    !viewBoxMatch && /^\d+(\.\d+)?$/.test(w) && /^\d+(\.\d+)?$/.test(h)
      ? ` viewBox="0 0 ${w} ${h}"`
      : '';
  const otherAttrs = svgAttrs
    .replace(/\s*\bxmlns="[^"]*"/g, '')
    .replace(/\s*\bwidth="[^"]*"/, '')
    .replace(/\s*\bheight="[^"]*"/, '')
    .replace(/\s*\bviewBox="[^"]*"/, '')
    .trim();
  const viewBoxStr = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : syntheticViewBox;
  const body = scopeIds(bodyMatch ? bodyMatch[1] : '', id);
  return {
    attrs: `xmlns="http://www.w3.org/2000/svg"${viewBoxStr}${otherAttrs ? ` ${otherAttrs}` : ''}`,
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

/**
 * Generic ISO 7001 public information symbol custom element — renders any symbol by slug ID.
 *
 * Attributes:
 * - `symbol-id`   — slug ID, e.g. `"ac-001-full-accessibility"`
 * - `title`       — overrides the SVG accessible title
 * - `description` — overrides the SVG description
 * - `width`       — forwarded to the `<svg>` width attribute
 * - `height`      — forwarded to the `<svg>` height attribute
 *
 * @example
 * ```html
 * <pi-symbol symbol-id="ac-001-full-accessibility" width="64"></pi-symbol>
 * ```
 */
export class PISymbolElement extends HTMLElement {
  static readonly tagName = 'pi-symbol';
  static readonly observedAttributes = ['symbol-id', 'title', 'description', 'width', 'height'];

  connectedCallback(): void {
    this._render();
  }

  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const symbolId = this.getAttribute('symbol-id');
    if (!symbolId) {
      this.innerHTML = '';
      return;
    }
    const symbol = getSymbol(symbolId);
    if (!symbol) {
      this.innerHTML = '';
      return;
    }

    const {
      attrs,
      body,
      width: defaultWidth,
      height: defaultHeight,
    } = getParsedSvg(symbol.svg, symbolId);
    const resolvedTitle = this.getAttribute('title') ?? symbol.name;
    const resolvedDesc = this.getAttribute('description') ?? symbol.description;
    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : defaultWidth;
    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : defaultHeight;
    const descId = `pi-desc-${symbolId}`;
    const titleId = `pi-title-${symbolId}`;

    this.style.display = 'contents';
    this.innerHTML = `<svg ${attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${body}</svg>`;
  }
}
