# Brief Claude Code — Réalisations : uniquement du vrai, et du visuel

> **Pour Claude Code.** Dépôt `AlexDigistars/alexisgavenspro` (site https://alexisgavens.fr, projet Vercel `alexisgavens-pro`).
> **Modèle : Sonnet.** Réponds en **français**, phrases simples. Alexis n'est pas développeur.

## Pourquoi ce brief

La page `/realisations` présente trois projets. Ils deviennent :

| Aujourd'hui | Demain |
|---|---|
| Agence de communication (réelle, anonyme) | **Inchangée**, avec un visuel avant/après |
| « Un artisan électricien et son assistant IA » (vrai projet, **mais le métier est faux** : c'est un menuisier) | **Un artisan menuisier et son assistant IA** : le même vrai client, anonyme, avec le bon métier |
| « Une PME de distribution » (réelle, mais texte inexact) | **Une PME de machines à café** : même entreprise, anonyme, avec le vrai périmètre |

Les trois réalisations restent **anonymes**, comme l'agence.

## Règles (obligatoires)

1. Crée la branche **`realisations-reelles`** à partir de `main`. **Ne fusionne jamais dans `main`.**
2. Un seul lot. À la fin : `npm run build` sans erreur, commit, push, puis donne à Alexis :
   - ce qui a été fait (3 à 5 lignes) ;
   - l'URL du préaperçu Vercel de la branche et ce qu'il faut regarder ;
   - le commit au format GitHub Desktop (**Résumé** + **Description**).
3. Aucune nouvelle dépendance. Ne touche à aucun réglage Vercel, DNS ou Calendly.
4. Garde l'identité du site : papier `#F6F5F1`, encre `#0E1A2B`, vert pétrole `#1D5C57`, accent `#8FD0C5`, Schibsted Grotesk et IBM Plex Mono.
5. **Honnêteté :** aucun chiffre de résultat, aucune citation, aucune fonctionnalité qui ne figure pas dans ce brief. Les données des maquettes sont fictives et étiquetées « Données fictives ».
6. **Anonymat :** aucun nom d'entreprise, de client, de salarié, de ville ni de logo pour les trois réalisations. Aucune occurrence d'« Early », « Joseph », « Herbinet », « Cawatoès », « ManufactureVB », « Atelier AN » ni « Trimbour ».

## 1. Les adresses

- `/realisations/artisan-electricien` devient **`/realisations/artisan-menuisier`** (section 4). Ajoute une **redirection permanente (308)** de l'ancienne adresse vers la nouvelle (`redirects()` dans `next.config`).
- `/realisations/pme-distribution` **garde son adresse** et est réécrite (section 3).
- Tu peux réutiliser les composants visuels des deux anciennes pages (note vocale → devis, commandes, livraisons) en les adaptant. **Les textes viennent uniquement de ce brief.** Toute fonctionnalité des anciennes pages qui n'y figure pas est retirée (par exemple l'alerte de rupture de stock ou l'envoi des factures au logiciel comptable).
- Plus aucune occurrence d'« électricien », « Exemple type » ni « scénario type » sur le site, métadonnées comprises. Mets à jour le `sitemap.xml`.

## 2. Page `/realisations`

- Titre : « Réalisations ». Sous-titre : « Des outils en service, utilisés chaque jour. »
- Fond clair (`#F6F5F1`), cartes blanches. Plus de cartes sombres sans image.
- Chaque carte : **visuel avant/après** en haut (vignette fixe, ratio 16/10), puis l'étiquette, le titre, **une ligne** de résultat, le lien vers la page du projet.
- Grille : carte 1 en pleine largeur, cartes 2 et 3 côte à côte. Une seule colonne sous 900 px.

**Carte 1 — Agence de communication** → `/realisations/agence-communication`
- Étiquette : « Réalisation · client anonymisé ».
- Titre : « Une agence de communication, 15 personnes ».
- Ligne : « Un logiciel de gestion repris et enrichi : saisie du temps simplifiée, factures préparées, alertes de production. »
- Visuel : l'avant/après de l'accueil (« Gestion.exe » → tableau de bord).

**Carte 2 — Artisan menuisier** → `/realisations/artisan-menuisier`
- Étiquette : « Réalisation · client anonymisé ».
- Titre : « Un artisan menuisier et son assistant IA ».
- Ligne : « Moins de soirées sur les devis, des demandes traitées plus vite, plus de temps à l'atelier. »
- Visuel avant/après (maquette codée, données fictives) :
  - **Avant** : un carnet de mesures griffonné et une boîte mail débordante (« 14 non lus ») ;
  - **Après** : l'écran de l'assistant avec « Devis préparé · Escalier en chêne · brouillon à relire » et un bouton « Relire et envoyer ».

**Carte 3 — PME de machines à café** → `/realisations/pme-distribution`
- Étiquette : « Réalisation · en poste, entreprise anonymisée ». Ce projet date du poste d'Alexis de responsable ADV et logistique : ne le présente pas comme une mission de freelance.
- Titre : « Une PME de machines à café : le parc dans la poche ».
- Ligne : « Vente, location, café en grains et interventions : une application mobile pour gérer le parc de machines, utilisée chaque jour par l'équipe. »
- Visuel avant/après (maquette codée, données fictives) :
  - **Avant** : une feuille de calcul « Parc_machines.xlsx » floue et serrée, quelques fiches papier ;
  - **Après** : un téléphone affichant la fiche d'une machine (client, modèle, vendue ou louée, dernière intervention, prochaine visite) et un bouton « Ajouter une intervention ».

## 3. Page `/realisations/pme-distribution`, réécrite

Environ 250 mots, sur le modèle visuel de l'étude de cas de l'agence, sans la recopier :

1. **En-tête** : étiquette « Réalisation · en poste, entreprise anonymisée », titre « Le parc de machines dans la poche. », chapeau :
   « Cette PME vend et loue des machines à café aux entreprises, livre le café en grains, et installe, répare et remplace les machines. Une activité qui mêle commerce B2B, stocks chez les fournisseurs et chez les clients, et interventions sur le terrain. Responsable de l'administration des ventes et de la logistique, j'ai conçu l'application mobile qui suit chaque machine, et automatisé les livraisons récurrentes. »
   Sous le chapeau, 4 pastilles : « Vente », « Location », « Café en grains », « Installation et réparation ». Bouton « Réserver 20 min ».
2. **En 30 secondes** (encadré à trois colonnes) :
   - **Avant** : « Les informations sur chaque machine étaient réparties entre plusieurs fichiers et échanges. »
   - **Ce que j'ai fait** : « Une application mobile pour retrouver chaque machine, son client et son historique, et des livraisons récurrentes qui partent sans ressaisie. »
   - **Après** : « L'équipe l'utilise chaque jour, au bureau comme sur le terrain. »
3. **Avant / après** : le visuel de la carte, en grand.
4. **Ce que fait l'application** (3 points avec icône) : « Chaque machine a sa fiche : client, modèle, vendue ou louée, emplacement, historique. » ; « Installations, réparations et remplacements s'ajoutent depuis le terrain, photo comprise. » ; « Les livraisons récurrentes de café se préparent toutes seules. »
5. **Bloc final** : « Votre parc, vos interventions, vos livraisons : parlons-en. » + « Réserver 20 min ».

Métadonnées : titre « Étude de cas : une PME de machines à café · Alexis Gavens », description reprenant le chapeau.

## 4. Nouvelle page `/realisations/artisan-menuisier`

Environ 250 mots. Le sujet n'est **pas** le site internet de l'artisan : c'est **l'assistant IA** qui le décharge des tâches pénibles.

1. **En-tête** : étiquette « Réalisation · client anonymisé », titre « Un assistant IA pour sortir des devis du soir. », chapeau :
   « Un artisan menuisier qui fabrique et pose sur mesure passait ses soirées sur les devis et les messages. J'ai configuré pour lui un assistant IA qui prend en charge l'administratif pénible, pour qu'il garde son énergie pour l'atelier et les chantiers. »
   Bouton « Réserver 20 min ».
2. **En 30 secondes** (encadré à trois colonnes) :
   - **Avant** : « Les devis se tapaient le soir, les demandes attendaient la fin des chantiers, les relances passaient à la trappe. »
   - **Ce que j'ai fait** : « Un assistant IA configuré pour son métier, relié à sa messagerie, à son agenda et à ses modèles de devis. »
   - **Après** : « Moins d'administratif, des réponses plus rapides, davantage de demandes de devis traitées. »
3. **Avant / après** : le visuel de la carte, en grand.
4. **Ce que fait l'assistant** (4 points avec icône) :
   - « Il prépare un brouillon de devis à partir de ses notes, de ses mesures ou d'une note vocale. »
   - « Il trie les demandes reçues et propose une réponse. »
   - « Il relance les devis restés sans réponse. »
   - « Il résume la journée et les rendez-vous du lendemain. »
   Puis, en évidence : « Rien ne part sans sa validation : l'artisan relit et envoie. »
5. **Ce que ça change** (3 pastilles, sans chiffres) : « Du temps gagné chaque semaine » ; « Plus de devis envoyés » ; « Moins de pénibilité ».
6. **Bloc final** : « Vous aussi, vous faites vos devis le soir ? Parlons-en. » + « Réserver 20 min ».

Métadonnées : titre « Étude de cas : un artisan menuisier et son assistant IA · Alexis Gavens », description reprenant le chapeau. Ajoute la page au `sitemap.xml`.

## 5. À propos et accueil

- `/a-propos` : dans la frise, l'entrée « Responsable administration des ventes (ADV) & logistique » reçoit un lien « Voir l'application du parc de machines → » vers `/realisations/pme-distribution`. Pas de nom d'entreprise.
- Accueil : le lien « Voir mes autres réalisations → » mène toujours à `/realisations`. Rien d'autre ne change sur l'accueil dans ce lot.

## 6. Vérifications avant de rendre la main

1. `/realisations/artisan-electricien` redirige vers `/realisations/artisan-menuisier`.
2. Aucune des occurrences interdites (règle 6, « électricien », « Exemple type ») dans le site rendu, le code, les métadonnées et le `sitemap.xml`.
3. `/realisations`, `/realisations/artisan-menuisier` et `/realisations/pme-distribution` à 390 px et 1440 px : pas de texte coupé, pas de défilement horizontal.
4. Lighthouse sur `/realisations` : pas de baisse par rapport à `main`.
