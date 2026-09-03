import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE,
  PHONE,
  EMAIL,
  ADDRESS,
  OPENING_HOURS,
  SOCIAL_URLS,
} from "@/constants/constants";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const Seo = ({
  title,
  description = "iTEK Computers in Chennai provides laptop repair, desktop repair, data recovery, virus removal, motherboard repair, OS installation and CCTV installation with fast diagnosis, genuine parts and doorstep pickup.",
  keywords = "Laptop Repair Chennai, Computer Repair Chennai, Desktop Repair Chennai, Data Recovery Chennai, Virus Removal Chennai, Motherboard Repair Chennai, OS Installation Chennai, CCTV Installation Chennai, SSD Upgrade Chennai, Laptop Service OMR",
  image = OG_IMAGE,
  url = SITE_URL,
}: SeoProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const sameAs = Object.values(SOCIAL_URLS).filter((link) => link && link !== "#");

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    name: SITE_NAME,
    image: `${SITE_URL}${image}`,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry,
    },
    url: SITE_URL,
    openingHours: OPENING_HOURS,
    areaServed: "Chennai, Tamil Nadu",
    sameAs,
    description,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="12.9645882;80.2442375" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  );
};

export default Seo;
