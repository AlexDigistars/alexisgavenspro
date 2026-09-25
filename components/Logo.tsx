import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className={styles.logo} onClick={onClick} aria-label="Alexis Gavens, accueil">
      <span className={styles.mark} aria-hidden="true">AG</span>
      <span className={styles.name}>Alexis Gavens</span>
    </Link>
  );
}
