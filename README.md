# information

[![aasaam](https://flat.badgen.net/badge/aasaam/software%20development%20group/0277bd?labelColor=000000&icon=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Faasaam%2Finformation%2Flogo%2Faasaam.svg)](https://github.com/aasaam)

[![travis](https://flat.badgen.net/travis/aasaam/information)](https://travis-ci.org/aasaam/information)
[![dependencies](https://flat.badgen.net/david/dep/aasaam/information)](https://david-dm.org/aasaam/information)
[![dev-dependencies](https://flat.badgen.net/david/dev/aasaam/information)](https://david-dm.org/aasaam/information?type=dev)
[![vulnerabilities](https://flat.badgen.net/snyk/aasaam/information)](https://snyk.io/test/github/aasaam/information)

[![open-issues](https://flat.badgen.net/github/open-issues/aasaam/information)](https://github.com/aasaam/information/issues)
[![open-pull-requests](https://flat.badgen.net/github/open-prs/aasaam/information)](https://github.com/aasaam/information/pulls)
[![npm](https://flat.badgen.net/npm/v/@aasaam/information)](https://www.npmjs.com/package/@aasaam/information)
[![npm](https://flat.badgen.net/npm/types/@aasaam/information)](https://www.npmjs.com/package/@aasaam/information)

![aasaam](./logo/aasaam.svg 'aasaam software development logo')

This repository contain aasaam:

- Standard sizes for common use cases of [logo](./logo/aasaam.svg) such as [favicon](./logo/icons/favicon.ico) and device [icons](./logo/icons/android-chrome-256.png).
- [Organization information](./info/en/Organization.json) on [languages](./info/languages.json)

## Usage

### Node.js

You can use it to grab latest information of aasaam organization.

Add this dependency/devDependencies into your `package.json`

```json
{
  "dependencies": {
    "@aasaam/information": "^0"
  }
}
```

```js
const { languages, Organization } = require('@aasaam/information');

console.log(languages); // array of supported languages ['ar', 'de', ...]
console.log(Organization.en); // dump english version of organization detail
```

### Raw from github page

```bash
curl -s https://aasaam.github.io/information/info/en/Organization.json | jq
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

- [node.js](https://nodejs.org/)
- [inkscape](https://inkscape.org/)
- [gimp](https://www.gimp.org/)
- [imagemagick](https://imagemagick.org/)
- [pngquant](https://pngquant.org/)
