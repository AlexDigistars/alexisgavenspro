import Link from "next/link";
import s from "./Projects.module.css";

const OTHER_CASES = [
  {
    href: "/realisations/menuisier-toulouse",
    title: "Un menuisier à Toulouse et son assistant IA",
    text: "Mails résumés, devis et relances préparés, journées organisées, puis un nouveau site et une fiche Google active : plus de temps pour son métier.",
  },
  {
    href: "/realisations/pme-distribution",
    title: "Une PME de distribution à Paris : commandes, stock et factures reliés",
    text: "Les commandes arrivent au bon endroit, le stock prévient avant la rupture et les factures partent dans le logiciel comptable.",
  },
];

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Projects() {
  return (
    <>
      <section className={s.hero} data-reveal>
        <h1 className={s.h1}>Réalisations</h1>
        <p className={s.lead}>Des exemples de ce que j&apos;ai construit, et de ce que je peux construire pour vous.</p>
      </section>

      <section className={s.section} data-reveal>
        <Link className={s.caseCard} href="/realisations/agence-communication">
          <span className={s.tagCase}>Réalisation · client anonymisé</span>
          <h2 className={s.caseTitle}>Une agence de communication, 15 personnes</h2>
          <p className={s.caseText}>
            Reprendre un logiciel sans repartir de zéro : saisie du temps simplifiée, facturation préparée dans le logiciel comptable, alertes de production.
          </p>
          <span className={s.caseMore} aria-hidden="true">
            <ArrowIcon />
          </span>
        </Link>

        <div className={s.typeGrid}>
          {OTHER_CASES.map((p) => (
            <Link key={p.href} className={s.typeCard} href={p.href}>
              <span className={s.tagCase}>Réalisation · client anonymisé</span>
              <h2 className={s.typeTitle}>{p.title}</h2>
              <p className={s.typeText}>{p.text}</p>
              <span className={s.typeMore} aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
