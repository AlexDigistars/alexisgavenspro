// Étude de cas (client anonymisé) : un artisan menuisier et l'assistant IA configuré pour lui.
// Textes repris du brief ; démonstrations à données fictives.
import type { CSSProperties } from "react";
import Scene from "@/components/Scene";
import { MenuisierBeforeAfter } from "@/components/CaseVisuals";
import { BeforeAfterSection, CaseHero, Changes, IconPoints, Icons, InShort, ProjectCta } from "@/components/ProjectBlocks";
import s from "./ProjectCase.module.css";
import a from "./ArtisanCase.module.css";

/** Délai d'apparition d'un élément dans le cycle de la démonstration. */
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

const QUOTE_LINES = [
  ["Marches et contremarches", "2 380 €"],
  ["Limons et rampe", "1 140 €"],
  ["Pose", "620 €"],
];

/** Résumé de fin de journée : une ligne par élément, qui apparaissent l'une après l'autre. */
const DAY_SUMMARY: { label: string; chip?: string; warn?: boolean; group?: boolean }[] = [
  { label: "Demandes reçues", group: true },
  { label: "Devis · placard d'entrée", chip: "Réponse proposée" },
  { label: "Question · délai de pose", chip: "Réponse proposée" },
  { label: "Devis sans réponse", group: true },
  { label: "Escalier · envoyé il y a 8 jours", chip: "Relance prête", warn: true },
  { label: "Demain", group: true },
  { label: "8 h 00 · Pose d'un escalier" },
  { label: "14 h 00 · Prise de mesures" },
];

export default function ArtisanCase() {
  return (
    <>
      <CaseHero
        tag="Réalisation · client anonymisé"
        title="Un assistant IA pour sortir des devis du soir."
        lead="Un artisan menuisier qui fabrique et pose sur mesure passait ses soirées sur les devis et les messages. J'ai configuré pour lui un assistant IA qui prend en charge l'administratif pénible, pour qu'il garde son énergie pour l'atelier et les chantiers."
      >
        <Scene className={a.heroScene} shift={8}>
          <div
            className={a.phone}
            role="img"
            aria-label="Démonstration : une note vocale prise sur le chantier devient un devis d'escalier en chêne, en brouillon, à relire avant envoi."
          >
            <div className={a.screen} aria-hidden="true">
              <div className={a.chatHead}>
                <span className={a.avatar}>IA</span>
                <span className={a.chatName}>
                  <b>Assistant</b>
                  <small>Devis et messages</small>
                </span>
              </div>
              <div className={`${a.bubbleMe} ${a.appear}`} style={d(0.4)}>
                <span className={a.voice}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0M12 17v5" />
                  </svg>
                  Note vocale · 0:38
                </span>
                <span>«&nbsp;Escalier droit en chêne, 14 marches, rampe côté mur, pose comprise.&nbsp;»</span>
              </div>
              <div className={`${a.bubbleBot} ${a.appear}`} style={d(1.6)}>
                <span className={a.botLine}>Devis préparé avec vos modèles&nbsp;:</span>
                <div className={a.quote}>
                  <div className={a.quoteHead}>
                    <b>Escalier en chêne</b>
                    <span className={a.draft}>Brouillon</span>
                  </div>
                  {QUOTE_LINES.map(([label, price], i) => (
                    <div key={label} className={`${a.quoteRow} ${a.appear}`} style={d(2.2 + i * 0.4)}>
                      <span>{label}</span>
                      <b>{price}</b>
                    </div>
                  ))}
                  <div className={`${a.quoteTotal} ${a.appear}`} style={d(3.6)}>
                    <span>Total HT</span>
                    <b>4 140 €</b>
                  </div>
                </div>
                <div className={`${a.quoteActions} ${a.appear}`} style={d(4.1)}>
                  <span className={a.ghostBtn}>Modifier</span>
                  <span className={a.sendBtn}>Relire et envoyer</span>
                </div>
              </div>
            </div>
          </div>
          <span className={a.heroFictive}>Données fictives</span>
        </Scene>
      </CaseHero>

      <InShort
        before="Les devis se tapaient le soir, les demandes attendaient la fin des chantiers, les relances passaient à la trappe."
        did="Un assistant IA configuré pour son métier, relié à sa messagerie, à son agenda et à ses modèles de devis."
        after="Moins d'administratif, des réponses plus rapides, davantage de demandes de devis traitées."
      />

      <BeforeAfterSection>
        <MenuisierBeforeAfter size="large" />
      </BeforeAfterSection>

      <IconPoints
        title="Ce que fait l'assistant"
        items={[
          { icon: Icons.quote, text: "Il prépare un brouillon de devis à partir de ses notes, de ses mesures ou d'une note vocale." },
          { icon: Icons.inbox, text: "Il trie les demandes reçues et propose une réponse." },
          { icon: Icons.repeat, text: "Il relance les devis restés sans réponse." },
          { icon: Icons.calendar, text: "Il résume la journée et les rendez-vous du lendemain." },
        ]}
        highlight={"Rien ne part sans sa validation\u00a0: l'artisan relit et envoie."}
      >
        <Scene className={s.demoPanel} shift={6}>
          <div
            className={a.summary}
            role="img"
            aria-label="Démonstration : le résumé de fin de journée, avec les demandes reçues et leurs réponses proposées, une relance prête pour un devis sans réponse, et les rendez-vous du lendemain."
          >
            <div className={a.card} aria-hidden="true">
              <div className={a.quoteHead}>
                <b>Résumé du jour</b>
                <span className={a.time}>18 h 00</span>
              </div>
              {DAY_SUMMARY.map((line, i) =>
                line.group ? (
                  <span key={line.label} className={`${a.group} ${a.appear}`} style={d(0.4 + i * 0.45)}>
                    {line.label}
                  </span>
                ) : (
                  <div key={line.label} className={`${a.item} ${a.appear}`} style={d(0.4 + i * 0.45)}>
                    <span>{line.label}</span>
                    {line.chip && <span className={line.warn ? a.warn : a.chip}>{line.chip}</span>}
                  </div>
                ),
              )}
            </div>
          </div>
          <span className={s.fictive}>Données fictives</span>
        </Scene>
      </IconPoints>

      <Changes
        items={[
          { icon: Icons.clock, text: "Du temps gagné chaque semaine" },
          { icon: Icons.send, text: "Plus de devis envoyés" },
          { icon: Icons.feather, text: "Moins de pénibilité" },
        ]}
      />

      <ProjectCta title={"Vous aussi, vous faites vos devis le soir\u00a0? Parlons-en."} />
    </>
  );
}
