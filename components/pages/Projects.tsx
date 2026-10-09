import type { ComponentType } from "react";
import Link from "next/link";
import DiagnosticLink from "@/components/DiagnosticLink";
import { AgencyBeforeAfter, CafeBeforeAfter, MenuisierBeforeAfter } from "@/components/CaseVisuals";
import s from "./Projects.module.css";

/** Les trois réalisations (clients anonymisés) : la première en pleine largeur, les deux autres côte à côte.
    En gros, ce qui a été construit ; en dessous, pour qui. */
const CASES: { href: string; tag: string; what: string; who: string; text: string; Visual: ComponentType }[] = [
  {
    href: "/realisations/agence-communication",
    tag: "Réalisation · client anonymisé",
    what: "Un logiciel de gestion",
    who: "pour une agence de communication de 15 personnes",
    text: "Repris et enrichi\u00a0: saisie du temps simplifiée, factures préparées, alertes de production.",
    Visual: AgencyBeforeAfter,
  },
  {
    href: "/realisations/artisan-menuisier",
    tag: "Réalisation · client anonymisé",
    what: "Un assistant IA",
    who: "pour un artisan menuisier",
    text: "Moins de soirées sur les devis, des demandes traitées plus vite, plus de temps à l'atelier.",
    Visual: MenuisierBeforeAfter,
  },
  {
    href: "/realisations/pme-distribution",
    tag: "Réalisation · entreprise anonymisée",
    what: "Une application mobile",
    who: "pour une PME de machines à café",
    text: "Pour gérer le parc de machines (vente, location, café en grains, interventions), utilisée chaque jour par l'équipe.",
    Visual: CafeBeforeAfter,
  },
];

export default function Projects() {
  return (
    <>
      <section className={s.hero} data-reveal>
        <h1 className={s.h1}>Réalisations</h1>
        <p className={s.lead}>
          Des outils en service, utilisés chaque jour. Voici quelques réalisations parmi d&apos;autres&nbsp;: chaque projet part
          d&apos;un métier différent.
        </p>
      </section>

      <section className={s.section} data-reveal>
        <ul className={s.grid}>
          {CASES.map(({ href, tag, what, who, text, Visual }, i) => (
            <li key={href} className={i === 0 ? `${s.card} ${s.featured}` : s.card}>
              <div className={s.visual}>
                <Visual />
              </div>
              <div className={s.body}>
                <span className={s.tag}>{tag}</span>
                <h2 className={s.title}>
                  {/* Le lien couvre toute la carte (voir .link::after) */}
                  <Link className={s.link} href={href}>
                    <span className={s.what}>{what}</span> <span className={s.who}>{who}</span>
                  </Link>
                </h2>
                <p className={s.text}>{text}</p>
                <span className={s.more} aria-hidden="true">
                  Voir l&apos;étude de cas
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Ce ne sont que des exemples : on invite à en parler */}
        <div className={s.moreCases}>
          <h2 className={s.moreTitle}>Ce ne sont que quelques exemples.</h2>
          <p className={s.moreText}>
            D&apos;autres outils sont en service dans d&apos;autres entreprises, et chaque projet est taillé pour un métier.
            Parlons du vôtre&nbsp;: je vous montrerai les réalisations les plus proches de votre situation.
          </p>
          <DiagnosticLink className={s.moreButton}>Réserver 20 min</DiagnosticLink>
        </div>
      </section>
    </>
  );
}
