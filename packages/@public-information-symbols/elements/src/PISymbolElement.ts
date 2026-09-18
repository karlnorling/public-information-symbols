import { getSymbol } from '@public-information-symbols/core';
import { getSvgParts } from '@public-information-symbols/core/render';
import { PISymbolBase } from './PISymbolBase';
import type { SymbolSource } from './PISymbolBase';

/**
 * Generic ISO 7001 public information symbol custom element — renders any symbol by slug ID.
 *
 * Accepts every attribute documented on {@link PISymbolBase}, plus:
 * - `symbol-id` — slug ID, e.g. `"ac-001-full-accessibility"`
 *
 * @example
 * ```html
 * <pi-symbol symbol-id="ac-001-full-accessibility" width="64"></pi-symbol>
 * ```
 */
export class PISymbolElement extends PISymbolBase {
  static override readonly tagName = 'pi-symbol';
  static override readonly observedAttributes = ['symbol-id', ...PISymbolBase.observedAttributes];

  protected override _source(): SymbolSource | undefined {
    const symbolId = this.getAttribute('symbol-id');
    const symbol = symbolId ? getSymbol(symbolId) : undefined;
    if (!symbol) return undefined;
    return { parts: getSvgParts(symbol), title: symbol.name, description: symbol.description };
  }
}
