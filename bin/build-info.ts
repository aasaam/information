import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { cloneDeep, merge } from 'lodash';
import { dirname, resolve } from 'path';
import { Organization } from 'schema-dts';

const informationEmail = 'info@aasaam.com';
const generalTelephone = '+9821476244';

const languages = ['en', 'fa', 'ar', 'de'];

const Organization: Organization = {
  '@type': 'Organization',

  description: 'aasaam software development group',
  name: 'aasaam',
  url: 'https://aasaam.com/',

  logo: 'https://aasaam.github.io/information/logo/aasaam.svg',

  email: informationEmail,
  telephone: [generalTelephone],

  foundingDate: '2014-10-12',

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
    'https://twitter.com/aasaaminfo/',
    'https://t.me/aasaaminfo/',
    'https://www.instagram.com/aasaaminfo/',
    'https://www.facebook.com/aasaaminfo/',
  ],
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
    description: 'گروه نرم‌افزاری آسام',
    name: 'آسام',

    address: {
      addressRegion: 'تهران',

      addressLocality:
        'منطقه ۶، زرتشت غربی، خیابان نوری(کامبیز)، پلاک ۱۴، طبقه سوم',
    },
  },

  ar: {
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

languages.forEach((lang) => {
  const data = merge(cloneDeep(Organization), OrganizationPatches[lang]);
  const jsonPath = resolve(__dirname, `../info/${lang}/Organization.json`);
  const jsonDirectory = dirname(jsonPath);
  execSync(`mkdir -p ${jsonDirectory}`);
  writeFileSync(jsonPath, JSON.stringify(data, null, 2));
});
