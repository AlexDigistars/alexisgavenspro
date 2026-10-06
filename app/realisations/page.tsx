import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import Projects from "@/components/pages/Projects";

export const metadata: Metadata = pageMetadata(
  "/realisations",
  "Réalisations · Alexis Gavens",
  "Trois réalisations pour des clients anonymisés : une agence de communication, un menuisier à Toulouse et une PME de distribution à Paris.",
);

export default function Page() {
  return <Projects />;
}
