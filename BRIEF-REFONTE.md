# Brief Claude Code — Refonte du site alexisgavens.fr

> **Pour Claude Code.** Tu es l'exécutant. Alexis valide chaque lot avant de passer au suivant.
> **Modèle : Sonnet** pour tout le développement. Seule exception : le **lot 0** (contrôle de sécurité) se fait avec **Opus**.
> Réponds et commente en **français**.

---

## 1. Contexte

- Site vitrine d'Alexis Gavens, entrepreneur individuel : **logiciels métier sur mesure pour PME** + **formation IA**.
- Le dépôt `AlexDigistars/alexisgavenspro` ne contient que ce brief et `design-reference/` : **on part de zéro**. Crée un projet **Next.js récent** (App Router, TypeScript, CSS global + CSS Modules, **sans Tailwind**) à la racine du dépôt.
- L'ancien site reste en ligne sur **https://alexisgavens.fr** (projet Vercel `alexisgavens-site`) jusqu'à la bascule finale. **Ne touche à aucun réglage DNS ni domaine.**
- Alexis reliera ce dépôt à un **nouveau projet Vercel** (`alexisgavens-pro`) pour obtenir des préaperçus ; le domaine ne sera déplacé qu'après validation du lot 6.
- On **remplace entièrement** le contenu et le design actuels par les maquettes du dossier `design-reference/`.
- Les maquettes HTML sont la **source de vérité** pour les textes, la mise en page, les couleurs et les animations. Reprends les textes **mot pour mot**.
  - Dans `AccueilV2.html`, `{{accent}}` vaut `#1D5C57`.
  - Les liens `*.dc.html` des maquettes correspondent aux routes ci-dessous.
  - Les balises `<x-dc>` et `<helmet>` sont propres à l'outil de maquette : ignore-les, garde leur contenu.

## 2. Règles de travail (obligatoires)

1. Le dépôt est vierge : le lot 1 peut être commité sur `main` (rien n'est en production depuis ce dépôt). À partir du lot 2, travaille sur la branche **`refonte-2026`** ; ne fusionne jamais toi-même dans `main`.
2. Un lot à la fois. À la fin de chaque lot : `npm run build` sans erreur, puis **arrête-toi** et donne à Alexis :
   - ce qui a été fait, en 3 à 5 lignes simples ;
   - comment vérifier (URL de préaperçu Vercel de la branche, ou `npm run dev` + adresse locale) ;
   - un commit au **format GitHub Desktop** : un **Résumé** (une ligne) et une **Description** (quelques lignes).
   - **Session cloud (app Claude, onglet Code)** : fais toi-même ce commit avec ce Résumé et cette Description, pousse, et indique à Alexis où voir le préaperçu Vercel (onglet Deployments du projet `alexisgavens-pro`). Ne fusionne **jamais** `refonte-2026` dans `main` : c'est Alexis qui le fera à la fin, après validation.
3. Chaque commande que tu demandes à Alexis de taper : précise **dans quel terminal** (ex. « Terminal Mac, dans le dossier du site »).
4. Aucune nouvelle dépendance payante. Le moins de dépendances possible : animations en **CSS pur** + un petit `IntersectionObserver`, pas de bibliothèque d'animation.
5. Ne jamais afficher de noms réels de clients ou de salariés d'Early autres que « Early » et « Joseph Herbinet » (déjà dans les maquettes). Toutes les données d'interface sont fictives.
6. Ne dessine aucun logo de marque (Pennylane, Gmail, Meta…) : garde les pastilles texte + icônes génériques des maquettes.

## 3. Lot 0 — Contrôle de sécurité (avec **Opus**)

Contexte : un précédent projet a subi un code malveillant caché dans `postcss.config.js` et un `npm` global piégé.
- Vérifie que `node` et `npm` de l'environnement sont des installations normales (`which npm`, `npm -v`, taille de `npm/lib/cli.js` : quelques centaines d'octets, pas des centaines de kilo-octets).
- Vérifie que le dépôt ne contient que `BRIEF-REFONTE.md` et `design-reference/` (6 fichiers HTML + 1 photo) et qu'aucun script n'y est caché.
- Après la création du projet Next.js (lot 1) : relis `package.json` et les fichiers de configuration générés, et signale tout code obscurci, blob encodé, `child_process` ou appel réseau inattendu.
- Rends un verdict clair : **feu vert / feu rouge**. Si rouge : on s'arrête et Alexis revient vers Cowork.

## 4. Système visuel

**Couleurs (variables CSS globales)**

| Rôle | Valeur |
|---|---|
| Fond papier | `#F6F5F1` |
| Fond secondaire | `#ECEAE3` |
| Encre (texte, fonds sombres) | `#0E1A2B` |
| Sombre secondaire | `#16253B` |
| Accent vert pétrole | `#1D5C57` |
| Accent clair (sur fond sombre) | `#8FD0C5` |
| Teinte accent | `#DCEAE7` |
| Texte secondaire | `#3A4556` / `#5A6474` |
| Statuts (interfaces fictives) | vert `#E3F1E6/#2F6B3E`, ambre `#FBEBD6/#9A5B12`, rouge `#FBE3E1/#A33A2F`, bleu `#E2ECFB/#2B57A8` |

