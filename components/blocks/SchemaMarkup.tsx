import React from 'react';
import { Helmet } from 'react-helmet';
import { FAQItem } from './ShortFAQ';

interface SchemaMarkupProps {
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
  faqs?: FAQItem[];
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ pageUrl, pageTitle, pageDescription, faqs }) => {
  const baseUrl = "https://www.deteccionesadolfogonzales.cl";
  const currentUrl = `${baseUrl}${pageUrl}`;

  // LocalBusiness & Organization Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization", "Service"],
    "name": "Detecciones Adolfo Gonzales",
    "image": `${baseUrl}/logo.png`, // Assuming a logo exists
    "description": "Especialistas en detección de fugas de agua con tecnología y certificación SEC en Concepción.",
    "url": baseUrl,
    "telephone": "+56966795221",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Concepción",
      "addressRegion": "Biobío",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -36.820135,
      "longitude": -73.044390
    },
    "areaServed": [
      "Concepción", "San Pedro de la Paz", "Talcahuano", 
      "Chiguayante", "Hualpén", "Penco", "Tomé", "Lota"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": currentUrl,
    "name": pageTitle,
    "description": pageDescription,
    "publisher": {
      "@id": `${baseUrl}/#organization`
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle,
        "item": currentUrl
      }
    ]
  };

  // FAQPage Schema
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.extendedAnswer ? `${faq.shortAnswer} ${faq.extendedAnswer}` : faq.shortAnswer
        }
      }))
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SchemaMarkup;
