import Image from "next/image";
import Link from "next/link";
import portrait from "@/public/alexis-portrait-hd.jpg";
import TallyEmbed from "@/components/TallyEmbed";
import { CALENDLY_URL, TALLY_FORM_ID } from "@/config/site";
import s from "./Diagnostic.module.css";

const OUTCOMES = [
  { title: "Ce qui vous coûte le plus", text: "Les 2 ou 3 tâches qui vous font perdre le plus de temps ou d'argent." },
  { title: "Ce qui vaut la peine", text: "Ce qui peut être automatisé ou relié, et ce qui ne vaut pas l'investissement." },
  { title: "Une première estimation", text: "Une fourchette de prix et de délai, pour décider en connaissance de cause." },
];

const STEPS = [
  "Vous répondez à quelques questions — 2 minutes",
  "Je prépare l'échange à partir de vos réponses",
  "On en parle 20 minutes en visio",
];

export default function Diagnostic() {
  return (
    <>
      {/* Haut de page */}
      <section className={s.hero} data-reveal>
        <div className={s.heroInner}>
          <span className={s.eyebrow}>Diagnostic gratuit · 20 minutes</span>
          <h1 className={s.h1}>20 minutes pour savoir ce qu&apos;un logiciel sur mesure changerait chez vous.</h1>
          <p className={s.lead}>
            Un échange en visio, sans engagement. Vous repartez avec des pistes concrètes, même si nous ne travaillons pas ensemble.
          </p>
          <div className={s.actions}>
            <a className={s.primary} href="#formulaire">
              Remplir le formulaire
            </a>
            <a className={s.secondary} href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Je préfère réserver directement
              <span className={s.srOnly}> (nouvel onglet)</span>
              <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Ce que vous avez à la fin des 20 minutes */}
      <section className={s.section} data-reveal>
        <h2 className={s.h2}>Ce que vous avez à la fin des 20 minutes</h2>
        <ol className={s.cards}>
          {OUTCOMES.map((o, i) => (
            <li key={o.title} className={s.card}>
              <span className={s.number} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={s.cardTitle}>{o.title}</h3>
              <p className={s.cardText}>{o.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Comment ça se passe */}
      <section className={`${s.section} ${s.sectionTight}`} data-reveal>
        <h2 className={s.h2}>Comment ça se passe</h2>
        <div className={s.timeline}>
          <span className={s.line} aria-hidden="true"></span>
          <ol className={s.steps}>
            {STEPS.map((step, i) => (
              <li key={step} className={s.step}>
                <span className={s.stepNumber} aria-hidden="true">
                  {i + 1}
                </span>
                <span className={s.stepText}>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Le formulaire */}
      <section className={`${s.section} ${s.formSection}`} id="formulaire" data-reveal>
        <h2 className={s.h2}>Parlez-moi de votre entreprise</h2>
        <div className={s.formCard}>
          <TallyEmbed formId={TALLY_FORM_ID} title="Formulaire de diagnostic" className={s.frame} />
        </div>
      </section>

      {/* Qui suis-je */}
      <section className={`${s.section} ${s.sectionTight}`} data-reveal>
        <div className={s.about}>
          <Image className={s.portrait} src={portrait} alt="Portrait d'Alexis Gavens" width={120} height={120} sizes="120px" />
          <div className={s.aboutText}>
            <h2 className={s.aboutName}>Alexis Gavens</h2>
            <p className={s.aboutBio}>
              Ancien responsable de l&apos;administration des ventes et de la logistique, je crée des logiciels de gestion sur mesure pour les PME. Je comprends votre travail avant de parler technique.
            </p>
          </div>
        </div>
      </section>

      {/* Questions fréquentes */}
      <section className={`${s.section} ${s.faqSection}`} data-reveal>
        <h2 className={s.h2}>Questions fréquentes</h2>
        <div className={s.faq}>
          <details className={s.item}>
            <summary className={s.question}>C&apos;est vraiment gratuit ?</summary>
            <p className={s.answer}>Oui. 20 minutes, sans engagement et sans relance insistante.</p>
          </details>
          <details className={s.item}>
            <summary className={s.question}>Et si mon besoin est petit ?</summary>
            <p className={s.answer}>
              Je vous le dirai franchement, et je vous orienterai vers la solution la plus simple, même si ce n&apos;est pas moi.
            </p>
          </details>
          <details className={s.item}>
            <summary className={s.question}>Que deviennent mes réponses ?</summary>
            <p className={s.answer}>
              Elles servent uniquement à préparer notre échange. Le détail est dans les{" "}
              <Link className={s.textLink} href="/mentions-legales#ml-donnees">
                mentions légales
              </Link>
              .
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
