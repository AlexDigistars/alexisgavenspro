// Étude de cas (client anonymisé) : un menuisier à Toulouse, qui travaille seul.
// Assistant IA (mails, devis, relances, organisation, chantiers techniques), site internet et fiche Google.
// Démonstrations à données fictives.
import type { CSSProperties } from "react";
import Scene from "@/components/Scene";
import DiagnosticLink from "@/components/DiagnosticLink";
import { Feature, Icons, Pains, ProjectCta, Steps } from "@/components/ProjectBlocks";
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

const BEFORE_INBOX = [
  "RE: RE: devis placard ?",
  "Demande de rendez-vous",
  "TR: photos escalier",
  "Facture escalier – relance",
  "Question délai porte",
  "RE: disponibilités ?",
];

const AFTER_INBOX = [
  { from: "Mme Roux", summary: "Devis placard sur mesure, chambre de 3 m", tag: "Réponse prête" },
  { from: "M. Garnier", summary: "Rendez-vous pour une porte d'entrée", tag: "Réponse prête" },
  { from: "SCI Horizon", summary: "Relance sur la facture de l'escalier", tag: "À traiter" },
];

/** Une journée type, avant et maintenant. */
const DAY = [
  {
    when: "Le matin",
    before: "Une boîte mail pleine, sans savoir par où commencer.",
    after: "La liste du jour est prête, rangée par priorité, avec son planning.",
  },
  {
    when: "Sur le chantier",
    before: "Le téléphone sonne, il a les mains prises. Un point technique : il cherche seul.",
    after: "Il dicte une note ou prend une photo : le devis se prépare, le mode d'emploi arrive.",
  },
  {
    when: "Le soir",
    before: "Les devis à taper ligne par ligne, les réponses à écrire une à une.",
    after: "Il relit les brouillons, ajuste et envoie. Le résumé de la journée lui dit ce qui reste.",
  },
  {
    when: "Les devis envoyés",
    before: "Sans relance, ils restent des semaines sans réponse.",
    after: "Une relance polie est préparée au bon moment.",
  },
  {
    when: "Sur internet",
    before: "Un site daté et une fiche Google peu remplie.",
    after: "Un site soigné et une fiche active : il ressort parmi les premiers sur « menuisier Toulouse ».",
  },
];

