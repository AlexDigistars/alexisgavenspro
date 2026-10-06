import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import ArtisanCase from "@/components/pages/ArtisanCase";

export const metadata: Metadata = pageMetadata(
  "/realisations/menuisier-toulouse",
  "Étude de cas : un menuisier à Toulouse · Alexis Gavens",
  "Comment un menuisier toulousain qui travaille seul a confié ses mails et son organisation à un assistant IA, puis a gagné en visibilité avec un nouveau site et une fiche Google active.",
);

export default function Page() {
  return <ArtisanCase />;
}
