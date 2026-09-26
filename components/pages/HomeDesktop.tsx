import Scene from "@/components/Scene";
import Image from "next/image";
import portrait from "@/public/alexis-portrait-hd.jpg";
import Link from "next/link";
import CalendlyLink from "@/components/CalendlyLink";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/config/site";
import s from "./HomeDesktop.module.css";

// Généré depuis design-reference/AccueilV2.html (textes et styles de la maquette).
export default function HomeDesktop() {
  return (
    <>
    {" "}
    {" "}
    <section className={s.c1} data-reveal>
      <div className={s.c2}>
        <div className={s.c3}>
          <div className={s.c4}>
            <span className={`${s.c5} ${s.pulse}`}></span>
            {" "}
            <span>
              Pour les PME · Partout en France
            </span>
          </div>
          {" "}
          <h1 className={s.c6}>
            Je crée des logiciels métier sur mesure pour vous.
          </h1>
          {" "}
          <p className={s.c7}>
            Un seul outil pour piloter votre entreprise, gagner du temps et en finir avec les ressaisies.
          </p>
          {" "}
          <div className={s.c8}>
            <CalendlyLink className={s.c9}>
              Réserver 20 min
            </CalendlyLink>
            {" "}
            <a className={s.c10} href="#v2-demo">
              {"Voir ce que je construis "}
              <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
        {" "}
        {" "}
        <Scene className={s.c11} shift={16.8}>
          <div className={s.c12}>
            <div className={s.c13}>
              <div className={s.c14}>
                <span className={s.c15}></span>
                <span className={s.c15}></span>
                <span className={s.c15}></span>
              </div>
              {" "}
              <span className={s.c16}>
                Atelier Durand — Gestion
              </span>
              {" "}
              <span className={s.c17}>
                EXEMPLE
              </span>
            </div>
            {" "}
            <div className={s.c18}>
              <div className={s.c19}>
                <span className={s.c20}>
                  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="18" rx="1" />
                    <rect x="14" y="3" width="7" height="11" rx="1" />
                  </svg>
                </span>
                {" "}
                <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A93A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M3 9h18M8 2v4M16 2v4" />
                </svg>
                {" "}
                <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A93A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7l9-4 9 4-9 4z" />
                  <path d="M3 7v10l9 4 9-4V7" />
                </svg>
                {" "}
                <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A93A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="4" />
                  <path d="M2 21c0-4 3-6 7-6s7 2 7 6" />
                </svg>
                {" "}
                <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A93A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2h9l5 5v15H6z" />
                  <path d="M14 2v6h6" />
                </svg>
              </div>
              {" "}
              <div className={s.c21}>
                <div className={s.c22}>
                  <span className={s.c23}>
                    Suivi des affaires
                  </span>
                  {" "}
                  <span className={s.c24}>
                    Rechercher un client…
                  </span>
                </div>
                {" "}
                <div className={s.c25}>
                  <span>
                    DEVIS
                  </span>
                  <span>
                    COMMANDE
                  </span>
                  <span>
                    INTERVENTION
                  </span>
                  <span>
                    FACTURÉ
                  </span>
                </div>
                {" "}
                <div className={s.c26}>
                  <div className={s.c27}>
                    <div className={s.c28}>
                      <span className={s.c29}>
                        Ballon — Leroy
                      </span>
                      <span className={s.c30}>
                        1 240 €
                      </span>
                    </div>
                    {" "}
                    <div className={s.c28}>
                      <span className={s.c29}>
                        Entretien — SCI Horizon
                      </span>
                      <span className={s.c30}>
                        Contrat annuel
                      </span>
                    </div>
                    {" "}
                    <div className={s.c28}>
                      <span className={s.c29}>
                        Dépannage — Roux
                      </span>
                      <span className={s.c30}>
                        Aujourd'hui 14h
                      </span>
                    </div>
                    {" "}
                    <div className={s.c28}>
                      <span className={s.c29}>
                        PAC — Garnier
                      </span>
                      <span className={s.c31}>
                        Payé
                      </span>
                    </div>
                    {" "}
                    <div className={s.c32}>
                      <span className={s.c29}>
                        Clim — Bertin
                      </span>
                      <span className={s.c30}>
                        En attente
                      </span>
                    </div>
                    {" "}
                    <div className={s.c33}></div>
                    {" "}
                    <div className={s.c33}></div>
                    {" "}
                    <div className={s.c32}>
                      <span className={s.c29}>
                        Réseau — Lamy
                      </span>
                      <span className={s.c31}>
                        Payé
                      </span>
                    </div>
                  </div>
                  {" "}
                  <div className={`${s.c34} ${s["mv-card"]}`}>
                    <span className={s.c35}>
                      Chaudière — Martin
                    </span>
                    {" "}
                    <span className={s.c36}>
                      3 480 €
                    </span>
                    {" "}
                    <span className={s.c37}>
                      <span className={s.c38}>
                        KB
                      </span>
                      <span className={s.c39}>
                        Prioritaire
                      </span>
                    </span>
                  </div>
                </div>
                {" "}
                <div className={`${s.c40} ${s.toast}`}>
                  <span className={s.c41}>
                    <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  {" "}
                  <span className={s.c42}>
                    <span className={s.c43}>
                      Facture envoyée à M. Martin
                    </span>
                    <span className={s.c44}>
                      Via Pennylane · à l'instant
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <div className={s.c45}>
            <div className={s.c46}>
              <span className={s.c47}>
                INTERVENTION · 14:00
              </span>
              {" "}
              <span className={s.c48}>
                Chaudière — M. Martin
              </span>
              {" "}
              <div className={s.c49}>
                <span className={s.c50}>
                  <span className={s.c51}></span>
                  Contrôle sécurité
                </span>
                {" "}
                <span className={s.c50}>
                  <span className={s.c51}></span>
                  Remplacement pièce
                </span>
                {" "}
                <span className={s.c50}>
                  <span className={s.c51}></span>
                  Photos avant / après
                </span>
              </div>
              {" "}
              <span className={s.c52}>
                Signature client
              </span>
              {" "}
              <div className={s.c53}>
                <svg aria-hidden="true" focusable="false" width="170" height="70" viewBox="0 0 170 70" fill="none">
                  <path className={s.sign} d="M14 48c10-22 18-30 22-24s-8 26 0 22 14-26 20-22-2 20 6 18 10-16 16-14 0 14 8 12 14-10 22-8 10 6 18 2" stroke="#0E1A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {" "}
              <span className={s.c54}>
                Valider l'intervention
              </span>
            </div>
          </div>
        </Scene>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c55} data-reveal>
      <div className={s.c56}>
        <span className={s.c57}>
          Le constat
        </span>
        {" "}
        <h2 className={s.c58}>
          De l'éparpillement à un seul outil.
        </h2>
      </div>
      {" "}
      <Scene className={s.c59} shift={4.5}>
        <div className={s.c60}>
          <span className={s.c61}>
            AUJOURD'HUI
          </span>
          {" "}
          <div className={s.c62}>
            <div className={`${s.c63} ${s.float}`}>
              <span className={s.c64}>
                XLS
              </span>
              Suivi_commandes_v3_FINAL.xlsx
            </div>
          </div>
          {" "}
          <div className={s.c65}>
            <div className={`${s.c66} ${s.float}`}>
              <span className={s.c64}>
                XLS
              </span>
              Planning techniciens (2).xlsx
            </div>
          </div>
          {" "}
          <div className={s.c67}>
            <div className={`${s.c68} ${s.float}`}>
              <span className={s.c35}>
                RE: RE: TR: dispo mardi ?
              </span>
              <span className={s.c36}>
                Chantier Leroy · 23 messages
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c69}>
            <div className={`${s.c70} ${s.float}`}>
              Rappeler M. Petit pour le devis ??
            </div>
          </div>
          {" "}
          <div className={s.c71}>
            <div className={`${s.c72} ${s.float}`}>
              <span className={s.c64}>
                XLS
              </span>
              Stock_2026_MAJ.xlsx
            </div>
          </div>
          {" "}
          <div className={s.c73}>
            <div className={`${s.c74} ${s.float}`}>
              Bon d'intervention
              <br />
              papier n° 0412
            </div>
          </div>
        </div>
        {" "}
        <div className={s.c75}>
          <svg aria-hidden="true" focusable="false" width="100" height="24" viewBox="0 0 100 24" fill="none">
            <path className={s.flow} d="M4 12h84" stroke="#1D5C57" strokeWidth="2" />
            <path d="M84 5l10 7-10 7" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {" "}
        <div className={s.c76}>
          <div className={s.c22}>
            <span className={s.c77}>
              Votre logiciel
            </span>
            {" "}
            <span className={s.c78}>
              <span className={`${s.c79} ${s.pulse}`}></span>
              Tout est à jour
            </span>
          </div>
          {" "}
          <div className={s.c80}>
            <div className={`${s.c81} ${s.lit}`}>
              <svg className={s.moduleIcon} aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3h6v3H9z" /><path d="M9 4.5H6v16h12v-16h-3" /><path d="M9 11h6M9 15h4" />
              </svg>
              <span className={s.c82}>
                Commandes
              </span>
              <span className={s.c83}>
                Devis → facture
              </span>
            </div>
            {" "}
            <div className={`${s.c84} ${s.lit}`}>
              <svg className={s.moduleIcon} aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" />
              </svg>
              <span className={s.c82}>
                Planning
              </span>
              <span className={s.c83}>
                Techniciens
              </span>
            </div>
            {" "}
            <div className={`${s.c85} ${s.lit}`}>
              <svg className={s.moduleIcon} aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7l9-4 9 4-9 4z" /><path d="M3 7v10l9 4 9-4V7" />
              </svg>
              <span className={s.c82}>
                Stocks
              </span>
              <span className={s.c83}>
                Alertes auto
              </span>
            </div>
            {" "}
            <div className={`${s.c86} ${s.lit}`}>
              <svg className={s.moduleIcon} aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="4" /><path d="M2 21c0-4 3-6 7-6s7 2 7 6" />
              </svg>
              <span className={s.c82}>
                Clients
              </span>
              <span className={s.c83}>
                Historique
              </span>
            </div>
            {" "}
            <div className={`${s.c87} ${s.lit}`}>
              <svg className={s.moduleIcon} aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6" /><path d="M9 13h6M9 17h4" />
              </svg>
              <span className={s.c82}>
                Factures
              </span>
              <span className={s.c83}>
                Vers la compta
              </span>
            </div>
            {" "}
            <div className={`${s.c88} ${s.lit}`}>
              <svg className={s.moduleIcon} aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span className={s.c82}>
                Documents
              </span>
              <span className={s.c83}>
                Rapports, photos
              </span>
            </div>
          </div>
          {" "}
          <span className={s.c89}>
            DEMAIN
          </span>
        </div>
      </Scene>
      {" "}
      <div className={s.c90}>
        <span className={s.c91}>
          Relié aux outils que vous utilisez déjà
        </span>
        {" "}
        <span className={s.c92}>
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2h9l5 5v15H6z" />
            <path d="M14 2v6h6" />
            <path d="M12 12v6M9.5 14h4" />
          </svg>
          Pennylane
        </span>
        {" "}
        <span className={s.c92}>
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M4 9h16M4 15h16M10 9v12" />
          </svg>
          Google Sheets
        </span>
        {" "}
        <span className={s.c92}>
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          Gmail
        </span>
        {" "}
        <span className={s.c92}>
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4" />
          </svg>
          Google Agenda
        </span>
        {" "}
        <span className={s.c92}>
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M4 9h16M4 15h16M10 9v12" />
          </svg>
          Excel
        </span>
        {" "}
        <span className={s.c92}>
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          Outlook
        </span>
        {" "}
        <span className={s.c92}>
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20M6 15h4" />
          </svg>
          Qonto
        </span>
        {" "}
        <span className={s.c92}>
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3L7 21M17 3l-2 18M4 8h17M3 16h17" />
          </svg>
          Slack
        </span>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c93} data-reveal>
      <div className={s.c94}>
        <h2 className={s.c58}>
          Créer, repenser,
          <br />
          améliorer.
        </h2>
        {" "}
        <p className={s.c95}>
          Un nouvel outil, des méthodes de travail à réinventer ou un logiciel à faire grandir.
        </p>
      </div>
      {" "}
      <Scene className={s.c96} shift={4.5}>
        <div className={s.c97}>
          <div className={s.c98}>
            <div className={`${s.c99} ${s.wf}`}></div>
            {" "}
            <div className={s.c100}>
              <div className={`${s.c101} ${s.wf}`}></div>
              {" "}
              <div className={s.c102}>
                <div className={s.c103}>
                  <div className={`${s.c104} ${s.wf}`}></div>
                  {" "}
                  <div className={`${s.c105} ${s.wf}`}></div>
                  {" "}
                  <div className={`${s.c106} ${s.wf}`}></div>
                </div>
                {" "}
                <div className={`${s.c107} ${s.wf}`}></div>
              </div>
            </div>
          </div>
          {" "}
          <div className={s.c108}>
            <span className={s.c109}>
              Créer
            </span>
            {" "}
            <span className={s.c110}>
              Un outil pensé autour de votre façon de travailler.
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c97}>
          <div className={s.c98}>
            <span className={s.c111}>
              VOTRE FAÇON DE TRAVAILLER, REPENSÉE
            </span>
            {" "}
            <div className={s.c112}>
              <span className={s.c113}>
                <span className={`${s.c114} ${s.bad}`}>
                  Ressaisie dans Excel
                </span>
                <span className={`${s.c115} ${s.good}`}>
                  Saisie unique, partagée
                </span>
              </span>
              <span className={s.c116}>
                <span className={`${s.c117} ${s.bad}`}>
                  <svg aria-hidden="true" focusable="false" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round">
                    <path d="M6 12h12" />
                  </svg>
                </span>
                <span className={`${s.c118} ${s.good}`}>
                  <svg aria-hidden="true" focusable="false" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
              </span>
            </div>
            {" "}
            <div className={s.c112}>
              <span className={s.c113}>
                <span className={`${s.c119} ${s.bad}`}>
                  Devis copié à la main
                </span>
                <span className={`${s.c120} ${s.good}`}>
                  Devis généré en un clic
                </span>
              </span>
              <span className={s.c116}>
                <span className={`${s.c121} ${s.bad}`}>
                  <svg aria-hidden="true" focusable="false" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round">
                    <path d="M6 12h12" />
                  </svg>
                </span>
                <span className={`${s.c122} ${s.good}`}>
                  <svg aria-hidden="true" focusable="false" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
              </span>
            </div>
            {" "}
            <div className={s.c112}>
              <span className={s.c113}>
                <span className={`${s.c123} ${s.bad}`}>
                  Relances par e-mail
                </span>
                <span className={`${s.c124} ${s.good}`}>
                  Relances automatiques
                </span>
              </span>
              <span className={s.c116}>
                <span className={`${s.c125} ${s.bad}`}>
                  <svg aria-hidden="true" focusable="false" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round">
                    <path d="M6 12h12" />
                  </svg>
                </span>
                <span className={`${s.c126} ${s.good}`}>
                  <svg aria-hidden="true" focusable="false" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
              </span>
            </div>
            {" "}
            <div className={s.c112}>
              <span className={s.c113}>
                <span className={`${s.c127} ${s.bad}`}>
                  Facture refaite en compta
                </span>
                <span className={`${s.c128} ${s.good}`}>
                  Facture envoyée seule
                </span>
              </span>
              <span className={s.c116}>
                <span className={`${s.c129} ${s.bad}`}>
                  <svg aria-hidden="true" focusable="false" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round">
                    <path d="M6 12h12" />
                  </svg>
                </span>
                <span className={`${s.c130} ${s.good}`}>
                  <svg aria-hidden="true" focusable="false" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c108}>
            <span className={s.c109}>
              Repenser
            </span>
            {" "}
            <span className={s.c110}>
              Vos méthodes de travail réinventées, enrichies, simplifiées.
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c97}>
          <div className={s.c98}>
            <div className={s.c131}>
              <span>
                Suivi des commandes
              </span>
              <span className={s.c83}>
                Actif
              </span>
            </div>
            {" "}
            <div className={s.c131}>
              <span>
                Planning équipes
              </span>
              <span className={s.c83}>
                Actif
              </span>
            </div>
            {" "}
            <div className={`${s.c132} ${s.slidein}`}>
              <span className={s.c29}>
                + Relances automatiques
              </span>
              <span className={`${s.c133} ${s.track}`}>
                <span className={`${s.c134} ${s.knob}`}></span>
              </span>
            </div>
            {" "}
            <div className={`${s.c135} ${s.slidein}`}>
              <span className={s.c29}>
                + Résumé d'intervention par IA
              </span>
              <span className={s.c136}>
                NOUVEAU
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c108}>
            <span className={s.c109}>
              Améliorer
            </span>
            {" "}
            <span className={s.c110}>
              Ajouter, automatiser, intégrer l'IA quand elle sert vraiment.
            </span>
          </div>
        </div>
      </Scene>
    </section>
    {" "}
    {" "}
    <section className={s.c137} data-reveal id="v2-demo">
      <div className={s.c94}>
        <h2 className={s.c58}>
          Un logiciel complet, connecté, simple à utiliser.
        </h2>
        {" "}
        <p className={s.c138}>
          Au bureau comme sur le terrain : seul l'utile s'affiche à l'écran, et un clic vous mène à la bonne information.
        </p>
      </div>
      {" "}
      <Scene className={s.c139} shift={3}>
        <div className={s.c140}>
          <div className={s.c22}>
            <span className={s.c141}>
              Un clic, la bonne information
            </span>
            <span className={s.c142}>
              Données reliées
            </span>
          </div>
          {" "}
          <div className={s.c143}>
            <div className={`${s.c144} ${s.step}`}>
              <span className={s.c145}>
                Commandes
              </span>
              {" "}
              <div className={s.c146}>
                <span>
                  #1042 · Maison Lenoir
                </span>
                <span className={s.c147}>
                  Livrée
                </span>
              </div>
              {" "}
              <div className={s.c148}>
                <span>
                  {"#1043 · "}
                  <span className={s.c149}>
                    Studio Nova
                  </span>
                </span>
                <span className={s.c150}>
                  En cours
                </span>
              </div>
              {" "}
              <div className={s.c146}>
                <span>
                  #1044 · Garage Ferrand
                </span>
                <span className={s.c151}>
                  À préparer
                </span>
              </div>
              {" "}
              <div className={s.c146}>
                <span>
                  #1045 · Boulangerie Roche
                </span>
                <span className={s.c147}>
                  Livrée
                </span>
              </div>
              {" "}
              <div className={s.c152}>
                <span>
                  #1046 · Studio Nova
                </span>
                <span className={s.c153}>
                  Devis
                </span>
              </div>
              {" "}
              <svg aria-hidden="true" focusable="false" className={`${s.c154} ${s.cur}`} width="20" height="20" viewBox="0 0 24 24" fill="#0E1A2B" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M4 2l16 10-7 2-3 7z" />
              </svg>
            </div>
            {" "}
            <svg aria-hidden="true" focusable="false" className={s.c155} width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path className={s.flow} d="M1 8h16" stroke="#1D5C57" strokeWidth="2" />
              <path d="M15 3l6 5-6 5" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {" "}
            <div className={`${s.c156} ${s.step}`}>
              <div className={s.c157}>
                <span className={s.c158}>
                  SN
                </span>
                <div className={s.c159}>
                  <span className={s.c145}>
                    Studio Nova
                  </span>
                  <span className={s.c52}>
                    Fiche client
                  </span>
                </div>
              </div>
              {" "}
              <div className={s.c160}>
                <div className={s.c161}>
                  <span className={s.c162}>
                    En cours
                  </span>
                  <span className={s.c163}>
                    3
                  </span>
                </div>
                {" "}
                <div className={s.c161}>
                  <span className={s.c162}>
                    CA de l'année
                  </span>
                  <span className={s.c163}>
                    18,4 k€
                  </span>
                </div>
              </div>
              {" "}
              <span className={s.c164}>
                CONTRAT
              </span>
              {" "}
              <div className={s.c165}>
                <span className={s.c149}>
                  Maintenance 2026
                </span>
                <span className={s.c166}>
                  Ouvrir
                </span>
              </div>
              {" "}
              <span className={s.c164}>
                DERNIÈRE FACTURE
              </span>
              {" "}
              <div className={s.c167}>
                <span>
                  Septembre
                </span>
                <span className={s.c168}>
                  Payée
                </span>
              </div>
              {" "}
              <svg aria-hidden="true" focusable="false" className={`${s.c169} ${s.cur}`} width="20" height="20" viewBox="0 0 24 24" fill="#0E1A2B" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M4 2l16 10-7 2-3 7z" />
              </svg>
            </div>
            {" "}
            <svg aria-hidden="true" focusable="false" className={s.c155} width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path className={s.flow} d="M1 8h16" stroke="#1D5C57" strokeWidth="2" />
              <path d="M15 3l6 5-6 5" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {" "}
            <div className={`${s.c170} ${s.step}`}>
              <div className={s.c159}>
                <span className={s.c145}>
                  Maintenance 2026
                </span>
                <span className={s.c52}>
                  Studio Nova · contrat annuel
                </span>
              </div>
              {" "}
              <div className={s.c171}>
                <div className={s.c172}>
                  <span>
                    Interventions incluses
                  </span>
                  <span className={s.c35}>
                    9 / 12
                  </span>
                </div>
                {" "}
                <div className={s.c173}>
                  <div className={`${s.c174} ${s.grow}`}></div>
                </div>
              </div>
              {" "}
              <div className={s.c167}>
                <span>
                  Factures liées
                </span>
                <span className={s.c35}>
                  9
                </span>
              </div>
              {" "}
              <div className={s.c167}>
                <span>
                  Commandes rattachées
                </span>
                <span className={s.c35}>
                  14
                </span>
              </div>
              {" "}
              <span className={s.c175}>
                <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4z" />
                </svg>
                {"Facturer "}
                <span className={s.c176}>
                  Pennylane
                </span>
              </span>
            </div>
          </div>
        </div>
        {" "}
        {" "}
        <div className={s.c177}>
          <div className={s.c178}>
            <span className={s.c179}>
              Sur le terrain
            </span>
            <span className={s.c180}>
              App mobile
            </span>
          </div>
          {" "}
          <div className={s.c181}>
            <div className={s.c182}>
              <span className={s.c136}>
                MARDI · 3 ARRÊTS
              </span>
              {" "}
              <span className={s.c183}>
                Bonjour Karim
              </span>
              {" "}
              <div className={s.c184}>
                <div className={s.c185}>
                  <span className={s.c35}>
                    08:30 · SCI Horizon
                  </span>
                  <span className={s.c31}>
                    Fait
                  </span>
                </div>
                <span className={s.c36}>
                  Entretien annuel
                </span>
              </div>
              {" "}
              <div className={s.c186}>
                <div className={s.c187}>
                  <span className={s.c35}>
                    11:00 · Mme Roux
                  </span>
                  <span className={`${s.c79} ${s.pulse}`}></span>
                </div>
                <span className={s.c36}>
                  Dépannage · en route
                </span>
              </div>
              {" "}
              <div className={s.c188}>
                <div className={s.c185}>
                  <span className={s.c35}>
                    14:00 · M. Martin
                  </span>
                  <span className={s.c36}>
                    À venir
                  </span>
                </div>
                <span className={s.c36}>
                  Chaudière
                </span>
              </div>
              {" "}
              <div className={s.c189}>
                <div className={s.c190}>
                  Photo avant
                </div>
                {" "}
                <div className={s.c191}>
                  + Photo après
                </div>
              </div>
              {" "}
              <span className={s.c192}>
                Démarrer l'intervention
              </span>
            </div>
          </div>
        </div>
        {" "}
        {" "}
        <div className={s.c193}>
          <div className={s.c22}>
            <span className={s.c77}>
              Planning des interventions
            </span>
            <span className={s.c142}>
              Bureau
            </span>
          </div>
          {" "}
          <div className={s.c194}>
            <span></span>
            <span>
              LUN
            </span>
            <span>
              MAR
            </span>
            <span>
              MER
            </span>
            <span>
              JEU
            </span>
            <span>
              VEN
            </span>
          </div>
          {" "}
          <div className={s.c195}>
            <div className={s.c196}>
              <span className={s.c29}>
                Karim
              </span>
              <div className={s.c197}>
                <div className={`${s.c198} ${s.grow}`}></div>
                <div className={`${s.c199} ${s.grow}`}></div>
              </div>
            </div>
            {" "}
            <div className={s.c196}>
              <span className={s.c29}>
                Julie
              </span>
              <div className={s.c197}>
                <div className={`${s.c200} ${s.grow}`}></div>
              </div>
            </div>
            {" "}
            <div className={s.c196}>
              <span className={s.c29}>
                Marc
              </span>
              <div className={s.c197}>
                <div className={`${s.c201} ${s.grow}`}></div>
                <div className={`${s.c202} ${s.grow}`}></div>
              </div>
            </div>
            {" "}
            <div className={s.c196}>
              <span className={s.c29}>
                Sofia
              </span>
              <div className={s.c197}>
                <div className={`${s.c203} ${s.grow}`}></div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        {" "}
        <div className={s.c204}>
          <div className={s.c22}>
            <span className={s.c205}>
              Zéro ressaisie
            </span>
            <span className={s.c142}>
              Automatisation
            </span>
          </div>
          {" "}
          <div className={s.c206}>
            <div className={s.c207}>
              <span className={`${s.c208} ${s.dot}`}></span>
            </div>
            {" "}
            <div className={s.c209}>
              <div className={s.c210}>
                <span className={s.c211}>
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E1A2B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span>
                  Demande reçue
                </span>
                <span className={s.c52}>
                  Gmail
                </span>
              </div>
              {" "}
              <div className={s.c210}>
                <span className={s.c211}>
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E1A2B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h9l5 5v15H6z" />
                    <path d="M9 13h8M9 17h6" />
                  </svg>
                </span>
                <span>
                  Devis généré
                </span>
                <span className={s.c52}>
                  Votre logiciel
                </span>
              </div>
              {" "}
              <div className={s.c210}>
                <span className={s.c212}>
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span>
                  Facture créée
                </span>
                <span className={s.c52}>
                  Pennylane
                </span>
              </div>
            </div>
          </div>
        </div>
      </Scene>
      {" "}
      <div className={s.c213}>
        <div className={s.c214}>
          <svg aria-hidden="true" focusable="false" className={s.c155} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12h6" />
          </svg>
          <div className={s.c215}>
            <span className={s.c216}>
              Simple
            </span>
            <span className={s.c217}>
              Seules les actions utiles apparaissent.
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c214}>
          <svg aria-hidden="true" focusable="false" className={s.c155} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          <div className={s.c215}>
            <span className={s.c216}>
              Clair
            </span>
            <span className={s.c217}>
              Chaque information à sa place.
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c214}>
          <svg aria-hidden="true" focusable="false" className={s.c155} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
            <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
          </svg>
          <div className={s.c215}>
            <span className={s.c216}>
              Connecté
            </span>
            <span className={s.c217}>
              Clients, commandes, factures : tout se répond.
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c214}>
          <svg aria-hidden="true" focusable="false" className={s.c155} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
          </svg>
          <div className={s.c215}>
            <span className={s.c216}>
              Rapide
            </span>
            <span className={s.c217}>
              Une navigation fluide et instantanée.
            </span>
          </div>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c218} data-reveal>
      <div className={s.c219}>
        <span className={s.c220}>
          Référence client
        </span>
        {" "}
        <div className={s.c221}>
          <span className={s.c222}>
            Early
          </span>
          {" "}
          <span className={s.c223}>
            Agence de communication · une quinzaine de personnes
          </span>
        </div>
        {" "}
        <h2 className={s.c224}>
          Un logiciel existant, transformé en vrai outil de pilotage.
        </h2>
        <p className={s.earlyIntro}>
          Rendu simple à utiliser, puis enrichi de ce qui manquait : facturation automatique, suivi clients, pilotage des équipes.
        </p>
        {" "}
        <figure className={s.c225}>
          <svg aria-hidden="true" focusable="false" width="28" height="22" viewBox="0 0 28 22" fill="#8FD0C5">
            <path d="M0 22V12C0 5 4 1 11 0l1 3c-4 1-6 4-6 7h5v12zm16 0V12c0-7 4-11 11-12l1 3c-4 1-6 4-6 7h5v12z" />
          </svg>
          {" "}
          <blockquote className={s.c226}>
            Alexis a vraiment fait évoluer notre logiciel : il est plus rapide, plus réactif et bien plus simple à utiliser. Il écoute nos besoins et il est force de proposition. C'est agréable de travailler avec lui.
          </blockquote>
          {" "}
          <figcaption className={s.c227}>
            <span className={s.c35}>
              Joseph Herbinet
            </span>
            <span className={s.c228}>
              Dirigeant d'Early
            </span>
          </figcaption>
        </figure>
        {" "}
        <Link className={s.c229} href="/realisations/early">
          {"Lire l'étude de cas "}
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      {" "}
      <div className={s.c230}>
        <div className={s.c231}>
          <span className={`${s.c232} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-2.64-6.36" />
              <path d="M21 3v6h-6" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          {" "}
          <span className={s.c233}>
            Vision 360°
          </span>
          {" "}
          <span className={s.c234}>
            Toute l'activité sur un seul écran : clients, équipes, finances.
          </span>
        </div>
        {" "}
        <div className={s.c231}>
          <span className={`${s.c235} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2h9l5 5v15H6z" />
              <path d="M14 2v6h6" />
              <path d="M9 15l2 2 4-4" />
            </svg>
          </span>
          {" "}
          <span className={s.c233}>
            Facturation automatisée
          </span>
          {" "}
          <span className={s.c234}>
            Du temps passé à la facture dans la compta, sans ressaisie.
          </span>
        </div>
        {" "}
        <div className={s.c231}>
          <span className={`${s.c236} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
              <path d="M16 11h6M19 8v6" />
            </svg>
          </span>
          {" "}
          <span className={s.c233}>
            Suivi clients connecté
          </span>
          {" "}
          <span className={s.c234}>
            Chaque client relié à ses contrats, ses missions et ses campagnes.
          </span>
        </div>
        {" "}
        <div className={s.c231}>
          <span className={`${s.c237} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="8" r="3" />
              <circle cx="17" cy="9" r="2.5" />
              <path d="M2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
              <path d="M14.5 15.2c.8-.5 1.6-.7 2.5-.7 2.8 0 5 1.9 5 4.9" />
            </svg>
          </span>
          {" "}
          <span className={s.c233}>
            Équipes pilotées simplement
          </span>
          {" "}
          <span className={s.c234}>
            Charge, temps et accès de chacun, en un coup d'œil.
          </span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c238} data-reveal>
      <div className={s.c102}>
        <span className={s.c239}>
          Et si on regardait votre cas ?
        </span>
        {" "}
        <span className={s.c240}>
          20 minutes, gratuit et sans engagement : vous repartez avec des pistes concrètes.
        </span>
      </div>
      {" "}
      <CalendlyLink className={s.c241}>
        <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E1A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M3 9h18M8 2v4M16 2v4" />
        </svg>
        Réserver 20 min
      </CalendlyLink>
    </section>
    {" "}
    {" "}
    <section className={s.c242} data-reveal>
      <h2 className={s.c58}>
        Un projet cadré, livré par étapes.
      </h2>
      {" "}
      <div className={s.c243}>
        <div className={s.c244}>
          <div className={`${s.c245} ${s.prog}`}></div>
        </div>
        {" "}
        <div className={s.c246}>
          <span className={s.c247}>
            1
          </span>
          <span className={s.c248}>
            Diagnostic
          </span>
          <span className={s.c249}>
            Comprendre votre activité et ce qui bloque.
          </span>
        </div>
        {" "}
        <div className={s.c246}>
          <span className={s.c247}>
            2
          </span>
          <span className={s.c248}>
            Co-construction
          </span>
          <span className={s.c249}>
            Ateliers et maquettes avec vous, chaque écran validé.
          </span>
        </div>
        {" "}
        <div className={s.c246}>
          <span className={s.c247}>
            3
          </span>
          <span className={s.c248}>
            Livraison par lots
          </span>
          <span className={s.c249}>
            Chaque lot testé avec vos équipes.
          </span>
        </div>
        {" "}
        <div className={s.c246}>
          <span className={s.c247}>
            4
          </span>
          <span className={s.c248}>
            Suivi
          </span>
          <span className={s.c249}>
            Maintenance et évolutions dans la durée.
          </span>
        </div>
      </div>
      {" "}
      <div className={s.c250}>
        <div className={s.c251}>
          <span className={s.c252}>
            Mes engagements, noir sur blanc.
          </span>
          <span className={s.c89}>
            SANS PETITES LIGNES
          </span>
        </div>
        {" "}
        <div className={s.c253}>
          <div className={s.c254}>
            <span className={s.c255}>
              <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <div className={s.c256}>
              <span className={s.c257}>
                Sans engagement de durée
              </span>
              <span className={s.c258}>
                Chaque lot se commande séparément.
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c254}>
            <span className={s.c255}>
              <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <div className={s.c256}>
              <span className={s.c257}>
                Maquette validée avant de coder
              </span>
              <span className={s.c258}>
                Vous voyez l'écran avant qu'il existe.
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c254}>
            <span className={s.c255}>
              <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <div className={s.c256}>
              <span className={s.c257}>
                Tests automatiques
              </span>
              <span className={s.c258}>
                Testé à chaque livraison.
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c254}>
            <span className={s.c255}>
              <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <div className={s.c256}>
              <span className={s.c257}>
                Garantie 3 mois
              </span>
              <span className={s.c258}>
                Tout défaut corrigé sans frais.
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c254}>
            <span className={s.c255}>
              <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <div className={s.c256}>
              <span className={s.c257}>
                Le code vous appartient
              </span>
              <span className={s.c258}>
                Code source et documentation cédés.
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c254}>
            <span className={s.c255}>
              <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <div className={s.c256}>
              <span className={s.c257}>
                Aucun abonnement imposé
              </span>
              <span className={s.c258}>
                Pas de coût récurrent ajouté.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c259} data-reveal id="v2-contact">
      <div className={s.c260}>
        <div className={s.c219}>
          <div className={s.c261}>
            <Image className={s.c262} src={portrait} alt="Portrait d'Alexis Gavens" width={128} height={128} />
            {" "}
            <div className={s.c215}>
              <span className={s.c179}>
                Alexis Gavens
              </span>
              <span className={s.c263}>
                Créateur de logiciels métier · ex-responsable ADV & logistique
              </span>
            </div>
          </div>
          {" "}
          <p className={s.c264}>
            « Je viens des opérations. Je comprends votre travail avant de concevoir le logiciel. »
          </p>
          {" "}
          <Link className={s.c265} href="/a-propos">
            {"Mon parcours "}
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {" "}
        <div className={s.c266}>
          <Link className={s.c267} href="/realisations/early">
            <span className={s.c268}>
              RÉALISATION
            </span>
            <span className={s.c269}>
              Early : l&apos;étude de cas complète&nbsp;→
            </span>
          </Link>
          {" "}
          <Link className={s.c267} href="/formation-ia">
            <span className={s.c268}>
              FORMATION
            </span>
            <span className={s.c269}>
              Former vos équipes à l&apos;IA&nbsp;→
            </span>
          </Link>
        </div>
      </div>
      {" "}
      <div className={s.c270}>
        <h2 className={s.c271}>
          Parlons de votre projet.
        </h2>
        {" "}
        <p className={s.c272}>
          20 minutes pour comprendre votre besoin et vous dire franchement si je peux vous aider.
        </p>
        {" "}
        <CalendlyLink className={s.c273}>
          Réserver 20 min
        </CalendlyLink>
        {" "}
        <div className={s.c274}>
          <div className={s.c275}>
            <span className={s.c36}>
              Téléphone
            </span>
            <a className={`${s.c276} ${s.contactValueLink}`} href={CONTACT_PHONE_HREF}>
              {CONTACT_PHONE}
            </a>
          </div>
          {" "}
          <div className={s.c275}>
            <span className={s.c36}>
              E-mail
            </span>
            <a className={`${s.c276} ${s.contactValueLink}`} href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
          {" "}
          <div className={s.c275}>
            <span className={s.c36}>
              Zone
            </span>
            <span className={s.c276}>
              Partout en France
            </span>
          </div>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    </>
  );
}
