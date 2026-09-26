import Guarantees from "@/components/Guarantees";
import ToolsLine from "@/components/ToolsLine";
import Scene from "@/components/Scene";
import Image from "next/image";
import portrait from "@/public/alexis-portrait-hd.jpg";
import SwipeCarousel from "@/components/SwipeCarousel";
import Link from "next/link";
import CalendlyLink from "@/components/CalendlyLink";
import { CONTACT_EMAIL, CONTACT_PHONE_HREF } from "@/config/site";
import s from "./HomeMobile.module.css";

// Généré depuis design-reference/AccueilMobile.html (textes et styles de la maquette).
export default function HomeMobile() {
  return (
    <>
    {" "}
    {" "}
    <section className={s.c1} data-reveal>
      <div className={s.c2}>
        <div className={s.c3}>
          <span className={`${s.c4} ${s.pulse}`}></span>
          Pour les PME de services · Partout en France
        </div>
        {" "}
        <h1 className={s.c5}>
          Je crée des logiciels métier sur mesure pour vous.
        </h1>
        {" "}
        <p className={s.c6}>
          Que vous partiez de zéro ou d&apos;un logiciel existant : un seul outil pour piloter votre entreprise et en finir avec les ressaisies.
        </p>
        {" "}
        <div className={s.ctaStack}>
          <CalendlyLink className={s.c7}>
            Réserver 20 min
          </CalendlyLink>
          <span className={s.ctaNote}>20 minutes, gratuit et sans engagement.</span>
          <Link className={s.projectLink} href="/realisations/early">
            Voir un projet réalisé →
          </Link>
        </div>
        {" "}
        <Scene className={s.c8} shift={3.5}>
          <div className={s.c9}>
            <span className={s.c10}>
              Suivi des affaires
            </span>
            <span className={s.c11}>
              Exemple · données fictives
            </span>
          </div>
          {" "}
          <div className={s.c12}>
            <span className={s.c13}>
              Ballon — Leroy
            </span>
            <span className={s.c14}>
              Devis
            </span>
          </div>
          {" "}
          <div className={s.c15}>
            <span className={s.c16}>
              Chaudière — Martin
            </span>
            <span className={`${s.c17} ${s.status}`}>
              Facturé
            </span>
          </div>
          {" "}
          <div className={s.c12}>
            <span className={s.c13}>
              Dépannage — Roux
            </span>
            <span className={s.c18}>
              Intervention
            </span>
          </div>
          {" "}
          <div className={`${s.c19} ${s.toast}`}>
            <span className={s.c20}>
              <svg aria-hidden="true" focusable="false" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <span className={s.c21}>
              <span className={s.c22}>
                Facture envoyée à M. Martin
              </span>
              <span className={s.c23}>
                Via Pennylane · à l'instant
              </span>
            </span>
          </div>
        </Scene>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c24} data-reveal>
      <span className={s.c25}>
        Le constat
      </span>
      {" "}
      <h2 className={s.c26}>
        De l&apos;éparpillement à un seul logiciel.
      </h2>
      {" "}
      <Scene className={s.stage}>
        <div className={s.c27}>
          <span className={`${s.c28} ${s.tabA}`}>
            Aujourd'hui
          </span>
          <span className={`${s.c28} ${s.tabB}`}>
            Demain
          </span>
        </div>
        {" "}
        <div className={s.c29}>
          <div className={`${s.c30} ${s.stA}`}>
            <div className={s.c31}>
              Suivi_commandes_v3_FINAL.xlsx
            </div>
            {" "}
            <div className={s.c32}>
              Planning techniciens (2).xlsx
            </div>
            {" "}
            <div className={s.c33}>
              <strong>
                RE: RE: TR: dispo mardi ?
              </strong>
              <span className={s.c34}>
                23 messages
              </span>
            </div>
            {" "}
            <div className={s.c35}>
              Rappeler M. Petit pour le devis ??
            </div>
          </div>
          {" "}
          <div className={`${s.c36} ${s.stB}`}>
            <div className={s.c37}>
              Commandes
            </div>
            {" "}
            <div className={s.c37}>
              Planning
            </div>
            {" "}
            <div className={s.c37}>
              Clients
            </div>
            {" "}
            <div className={s.c37}>
              Factures
            </div>
          </div>
        </div>
      </Scene>
    </section>
    {" "}
    {" "}
    <section className={s.c41} data-reveal>
      <h2 className={s.c42}>
        Créer, repenser, améliorer.
      </h2>
      {" "}
      <div className={s.stack}>
        <div className={s.c44}>
          <div className={s.c45}>
            <div className={s.c46}></div>
            <div className={s.c47}>
              <div className={s.c48}></div>
              <div className={s.c49}></div>
            </div>
          </div>
          {" "}
          <span className={s.c50}>
            Créer
          </span>
          {" "}
          <span className={s.c51}>
            Vous travaillez avec des fichiers Excel et du papier : je crée le logiciel qui les remplace, autour de votre façon de travailler.
          </span>
        </div>
        <div className={s.c44}>
          <div className={s.c52}>
            <div className={s.c53}>
              <span>
                <s className={s.c54}>
                  Ressaisie Excel
                </s>
                {" → "}
                <strong>
                  Saisie unique
                </strong>
              </span>
            </div>
            <div className={s.c53}>
              <span>
                <s className={s.c54}>
                  Devis à la main
                </s>
                {" → "}
                <strong>
                  Devis en 1 clic
                </strong>
              </span>
            </div>
            <div className={s.c53}>
              <span>
                <s className={s.c54}>
                  Relances e-mail
                </s>
                {" → "}
                <strong>
                  Automatiques
                </strong>
              </span>
            </div>
          </div>
          {" "}
          <span className={s.c50}>
            Repenser
          </span>
          {" "}
          <span className={s.c51}>
            Ressaisies, relances, allers-retours : je simplifie et j&apos;automatise vos façons de faire.
          </span>
        </div>
        <div className={s.c44}>
          <div className={s.c52}>
            <div className={s.c53}>
              <span>Suivi des commandes</span>
              <span className={s.c34}>Actif</span>
            </div>
            <div className={`${s.c53} ${s.improveNew}`}>
              <strong>+ Relances automatiques</strong>
            </div>
            <div className={`${s.c53} ${s.improveNew}`}>
              <strong>+ Résumé d&apos;intervention par IA</strong>
            </div>
          </div>
          <span className={s.c50}>
            Améliorer
          </span>
          <span className={s.c51}>
            Vous avez déjà un logiciel qui ralentit vos équipes : je le reprends et je le fais évoluer.
          </span>
        </div>
      </div>
      {" "}
    </section>
    {" "}
    {" "}
    <section className={s.c59} data-reveal>
      <h2 className={s.c42}>
        Un logiciel complet, connecté, simple à utiliser.
      </h2>
      {" "}
      <p className={s.c60}>
        Au bureau comme sur le terrain : seul l'utile s'affiche à l'écran, et un clic vous mène à la bonne information.
      </p>
      {" "}
      <Scene shift={2.5}>
      <SwipeCarousel
        reserveControlSpace
        label="Exemples d'écrans"
        slideLabels={["Un clic, la bonne information", "Sur le terrain", "Planning des interventions", "Zéro ressaisie"]}
      >
      <div className={s.c62}>
        <span className={s.c63}>
          Un clic, la bonne information
        </span>
        {" "}
        <div className={s.c64}>
          <span>
            {"#1043 · "}
            <strong className={s.c65}>
              Studio Nova
            </strong>
          </span>
          <span>
            En cours
          </span>
        </div>
        {" "}
        <svg aria-hidden="true" focusable="false" className={s.c66} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        {" "}
        <div className={s.c67}>
          <strong>
            Fiche client · Studio Nova
          </strong>
          <span className={s.c68}>
            Contrat maintenance 2026
          </span>
        </div>
        {" "}
        <svg aria-hidden="true" focusable="false" className={s.c66} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        {" "}
        <div className={s.c69}>
          <strong>
            Contrat · 9 / 12
          </strong>
          <span className={s.c70}>
            Facturer · Pennylane
          </span>
        </div>
      </div>
      <div className={s.c71}>
        <span className={s.c72}>
          Sur le terrain
        </span>
        {" "}
        <div className={s.c73}>
          <div className={s.c74}>
            <strong className={s.c75}>
              Bonjour Karim
            </strong>
            <div className={s.c76}>
              08:30 · SCI Horizon ✓
            </div>
            <div className={s.c77}>
              11:00 · Mme Roux
            </div>
            <div className={s.c78}>
              14:00 · M. Martin
            </div>
            <span className={s.c79}>
              Démarrer
            </span>
          </div>
        </div>
      </div>
      <div className={s.c80}>
        <span className={s.c63}>
          Planning des interventions
        </span>
        {" "}
        <div className={s.c81}>
          <span>
            Karim
          </span>
          <div className={s.c82}>
            <div className={`${s.c83} ${s.grow}`}></div>
          </div>
        </div>
        {" "}
        <div className={s.c81}>
          <span>
            Julie
          </span>
          <div className={s.c82}>
            <div className={`${s.c84} ${s.grow}`}></div>
          </div>
        </div>
        {" "}
        <div className={s.c81}>
          <span>
            Marc
          </span>
          <div className={s.c82}>
            <div className={`${s.c85} ${s.grow}`}></div>
          </div>
        </div>
        {" "}
        <div className={s.c81}>
          <span>
            Sofia
          </span>
          <div className={s.c82}>
            <div className={`${s.c86} ${s.grow}`}></div>
          </div>
        </div>
      </div>
      <div className={s.c87}>
        <span className={s.c63}>
          Zéro ressaisie
        </span>
        {" "}
        <div className={s.c88}>
          <span className={`${s.c89} ${s.dot}`}></span>
        </div>
        {" "}
        <div className={s.c90}>
          <span>
            Demande
            <br />
            <span className={s.c34}>
              Gmail
            </span>
          </span>
          <span>
            Devis
            <br />
            <span className={s.c34}>
              Logiciel
            </span>
          </span>
          <span>
            Facture
            <br />
            <span className={s.c34}>
              Pennylane
            </span>
          </span>
        </div>
      </div>
      </SwipeCarousel>
      </Scene>
      {" "}
      <ToolsLine />
    </section>
    {" "}
    {" "}
    <section className={s.c92} data-reveal>
      <span className={s.c93}>
        Référence client
      </span>
      <span className={s.earlyCompany}>Early · Agence de communication, une quinzaine de personnes</span>
      {" "}
      <h2 className={s.c94}>
        Leur logiciel de gestion, transformé en vrai outil de pilotage.
      </h2>
      <p className={s.earlyIntro}>
        Clients, équipes, planning, facturation : tout passait par un logiciel qui ne suivait plus. Je l&apos;ai repris et enrichi d&apos;outils pour chacun : les salariés, les managers et la direction.
      </p>
      {" "}
      <figure className={s.c99}>
        <blockquote className={s.c100}>
          « Alexis a vraiment fait évoluer notre logiciel : il est plus rapide, plus réactif et bien plus simple à utiliser. »
        </blockquote>
        {" "}
        <figcaption className={s.c75}>
          Joseph Herbinet, dirigeant d&apos;Early
        </figcaption>
      </figure>
      {" "}
      <Link className={s.c102} href="/realisations/early">
        Lire l&apos;étude de cas →
      </Link>
    </section>
    {" "}
    {" "}
    {" "}
    <section className={s.c107} data-reveal>
      <h2 className={s.c26}>
        Un projet cadré, livré par étapes.
      </h2>
      {" "}
      <div className={s.c108}>
        <div className={s.c109}></div>
        {" "}
        <div className={s.c110}>
          <span className={s.c111}>
            1
          </span>
          <span className={s.c112}>
            Comprendre
          </span>
          <span className={s.c113}>
            Identifier vos besoins et ce qui bloque.
          </span>
        </div>
        {" "}
        <div className={s.c110}>
          <span className={s.c111}>
            2
          </span>
          <span className={s.c112}>
            Dessiner
          </span>
          <span className={s.c113}>
            Valider les écrans avant le développement.
          </span>
        </div>
        {" "}
        <div className={s.c110}>
          <span className={s.c111}>
            3
          </span>
          <span className={s.c112}>
            Livrer
          </span>
          <span className={s.c113}>
            Tester chaque étape avec vos équipes.
          </span>
        </div>
        {" "}
        <div className={s.c110}>
          <span className={s.c111}>
            4
          </span>
          <span className={s.c112}>
            Faire évoluer
          </span>
          <span className={s.c113}>
            Maintenance et améliorations selon vos besoins.
          </span>
        </div>
      </div>
      {" "}
      <Guarantees />
    </section>
    {" "}
    {" "}
    <section className={s.c117} data-reveal id="m-contact">
      <div className={s.c118}>
        <Image className={s.c119} src={portrait} alt="Portrait d'Alexis Gavens" width={72} height={72} />
        <div className={s.c120}>
          <span className={s.c115}>
            Alexis Gavens
          </span>
          <span className={s.c121}>
            Ancien responsable de l&apos;administration des ventes et de la logistique.
          </span>
        </div>
      </div>
      {" "}
      <p className={s.c122}>
        « Je comprends votre travail avant de concevoir le logiciel. »
      </p>
      <Link className={s.parcoursLink} href="/a-propos">
        Mon parcours →
      </Link>
      <Link className={s.formationCard} href="/formation-ia">
        <span className={s.formationLabel}>FORMATION</span>
        <span className={s.formationTitle}>Former vos équipes à l&apos;IA&nbsp;→</span>
      </Link>
      {" "}
      <div className={s.c123}>
        <h2 className={s.c124}>
          Parlons de votre projet.
        </h2>
        <p className={s.contactIntro}>
          20 minutes pour comprendre votre besoin et vous dire franchement si je peux vous aider.
        </p>
        {" "}
        <CalendlyLink className={s.c125}>
          Réserver 20 min
        </CalendlyLink>
        {" "}
        <a className={s.c126} href={CONTACT_PHONE_HREF}>
          <span className={s.c34}>
            Téléphone
          </span>
          <span className={s.c13}>
            06 38 61 08 42
          </span>
        </a>
        {" "}
        <a className={s.c127} href={`mailto:${CONTACT_EMAIL}`}>
          <span className={s.c34}>
            E-mail
          </span>
          <span className={s.c13}>
            {CONTACT_EMAIL}
          </span>
        </a>
        <div className={s.c127}>
          <span className={s.c34}>Zone</span>
          <span className={s.c13}>Partout en France</span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    </>
  );
}