**Polices** via `next/font/google` : **Schibsted Grotesk** (400 à 800) pour tout le texte, **IBM Plex Mono** (400, 500) pour les petites étiquettes.
Titres : graisse 700, interlettrage négatif (≈ -0.035em), comme dans les maquettes.
Rayons : cartes 18 à 24 px, boutons en pilule (999 px). Pas de dégradés, pas d'orange.

## 5. Pages et routes

| Route | Maquette | Notes |
|---|---|---|
| `/` | `AccueilV2.html` (+ `AccueilMobile.html` pour le mobile) | page principale |
| `/realisations/early` | `EtudeCasEarly.html` | étude de cas |
| `/formation-ia` | `FormationIA.html` | |
| `/a-propos` | `APropos.html` | photo : `public/alexis-portrait.jpg` |
| `/mentions-legales` | `MentionsLegales.html` | |

- Ajoute des **redirections 301** depuis les anciennes URL probables de l'ancien site (`/formation`, `/outils`, `/outils-sur-mesure`, `/cas-clients`, `/a-propos-de-moi`, `/contact`) vers les nouvelles pages équivalentes (ou `/`).
- En-tête commun : logo « AG » + « Alexis Gavens », liens Logiciels métier (`/`), Réalisations, Formation IA, À propos, bouton « Parlons de votre projet ». Sur mobile : bouton menu (44×44 px) qui ouvre un panneau plein écran.
- Pied de page commun : © 2026 Alexis Gavens · Entrepreneur individuel, Mentions légales, LinkedIn (`https://www.linkedin.com/in/alexis-gavens-b74906130/`).

## 6. Contact et prise de rendez-vous

- Constante unique `CALENDLY_URL` (fichier de config) : **https://calendly.com/alexisgavens/20min**. Tous les boutons « Réserver 20 min », « Réserver un créneau », « Organiser une formation », « Parlons de votre projet » ouvrent ce lien (nouvel onglet ; ou widget popup Calendly si simple et léger).
- E-mail affiché partout : **contact@alexisgavens.fr** (remplace le gmail des maquettes). Téléphone : 06 38 61 08 42 (lien `tel:`).
- Mentions légales : remplace `[contact@alexisgavens.fr]` par l'adresse, et `[date de mise en ligne]` par la date du jour de mise en production.

## 7. Animations

- Reprends les `@keyframes` des maquettes (carte qui avance dans le kanban, notification, signature, cartes flottantes, audit ✕ → ✓, process repensé, curseur et fiche qui s'ouvre, flux du schéma « tout centralisé », etc.).
- Chaque animation **démarre quand son bloc entre à l'écran** (IntersectionObserver qui ajoute une classe `is-visible`) et peut boucler ensuite.
- `@media (prefers-reduced-motion: reduce)` : toutes les animations coupées, état final affiché.
- Aucune animation ne doit décaler la mise en page (utiliser `transform` / `opacity`).

## 8. Mobile

- Points de rupture : < 768 px (mobile), 768–1100 (tablette), > 1100 (bureau).
- Mobile = `AccueilMobile.html` : avant/après en une carte qui bascule, carrousels **à glisser** (CSS `scroll-snap`, points indicateurs) pour « Créer, repenser, améliorer » et « Simple, clair, relié », bloc Early en 4 tuiles, CTA mi-page, méthode en frise verticale.
- Les autres pages : empilement vertical propre, grilles en 1 colonne, textes lisibles (≥ 15 px), zones cliquables ≥ 44 px.

## 9. Référencement, mesure, qualité

- `metadata` par page (titre, description), `lang="fr"`, URL canonique `https://alexisgavens.fr/...`, `sitemap.xml`, `robots.txt`, image de partage (Open Graph) sobre aux couleurs du site.
- Titre de l'accueil : « Alexis Gavens · Logiciels métier sur mesure pour PME ».
- **Vercel Analytics** (`@vercel/analytics`), sans cookie (cohérent avec les mentions légales).
- Objectif Lighthouse ≥ 90 partout (performance, accessibilité, SEO). Contrastes AA, `alt` sur les images, vrais `<button>` / `<a>`.

## 10. Découpage en lots

| Lot | Contenu | Modèle |
|---|---|---|
| 0 | Contrôle de sécurité du dépôt et de npm | **Opus** |
| 1 | Création du projet Next.js, polices, couleurs, mise en page commune (en-tête, pied de page, menu mobile), constante Calendly — commit sur `main` | Sonnet |
| 2 | Accueil bureau (toutes les sections + animations) | Sonnet |
| 3 | Accueil mobile et tablette | Sonnet |
| 4 | Étude de cas Early | Sonnet |
| 5 | Formation IA, À propos, Mentions légales + redirections | Sonnet |
| 6 | SEO, Analytics, Lighthouse, relecture finale | Sonnet |

Après le lot 6 et la validation d'Alexis : Alexis fusionne `refonte-2026` dans `main`, puis Cowork le guide pour déplacer le domaine alexisgavens.fr de l'ancien projet Vercel vers `alexisgavens-pro`.
