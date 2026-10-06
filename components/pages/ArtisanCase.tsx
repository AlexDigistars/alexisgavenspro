// Étude de cas (client anonymisé) : un menuisier à Toulouse, qui travaille seul.
// Assistant IA pour ses mails et son organisation, site internet et fiche Google. Démonstrations à données fictives.
import type { CSSProperties } from "react";
import Scene from "@/components/Scene";
import DiagnosticLink from "@/components/DiagnosticLink";
import { Feature, Icons, Pains, ProjectCta, Steps } from "@/components/ProjectBlocks";
import s from "./ProjectCase.module.css";
import a from "./ArtisanCase.module.css";

/** Délai d'apparition d'un élément dans le cycle de la démonstration. */
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

const INBOX = [
  { from: "Mme Roux", summary: "Devis pour un placard sur mesure, chambre de 3 m", tag: "Réponse prête" },
  { from: "M. Garnier", summary: "Demande de rendez-vous pour une porte d'entrée", tag: "Réponse prête" },
  { from: "SCI Horizon", summary: "Relance sur la facture de l'escalier", tag: "À traiter" },
];

const TODO = [
  { label: "Rappeler M. Garnier : rendez-vous porte d'entrée", done: true },
  { label: "Envoyer le devis du placard à Mme Roux", done: true },
  { label: "Commander les panneaux de chêne", done: false },
  { label: "Publier les photos du chantier Dupuis", done: false },
];

const GUIDE = [
  "Repérer le point de frottement avec une craie.",
  "Vérifier les paumelles et resserrer les vis.",
  "Si besoin, raboter le chant de 1 à 2 mm.",
  "Protéger le chant raboté avec une huile ou un vernis.",
];

