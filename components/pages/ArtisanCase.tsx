// Étude de cas (client anonymisé) : un artisan électricien seul, avec un assistant IA configuré pour lui.
// Démonstrations à données fictives.
import type { CSSProperties } from "react";
import Scene from "@/components/Scene";
import DiagnosticLink from "@/components/DiagnosticLink";
import { Feature, Icons, Pains, ProjectCta, Steps } from "@/components/ProjectBlocks";
import s from "./ProjectCase.module.css";
import a from "./ArtisanCase.module.css";

/** Délai d'apparition d'un élément dans le cycle de la démonstration. */
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

const Mic = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0M12 17v5" />
  </svg>
);

const HERO_LINES = [
  ["Prises de courant (×4)", "240 €"],
  ["VMC salle de bain", "380 €"],
  ["Tableau électrique", "1 150 €"],
];

const NOTE_LINES = [
  ["Prises cuisine (×6)", "360 €"],
  ["Spots encastrés (×2)", "140 €"],
  ["Ligne plaque induction", "290 €"],
  ["Disjoncteur 32 A", "85 €"],
];

export default function ArtisanCase() {
  return (
    <>
      {/* Haut de page */}
      <section className={s.hero} data-reveal>
        <div className={s.heroInner}>
          <div className={s.heroText}>
            <span className={s.eyebrow}>Étude de cas : un artisan électricien</span>
            <h1 className={s.h1}>Un assistant IA pour ne plus rédiger ses devis le soir.</h1>
            <p className={s.lead}>
              Un électricien qui travaille seul rédigeait ses devis après ses journées et ratait des appels pendant ses chantiers. Je
              lui ai mis en place un assistant IA, relié à son agenda, sa messagerie et son logiciel de facturation.
            </p>
            <div className={s.actions}>
              <DiagnosticLink className={s.primary}>Réserver 20 min</DiagnosticLink>
              <a className={s.anchor} href="#fonctionnement">
                Voir comment ça marche ↓
              </a>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Scene className={a.heroScene} shift={8}>
              <div
                className={a.phone}
                role="img"
                aria-label="Démonstration : une note vocale prise sur le chantier devient un devis en brouillon, prêt à relire avant envoi."
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
                      <Mic /> Note vocale · 0:42
                    </span>
                    <span>« Salle de bain Mme Roux : 4 prises, une VMC, tableau à remplacer. »</span>
                  </div>
                  <div className={`${a.bubbleBot} ${a.appear}`} style={d(1.6)}>
                    <span className={a.botLine}>Devis préparé avec vos tarifs habituels :</span>
                    <div className={a.quote}>
                      <div className={a.quoteHead}>
                        <b>Devis n° 2026-047</b>
                        <span className={a.draft}>Brouillon</span>
                      </div>
                      {HERO_LINES.map(([label, price], i) => (
                        <div key={label} className={`${a.quoteRow} ${a.appear}`} style={d(2.2 + i * 0.4)}>
                          <span>{label}</span>
                          <b>{price}</b>
                        </div>
                      ))}
                      <div className={`${a.quoteTotal} ${a.appear}`} style={d(3.6)}>
                        <span>Total HT</span>
                        <b>1 770 €</b>
                      </div>
                    </div>
                    <div className={`${a.quoteActions} ${a.appear}`} style={d(4.1)}>
                      <span className={a.ghostBtn}>Modifier</span>
                      <span className={a.sendBtn}>Relire et envoyer</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className={a.heroFictive}>Démonstration · données fictives</span>
            </Scene>
          </div>
        </div>
      </section>

      {/* La situation */}
      <section className={`${s.section} ${s.sand}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Le métier le jour, l&apos;administratif le soir.</h2>
          <p className={s.intro}>
            Seul sur ses chantiers, il faisait tout lui-même. L&apos;administratif débordait sur ses soirées, et le téléphone
            sonnait quand il avait les mains prises.
          </p>
        </div>
        <Pains
          items={[
            { icon: Icons.moon, title: "Des devis rédigés le soir", text: "Après la journée de chantier, il restait les devis à taper, ligne par ligne." },
            { icon: Icons.phoneMissed, title: "Des appels manqués", text: "Sur un chantier, impossible de décrocher : les messages s'accumulaient jusqu'au soir." },
            { icon: Icons.hourglass, title: "Des devis qui dorment", text: "Sans relance, un devis envoyé pouvait rester des semaines sans réponse." },
          ]}
        />
      </section>

      {/* Ce que fait l'assistant */}
      <section className={s.section} id="fonctionnement" data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Ce que fait l&apos;assistant, chaque jour.</h2>
          <p className={s.intro}>
            Il travaille avec les outils que l&apos;artisan utilise déjà. Il prépare, l&apos;artisan décide : tout reste à relire
            avant envoi.
          </p>
        </div>
        <div className={s.features}>
          <Feature
            label="Devis"
            title="Des notes de visite au devis prêt à relire."
            items={[
              "Une note vocale ou quelques mots tapés sur le chantier suffisent.",
              "L'assistant reprend ses tarifs et la présentation de ses devis habituels.",
              "Le devis arrive en brouillon dans son logiciel de facturation.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={a.noteFlow} role="img" aria-label="Démonstration : des notes de visite deviennent un devis détaillé en brouillon.">
                <div className={a.paper} aria-hidden="true">
                  <span className={a.paperTitle}>Visite · M. Dupuis · cuisine</span>
                  <span>6 prises + 2 spots</span>
                  <span>Plaque induction : ligne dédiée</span>
                  <span>Prévoir disjoncteur 32 A</span>
                </div>
                <svg className={a.flowArrow} aria-hidden="true" focusable="false" width="24" height="40" viewBox="0 0 24 40" fill="none">
                  <path className={a.flow} d="M12 2v30" stroke="#1D5C57" strokeWidth="2" />
                  <path d="M5 28l7 8 7-8" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={a.card} aria-hidden="true">
                  <div className={a.quoteHead}>
                    <b>Devis n° 2026-048 · M. Dupuis</b>
                    <span className={a.draft}>Brouillon</span>
                  </div>
                  {NOTE_LINES.map(([label, price], i) => (
                    <div key={label} className={`${a.quoteRow} ${a.appear}`} style={d(0.6 + i * 0.5)}>
                      <span>{label}</span>
                      <b>{price}</b>
                    </div>
                  ))}
                  <div className={`${a.quoteTotal} ${a.appear}`} style={d(2.8)}>
                    <span>Total HT</span>
                    <b>875 €</b>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            reverse
            label="Relances"
            title="Les devis non signés, relancés au bon moment."
            items={[
              "Chaque devis envoyé est suivi, du brouillon à la signature.",
              "Après quelques jours sans réponse, une relance polie est préparée.",
              "L'artisan la relit, puis l'envoie en un clic.",
            ]}
          >
            <Scene className={s.panel} shift={6}>
              <div className={a.stack} role="img" aria-label="Démonstration : un devis sans réponse depuis 8 jours, et la relance préparée pour lui.">
                <div className={a.card} aria-hidden="true">
                  <span className={a.cardTitle}>Devis envoyés</span>
                  <div className={a.statusRow}>
                    <span>
                      <b>2026-041</b> · M. Garnier
                    </span>
                    <span className={a.ok}>Signé</span>
                  </div>
                  <div className={`${a.statusRow} ${a.statusWarn}`}>
                    <span>
                      <b>2026-043</b> · Mme Petit
                    </span>
                    <span className={a.warn}>Sans réponse · 8 j</span>
                  </div>
                  <div className={a.statusRow}>
                    <span>
                      <b>2026-045</b> · SCI Horizon
                    </span>
                    <span className={a.muted}>Envoyé hier</span>
                  </div>
                </div>
                <div className={`${a.card} ${a.draftCard} ${a.appear}`} style={d(1.2)} aria-hidden="true">
                  <div className={a.quoteHead}>
                    <b>Relance · Mme Petit</b>
                    <span className={a.draft}>Brouillon</span>
                  </div>
                  <p className={a.message}>
                    Bonjour Madame Petit, je reviens vers vous au sujet du devis n° 2026-043 pour l&apos;éclairage du séjour.
                    Avez-vous pu le consulter ? Je reste disponible pour en parler.
                  </p>
                  <div className={a.quoteActions}>
                    <span className={a.ghostBtn}>Modifier</span>
                    <span className={a.sendBtn}>Envoyer</span>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            label="Fin de journée"
            title="Le résumé de la journée, à 18 h."
            items={[
              "Les appels et messages manqués, résumés, avec une réponse proposée.",
              "Les devis et les relances prêts à relire.",
              "Le programme du lendemain, repris de son agenda.",
            ]}
          >
            <Scene className={s.panel} shift={6}>
              <div className={a.summary} role="img" aria-label="Démonstration : le résumé de fin de journée, avec les messages manqués, les documents à relire et le programme du lendemain.">
                <div className={a.card} aria-hidden="true">
                  <div className={a.quoteHead}>
                    <b>Résumé du mardi</b>
                    <span className={a.time}>18 h 00</span>
                  </div>
                  <span className={`${a.group} ${a.appear}`} style={d(0.4)}>
                    Messages manqués
                  </span>
                  <div className={`${a.item} ${a.appear}`} style={d(0.8)}>
                    <span>
                      <b>M. Garnier</b> · devis pour un portail motorisé
                    </span>
                    <span className={a.chip}>Réponse proposée</span>
                  </div>
                  <div className={`${a.item} ${a.appear}`} style={d(1.2)}>
                    <span>
                      <b>Mme Roux</b> · horaire de jeudi
                    </span>
                    <span className={a.chip}>Réponse proposée</span>
                  </div>
                  <span className={`${a.group} ${a.appear}`} style={d(1.8)}>
                    À relire
                  </span>
                  <div className={`${a.item} ${a.appear}`} style={d(2.2)}>
                    <span>
                      <b>Devis 2026-047</b> · Mme Roux
                    </span>
                    <b>1 770 €</b>
                  </div>
                  <div className={`${a.item} ${a.appear}`} style={d(2.6)}>
                    <span>
                      <b>Relance</b> · Mme Petit
                    </span>
                    <span className={a.muted}>Brouillon</span>
                  </div>
                  <span className={`${a.group} ${a.appear}`} style={d(3.2)}>
                    Demain
                  </span>
                  <div className={`${a.item} ${a.appear}`} style={d(3.6)}>
                    <span>
                      <b>8 h 00</b> · Chantier Dupuis
                    </span>
                  </div>
                  <div className={`${a.item} ${a.appear}`} style={d(4)}>
                    <span>
                      <b>14 h 00</b> · Visite SCI Horizon
                    </span>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>
        </div>
      </section>

      {/* Le principe */}
      <section className={`${s.section} ${s.dark}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>L&apos;assistant prépare, l&apos;artisan décide.</h2>
          <p className={s.intro}>
            L&apos;assistant fait gagner du temps sur la rédaction, pas sur la décision : rien ne part sans l&apos;accord de
            l&apos;artisan.
          </p>
        </div>
        <ul className={s.principles}>
          {[
            { icon: Icons.eye, title: "Rien ne part sans relecture", text: "Devis, relances et réponses arrivent en brouillon. L'artisan relit, corrige si besoin, puis envoie." },
            { icon: Icons.tools, title: "Ses outils restent les mêmes", text: "Son agenda, sa messagerie et son logiciel de facturation ne changent pas : l'assistant s'y branche." },
            { icon: Icons.hand, title: "Il garde la main", text: "Il peut ajuster les réglages ou mettre l'assistant en pause à tout moment." },
          ].map((p) => (
            <li key={p.title} className={s.principle}>
              <span className={s.principleIcon} aria-hidden="true">
                {p.icon}
              </span>
              <h3 className={s.principleTitle}>{p.title}</h3>
              <p className={s.principleText}>{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Le déroulé */}
      <section className={s.section} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Une demi-journée pour démarrer.</h2>
        </div>
        <Steps
          items={[
            { title: "Installation", text: "Une demi-journée ensemble : l'assistant est relié à son agenda, sa messagerie et son logiciel de facturation." },
            { title: "Réglages", text: "Ses tarifs, ses formulations et ses habitudes sont repris, pour que les brouillons lui ressemblent." },
            { title: "Point à un mois", text: "On regarde ce qui sert, ce qui manque, et on ajuste." },
          ]}
        />
      </section>

      <ProjectCta title="Votre quotidien ressemble à celui-ci ?" text="20 minutes pour voir ce qu'un assistant IA pourrait préparer pour vous." />
    </>
  );
}
