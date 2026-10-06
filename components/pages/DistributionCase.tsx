// Étude de cas (client anonymisé) : une PME de distribution, commandes, stock et factures reliés.
// Démonstrations à données fictives.
import type { CSSProperties, ReactNode } from "react";
import Scene from "@/components/Scene";
import DiagnosticLink from "@/components/DiagnosticLink";
import { Feature, Icons, Pains, ProjectCta, Steps } from "@/components/ProjectBlocks";
import s from "./ProjectCase.module.css";
import b from "./DistributionCase.module.css";

/** Délai d'apparition d'un élément dans le cycle de la démonstration. */
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const Arrow = () => (
  <svg className={b.arrow} aria-hidden="true" focusable="false" width="24" height="36" viewBox="0 0 24 36" fill="none">
    <path className={b.flow} d="M12 2v26" stroke="#1D5C57" strokeWidth="2" />
    <path d="M5 24l7 8 7-8" stroke="#1D5C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NODES: { label: string; pos: string; icon: ReactNode }[] = [
  {
    label: "Transporteur",
    pos: b.nodeTl,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 6h13v10H1zM14 10h4l3 3v3h-7z" />
        <circle cx="5.5" cy="18" r="1.8" />
        <circle cx="17.5" cy="18" r="1.8" />
      </svg>
    ),
  },
  {
    label: "Banque",
    pos: b.nodeTr,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" />
      </svg>
    ),
  },
  {
    label: "Logiciel comptable",
    pos: b.nodeBl,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2h9l5 5v15H6z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
  },
  {
    label: "Messagerie",
    pos: b.nodeBr,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

export default function DistributionCase() {
  return (
    <>
      {/* Haut de page */}
      <section className={s.hero} data-reveal>
        <div className={s.heroInner}>
          <div className={s.heroText}>
            <span className={s.eyebrow}>Étude de cas : une PME de distribution à Paris</span>
            <h1 className={s.h1}>Commandes, stock et factures, enfin reliés.</h1>
            <p className={s.lead}>
              Une PME de distribution parisienne de 20 personnes recevait ses commandes par e-mail, suivait son stock sur Excel et refaisait
              ses factures dans la compta. J&apos;ai construit avec elle un logiciel de gestion qui relie commandes, stock,
              entrepôt et factures.
            </p>
            <div className={s.actions}>
              <DiagnosticLink className={s.primary}>Réserver 20 min</DiagnosticLink>
              <a className={s.anchor} href="#fonctionnement">
                Voir comment ça marche ↓
              </a>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Scene className={b.heroScene} shift={8}>
              <div
                className={b.window}
                role="img"
                aria-label="Démonstration : une commande reçue par e-mail est enregistrée dans le logiciel, puis sa facture part vers le logiciel comptable."
              >
                <div className={b.bar} aria-hidden="true">
                  <span className={b.dots}>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                  <span className={b.barTitle}>Gestion — Commandes</span>
                  <span className={b.barFictive}>Démonstration · données fictives</span>
                </div>
                <div className={b.body} aria-hidden="true">
                  <div className={b.side}>
                    <span>Tableau de bord</span>
                    <span className={b.sideOn}>Commandes</span>
                    <span>Stock</span>
                    <span>Clients</span>
                    <span>Factures</span>
                    <span>Fournisseurs</span>
                  </div>
                  <div className={b.main}>
                    <div className={b.mainHead}>
                      <b>Commandes</b>
                      <span className={b.meta}>Aujourd&apos;hui</span>
                    </div>
                    <div className={`${b.mail} ${b.appear}`} style={d(0.4)}>
                      <span className={b.mailIcon}>
                        <MailIcon />
                      </span>
                      <span className={b.mailText}>
                        <b>Nouvel e-mail · Quincaillerie Morel</b>
                        <span>« 40 cartons 40×30 et 6 rouleaux de film étirable »</span>
                      </span>
                    </div>
                    <div className={`${b.order} ${b.orderNew} ${b.appear}`} style={d(1.6)}>
                      <span>
                        <b>CMD-1042</b> · Quincaillerie Morel
                      </span>
                      <span className={b.todo}>À préparer</span>
                    </div>
                    <div className={b.order}>
                      <span>
                        <b>CMD-1041</b> · Atelier Vidal
                      </span>
                      <span className={b.sent}>Expédiée</span>
                    </div>
                    <div className={b.order}>
                      <span>
                        <b>CMD-1040</b> · Maison Lenoir
                      </span>
                      <span className={b.done}>Facturée</span>
                    </div>
                    <div className={`${b.toast} ${b.appear}`} style={d(3)}>
                      <span className={b.toastIcon}>✓</span>
                      Facture F-2026-318 envoyée au logiciel comptable
                    </div>
                  </div>
                </div>
              </div>
            </Scene>
          </div>
        </div>
      </section>

      {/* La situation */}
      <section className={`${s.section} ${s.sand}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Trois outils qui ne se parlaient pas.</h2>
          <p className={s.intro}>
            Les commandes arrivaient par e-mail, le stock vivait dans un fichier Excel et les factures étaient refaites à la main
            dans la compta. La même information était saisie plusieurs fois.
          </p>
        </div>
        <Pains
          items={[
            { icon: Icons.mail, title: "Des commandes dans la boîte mail", text: "Il fallait les relire, les recopier et vérifier qu'aucune n'avait été oubliée." },
            { icon: Icons.sheet, title: "Un stock sur Excel", text: "Le fichier n'était jamais tout à fait à jour, et les ruptures se découvraient trop tard." },
            { icon: Icons.copy, title: "Des factures refaites", text: "Les mêmes lignes étaient retapées dans le logiciel comptable, avec le risque d'erreur." },
          ]}
        />
      </section>

      {/* Ce que fait le logiciel */}
      <section className={s.section} id="fonctionnement" data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Un seul logiciel, de la commande à la facture.</h2>
          <p className={s.intro}>Chaque information est saisie une seule fois, puis elle suit son chemin toute seule.</p>
        </div>
        <div className={s.features}>
          <Feature
            label="Commandes"
            title="Les commandes reçues par e‑mail, rangées toutes seules."
            items={[
              "Les e-mails de commande deviennent des commandes dans le logiciel.",
              "Chacune a un statut clair : à préparer, expédiée, facturée.",
              "Rien ne se perd entre la boîte mail et l'entrepôt.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={b.column} role="img" aria-label="Démonstration : un e-mail de commande devient une commande avec ses lignes et son statut.">
                <div className={b.card} aria-hidden="true">
                  <span className={b.from}>
                    <MailIcon /> Atelier Vidal
                  </span>
                  <p className={b.quoteText}>« Bonjour, merci de nous livrer 120 cartons 40×30 et 20 boîtes de gants nitrile taille M. »</p>
                </div>
                <Arrow />
                <div className={`${b.card} ${b.appear}`} style={d(0.8)} aria-hidden="true">
                  <div className={b.cardHead}>
                    <b>CMD-1041 · Atelier Vidal</b>
                    <span className={b.meta}>Lun. 6 oct.</span>
                  </div>
                  <div className={b.line}>
                    <span>Cartons 40×30</span>
                    <b>× 120</b>
                  </div>
                  <div className={b.line}>
                    <span>Gants nitrile M (boîtes)</span>
                    <b>× 20</b>
                  </div>
                  <div className={b.track}>
                    <span className={`${b.step} ${b.step1}`}>À préparer</span>
                    <span className={`${b.step} ${b.step2}`}>Expédiée</span>
                    <span className={`${b.step} ${b.step3}`}>Facturée</span>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            reverse
            label="Stock"
            title="Une alerte avant la rupture, pas après."
            items={[
              "Le stock se met à jour à chaque commande et à chaque réception.",
              "Un seuil par article déclenche une alerte.",
              "La commande fournisseur est préparée : il ne reste qu'à la valider.",
            ]}
          >
            <Scene className={s.panel} shift={6}>
              <div className={b.column} role="img" aria-label="Démonstration : le ruban adhésif passe sous son seuil, une commande fournisseur est préparée.">
                <div className={b.card} aria-hidden="true">
                  <div className={b.cardHead}>
                    <b>Stock</b>
                    <span className={b.meta}>En temps réel</span>
                  </div>
                  {[
                    { name: "Cartons 40×30", qty: "1 240", width: "78%", warn: false },
                    { name: "Film étirable", qty: "310", width: "52%", warn: false },
                    { name: "Ruban adhésif 50 mm", qty: "86 / seuil 100", width: "14%", warn: true },
                  ].map((item) => (
                    <div key={item.name} className={item.warn ? `${b.stockRow} ${b.stockWarn}` : b.stockRow}>
                      <span className={b.stockName}>
                        {item.name}
                        {item.warn && <span className={b.alert}>Alerte</span>}
                      </span>
                      <span className={b.gauge}>
                        <i style={{ width: item.width }}></i>
                      </span>
                      <b className={b.qty}>{item.qty}</b>
                    </div>
                  ))}
                </div>
                <div className={`${b.card} ${b.offset} ${b.appear}`} style={d(1.2)} aria-hidden="true">
                  <div className={b.cardHead}>
                    <b>Commande fournisseur préparée</b>
                    <span className={b.draft}>À valider</span>
                  </div>
                  <div className={b.line}>
                    <span>Ruban adhésif 50 mm</span>
                    <b>× 600</b>
                  </div>
                  <div className={b.actionsRow}>
                    <span className={b.ghostBtn}>Modifier</span>
                    <span className={b.mainBtn}>Valider</span>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            label="Factures"
            title="Les factures créées, puis envoyées au logiciel comptable."
            items={[
              "Une commande expédiée devient une facture, sans ressaisie.",
              "La facture part dans le logiciel comptable.",
              "La comptabilité retrouve chaque facture, rattachée à sa commande.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={b.column} role="img" aria-label="Démonstration : la commande expédiée devient une facture, envoyée au logiciel comptable.">
                <div className={b.card} aria-hidden="true">
                  <div className={b.cardHead}>
                    <b>CMD-1041 · Atelier Vidal</b>
                    <span className={b.sent}>Expédiée</span>
                  </div>
                </div>
                <Arrow />
                <div className={`${b.card} ${b.appear}`} style={d(0.6)} aria-hidden="true">
                  <div className={b.cardHead}>
                    <b>Facture F-2026-317</b>
                    <span className={b.meta}>Atelier Vidal</span>
                  </div>
                  <div className={b.line}>
                    <span>Cartons 40×30 · 120 × 0,82 €</span>
                    <b>98,40 €</b>
                  </div>
                  <div className={b.line}>
                    <span>Gants nitrile M · 20 × 7,80 €</span>
                    <b>156,00 €</b>
                  </div>
                  <div className={b.total}>
                    <span>Total HT</span>
                    <b>254,40 €</b>
                  </div>
                  <span className={`${b.sentToAccounting} ${b.appear}`} style={d(1.8)}>
                    ✓ Envoyée au logiciel comptable
                  </span>
                </div>
              </div>
            </Scene>
          </Feature>

          <Feature
            reverse
            label="Connexions"
            title="Relié au transporteur et à la banque."
            items={[
              "Les étiquettes et le suivi des colis viennent du transporteur.",
              "Les paiements reçus sont rapprochés des factures.",
              "Chaque connexion passe par les accès officiels des outils.",
            ]}
          >
            <Scene className={s.panel}>
              <div className={b.hub} role="img" aria-label="Schéma : le logiciel de gestion relié au transporteur, à la banque, au logiciel comptable et à la messagerie.">
                <svg className={b.hubLines} aria-hidden="true" focusable="false" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path className={b.flow} d="M22 18L50 50M78 18L50 50M22 82L50 50M78 82L50 50" stroke="#1D5C57" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none" />
                </svg>
                <div className={b.hubCore} aria-hidden="true">
                  <span className={b.coreDot}></span>
                  <b>Logiciel de gestion</b>
                </div>
                {NODES.map((n) => (
                  <span key={n.label} className={`${b.node} ${n.pos}`} aria-hidden="true">
                    {n.icon}
                    {n.label}
                  </span>
                ))}
              </div>
            </Scene>
          </Feature>

          <Feature
            label="Assistant IA"
            title="Les demandes de prix préparées par un assistant IA."
            items={[
              "Il lit la demande du client et retrouve les bons tarifs.",
              "Il prépare une réponse avec le prix et le délai.",
              "Un commercial la relit avant l'envoi.",
            ]}
          >
            <Scene className={s.panel} shift={7}>
              <div className={b.column} role="img" aria-label="Démonstration : une demande de prix reçue par e-mail, et la réponse préparée par l'assistant, à valider.">
                <div className={b.card} aria-hidden="true">
                  <span className={b.from}>
                    <MailIcon /> Garage Ferrand
                  </span>
                  <p className={b.quoteText}>« Bonjour, pouvez-vous me faire un prix pour 200 cartons 40×30, livrés jeudi ? »</p>
                </div>
                <div className={`${b.card} ${b.offset} ${b.reply} ${b.appear}`} style={d(1)} aria-hidden="true">
                  <div className={b.cardHead}>
                    <b>Réponse préparée</b>
                    <span className={b.draft}>À valider</span>
                  </div>
                  <p className={b.quoteText}>
                    Bonjour, pour 200 cartons 40×30 : 0,82 € HT l&apos;unité, soit 164,00 € HT. Livraison jeudi possible si la
                    commande est confirmée avant mercredi midi.
                  </p>
                  <div className={b.actionsRow}>
                    <span className={b.ghostBtn}>Modifier</span>
                    <span className={b.mainBtn}>Envoyer</span>
                  </div>
                </div>
              </div>
            </Scene>
          </Feature>
        </div>
      </section>

      {/* Les principes */}
      <section className={`${s.section} ${s.dark}`} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Un logiciel construit autour de l&apos;équipe.</h2>
          <p className={s.intro}>Pas un logiciel générique à apprendre : un outil qui suit la façon de travailler de l&apos;entreprise.</p>
        </div>
        <ul className={s.principles}>
          {[
            { icon: Icons.copy, title: "Une seule saisie", text: "Chaque information est saisie une fois, puis elle suit son chemin : commande, stock, facture." },
            { icon: Icons.eye, title: "Des écrans validés avant d'exister", text: "Chaque écran est dessiné et discuté avec l'équipe avant d'être développé." },
            { icon: Icons.hand, title: "Des connexions officielles", text: "Le logiciel passe par les accès prévus par chaque outil : transporteur, banque, comptabilité." },
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

      {/* Le déroulé */}
      <section className={s.section} data-reveal>
        <div className={s.sectionHead}>
          <h2 className={s.h2}>Livré par étapes, chacune validée sur maquette.</h2>
        </div>
        <Steps
          items={[
            { title: "Diagnostic", text: "Repérer les tâches qui se répètent, et celles qui valent vraiment la peine d'être automatisées." },
            { title: "Maquettes", text: "Chaque écran est dessiné et validé avec l'équipe avant d'être développé." },
            { title: "Livraison par étapes", text: "Commandes, puis stock, puis factures : chaque étape est utilisable dès sa livraison." },
          ]}
        />
      </section>

      <ProjectCta title="Votre entreprise ressemble à celle-ci ?" text="20 minutes pour repérer ce qui pourrait être relié chez vous." />
    </>
  );
}
