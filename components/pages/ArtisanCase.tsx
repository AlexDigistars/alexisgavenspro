// Étude de cas (client anonymisé) : un menuisier à Toulouse, qui travaille seul.
// Récit en 5 temps : avant, ce qui a changé, comment, se faire trouver, le résultat.
// Assistant IA (mails, devis, relances, organisation, chantiers techniques), site internet et fiche Google.
// Démonstrations à données fictives.
import type { CSSProperties } from "react";
import Scene from "@/components/Scene";
import DiagnosticLink from "@/components/DiagnosticLink";
import { Feature, ProjectCta, Steps } from "@/components/ProjectBlocks";
import s from "./ProjectCase.module.css";
import a from "./ArtisanCase.module.css";

/** Délai d'apparition d'un élément dans le cycle de la démonstration. */
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

const Mic = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0M12 17v5" />
  </svg>
);

const Cross = () => (
  <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const Tick = () => (
  <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const BEFORE_INBOX = [
  "RE: RE: devis placard ?",
  "Demande de rendez-vous",
  "TR: photos escalier",
  "Facture escalier – relance",
  "Question délai porte",
  "RE: disponibilités ?",
];

const AFTER_INBOX = [
  { from: "Mme Roux", summary: "Devis placard sur mesure, chambre de 3 m", tag: "Réponse prête" },
  { from: "M. Garnier", summary: "Rendez-vous pour une porte d'entrée", tag: "Réponse prête" },
  { from: "SCI Horizon", summary: "Relance sur la facture de l'escalier", tag: "À traiter" },
];

/** Sa soirée type, avant : tout ce qui n'est pas de la menuiserie. */
const EVENING = [
  { time: "19 h 00", task: "Trier les mails de la journée", tag: "37 non lus" },
  { time: "20 h 00", task: "Taper deux devis, ligne par ligne", tag: "1 h 30" },
  { time: "21 h 30", task: "Rappeler les clients manqués sur le chantier", tag: "5 appels" },
  { time: "22 h 15", task: "Relancer les devis restés sans réponse", tag: "Oubliés" },
  { time: "23 h 00", task: "Préparer le planning de demain", tag: "Fatigué" },
];

/** Une journée, avant et maintenant. */
const DAY = [
  {
    when: "Le matin",
    before: "Une boîte mail pleine, sans savoir par où commencer.",
    after: "La liste du jour est prête, rangée par priorité, avec son planning.",
  },
  {
    when: "Sur le chantier",
    before: "Le téléphone sonne, il a les mains prises. Un point technique : il cherche seul.",
    after: "Il dicte une note ou prend une photo : le devis se prépare, le mode d'emploi arrive.",
  },
  {
    when: "Le soir",
    before: "Les devis à taper ligne par ligne, les réponses à écrire une à une.",
    after: "Il relit les brouillons, ajuste et envoie. Le reste de la soirée est à lui.",
  },
  {
    when: "Les devis envoyés",
    before: "Sans relance, ils restent des semaines sans réponse.",
    after: "Une relance polie est préparée au bon moment.",
  },
  {
    when: "Sur internet",
    before: "Un site daté et une fiche Google peu remplie.",
    after: "Un site soigné et une fiche Google vivante, mise à jour chaque semaine.",
  },
];

const QUOTE_LINES = [
  ["Caisson et étagères en chêne", "1 450 €"],
  ["Portes coulissantes (×2)", "980 €"],
  ["Penderie et accessoires", "260 €"],
  ["Pose", "420 €"],
];

const TODO = [
  { label: "Rappeler M. Garnier : rendez-vous porte d'entrée", done: true },
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

const GAINS = [
  { title: "Ses soirées lui reviennent", text: "Les mails, les devis et les relances ne débordent plus sur ses soirées." },
  { title: "Plus de temps à l'atelier", text: "Le temps gagné sur l'administratif part dans son métier : de quoi prendre plus de chantiers." },
  { title: "Des clients mieux suivis", text: "Chaque demande reçoit une réponse rapide, chaque devis est relancé au bon moment." },
  { title: "L'esprit libre", text: "Rien ne s'oublie : la liste du jour et le planning sont prêts chaque matin." },
];

const Arrow = () => (
  <svg className={a.flowArrow} aria-hidden="true" focusable="false" width="24" height="40" viewBox="0 0 24 40" fill="none">
    <path className={a.flow} d="M12 2v30" stroke="#1D5C57" strokeWidth="2" />
    <path d="M5 28l7 8 7-8" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ArtisanCase() {
  return (
    <>
      {/* Haut de page : avant / maintenant */}
      <section className={s.hero} data-reveal>
        <div className={s.heroInner}>
          <div className={s.heroText}>
            <span className={s.eyebrow}>Étude de cas : un menuisier à Toulouse</span>
            <h1 className={s.h1}>Avant, ses soirées appartenaient à ses mails. Maintenant, elles sont à lui.</h1>
            <p className={s.lead}>
              Un menuisier toulousain qui travaille seul passait ses soirées à trier ses mails, taper ses devis et relancer ses
              clients. Aujourd&apos;hui, un assistant IA fait ce travail à sa place, et il consacre son temps à ce qu&apos;il fait le
              mieux : la menuiserie.
            </p>
            <div className={s.actions}>
              <DiagnosticLink className={s.primary}>Réserver 20 min</DiagnosticLink>
              <a className={s.anchor} href="#avant">
                Lire son histoire ↓
              </a>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Scene className={a.splitScene} shift={7}>
              <div
                className={a.split}
                role="img"
                aria-label="Avant : à 21 h 30, une boîte mail pleine de messages non lus. Maintenant : à 18 h, chaque demande est résumée et une réponse est prête à relire."
              >
                <div className={a.splitCol} aria-hidden="true">
                  <span className={a.tagBefore}>Avant · 21 h 30</span>
                  <div className={a.oldInbox}>
                    <div className={a.oldHead}>
                      <b>Boîte de réception</b>
                      <span className={a.unread}>37 non lus</span>
                    </div>
                    {BEFORE_INBOX.map((subject) => (
                      <div key={subject} className={a.oldRow}>
                        <span className={a.oldDot}></span>
                        <span>{subject}</span>
                      </div>
                    ))}
                    <span className={a.oldFoot}>… et les devis à taper</span>
                  </div>
                </div>
                <div className={a.splitCol} aria-hidden="true">
                  <span className={a.tagAfter}>Maintenant · 18 h 00</span>
                  <div className={a.newInbox}>
                    <div className={a.quoteHead}>
                      <b>Demandes du jour</b>
                      <span className={a.time}>résumées</span>
                    </div>
                    {AFTER_INBOX.map((mail, i) => (
                      <div key={mail.from} className={`${a.mailCard} ${a.appear}`} style={d(0.4 + i * 0.9)}>
                        <div className={a.quoteHead}>
                          <b>{mail.from}</b>
                          <span className={mail.tag === "Réponse prête" ? a.chip : a.draft}>{mail.tag}</span>
                        </div>
                        <span className={a.summaryLine}>{mail.summary}</span>
                      </div>
                    ))}
                    <span className={`${a.readyBtn} ${a.appear}`} style={d(3.2)}>
                      2 réponses prêtes à relire
                    </span>
                  </div>
                </div>
              </div>
              <span className={a.heroFictive}>Démonstration · données fictives</span>
            </Scene>
          </div>
        </div>
      </section>

      {/* 1 · Avant */}
      <section className={`${s.section} ${a.painSection}`} id="avant" data-reveal>
        <div className={a.painGrid}>
          <div className={s.sectionHead}>
            <span className={a.chapterBefore}>1 · Avant</span>
            <h2 className={s.h2}>Menuisier le jour, secrétaire le soir.</h2>
            <p className={s.intro}>
              Seul dans son atelier et sur ses chantiers, il faisait tout lui-même. Chaque journée de menuiserie se prolongeait par
              une deuxième journée : celle des mails, des devis, des relances et du planning. Le travail qu&apos;il aime le moins lui
              prenait ses soirées.
            </p>
            <ul className={a.painList}>
              {["Des mails en continu, jamais triés", "Des devis tapés le soir, ligne par ligne", "Des clients rappelés trop tard", "Des devis oubliés, faute de relance"].map((p) => (
                <li key={p}>
                  <span className={a.crossIcon}>
                    <Cross />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <Scene className={a.eveningScene} shift={7}>
            <div className={a.evening} role="img" aria-label="Illustration : sa soirée type avant, de 19 h à minuit, remplie de mails, de devis, d'appels, de relances et de planning.">
              <div className={a.eveningHead} aria-hidden="true">
                <span className={a.clock}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <b>Sa soirée type, avant</b>
              </div>
              {EVENING.map((row, i) => (
                <div key={row.time} className={`${a.eveningRow} ${a.appear}`} style={d(0.3 + i * 0.6)} aria-hidden="true">
                  <span className={a.eveningTime}>{row.time}</span>
                  <span className={a.eveningTask}>{row.task}</span>
                  <span className={a.eveningTag}>{row.tag}</span>
                </div>
              ))}
              <div className={`${a.eveningEnd} ${a.appear}`} style={d(3.5)} aria-hidden="true">
                <span>00 h 15</span>
                <b>Enfin couché. Demain, rebelote.</b>
              </div>
            </div>
          </Scene>
        </div>
      </section>

      {/* 2 · Ce qui a changé */}
      <section className={s.section} id="journee" data-reveal>
        <div className={s.sectionHead}>
          <span className={a.chapterAfter}>2 · Ce qui a changé</span>
          <h2 className={s.h2}>Le même métier, mais plus la même journée.</h2>
          <p className={s.intro}>
            Les mêmes clients, les mêmes chantiers. Ce qui a changé, c&apos;est tout ce qui se passe autour : l&apos;assistant
            prend en charge ce qui lui pesait, et le temps gagné repart dans la menuiserie.
          </p>
        </div>
        <Scene className={a.compareScene} shift={6}>
          <div className={a.timeBars} role="img" aria-label="Illustration : avant, l'administratif occupait une grande part de ses journées ; maintenant, il n'en occupe plus qu'une petite part, et la menuiserie reprend le reste.">
            <div className={a.timeBar} aria-hidden="true">
              <span className={a.timeLabel}>Avant</span>
              <span className={a.track}>
                <span className={a.segWork} style={{ width: "52%" }}>
                  Menuiserie
                </span>
                <span className={a.segAdmin} style={{ width: "48%" }}>
                  Mails, devis, relances
                </span>
              </span>
            </div>
            <div className={a.timeBar} aria-hidden="true">
              <span className={a.timeLabel}>Maintenant</span>
              <span className={a.track}>
                <span className={`${a.segWork} ${a.segGrow}`} style={{ width: "86%" }}>
                  Menuiserie
                </span>
                <span className={a.segAdminSmall} style={{ width: "14%" }}>
                  Relire
                </span>
              </span>
            </div>
            <span className={a.timeNote} aria-hidden="true">
              Illustration : le temps gagné sur l&apos;administratif repart dans le métier.
            </span>
          </div>
          <div className={a.compare}>
            <div className={a.compareHead} aria-hidden="true">
              <span></span>
              <span className={a.tagBefore}>Avant</span>
              <span className={a.tagAfterLight}>Maintenant</span>
            </div>
            <dl className={a.compareList}>
              {DAY.map((row, i) => (
                <div key={row.when} className={a.compareRow}>
                  <dt className={a.when}>{row.when}</dt>
                  <dd className={a.before}>
                    <span className={a.markBad}>
                      <Cross />
                    </span>
                    <span>
                      <span className={a.srOnly}>Avant : </span>
                      {row.before}
                    </span>
                  </dd>
                  <dd className={`${a.after} ${a.appear}`} style={d(0.4 + i * 0.5)}>
                    <span className={a.markGood}>
                      <Tick />
                    </span>
                    <span>
                      <span className={a.srOnly}>Maintenant : </span>
                      {row.after}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Scene>
      </section>

      {/* 3 · Comment : ce que fait l'assistant à sa place */}
      <section className={`${s.section} ${s.sectionTop}`} id="fonctionnement" data-reveal>
        <div className={s.sectionHead}>
          <span className={a.chapterAfter}>3 · Comment</span>
          <h2 className={s.h2}>Tout ce qu&apos;il n&apos;aimait pas faire, l&apos;assistant le prépare.</h2>
          <p className={s.intro}>
            Relié à sa boîte mail, à son agenda Google et à son logiciel de facturation, l&apos;assistant écrit, trie et organise.
            Le menuisier relit, ajuste et valide : rien ne part sans son accord.
          </p>
        </div>
        <div className={s.features}>
          <Feature
            label="Fini les soirées dans la boîte mail"
            title="Chaque demande résumée, chaque réponse préparée."
            items={[
              "Les demandes des clients sont résumées en quelques lignes.",
              "Une réponse est préparée en brouillon pour chacune.",
              "Il relit, ajuste et envoie : c'est ce qui lui a changé le quotidien.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={a.stack} role="img" aria-label="Démonstration : un long mail client, son résumé en trois points et une réponse prête à relire.">
                <div className={a.card} aria-hidden="true">
                  <span className={a.cardTitle}>Mail de M. Garnier</span>
                  <p className={a.message}>
                    « Bonjour, nous avons acheté une maison à Balma et la porte d&apos;entrée ferme mal. Nous aimerions la remplacer
                    par une porte en bois, si possible avant l&apos;hiver. Seriez-vous disponible pour passer la voir ? … »
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
            label="Fini les devis tapés ligne par ligne"
            title="Des notes de visite au devis prêt à relire."
            items={[
              "Une note vocale ou quelques mots pris chez le client suffisent.",
              "L'assistant reprend ses tarifs et la présentation de ses devis habituels.",
              "Le devis arrive en brouillon : il n'a plus qu'à vérifier les cotes et les prix.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={a.noteFlow} role="img" aria-label="Démonstration : une note de visite pour un placard sur mesure devient un devis détaillé en brouillon.">
                <div className={a.paper} aria-hidden="true">
                  <span className={a.paperTitle}>
                    <Mic /> Note vocale · visite Mme Roux
                  </span>
                  <span>Placard chambre, 3 m, chêne</span>
                  <span>2 portes coulissantes</span>
                  <span>Penderie + étagères, pose comprise</span>
                </div>
                <Arrow />
                <div className={a.card} aria-hidden="true">
                  <div className={a.quoteHead}>
                    <b>Devis n° 2026-047 · Mme Roux</b>
                    <span className={a.draft}>Brouillon</span>
                  </div>
                  {QUOTE_LINES.map(([label, price], i) => (
                    <div key={label} className={`${a.quoteRow} ${a.appear}`} style={d(0.6 + i * 0.5)}>
                      <span>{label}</span>
                      <b>{price}</b>
                    </div>
                  ))}
                  <div className={`${a.quoteTotal} ${a.appear}`} style={d(2.8)}>
                    <span>Total HT</span>
                    <b>3 110 €</b>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            label="Fini les devis oubliés"
            title="Les devis non signés, relancés au bon moment."
            items={[
              "Chaque devis envoyé est suivi, jusqu'à la signature.",
              "Après quelques jours sans réponse, une relance polie est préparée.",
              "Il la relit, puis l'envoie en un clic.",
            ]}
          >
            <Scene className={s.panel} shift={6}>
              <div className={a.stack} role="img" aria-label="Démonstration : un devis sans réponse depuis 8 jours, et la relance préparée pour lui.">
                <div className={a.card} aria-hidden="true">
                  <span className={a.cardTitle}>Devis envoyés</span>
                  <div className={a.statusRow}>
                    <span>
                      <b>Porte d&apos;entrée</b> · M. Garnier
                    </span>
                    <span className={a.ok}>Signé</span>
                  </div>
                  <div className={`${a.statusRow} ${a.statusWarn}`}>
                    <span>
                      <b>Escalier</b> · Mme Petit
                    </span>
                    <span className={a.warn}>Sans réponse · 8 j</span>
                  </div>
                  <div className={a.statusRow}>
                    <span>
                      <b>Dressing</b> · SCI Horizon
                    </span>
                    <span className={a.muted}>Envoyé hier</span>
                  </div>
                </div>
                <div className={`${a.card} ${a.draftCard} ${a.appear}`} style={d(1.2)} aria-hidden="true">
                  <div className={a.quoteHead}>
                    <b>Relance · Mme Petit</b>
                    <span className={a.draft}>Brouillon</span>
                  </div>
                  <p className={a.message}>
                    Bonjour Madame Petit, je reviens vers vous au sujet du devis pour votre escalier en chêne. Avez-vous pu le
                    consulter ? Je reste disponible pour en parler.
                  </p>
                  <div className={a.quoteActions}>
                    <span className={a.ghostBtn}>Modifier</span>
                    <span className={a.sendBtn}>Envoyer</span>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            reverse
            label="Fini de se demander par quoi commencer"
            title="Sa journée et sa semaine, en une liste."
            items={[
              "Une liste de tâches chaque jour et chaque semaine, à partir de tout ce qui arrive dans sa boîte mail.",
              "Son agenda Google est relié : son planning se construit tout seul.",
              "En fin de journée, un résumé de ce qui reste à faire.",
            ]}
          >
            <Scene className={s.panel} shift={6}>
              <div className={a.summary} role="img" aria-label="Démonstration : la liste des tâches du jour, cochées au fil de la journée, et le planning de la semaine.">
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
            label="Fini de chercher seul sur le chantier"
            title="Une photo, et un mode d'emploi pas à pas."
            items={[
              "Sur un chantier délicat, il prend une photo et décrit le problème.",
              "L'assistant lui répond avec les étapes, dans l'ordre.",
              "Il garde son savoir-faire : l'assistant l'aide à ne rien oublier.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={a.stack} role="img" aria-label="Démonstration : la photo d'une porte qui frotte, puis un mode d'emploi en quatre étapes.">
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

      {/* 4 · Se faire trouver */}
      <section className={`${s.section} ${s.sand}`} data-reveal>
        <div className={s.sectionHead}>
          <span className={a.chapterAfter}>4 · Se faire trouver</span>
          <h2 className={s.h2}>Avant, un site qui dormait. Maintenant, une vitrine qui travaille pour lui.</h2>
          <p className={s.intro}>
            Nous avons refait son site internet de A à Z, puis mis sa fiche Google en mouvement, semaine après semaine. Les clients
            qui cherchent un menuisier à Toulouse voient enfin son travail.
          </p>
        </div>
        <Feature
          label="Fini la fiche Google oubliée"
          title="Une fiche Google active, semaine après semaine."
          items={[
            "Les bons mots-clés et les bonnes activités renseignés.",
            "Des photos de chantier publiées au moins deux fois par semaine.",
            "Un avis demandé après chaque chantier, et une réponse à chaque avis.",
          ]}
        >
          <Scene className={`${s.panel} ${a.whitePanel}`} shift={7}>
            <div className={a.stack} role="img" aria-label="Démonstration : avant, une fiche peu remplie ; maintenant, une fiche avec des photos récentes, des avis et des réponses.">
              <div className={a.ficheBefore} aria-hidden="true">
                <span className={a.tagBefore}>Avant</span>
                <span className={a.ficheLine}>
                  <b>Sa menuiserie</b> · peu de photos, des avis sans réponse
                </span>
              </div>
              <div className={a.card} aria-hidden="true">
                <span className={a.tagAfterLight}>Maintenant</span>
                <div className={`${a.result} ${a.resultOn}`}>
                  <span>
                    <b>Sa menuiserie</b>
                    <small>Menuisier · Toulouse · Ouvert</small>
                  </span>
                  <span className={a.okDot}>✓</span>
                </div>
                <div className={a.thumbs}>
                  <span className={a.thumb1}></span>
                  <span className={a.thumb2}></span>
                  <span className={a.thumb3}></span>
                </div>
                {[
                  ["Photo publiée", "Escalier en chêne · lundi"],
                  ["Réponse à un avis", "Mme Petit"],
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

      {/* 5 · Le résultat */}
      <section className={`${s.section} ${s.dark}`} data-reveal>
        <div className={s.sectionHead}>
          <span className={a.chapterDark}>5 · Le résultat</span>
          <h2 className={s.h2}>Moins de paperasse, plus de menuiserie.</h2>
          <p className={s.intro}>
            L&apos;assistant prépare, le menuisier décide : rien ne part sans son accord. Et tout le temps qu&apos;il ne passe plus
            sur l&apos;administratif, il le consacre à son métier.
          </p>
        </div>
        <ul className={a.gains}>
          {GAINS.map((g) => (
            <li key={g.title} className={a.gain}>
              <span className={a.gainIcon} aria-hidden="true">
                <Tick />
              </span>
              <h3 className={a.gainTitle}>{g.title}</h3>
              <p className={a.gainText}>{g.text}</p>
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
            { title: "Assistant IA", text: "Relié à sa boîte mail, son agenda et sa facturation, et réglé sur ses tarifs et sa façon d'écrire." },
            { title: "Site internet", text: "Un site refait de A à Z, clair et soigné, qui montre son travail." },
            { title: "Fiche Google", text: "Mots-clés, activités, photos chaque semaine et avis clients, pour que les clients le trouvent." },
          ]}
        />
      </section>

      <ProjectCta title="Et si vos soirées redevenaient les vôtres ?" text="20 minutes pour repérer ce qui vous prend du temps, et ce qu'un assistant IA pourrait faire à votre place." />
    </>
  );
}
