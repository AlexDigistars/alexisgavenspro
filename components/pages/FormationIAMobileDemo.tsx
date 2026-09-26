// Version mobile (< 768 px) de la démonstration « Assistant IA » :
// l'échange en bulles pleine largeur, lisible sans zoomer. Données fictives.
import s from "./FormationIA.module.css";
import m from "./FormationIAMobileDemo.module.css";

export function AssistantMobile() {
  return (
    <div className={m.chat}>
      <div className={m.bar}>
        <span className={m.appName}>Assistant IA</span>
        <span className={m.mono}>ATELIER · JOUR 1</span>
      </div>
      <div className={m.body}>
        <div className={`${m.userBubble} ${s.msg1}`}>
          <p>À partir de mes notes de visite, rédige le devis pour Mme Roux, au format de nos devis habituels.</p>
          <span className={m.attachment}>
            <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2h9l5 5v15H6z" />
              <path d="M14 2v6h6" />
            </svg>
            notes_visite_roux.pdf
          </span>
        </div>
        <span className={`${m.typing} ${s.typing}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <div className={`${m.answer} ${s.msg2}`}>
          <div className={m.rowBetween}>
            <strong>Devis n° 2026-118 · Mme Roux</strong>
            <span className={m.draft}>Brouillon</span>
          </div>
          <span className={`${m.line} ${s.line}`} aria-hidden="true" />
          <span className={`${m.line} ${m.lineShort} ${s.line}`} aria-hidden="true" />
          <span className={`${m.line} ${s.line}`} aria-hidden="true" />
          <div className={`${m.rowBetween} ${m.total}`}>
            <span>Total HT</span>
            <strong>1 480,00 €</strong>
          </div>
        </div>
        <div className={`${m.saved} ${s.saved}`}>
          <strong>1 min</strong>
          <span>au lieu d&apos;une demi-heure</span>
          <span className={m.exampleTag}>Exemple</span>
        </div>
      </div>
    </div>
  );
}
