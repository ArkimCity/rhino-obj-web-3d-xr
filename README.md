# vue-3-github-page-template

<hr>

## - example page

[https://arkimcity.github.io/vue-3-github-page-template](https://arkimcity.github.io/vue-3-github-page-template)

<hr>

## - new project

frontend\vue.config.js

```javascript
const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../docs"),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-3-github-page-template/' // this is going to be your new subdomain url for github pages
    : '/'
}

```
<hr>

## - run test

from root

```
cd frontend

npm run serve
```

<hr>

## - build

from root

```
cd frontend

npm run build
```
