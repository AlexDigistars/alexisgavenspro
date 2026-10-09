// Visuels « avant / après » des trois réalisations : maquettes codées, fixes, à données fictives.
// Le même visuel sert de vignette sur /realisations (size="card") et en grand sur la page du projet (size="large").
// Tout est dessiné en « em » : la maquette garde ses proportions à toutes les tailles (voir CaseVisuals.styles.ts).
import type { CSSProperties, ReactNode } from "react";
import { CASE_VISUALS_CSS } from "./CaseVisuals.styles";

type Size = "card" | "large";

/** Noms de classe des visuels : v.frame donne « cv-frame » (styles dans CaseVisuals.styles.ts). */
const v = new Proxy({} as Record<string, string>, { get: (_, name) => `cv-${String(name)}` });

/** Styles réduits (commentaires et espaces retirés), ajoutés une seule fois dans l'en-tête de la page par React. */
const MINIFIED_CSS = CASE_VISUALS_CSS.replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{};,>])\s*/g, "$1")
  .trim();

function Frame({ size, label, before, after }: { size: Size; label: string; before: ReactNode; after: ReactNode }) {
  return (
    <div className={`${v.frame} ${size === "large" ? v.large : v.card}`} role="img" aria-label={`${label} Données fictives.`}>
      <style href="case-visuals" precedence="medium">
        {MINIFIED_CSS}
      </style>
      <div className={v.canvas} aria-hidden="true">
        <div className={v.side}>
          <span className={`${v.tag} ${v.tagBefore}`}>Avant</span>
          <div className={v.stage}>{before}</div>
        </div>
        <div className={v.side}>
          <span className={`${v.tag} ${v.tagAfter}`}>Après</span>
          <div className={v.stage}>{after}</div>
        </div>
      </div>
      <span className={v.fictive} aria-hidden="true">
        Données fictives
      </span>
    </div>
  );
}

/** Agence de communication : l'avant / après de l'accueil (« Gestion.exe » → tableau de bord). */
export function AgencyBeforeAfter({ size = "card" }: { size?: Size }) {
  return (
    <Frame
      size={size}
      label="Avant : un logiciel daté, « Gestion.exe », qui charge lentement. Après : un tableau de bord clair et à jour."
      before={
        <div className={v.old}>
          <div className={v.oldBar}>
            <span>Gestion.exe</span>
            <span className={v.oldButtons}>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
          <div className={v.oldMenu}>
            <span>Fichier</span>
            <span>Édition</span>
            <span>Clients</span>
            <span>Outils</span>
          </div>
          <div className={v.oldBody}>
            <i></i>
            <i></i>
            <i className={v.oldYellow}></i>
            <i></i>
            <i></i>
            <i></i>
            <span className={v.oldLoading}>
              <span className={v.spinner}></span>
              Chargement…
            </span>
          </div>
        </div>
      }
      after={
        <div className={v.dash}>
          <div className={v.dashHead}>
            <b>Tableau de bord</b>
            <span className={v.live}>
              <span className={v.liveDot}></span>À jour
            </span>
          </div>
          <div className={v.kpis}>
            <span>
              <small>Chiffre d&apos;affaires</small>
              <b>48,2 k€</b>
            </span>
            <span>
              <small>Marge</small>
              <b>31 %</b>
            </span>
          </div>
          <div className={v.bars}>
            {[
              ["Studio Nova", "68%"],
              ["Maison Lenoir", "42%"],
              ["Garage Ferrand", "16%"],
            ].map(([name, width], i) => (
              <span key={name} className={i === 2 ? `${v.bar} ${v.barWarn}` : v.bar}>
                <small>{name}</small>
                <i style={{ width }}></i>
              </span>
            ))}
          </div>
          <span className={v.toast}>
            <span className={v.toastIcon}>€</span>
            <span>
              <b>+ 3 240 € facturés</b> aujourd&apos;hui
            </span>
          </span>
        </div>
      }
    />
  );
}

