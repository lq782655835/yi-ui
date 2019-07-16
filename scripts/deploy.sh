#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# Commit changes.
msg="deploy at `date`"
if [ $# != 0 ]
  then msg="$*"
fi
git add -A
git commit -m "$msg"
echo 'local commited'

# 发布到 github
git push -f https://github.com/lq782655835/yi-ui.git master
echo 'remote commited'
# cd -
