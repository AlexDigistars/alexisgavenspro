"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Scene.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
  /** Bloc observé par RevealObserver (animations lancées à l'arrivée à l'écran). */
  reveal?: boolean;
  /** Place le bouton en haut à droite quand le bas de la scène est occupé. */
  buttonPosition?: "bottom" | "top";
};

/**
 * Démonstration animée : bouton Pause / Reprendre, et pause automatique
 * quand la scène sort de l'écran (animation-play-state, voir globals.css).
 */
export default function Scene({ children, className, as: Tag = "div", id, reveal, buttonPosition = "bottom" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [offscreen, setOffscreen] = useState(false);
  // Pause réellement appliquée : on laisse d'abord finir un éventuel fondu,
  // pour que la scène figée reste lisible (deux textes superposés sinon).
  const [frozen, setFrozen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!paused || !el) {
      setFrozen(false);
      return;
    }
    const start = performance.now();
    let timer: number | undefined;
    const inFade = () =>
      Array.from(el.querySelectorAll<HTMLElement>("*")).some((node) => {
        if (!node.getAnimations().length) return false;
        const opacity = Number(getComputedStyle(node).opacity);
        return opacity > 0.05 && opacity < 0.95;
      });
    const check = () => {
      if (!inFade() || performance.now() - start > 1500) setFrozen(true);
      else timer = window.setTimeout(check, 50);
    };
    check();
    return () => window.clearTimeout(timer);
  }, [paused]);

  // Le bouton garde sa taille (44 px) même dans une maquette réduite par « zoom ».
  const [buttonZoom, setButtonZoom] = useState<number | undefined>(undefined);
  useEffect(() => {
    const el = ref.current as (HTMLElement & { currentCSSZoom?: number }) | null;
    if (!el) return;
    const update = () => {
      const zoom = el.currentCSSZoom ?? 1;
      setButtonZoom(zoom > 0 && Math.abs(zoom - 1) > 0.01 ? 1 / zoom : undefined);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setOffscreen(!entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [styles.scene, className].filter(Boolean).join(" ");
  const buttonClass = buttonPosition === "top" ? `${styles.toggle} ${styles.toggleTop}` : styles.toggle;

  return (
    <Tag
      ref={ref as never}
      className={classes}
      id={id}
      data-reveal={reveal || undefined}
      data-scene=""
      data-paused={frozen || offscreen ? "true" : undefined}
    >
      {children}
      <button
        type="button"
        className={buttonClass}
        style={buttonZoom ? { zoom: buttonZoom } : undefined}
        aria-label={paused ? "Reprendre l'animation" : "Mettre en pause l'animation"}
        onClick={() => setPaused((v) => !v)}
      >
        <span className={styles.pill} aria-hidden="true">
          {paused ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" focusable="false">
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" focusable="false">
              <rect x="5" y="4" width="5" height="16" rx="1.5" />
              <rect x="14" y="4" width="5" height="16" rx="1.5" />
            </svg>
          )}
        </span>
      </button>
    </Tag>
  );
}
