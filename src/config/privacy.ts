type PrivacyConfig = {
  lastUpdated: string;
  siteDomain: string;
  business: {
    name: string;
    owner: string;
    legalName: string;
    vatNumber: string;
    streetAddress: string;
    postalAddress: string;
  };
};

export const privacyConfig = {
  lastUpdated: "15 ottobre 2026",
  siteDomain: "landing-page-betpassion.vercel.app",
  business: {
    name: "Bar Lamanna",
    owner: "Lamanna Francesco",
    legalName: "Bar Lamanna di Lamanna Francesco",
    vatNumber: "04072230719",
    streetAddress: "Via Montesanto, 34/40",
    postalAddress: "71010 Peschici (FG)",
  },
} satisfies PrivacyConfig;
