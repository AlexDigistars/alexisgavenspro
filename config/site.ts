// Réglages communs du site : un seul endroit à modifier.

/** Prise de rendez-vous directe : « Je préfère réserver directement » (diagnostic) et boutons de la page Formation IA. */
export const CALENDLY_URL = "https://calendly.com/alexisgavens/20min";

/** Page de diagnostic : destination de tous les boutons d'appel à l'action du site. */
export const DIAGNOSTIC_PATH = "/diagnostic";

/** Formulaire Tally intégré à la page de diagnostic (publié sur https://tally.so/r/gDR0RD). */
export const TALLY_FORM_ID = "gDR0RD";

/**
 * Mini-formulaire Tally de la page Formation IA (bloc « Parlons de votre équipe »).
 * À renseigner avec l'identifiant du formulaire une fois créé dans Tally (ex. : "abc123") ;
 * tant qu'il est vide, le message « Formulaire bientôt disponible » s'affiche.
 */
export const TALLY_TRAINING_FORM_ID = "";

export const CONTACT_EMAIL = "contact@alexisgavens.fr";
export const CONTACT_PHONE = "06 38 61 08 42";
export const CONTACT_PHONE_HREF = "tel:+33638610842";
export const LINKEDIN_URL = "https://www.linkedin.com/in/alexis-gavens-b74906130/";

/** Date de mise en ligne affichée dans les mentions légales (à ajuster le jour de la bascule). */
export const LEGAL_UPDATED_AT = "5 octobre 2026";

export const SITE_URL = "https://alexisgavens.fr";
export const SITE_NAME = "Alexis Gavens";

export const NAV_LINKS = [
  { href: "/", label: "Logiciels métier" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/formation-ia", label: "Formation IA" },
  { href: "/a-propos", label: "À propos" },
] as const;
