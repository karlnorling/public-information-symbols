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

# Create the tag locally. changesets/action only *pushes* tags it finds in the
# publish output -- it assumes `changeset publish` already created them, which
# a custom npm-based publish script does not. Without this, the release job
# fails after publishing with:
#   error: src refspec <name>@<version> does not match any
tag="$name@$version"
if git rev-parse -q --verify "refs/tags/$tag" >/dev/null; then
  echo "Tag $tag already exists"
else
  git tag "$tag"
fi

# changesets/action parses this line to decide which tag to push and which
# GitHub release to create.
echo "New tag: $tag"
