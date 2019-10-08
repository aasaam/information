interface Organization {
  '@type': 'Organization';
  description: string;
  name: string;
  url: string;
  logo: string;
  email: string;
  telephone: string[];
  foundingDate: string;
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

declare module '@aasaam/info' {
  export const languages: string[];
  export const Organization: Organization[];
}
