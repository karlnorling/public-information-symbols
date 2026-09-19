import { nextUid, renderSvg } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';

/** What a concrete element needs to supply in order to render. */
export interface SymbolSource {
  parts: SvgParts;
  title: string;
  description: string;
}

/**
 * Shared behaviour for all symbol custom elements.
 *
 * Attributes:
 * - `symbol-title` — overrides the SVG accessible title (preferred over `title`,
 *   which also makes the browser show a tooltip on the host)
 * - `title`        — same as `symbol-title`; kept for backwards compatibility
 * - `description`  — overrides the SVG description
 * - `aria-label`   — explicit accessible name, forwarded to the `<svg>`
 * - `width`        — forwarded to the `<svg>` width attribute
 * - `height`       — forwarded to the `<svg>` height attribute
 */
export class PISymbolBase extends HTMLElement {
  static readonly tagName: string = '';
  static readonly observedAttributes: string[] = [
    'symbol-title',
    'title',
    'description',
    'aria-label',
    'width',
    'height',
  ];

  private readonly _uid = nextUid();
  private _connected = false;

  connectedCallback(): void {
    this._connected = true;
    this._render();
  }

  disconnectedCallback(): void {
    this._connected = false;
  }

  attributeChangedCallback(): void {
    // Initial attributes are delivered before connectedCallback; render once there.
    if (this._connected) this._render();
  }

  /** Returns the symbol to render, or `undefined` to render nothing. */
  protected _source(): SymbolSource | undefined {
    return undefined;
  }

  private _render(): void {
    const source = this._source();
    if (!source) {
      this.innerHTML = '';
      return;
    }
    this.style.display = 'contents';
    this.innerHTML = renderSvg(source.parts, {
      ariaLabel: this.getAttribute('aria-label') ?? undefined,
      description: this.getAttribute('description') ?? source.description,
      height: this.getAttribute('height') ?? undefined,
      title: this.getAttribute('symbol-title') ?? this.getAttribute('title') ?? source.title,
      uid: this._uid,
      width: this.getAttribute('width') ?? undefined,
    });
  }
}
