import type { Metadata } from "next";
import EarlyCase from "@/components/pages/EarlyCase";

export const metadata: Metadata = {
  title: "Étude de cas Early · Alexis Gavens",
  description: "Early : un ERP repris, sécurisé et enrichi, sans jamais l'arrêter.",
  alternates: { canonical: "/realisations/early" },
};

export default function Page() {
  return <EarlyCase />;
}
