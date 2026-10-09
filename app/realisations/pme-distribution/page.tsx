import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import DistributionCase from "@/components/pages/DistributionCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/pme-distribution",
  "Étude de cas : une PME de machines à café · Alexis Gavens",
  "Cette PME vend et loue des machines à café aux entreprises, livre le café en grains, et installe, répare et remplace les machines. Une activité qui mêle commerce B2B, stocks chez les fournisseurs et chez les clients, et interventions sur le terrain. Responsable de l'administration des ventes et de la logistique, j'ai conçu l'application mobile qui suit chaque machine, et automatisé les livraisons récurrentes.",
);

export default function Page() {
  return <DistributionCase />;
}
