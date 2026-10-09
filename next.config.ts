import type { NextConfig } from "next";

// Anciennes adresses du site précédent, redirigées (301) vers les nouvelles pages.
const legacyRedirects = [
  { source: "/formation", destination: "/formation-ia" },
  { source: "/outils", destination: "/" },
  { source: "/outils-sur-mesure", destination: "/" },
  { source: "/cas-clients", destination: "/realisations/agence-communication" },
  { source: "/a-propos-de-moi", destination: "/a-propos" },
  { source: "/contact", destination: "/" },
];

// Réalisations : adresse renommée, puis toute ancienne adresse de réalisation qui n'existe plus
// renvoie vers la liste (redirections permanentes, 308). Aucun nom de client dans les adresses.
const projectRedirects = [
  { source: "/realisations/artisan-electricien", destination: "/realisations/artisan-menuisier" },
  { source: "/realisations/:slug((?!agence-communication|artisan-menuisier|pme-distribution).+)", destination: "/realisations" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyRedirects.map((r) => ({ ...r, statusCode: 301 as const })),
      ...projectRedirects.map((r) => ({ ...r, permanent: true })),
    ];
  },
};

export default nextConfig;
