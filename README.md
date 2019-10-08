# aasaam information

[![Greenkeeper badge](https://badges.greenkeeper.io/aasaam/information.svg)](https://greenkeeper.io/)

![aasaam](./logo/aasaam.svg "aasaam software development logo")

This repository contain:

* Standard sizes for common use cases of [logo](./logo) such as favicon and device [icons](./logo/icons).
* Organization information on [languages](./info/languages.json)

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
