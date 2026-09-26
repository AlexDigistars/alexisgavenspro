import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import EarlyCase from "@/components/pages/EarlyCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/early",
  "Étude de cas Early · Alexis Gavens",
  "Comment le logiciel de gestion d'une agence de 15 personnes est devenu un outil pour chacun : saisie simplifiée pour les salariés, suivi d'équipe pour les managers, pilotage en temps réel pour la direction.",
);

export default function Page() {
  return <EarlyCase />;
}