/** Artisan menuisier : carnet de mesures et boîte mail débordante → devis préparé par l'assistant. */
export function MenuisierBeforeAfter({ size = "card" }: { size?: Size }) {
  return (
    <Frame
      size={size}
      label="Avant : un carnet de mesures griffonné et une boîte mail débordante, 14 non lus. Après : l'écran de l'assistant, avec un devis préparé pour un escalier en chêne, en brouillon à relire, et un bouton « Relire et envoyer »."
      before={
        <>
          <div className={v.notebook}>
            <span className={v.hand} style={{ fontWeight: 700, textDecoration: "underline" }}>
              Escalier chêne
            </span>
            <span className={v.hand}>14 marches</span>
            <span className={v.hand}>H. 2,62 m</span>
            <span className={v.hand}>
              giron <s>24</s> 25
            </span>
            <span className={v.hand}>rampe côté mur</span>
            <span className={v.circled}>à chiffrer !</span>
            <svg className={v.sketch} viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 46h10v-8h10v-8h10v-8h10v-8h10V6" />
              <path d="M4 46L54 6" strokeDasharray="2 3" />
              <path d="M58 8v38M55 11l3-3 3 3M55 43l3 3 3-3" />
            </svg>
          </div>
          <div className={v.mail}>
            <div className={v.mailHead}>
              <b>Boîte mail</b>
              <span className={v.unread}>14 non lus</span>
            </div>
            {["Demande de devis", "RE: RE: escalier ?", "Dispo la semaine pro ?", "Photos du chantier", "Relance : placard"].map((subject) => (
              <span key={subject} className={v.mailRow}>
                <i></i>
                {subject}
              </span>
            ))}
          </div>
        </>
      }
      after={
        <div className={v.assistant}>
          <div className={v.assistantHead}>
            <span className={v.avatar}>IA</span>
            <span className={v.assistantName}>
              <b>Assistant</b>
              <small>Devis et messages</small>
            </span>
          </div>
          <div className={v.quote}>
            <span className={v.quoteLabel}>Devis préparé</span>
            <b className={v.quoteTitle}>Escalier en chêne</b>
            <span className={v.draft}>Brouillon à relire</span>
            <span className={v.lines}>
              <i style={{ width: "88%" }}></i>
              <i style={{ width: "72%" }}></i>
              <i style={{ width: "54%" }}></i>
            </span>
            <span className={v.fromVoice}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 10a7 7 0 0 0 14 0M12 17v5" />
              </svg>
              À partir de votre note vocale
            </span>
          </div>
          <span className={v.sendButton}>Relire et envoyer</span>
        </div>
      }
    />
  );
}

/** Lignes serrées de la feuille de calcul : position et longueur des textes, variées d'une ligne à l'autre. */
const SHEET_ROWS = [0.4, 1.1, 0.2, 0.8, 1.5, 0.6, 1.2, 0.3, 0.9, 1.4, 0.5, 1, 0.7, 1.3];

/** PME de machines à café : feuille de calcul et fiches papier → fiche machine sur téléphone. */
export function CafeBeforeAfter({ size = "card" }: { size?: Size }) {
  return (
    <Frame
      size={size}
      label="Avant : une feuille de calcul « Parc_machines.xlsx » floue et serrée, et des fiches papier. Après : un téléphone qui affiche la fiche d'une machine (client, modèle, louée, dernière intervention, prochaine visite) et un bouton « Ajouter une intervention »."
      before={
        <>
          <div className={v.sheet}>
            <div className={v.sheetBar}>
              <span className={v.sheetIcon}></span>
              <b>Parc_machines.xlsx</b>
            </div>
            <div className={v.sheetFormula}></div>
            <div className={v.sheetGrid}>
              <span className={v.sheetLetters}>
                {["A", "B", "C", "D", "E", "F", "G"].map((l) => (
                  <i key={l}>{l}</i>
                ))}
              </span>
              {SHEET_ROWS.map((shift, i) => (
                <span key={i} className={v.sheetRow} style={{ "--shift": `${shift}em` } as CSSProperties}></span>
              ))}
              <span className={v.sheetMark} style={{ top: "4.6em", left: "3.4em" }}></span>
              <span className={`${v.sheetMark} ${v.sheetMarkRed}`} style={{ top: "9.9em", left: "10.8em" }}></span>
              <span className={v.sheetMark} style={{ top: "12.1em", left: "6.5em" }}></span>
            </div>
          </div>
          <div className={`${v.paper} ${v.paperBack}`}></div>
          <div className={v.paper}>
            <span className={v.clip}></span>
            <b className={v.paperTitle}>Fiche intervention</b>
            {[
              ["Machine", "62%"],
              ["Client", "74%"],
              ["Date", "40%"],
              ["Travaux", "80%"],
            ].map(([label, width]) => (
              <span key={label} className={v.paperField}>
                <small>{label}</small>
                <i style={{ width }}></i>
              </span>
            ))}
            <i className={v.paperScribble} style={{ width: "86%" }}></i>
            <i className={v.paperScribble} style={{ width: "58%" }}></i>
          </div>
        </>
      }
      after={
        <div className={v.phone}>
          <div className={v.phoneScreen}>
            <span className={v.phoneTop}>‹ Parc machines</span>
            <div className={v.machineHead}>
              <b>Machine n° 0142</b>
              <span className={v.rented}>Louée</span>
            </div>
            <dl className={v.fields}>
              {[
                ["Client", "Cabinet d'architectes"],
                ["Modèle", "Expresso 2 groupes"],
                ["Dernière intervention", "Réparation · 12 sept."],
                ["Prochaine visite", "14 novembre"],
              ].map(([label, value]) => (
                <div key={label} className={v.field}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <span className={v.addButton}>
              <span className={v.plus}>+</span>
              Ajouter une intervention
            </span>
          </div>
        </div>
      }
    />
  );
}
