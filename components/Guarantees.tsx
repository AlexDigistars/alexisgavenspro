import styles from "./Guarantees.module.css";

const ITEMS = [
  "Garantie 3 mois sur les défauts",
  "Le code et la documentation vous appartiennent",
  "Chaque étape se commande séparément.",
];

/** Ligne de garanties sous la frise de la méthode, avec de petites coches. */
export default function Guarantees() {
  return (
    <ul className={styles.list}>
      {ITEMS.map((item) => (
        <li key={item} className={styles.item}>
          <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}
