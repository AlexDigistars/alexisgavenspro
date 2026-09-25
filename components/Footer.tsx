import Link from "next/link";
import { LINKEDIN_URL } from "@/config/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2026 Alexis Gavens · Entrepreneur individuel</span>
        <div className={styles.links}>
          <Link href="/mentions-legales">Mentions légales</Link>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
