import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import Diagnostic from "@/components/pages/Diagnostic";

export const metadata: Metadata = pageMetadata(
  "/diagnostic",
  "Diagnostic gratuit de 20 minutes · Alexis Gavens",
  "20 minutes en visio pour repérer ce qui vous fait perdre du temps et ce qu'un logiciel sur mesure changerait dans votre PME.",
);

export default function Page() {
  return <Diagnostic />;
}
