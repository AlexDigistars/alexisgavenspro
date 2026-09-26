"use client";

import { useEffect, useState } from "react";
import styles from "./CaseToc.module.css";

const ACTS = [
  { act: "1", href: "#avant", number: "01", label: "Avant" },
  { act: "2", href: "#methode", number: "02", label: "Méthode" },
  { act: "3", href: "#logiciel", number: "03", label: "Le logiciel" },
  { act: "4", href: "#resultats", number: "04", label: "Résultats" },
];

/**
 * Sommaire de l'étude de cas (bureau, ≥ 1100 px) : reste visible pendant la
 * lecture et met en évidence l'acte en cours. Les sections portent data-act.
 */
export default function CaseToc() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-act]"));
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const visible = new Map<Element, string>();
    // Une section est « en cours » quand elle croise une ligne située vers le tiers haut de l'écran.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target, (entry.target as HTMLElement).dataset.act ?? "");
          else visible.delete(entry.target);
        }
        const current = sections.find((el) => visible.has(el));
        setActive(current ? current.dataset.act ?? null : null);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.toc} aria-label="Sommaire de l'étude de cas">
      <ol className={styles.list}>
        {ACTS.map((item) => {
          const isActive = active === item.act;
          return (
            <li key={item.act}>
              <a
                href={item.href}
                className={isActive ? `${styles.link} ${styles.active}` : styles.link}
                aria-current={isActive ? "true" : undefined}
              >
                <span className={styles.number}>{item.number}</span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
