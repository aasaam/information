# aasaam information

[![Greenkeeper badge](https://badges.greenkeeper.io/aasaam/information.svg)](https://greenkeeper.io/)

![aasaam](./logo/aasaam.svg "aasaam software development logo")

This repository contain:

* Standard sizes for common use cases of [logo](./logo) such as favicon and device [icons](./logo/icons).
* [Organization information](./info/en/Organization.json) on [languages](./info/languages.json)

## Usage

You can use it to grab latest information of aasaam organization

```bash
npm install @aasaam/information --save
```

```js
const {
  languages,
  Organization,
} = require('@aasaam/information');

console.log(languages); // array of supported languages ['ar', 'de', ...]
console.log(Organization.en); // dump english version of organization detail
```

## Build

You will need to install **node.js**, **inkscape**, **imagemagick** and **pngquant**.

```bash
# install tools
sudo apt-get install inkscape imagemagick pngquant

# build icons
npm run build:icons

# build information
npm run build:info
```

## Tools

We use this tools for create logos and optimize them.

* [node.js](https://nodejs.org/)
* [inkscape](https://inkscape.org/)
* [imagemagick](https://imagemagick.org/)
* [pngquant](https://pngquant.org/)
