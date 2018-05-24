#!/bin/bash

set -ue
set -o pipefail

DIR=$(cd $(dirname $0) && pwd)

pwd
ls $DIR

echo ${URBAIN_ROOT:-$DIR}

docker run \
  -v $DIR:/src \
  -u $(id -u)\
  --dns 10.23.142.11 \
  --dns 10.20.128.201 \
  bigbang.finbel.intra:5000/npm-angular:0.4 \
  sh -c 'npm install && npm run lint'