export default function ArtisanCase() {
  return (
    <>
      {/* Haut de page */}
      <section className={s.hero} data-reveal>
        <div className={s.heroInner}>
          <div className={s.heroText}>
            <span className={s.eyebrow}>Étude de cas : un menuisier à Toulouse</span>
            <h1 className={s.h1}>Sa boîte mail traitée pendant qu&apos;il est à l&apos;atelier.</h1>
            <p className={s.lead}>
              Un menuisier toulousain qui travaille seul passait ses soirées dans ses mails et ses demandes clients. Je l&apos;ai
              équipé d&apos;un assistant IA qui résume les demandes, prépare les réponses et organise ses journées. Ensemble, nous
              avons aussi refait son site et sa fiche Google.
            </p>
            <div className={s.actions}>
              <DiagnosticLink className={s.primary}>Réserver 20 min</DiagnosticLink>
              <a className={s.anchor} href="#fonctionnement">
                Voir comment ça marche ↓
              </a>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Scene className={a.heroScene} shift={8}>
              <div
                className={a.phone}
                role="img"
                aria-label="Démonstration : les mails reçus sont résumés en une ligne, et une réponse est déjà préparée pour chacun."
              >
                <div className={a.screen} aria-hidden="true">
                  <div className={a.chatHead}>
                    <span className={a.avatar}>IA</span>
                    <span className={a.chatName}>
                      <b>Boîte de réception</b>
                      <small>3 nouvelles demandes</small>
                    </span>
                  </div>
                  {INBOX.map((mail, i) => (
                    <div key={mail.from} className={`${a.mailCard} ${a.appear}`} style={d(0.4 + i * 1.1)}>
                      <div className={a.quoteHead}>
                        <b>{mail.from}</b>
                        <span className={mail.tag === "Réponse prête" ? a.chip : a.draft}>{mail.tag}</span>
                      </div>
                      <span className={a.summaryLine}>{mail.summary}</span>
                    </div>
                  ))}
                  <div className={`${a.bubbleBot} ${a.appear}`} style={d(3.8)}>
                    <span className={a.botLine}>
                      <b>Réponse préparée · Mme Roux</b>
                    </span>
                    <span className={a.message}>
                      Bonjour Madame Roux, merci pour votre demande. Je peux passer mesurer la chambre jeudi en fin de journée pour
                      vous faire un devis précis.
                    </span>
                    <div className={a.quoteActions}>
                      <span className={a.ghostBtn}>Modifier</span>
                      <span className={a.sendBtn}>Envoyer</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className={a.heroFictive}>Démonstration · données fictives</span>
            </Scene>
          </div>
        </div>
      </section>

      {/* La situation */}
      <section className={`${s.section} ${s.sand}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Le métier le jour, les mails le soir.</h2>
          <p className={s.intro}>
            Seul dans son atelier et sur ses chantiers, il faisait tout lui-même. Les demandes arrivaient en continu, et
            l&apos;administratif débordait sur ses soirées.
          </p>
        </div>
        <Pains
          items={[
            { icon: Icons.mail, title: "Des demandes en continu", text: "Devis, rendez-vous, questions : tout arrivait dans la même boîte mail." },
            { icon: Icons.moon, title: "Des réponses le soir", text: "Après la journée à l'atelier, il restait les mails à lire et les réponses à écrire." },
            { icon: Icons.eye, title: "Peu visible en ligne", text: "Son site et sa fiche Google ne montraient pas la qualité de son travail." },
          ]}
        />
      </section>

      {/* Ce que fait l'assistant */}
      <section className={s.section} id="fonctionnement" data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Un assistant IA pour ses mails et ses journées.</h2>
          <p className={s.intro}>
            L&apos;assistant lit ce qui arrive, résume et prépare. Le menuisier relit, ajuste et valide : rien ne part sans lui.
          </p>
        </div>
        <div className={s.features}>
          <Feature
            label="Mails"
            title="Chaque demande résumée, chaque réponse préparée."
            items={[
              "Les demandes des clients sont résumées en quelques lignes.",
              "Une réponse est préparée en brouillon pour chacune.",
              "Il n'a plus qu'à relire, ajuster et envoyer : c'est ce qui lui fait gagner le plus de temps.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={a.stack} role="img" aria-label="Démonstration : un long mail client, son résumé en trois points et la réponse préparée en brouillon.">
                <div className={a.card} aria-hidden="true">
                  <span className={a.cardTitle}>Mail de M. Garnier</span>
                  <p className={a.message}>
                    « Bonjour, nous avons acheté une maison à Balma et la porte d&apos;entrée ferme mal. Nous aimerions la remplacer
                    par une porte en bois, si possible avant l&apos;hiver. Seriez-vous disponible pour passer la voir ? … »
                  </p>
                </div>
                <div className={`${a.card} ${a.draftCard} ${a.appear}`} style={d(0.8)} aria-hidden="true">
                  <span className={a.group}>Résumé</span>
                  <span className={a.point}>Remplacer une porte d&apos;entrée par une porte en bois</span>
                  <span className={a.point}>Maison à Balma · avant l&apos;hiver</span>
                  <span className={a.point}>Demande une visite</span>
                  <div className={`${a.quoteActions} ${a.appear}`} style={d(2)}>
                    <span className={a.chip}>Réponse prête à relire</span>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            reverse
            label="Organisation"
            title="Sa journée et sa semaine, en une liste."
            items={[
              "Une liste de tâches chaque jour et chaque semaine, à partir de tout ce qui arrive dans sa boîte mail.",
              "Son agenda Google est relié : son planning se construit tout seul.",
              "Ses notes et ses listes classiques au même endroit.",
            ]}
          >
            <Scene className={s.panel} shift={6}>
              <div className={a.summary} role="img" aria-label="Démonstration : la liste des tâches du jour, cochées au fil de la journée, et le planning de la semaine.">
                <div className={a.card} aria-hidden="true">
                  <div className={a.quoteHead}>
                    <b>Aujourd&apos;hui</b>
                    <span className={a.time}>Mardi</span>
                  </div>
                  {TODO.map((t, i) => (
                    <div key={t.label} className={a.todo}>
                      <span className={t.done ? `${a.box} ${a.boxDone}` : a.box} style={t.done ? d(0.6 + i * 0.8) : undefined}></span>
                      <span>{t.label}</span>
                    </div>
                  ))}
                  <span className={a.group}>Cette semaine</span>
                  <div className={a.week}>
                    {[
                      ["Lun.", "Atelier"],
                      ["Mar.", "Chantier Dupuis"],
                      ["Mer.", "Atelier"],
                      ["Jeu.", "Visite Mme Roux"],
                      ["Ven.", "Pose escalier"],
                    ].map(([day, what], i) => (
                      <span key={day} className={`${a.day} ${a.appear}`} style={d(1 + i * 0.3)}>
                        <b>{day}</b>
                        {what}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            label="Chantiers techniques"
            title="Une photo, et un mode d'emploi pas à pas."
            items={[
              "Sur un chantier délicat, il prend une photo et décrit le problème.",
              "L'assistant lui répond avec les étapes, dans l'ordre.",
              "Il garde son savoir-faire : l'assistant l'aide à ne rien oublier.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={a.stack} role="img" aria-label="Démonstration : la photo d'une porte qui frotte, puis un mode d'emploi en quatre étapes.">
                <div className={a.card} aria-hidden="true">
                  <div className={a.photo}>
                    <span className={a.photoDoor}></span>
                    <span className={a.photoLabel}>Photo · porte de chambre qui frotte</span>
                  </div>
                </div>
                <div className={`${a.card} ${a.draftCard}`} aria-hidden="true">
                  <span className={a.group}>Mode d&apos;emploi</span>
                  {GUIDE.map((step, i) => (
                    <div key={step} className={`${a.stepRow} ${a.appear}`} style={d(0.6 + i * 0.7)}>
                      <span className={a.stepNum}>{i + 1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Scene>
          </Feature>
        </div>
      </section>

      {/* Visibilité : site et fiche Google */}
      <section className={`${s.section} ${s.sand}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Un site soigné et une fiche Google qui travaille pour lui.</h2>
          <p className={s.intro}>
            Nous avons refait son site internet de A à Z, puis travaillé sa fiche Google. Aujourd&apos;hui, il ressort parmi les
            premiers résultats sur « menuisier Toulouse ».
          </p>
        </div>
        <Feature
          label="Référencement local"
          title="Une fiche Google active, semaine après semaine."
          items={[
            "Les bons mots-clés et les bonnes activités renseignés.",
            "Des photos de chantier publiées au moins deux fois par semaine.",
            "Un avis demandé après chaque chantier, et une réponse à chaque avis.",
          ]}
        >
          <Scene className={`${s.panel} ${a.whitePanel}`} shift={7}>
            <div className={a.stack} role="img" aria-label="Démonstration : une recherche « menuisier Toulouse » où sa menuiserie ressort en tête, avec l'activité de sa fiche Google.">
              <div className={a.card} aria-hidden="true">
                <div className={a.search}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" />
                  </svg>
                  menuisier toulouse
                </div>
                <div className={`${a.result} ${a.resultOn}`}>
                  <span>
                    <b>Sa menuiserie</b>
                    <small>Menuisier · Toulouse · Ouvert</small>
                  </span>
                  <span className={a.stars}>★ 4,9</span>
                </div>
                <div className={a.result}>
                  <span>
                    <b>Une autre menuiserie</b>
                    <small>Menuisier · Toulouse</small>
                  </span>
                  <span className={a.starsMuted}>★ 4,4</span>
                </div>
              </div>
              <div className={`${a.card} ${a.draftCard}`} aria-hidden="true">
                <span className={a.group}>Activité de la fiche</span>
                {[
                  ["Photo publiée", "Escalier en chêne · lundi"],
                  ["Réponse à un avis", "Mme Petit · ★★★★★"],
                  ["Avis demandé", "Chantier Dupuis terminé"],
                ].map(([what, detail], i) => (
                  <div key={what} className={`${a.item} ${a.appear}`} style={d(0.6 + i * 0.8)}>
                    <span>
                      <b>{what}</b> · {detail}
                    </span>
                    <span className={a.okDot}>✓</span>
                  </div>
                ))}
              </div>
            </div>
          </Scene>
        </Feature>
      </section>

      {/* Le principe */}
      <section className={`${s.section} ${s.dark}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>L&apos;assistant prépare, le menuisier décide.</h2>
          <p className={s.intro}>
            L&apos;assistant fait gagner du temps sur l&apos;écriture et l&apos;organisation, pas sur les décisions : rien ne part sans son
            accord.
          </p>
        </div>
        <ul className={s.principles}>
          {[
            { icon: Icons.eye, title: "Rien ne part sans relecture", text: "Les réponses arrivent en brouillon. Il relit, ajuste si besoin, puis envoie." },
            { icon: Icons.tools, title: "Ses outils restent les mêmes", text: "Sa boîte mail et son agenda Google ne changent pas : l'assistant s'y branche." },
            { icon: Icons.hand, title: "Il garde la main", text: "Il peut ajuster les réglages ou mettre l'assistant de côté à tout moment." },
          ].map((p) => (
            <li key={p.title} className={s.principle}>
              <span className={s.principleIcon} aria-hidden="true">
                {p.icon}
              </span>
              <h3 className={s.principleTitle}>{p.title}</h3>
              <p className={s.principleText}>{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Ce que nous avons mis en place */}
      <section className={s.section} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Ce que nous avons mis en place.</h2>
        </div>
        <Steps
          items={[
            { title: "Assistant IA", text: "Relié à sa boîte mail et à son agenda : résumés, réponses en brouillon, listes de tâches et planning." },
            { title: "Site internet", text: "Un site refait de A à Z, clair et soigné, qui montre son travail." },
            { title: "Fiche Google", text: "Mots-clés, activités, photos chaque semaine et avis clients, pour ressortir sur « menuisier Toulouse »." },
          ]}
        />
      </section>

      <ProjectCta title="Votre quotidien ressemble au sien ?" text="20 minutes pour voir ce qu'un assistant IA pourrait faire pour vous." />
    </>
  );
}
