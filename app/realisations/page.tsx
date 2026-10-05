import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import Projects from "@/components/pages/Projects";

export const metadata: Metadata = pageMetadata(
  "/realisations",
  "Réalisations et exemples · Alexis Gavens",
  "Une réalisation pour une agence de communication et deux exemples de projets types : assistant IA pour artisan, logiciel de gestion pour PME de distribution.",
);

export default function Page() {
  return <Projects />;
}
