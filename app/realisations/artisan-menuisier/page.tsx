import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import ArtisanCase from "@/components/pages/ArtisanCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/artisan-menuisier",
  "Étude de cas : un artisan menuisier et son assistant IA · Alexis Gavens",
  "Un artisan menuisier qui fabrique et pose sur mesure passait ses soirées sur les devis et les messages. J'ai configuré pour lui un assistant IA qui prend en charge l'administratif pénible, pour qu'il garde son énergie pour l'atelier et les chantiers.",
);

export default function Page() {
  return <ArtisanCase />;
}
