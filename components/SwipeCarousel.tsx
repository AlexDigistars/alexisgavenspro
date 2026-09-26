"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./SwipeCarousel.module.css";

type Props = {
  children: ReactNode;
  label: string;
  /** Titre de chaque carte, pour le nom des points (« Carte 2 sur 4 : Repenser »). */
  slideLabels: string[];
  /** Laisse la place au bouton Pause de la scène à droite de la rangée des points. */
  reserveControlSpace?: boolean;
};

/** Suit le réglage système « réduire les animations », y compris s'il change en cours de visite. */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

/** Carrousel à glisser (CSS scroll-snap) avec points indicateurs. */
export default function SwipeCarousel({ children, label, slideLabels, reserveControlSpace }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const count = Children.count(children);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(slides.indexOf(entry.target as HTMLElement));
        }
      },
      { root: track, threshold: 0.6 },
    );
    slides.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <div className={styles.carousel}>
      <div ref={trackRef} className={styles.track} role="region" aria-label={label} tabIndex={0}>
        {Children.map(children, (child) => (
          <div className={styles.slide}>{child}</div>
        ))}
      </div>
      <div className={reserveControlSpace ? `${styles.controls} ${styles.controlsReserved}` : styles.controls}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className={styles.dotButton}
            aria-label={`Carte ${i + 1} sur ${count} : ${slideLabels[i] ?? ""}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => goTo(i)}
          >
            <span className={i === active ? `${styles.dot} ${styles.dotActive}` : styles.dot} />
          </button>
        ))}
        <span className={styles.hint} aria-hidden="true">
          Glissez →
        </span>
      </div>
    </div>
  );
}
