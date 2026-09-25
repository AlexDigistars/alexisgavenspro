"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./SwipeCarousel.module.css";

type Props = {
  children: ReactNode;
  label: string;
};

/** Carrousel à glisser (CSS scroll-snap) avec points indicateurs. */
export default function SwipeCarousel({ children, label }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
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
    const slide = trackRef.current?.children[index] as HTMLElement | undefined;
    if (!slide || !trackRef.current) return;
    trackRef.current.scrollTo({ left: slide.offsetLeft - trackRef.current.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className={styles.carousel}>
      <div ref={trackRef} className={styles.track} role="region" aria-label={label} tabIndex={0}>
        {Children.map(children, (child) => (
          <div className={styles.slide}>{child}</div>
        ))}
      </div>
      <div className={styles.controls}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className={styles.dotButton}
            aria-label={`Afficher l'élément ${i + 1} sur ${count}`}
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
