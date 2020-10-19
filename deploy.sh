#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f "https://github.com/anncwb/vue-vben-admin-doc.git" master:gh-pages

cd -
