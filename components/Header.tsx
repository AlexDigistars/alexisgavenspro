"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/config/site";
import CalendlyLink from "./CalendlyLink";
import Logo from "./Logo";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/realisations")) return pathname.startsWith("/realisations");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  // Ferme le menu quand on change de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Rend le focus au bouton du menu à chaque fermeture (Échap, bouton ou navigation).
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
    } else if (wasOpen.current) {
      wasOpen.current = false;
      buttonRef.current?.focus();
    }
  }, [open]);

  // Menu ouvert : fond inerte, focus gardé dans le menu, défilement bloqué, Échap pour fermer.
  useEffect(() => {
    if (!open) return;
    const header = headerRef.current;
    const panel = panelRef.current;
    const button = buttonRef.current;
    if (!header || !panel || !button) return;

    // Tout ce qui est hors de l'en-tête devient inerte, ainsi que le logo.
    const inertTargets = [
      ...Array.from(document.body.children).filter((el) => el !== header),
      ...Array.from(header.querySelectorAll<HTMLElement>("[data-menu-inert]")),
    ].filter((el) => !el.hasAttribute("inert"));
    inertTargets.forEach((el) => el.setAttribute("inert", ""));

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () => [button, ...Array.from(panel.querySelectorAll<HTMLElement>("a[href], button"))];
    panel.querySelector<HTMLElement>("a[href]")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const index = items.indexOf(document.activeElement as HTMLElement);
      const next = e.shiftKey ? index - 1 : index + 1;
      e.preventDefault();
      items[(next + items.length) % items.length].focus();
    };

    // Si la fenêtre s'élargit jusqu'au menu bureau, on ferme le menu mobile.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      inertTargets.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.bar}>
        <div data-menu-inert>
          <Logo onClick={close} />
        </div>

        <nav className={styles.nav} aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? `${styles.link} ${styles.active}` : styles.link}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <CalendlyLink className={styles.cta}>Parlons de votre projet</CalendlyLink>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        ref={panelRef}
        id="menu-mobile"
        className={open ? `${styles.panel} ${styles.panelOpen}` : styles.panel}
        hidden={!open}
      >
        <nav className={styles.panelNav} aria-label="Navigation mobile">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? `${styles.panelLink} ${styles.active}` : styles.panelLink}
                aria-current={active ? "page" : undefined}
                onClick={close}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <CalendlyLink className={styles.panelCta} onClick={close}>
          Parlons de votre projet
        </CalendlyLink>
      </div>
    </header>
  );
}
