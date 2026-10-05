import type { ReactNode } from "react";
import { CALENDLY_URL } from "@/config/site";

type Props = {
  children: ReactNode;
  className?: string;
};

const srOnly = { position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)", whiteSpace: "nowrap" } as const;

/** Réservation directe d'un créneau : ouvre Calendly dans un nouvel onglet. */
export default function CalendlyLink({ children, className }: Props) {
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span style={srOnly}> (nouvel onglet)</span>
    </a>
  );
}
