#!/bin/bash 
mkdir sgb-screen-product-detail
cd sgb-screen-product-detail/
mkdir dist
mkdir i18n
cd i18n/
touch en_us.json
touch es_ve.json
cd ..
mkdir res
mkdir src
cd src
touch sgb-screen-product-detail.js
mkdir styles
cd styles/
touch sgb-screen-product-detail.sass
mkdir templates
cd templates/
touch product-detail.html
cd ..
bower init
bower install --save git@github.com:SYNERGY-GB/megazord-framework.git#master
touch gulpfile.js
npm install gulp --save-dev
npm install browserify --save-dev
npm install vinyl-transform --save-dev
touch README.md
gulp build