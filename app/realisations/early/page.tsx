import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import EarlyCase from "@/components/pages/EarlyCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/early",
  "Étude de cas Early · Alexis Gavens",
  "Comment un logiciel existant est devenu un vrai outil de pilotage pour une agence de 15 personnes : facturation automatique, suivi clients, équipes.",
);

export default function Page() {
  return <EarlyCase />;
}
