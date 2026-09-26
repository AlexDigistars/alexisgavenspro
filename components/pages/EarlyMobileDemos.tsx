// Versions mobiles (< 768 px) des démonstrations de l'étude de cas Early.
// Plutôt que de réduire un écran de bureau entier, chaque scène montre une seule
// partie utile de l'interface, en taille réelle. Données fictives.
import s from "./EarlyCase.module.css";
import m from "./EarlyMobileDemos.module.css";

const TEAM_MONDAY = [
  { name: "Camille", value: "✓ 7 h", tone: m.ok },
  { name: "Hugo", value: "À saisir", tone: m.err },
  { name: "Inès", value: "✓ 7 h", tone: m.ok },
  { name: "Karim", value: "4 h 30", tone: m.info },
  { name: "Léa", value: "✓ 7 h", tone: m.ok },
];

/** Héros : le suivi de l'équipe, réduit à la journée du lundi. */
export function EarlyHeroMobile() {
  return (
    <div className={`${m.mobileOnly} ${m.window}`}>
      <div className={m.windowBar}>
        <span className={m.windowTitle}>Early Work — Tâches</span>
        <span className={m.fictive}>DONNÉES FICTIVES</span>
      </div>
      <div className={m.windowBody}>
        <div className={m.rowBetween}>
          <span className={m.title}>Suivi de l&apos;équipe</span>
          <span className={m.meta}>Semaine 39</span>
        </div>
        <div className={m.days} aria-hidden="true">
          <span className={m.dayActive}>Lun.</span>
          <span>Mar.</span>
          <span>Mer.</span>
          <span>Jeu.</span>
          <span>Ven.</span>
        </div>
        <ul className={m.list}>
          {TEAM_MONDAY.map((person, i) => (
            <li key={person.name} className={m.teamRow}>
              <span className={m.name}>{person.name}</span>
              <span className={`${m.pill} ${person.tone} ${s.cell}`} style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "backwards" }}>
                {person.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const COMMENTS = [
  "Un clic sur le nom ouvre tout son historique",
  "Les heures manquantes en rouge, visibles tout de suite",
  "Un retour arrière partout, pour ne jamais se perdre",
];

/** Co-construction : la maquette commentée, puis validée. */
export function EarlyMockupMobile() {
  return (
    <div className={`${m.mobileOnly} ${m.beige}`}>
      <div className={m.paper}>
        <div className={m.rowBetween}>
          <span className={m.mono}>MAQUETTE · SUIVI DE L&apos;ÉQUIPE · V3</span>
        </div>
        <span className={m.meta}>3 commentaires</span>
        <ol className={m.comments}>
          {COMMENTS.map((text, i) => (
            <li key={text} className={`${m.comment} ${s.pin}`} style={{ animationDelay: `${0.4 + i * 1.2}s`, animationFillMode: "backwards" }}>
              <span className={m.commentNumber} aria-hidden="true">
                {i + 1}
              </span>
              <span className={m.commentText}>{text}</span>
            </li>
          ))}
        </ol>
        <span className={`${m.validated} ${s.pin}`} style={{ animationDelay: "4.5s", animationFillMode: "backwards" }}>
          <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
          Validé par le dirigeant
        </span>
      </div>
    </div>
  );
}

/** Navigation reliée : un clic sur un nom (action) ouvre sa fiche (résultat). */
export function EarlyNavigationMobile() {
  return (
    <div className={`${m.mobileOnly} ${m.window}`}>
      <div className={m.windowBar}>
        <span className={m.back}>← Retour</span>
        <span className={m.meta}>Tâches / Historique / Semaine 39</span>
      </div>
      <div className={m.windowBody}>
        <div className={m.rowBetween}>
          <span className={m.day}>Vendredi 25 septembre</span>
          <span className={m.meta}>8 h</span>
        </div>
        <div className={m.personRow}>
          <span className={m.avatar} aria-hidden="true">
            IM
          </span>
          <span className={m.personLink}>Inès Morel</span>
          <svg className={`${m.pointer} ${s.cur2}`} aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="#0E1A2B" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M5 3l14 8-6 2-3 6z" />
          </svg>
        </div>
        <div className={`${m.profile} ${s.pop}`}>
          <div className={m.profileHead}>
            <span className={m.avatarLarge} aria-hidden="true">
              IM
            </span>
            <span className={m.profileName}>
              <strong>Inès Morel</strong>
              <span className={m.meta}>Chargée de projet</span>
            </span>
          </div>
          <div className={m.rowBetween}>
            <span>
              <strong className={m.hours}>26 h 30</strong> <span className={m.meta}>sur 35 h</span>
            </span>
            <span className={m.meta}>76 %</span>
          </div>
          <div className={m.bar} aria-hidden="true">
            <span className={m.barFill} />
          </div>
          <div className={m.rowBetween}>
            <span className={m.meta}>Jour sans saisie</span>
            <span className={`${m.pill} ${m.err}`}>lun. 21 sept.</span>
          </div>
          <div className={m.chips}>
            <span>Voir sa semaine</span>
            <span>Voir son historique</span>
            <span>Fiche employé</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const TOOLS = ["Campagnes Meta", "Google Agenda", "47 fichiers Excel", "Pennylane"];

/** Tout centralisé : les outils, reliés au logiciel par un trait vertical. */
export function EarlyHubMobile() {
  return (
    <div className={`${m.mobileOnly} ${m.beige}`}>
      <div className={m.hub}>
        <svg className={m.trunk} aria-hidden="true" focusable="false" preserveAspectRatio="none" viewBox="0 0 2 100">
          <path className={s.flow} d="M1 0V100" stroke="#1D5C57" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
        <ul className={m.tools}>
          {TOOLS.map((tool) => (
            <li key={tool} className={m.tool}>
              {tool}
            </li>
          ))}
        </ul>
        <div className={m.core}>
          <span className={`${m.coreDot} ${s.pulse}`} aria-hidden="true" />
          <span className={m.coreTitle}>Le logiciel</span>
          <span className={m.coreText}>tout au même endroit</span>
        </div>
      </div>
    </div>
  );
}
