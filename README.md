# rhino-and-obj-to-web3d-xr
 
[https://arkimcity.github.io/rhino-and-obj-to-web3d-xr](https://arkimcity.github.io/rhino-and-obj-to-web3d-xr)

## - run test

from root

```
cd frontend

npm run serve
```

## - build

from root

```
cd frontend

npm run build
```

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