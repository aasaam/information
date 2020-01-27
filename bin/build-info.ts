import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { cloneDeep, merge } from 'lodash';
import { dirname, resolve } from 'path';
import { Organization, Person } from 'schema-dts';

import { sortBy } from 'lodash';

const mainDomain = 'aasaam.com';
const informationEmail = `info@${mainDomain}`;
const generalTelephone = '+9891008212';
const languages = ['en', 'fa', 'ar', 'de'];

const memberList = sortBy(JSON.parse(readFileSync(`${__dirname}/members.json`, { encoding: 'utf8' })), (m) => {
  return m.name;
});

const members: Person[] = [];
const membersFa: Person[] = [];

const humans: string[] = [];

memberList.forEach((person) => {
  const { id } = person;
  const email = `${id}@${mainDomain}`;
  const url = `http://staff.aasaam.com/${id}`;
  members.push({
    '@type': 'Person',
    email,
    identifier: id,
    jobTitle: person.role,
    name: person.name,
    url,
  });
  membersFa.push({
    '@type': 'Person',
    email,
    identifier: id,
    jobTitle: person.roleFa,
    name: person.nameFa,
    url,
  });

  humans.push(`
  ${person.name} (${person.nameFa})
  ${person.role} (${person.roleFa})
  ${email}
  ${url}`);
});

const Organization: Organization = {
  '@type': 'Organization',

  description: 'aasaam software development group',
  name: 'aasaam',
  url: 'https://aasaam.com/',

  logo: 'https://aasaam.github.io/information/logo/aasaam.svg',

  email: informationEmail,
  telephone: [generalTelephone],

  foundingDate: '2014-10-12',

  legalName: 'Dadeh Pardazan Ati Prozheh',
  leiCode: '14004466417',
  taxID: '411475145475',

  location: {
    '@type': 'Place',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.7150412,
      longitude: 51.4008997,
    },
  },

  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IR',
    addressRegion: 'Tehran',
    postalCode: '1415653364',

    addressLocality:
      '3rd Floor, No 14, Noori(Kambiz) St, West Zartosht St, District 6',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'information',

    email: informationEmail,
    telephone: generalTelephone,
  },
  sameAs: [
    'https://github.com/aasaam/',
    'https://gitlab.com/aasaam/',
    'https://twitter.com/aasaaminfo/',
    'https://t.me/aasaaminfo/',
    'https://www.instagram.com/aasaaminfo/',
    'https://www.facebook.com/aasaaminfo/',
    'https://medium.com/@aasaaminfo/',
    'https://virgool.io/@aasaaminfo/',
    'https://www.aparat.com/aasaaminfo/',
    'https://www.youtube.com/channel/UCHenb52NxQqHaD7ojibBEEg/',
  ],

  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: members.length,
  },

  employees: members,
};

const OrganizationPatches = {
  en: {},

  de: {
    address: {
      addressRegion: 'Teheran',

      addressLocality:
        '3. Stock Nr. 14 Noori(Kambiz) St. Westen Zartosth St. District 6',
    },
  },

  fa: {
    legalName: 'داده پردازان آتی‌پروژه',

    description: 'گروه نرم‌افزاری آسام',
    name: 'آسام',

    address: {
      addressRegion: 'تهران',

      addressLocality:
        'منطقه ۶، زرتشت غربی، خیابان نوری(کامبیز)، پلاک ۱۴، طبقه سوم',
    },

    employees: membersFa,
  },

  ar: {
    legalName: 'داده فردازان آتي‌فروجه',

    description: 'مجموعة برامج آسام',
    name: 'آسام',

    address: {
      addressRegion: 'طهران',

      addressLocality:
        'منطقة ٦، شارع زرتشت الغربي، شارع نوري(كامبیز)، رقم 14، الطابق الثالث',
    },
  },
};

writeFileSync(
  resolve(__dirname, `../info/languages.json`),
  JSON.stringify(languages, null, 2),
);

writeFileSync(
  resolve(__dirname, `../info/humans.txt`),
  [
    '-'.repeat(48),
    `Powered by ${Organization.name}. ${Organization.url}`,
    '',
    readFileSync(resolve(__dirname, `../aasaam-asci.txt`), { encoding: 'utf8' }),
    `Members of ${Organization.description}:`,
    humans.join('\n'),
    '',
  ].join('\n'),
);

languages.forEach((lang) => {
  const data = merge(cloneDeep(Organization), OrganizationPatches[lang]);
  const jsonPath = resolve(__dirname, `../info/${lang}/Organization.json`);
  const jsonDirectory = dirname(jsonPath);
  execSync(`mkdir -p ${jsonDirectory}`);
  writeFileSync(jsonPath, JSON.stringify(data, null, 2));
});
