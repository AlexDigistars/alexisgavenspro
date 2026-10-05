import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import ArtisanCase from "@/components/pages/ArtisanCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/artisan-electricien",
  "Étude de cas : un artisan électricien · Alexis Gavens",
  "Comment un électricien qui travaille seul a confié la préparation de ses devis, de ses relances et de son résumé de journée à un assistant IA relié à ses outils.",
);

export default function Page() {
  return <ArtisanCase />;
}
