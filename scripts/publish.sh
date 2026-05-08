#!/usr/bin/env bash
# Publish all changed packages to npm using the npm CLI (which handles OIDC
# token exchange natively) rather than `yarn npm publish`.
set -euo pipefail

yarn workspaces foreach -A --no-private --topological-dev exec \
  npm publish --access public --provenance
