import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import Projects from "@/components/pages/Projects";

export const metadata: Metadata = pageMetadata(
  "/realisations",
  "Réalisations · Alexis Gavens",
  "Des outils en service, utilisés chaque jour : une agence de communication, un artisan menuisier et une PME de machines à café, tous anonymisés.",
);

export default function Page() {
  return <Projects />;
}
