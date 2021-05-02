#!/bin/bash

echo "stop service"
forever stop __sapper__/build
echo "update from git origin"
git pull
echo "delete __sapper__"
rm -rf __sapper__ node_modules package-lock.json
echo "start npm install"
npm i
echo "start build"
npm run build 
echo "build successed"
echo "start service"
forever start __sapper__/build
