import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <section className={styles.placeholder}>
      <span className={styles.label}>Erreur 404</span>
      <h1 className={styles.title}>Cette page n&apos;existe pas (ou pas encore).</h1>
      <Link href="/" className={styles.cta}>
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
