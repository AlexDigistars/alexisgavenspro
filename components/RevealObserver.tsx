"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Ajoute la classe `is-visible` aux blocs `[data-reveal]` quand ils entrent à l'écran :
 * leurs animations démarrent à ce moment-là (voir globals.css), puis bouclent.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const blocks = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      blocks.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    blocks.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
