import styles from "./ToolsLine.module.css";

// Icônes génériques (aucun logo de marque).
const TOOLS: { name: string; icon: React.ReactNode }[] = [
  { name: "Pennylane", icon: <><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6" /><path d="M12 12v6M9.5 14h4" /></> },
  { name: "Google Agenda", icon: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></> },
  { name: "Gmail", icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></> },
  { name: "Excel", icon: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 9h16M4 15h16M10 9v12" /></> },
  { name: "Outlook", icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></> },
  { name: "Qonto", icon: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></> },
];

/** « Relié aux outils que vous utilisez déjà : » suivi des pastilles d'outils. */
export default function ToolsLine() {
  return (
    <div className={styles.line}>
      <span className={styles.label}>Relié aux outils que vous utilisez déjà :</span>
      <ul className={styles.list}>
        {TOOLS.map((tool) => (
          <li key={tool.name} className={styles.chip}>
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {tool.icon}
            </svg>
            {tool.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
