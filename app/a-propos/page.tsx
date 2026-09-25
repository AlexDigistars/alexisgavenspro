import type { Metadata } from "next";
import About from "@/components/pages/About";

export const metadata: Metadata = {
  title: "À propos · Alexis Gavens",
  description: "J'ai été l'utilisateur de ces outils avant d'en être le concepteur.",
  alternates: { canonical: "/a-propos" },
};

export default function Page() {
  return <About />;
}
