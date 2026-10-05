"use client";

import { useEffect, useRef, useState } from "react";
import { preconnect } from "react-dom";
import st from "./TallyEmbed.module.css";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

/**
 * Formulaire Tally, avec le code d'intégration officiel de Tally (hauteur dynamique).
 * Le formulaire se charge quand la section arrive à 800 px de l'écran (connexion à Tally préparée dès l'affichage de la page).
 */
type Props = {
  formId: string;
  title: string;
  className?: string;
  /** Hauteur réservée avant le chargement du formulaire (évite le saut de page). */
  height?: number;
};

export default function TallyEmbed({ formId, title, className, height = 500 }: Props) {
  // <link rel="preconnect" href="https://tally.so"> dans l'en-tête de la page
  preconnect("https://tally.so");
  const ref = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;

    // Reprise du code officiel de Tally : charge le script, sinon renseigne directement l'adresse du formulaire.
    const load = () => {
      const show = () => {
        if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
        else document.querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])").forEach((e) => (e.src = e.dataset.tallySrc ?? ""));
      };
      if (typeof window.Tally !== "undefined") show();
      else if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
        const s = document.createElement("script");
        s.src = EMBED_SCRIPT;
        s.onload = show;
        s.onerror = show;
        document.body.appendChild(s);
      }
    };

    // Contour de focus visible quand le clavier entre dans le formulaire (le cadre ne reçoit pas :focus lui-même).
    const onBlur = () => {
      if (document.activeElement === frame) frame.setAttribute("data-focused", "");
    };
    const onFocus = () => frame.removeAttribute("data-focused");
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    const cleanFocus = () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return cleanFocus;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(frame);
    return () => {
      io.disconnect();
      cleanFocus();
    };
  }, [formId]);

  if (!formId) return <p className={className}>Formulaire bientôt disponible.</p>;

  return (
    <div className={st.wrap} style={loaded ? undefined : { minHeight: height }}>
      {!loaded && (
        <p className={st.loading} role="status">
          Chargement du formulaire…
        </p>
      )}
      <iframe
        ref={ref}
        className={className}
        data-tally-src={src}
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
        onLoad={(e) => {
          if (e.currentTarget.getAttribute("src")) setLoaded(true);
        }}
      ></iframe>
      <noscript>
        <a href={`https://tally.so/r/${formId}`}>{title}</a>
      </noscript>
    </div>
  );
}
