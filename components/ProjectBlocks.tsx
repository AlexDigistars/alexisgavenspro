// Blocs communs aux études de cas « artisan menuisier » et « PME de machines à café ».
import type { ReactNode } from "react";
import Link from "next/link";
import DiagnosticLink from "@/components/DiagnosticLink";
import s from "@/components/pages/ProjectCase.module.css";

/** Haut de page : étiquette, titre, chapeau, pastilles éventuelles, bouton, et la démonstration à droite. */
export function CaseHero({ tag, title, lead, pills, children }: { tag: string; title: string; lead: string; pills?: string[]; children: ReactNode }) {
  return (
    <section className={s.hero} data-reveal>
      <div className={s.heroInner}>
        <div className={s.heroText}>
          <span className={s.tag}>{tag}</span>
          <h1 className={s.h1}>{title}</h1>
          <p className={s.lead}>{lead}</p>
          {pills && (
            <ul className={s.pills}>
              {pills.map((pill) => (
                <li key={pill}>{pill}</li>
              ))}
            </ul>
          )}
          <DiagnosticLink className={s.primary}>Réserver 20 min</DiagnosticLink>
        </div>
        <div className={s.heroVisual}>{children}</div>
      </div>
    </section>
  );
}

/** « En 30 secondes » : avant, ce que j'ai fait, après. */
export function InShort({ before, did, after }: { before: string; did: string; after: string }) {
  const cols = [
    { title: "Avant", text: before, tone: s.toneBefore, icon: Icons.cross },
    { title: "Ce que j'ai fait", text: did, tone: s.toneDid, icon: Icons.tools },
    { title: "Après", text: after, tone: s.toneAfter, icon: Icons.check },
  ];
  return (
    <section className={`${s.section} ${s.inShortSection}`} data-reveal>
      <h2 className={s.h2}>En 30 secondes</h2>
      <div className={s.inShort}>
        {cols.map((col) => (
          <div key={col.title} className={`${s.inShortCol} ${col.tone}`}>
            <h3 className={s.inShortTitle}>
              <span className={s.inShortIcon} aria-hidden="true">
                {col.icon}
              </span>
              {col.title}
            </h3>
            <p className={s.inShortText}>{col.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** « Avant / après » : le visuel de la carte des réalisations, en grand. */
export function BeforeAfterSection({ children }: { children: ReactNode }) {
  return (
    <section className={`${s.section} ${s.sectionTop}`} data-reveal>
      <h2 className={s.h2}>Avant / après</h2>
      <div className={s.bigVisual}>{children}</div>
    </section>
  );
}

/** Ce que fait l'outil : des points avec icône, une démonstration à côté, et une phrase mise en évidence. */
export function IconPoints({
  title,
  items,
  highlight,
  children,
}: {
  title: string;
  items: { icon: ReactNode; text: string }[];
  highlight?: string;
  children: ReactNode;
}) {
  return (
    <section className={`${s.section} ${s.sand}`} data-reveal>
      <h2 className={s.h2}>{title}</h2>
      <div className={s.pointsGrid}>
        <ul className={s.points}>
          {items.map((item) => (
            <li key={item.text} className={s.point}>
              <span className={s.pointIcon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={s.pointText}>{item.text}</span>
            </li>
          ))}
        </ul>
        {children}
      </div>
      {highlight && (
        <p className={s.highlight}>
          <span className={s.highlightIcon} aria-hidden="true">
            {Icons.shield}
          </span>
          {highlight}
        </p>
      )}
    </section>
  );
}

/** Ce que ça change : des pastilles, sans chiffres. */
export function Changes({ items }: { items: { icon: ReactNode; text: string }[] }) {
  return (
    <section className={s.section} data-reveal>
      <h2 className={s.h2}>Ce que ça change</h2>
      <ul className={s.changes}>
        {items.map((item) => (
          <li key={item.text} className={s.change}>
            <span className={s.changeIcon} aria-hidden="true">
              {item.icon}
            </span>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Appel à l'action de fin de page. */
export function ProjectCta({ title }: { title: string }) {
  return (
    <section className={s.cta} data-reveal>
      <h2 className={s.ctaTitle}>{title}</h2>
      <div className={s.ctaActions}>
        <DiagnosticLink className={s.ctaPrimary}>Réserver 20 min</DiagnosticLink>
        <Link className={s.backLink} href="/realisations">
          Retour aux réalisations
        </Link>
      </div>
    </section>
  );
}

const svg = (paths: ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    {paths}
  </svg>
);

/** Petites icônes génériques (aucun logo de marque). */
export const Icons = {
  cross: svg(<path d="M6 6l12 12M18 6L6 18" />),
  check: svg(<path d="M5 12l5 5L20 7" />),
  tools: svg(<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />),
  shield: svg(
    <>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>,
  ),
  quote: svg(
    <>
      <path d="M14 3H6v18h12V7z" />
      <path d="M14 3v4h4M9 12h6M9 16h4" />
    </>,
  ),
  inbox: svg(
    <>
      <path d="M3 13l3-8h12l3 8v6H3z" />
      <path d="M3 13h5l1 3h6l1-3h5" />
    </>,
  ),
  repeat: svg(
    <>
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4" />
      <path d="M21 13v2a3 3 0 0 1-3 3H3" />
    </>,
  ),
  calendar: svg(
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>,
  ),
  clock: svg(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>,
  ),
  send: svg(<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />),
  feather: svg(<path d="M20.2 12.2a6 6 0 0 0-8.5-8.5L5 10.5V19h8.5zM16 8L2 22M17.5 15H9" />),
  card: svg(
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="10" r="2" />
      <path d="M14 9h4M14 13h4M6 16h12" />
    </>,
  ),
  camera: svg(
    <>
      <path d="M3 8h4l2-3h6l2 3h4v12H3z" />
      <circle cx="12" cy="13" r="3.5" />
    </>,
  ),
  truck: svg(
    <>
      <path d="M1 6h13v10H1zM14 10h4l3 3v3h-7z" />
      <circle cx="5.5" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>,
  ),
};
