import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import LegalNotice from "@/components/pages/LegalNotice";

export const metadata: Metadata = pageMetadata(
  "/mentions-legales",
  "Mentions légales · Alexis Gavens",
  "Éditeur, hébergement et traitement des données personnelles du site alexisgavens.fr.",
);

export default function Page() {
  return <LegalNotice />;
}
