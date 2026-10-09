// Styles des visuels « avant / après » (CaseVisuals.tsx), injectés dans la page plutôt que dans un fichier CSS partagé :
// partagé entre plusieurs pages, un module CSS serait fusionné par la compilation dans un gros fichier commun,
// qui bloquerait l'affichage de /realisations. Toutes les classes commencent par « cv- ».
export const CASE_VISUALS_CSS = `
/* Visuels « avant / après » des réalisations (maquettes fixes, données fictives).
   Le cadre est un conteneur : toute la maquette est dessinée en « em », et la taille de police
   suit la largeur du cadre (unités cqw). Elle garde donc les mêmes proportions en vignette comme en grand.
   Repères : le cadre fait 62,5 em de large ; chaque côté (Avant, Après) fait 26 em × 31,8 em. */

.cv-frame {
  position: relative;
  container-type: inline-size;
  overflow: hidden;
  background:
    radial-gradient(120% 90% at 85% 10%, rgba(143, 208, 197, 0.12), transparent 60%),
    #0E1A2B;
  color: #F6F5F1;
}
/* Vignette hors de l'écran : le navigateur attend qu'elle approche pour la dessiner (page plus rapide à afficher) */
.cv-card {
  aspect-ratio: 16 / 10;
  content-visibility: auto;
}
.cv-large {
  aspect-ratio: 16 / 10;
  border-radius: 24px;
}

.cv-canvas {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 26em 26em;
  column-gap: 3em;
  justify-content: center;
  align-content: start;
  padding-top: 3em;
  font-size: 1.6cqw;
  line-height: 1.25;
}
.cv-side {
  position: relative;
  height: 31.8em;
}
.cv-stage {
  position: absolute;
  left: 0;
  right: 0;
  top: 3.4em;
  height: 28.4em;
}

/* Étiquettes : lisibles même en petite vignette */
.cv-tag {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.3em 0.85em;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: max(10px, 1.15em);
  line-height: 1.2;
}
.cv-tagBefore { background: rgba(255, 255, 255, 0.1); color: #C9D0DA; }
.cv-tagAfter { background: rgba(143, 208, 197, 0.18); color: #8FD0C5; }
.cv-fictive {
  position: absolute;
  right: 6cqw;
  bottom: 1.3cqw;
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.2;
  color: #A9B2BF;
}

/* En grand sur téléphone : Avant puis Après, l'un sous l'autre */
@media (max-width: 767px) {
  .cv-large { aspect-ratio: auto; }
  .cv-large .cv-canvas {
    position: relative;
    inset: auto;
    grid-template-columns: 26em;
    row-gap: 2.4em;
    padding: 2.4em 0 4.4em;
    font-size: 3.2cqw;
  }
}

/* ===================== Agence : « Gestion.exe » → tableau de bord ===================== */
.cv-old {
  position: absolute;
  left: 0;
  right: 0;
  top: 2.4em;
  height: 22em;
  display: flex;
  flex-direction: column;
  border: 0.08em solid #8E8A81;
  background:
    radial-gradient(circle at 18% 72%, rgba(90, 80, 60, 0.18) 0 0.1em, transparent 0.18em),
    radial-gradient(circle at 64% 38%, rgba(90, 80, 60, 0.16) 0 0.1em, transparent 0.18em),
    radial-gradient(circle at 82% 84%, rgba(90, 80, 60, 0.18) 0 0.14em, transparent 0.22em),
    #E2DED4;
  color: #423E37;
  font-family: Arial, Helvetica, sans-serif;
  transform: rotate(-1.5deg);
  box-shadow: 0.35em 0.35em 0 rgba(0, 0, 0, 0.35);
}
.cv-oldBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.9em;
  padding: 0 0.5em;
  background: linear-gradient(#ADA99F, #918D84);
  color: #24211C;
  font-size: 0.95em;
  font-weight: 700;
}
.cv-oldButtons { display: flex; gap: 0.25em; }
.cv-oldButtons i {
  width: 0.95em;
  height: 0.95em;
  border: 0.08em solid #625E56;
  background: #CCC8BF;
}
.cv-oldMenu {
  display: flex;
  gap: 1em;
  padding: 0.35em 0.7em;
  border-bottom: 0.08em solid #B5B1A6;
  font-size: 0.95em;
}
.cv-oldBody {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.55em;
  flex-grow: 1;
  padding: 0.9em;
}
.cv-oldBody > i {
  display: block;
  height: 1.25em;
  border: 0.08em solid #B9B5AA;
  background: repeating-linear-gradient(90deg, #D3CFC4 0 38%, #CAC6BA 38% 40%, #D3CFC4 40% 70%, #CAC6BA 70% 72%, #D3CFC4 72%);
}
.cv-oldBody > .cv-oldYellow { background: #E6DCA6; }
.cv-oldLoading {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.7em 1em;
  border: 0.08em solid #827E75;
  background: #F0ECE3;
  font-size: 1.05em;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  box-shadow: 0.2em 0.2em 0 rgba(0, 0, 0, 0.3);
}
.cv-spinner {
  width: 1.15em;
  height: 1.15em;
  border: 0.18em solid #A7A398;
  border-top-color: #423E37;
  border-radius: 50%;
}

.cv-dash {
  position: absolute;
  left: 0;
  right: 0;
  top: 2.4em;
  height: 22em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.35em;
  border-radius: 1.2em;
  background: #FFFFFF;
  color: #0E1A2B;
  box-shadow: 0 1.4em 2.4em -1.2em rgba(0, 0, 0, 0.6);
}
.cv-dashHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6em;
  font-size: 1.2em;
}
.cv-live {
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
  padding: 0.25em 0.65em;
  border-radius: 999px;
  background: #E3F1E6;
  color: #2F6B3E;
  font-size: 0.75em;
  font-weight: 600;
}
.cv-liveDot {
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  background: #2F8F5B;
  box-shadow: 0 0 0 0.3em rgba(47, 143, 91, 0.2);
}
.cv-kpis {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7em;
}
.cv-kpis span {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  padding: 0.7em 0.85em;
  border-radius: 0.85em;
  background: #F6F5F1;
}
.cv-kpis small { font-size: 0.9em; color: #5A6474; }
.cv-kpis b { font-size: 1.55em; letter-spacing: -0.02em; }
.cv-bars {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}
.cv-bar {
  display: grid;
  grid-template-columns: 8em minmax(0, 1fr);
  align-items: center;
  gap: 0.7em;
}
.cv-bar small { font-size: 0.92em; font-weight: 600; }
.cv-bar i {
  display: block;
  height: 0.6em;
  border-radius: 999px;
  background: #1D5C57;
}
.cv-barWarn i { background: #C58B2A; }
.cv-toast {
  display: flex;
  align-items: center;
  gap: 0.7em;
  margin-top: auto;
  padding: 0.75em 0.85em;
  border-radius: 0.85em;
  background: #0E1A2B;
  color: #F6F5F1;
  font-size: 0.95em;
}
.cv-toastIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.7em;
  height: 1.7em;
  border-radius: 50%;
  background: #8FD0C5;
  color: #0E1A2B;
  font-weight: 800;
}

/* ===================== Menuisier : carnet + boîte mail → devis préparé ===================== */
.cv-notebook {
  position: absolute;
  left: 0;
  top: 0.6em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15.5em;
  height: 17.5em;
  padding: 1.9em 1em 0 2.9em;
  border-radius: 0.35em;
  background:
    linear-gradient(90deg, transparent 2.15em, #E2A59C 2.15em 2.25em, transparent 2.25em),
    repeating-linear-gradient(180deg, transparent 0 1.72em, #C5D3E2 1.72em 1.8em),
    #FBF8EF;
  background-position: 0 0, 0 1.65em, 0 0;
  color: #2B4A7A;
  box-shadow: 0 1.4em 2.4em -1em rgba(0, 0, 0, 0.6);
  transform: rotate(-3.5deg);
}
/* Reliure à spirale */
.cv-notebook::before {
  content: "";
  position: absolute;
  left: 1em;
  right: 1em;
  top: -0.45em;
  height: 0.9em;
  background: radial-gradient(circle, #5A6474 0 0.28em, transparent 0.32em) 0 50% / 1.3em 0.9em repeat-x;
}
.cv-hand {
  font-size: 1.12em;
  font-style: italic;
  line-height: 1.6em;
  white-space: nowrap;
}
.cv-hand:nth-child(2) { transform: rotate(-1deg); }
.cv-hand:nth-child(4) { transform: rotate(1.2deg); }
.cv-hand s { text-decoration-thickness: 0.14em; color: #5A6474; }
.cv-circled {
  margin-top: 0.35em;
  padding: 0.15em 0.6em;
  border: 0.13em solid #A33A2F;
  border-radius: 50%;
  color: #A33A2F;
  font-size: 1.05em;
  font-style: italic;
  font-weight: 700;
  white-space: nowrap;
  transform: rotate(-5deg);
}
.cv-sketch {
  position: absolute;
  right: 0.9em;
  top: 3.9em;
  width: 4.6em;
  height: auto;
  color: #2B4A7A;
}
.cv-mail {
  position: absolute;
  right: 0;
  top: 12.4em;
  display: flex;
  flex-direction: column;
  width: 16.5em;
  padding: 0.9em 0.9em 0.5em;
  border-radius: 0.9em;
  background: #FFFFFF;
  color: #0E1A2B;
  box-shadow:
    0.55em 0.55em 0 -0.1em #C9D0DA,
    1.1em 1.1em 0 -0.2em #7D8796,
    0 1.8em 2.6em -1em rgba(0, 0, 0, 0.7);
  transform: rotate(3deg);
}
.cv-mailHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6em;
  margin-bottom: 0.4em;
  font-size: 1.05em;
}
.cv-unread {
  padding: 0.25em 0.65em;
  border-radius: 999px;
  background: #A33A2F;
  color: #FFFFFF;
  font-size: 0.95em;
  font-weight: 800;
  white-space: nowrap;
}
.cv-mailRow {
  display: flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.45em 0.2em;
  border-top: 0.08em solid #ECEAE3;
  font-size: 0.95em;
  font-weight: 700;
  white-space: nowrap;
}
.cv-mailRow i {
  flex-shrink: 0;
  width: 0.55em;
  height: 0.55em;
  border-radius: 50%;
  background: #2B57A8;
}

.cv-assistant {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.6em;
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  padding: 1.3em;
  border-radius: 1.4em;
  background: #FFFFFF;
  color: #0E1A2B;
  box-shadow: 0 2em 4em -1.6em rgba(0, 0, 0, 0.6);
}
.cv-assistantHead {
  display: flex;
  align-items: center;
  gap: 0.8em;
  padding-bottom: 0.9em;
  border-bottom: 0.08em solid #E3E1DA;
}
.cv-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6em;
  height: 2.6em;
  border-radius: 50%;
  background: #1D5C57;
  color: #FFFFFF;
  font-size: 0.95em;
  font-weight: 800;
}
.cv-assistantName { display: flex; flex-direction: column; gap: 0.1em; font-size: 1.1em; }
.cv-assistantName small { font-size: 0.82em; color: #5A6474; }
.cv-quote {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6em;
  padding: 1.2em;
  border-radius: 1em;
  background: #F6F5F1;
  box-shadow: inset 0.3em 0 0 #1D5C57;
}
.cv-quoteLabel {
  font-family: var(--font-mono);
  font-size: 0.95em;
  color: #1D5C57;
}
.cv-quoteTitle {
  font-size: 1.6em;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.cv-draft {
  padding: 0.25em 0.75em;
  border-radius: 999px;
  background: #FBEBD3;
  color: #8A4B0F;
  font-size: 0.95em;
  font-weight: 700;
}
.cv-lines {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-self: stretch;
  margin-top: 0.2em;
}
.cv-lines i {
  display: block;
  height: 0.55em;
  border-radius: 999px;
  background: #D9D6CC;
}
.cv-fromVoice {
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
  margin-top: 0.2em;
  font-size: 0.9em;
  color: #3A4556;
}
.cv-fromVoice svg { width: 1.1em; height: 1.1em; color: #1D5C57; }
.cv-sendButton {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.9em;
  border-radius: 999px;
  background: #1D5C57;
  color: #FFFFFF;
  font-size: 1.15em;
  font-weight: 700;
  box-shadow: 0 0 0 0.3em rgba(143, 208, 197, 0.35);
}

/* ===================== Machines à café : feuille de calcul + fiches → téléphone ===================== */
.cv-sheet {
  position: absolute;
  left: 0;
  top: 0.4em;
  display: flex;
  flex-direction: column;
  width: 21em;
  height: 18.5em;
  overflow: hidden;
  border: 0.08em solid #B9BDC4;
  border-radius: 0.3em;
  background: #FFFFFF;
  color: #1F2328;
  box-shadow: 0 1.4em 2.4em -1em rgba(0, 0, 0, 0.6);
  transform: rotate(-1.5deg);
}
.cv-sheetBar {
  display: flex;
  align-items: center;
  gap: 0.5em;
  height: 2em;
  flex-shrink: 0;
  padding: 0 0.7em;
  background: #E7EAEE;
  font-size: 0.95em;
}
.cv-sheetIcon {
  width: 1em;
  height: 1em;
  border-radius: 0.15em;
  background:
    linear-gradient(90deg, transparent 45%, #FFFFFF 45% 55%, transparent 55%),
    linear-gradient(180deg, transparent 45%, #FFFFFF 45% 55%, transparent 55%),
    #3F7D58;
}
.cv-sheetFormula {
  height: 1.3em;
  flex-shrink: 0;
  border-bottom: 0.08em solid #D5D9DF;
  background: linear-gradient(90deg, #F2F4F6 0 2.4em, #FFFFFF 2.4em);
}
/* Cellules serrées, volontairement floues */
.cv-sheetGrid {
  position: relative;
  flex-grow: 1;
  padding-left: 1.4em;
  background:
    linear-gradient(90deg, #F2F4F6 0 1.4em, transparent 1.4em),
    repeating-linear-gradient(90deg, transparent 0 2.75em, #D5D9DF 2.75em 2.82em),
    repeating-linear-gradient(180deg, transparent 0 1.02em, #D5D9DF 1.02em 1.09em);
  background-position: 0 0, 1.4em 0, 0 0;
  filter: blur(0.09em);
}
.cv-sheetLetters {
  display: flex;
  height: 1.09em;
  background: #F2F4F6;
}
.cv-sheetLetters i {
  width: 4.7em;
  font-size: 0.6em;
  font-style: normal;
  line-height: 1.8;
  text-align: center;
  color: #5A6474;
}
.cv-sheetRow {
  display: block;
  height: 1.09em;
  background:
    repeating-linear-gradient(90deg, #8C97A6 0 1.7em, transparent 1.7em 2.82em, #8C97A6 2.82em 3.9em, transparent 3.9em 5.64em) var(--shift, 0) 50% / 100% 0.36em no-repeat;
}
.cv-sheetMark {
  position: absolute;
  width: 2.75em;
  height: 1.02em;
  background: #F3DE8A;
  opacity: 0.9;
}
.cv-sheetMarkRed { background: #F2B8B0; }

.cv-paper {
  position: absolute;
  right: 0.3em;
  top: 10.6em;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  width: 11.5em;
  height: 15.5em;
  padding: 1.3em 1em;
  border-radius: 0.2em;
  background: #FBF8EF;
  color: #3A4556;
  box-shadow: 0 1.4em 2.4em -1em rgba(0, 0, 0, 0.7);
  transform: rotate(4.5deg);
}
.cv-paperBack {
  right: 2.8em;
  top: 12.2em;
  background:
    repeating-linear-gradient(180deg, transparent 0 1.7em, #D9D3C2 1.7em 1.78em) 0 2.4em / 100% 100% no-repeat,
    #F1ECDD;
  transform: rotate(-7deg);
}
.cv-paperTitle {
  font-family: var(--font-mono);
  font-size: 0.85em;
  font-weight: 500;
  white-space: nowrap;
}
.cv-paperField {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}
.cv-paperField small { font-size: 0.72em; color: #5A6474; }
.cv-paperField i,
.cv-paperScribble {
  display: block;
  height: 0.32em;
  border-radius: 999px;
  background: #2B4A7A;
  opacity: 0.75;
  transform: rotate(-1deg);
}
.cv-clip {
  position: absolute;
  top: -0.7em;
  right: 1.6em;
  width: 0.9em;
  height: 2.4em;
  border: 0.18em solid #A9B2BF;
  border-radius: 0.5em;
}

.cv-phone {
  position: absolute;
  left: 50%;
  top: 0;
  width: 18.6em;
  height: 28.4em;
  padding: 0.6em;
  border-radius: 2.4em;
  background: #1F2D42;
  box-shadow: 0 2.4em 4em -1.6em rgba(0, 0, 0, 0.75);
  transform: translateX(-50%);
}
.cv-phoneScreen {
  display: flex;
  flex-direction: column;
  gap: 0.9em;
  height: 100%;
  padding: 1.3em 1.1em 1.1em;
  border-radius: 1.9em;
  background: #F6F5F1;
  color: #0E1A2B;
}
.cv-phoneTop {
  font-family: var(--font-mono);
  font-size: 0.8em;
  color: #5A6474;
}
.cv-machineHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  font-size: 1.15em;
  white-space: nowrap;
}
.cv-rented {
  padding: 0.2em 0.65em;
  border-radius: 999px;
  background: #DCEAE7;
  color: #143F3C;
  font-size: 0.75em;
  font-weight: 700;
}
.cv-fields {
  display: flex;
  flex-direction: column;
  margin: 0;
  border-radius: 0.9em;
  background: #FFFFFF;
}
.cv-field {
  display: flex;
  flex-direction: column;
  gap: 0.15em;
  padding: 0.6em 0.85em;
}
.cv-field + .cv-field { border-top: 0.08em solid #ECEAE3; }
.cv-field dt { font-size: 0.78em; color: #5A6474; }
.cv-field dd { margin: 0; font-size: 1em; font-weight: 700; white-space: nowrap; }
.cv-addButton {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin-top: auto;
  height: 2.9em;
  border-radius: 999px;
  background: #1D5C57;
  color: #FFFFFF;
  font-size: 0.88em;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 0 0 0.3em rgba(143, 208, 197, 0.35);
}
.cv-plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  font-size: 1.1em;
  line-height: 1;
}
`;
