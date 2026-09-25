import CalendlyLink from "@/components/CalendlyLink";
import styles from "./page.module.css";

// Page d'accueil provisoire : le contenu des maquettes arrive au lot 2.
export default function Home() {
  return (
    <section className={styles.placeholder}>
      <span className={styles.label}>Logiciels métier sur mesure pour PME</span>
      <h1 className={styles.title}>Des logiciels métier qui épousent votre façon de travailler.</h1>
      <p className={styles.text}>Je conçois, reprends et fais évoluer les outils internes des PME.</p>
      <CalendlyLink className={styles.cta}>Réserver 20 min d&apos;échange</CalendlyLink>
    </section>
  );
}
