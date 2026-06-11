---
'@public-information-symbols/elements': patch
'@public-information-symbols/react': patch
'@public-information-symbols/vue': patch
---

Replace `workspace:*` with real version ranges for the `@public-information-symbols/core` dependency.

The npm CLI does not rewrite Yarn's `workspace:` protocol before publishing, so the specifier leaked into published manifests and caused `EUNSUPPORTEDPROTOCOL` errors for npm users (same root cause as karlnorling/iso-safety-signs#9).
