type PrivacyConfig = {
  lastUpdated: string;
  siteDomain: string;
  retentionAndTransfersToVerify: string;
  business: {
    name: string;
    legalName: string;
    vatNumber: string;
    registeredOffice: string;
    privacyContact: string;
  };
  concessionairePrivacyNotice: string;
  whatsapp: {
    deletionProcedure: string;
    documentRecipients: string;
    legalBasisAndRole: string;
  };
  providers: {
    other: string;
    internationalTransfers: string;
  };
  retention: {
    navigation: string;
    infrastructureLogs: string;
    whatsappMessages: string;
    identityDocuments: string;
  };
};

/** Bozza: completare e verificare questi dati prima della pubblicazione. */
export const privacyConfig = {
  lastUpdated: "[DATA]",
  siteDomain: "landing-page-betpassion.vercel.app",
  retentionAndTransfersToVerify: "[VERIFICARE DURATE DI CONSERVAZIONE, DESTINATARI E GARANZIE DEGLI EVENTUALI TRASFERIMENTI]",
  business: {
    name: "Bar Lamanna",
    legalName: "[DA INSERIRE]",
    vatNumber: "[DA INSERIRE]",
    registeredOffice: "[DA INSERIRE]",
    privacyContact: "[RECAPITO PRIVACY DA INSERIRE]",
  },
  concessionairePrivacyNotice: "[LINK DA INSERIRE]",
  whatsapp: {
    deletionProcedure: "[DA PRECISARE]",
    documentRecipients: "[DA VERIFICARE]",
    legalBasisAndRole: "[DA VERIFICARE]",
  },
  providers: {
    other: "[DA VERIFICARE]",
    internationalTransfers: "[DA VERIFICARE]",
  },
  retention: {
    navigation: "[DA VERIFICARE]",
    infrastructureLogs: "[DA VERIFICARE]",
    whatsappMessages: "[DA VERIFICARE]",
    identityDocuments: "Eliminati dopo l’identificazione secondo la procedura dichiarata, salvo eventuali obblighi applicabili e previa verifica delle modalità di cancellazione.",
  },
} satisfies PrivacyConfig;
