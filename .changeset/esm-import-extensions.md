---
'@public-information-symbols/core': patch
'@public-information-symbols/elements': patch
'@public-information-symbols/react': patch
'@public-information-symbols/vue': patch
---

Fix `ERR_MODULE_NOT_FOUND` when importing the ESM build in Node. Relative imports in `dist/esm` now end in `.js`, as Node's ESM loader requires. Bundlers were unaffected.
