#!/usr/bin/env node
/* eslint-disable security/detect-non-literal-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { writeFileSync, readFileSync } = require('fs');
const { resolve, dirname } = require('path');
// eslint-disable-next-line security/detect-child-process
const { execSync } = require('child_process');

// eslint-disable-next-line import/no-extraneous-dependencies
const { merge, cloneDeep } = require('lodash');

// @ts-ignore
const languages = require('../info/languages.json').filter((i) =>
  ['fa', 'en'].includes(i),
);

/** @type {import('schema-dts').Product} */
const htm = {
  '@type': 'Product',
  logo: 'https://aasaam.com/logo/htm.svg',
  image: 'https://aasaam.com/logo/htm.svg',
  name: 'HTM',
  description: 'HTTP Traffic Manager',
  offers: {
    '@type': 'Demand',
    availability: 'https://schema.org/OnlineOnly',
    url: 'https://aasaam.com/en/products/htm',
  },
};

/** @type {import('schema-dts').Product} */
const cms = {
  '@type': 'Product',
  logo: 'https://aasaam.com/logo/cms.svg',
  image: 'https://aasaam.com/logo/cms.svg',
  name: 'CMS',
  description: 'Content Management System',
  offers: {
    '@type': 'Demand',
    availability: 'https://schema.org/OnlineOnly',
    url: 'https://aasaam.com/en/products/cms',
  },
};

/** @type {import('schema-dts').Product} */
const dns = {
  '@type': 'Product',
  logo: 'https://aasaam.com/logo/dns.svg',
  image: 'https://aasaam.com/logo/dns.svg',
  name: 'DNS',
  description: 'Domain Name System',
  offers: {
    '@type': 'Demand',
    availability: 'https://schema.org/OnlineOnly',
    url: 'https://aasaam.com/en/products/dns',
  },
};

/** @type {import('schema-dts').Product} */
const email = {
  '@type': 'Product',
  logo: 'https://aasaam.com/logo/email.svg',
  image: 'https://aasaam.com/logo/email.svg',
  name: 'EMail',
  description: 'EMail Management',
  offers: {
    '@type': 'Demand',
    availability: 'https://schema.org/OnlineOnly',
    url: 'https://aasaam.com/en/products/dns',
  },
};

/** @type {import('schema-dts').Product} */
const sita = {
  '@type': 'Product',
  logo: 'https://aasaam.com/logo/sita.svg',
  image: 'https://aasaam.com/logo/sita.svg',
  name: 'Sita',
  description: 'aasaam central advertisement management',
  offers: {
    '@type': 'Demand',
    availability: 'https://schema.org/OnlineOnly',
    url: 'https://aasaam.com/en/products/dns',
  },
};

const htmPatches = {
  en: {},
  fa: {
    description: 'سامانه مدیریت ترافیک HTTP',
    offers: {
      url: 'https://aasaam.com/fa/products/htm',
    },
  },
};

const cmsPatches = {
  en: {},
  fa: {
    description: 'سامانه مدیریت محتوا',
    offers: {
      url: 'https://aasaam.com/fa/products/cms',
    },
  },
};

const dnsPatches = {
  en: {},
  fa: {
    description: 'سامانه نام دامنه',
    offers: {
      url: 'https://aasaam.com/fa/products/dns',
    },
  },
};

const emailPatches = {
  en: {},
  fa: {
    description: 'سامانه مدیریت ایمیل',
    offers: {
      url: 'https://aasaam.com/fa/products/email',
    },
  },
};

const sitaPatches = {
  en: {},
  fa: {
    name: 'سیتا',
    description: 'سامانه یکپارچه تبلیغات آسام',
    offers: {
      url: 'https://aasaam.com/fa/products/sita',
    },
  },
};

languages.forEach((lang) => {
  const orgLang = JSON.parse(
    readFileSync(resolve(__dirname, `../info/${lang}/Organization.json`), {
      encoding: 'utf8',
    }),
  );
  const data = merge(
    {
      '@context': 'https://schema.org',
      brand: {
        name: orgLang.name,
        description: orgLang.description,
      },
    },
    cloneDeep(htm),
    // eslint-disable-next-line security/detect-object-injection
    htmPatches[lang],
  );
  const jsonPath = resolve(__dirname, `../logo/service/htm/info-${lang}.json`);
  const jsonDirectory = dirname(jsonPath);
  execSync(`mkdir -p ${jsonDirectory}`);
  writeFileSync(jsonPath, JSON.stringify(data, null, 2));
});

languages.forEach((lang) => {
  const orgLang = JSON.parse(
    readFileSync(resolve(__dirname, `../info/${lang}/Organization.json`), {
      encoding: 'utf8',
    }),
  );
  const data = merge(
    {
      '@context': 'https://schema.org',
      brand: {
        name: orgLang.name,
        description: orgLang.description,
      },
    },
    cloneDeep(cms),
    // eslint-disable-next-line security/detect-object-injection
    cmsPatches[lang],
  );
  const jsonPath = resolve(__dirname, `../logo/service/cms/info-${lang}.json`);
  const jsonDirectory = dirname(jsonPath);
  execSync(`mkdir -p ${jsonDirectory}`);
  writeFileSync(jsonPath, JSON.stringify(data, null, 2));
});

languages.forEach((lang) => {
  const orgLang = JSON.parse(
    readFileSync(resolve(__dirname, `../info/${lang}/Organization.json`), {
      encoding: 'utf8',
    }),
  );
  const data = merge(
    {
      '@context': 'https://schema.org',
      brand: {
        name: orgLang.name,
        description: orgLang.description,
      },
    },
    cloneDeep(dns),
    // eslint-disable-next-line security/detect-object-injection
    dnsPatches[lang],
  );
  const jsonPath = resolve(__dirname, `../logo/service/dns/info-${lang}.json`);
  const jsonDirectory = dirname(jsonPath);
  execSync(`mkdir -p ${jsonDirectory}`);
  writeFileSync(jsonPath, JSON.stringify(data, null, 2));
});

languages.forEach((lang) => {
  const orgLang = JSON.parse(
    readFileSync(resolve(__dirname, `../info/${lang}/Organization.json`), {
      encoding: 'utf8',
    }),
  );
  const data = merge(
    {
      '@context': 'https://schema.org',
      brand: {
        name: orgLang.name,
        description: orgLang.description,
      },
    },
    cloneDeep(email),
    // eslint-disable-next-line security/detect-object-injection
    emailPatches[lang],
  );
  const jsonPath = resolve(
    __dirname,
    `../logo/service/email/info-${lang}.json`,
  );
  const jsonDirectory = dirname(jsonPath);
  execSync(`mkdir -p ${jsonDirectory}`);
  writeFileSync(jsonPath, JSON.stringify(data, null, 2));
});

languages.forEach((lang) => {
  const orgLang = JSON.parse(
    readFileSync(resolve(__dirname, `../info/${lang}/Organization.json`), {
      encoding: 'utf8',
    }),
  );
  const data = merge(
    {
      '@context': 'https://schema.org',
      brand: {
        name: orgLang.name,
        description: orgLang.description,
      },
    },
    cloneDeep(sita),
    // eslint-disable-next-line security/detect-object-injection
    sitaPatches[lang],
  );
  const jsonPath = resolve(__dirname, `../logo/service/sita/info-${lang}.json`);
  const jsonDirectory = dirname(jsonPath);
  execSync(`mkdir -p ${jsonDirectory}`);
  writeFileSync(jsonPath, JSON.stringify(data, null, 2));
});
