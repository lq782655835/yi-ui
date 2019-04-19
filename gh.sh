#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 1. 切换到gh-pages分支
git checkout -b gh-pages
# 2. 执行build生成打包后文件
npm run build:site
# 3. 只把打包后的文件夹（如dist）推送到gh-pages分支
git add -f site
git commit -m 'Initial the page of project'
git subtree push --prefix site origin gh-pages