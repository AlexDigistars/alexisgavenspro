import type { ReactNode } from "react";
import { CALENDLY_URL } from "@/config/site";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

/** Bouton d'appel à l'action : ouvre la prise de rendez-vous dans un nouvel onglet. */
export default function CalendlyLink({ children, className, onClick }: Props) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
