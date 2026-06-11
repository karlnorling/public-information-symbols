# @public-information-symbols/elements

## 1.0.2

### Patch Changes

- 9b1671c: Replace `workspace:*` with real version ranges for the `@public-information-symbols/core` dependency.

  The npm CLI does not rewrite Yarn's `workspace:` protocol before publishing, so the specifier leaked into published manifests and caused `EUNSUPPORTEDPROTOCOL` errors for npm users (same root cause as karlnorling/iso-safety-signs#9).

## 1.0.1

### Patch Changes

- 6716aa7: Add README to all packages
- Updated dependencies [6716aa7]
  - @public-information-symbols/core@1.0.1

## 1.0.0

### Major Changes

- 963ddb7: Initial release of all ISO 7001 public information symbol packages

### Patch Changes

- Updated dependencies [963ddb7]
  - @public-information-symbols/core@1.0.0
