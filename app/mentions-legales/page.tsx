import type { Metadata } from "next";
import LegalNotice from "@/components/pages/LegalNotice";

export const metadata: Metadata = {
  title: "Mentions légales · Alexis Gavens",
  description: "Mentions légales du site alexisgavens.fr.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return <LegalNotice />;
}
