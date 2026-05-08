// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { PISymbolElement } from "./PISymbolElement";

const _elements: Array<[typeof HTMLElement & { tagName: string }, string]> = [
  [PISymbolElement, PISymbolElement.tagName],
];

export function defineCustomElements(prefix = "pi"): void {
  for (const [cls, defaultTag] of _elements) {
    const tag = prefix === "pi" ? defaultTag : `${prefix}-${defaultTag.replace(/^pi-/, "")}`;
    if (!customElements.get(tag)) customElements.define(tag, cls);
  }
}
