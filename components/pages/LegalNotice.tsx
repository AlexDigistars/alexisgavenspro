import { CONTACT_EMAIL, CONTACT_PHONE_HREF, LEGAL_UPDATED_AT } from "@/config/site";
import s from "./LegalNotice.module.css";

// Généré depuis design-reference/MentionsLegales.html (textes et styles de la maquette).
export default function LegalNotice() {
  return (
    <>
    {" "}
    {" "}
    <div className={s.c1} data-reveal>
      <aside className={s.c2}>
        <span className={s.c3}>
          SUR CETTE PAGE
        </span>
        {" "}
        <a className={s.c4} href="#ml-editeur">
          Éditeur du site
        </a>
        {" "}
        <a className={s.c5} href="#ml-hebergeur">
          Hébergement
        </a>
        {" "}
        <a className={s.c5} href="#ml-pi">
          Propriété intellectuelle
        </a>
        {" "}
        <a className={s.c5} href="#ml-donnees">
          Données personnelles
        </a>
        {" "}
        <a className={s.c5} href="#ml-cookies">
          Cookies et mesure d'audience
        </a>
        {" "}
        <a className={s.c5} href="#ml-contact">
          Contact
        </a>
      </aside>
      {" "}
      <article className={s.c6}>
        <div className={s.c7}>
          <h1 className={s.c8}>
            Mentions légales
          </h1>
          {" "}
          <span className={s.c9}>
            Dernière mise à jour : {LEGAL_UPDATED_AT}
          </span>
        </div>
        {" "}
        <section className={s.c10} data-reveal id="ml-editeur">
          <h2 className={s.c11}>
            Éditeur du site
          </h2>
          {" "}
          <div className={s.c12}>
            <span className={s.c13}>
              Nom
            </span>
            <span>
              Alexis Gavens, entrepreneur individuel
            </span>
            {" "}
            <span className={s.c13}>
              Adresse
            </span>
            <span>
              14 rue René Cassin, 87270 Couzeix, France
            </span>
            {" "}
            <span className={s.c13}>
              SIRET
            </span>
            <span>
              924 817 315 00014
            </span>
            {" "}
            <span className={s.c13}>
              TVA
            </span>
            <span>
              TVA non applicable, article 293 B du CGI
            </span>
            {" "}
            <span className={s.c13}>
              Téléphone
            </span>
            <span>
              06 38 61 08 42
            </span>
            {" "}
            <span className={s.c13}>
              E-mail
            </span>
            <span>
              {CONTACT_EMAIL}
            </span>
            {" "}
            <span className={s.c13}>
              Directeur de publication
            </span>
            <span>
              Alexis Gavens
            </span>
          </div>
        </section>
        {" "}
        <section className={s.c10} data-reveal id="ml-hebergeur">
          <h2 className={s.c11}>
            Hébergement
          </h2>
          {" "}
          <p className={s.c14}>
            Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis — vercel.com.
          </p>
        </section>
        {" "}
        <section className={s.c10} data-reveal id="ml-pi">
          <h2 className={s.c11}>
            Propriété intellectuelle
          </h2>
          {" "}
          <p className={s.c14}>
            L'ensemble des contenus de ce site (textes, visuels, maquettes d'interfaces, animations) est la propriété d'Alexis Gavens, sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable. Les interfaces présentées utilisent des données fictives. Les noms de logiciels et de marques cités appartiennent à leurs propriétaires respectifs ; leur mention n'implique aucun partenariat.
          </p>
        </section>
        {" "}
        <section className={s.c10} data-reveal id="ml-donnees">
          <h2 className={s.c11}>
            Données personnelles
          </h2>
          {" "}
          <p className={s.c14}>
            Les informations transmises via le formulaire de contact ou la prise de rendez-vous (nom, e-mail, entreprise, message) servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni cédées à des tiers, et sont conservées au maximum trois ans après le dernier échange.
          </p>
          {" "}
          <p className={s.c14}>
            {"Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition. Pour l'exercer, écrivez à "}{CONTACT_EMAIL}. Vous pouvez aussi saisir la CNIL (cnil.fr).
          </p>
        </section>
        {" "}
        <section className={s.c10} data-reveal id="ml-cookies">
          <h2 className={s.c11}>
            Cookies et mesure d'audience
          </h2>
          {" "}
          <p className={s.c14}>
            Ce site utilise une mesure d'audience anonyme, sans cookie publicitaire ni suivi individuel. Aucun bandeau de consentement n'est donc nécessaire.
          </p>
        </section>
        {" "}
        <section className={s.c15} data-reveal id="ml-contact">
          <h2 className={s.c11}>
            Une question ?
          </h2>
          {" "}
          <p className={s.c16}>
            {"Écrivez-moi à "}<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" ou appelez le "}<a href={CONTACT_PHONE_HREF}>06 38 61 08 42</a>.
          </p>
        </section>
      </article>
    </div>
    {" "}
    {" "}
    </>
  );
}
