// Copyright (c) 2021 aasaam software development group

interface Organization {
  "@context": "https://schema.org";
  '@type': 'Organization';
  description: string;
  name: string;
  url: string;
  logo: string;
  email: string;
  telephone: string[];
  foundingDate: string;

  identifier: [
    {
      '@type': 'PropertyValue';
      name: 'nationalIdentifier';
      value: string;
    },
    {
      '@type': 'PropertyValue';
      name: 'economicCode';
      value: string;
    },
    {
      '@type': 'PropertyValue';
      name: 'registerNumber';
      value: string;
    },
  ];

  mainEntityOfPage: {
    keywords: string;
  };
  location: {
    '@type': 'Place';
    additionalProperty: {
      '@type': 'PropertyValue';
      name: string;
      value: string;
    };
    geo: {
      '@type': 'GeoCoordinates';
      latitude: number;
      longitude: number;
    };
  };
  address: {
    '@type': 'PostalAddress';
    addressCountry: string;
    addressRegion: string;
    postalCode: string;
    addressLocality: string;
  };
  contactPoint: [
    {
      '@type': 'ContactPoint';
      contactType: string;
      email: string;
      telephone: string;
    },
  ];
  sameAs: string[];
}

interface Service {
  '@context': 'https://schema.org';
  '@type': 'Product';
  brand: {
    name: string;
    description: string;
  },
  logo: string;
  image: string;
  name: string;
  description: string;
  offers: {
    '@type': 'Demand';
    availability: 'https://schema.org/OnlineOnly';
    url: string;
  }
}

type languages = ['en', 'fa', 'ar', 'de'];

export const languages: languages;

export const Organization: {
  ar: Organization,
  de: Organization,
  en: Organization,
  fa: Organization,
};

export const Service: {
  cms: {
    fa: Service,
    en: Service,
  },
  htm: {
    fa: Service,
    en: Service,
  },
  dns: {
    fa: Service,
    en: Service,
  },
  email: {
    fa: Service,
    en: Service,
  },
  sita: {
    fa: Service,
    en: Service,
  },
};
