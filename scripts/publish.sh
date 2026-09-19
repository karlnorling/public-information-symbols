#!/usr/bin/env bash
# Publish all changed packages to npm using the npm CLI (which handles OIDC
# token exchange natively) rather than `yarn npm publish`.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"

yarn workspaces foreach -A --no-private --topological-dev exec \
  bash "$root/scripts/publish-package.sh"
