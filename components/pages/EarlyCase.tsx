import Scene from "@/components/Scene";
import Link from "next/link";
import CalendlyLink from "@/components/CalendlyLink";
import s from "./EarlyCase.module.css";

// Généré depuis design-reference/EtudeCasEarly.html (textes et styles de la maquette).
export default function EarlyCase() {
  return (
    <>
    {" "}
    {" "}
    <section className={s.c1} data-reveal>
      <div className={s.c2}>
        <div className={s.c3}>
          <span className={s.c4}>
            Réalisations / Étude de cas
          </span>
          {" "}
          <h1 className={s.c5}>
            Early : un ERP repris, sécurisé et enrichi, sans jamais l'arrêter.
          </h1>
          {" "}
          <p className={s.c6}>
            Agence de communication d'une quinzaine de personnes, basée à Saint-Tropez.
          </p>
          {" "}
          <div className={s.c7}>
            <div className={s.c8}>
              <span className={s.c9}>
                MISSION
              </span>
              <span className={s.c10}>
                Reprise et évolution
              </span>
            </div>
            {" "}
            <div className={s.c11}>
              <span className={s.c9}>
                PÉRIMÈTRE
              </span>
              <span className={s.c10}>
                4 lots, 7 fonctionnalités
              </span>
            </div>
            {" "}
            <div className={s.c8}>
              <span className={s.c9}>
                RELIÉ À
              </span>
              <span className={s.c10}>
                Pennylane · Google Agenda · Meta
              </span>
            </div>
            {" "}
            <div className={s.c11}>
              <span className={s.c9}>
                STATUT
              </span>
              <span className={s.c12}>
                <span className={`${s.c13} ${s.pulse}`}></span>
                3 lots livrés, le 4e en finition
              </span>
            </div>
          </div>
        </div>
        {" "}
        {" "}
        <Scene className={s.c14}>
          <div className={s.c15}>
            <div className={s.c16}>
              <span className={s.c17}></span>
              <span className={s.c17}></span>
              <span className={s.c17}></span>
            </div>
            {" "}
            <span className={s.c18}>
              Early Work — Tâches
            </span>
            {" "}
            <span className={s.c19}>
              DONNÉES FICTIVES
            </span>
          </div>
          {" "}
          <div className={s.c20}>
            <div className={s.c21}>
              <span className={s.c22}>
                Tableau de bord
              </span>
              {" "}
              <span className={s.c23}>
                Production
              </span>
              {" "}
              <span className={s.c24}>
                Planning
              </span>
              {" "}
              <span className={s.c25}>
                Tâches
              </span>
              {" "}
              <span className={s.c24}>
                Charge & Travail
              </span>
              {" "}
              <span className={s.c24}>
                Calendrier
              </span>
              {" "}
              <span className={s.c23}>
                Clients & contenus
              </span>
              {" "}
              <span className={s.c24}>
                Clients
              </span>
              {" "}
              <span className={s.c24}>
                Contrats
              </span>
              {" "}
              <span className={s.c23}>
                Équipe
              </span>
              {" "}
              <span className={s.c23}>
                Suivi financier
              </span>
              {" "}
              <span className={s.c23}>
                Réglages & suivi
              </span>
            </div>
            {" "}
            <div className={s.c26}>
              <span className={s.c27}>
                Tâches
              </span>
              {" "}
              <div className={s.c28}>
                <span className={s.c29}>
                  Mon temps
                </span>
                <span className={s.c29}>
                  Missions
                </span>
                <span className={s.c30}>
                  Suivi de l'équipe
                </span>
                <span className={s.c29}>
                  Statistiques
                </span>
              </div>
              {" "}
              <div className={s.c31}>
                <span className={s.c32}>
                  Semaine 39
                </span>
                <span>
                  Lun.
                </span>
                <span>
                  Mar.
                </span>
                <span>
                  Mer.
                </span>
                <span>
                  Jeu.
                </span>
                <span>
                  Ven.
                </span>
              </div>
              {" "}
              <div className={s.c33}>
                <div className={s.c34}>
                  <span className={s.c35}>
                    Camille
                  </span>
                  <span className={`${s.c36} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c37} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c38} ${s.cell}`}>
                    8 h
                  </span>
                  <span className={`${s.c39} ${s.cell}`}>
                    4 h 30
                  </span>
                  <span className={`${s.c40} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                </div>
                {" "}
                <div className={s.c34}>
                  <span className={s.c35}>
                    Hugo
                  </span>
                  <span className={`${s.c41} ${s.cell}`}>
                    À saisir
                  </span>
                  <span className={`${s.c42} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c43} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c44} ${s.cell}`}>
                    Off
                  </span>
                  <span className={`${s.c45} ${s.cell}`}>
                    2 h 30
                  </span>
                </div>
                {" "}
                <div className={s.c34}>
                  <span className={s.c35}>
                    Inès
                  </span>
                  <span className={`${s.c42} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c43} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c40} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c46} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c47} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                </div>
                {" "}
                <div className={s.c34}>
                  <span className={s.c35}>
                    Karim
                  </span>
                  <span className={`${s.c39} ${s.cell}`}>
                    4 h 30
                  </span>
                  <span className={`${s.c48} ${s.cell}`}>
                    8 h
                  </span>
                  <span className={`${s.c46} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c49} ${s.cell}`}>
                    À saisir
                  </span>
                  <span className={`${s.c50} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                </div>
                {" "}
                <div className={s.c34}>
                  <span className={s.c35}>
                    Léa
                  </span>
                  <span className={`${s.c40} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c45} ${s.cell}`}>
                    4 h 30
                  </span>
                  <span className={`${s.c47} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c50} ${s.cell}`}>
                    ✓ 7 h
                  </span>
                  <span className={`${s.c51} ${s.cell}`}>
                    8 h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Scene>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c52} data-reveal>
      <div className={s.c53}>
        <span className={s.c54}>
          Le point de départ
        </span>
        {" "}
        <h2 className={s.c55}>
          Un outil utilisé chaque jour, devenu difficile à faire évoluer.
        </h2>
        {" "}
        <p className={s.c56}>
          Early pilote toute son activité dans une application métier développée par un précédent prestataire : planning, tâches, clients, contrats, finances. L'outil avait fait ses preuves, mais il ralentissait l'équipe au lieu de l'aider.
        </p>
        {" "}
        <div className={s.c57}>
          <svg aria-hidden="true" focusable="false" className={s.c58} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
          </svg>
          {" "}
          <span className={s.c59}>
            <strong>
              La contrainte :
            </strong>
            {" l'équipe travaille dedans tous les jours. Pas question d'interrompre l'activité, ni d'exposer ses données ou celles de ses clients."}
          </span>
        </div>
      </div>
      {" "}
      <div className={s.c60}>
        <div className={s.c61}>
          <span className={s.c62}>
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33A2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          </span>
          <span className={s.c63}>
            Des écrans lents à s'ouvrir
          </span>
          <span className={s.c64}>
            Chaque page chargeait bien plus que ce qu'elle affichait.
          </span>
        </div>
        {" "}
        <div className={s.c61}>
          <span className={s.c62}>
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33A2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </span>
          <span className={s.c63}>
            Une information dispersée
          </span>
          <span className={s.c64}>
            Il fallait chercher partout pour trouver la bonne donnée.
          </span>
        </div>
        {" "}
        <div className={s.c61}>
          <span className={s.c62}>
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33A2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          </span>
          <span className={s.c63}>
            Des accès mal maîtrisés
          </span>
          <span className={s.c64}>
            Chaque changement passait par un prestataire.
          </span>
        </div>
        {" "}
        <div className={s.c61}>
          <span className={s.c62}>
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33A2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M7 15l4-4 3 3 5-6" />
            </svg>
          </span>
          <span className={s.c63}>
            Factures ressaisies à la main
          </span>
          <span className={s.c64}>
            Et aucune vision de la marge par client.
          </span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c65} data-reveal>
      <div className={s.c53}>
        <span className={s.c54}>
          Co-construit avec le dirigeant
        </span>
        {" "}
        <h2 className={s.c55}>
          Tout ce que le dirigeant avait en tête, transformé en écrans.
        </h2>
        {" "}
        <p className={s.c56}>
          Avant d'écrire une ligne de code : des heures d'échange avec la direction et l'équipe. Comprendre comment ils travaillent vraiment, faire émerger les besoins jamais formulés, et décider ensemble de chaque onglet, chaque bouton, chaque raccourci.
        </p>
        {" "}
        <div className={s.c66}>
          <div className={s.c67}>
            <span className={s.c54}>
              01
            </span>
            <div className={s.c68}>
              <span className={s.c63}>
                Ateliers
              </span>
              <span className={s.c69}>
                Ses chiffres clés, ses irritants, ses envies : tout est mis sur la table.
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c67}>
            <span className={s.c54}>
              02
            </span>
            <div className={s.c68}>
              <span className={s.c63}>
                Maquettes
              </span>
              <span className={s.c69}>
                Chaque écran dessiné, discuté et ajusté avant d'exister.
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c70}>
            <span className={s.c54}>
              03
            </span>
            <div className={s.c68}>
              <span className={s.c63}>
                Validation
              </span>
              <span className={s.c69}>
                Rien n'est développé sans son accord.
              </span>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <Scene className={s.c71}>
        <div className={s.c72}>
          <div className={s.c73}>
            <span className={s.c74}>
              MAQUETTE · SUIVI DE L'ÉQUIPE · V3
            </span>
            <span className={s.c75}>
              3 commentaires
            </span>
          </div>
          {" "}
          <div className={s.c76}></div>
          {" "}
          <div className={s.c77}>
            <div className={s.c78}></div>
            <div className={s.c78}></div>
            <div className={s.c78}></div>
          </div>
          {" "}
          <div className={s.c79}>
            <div className={s.c80}></div>
            <div className={s.c81}></div>
            <div className={s.c81}></div>
            <div className={s.c82}></div>
            <div className={s.c83}></div>
            {" "}
            <div className={s.c80}></div>
            <div className={s.c81}></div>
            <div className={s.c84}></div>
            <div className={s.c81}></div>
            <div className={s.c81}></div>
            {" "}
            <div className={s.c80}></div>
            <div className={s.c83}></div>
            <div className={s.c81}></div>
            <div className={s.c81}></div>
            <div className={s.c82}></div>
          </div>
          {" "}
          <div className={s.c85}>
            <div className={s.c86}></div>
            <div className={s.c87}></div>
          </div>
        </div>
        {" "}
        <div className={`${s.c88} ${s.pin}`}>
          <span className={s.c89}>
            1
          </span>
          <span className={s.c90}>
            Un clic sur le nom ouvre tout son historique
          </span>
        </div>
        {" "}
        <div className={`${s.c91} ${s.pin}`}>
          <span className={s.c89}>
            2
          </span>
          <span className={s.c90}>
            Les heures manquantes en rouge, visibles tout de suite
          </span>
        </div>
        {" "}
        <div className={`${s.c92} ${s.pin}`}>
          <span className={s.c89}>
            3
          </span>
          <span className={s.c90}>
            Un retour arrière partout, pour ne jamais se perdre
          </span>
        </div>
        {" "}
        <div className={`${s.c93} ${s.pin}`}>
          <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
          Validé par le dirigeant
        </div>
      </Scene>
    </section>
    {" "}
    {" "}
    <section className={s.c94} data-reveal>
      <div className={s.c53}>
        <span className={s.c4}>
          Une expérience pensée écran par écran
        </span>
        {" "}
        <h2 className={s.c55}>
          Des chiffres dans tous les sens, devenus une navigation où tout se répond.
        </h2>
        {" "}
        <p className={s.c95}>
          Chaque nom, chaque client, chaque chiffre est cliquable et mène à la bonne page. Un retour arrière est toujours à portée. Couleurs et repères restent les mêmes partout : on retrouve l'information sans la chercher.
        </p>
        {" "}
        <div className={s.c96}>
          <span className={s.c97}>
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
            Des liens cliquables entre toutes les données
          </span>
          {" "}
          <span className={s.c97}>
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
            Seules les informations utiles à l'écran
          </span>
          {" "}
          <span className={s.c97}>
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
            Des couleurs qui disent l'essentiel d'un coup d'œil
          </span>
        </div>
      </div>
      {" "}
      <Scene className={s.c98}>
        <div className={s.c99}>
          <span className={s.c100}>
            <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E1A2B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 5l-7 7 7 7" />
            </svg>
            Retour
          </span>
          {" "}
          <span className={s.c101}>
            {"Tâches / Historique / "}
            <span className={s.c102}>
              Semaine 39
            </span>
          </span>
        </div>
        {" "}
        <div className={s.c103}>
          <div className={s.c104}>
            <span>
              Vendredi 25 septembre
            </span>
            <span className={s.c105}>
              8 h · 1 personne
            </span>
          </div>
          {" "}
          <div className={s.c106}>
            <div className={s.c107}>
              <span className={s.c108}>
                IM
              </span>
              <span className={s.c109}>
                Inès Morel
              </span>
            </div>
            {" "}
            <div className={s.c110}>
              <div className={s.c111}>
                <span>
                  <strong>
                    Studio Nova
                  </strong>
                  {" "}
                  <span className={s.c112}>
                    Réunion
                  </span>
                </span>
                <span className={s.c113}>
                  4 h
                </span>
              </div>
              {" "}
              <div className={s.c114}>
                <span>
                  <strong>
                    Maison Lenoir
                  </strong>
                  {" "}
                  <span className={s.c115}>
                    Création
                  </span>
                </span>
                <span className={s.c113}>
                  3 h
                </span>
              </div>
              {" "}
              <div className={s.c116}>
                <span>
                  <strong>
                    Interne
                  </strong>
                  {" "}
                  <span className={s.c117}>
                    Organisation
                  </span>
                </span>
                <span className={s.c113}>
                  1 h
                </span>
              </div>
            </div>
          </div>
          {" "}
          <div className={s.c118}>
            <span>
              Jeudi 24 septembre
            </span>
            <span className={s.c105}>
              7 h · 1 personne
            </span>
          </div>
          {" "}
          <div className={s.c106}>
            <div className={s.c107}>
              <span className={s.c108}>
                IM
              </span>
              <span className={s.c119}>
                Inès Morel
              </span>
            </div>
            {" "}
            <div className={s.c110}>
              <div className={s.c120}>
                <span>
                  <strong>
                    Garage Ferrand
                  </strong>
                  {" "}
                  <span className={s.c121}>
                    À facturer
                  </span>
                  {" · demandé par le client"}
                </span>
                <span className={s.c113}>
                  2 h 30
                </span>
              </div>
              {" "}
              <div className={s.c114}>
                <span>
                  <strong>
                    Boulangerie Roche
                  </strong>
                  {" "}
                  <span className={s.c115}>
                    Création
                  </span>
                </span>
                <span className={s.c113}>
                  4 h 30
                </span>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <svg aria-hidden="true" focusable="false" className={`${s.c122} ${s.cur2}`} width="22" height="22" viewBox="0 0 24 24" fill="#0E1A2B" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M4 2l16 10-7 2-3 7z" />
        </svg>
        {" "}
        <div className={`${s.c123} ${s.pop}`}>
          <div className={s.c124}>
            <span className={s.c125}>
              IM
            </span>
            <div className={s.c66}>
              <span className={s.c126}>
                Inès Morel
              </span>
              <span className={s.c127}>
                Chargée de projet
              </span>
            </div>
          </div>
          {" "}
          <div className={s.c128}>
            <div className={s.c129}>
              <span>
                <strong className={s.c130}>
                  26 h 30
                </strong>
                {" sur 35 h"}
              </span>
              <span className={s.c131}>
                76 %
              </span>
            </div>
            <div className={s.c132}>
              <div className={s.c133}></div>
            </div>
          </div>
          {" "}
          <div className={s.c134}>
            <span className={s.c131}>
              Jour sans saisie
            </span>
            <span className={s.c135}>
              lun. 21 sept.
            </span>
          </div>
          {" "}
          <div className={s.c136}>
            <span className={s.c137}>
              Voir sa semaine
            </span>
            <span className={s.c137}>
              Voir son historique
            </span>
            <span className={s.c137}>
              Fiche employé
            </span>
          </div>
        </div>
      </Scene>
    </section>
    {" "}
    {" "}
    <section className={s.c138} data-reveal>
      <div className={s.c53}>
        <span className={s.c54}>
          Automatisations et connexions
        </span>
        {" "}
        <h2 className={s.c55}>
          Tout ce qui était éparpillé, réuni au même endroit.
        </h2>
        {" "}
        <p className={s.c56}>
          Des connexions directes avec les outils de l'agence ramènent tout dans le logiciel, automatiquement : campagnes publicitaires, agendas, comptabilité, fichiers de production. Plus besoin d'ouvrir cinq outils pour avoir une vision complète.
        </p>
        {" "}
        <div className={s.c139}>
          <div className={s.c140}>
            <span className={s.c113}>
              Campagnes Meta
            </span>
            <span className={s.c141}>
              Résultats Facebook et Instagram remontés par client
            </span>
          </div>
          {" "}
          <div className={s.c140}>
            <span className={s.c113}>
              Google Agenda
            </span>
            <span className={s.c141}>
              Rendez-vous et heures facturables synchronisés
            </span>
          </div>
          {" "}
          <div className={s.c140}>
            <span className={s.c113}>
              Pennylane
            </span>
            <span className={s.c141}>
              Factures envoyées, dépenses récupérées
            </span>
          </div>
          {" "}
          <div className={s.c140}>
            <span className={s.c113}>
              Fichiers Excel
            </span>
            <span className={s.c141}>
              47 plannings lus et surveillés en continu
            </span>
          </div>
        </div>
      </div>
      {" "}
      <Scene className={s.c142}>
        <svg aria-hidden="true" focusable="false" className={s.c143} width="620" height="520" viewBox="0 0 620 520" fill="none">
          <path className={s.flow} d="M130 100 L310 260" stroke="#1D5C57" strokeWidth="2" />
          <path className={s.flow} d="M490 100 L310 260" stroke="#1D5C57" strokeWidth="2" />
          <path className={s.flow} d="M130 420 L310 260" stroke="#1D5C57" strokeWidth="2" />
          <path className={s.flow} d="M490 420 L310 260" stroke="#1D5C57" strokeWidth="2" />
          <path className={s.flow} d="M310 60 L310 260" stroke="#1D5C57" strokeWidth="2" />
        </svg>
        {" "}
        <div className={s.c144}>
          <span className={`${s.c145} ${s.pulse}`}></span>
          <span className={s.c146}>
            Le logiciel
          </span>
          <span className={s.c147}>
            tout au même endroit
          </span>
        </div>
        {" "}
        <div className={s.c148}>
          <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l18-8-8 18-2-8z" />
          </svg>
          Campagnes Meta
        </div>
        {" "}
        <div className={s.c149}>
          <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4" />
          </svg>
          Google Agenda
        </div>
        {" "}
        <div className={s.c150}>
          <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          Gmail
        </div>
        {" "}
        <div className={s.c151}>
          <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M4 9h16M4 15h16M10 9v12" />
          </svg>
          47 fichiers Excel
        </div>
        {" "}
        <div className={s.c152}>
          <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2h9l5 5v15H6z" />
            <path d="M14 2v6h6" />
          </svg>
          Pennylane
        </div>
      </Scene>
    </section>
    {" "}
    {" "}
    <section className={s.c153} data-reveal>
      <div className={s.c154}>
        <h2 className={s.c155}>
          Ce que j'ai livré,
          <br />
          lot par lot.
        </h2>
        {" "}
        <p className={s.c156}>
          Chaque écran validé sur maquette par le dirigeant avant d'être développé, puis livré et vérifié avec l'équipe.
        </p>
      </div>
      {" "}
      {" "}
      <Scene className={s.c157}>
        <div className={s.c158}>
          <div className={s.c124}>
            <span className={s.c159}>
              LOT 0
            </span>
            <span className={s.c160}>
              Livré
            </span>
          </div>
          {" "}
          <h3 className={s.c161}>
            Sécurité, accès et rapidité
          </h3>
          {" "}
          <div className={s.c162}>
            <span>
              — Des écrans qui s'ouvrent en une seconde au lieu de trente
            </span>
            {" "}
            <span>
              — Les fonctions sensibles vérifient désormais qui les appelle
            </span>
            {" "}
            <span>
              — Les accès des anciens intervenants sont retirés
            </span>
            {" "}
            <span>
              — La direction ajoute, modifie et retire les accès elle-même
            </span>
            {" "}
            <span>
              — Une navigation repensée : chacun trouve tout en deux clics
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c163}>
          <div className={s.c164}>
            <span className={s.c126}>
              Ouverture d'un écran
            </span>
            {" "}
            <div className={s.c165}>
              <div className={s.c166}>
                <span className={s.c131}>
                  Avant
                </span>
                <span className={`${s.c131} ${s.okslow}`}>
                  ≈ 30 s
                </span>
              </div>
              {" "}
              <div className={s.c167}>
                <div className={`${s.c168} ${s.slow}`}></div>
              </div>
            </div>
            {" "}
            <div className={s.c165}>
              <div className={s.c166}>
                <span className={s.c113}>
                  Après
                </span>
                <span className={`${s.c169} ${s.okfast}`}>
                  1 s ✓
                </span>
              </div>
              {" "}
              <div className={s.c167}>
                <div className={`${s.c170} ${s.fast}`}></div>
              </div>
            </div>
          </div>
          {" "}
          <div className={s.c171}>
            <div className={s.c73}>
              <span className={s.c126}>
                Gestion des accès
              </span>
              <span className={s.c172}>
                + Ajouter
              </span>
            </div>
            {" "}
            <div className={s.c173}>
              <span>
                Camille
              </span>
              <span className={s.c174}>
                Administrateur
              </span>
            </div>
            {" "}
            <div className={s.c173}>
              <span>
                Hugo
              </span>
              <span className={s.c175}>
                Community manager
              </span>
            </div>
            {" "}
            <div className={s.c176}>
              <span className={s.c177}>
                Ancien prestataire
              </span>
              <span className={s.c178}>
                Accès retiré
              </span>
            </div>
          </div>
        </div>
      </Scene>
      {" "}
      {" "}
      <Scene className={s.c179}>
        <div className={s.c180}>
          <div className={s.c181}>
            <span className={s.c182}>
              MON TEMPS · VENDREDI
            </span>
            {" "}
            <div className={s.c183}>
              <span>
                Studio Nova
              </span>
              <span className={s.c113}>
                3 h
              </span>
            </div>
            {" "}
            <div className={s.c183}>
              <span>
                Maison Lenoir
              </span>
              <span className={s.c113}>
                2 h 30
              </span>
            </div>
            {" "}
            <div className={s.c183}>
              <span>
                Interne
              </span>
              <span className={s.c113}>
                1 h 30
              </span>
            </div>
            {" "}
            <div className={s.c184}>
              ✓ Journée complète · 7 h
            </div>
          </div>
          {" "}
          <div className={s.c185}>
            <span className={s.c186}>
              À FACTURER · SEPTEMBRE
            </span>
            {" "}
            <div className={s.c187}>
              <span className={`${s.c188} ${s.check}`}></span>
              <span className={s.c189}>
                Prestation supplémentaire
              </span>
              <span className={s.c113}>
                180 €
              </span>
            </div>
            {" "}
            <div className={s.c187}>
              <span className={`${s.c190} ${s.check}`}></span>
              <span className={s.c189}>
                Déplacement
              </span>
              <span className={s.c113}>
                120 €
              </span>
            </div>
            {" "}
            <div className={s.c191}>
              <span className={s.c192}></span>
              <span className={s.c193}>
                Geste commercial
              </span>
              <span>
                —
              </span>
            </div>
            {" "}
            <span className={s.c194}>
              <svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E1A2B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4z" />
              </svg>
              Envoyer vers Pennylane (2)
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c158}>
          <div className={s.c124}>
            <span className={s.c159}>
              LOT 1
            </span>
            <span className={s.c160}>
              Livré
            </span>
          </div>
          {" "}
          <h3 className={s.c161}>
            Facturation automatisée, marge enfin visible
          </h3>
          {" "}
          <div className={s.c162}>
            <span>
              — Chacun saisit son temps par client en une minute, en fin de journée
            </span>
            {" "}
            <span>
              — La direction voit en temps réel la marge de chaque client
            </span>
            {" "}
            <span>
              — Les prestations à facturer partent vers la compta en un clic
            </span>
            {" "}
            <span>
              — Plus aucune ressaisie : les factures arrivent prêtes à relire
            </span>
          </div>
        </div>
      </Scene>
      {" "}
      {" "}
      <Scene className={s.c157}>
        <div className={s.c158}>
          <div className={s.c124}>
            <span className={s.c159}>
              LOT 2
            </span>
            <span className={s.c160}>
              Livré
            </span>
          </div>
          {" "}
          <h3 className={s.c161}>
            Plus aucune échéance oubliée
          </h3>
          {" "}
          <div className={s.c162}>
            <span>
              — Les 47 plannings Excel de l'agence lus automatiquement, tels quels
            </span>
            {" "}
            <span>
              — Chacun voit ce qui reste à valider, trié par urgence
            </span>
            {" "}
            <span>
              — Un rappel automatique deux jours avant chaque échéance
            </span>
            {" "}
            <span>
              — La direction repère d'un coup d'œil les dossiers en retard
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c195}>
          <div className={s.c196}>
            <span className={s.c197}>
              À valider
            </span>
            <span className={s.c198}>
              Trié par urgence
            </span>
          </div>
          {" "}
          <div className={s.c199}>
            <span className={s.c200}></span>
            <div className={s.c201}>
              <span className={s.c126}>
                Livrable · Garage Ferrand
              </span>
              <span className={s.c198}>
                Échéance demain · pas encore validé
              </span>
            </div>
            <span className={s.c202}>
              Demain
            </span>
          </div>
          {" "}
          <div className={s.c203}>
            <span className={`${s.c204} ${s["pulse-warn"]}`}></span>
            <div className={s.c201}>
              <span className={s.c126}>
                Lancement · Studio Nova
              </span>
              <span className={s.c198}>
                Rappel : échéance dans 2 jours
              </span>
            </div>
            <span className={s.c205}>
              J-2
            </span>
          </div>
          {" "}
          <div className={s.c206}>
            <span className={s.c207}></span>
            <div className={s.c201}>
              <span className={s.c126}>
                Dossier octobre · Maison Lenoir
              </span>
              <span className={s.c198}>
                À relire
              </span>
            </div>
            <span className={s.c198}>
              J-5
            </span>
          </div>
          {" "}
          <div className={s.c208}>
            <span className={s.c209}></span>
            <div className={s.c201}>
              <span className={s.c126}>
                Commande novembre · Boulangerie Roche
              </span>
              <span className={s.c198}>
                Tout est validé
              </span>
            </div>
            <span className={s.c210}>
              ✓
            </span>
          </div>
        </div>
      </Scene>
      {" "}
      {" "}
      <Scene className={s.c179}>
        <div className={s.c211}>
          <div className={s.c73}>
            <span className={s.c197}>
              Récapitulatif · Studio Nova
            </span>
            <span className={s.c212}>
              SEPTEMBRE
            </span>
          </div>
          {" "}
          <div className={s.c213}>
            <span>
              Prestations supplémentaires
            </span>
            <span className={s.c113}>
              300 €
            </span>
          </div>
          {" "}
          <div className={s.c213}>
            <span>
              {"Heures facturables "}
              <span className={s.c131}>
                · depuis l'agenda
              </span>
            </span>
            <span className={s.c113}>
              195 €
            </span>
          </div>
          {" "}
          <div className={s.c213}>
            <span>
              {"Frais refacturés "}
              <span className={s.c131}>
                · depuis la compta
              </span>
            </span>
            <span className={s.c113}>
              49 €
            </span>
          </div>
          {" "}
          <div className={s.c214}>
            <span className={s.c215}>
              À facturer
            </span>
            <div className={s.c216}>
              <div className={`${s.c217} ${s.grow}`}></div>
            </div>
            <span className={s.c218}>
              544 €
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c158}>
          <div className={s.c124}>
            <span className={s.c159}>
              LOT 3
            </span>
            <span className={s.c219}>
              <span className={`${s.c220} ${s.pulse}`}></span>
              En finition
            </span>
          </div>
          {" "}
          <h3 className={s.c161}>
            Plus un euro oublié à la facturation
          </h3>
          {" "}
          <div className={s.c162}>
            <span>
              — Les heures facturables remontent seules des agendas
            </span>
            {" "}
            <span>
              — Les frais se refacturent en un clic, au bon client
            </span>
            {" "}
            <span>
              — Un récapitulatif par client, prêt à facturer
            </span>
          </div>
        </div>
      </Scene>
    </section>
    {" "}
    {" "}
    <section className={s.c221} data-reveal>
      <div className={s.c222}>
        <span className={s.c4}>
          La méthode sur ce projet
        </span>
        {" "}
        <h2 className={s.c55}>
          Rien n'est développé sans avoir été vu et validé.
        </h2>
      </div>
      {" "}
      <div className={s.c180}>
        <div className={s.c223}>
          <span className={s.c224}>
            01
          </span>
          <span className={s.c63}>
            Maquette validée d'abord
          </span>
          <span className={s.c225}>
            Le dirigeant voit chaque écran avant qu'il soit codé.
          </span>
        </div>
        {" "}
        <div className={s.c223}>
          <span className={s.c224}>
            02
          </span>
          <span className={s.c63}>
            Un lot à la fois
          </span>
          <span className={s.c225}>
            Livré, vérifié par l'équipe, puis le suivant.
          </span>
        </div>
        {" "}
        <div className={s.c223}>
          <span className={s.c224}>
            03
          </span>
          <span className={s.c63}>
            Tests automatiques
          </span>
          <span className={s.c225}>
            Chaque évolution vérifie que rien ne s'est cassé.
          </span>
        </div>
        {" "}
        <div className={s.c223}>
          <span className={s.c224}>
            04
          </span>
          <span className={s.c63}>
            Le code reste au client
          </span>
          <span className={s.c225}>
            Déposé dans son espace, documenté en français.
          </span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c226} data-reveal>
      <svg aria-hidden="true" focusable="false" width="44" height="34" viewBox="0 0 28 22" fill="#1D5C57">
        <path d="M0 22V12C0 5 4 1 11 0l1 3c-4 1-6 4-6 7h5v12zm16 0V12c0-7 4-11 11-12l1 3c-4 1-6 4-6 7h5v12z" />
      </svg>
      {" "}
      <blockquote className={s.c227}>
        Alexis a vraiment fait évoluer notre logiciel : il est plus rapide, plus réactif et bien plus simple à utiliser. Il écoute nos besoins et il est force de proposition. C'est agréable de travailler avec lui.
      </blockquote>
      {" "}
      <div className={s.c68}>
        <span className={s.c228}>
          Joseph Herbinet
        </span>
        <span className={s.c229}>
          Dirigeant d'Early
        </span>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c230} data-reveal>
      <h2 className={s.c55}>
        Ce qui a changé pour l'entreprise
      </h2>
      {" "}
      <div className={s.c231}>
        <div className={s.c232}>
          <span className={`${s.c233} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-2.64-6.36" />
              <path d="M21 3v6h-6" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          {" "}
          <span className={s.c234}>
            Vision 360°
          </span>
          {" "}
          <span className={s.c235}>
            Toute l'activité sur un seul écran : clients, équipes, finances.
          </span>
        </div>
        {" "}
        <div className={s.c232}>
          <span className={`${s.c236} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2h9l5 5v15H6z" />
              <path d="M14 2v6h6" />
              <path d="M9 15l2 2 4-4" />
            </svg>
          </span>
          {" "}
          <span className={s.c234}>
            Facturation automatisée
          </span>
          {" "}
          <span className={s.c235}>
            Du temps passé à la facture dans la compta, sans ressaisie.
          </span>
        </div>
        {" "}
        <div className={s.c232}>
          <span className={`${s.c237} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
              <path d="M16 11h6M19 8v6" />
            </svg>
          </span>
          {" "}
          <span className={s.c234}>
            CRM connecté
          </span>
          {" "}
          <span className={s.c235}>
            Chaque client relié à ses contrats, ses missions et ses campagnes.
          </span>
        </div>
        {" "}
        <div className={s.c232}>
          <span className={`${s.c238} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="8" r="3" />
              <circle cx="17" cy="9" r="2.5" />
              <path d="M2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
              <path d="M14.5 15.2c.8-.5 1.6-.7 2.5-.7 2.8 0 5 1.9 5 4.9" />
            </svg>
          </span>
          {" "}
          <span className={s.c234}>
            Équipes pilotées simplement
          </span>
          {" "}
          <span className={s.c235}>
            Charge, temps et accès de chacun, en un coup d'œil.
          </span>
        </div>
        {" "}
        <div className={s.c232}>
          <span className={`${s.c239} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path className={s.flow} d="M2 12h4l3-8 5 16 3-8h5" />
            </svg>
          </span>
          {" "}
          <span className={s.c234}>
            Données vivantes
          </span>
          {" "}
          <span className={s.c235}>
            Des chiffres à jour en temps réel, fini les tableaux figés.
          </span>
        </div>
        {" "}
        <div className={s.c232}>
          <span className={`${s.c240} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 2.64-6.36" />
              <path d="M3 3v6h6" />
              <path d="M12 7v5l3 2" />
            </svg>
          </span>
          {" "}
          <span className={s.c234}>
            Historique complet
          </span>
          {" "}
          <span className={s.c235}>
            Qui a fait quoi, quand, pour quel client : tout est tracé.
          </span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c241} data-reveal id="ec-contact">
      <h2 className={s.c242}>
        Votre logiciel mérite la même reprise.
      </h2>
      {" "}
      <p className={s.c243}>
        20 minutes pour comprendre votre besoin et vous dire franchement si je peux vous aider.
      </p>
      {" "}
      <div className={s.c244}>
        <CalendlyLink className={s.c245}>
          Réserver un créneau
        </CalendlyLink>
        {" "}
        <Link className={s.c246} href="/">
          Retour à l'accueil
        </Link>
      </div>
    </section>
    {" "}
    {" "}
    </>
  );
}
