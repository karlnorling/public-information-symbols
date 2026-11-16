#!/usr/bin/env bash
# Publish all changed packages to npm using the npm CLI (which handles OIDC
# token exchange natively) rather than `yarn npm publish`.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"

# changesets/action v2 does not parse stdout for "New tag:" lines the way v1
# did. It passes a file path in CHANGESETS_OUTPUT and reads newline-delimited
# JSON from it, one object per published package (publish-package.sh appends
# them). Without that file the action logs "GitHub releases and git tags cannot
# be created without this output" and skips both. The file must exist even when
# nothing is published, or the read itself fails. Unset when run by hand.
if [ -n "${CHANGESETS_OUTPUT:-}" ]; then
  : > "$CHANGESETS_OUTPUT"
fi

yarn workspaces foreach -A --no-private --topological-dev exec \
  bash "$root/scripts/publish-package.sh"
