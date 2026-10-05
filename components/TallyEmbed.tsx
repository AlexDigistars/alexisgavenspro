"use client";

import { useEffect, useRef } from "react";
import { TALLY_FORM_ID } from "@/config/site";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";
const EMBED_SRC = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

/**
 * Formulaire Tally, avec le code d'intégration officiel de Tally (hauteur dynamique).
 * Le script de Tally n'est chargé que lorsque la section approche de l'écran.
 */
export default function TallyEmbed({ className }: { className?: string }) {
  const ref = useRef<HTMLIFrameElement>(null);

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
      { rootMargin: "600px 0px" },
    );
    io.observe(frame);
    return () => {
      io.disconnect();
      cleanFocus();
    };
  }, []);

  return (
    <>
      <iframe
        ref={ref}
        className={className}
        data-tally-src={EMBED_SRC}
        loading="lazy"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Formulaire de diagnostic"
      ></iframe>
      <noscript>
        <a href={`https://tally.so/r/${TALLY_FORM_ID}`}>Formulaire de diagnostic</a>
      </noscript>
    </>
  );
}
