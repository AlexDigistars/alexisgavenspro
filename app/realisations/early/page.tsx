import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import EarlyCase from "@/components/pages/EarlyCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/early",
  "Étude de cas Early · Alexis Gavens",
  "Comment une agence de communication a fait reprendre et enrichir son logiciel de gestion sur mesure, relié à ses outils, sans jamais l'arrêter.",
);

export default function Page() {
  return <EarlyCase />;
}
