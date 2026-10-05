import type { ReactNode } from "react";
import Link from "next/link";
import { DIAGNOSTIC_PATH } from "@/config/site";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

/** Bouton d'appel à l'action : mène à la page de diagnostic, dans le même onglet. */
export default function DiagnosticLink({ children, className, onClick }: Props) {
  return (
    <Link href={DIAGNOSTIC_PATH} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
