import { AssistantMobile } from "./FormationIAMobileDemo";
import m from "./FormationIAMobileDemo.module.css";
import Scene from "@/components/Scene";
import CalendlyLink from "@/components/CalendlyLink";
import s from "./FormationIA.module.css";

// Généré depuis design-reference/FormationIA.html (textes et styles de la maquette).
export default function FormationIA() {
  return (
    <>
    {" "}
    {" "}
    <section className={s.c1} data-reveal>
      <div className={s.c2}>
        <div className={s.c3}>
          <div className={s.c4}>
            <span className={`${s.c5} ${s.pulse}`}></span>
            Formation IA pour les équipes
          </div>
          {" "}
          <h1 className={s.c6}>
            Vos équipes formées à l'IA, sur leur vrai travail.
          </h1>
          {" "}
          <p className={s.c7}>
            Des formations pratiques de 1 à 3 jours, sur vos propres documents. Vos équipes repartent avec des méthodes qu'elles utilisent dès le lendemain.
          </p>
          {" "}
          <div className={s.c8}>
            <CalendlyLink className={s.c9}>
              Organiser une formation
            </CalendlyLink>
            {" "}
            <a className={s.c10} href="#fi-formats">
              Voir les formats
            </a>
          </div>
        </div>
        {" "}
        {" "}
        <Scene className={m.sceneWrap}>
          <div className={`${s.c11} ${m.desktopOnly}`}>
            <div className={s.c12}>
              <div className={s.c13}>
                <span className={s.c14}>
                  Assistant IA
                </span>
                <span className={s.c15}>
                  ATELIER · JOUR 1
                </span>
              </div>
              {" "}
              <div className={`${s.c16} ${s.msg1}`}>
                <span>
                  À partir de mes notes de visite, rédige le devis pour Mme Roux, au format de nos devis habituels.
                </span>
                {" "}
                <span className={s.c17}>
                  <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h9l5 5v15H6z" />
                  </svg>
                  notes_visite_roux.pdf
                </span>
              </div>
              {" "}
              <div className={`${s.c18} ${s.typing}`}>
                <span className={s.c19}></span>
                <span className={s.c19}></span>
                <span className={s.c19}></span>
              </div>
              {" "}
              <div className={`${s.c20} ${s.msg2}`}>
                <div className={s.c21}>
                  <strong>
                    Devis n° 2026-118 · Mme Roux
                  </strong>
                  <span className={s.c22}>
                    Brouillon
                  </span>
                </div>
                {" "}
                <div className={`${s.c23} ${s.line}`}></div>
                {" "}
                <div className={`${s.c24} ${s.line}`}></div>
                {" "}
                <div className={`${s.c25} ${s.line}`}></div>
                {" "}
                <div className={s.c26}>
                  <span>
                    Total HT
                  </span>
                  <strong>
                    1 480,00 €
                  </strong>
                </div>
              </div>
              {" "}
              <div className={`${s.c27} ${s.saved}`}>
                <span className={s.c28}>
                  1 min
                </span>
                <span className={s.c29}>
                  au lieu d'une demi-heure
                </span>
                <span className={s.exampleTag}>Exemple</span>
              </div>
            </div>
          </div>
          <AssistantMobile />
        </Scene>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c30} data-reveal>
      <div className={s.c31}>
        <h2 className={s.c32}>
          Ce que vos équipes
          <br />
          sauront faire.
        </h2>
        {" "}
        <p className={s.c33}>
          Pas de théorie abstraite : chaque exercice part d'une tâche réelle de votre entreprise.
        </p>
      </div>
      {" "}
      <div className={s.c34}>
        <div className={s.c35}>
          <span className={`${s.c36} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2h9l5 5v15H6z" />
              <path d="M14 2v6h6" />
              <path d="M9 13h6M9 17h4" />
            </svg>
          </span>
          <span className={s.c37}>
            Rédiger en quelques minutes
          </span>
          <span className={s.c38}>
            Devis, courriers, comptes-rendus, fiches produits, à partir de simples notes.
          </span>
        </div>
        {" "}
        <div className={s.c35}>
          <span className={`${s.c39} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </span>
          <span className={s.c37}>
            Traiter les e-mails plus vite
          </span>
          <span className={s.c38}>
            Trier, résumer et préparer les réponses aux messages du jour.
          </span>
        </div>
        {" "}
        <div className={s.c35}>
          <span className={`${s.c40} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12h8M8 8h8M8 16h5" />
            </svg>
          </span>
          <span className={s.c37}>
            Résumer réunions et documents
          </span>
          <span className={s.c38}>
            Un compte-rendu clair et les actions à mener, en sortant de réunion.
          </span>
        </div>
        {" "}
        <div className={s.c35}>
          <span className={`${s.c41} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M7 15l4-4 3 3 5-6" />
            </svg>
          </span>
          <span className={s.c37}>
            Analyser leurs tableaux
          </span>
          <span className={s.c38}>
            Faire parler un fichier Excel sans être expert des formules.
          </span>
        </div>
        {" "}
        <div className={s.c35}>
          <span className={`${s.c42} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12a8 8 0 0 1 14-5.3L20 9" />
              <path d="M20 4v5h-5" />
              <path d="M20 12a8 8 0 0 1-14 5.3L4 15" />
              <path d="M4 20v-5h5" />
            </svg>
          </span>
          <span className={s.c37}>
            Préparer les relances
          </span>
          <span className={s.c38}>
            Relances clients et fournisseurs personnalisées, prêtes à envoyer.
          </span>
        </div>
        {" "}
        <div className={s.c35}>
          <span className={`${s.c43} ${s.float}`}>
            <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1D5C57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="7" width="16" height="12" rx="3" />
              <path d="M12 3v4M9 13h.01M15 13h.01" />
            </svg>
          </span>
          <span className={s.c37}>
            Créer leurs propres assistants
          </span>
          <span className={s.c38}>
            Des assistants réglés sur leurs tâches récurrentes, réutilisables par toute l'équipe.
          </span>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c44} data-reveal id="fi-formats">
      <h2 className={s.c32}>
        Trois formats, sur site ou à distance.
      </h2>
      {" "}
      <div className={s.c45}>
        <div className={s.c46}>
          <span className={s.c47}>
            1 JOUR
          </span>
          {" "}
          <span className={s.c48}>
            Découverte
          </span>
          {" "}
          <span className={s.c49}>
            Comprendre ce que l'IA sait faire, adopter les bons réflexes et gagner du temps sur trois tâches concrètes.
          </span>
          {" "}
          <div className={s.c50}>
            <span>
              ✓ Les bases et les bons réflexes
            </span>
            <span>
              ✓ 3 ateliers sur vos documents
            </span>
            <span>
              ✓ Un guide pratique à garder
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c51}>
          <div className={s.c52}>
            <span className={s.c53}>
              2 JOURS
            </span>
          </div>
          {" "}
          <span className={s.c48}>
            Pratique métier
          </span>
          {" "}
          <span className={s.c55}>
            Chaque participant repart avec ses propres méthodes, appliquées à son poste et à ses tâches du quotidien.
          </span>
          {" "}
          <div className={s.c56}>
            <span>
              ✓ Tout le format Découverte
            </span>
            <span>
              ✓ Ateliers par métier
            </span>
            <span>
              ✓ Assistants personnalisés par poste
            </span>
          </div>
        </div>
        {" "}
        <div className={s.c46}>
          <span className={s.c47}>
            3 JOURS + SUIVI
          </span>
          {" "}
          <span className={s.c48}>
            Accompagnement
          </span>
          {" "}
          <span className={s.c49}>
            Pour ancrer les usages dans la durée, avec un suivi pendant les semaines qui suivent la formation.
          </span>
          {" "}
          <div className={s.c50}>
            <span>
              ✓ Tout le format Pratique métier
            </span>
            <span>
              ✓ Plan d'action par équipe
            </span>
            <span>
              ✓ 30 jours de suivi inclus
            </span>
          </div>
        </div>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c57} data-reveal>
      <div className={s.c58}>
        <h2 className={s.c59}>
          Une journée type.
        </h2>
        {" "}
        <div className={s.c60}>
          <div className={s.c61}>
            <div className={`${s.c62} ${s.prog}`}></div>
          </div>
          {" "}
          <div className={s.c63}>
            <span className={s.c64}>
              9 h
            </span>
            <span className={s.c65}>
              Les bases, sans jargon
            </span>
            <span className={s.c38}>
              Ce que l'IA fait bien, ce qu'elle fait mal, et comment bien lui parler.
            </span>
          </div>
          {" "}
          <div className={s.c63}>
            <span className={s.c64}>
              11 h
            </span>
            <span className={s.c65}>
              Ateliers sur vos documents
            </span>
            <span className={s.c38}>
              Devis, e-mails, comptes-rendus : chacun travaille sur ses vraies tâches.
            </span>
          </div>
          {" "}
          <div className={s.c63}>
            <span className={s.c64}>
              14 h
            </span>
            <span className={s.c65}>
              Mise en situation
            </span>
            <span className={s.c38}>
              Chaque participant construit ses propres méthodes, avec mon aide.
            </span>
          </div>
          {" "}
          <div className={s.c63}>
            <span className={s.c64}>
              17 h
            </span>
            <span className={s.c65}>
              Plan d'action
            </span>
            <span className={s.c38}>
              Ce que chacun applique dès le lendemain.
            </span>
          </div>
        </div>
      </div>
      {" "}
      <div className={s.c66}>
        <span className={s.c67}>
          <svg aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8FD0C5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </span>
        {" "}
        <span className={s.c68}>
          Vos données restent les vôtres.
        </span>
        {" "}
        <span className={s.c69}>
          On définit ensemble ce qui peut être confié à une IA et ce qui ne doit jamais l'être. Vos équipes repartent avec des règles claires et des outils adaptés à la confidentialité de vos données.
        </span>
        {" "}
        <div className={s.c70}>
          <span className={s.c71}>
            ChatGPT
          </span>
          <span className={s.c71}>
            Claude
          </span>
          <span className={s.c71}>
            Copilot
          </span>
          <span className={s.c71}>
            Gemini
          </span>
        </div>
        {" "}
        <span className={s.c72}>
          Prestataire indépendant, sans partenariat officiel avec les éditeurs cités.
        </span>
      </div>
    </section>
    {" "}
    {" "}
    <section className={s.c73} data-reveal id="fi-contact">
      <h2 className={s.c74}>
        Parlons de votre équipe.
      </h2>
      {" "}
      <p className={s.c75}>
        20 minutes pour cerner vos besoins et construire le programme adapté.
      </p>
      {" "}
      <CalendlyLink className={s.c9}>
        Réserver 20 min
      </CalendlyLink>
    </section>
    {" "}
    {" "}
    </>
  );
}
