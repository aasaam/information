interface Person {
  '@type': 'Person';
  name: string;
  identifier: string;
  email: string;
  url: string;
  jobTitle: string;
}

interface Organization {
  '@type': 'Organization';
  description: string;
  name: string;
  url: string;
  logo: string;
  email: string;
  telephone: string[];
  foundingDate: string;
  employees: Person[];
  location: {
    '@type': 'Place';
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
  contactPoint: {
    '@type': 'ContactPoint';
    contactType: string;
    email: string;
    telephone: string;
  };
  sameAs: string[];
}

type languages = ['en', 'fa', 'ar', 'de'];

export const languages: languages;
export const Organization: {
  ar: Organization,
  de: Organization,
  en: Organization,
  fa: Organization,
};
