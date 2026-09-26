import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import FormationIA from "@/components/pages/FormationIA";

export const metadata: Metadata = pageMetadata(
  "/formation-ia",
  "Formation IA pour les équipes · Alexis Gavens",
  "Formations IA de 1 à 3 jours pour les équipes de PME, construites sur leurs vraies tâches du quotidien.",
);

export default function Page() {
  return <FormationIA />;
}
