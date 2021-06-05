#!/usr/bin/env node
// eslint-disable-next-line security/detect-child-process
const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');

// eslint-disable-next-line import/no-extraneous-dependencies
const { cloneDeep, merge } = require('lodash');
const { dirname, resolve } = require('path');

const mainDomain = 'aasaam.com';
const informationEmail = `info@${mainDomain}`;
const supportEmail = `support@${mainDomain}`;
const salesEmail = `sales@${mainDomain}`;
const generalTelephone = '+982191008212';
const languages = ['en', 'fa', 'ar', 'de'];

const keywords = [
  'Content management system (CMS)',
  'Web Development',
  'Site Reliability Engineering (SRE)',
  'DevOps',
  'Security',
  'Performance',
  'Monitoring',
  'IoT',
];

/** @type {import('schema-dts').Organization} */
const Organization = {
  '@type': 'Organization',

  description: 'aasaam software development group',
  name: 'aasaam',
  url: 'https://aasaam.com/',

  logo: 'https://aasaam.com/logo.svg',

  email: informationEmail,
  telephone: [generalTelephone],

  foundingDate: '2014-10-14',

  legalName: 'Dadeh Pardazan Ati Prozheh',

  identifier: [
    {
      '@type': 'PropertyValue',
      name: 'nationalIdentifier',
      value: '14004466417',
    },
    {
      '@type': 'PropertyValue',
      name: 'economicCode',
      value: '411475145475',
    },
    {
      '@type': 'PropertyValue',
      name: 'registerNumber',
      value: '461864',
    },
  ],

  mainEntityOfPage: {
    '@type': 'CreativeWork',
    keywords: keywords.join(', '),
  },

  location: {
    '@type': 'Place',
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'ISO3166-2',
      value: 'IR-07',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.7235195,
      longitude: 51.3966331,
    },
  },

  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IR',
    addressRegion: 'Tehran',
    postalCode: '1413954311',

    addressLocality: 'No 3, West 2nd St, Mordad St, District 6',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'information',

      email: informationEmail,
      telephone: generalTelephone,
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',

      email: salesEmail,
    },
    {
      '@type': 'ContactPoint',
      contactType: 'support',

      email: supportEmail,
    },
  ],
  sameAs: [
    'https://github.com/aasaam/',
    'https://gitlab.com/aasaam/',
    'https://twitter.com/aasaaminfo/',
    'https://t.me/aasaaminfo/',
    'https://www.instagram.com/aasaaminfo/',
    'https://www.facebook.com/aasaaminfo/',
    'https://www.linkedin.com/company/aasaam/',
    'https://medium.com/@aasaaminfo/',
    'https://www.youtube.com/channel/UCHenb52NxQqHaD7ojibBEEg/',

    'https://virgool.io/@aasaaminfo/',
    'https://www.aparat.com/aasaaminfo/',
  ],
};

const OrganizationPatches = {
  en: {},

  de: {
    mainEntityOfPage: {
      '@type': 'CreativeWork',
      keywords: keywords.concat(['Webentwicklung', 'Sicherheit']).join(', '),
    },

    address: {
      addressRegion: 'Teheran',

      addressLocality: 'Nummer 3, West 2. Straße, Mordad-Straße, Bezirk 6',
    },
  },

  fa: {
    legalName: 'داده پردازان آتی‌پروژه',

    description: 'گروه نرم‌افزاری آسام',
    name: 'آسام',

    mainEntityOfPage: {
      keywords: keywords
        .concat([
          'سامانه مدیریت محتوا',
          'مونیتورینگ',
          'طراحی سایت خبری',
          'طراحی سایت خبری',
          'طراحی سایت روزنامه',
          'توسعه وب',
          'طراحی وب',
          'دواپس',
          'توسعه عملیات',
          'مهندسی پایداری وب',
          'امنیت',
          'اینترنت اشیاء',
        ])
        .join(', '),
    },

    address: {
      addressRegion: 'تهران',

      addressLocality: 'منطقه ۶، گلها، خیابان مرداد، خیابان دوم غربی، پلاک ۳',
    },
  },

  ar: {
    legalName: 'داده فردازان آتي‌فروجه',

    description: 'مجموعة برامج آسام',
    name: 'آسام',

    mainEntityOfPage: {
      '@type': 'CreativeWork',
      keywords: keywords
        .concat([
          'نظام إدارة المحتوى',
          'وكالة أنباء',
          'صحيفة',
          'تطوير ويب',
          'ديف أوبس',
          'الأمان',
          'أداء',
          'إنترنت الأشياء',
        ])
        .join(', '),
    },

    address: {
      addressRegion: 'طهران',

      addressLocality: 'منطقة ٦، شارع مرداد، الشارع الثاني الغربي، رقم ۳',
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
    '-'.repeat(64),
    readFileSync(resolve(__dirname, `../aasaam-asci.txt`), {
      encoding: 'utf8',
    }),
    Organization.description,
    Organization.url,
    '-'.repeat(64),
  ].join('\n'),
);

languages.forEach((lang) => {
  // eslint-disable-next-line security/detect-object-injection
  const data = merge(cloneDeep(Organization), OrganizationPatches[lang]);
  const jsonPath = resolve(__dirname, `../info/${lang}/Organization.json`);
  const jsonDirectory = dirname(jsonPath);
  execSync(`mkdir -p ${jsonDirectory}`);
  writeFileSync(jsonPath, JSON.stringify(data, null, 2));
});
