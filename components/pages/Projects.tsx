import type { ComponentType } from "react";
import Link from "next/link";
import { AgencyBeforeAfter, CafeBeforeAfter, MenuisierBeforeAfter } from "@/components/CaseVisuals";
import s from "./Projects.module.css";

/** Les trois réalisations (clients anonymisés) : la première en pleine largeur, les deux autres côte à côte. */
const CASES: { href: string; tag: string; title: string; text: string; Visual: ComponentType }[] = [
  {
    href: "/realisations/agence-communication",
    tag: "Réalisation · client anonymisé",
    title: "Une agence de communication, 15 personnes",
    text: "Un logiciel de gestion repris et enrichi : saisie du temps simplifiée, factures préparées, alertes de production.",
    Visual: AgencyBeforeAfter,
  },
  {
    href: "/realisations/artisan-menuisier",
    tag: "Réalisation · client anonymisé",
    title: "Un artisan menuisier et son assistant IA",
    text: "Moins de soirées sur les devis, des demandes traitées plus vite, plus de temps à l'atelier.",
    Visual: MenuisierBeforeAfter,
  },
  {
    href: "/realisations/pme-distribution",
    tag: "Réalisation · en poste, entreprise anonymisée",
    title: "Une PME de machines à café",
    text: "Vente, location, café en grains et interventions : une application mobile pour gérer le parc de machines, utilisée chaque jour par l'équipe.",
    Visual: CafeBeforeAfter,
  },
];

export default function Projects() {
  return (
    <>
      <section className={s.hero} data-reveal>
        <h1 className={s.h1}>Réalisations</h1>
        <p className={s.lead}>Des outils en service, utilisés chaque jour.</p>
      </section>

      <section className={s.section} data-reveal>
        <ul className={s.grid}>
          {CASES.map(({ href, tag, title, text, Visual }, i) => (
            <li key={href} className={i === 0 ? `${s.card} ${s.featured}` : s.card}>
              <div className={s.visual}>
                <Visual />
              </div>
              <div className={s.body}>
                <span className={s.tag}>{tag}</span>
                <h2 className={s.title}>
                  {/* Le lien couvre toute la carte (voir .link::after) */}
                  <Link className={s.link} href={href}>
                    {title}
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
      </section>
    </>
  );
}
