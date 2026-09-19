/**
 * Framework-agnostic SVG rendering shared by the React, Vue and Web Component
 * packages (and by the source generator). Exposed as the `/render` subpath so
 * that importing it does not pull in the full symbol registry.
 */

/**
 * Placeholder that prefixes every internal SVG id in {@link SvgParts.body}.
 * {@link renderSvg} swaps it for a per-instance id so that rendering the same
 * symbol several times on one page never produces duplicate DOM ids.
 */
export const UID_PLACEHOLDER = '__pi_uid__';

/** A symbol's SVG split into the pieces needed to render it. */
export interface SvgParts {
  /** Root `<svg>` attributes, excluding `width` and `height`. */
  attrs: string;
  /** Inner markup, with internal ids prefixed by {@link UID_PLACEHOLDER}. */
  body: string;
  /** Default `width` attribute. */
  width: string;
  /** Default `height` attribute. */
  height: string;
}

export interface RenderSvgOptions {
  /** Unique id for this rendered instance; used to scope all DOM ids. */
  uid: string;
  /** Text for the SVG `<title>`; also the accessible name unless `ariaLabel` is set. */
  title: string;
  /** Text for the SVG `<desc>`. Omitted when empty or identical to `title`. */
  description?: string;
  /** Explicit accessible name; replaces `aria-labelledby` on the `<svg>`. */
  ariaLabel?: string;
  width?: number | string;
  height?: number | string;
}

export const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');

const escapeRegExp = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Matches a root attribute by exact name (so `width` does not match `stroke-width`). */
const attrRe = (name: string): RegExp => new RegExp(`(?:^|\\s)${name}="([^"]*)"`);

const scopeIds = (body: string): string => {
  const ids = new Set<string>();
  for (const m of body.matchAll(/\bid="([^"]+)"/g)) ids.add(m[1]);
  let out = body;
  for (const id of ids) {
    const esc = escapeRegExp(id);
    const scoped = `${UID_PLACEHOLDER}-${id}`;
    out = out
      .replace(new RegExp(`\\bid="${esc}"`, 'g'), `id="${scoped}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, 'g'), `url(#${scoped})`)
      .replace(new RegExp(`href="#${esc}"`, 'g'), `href="#${scoped}"`);
  }
  return out;
};

/** Splits a complete `<svg>` document into {@link SvgParts}. */
export const parseSvg = (svg: string): SvgParts => {
  const rootAttrs = svg.match(/<svg([^>]*)>/)?.[1] ?? '';
  const body = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] ?? '';
  const viewBox = rootAttrs.match(attrRe('viewBox'))?.[1];
  const width = (rootAttrs.match(attrRe('width'))?.[1] ?? '100%').replace(/px$/, '');
  const height = (rootAttrs.match(attrRe('height'))?.[1] ?? '100%').replace(/px$/, '');
  const isNumeric = (v: string): boolean => /^\d+(\.\d+)?$/.test(v);
  const resolvedViewBox =
    viewBox ?? (isNumeric(width) && isNumeric(height) ? `0 0 ${width} ${height}` : undefined);
  const otherAttrs = ['xmlns', 'width', 'height', 'viewBox']
    .reduce(
      (attrs, name) => attrs.replace(new RegExp(`(?:^|\\s+)${name}="[^"]*"`, 'g'), ''),
      rootAttrs,
    )
    .trim();

  return {
    attrs: [
      'xmlns="http://www.w3.org/2000/svg"',
      resolvedViewBox ? `viewBox="${resolvedViewBox}"` : '',
      otherAttrs,
    ]
      .filter(Boolean)
      .join(' '),
    body: scopeIds(body),
    width,
    height,
  };
};

const partsCache = new Map<string, SvgParts>();

/** Memoised {@link parseSvg} keyed by symbol id. */
export const getSvgParts = (symbol: { id: string; svg: string }): SvgParts => {
  let parts = partsCache.get(symbol.id);
  if (!parts) {
    parts = parseSvg(symbol.svg);
    partsCache.set(symbol.id, parts);
  }
  return parts;
};

let uidCounter = 0;

/** Returns a new page-unique id, for renderers that have no framework id helper. */
export const nextUid = (): string => `pi-${++uidCounter}`;

/** Renders an accessible `<svg>` string for one symbol instance. */
export const renderSvg = (parts: SvgParts, options: RenderSvgOptions): string => {
  const { ariaLabel, description, height, title, width } = options;
  const uid = options.uid.replace(/[^\w-]/g, '');
  const titleId = `${uid}-title`;
  const descId = `${uid}-desc`;
  const desc = description && description !== title ? description : undefined;

  const w = width !== undefined ? escapeHtml(String(width)) : parts.width;
  const h = height !== undefined ? escapeHtml(String(height)) : parts.height;
  const label =
    ariaLabel !== undefined
      ? `aria-label="${escapeHtml(ariaLabel)}"`
      : `aria-labelledby="${titleId}"`;
  const describedBy = desc ? ` aria-describedby="${descId}"` : '';

  return (
    `<svg ${parts.attrs} width="${w}" height="${h}" role="img" ${label}${describedBy}>` +
    `<title id="${titleId}">${escapeHtml(title)}</title>` +
    (desc ? `<desc id="${descId}">${escapeHtml(desc)}</desc>` : '') +
    parts.body.split(UID_PLACEHOLDER).join(uid) +
    `</svg>`
  );
};
