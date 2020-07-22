import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const languages = JSON.parse(readFileSync(`${__dirname}/../info/languages.json`, { encoding: 'utf8' }));

const Organization = {};
languages.forEach((lang) => {
  Organization[lang] = JSON.parse(readFileSync(`${__dirname}/../info/${lang}/Organization.json`, {
    encoding: 'utf8',
  }));
});

const result = {
  languages,
  Organization,
};

writeFileSync(`${__dirname}/../index.js`, `module.exports = ${JSON.stringify(result)};`);
execSync(`${__dirname}/../node_modules/.bin/prettier --write ${__dirname}/../index.js`);
