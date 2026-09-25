import type { NextConfig } from "next";

// Anciennes adresses du site précédent, redirigées (301) vers les nouvelles pages.
const legacyRedirects = [
  { source: "/formation", destination: "/formation-ia" },
  { source: "/outils", destination: "/" },
  { source: "/outils-sur-mesure", destination: "/" },
  { source: "/cas-clients", destination: "/realisations/early" },
  { source: "/a-propos-de-moi", destination: "/a-propos" },
  { source: "/contact", destination: "/" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, statusCode: 301 as const }));
  },
};

export default nextConfig;
