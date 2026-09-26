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

/** Managers : le suivi de l'équipe, réduit à la journée du lundi. */
export function EarlyTeamMobile() {
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
              <span className={`${m.pill} ${person.tone} ${s.cell}`} style={{ animationDelay: `calc(${i * 0.15}s - var(--scene-shift, 0s))`, animationFillMode: "backwards" }}>
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
];

/** Pensé avec la direction : la maquette commentée, puis validée. */
export function EarlyMockupMobile() {
  return (
    <div className={`${m.mobileOnly} ${m.beige}`}>
      <div className={m.paper}>
        <div className={m.rowBetween}>
          <span className={m.mono}>MAQUETTE · SUIVI DE L&apos;ÉQUIPE · V3</span>
        </div>
        <ol className={m.comments}>
          {COMMENTS.map((text, i) => (
            <li key={text} className={`${m.comment} ${s.pin}`} style={{ animationDelay: `calc(${0.4 + i * 1.2}s - var(--scene-shift, 0s))`, animationFillMode: "backwards" }}>
              <span className={m.commentNumber} aria-hidden="true">
                {i + 1}
              </span>
              <span className={m.commentText}>{text}</span>
            </li>
          ))}
        </ol>
        <span className={`${m.validated} ${s.pin}`} style={{ animationDelay: "calc(4.5s - var(--scene-shift, 0s))", animationFillMode: "backwards" }}>
          <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
          Validé par le dirigeant
        </span>
      </div>
    </div>
  );
}

const TOOLS = ["Campagnes Meta", "Google Agenda", "47 plannings Excel", "Pennylane"];

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
          <span className={m.coreTitle}>Le logiciel Early</span>
        </div>
      </div>
    </div>
  );
}
