// Réglages communs du site : un seul endroit à modifier.

/** Lien de prise de rendez-vous (tous les boutons d'appel à l'action). */
export const CALENDLY_URL = "https://calendly.com/alexisgavens/20min";

export const CONTACT_EMAIL = "contact@alexisgavens.fr";
export const CONTACT_PHONE = "06 38 61 08 42";
export const CONTACT_PHONE_HREF = "tel:+33638610842";
export const LINKEDIN_URL = "https://www.linkedin.com/in/alexis-gavens-b74906130/";

/** Date de mise en ligne affichée dans les mentions légales (à ajuster le jour de la bascule). */
export const LEGAL_UPDATED_AT = "25 septembre 2026";

export const SITE_URL = "https://alexisgavens.fr";
export const SITE_NAME = "Alexis Gavens";

export const NAV_LINKS = [
  { href: "/", label: "Logiciels métier" },
  { href: "/realisations/early", label: "Réalisations" },
  { href: "/formation-ia", label: "Formation IA" },
  { href: "/a-propos", label: "À propos" },
] as const;
