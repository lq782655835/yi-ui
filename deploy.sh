#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'deploy'
echo 'local commited'

# 发布到 github
git push -f https://github.com/lq782655835/yi-ui.git master
echo 'remote commited'
# cd -
