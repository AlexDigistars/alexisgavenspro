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
          Logiciels métier sur mesure pour PME
        </div>
        {" "}
        <h1 className={s.c5}>
          Des logiciels métier qui épousent votre façon de travailler.
        </h1>
        {" "}
        <p className={s.c6}>
          Je conçois, reprends et fais évoluer les outils internes des PME.
        </p>
        {" "}
        <CalendlyLink className={s.c7}>
          Réserver 20 min d'échange
        </CalendlyLink>
        {" "}
        <div className={s.c8}>
          <div className={s.c9}>
            <span className={s.c10}>
              Suivi des affaires
            </span>
            <span className={s.c11}>
              EXEMPLE
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
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
        </div>
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
        De l'éparpillement à un seul outil.
      </h2>
      {" "}
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
      {" "}
      <div className={s.c38}>
        <span className={s.c39}>
          Pennylane
        </span>
        {" "}
        <span className={s.c39}>
          Google Sheets
        </span>
        {" "}
        <span className={s.c39}>
          Gmail
        </span>
        {" "}
        <span className={s.c40}>
          + 5 outils
        </span>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c41} data-reveal>
      <h2 className={s.c42}>
        Créer, repenser, améliorer.
      </h2>
      {" "}
      <div className={s.c43}>
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
            Un outil pensé autour de vos process réels.
          </span>
        </div>
        {" "}
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
            Vos process existants réinventés, enrichis, simplifiés.
          </span>
        </div>
      </div>
      {" "}
      <div className={s.c55}>
        <span className={s.c56}></span>
        <span className={s.c57}></span>
        <span className={s.c57}></span>
        <span className={s.c58}>
          Glissez →
        </span>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c59} data-reveal>
      <h2 className={s.c42}>
        Simple, clair, et tout est relié.
      </h2>
      {" "}
      <p className={s.c60}>
        Au bureau comme sur le terrain, un clic vous mène à la bonne information.
      </p>
      {" "}
      <div className={s.c61}>
        <div className={`${s.c43} ${s.slide}`}>
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
            <svg className={s.c66} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className={s.c66} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          {" "}
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
          {" "}
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
          {" "}
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
        </div>
      </div>
      {" "}
      <div className={s.c55}>
        <span className={`${s.c91} ${s.d1}`}></span>
        <span className={`${s.c91} ${s.d2}`}></span>
        <span className={`${s.c91} ${s.d3}`}></span>
        <span className={`${s.c91} ${s.d4}`}></span>
        <span className={s.c58}>
          Glissez →
        </span>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c92} data-reveal>
      <span className={s.c93}>
        Référence client · Early
      </span>
      {" "}
      <h2 className={s.c94}>
        Un logiciel repris, accéléré et enrichi, sans jamais l'arrêter.
      </h2>
      {" "}
      <div className={s.c95}>
        <div className={s.c96}>
          <span className={s.c97}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-2.64-6.36" />
              <path d="M21 3v6h-6" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span className={s.c98}>
            Vision 360°
          </span>
        </div>
        {" "}
        <div className={s.c96}>
          <span className={s.c97}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2h9l5 5v15H6z" />
              <path d="M14 2v6h6" />
              <path d="M9 15l2 2 4-4" />
            </svg>
          </span>
          <span className={s.c98}>
            Facturation automatisée
          </span>
        </div>
        {" "}
        <div className={s.c96}>
          <span className={s.c97}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
              <path d="M16 11h6M19 8v6" />
            </svg>
          </span>
          <span className={s.c98}>
            CRM connecté
          </span>
        </div>
        {" "}
        <div className={s.c96}>
          <span className={s.c97}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="8" r="3" />
              <circle cx="17" cy="9" r="2.5" />
              <path d="M2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
              <path d="M14.5 15.2c.8-.5 1.6-.7 2.5-.7 2.8 0 5 1.9 5 4.9" />
            </svg>
          </span>
          <span className={s.c98}>
            Équipes pilotées simplement
          </span>
        </div>
      </div>
      {" "}
      <figure className={s.c99}>
        <blockquote className={s.c100}>
          « Alexis a vraiment fait évoluer notre logiciel : il est plus rapide, plus réactif et bien plus simple à utiliser. Il écoute nos besoins et il est force de proposition. »
        </blockquote>
        {" "}
        <figcaption className={s.c75}>
          <strong>
            Joseph Herbinet
          </strong>
          {" "}
          <span className={s.c101}>
            · Dirigeant d'Early
          </span>
        </figcaption>
      </figure>
      {" "}
      <Link className={s.c102} href="/realisations/early">
        Lire l'étude de cas →
      </Link>
    </section>
    {" "}
    {" "}
    <section className={s.c103} data-reveal>
      <span className={s.c104}>
        Et si on regardait votre cas ?
      </span>
      {" "}
      <span className={s.c105}>
        20 minutes, gratuit et sans engagement.
      </span>
      {" "}
      <CalendlyLink className={s.c106}>
        Réserver 20 min
      </CalendlyLink>
    </section>
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
            Diagnostic
          </span>
          <span className={s.c113}>
            Comprendre votre activité et ce qui bloque.
          </span>
        </div>
        {" "}
        <div className={s.c110}>
          <span className={s.c111}>
            2
          </span>
          <span className={s.c112}>
            Co-construction
          </span>
          <span className={s.c113}>
            Ateliers et maquettes avec vous, chaque écran validé.
          </span>
        </div>
        {" "}
        <div className={s.c110}>
          <span className={s.c111}>
            3
          </span>
          <span className={s.c112}>
            Livraison par lots
          </span>
          <span className={s.c113}>
            Chaque lot testé avec vos équipes.
          </span>
        </div>
        {" "}
        <div className={s.c110}>
          <span className={s.c111}>
            4
          </span>
          <span className={s.c112}>
            Suivi
          </span>
          <span className={s.c113}>
            Maintenance et évolutions dans la durée.
          </span>
        </div>
      </div>
      {" "}
      <div className={s.c114}>
        <span className={s.c115}>
          Mes engagements
        </span>
        {" "}
        <div className={s.c116}>
          <span>
            ✓ Sans engagement de durée
          </span>
          <span>
            ✓ Maquette avant de coder
          </span>
          <span>
            ✓ Tests automatiques
          </span>
          <span>
            ✓ Garantie 3 mois
          </span>
          <span>
            ✓ Le code vous appartient
          </span>
          <span>
            ✓ Aucun abonnement imposé
          </span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c117} data-reveal id="m-contact">
      <div className={s.c118}>
        <img className={s.c119} src="/alexis-portrait.jpg" alt="Portrait d'Alexis Gavens" />
        <div className={s.c120}>
          <span className={s.c115}>
            Alexis Gavens
          </span>
          <span className={s.c121}>
            Ex-responsable ADV & logistique
          </span>
        </div>
      </div>
      {" "}
      <p className={s.c122}>
        « Je comprends votre travail avant de concevoir le logiciel. »
      </p>
      {" "}
      <div className={s.c123}>
        <span className={s.c124}>
          Parlons de votre projet.
        </span>
        {" "}
        <CalendlyLink className={s.c125}>
          Réserver un créneau
        </CalendlyLink>
        {" "}
        <a className={s.c126} href={CONTACT_PHONE_HREF}>
          <span className={s.c34}>
            Appeler
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
      </div>
    </section>
    {" "}
    {" "}
    </>
  );
}
