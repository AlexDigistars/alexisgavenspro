import type { Metadata } from "next";
import FormationIA from "@/components/pages/FormationIA";

export const metadata: Metadata = {
  title: "Formation IA pour les équipes · Alexis Gavens",
  description: "Vos équipes formées à l'IA, sur leur vrai travail.",
  alternates: { canonical: "/formation-ia" },
};

export default function Page() {
  return <FormationIA />;
}
