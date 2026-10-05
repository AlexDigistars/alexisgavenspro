import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import AgencyCase from "@/components/pages/AgencyCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/agence-communication",
  "Étude de cas : une agence de communication · Alexis Gavens",
  "Comment le logiciel de gestion d'une agence de 15 personnes est devenu un outil pour chacun : saisie simplifiée pour les salariés, suivi d'équipe pour les managers, pilotage en temps réel pour la direction.",
);

export default function Page() {
  return <AgencyCase />;
}
