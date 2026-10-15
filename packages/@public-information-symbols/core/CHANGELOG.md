# @public-information-symbols/core

## 1.1.0

### Minor Changes

- c68325e: Accessibility, id-scoping and packaging fixes:

  - Symbols no longer announce their name twice: `<desc>` is only rendered (via `aria-describedby`) when it differs from the title.
  - Every rendered instance gets unique DOM ids, so the same symbol can appear multiple times on a page.
  - `aria-label` is now applied to the `<svg>` (it was ignored in React and dropped in Vue). The Vue prop key is now `ariaLabel`; templates still pass `aria-label`.
  - Web components accept `symbol-title` (no browser tooltip) and `aria-label`; `defineCustomElements` can register an additional prefix without throwing.
  - Vue components keep string and array `style` values.
  - New `@public-information-symbols/core/render` entry point with the shared SVG renderer.
  - Packages declare `sideEffects: false` so importing one component no longer bundles every symbol, and `exports` list `types` first with separate CJS declarations.
  - `svg-map.json` no longer contains duplicate per-size entries (4.6 MB → 0.8 MB); PF 002 JPGs no longer have dark corners.

## 1.0.1

### Patch Changes

- 6716aa7: Add README to all packages

## 1.0.0

### Major Changes

- 963ddb7: Initial release of all ISO 7001 public information symbol packages
