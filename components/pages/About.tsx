import Image from "next/image";
import Link from "next/link";
import portrait from "@/public/alexis-portrait-hd.jpg";
import CalendlyLink from "@/components/CalendlyLink";
import s from "./About.module.css";

// Généré depuis design-reference/APropos.html (textes et styles de la maquette).
export default function About() {
  return (
    <>
    {" "}
    {" "}
    <section className={s.c1} data-reveal>
      <div className={s.c2}>
        <div className={s.c3}>
          <span className={s.c4}>
            À propos
          </span>
          {" "}
          <h1 className={s.c5}>
            J'ai utilisé ces outils avant de les créer.
          </h1>
          {" "}
          <p className={s.c6}>
            Ancien responsable de l&apos;administration des ventes et de la logistique, je pars de votre travail quotidien pour concevoir ou faire évoluer votre logiciel.
          </p>
          <CalendlyLink className={`${s.c46} ${s.introCta}`}>
            Réserver 20 min
          </CalendlyLink>
        </div>
        {" "}
        <div className={s.c7}>
          <Image className={s.c8} src={portrait} alt="Portrait d'Alexis Gavens" width={440} height={540} priority sizes="(max-width: 1023px) 100vw, 440px" />
          {" "}
          <div className={s.c9}>
            <span className={s.c10}>
              Alexis Gavens
            </span>
            <span className={s.c11}>
              Logiciels métier sur mesure · Formation IA
            </span>
          </div>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c12} data-reveal>
      <div className={s.c13}>
        <span className={s.c14}>
          Parcours
        </span>
        {" "}
        <h2 className={s.c15}>
          Du terrain au logiciel.
        </h2>
        {" "}
        <p className={s.c16}>
          Administration, qualité, logistique : j'ai connu les méthodes de travail qui déraillent, les fichiers en double et les outils qui ralentissent au lieu d'aider.
        </p>
      </div>
      {" "}
      <div className={s.c17}>
        <div className={s.c18}>
          <div className={`${s.c19} ${s.prog}`}></div>
        </div>
        {" "}
        <div className={s.c20}>
          <span className={s.c21}></span>
          <span className={s.c22}>
            2020 – 2021 · QUALITÉ & RISQUES
          </span>
          <span className={s.c23}>
            Référent qualité et gestion des risques, EHPAD
          </span>
        </div>
        {" "}
        <div className={s.c20}>
          <span className={s.c21}></span>
          <span className={s.c22}>
            2021 – 2023 · SERVICE PUBLIC
          </span>
          <span className={s.c23}>
            Agent instructeur en préfecture
          </span>
        </div>
        {" "}
        <div className={s.c20}>
          <span className={s.c21}></span>
          <span className={s.c22}>
            2023 – 2024 · ENTREPRENEURIAT
          </span>
          <span className={s.c23}>
            Cofondateur d'une activité e-commerce
          </span>
          <span className={s.c24}>
            Marque, contenus, publicité, fournisseurs, commandes, service client : une vue complète d'une petite entreprise.
          </span>
        </div>
        {" "}
        <div className={s.c20}>
          <span className={s.c21}></span>
          <span className={s.c22}>
            2024 – 2026 · OPÉRATIONS
          </span>
          <span className={s.c23}>
            Responsable administration des ventes (ADV) & logistique
          </span>
          <span className={s.c24}>
            Commandes, facturation, stocks, livraisons. Automatisation des livraisons récurrentes, puis une application mobile de suivi des machines, utilisée chaque jour par l&apos;équipe.
          </span>
        </div>
        {" "}
        <div className={s.c25}>
          <span className={s.c26}></span>
          <span className={s.c27}>
            Depuis 2026 · AUJOURD'HUI
          </span>
          <span className={s.c23}>
            Logiciels métier sur mesure et formation IA
          </span>
          <span className={s.c28}>
            J'accompagne les PME pour créer, repenser et faire évoluer leurs outils, et former leurs équipes.
          </span>
        </div>
        {" "}
        <div className={s.c29}>
          <span className={s.c30}>
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10L12 5 2 10l10 5z" />
              <path d="M6 12v5c3 2 9 2 12 0v-5" />
            </svg>
            Master 2 Management, IAE Limoges
          </span>
          {" "}
          <span className={s.c30}>
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="9" r="6" />
              <path d="M9 14l-2 8 5-3 5 3-2-8" />
            </svg>
            Certification Google IA générative
          </span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c31} data-reveal>
      <h2 className={s.c15}>
        Ce que ça change pour vous.
      </h2>
      {" "}
      <div className={s.c32}>
        <div className={s.c33}>
          <span className={`${s.c34} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <span className={s.c35}>
            On parle métier, pas technique
          </span>
          <span className={s.c24}>
            Je comprends vos contraintes parce que je les ai vécues. Pas besoin de tout traduire.
          </span>
        </div>
        {" "}
        <div className={s.c33}>
          <span className={`${s.c36} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18h6M10 22h4" />
              <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
            </svg>
          </span>
          <span className={s.c35}>
            Force de proposition
          </span>
          <span className={s.c24}>
            Je questionne votre besoin, je propose des options, et je vous dis quand un développement n'est pas utile.
          </span>
        </div>
        {" "}
        <div className={s.c33}>
          <span className={`${s.c37} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <span className={s.c35}>
            Une méthode structurée.
          </span>
          <span className={s.c24}>
            Je clarifie les besoins, je vous présente les écrans et nous validons chaque étape.
          </span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c38} data-reveal id="ap-contact">
      <div className={s.c39}>
        <Link className={s.earlyLink} href="/realisations/early">
          Voir le logiciel repris pour Early →
        </Link>
      </div>
      {" "}
      <div className={s.c43}>
        <span className={s.c44}>
          On se rencontre ?
        </span>
        {" "}
        <span className={s.c45}>
          20 minutes pour faire connaissance et parler de votre projet. Partout en France, sur site ou à distance.
        </span>
        {" "}
        <CalendlyLink className={s.c46}>
          Réserver 20 min
        </CalendlyLink>
      </div>
    </section>
    {" "}
    {" "}
    </>
  );
}
