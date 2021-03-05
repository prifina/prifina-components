#!/bin/bash 

pushd packages/$1
yarn build
popd
git add .
git commit -m "$2"
git push origin main


