type StructuredDataValue = Record<string, unknown>;

type StructuredDataScriptProps = {
  data: StructuredDataValue | StructuredDataValue[];
};

export function StructuredDataScript({ data }: StructuredDataScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function createOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MakingLifeEasie",
    url: "https://go.makinglifeeasie.com",
    brand: {
      "@type": "Brand",
      name: "Kinly",
    },
  };
}

export function createWebSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MakingLifeEasie",
    url: "https://go.makinglifeeasie.com",
    publisher: {
      "@type": "Organization",
      name: "MakingLifeEasie",
    },
  };
}

export function createSoftwareApplicationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kinly",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    url: "https://go.makinglifeeasie.com/kinly/general",
    downloadUrl: "https://go.makinglifeeasie.com/kinly/get",
    description:
      "Kinly is a shared living app from MakingLifeEasie that helps shared homes stay calm, visible, and lighter.",
    publisher: {
      "@type": "Organization",
      name: "MakingLifeEasie",
    },
  };
}

export function createCollectionPageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kinly shared living situations",
    url: "https://go.makinglifeeasie.com/kinly/market",
    about: {
      "@type": "SoftwareApplication",
      name: "Kinly",
    },
  };
}
