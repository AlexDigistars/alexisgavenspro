import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import About from "@/components/pages/About";

export const metadata: Metadata = pageMetadata(
  "/a-propos",
  "À propos · Alexis Gavens",
  "Alexis Gavens, ancien responsable administration des ventes et logistique devenu créateur de logiciels métier sur mesure pour PME.",
);

export default function Page() {
  return <About />;
}
