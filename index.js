const fs = require('fs');

const languages = require('./info/languages.json');

const Organization = {};
languages.forEach((lang) => {
  Organization[lang] = JSON.parse(fs.readFileSync(`${__dirname}/info/${lang}/Organization.json`, {
    encoding: 'utf8',
  }));
});

module.exports = {
  languages,
  Organization,
};