const QUOTE_LINES = [
  ["Caisson et étagères en chêne", "1 450 €"],
  ["Portes coulissantes (×2)", "980 €"],
  ["Penderie et accessoires", "260 €"],
  ["Pose", "420 €"],
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
            <span className={s.eyebrow}>Étude de cas : un menuisier à Toulouse</span>
            <h1 className={s.h1}>Ses soirées passaient dans les mails. Plus maintenant.</h1>
            <p className={s.lead}>
              Un menuisier toulousain qui travaille seul rédigeait ses devis et ses réponses le soir, après l&apos;atelier. Je
              l&apos;ai équipé d&apos;un assistant IA qui trie ses mails, prépare ses devis et ses réponses, et organise ses
              journées. Ensemble, nous avons aussi refait son site et sa fiche Google.
            </p>
            <div className={s.actions}>
              <DiagnosticLink className={s.primary}>Réserver 20 min</DiagnosticLink>
              <a className={s.anchor} href="#journee">
                Voir avant / maintenant ↓
              </a>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Scene className={a.splitScene} shift={7}>
              <div
                className={a.split}
                role="img"
                aria-label="Avant : à 21 h 30, une boîte mail pleine de messages non lus. Maintenant : à 18 h, chaque demande est résumée et une réponse est prête à relire."
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

      {/* Avant */}
      <section className={`${s.section} ${s.sand}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Le métier le jour, l&apos;administratif le soir.</h2>
          <p className={s.intro}>
            Seul dans son atelier et sur ses chantiers, il faisait tout lui-même. Les demandes arrivaient en continu, et tout ce qui
            n&apos;était pas de la menuiserie débordait sur ses soirées.
          </p>
        </div>
        <Pains
          items={[
            { icon: Icons.mail, title: "Des mails en continu", text: "Devis, rendez-vous, questions, relances : tout arrivait dans la même boîte, sans tri." },
            { icon: Icons.moon, title: "Des devis tapés le soir", text: "Après la journée à l'atelier, il restait les devis à rédiger, ligne par ligne." },
            { icon: Icons.eye, title: "Peu visible en ligne", text: "Son site et sa fiche Google ne montraient pas la qualité de son travail." },
          ]}
        />
      </section>

      {/* Une journée, avant / maintenant */}
      <section className={s.section} id="journee" data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Une journée, avant et maintenant.</h2>
          <p className={s.intro}>Le même métier, les mêmes clients. Ce qui a changé, c&apos;est tout ce qui se passe autour.</p>
        </div>
        <Scene className={a.compareScene} shift={6}>
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
                    <span className={a.srOnly}>Avant : </span>
                    {row.before}
                  </dd>
                  <dd className={`${a.after} ${a.appear}`} style={d(0.4 + i * 0.5)}>
                    <span className={a.srOnly}>Maintenant : </span>
                    {row.after}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Scene>
      </section>

      {/* Ce que fait l'assistant */}
      <section className={`${s.section} ${s.sectionTop}`} id="fonctionnement" data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Un assistant IA qui prépare, un artisan qui valide.</h2>
          <p className={s.intro}>
            Relié à sa boîte mail, à son agenda Google et à son logiciel de facturation, l&apos;assistant fait le travail
            d&apos;écriture et d&apos;organisation. Le menuisier relit, ajuste et décide.
          </p>
        </div>
        <div className={s.features}>
          <Feature
            label="Mails"
            title="Chaque demande résumée, chaque réponse préparée."
            items={[
              "Les demandes des clients sont résumées en quelques lignes.",
              "Une réponse est préparée en brouillon pour chacune.",
              "Il relit, ajuste et envoie : c'est ce qui lui a changé le quotidien.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={a.stack} role="img" aria-label="Démonstration : un long mail client, son résumé en trois points et une réponse prête à relire.">
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
            label="Devis"
            title="Des notes de visite au devis prêt à relire."
            items={[
              "Une note vocale ou quelques mots pris chez le client suffisent.",
              "L'assistant reprend ses tarifs et la présentation de ses devis habituels.",
              "Le devis arrive en brouillon : il n'a plus qu'à vérifier les cotes et les prix.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={a.noteFlow} role="img" aria-label="Démonstration : une note de visite pour un placard sur mesure devient un devis détaillé en brouillon.">
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
            label="Relances"
            title="Les devis non signés, relancés au bon moment."
            items={[
              "Chaque devis envoyé est suivi, jusqu'à la signature.",
              "Après quelques jours sans réponse, une relance polie est préparée.",
              "Il la relit, puis l'envoie en un clic.",
            ]}
          >
            <Scene className={s.panel} shift={6}>
              <div className={a.stack} role="img" aria-label="Démonstration : un devis sans réponse depuis 8 jours, et la relance préparée pour lui.">
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
                    consulter ? Je reste disponible pour en parler.
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
            label="Organisation"
            title="Sa journée et sa semaine, en une liste."
            items={[
              "Une liste de tâches chaque jour et chaque semaine, à partir de tout ce qui arrive dans sa boîte mail.",
              "Son agenda Google est relié : son planning se construit tout seul.",
              "En fin de journée, un résumé de ce qui reste à faire.",
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

      {/* Visibilité : site et fiche Google, avant / maintenant */}
      <section className={`${s.section} ${s.sand}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Un site soigné et une fiche Google qui travaille pour lui.</h2>
          <p className={s.intro}>
            Nous avons refait son site internet de A à Z, puis travaillé sa fiche Google semaine après semaine. Aujourd&apos;hui,
            il ressort parmi les premiers résultats sur « menuisier Toulouse ».
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
            <div className={a.stack} role="img" aria-label="Démonstration : avant, une fiche peu remplie ; maintenant, une recherche « menuisier Toulouse » où sa menuiserie ressort en tête, avec l'activité de sa fiche.">
              <div className={a.ficheBefore} aria-hidden="true">
                <span className={a.tagBefore}>Avant</span>
                <span className={a.ficheLine}>
                  <b>Sa menuiserie</b> · peu de photos, des avis sans réponse
                </span>
              </div>
              <div className={a.card} aria-hidden="true">
                <span className={a.tagAfterLight}>Maintenant</span>
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
                  <span className={a.okDot}>✓</span>
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
            { icon: Icons.eye, title: "Rien ne part sans relecture", text: "Réponses, devis et relances arrivent en brouillon. Il relit, ajuste si besoin, puis envoie." },
            { icon: Icons.tools, title: "Ses outils restent les mêmes", text: "Sa boîte mail, son agenda Google et son logiciel de facturation ne changent pas : l'assistant s'y branche." },
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
            { title: "Assistant IA", text: "Relié à sa boîte mail, son agenda et sa facturation, et réglé sur ses tarifs et sa façon d'écrire." },
            { title: "Site internet", text: "Un site refait de A à Z, clair et soigné, qui montre son travail." },
            { title: "Fiche Google", text: "Mots-clés, activités, photos chaque semaine et avis clients, pour ressortir sur « menuisier Toulouse »." },
          ]}
        />
      </section>

      <ProjectCta title="Votre quotidien ressemble à son « avant » ?" text="20 minutes pour voir ce qu'un assistant IA pourrait changer dans le vôtre." />
    </>
  );
}
