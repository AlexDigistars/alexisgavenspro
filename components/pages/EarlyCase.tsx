import { EarlyTeamMobile, EarlyMockupMobile, EarlyHubMobile } from "./EarlyMobileDemos";
import m from "./EarlyMobileDemos.module.css";
import Scene from "@/components/Scene";
import Link from "next/link";
import CalendlyLink from "@/components/CalendlyLink";
import s from "./EarlyCase.module.css";

function Check() {
  return (
    <svg className={s.checkIcon} aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={s.checkList}>
      {items.map((item) => (
        <li key={item}>
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const TEAM = [
  { name: "Camille", cells: [[s.c36, "✓ 7 h"], [s.c37, "✓ 7 h"], [s.c38, "8 h"], [s.c39, "4 h 30"], [s.c40, "✓ 7 h"]] },
  { name: "Hugo", cells: [[s.c41, "À saisir"], [s.c42, "✓ 7 h"], [s.c43, "✓ 7 h"], [s.c44, "Off"], [s.c45, "2 h 30"]] },
  { name: "Inès", cells: [[s.c42, "✓ 7 h"], [s.c43, "✓ 7 h"], [s.c40, "✓ 7 h"], [s.c46, "✓ 7 h"], [s.c47, "✓ 7 h"]] },
  { name: "Karim", cells: [[s.c39, "4 h 30"], [s.c48, "8 h"], [s.c46, "✓ 7 h"], [s.c49, "À saisir"], [s.c50, "✓ 7 h"]] },
  { name: "Léa", cells: [[s.c40, "✓ 7 h"], [s.c45, "4 h 30"], [s.c47, "✓ 7 h"], [s.c50, "✓ 7 h"], [s.c51, "8 h"]] },
];

const MARGINS = [
  { client: "Studio Nova", value: "34 %", width: "68%", tone: "" },
  { client: "Maison Lenoir", value: "21 %", width: "42%", tone: "" },
  { client: "Garage Ferrand", value: "8 %", width: "16%", tone: s.dashWarn },
];

export default function EarlyCase() {
  return (
    <>
      {/* E1. Haut de page */}
      <section className={s.c1} data-reveal>
        <div className={s.c2}>
          <div className={s.c3}>
            <span className={s.c4}>Étude de cas · Early</span>
            <h1 className={s.c5}>Early : reprendre un logiciel sans repartir de zéro.</h1>
            <p className={s.c6}>
              Une agence de communication d&apos;une quinzaine de personnes gérait tout dans un logiciel qui ne suivait plus : clients, équipes, planning, facturation. Je l&apos;ai repris avec la direction pour en faire un outil taillé pour son métier.
            </p>
            <div className={s.heroActions}>
              <CalendlyLink className={s.c245}>Réserver 20 min</CalendlyLink>
              <a className={s.heroAnchor} href="#changements">
                Voir ce qui change ↓
              </a>
            </div>
          </div>
          <Scene className={m.sceneWrap} shift={2}>
            <div className={`${s.c14} ${s.heroWindow}`}>
              <div className={s.c15}>
                <div className={s.c16}>
                  <span className={s.c17}></span>
                  <span className={s.c17}></span>
                  <span className={s.c17}></span>
                </div>
                <span className={s.c18}>Early Work — Suivi financier</span>
                <span className={s.c19}>Démonstration · données fictives</span>
              </div>
              <div className={`${s.c20} ${s.heroBody}`}>
                <div className={s.c21}>
                  <span className={s.c22}>Tableau de bord</span>
                  <span className={s.c23}>Production</span>
                  <span className={s.c24}>Planning</span>
                  <span className={s.c24}>Tâches</span>
                  <span className={s.c24}>Charge & Travail</span>
                  <span className={s.c24}>Calendrier</span>
                  <span className={s.c23}>Clients & contenus</span>
                  <span className={s.c24}>Clients</span>
                  <span className={s.c24}>Contrats</span>
                  <span className={s.c23}>Équipe</span>
                  <span className={`${s.c23} ${s.navActive}`}>Suivi financier</span>
                  <span className={s.c23}>Réglages & suivi</span>
                </div>
                <div className={s.c26}>
                  <span className={s.c27}>Suivi financier</span>
                  <div className={s.c185}>
                    <span className={s.c186}>À FACTURER · SEPTEMBRE</span>
                    <div className={s.c187}>
                      <span className={`${s.c188} ${s.check}`}></span>
                      <span className={s.c189}>Prestation supplémentaire</span>
                      <span className={s.c113}>180 €</span>
                    </div>
                    <div className={s.c187}>
                      <span className={`${s.c190} ${s.check}`}></span>
                      <span className={s.c189}>Déplacement</span>
                      <span className={s.c113}>120 €</span>
                    </div>
                    <div className={s.c191}>
                      <span className={s.c192}></span>
                      <span className={s.c193}>Geste commercial</span>
                      <span>—</span>
                    </div>
                    <span className={s.c194}>
                      <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E1A2B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13" />
                        <path d="M22 2l-7 20-4-9-9-4z" />
                      </svg>
                      Envoyer vers Pennylane (2)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Scene>
        </div>
      </section>

      {/* E2. Un outil pour chacun */}
      <section className={s.roles} data-reveal id="changements">
        <div className={s.sectionHead}>
          <h2 className={s.c55}>Un outil pour chacun, du salarié au dirigeant.</h2>
          <p className={s.c56}>Chaque écran a été pensé pour ceux qui l&apos;utilisent, pas adapté d&apos;un logiciel générique.</p>
        </div>

        {/* Bloc 1 — Salariés */}
        <div className={s.role}>
          <div className={s.roleText}>
            <span className={s.c54}>Pour les salariés</span>
            <h3 className={s.roleTitle}>Moins de saisie, plus de temps pour le métier.</h3>
            <CheckList
              items={[
                "En fin de journée, chacun attribue ses heures aux clients en quelques clics.",
                "Les publications à valider remontent toutes seules, triées par urgence, avec un rappel deux jours avant.",
                "Chaque client, contrat ou mission s'ouvre en un clic, sans attendre.",
              ]}
            />
          </div>
          <Scene className={s.rolePanel}>
            <div className={s.stackVisual}>
              <div className={s.c181}>
                <span className={s.c182}>MON TEMPS · VENDREDI</span>
                <div className={s.c183}>
                  <span>Studio Nova</span>
                  <span className={s.c113}>3 h</span>
                </div>
                <div className={s.c183}>
                  <span>Maison Lenoir</span>
                  <span className={s.c113}>2 h 30</span>
                </div>
                <div className={s.c183}>
                  <span>Interne</span>
                  <span className={s.c113}>1 h 30</span>
                </div>
                <div className={s.c184}>✓ Journée complète · 7 h</div>
              </div>
              <div className={`${s.c195} ${s.stackOffset}`}>
                <div className={s.c196}>
                  <span className={s.c197}>À valider</span>
                  <span className={s.c198}>Trié par urgence</span>
                </div>
                <div className={s.c199}>
                  <span className={s.c200}></span>
                  <div className={s.c201}>
                    <span className={s.c126}>Livrable · Garage Ferrand</span>
                    <span className={s.c198}>Échéance demain · pas encore validé</span>
                  </div>
                  <span className={s.c202}>Demain</span>
                </div>
                <div className={s.c203}>
                  <span className={`${s.c204} ${s["pulse-warn"]}`}></span>
                  <div className={s.c201}>
                    <span className={s.c126}>Lancement · Studio Nova</span>
                    <span className={s.c198}>Rappel : échéance dans 2 jours</span>
                  </div>
                  <span className={s.c205}>J-2</span>
                </div>
              </div>
            </div>
          </Scene>
        </div>

        {/* Bloc 2 — Managers */}
        <div className={`${s.role} ${s.roleReverse}`}>
          <div className={s.roleText}>
            <span className={s.c54}>Pour les managers</span>
            <h3 className={s.roleTitle}>L&apos;équipe d&apos;un coup d&apos;œil.</h3>
            <CheckList
              items={[
                "La semaine de chacun sur un seul écran : qui a saisi ses heures, qui est en retard.",
                "La charge de travail de chaque personne, pour mieux répartir les missions.",
                "Les clients en retard de validation, à l'échelle de toute l'agence.",
              ]}
            />
          </div>
          <Scene className={s.rolePanel} shift={2}>
            <div className={`${s.teamCard} ${m.desktopOnly}`}>
              <div className={s.teamHead}>
                <span className={s.c197}>Suivi de l&apos;équipe</span>
                <span className={s.c198}>Semaine 39</span>
              </div>
              <div className={s.c31}>
                <span className={s.c32}></span>
                <span>Lun.</span>
                <span>Mar.</span>
                <span>Mer.</span>
                <span>Jeu.</span>
                <span>Ven.</span>
              </div>
              <div className={s.c33}>
                {TEAM.map((person) => (
                  <div key={person.name} className={s.c34}>
                    <span className={s.c35}>{person.name}</span>
                    {person.cells.map(([cls, value], i) => (
                      <span key={i} className={`${cls} ${s.cell}`}>
                        {value}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <EarlyTeamMobile />
          </Scene>
        </div>

        {/* Bloc 3 — Direction */}
        <div className={s.role}>
          <div className={s.roleText}>
            <span className={s.c54}>Pour la direction</span>
            <h3 className={s.roleTitle}>Piloter l&apos;agence en temps réel.</h3>
            <CheckList
              items={[
                "Un tableau de bord qui se met à jour tout seul : chiffre d'affaires, marge par client, heures facturables.",
                "Les factures se préparent seules et partent dans Pennylane, en brouillon à relire.",
                "Heures notées dans les agendas et dépenses à refacturer, réunies par client : plus rien n'est oublié.",
              ]}
            />
          </div>
          <Scene className={s.rolePanel} shift={2}>
            <div className={s.dash}>
              <div className={s.dashHead}>
                <span className={s.c197}>Tableau de bord · direction</span>
                <span className={s.dashLive}>
                  <span className={`${s.dashDot} ${s.pulse}`}></span>
                  Mis à jour en temps réel
                </span>
              </div>
              <div className={s.dashKpis}>
                <div className={s.dashKpi}>
                  <span className={s.c198}>Chiffre d&apos;affaires du mois</span>
                  <strong>48,2 k€</strong>
                </div>
                <div className={s.dashKpi}>
                  <span className={s.c198}>Marge moyenne</span>
                  <strong>31 %</strong>
                </div>
                <div className={s.dashKpi}>
                  <span className={s.c198}>Heures facturables</span>
                  <strong>212 h</strong>
                </div>
              </div>
              <div className={s.dashRows}>
                {MARGINS.map((row) => (
                  <div key={row.client} className={`${s.dashRow} ${row.tone}`}>
                    <span className={s.dashClient}>{row.client}</span>
                    <span className={s.dashTrack}>
                      <span className={`${s.dashBar} ${s.grow}`} style={{ width: row.width }}></span>
                    </span>
                    <span className={s.dashValue}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Scene>
        </div>
      </section>

      {/* E3. Tout est relié */}
      <section className={s.c94} data-reveal>
        <div className={s.c53}>
          <h2 className={s.c55}>Tout est relié, et tout va vite.</h2>
          <p className={s.c95}>
            Chaque client, contrat, mission ou personne mène en un clic à la bonne page, et les écrans s&apos;ouvrent sans attendre. Le logiciel va chercher lui-même les informations dans les outils de l&apos;agence.
          </p>
        </div>
        <Scene className={`${m.sceneWrap} ${s.hubScene}`}>
          <div className={`${s.c142} ${m.desktopOnly}`}>
            <svg aria-hidden="true" focusable="false" className={s.c143} width="620" height="520" viewBox="0 0 620 520" fill="none">
              <path className={s.flow} d="M130 100 L310 260" stroke="#1D5C57" strokeWidth="2" />
              <path className={s.flow} d="M490 100 L310 260" stroke="#1D5C57" strokeWidth="2" />
              <path className={s.flow} d="M130 420 L310 260" stroke="#1D5C57" strokeWidth="2" />
              <path className={s.flow} d="M490 420 L310 260" stroke="#1D5C57" strokeWidth="2" />
            </svg>
            <div className={s.c144}>
              <span className={`${s.c145} ${s.pulse}`}></span>
              <span className={s.c146}>Le logiciel Early</span>
            </div>
            <div className={s.c148}>
              <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l18-8-8 18-2-8z" />
              </svg>
              Campagnes Meta
            </div>
            <div className={s.c149}>
              <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M3 9h18M8 2v4M16 2v4" />
              </svg>
              Google Agenda
            </div>
            <div className={s.c151}>
              <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M4 9h16M4 15h16M10 9v12" />
              </svg>
              47 plannings Excel
            </div>
            <div className={s.c152}>
              <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2h9l5 5v15H6z" />
                <path d="M14 2v6h6" />
              </svg>
              Pennylane
            </div>
          </div>
          <EarlyHubMobile />
        </Scene>
      </section>

      {/* E4. Pensé avec la direction */}
      <section className={s.c65} data-reveal>
        <div className={s.c53}>
          <h2 className={s.c55}>Pensé avec la direction.</h2>
          <p className={s.c56}>
            Chaque onglet est discuté en atelier, dessiné, puis validé par le dirigeant avant d&apos;être développé. Au fil du projet, la direction a proposé de nouvelles idées : elles suivent la même méthode.
          </p>
        </div>
        <Scene className={m.sceneWrap} shift={6.5}>
          <div className={`${s.c71} ${m.desktopOnly}`}>
            <div className={s.c72}>
              <div className={s.c73}>
                <span className={s.c74}>MAQUETTE · SUIVI DE L&apos;ÉQUIPE · V3</span>
              </div>
              <div className={s.c76}></div>
              <div className={s.c77}>
                <div className={s.c78}></div>
                <div className={s.c78}></div>
                <div className={s.c78}></div>
              </div>
              <div className={s.c79}>
                <div className={s.c80}></div>
                <div className={s.c81}></div>
                <div className={s.c81}></div>
                <div className={s.c82}></div>
                <div className={s.c83}></div>
                <div className={s.c80}></div>
                <div className={s.c81}></div>
                <div className={s.c84}></div>
                <div className={s.c81}></div>
                <div className={s.c81}></div>
                <div className={s.c80}></div>
                <div className={s.c83}></div>
                <div className={s.c81}></div>
                <div className={s.c81}></div>
                <div className={s.c82}></div>
              </div>
              <div className={s.c85}>
                <div className={s.c86}></div>
                <div className={s.c87}></div>
              </div>
            </div>
            <div className={`${s.c88} ${s.pin}`}>
              <span className={s.c89}>1</span>
              <span className={s.c90}>Un clic sur le nom ouvre tout son historique</span>
            </div>
            <div className={`${s.c91} ${s.pin}`}>
              <span className={s.c89}>2</span>
              <span className={s.c90}>Les heures manquantes en rouge, visibles tout de suite</span>
            </div>
            <div className={`${s.c93} ${s.pin}`}>
              <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
              Validé par le dirigeant
            </div>
          </div>
          <EarlyMockupMobile />
        </Scene>
      </section>

      {/* E5. Témoignage et rendez-vous */}
      <section className={s.c226} data-reveal>
        <svg aria-hidden="true" focusable="false" width="44" height="34" viewBox="0 0 28 22" fill="#1D5C57">
          <path d="M0 22V12C0 5 4 1 11 0l1 3c-4 1-6 4-6 7h5v12zm16 0V12c0-7 4-11 11-12l1 3c-4 1-6 4-6 7h5v12z" />
        </svg>
        <figure className={s.quoteFigure}>
          <blockquote className={s.c227}>
            « Alexis a vraiment fait évoluer notre logiciel : il est plus rapide, plus réactif et bien plus simple à utiliser. Il écoute nos besoins et il est force de proposition. C&apos;est agréable de travailler avec lui. »
          </blockquote>
          <figcaption className={s.c229}>Joseph Herbinet, dirigeant d&apos;Early</figcaption>
        </figure>
      </section>
      <section className={s.c241} data-reveal id="ec-contact">
        <h2 className={s.c242}>Votre logiciel mérite la même reprise.</h2>
        <p className={s.c243}>20 minutes pour comprendre ce qui bloque et vous dire franchement si je peux vous aider.</p>
        <div className={s.c244}>
          <CalendlyLink className={s.c245}>Réserver 20 min</CalendlyLink>
          <Link className={s.c246} href="/">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </>
  );
}
