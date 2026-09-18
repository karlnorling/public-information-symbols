#!/usr/bin/env bash
# Publishes the package in the current directory unless its version is already
# on npm. Changesets only bumps packages that changed, so every run sees some
# unchanged packages; `npm publish` would fail on those and abort the release.
set -euo pipefail

name="$(node -p 'require("./package.json").name')"
version="$(node -p 'require("./package.json").version')"

if [ -n "$(npm view "$name@$version" version 2>/dev/null || true)" ]; then
  echo "Skipping $name@$version (already published)"
  exit 0
fi

npm publish --access public --provenance
# changesets/action parses this line to create the git tag and GitHub release.
echo "New tag: $name@$version"
