#!/usr/bin/env sh

set -e

npm run build

cd dist

touch .nojekyll

git init
git config --local user.email "vben"
git config --local user.name "anncwb@126.com"
git add -A
git commit -m 'deploy'


git push -f "https://github.com/anncwb/vue-vben-admin-doc.git" master:gh-pages

cd -
