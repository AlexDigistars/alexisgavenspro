import Link from "next/link";
import s from "./Projects.module.css";

const EXAMPLES = [
  {
    title: "Un artisan seul, avec un assistant IA configuré pour lui",
    rows: [
      ["La situation :", "un électricien qui rédige ses devis le soir et rate des appels pendant ses chantiers."],
      [
        "Ce que je mets en place :",
        "un assistant IA relié à son agenda, sa messagerie et son logiciel de facturation. Il prépare les devis à partir de ses notes, les relances des devis non signés et le résumé de la journée. Tout reste à relire avant envoi.",
      ],
      ["Format :", "une demi-journée d'installation, puis un point au bout d'un mois."],
    ],
  },
  {
    title: "Une PME de distribution de 20 personnes : stock, commandes et factures reliés",
    rows: [
      ["La situation :", "des commandes reçues par e-mail, un stock suivi sur Excel, des factures refaites dans la compta."],
      [
        "Ce que je construis :",
        "un diagnostic des tâches automatisables, puis un logiciel de gestion qui centralise clients, commandes et stock. Il alerte avant une rupture, crée les factures et les envoie au logiciel comptable, et se connecte aux outils externes utiles (transporteur, banque) par leurs connexions officielles. Un assistant IA prépare les réponses aux demandes de prix.",
      ],
      ["Format :", "livraison par étapes, chacune validée sur maquette."],
    ],
  },
];

export default function Projects() {
  return (
    <>
      <section className={s.hero} data-reveal>
        <h1 className={s.h1}>Réalisations et exemples</h1>
        <p className={s.lead}>Ce que j&apos;ai construit, et ce que je peux construire pour vous.</p>
      </section>

      <section className={s.section} data-reveal>
        <Link className={s.caseCard} href="/realisations/agence-communication">
          <span className={s.tagCase}>Réalisation · client anonymisé</span>
          <h2 className={s.caseTitle}>Une agence de communication, 15 personnes</h2>
          <p className={s.caseText}>
            Reprendre un logiciel sans repartir de zéro : saisie du temps simplifiée, facturation préparée dans le logiciel comptable, alertes de production.
          </p>
          <span className={s.caseMore} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <p className={s.intro}>
          Les deux exemples suivants sont des scénarios types : ils montrent ce que je peux construire. Ce ne sont pas des références clients.
        </p>

        <div className={s.examples}>
          {EXAMPLES.map((ex) => (
            <article key={ex.title} className={s.example}>
              <span className={s.tagExample}>Exemple type</span>
              <h2 className={s.exampleTitle}>{ex.title}</h2>
              {ex.rows.map(([label, text]) => (
                <p key={label} className={s.row}>
                  <strong>{label}</strong> {text}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
