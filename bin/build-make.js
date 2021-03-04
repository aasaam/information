#!/usr/bin/env node
/* eslint-disable security/detect-object-injection */
const { readFileSync, writeFileSync, readdirSync, existsSync } = require('fs');
// eslint-disable-next-line security/detect-child-process
const { execSync } = require('child_process');
const { join } = require('path');

const languages = JSON.parse(
  readFileSync(`${__dirname}/../info/languages.json`, { encoding: 'utf8' }),
);

const services = readdirSync(join(__dirname, '../logo/service'));

const Products = {};
const Organization = {};
languages.forEach((lang) => {
  // eslint-disable-next-line security/detect-object-injection
  Organization[lang] = JSON.parse(
    readFileSync(`${__dirname}/../info/${lang}/Organization.json`, {
      encoding: 'utf8',
    }),
  );
  Organization[lang]['@context'] = 'https://schema.org';

  services.forEach((service) => {
    const jsonService = `${__dirname}/../logo/service/${service}/info-${lang}.json`;
    if (existsSync(jsonService)) {
      if (!Products[service]) {
        Products[service] = {};
      }
      Products[service][lang] = JSON.parse(
        readFileSync(jsonService, { encoding: 'utf8' }),
      );
    }
  });
});

const result = {
  languages,
  Products,
  Organization,
};

writeFileSync(
  `${__dirname}/../index.js`,
  `module.exports = ${JSON.stringify(result)};`,
);
execSync(
  `${__dirname}/../node_modules/.bin/prettier --write ${__dirname}/../index.js`,
);
