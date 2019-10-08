const fs = require('fs');

const languages = require('./info/languages.json');

const Organization = {};
languages.forEach((lang) => {
  Organization[lang] = fs.readFileSync(`./info/${lang}/Organization.json`);
});

module.exports = {
  languages,
  Organization,
};
