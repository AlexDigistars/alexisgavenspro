// Blocs communs aux études de cas (artisan, PME de distribution) : mêmes styles que l'étude de cas de l'agence.
import type { ReactNode } from "react";
import Link from "next/link";
import DiagnosticLink from "@/components/DiagnosticLink";
import s from "@/components/pages/ProjectCase.module.css";

export function Check({ color = "#1D5C57" }: { color?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={s.checks}>
      {items.map((item) => (
        <li key={item}>
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Une fonctionnalité : étiquette, titre, 3 puces, et le visuel à côté. */
export function Feature({ label, title, items, reverse, children }: { label: string; title: string; items: string[]; reverse?: boolean; children: ReactNode }) {
  return (
    <div className={reverse ? `${s.feature} ${s.featureReverse}` : s.feature}>
      <div className={s.featureText}>
        <span className={s.label}>{label}</span>
        <h3 className={s.h3}>{title}</h3>
        <CheckList items={items} />
      </div>
      {children}
    </div>
  );
}

/** La situation de départ : 3 cartes. */
export function Pains({ items }: { items: { title: string; text: string; icon: ReactNode }[] }) {
  return (
    <ul className={s.pains}>
      {items.map((p) => (
        <li key={p.title} className={s.pain}>
          <span className={s.painIcon} aria-hidden="true">
            {p.icon}
          </span>
          <h3 className={s.painTitle}>{p.title}</h3>
          <p className={s.painText}>{p.text}</p>
        </li>
      ))}
    </ul>
  );
}

/** Le déroulé : frise de 3 étapes. */
export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className={s.timeline}>
      <span className={s.line} aria-hidden="true"></span>
      <ol className={s.steps}>
        {items.map((step, i) => (
          <li key={step.title} className={s.step}>
            <span className={s.stepNumber} aria-hidden="true">
              {i + 1}
            </span>
            <span className={s.stepBody}>
              <span className={s.stepTitle}>{step.title}</span>
              <p className={s.stepText}>{step.text}</p>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Appel à l'action de fin de page. */
export function ProjectCta({ title, text }: { title: string; text: string }) {
  return (
    <section className={s.cta} data-reveal>
      <h2 className={s.ctaTitle}>{title}</h2>
      <p className={s.ctaText}>{text}</p>
      <div className={s.ctaActions}>
        <DiagnosticLink className={s.primary}>Réserver 20 min</DiagnosticLink>
        <Link className={s.backLink} href="/realisations">
          Retour aux réalisations
        </Link>
      </div>
    </section>
  );
}

/** Petites icônes génériques (aucun logo de marque). */
export const Icons = {
  moon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  phoneMissed: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
      <path d="M16 2l6 6M22 2l-6 6" />
    </svg>
  ),
  hourglass: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2h12M6 22h12M7 2v4a5 5 0 0 0 10 0V2M7 22v-4a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  mail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  sheet: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M4 9h16M4 15h16M10 9v12" />
    </svg>
  ),
  copy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  ),
  eye: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  tools: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
    </svg>
  ),
  hand: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};
