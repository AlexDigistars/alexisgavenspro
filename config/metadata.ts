import type { Metadata } from "next";
import { SITE_NAME } from "./site";

/**
 * Métadonnées d'une page interne : canonical et og:url identiques (URL absolue
 * grâce à metadataBase), titre et description repris pour le partage.
 */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      // Image de partage du site (app/opengraph-image.tsx), à redéclarer car openGraph est remplacé ici
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alexis Gavens · Logiciels métier sur mesure pour PME" }],
    },
  };
}
