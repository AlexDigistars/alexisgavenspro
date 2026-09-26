import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, LEGAL_UPDATED_AT } from "@/config/site";
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
          <p className={s.c14}>
            Ce site ne comporte aucun formulaire de contact. Vous pouvez me joindre par e-mail à {CONTACT_EMAIL} (messagerie
            hébergée par OVHcloud, en France), par téléphone, ou réserver un rendez-vous avec Calendly.
          </p>

          <h3 className={s.subTitle}>Demandes et rendez-vous</h3>
          <ul className={s.facts}>
            <li>
              <strong>Données recueillies par Calendly :</strong> votre nom, votre e-mail, vos réponses éventuelles aux questions
              du formulaire de réservation, puis la date du rendez-vous.
            </li>
            <li>
              <strong>Finalité :</strong> répondre à vos demandes et organiser le rendez-vous.
            </li>
            <li>
              <strong>Base légale :</strong> mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).
            </li>
            <li>
              <strong>Conservation :</strong> trois ans après le dernier échange.
            </li>
          </ul>

          <h3 className={s.subTitle}>Mesure d&apos;audience</h3>
          <ul className={s.facts}>
            <li>
              <strong>Outil :</strong> Vercel Web Analytics, sans cookie, qui ne produit que des statistiques agrégées.
            </li>
            <li>
              <strong>Base légale :</strong> intérêt légitime à connaître la fréquentation du site (article 6.1.f du RGPD).
            </li>
          </ul>

          <h3 className={s.subTitle}>Destinataires</h3>
          <p className={s.c14}>
            Vos données sont destinées uniquement à Alexis Gavens. Sous-traitants techniques : Vercel Inc. (hébergement et
            mesure d&apos;audience), Calendly LLC (prise de rendez-vous) et OVHcloud (messagerie).
          </p>

          <h3 className={s.subTitle}>Transferts hors de l&apos;Union européenne</h3>
          <p className={s.c14}>
            Vercel Inc. et Calendly LLC sont établis aux États-Unis. Ces transferts sont encadrés selon les garanties décrites
            par chaque prestataire dans sa politique de confidentialité :{" "}
            <a className={s.textLink} href="https://vercel.com/legal/privacy-policy" rel="noopener noreferrer">
              politique de confidentialité de Vercel
            </a>{" "}
            et{" "}
            <a className={s.textLink} href="https://calendly.com/legal/privacy-notice" rel="noopener noreferrer">
              politique de confidentialité de Calendly
            </a>
            .
          </p>

          <h3 className={s.subTitle}>Vos droits</h3>
          <p className={s.c14}>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
            d&apos;opposition et de limitation du traitement. Pour l&apos;exercer, écrivez à{" "}
            <a className={s.textLink} href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            . Vous pouvez aussi saisir la CNIL (cnil.fr).
          </p>
        </section>
        {" "}
        <section className={s.c10} data-reveal id="ml-cookies">
          <h2 className={s.c11}>
            Cookies et mesure d'audience
          </h2>
          {" "}
          <p className={s.c14}>
            Ce site n&apos;utilise aucun cookie de suivi : la mesure d&apos;audience (Vercel Web Analytics) fonctionne sans cookie. Aucun bandeau de consentement n&apos;est donc nécessaire.
          </p>
        </section>
        {" "}
        <section className={s.c15} data-reveal id="ml-contact">
          <h2 className={s.c11}>
            Une question ?
          </h2>
          {" "}
          <p className={s.c16}>
            Écrivez-moi ou appelez-moi :
          </p>
          <div className={s.contactLinks}>
            <a className={s.contactLink} href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <a className={s.contactLink} href={CONTACT_PHONE_HREF}>
              {CONTACT_PHONE}
            </a>
          </div>
        </section>
      </article>
    </div>
    {" "}
    {" "}
    </>
  );
}
