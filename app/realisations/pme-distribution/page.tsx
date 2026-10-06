import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import DistributionCase from "@/components/pages/DistributionCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/pme-distribution",
  "Étude de cas : une PME de distribution à Paris · Alexis Gavens",
  "Comment une PME de distribution parisienne a relié commandes, stock et factures dans un seul logiciel de gestion, avec une alerte avant chaque rupture.",
);

export default function Page() {
  return <DistributionCase />;
}
