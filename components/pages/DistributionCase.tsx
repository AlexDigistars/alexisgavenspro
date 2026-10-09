// Étude de cas (entreprise anonymisée) : une PME de machines à café et son application de suivi du parc.
// Textes repris du brief ; démonstrations à données fictives.
import type { CSSProperties } from "react";
import Scene from "@/components/Scene";
import { CafeBeforeAfter } from "@/components/CaseVisuals";
import { BeforeAfterSection, CaseHero, IconPoints, Icons, InShort, ProjectCta } from "@/components/ProjectBlocks";
import s from "./ProjectCase.module.css";
import b from "./DistributionCase.module.css";

/** Délai d'apparition d'un élément dans le cycle de la démonstration. */
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

const DELIVERIES = [
  { client: "Cabinet d'architectes", detail: "4 kg · toutes les 2 semaines" },
  { client: "Agence immobilière", detail: "6 kg · chaque mois" },
  { client: "Salle de sport", detail: "3 kg · chaque semaine" },
];

export default function DistributionCase() {
  return (
    <>
      <CaseHero
        tag="Réalisation · entreprise anonymisée"
        title="Une application mobile pour suivre chaque machine."
        lead="Cette PME vend et loue des machines à café aux entreprises, livre le café en grains, et installe, répare et remplace les machines. Une activité qui mêle commerce B2B, stocks chez les fournisseurs et chez les clients, et interventions sur le terrain. Responsable de l'administration des ventes et de la logistique, j'ai conçu l'application mobile qui suit chaque machine, et automatisé les livraisons récurrentes."
        pills={["Vente", "Location", "Café en grains", "Installation et réparation"]}
      >
        <Scene className={b.heroScene} shift={6}>
          <div
            className={b.phone}
            role="img"
            aria-label="Démonstration : depuis le terrain, une réparation est ajoutée à la fiche d'une machine, avec une photo et une note, puis enregistrée dans son historique."
          >
            <div className={b.screen} aria-hidden="true">
              <span className={b.back}>‹ Machine n° 0142</span>
              <b className={b.screenTitle}>Nouvelle intervention</b>
              <span className={b.label}>Type</span>
              <div className={b.types}>
                <span>Installation</span>
                <span className={b.typeOn}>Réparation</span>
                <span>Remplacement</span>
              </div>
              <span className={b.label}>Photo</span>
              <div className={`${b.photo} ${b.appear}`} style={d(0.8)}>
                <span className={b.machine}>
                  <i className={b.groupLeft}></i>
                  <i className={b.groupRight}></i>
                  <i className={b.tray}></i>
                  <i className={b.cup}></i>
                </span>
                <span className={b.photoTag}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h4l2-3h6l2 3h4v12H3z" />
                    <circle cx="12" cy="13" r="3.5" />
                  </svg>
                  Photo ajoutée
                </span>
              </div>
              <span className={b.label}>Note</span>
              <span className={`${b.note} ${b.appear}`} style={d(1.8)}>
                Joint du groupe remplacé, machine testée.
              </span>
              <span className={`${b.saveBtn} ${b.appear}`} style={d(2.6)}>
                Enregistrer
              </span>
              <span className={`${b.toast} ${b.appear}`} style={d(3.4)}>
                <span className={b.toastIcon}>✓</span>
                Ajoutée à l&apos;historique de la machine
              </span>
            </div>
          </div>
          <span className={b.heroFictive}>Données fictives</span>
        </Scene>
      </CaseHero>

      <InShort
        before="Les informations sur chaque machine étaient réparties entre plusieurs fichiers et échanges."
        did="Une application mobile pour retrouver chaque machine, son client et son historique, et des livraisons récurrentes qui partent sans ressaisie."
        after="L'équipe l'utilise chaque jour, au bureau comme sur le terrain."
      />

      <BeforeAfterSection>
        <CafeBeforeAfter size="large" />
      </BeforeAfterSection>

      <IconPoints
        title="Ce que fait l'application"
        items={[
          { icon: Icons.card, text: "Chaque machine a sa fiche : client, modèle, vendue ou louée, emplacement, historique." },
          { icon: Icons.camera, text: "Installations, réparations et remplacements s'ajoutent depuis le terrain, photo comprise." },
          { icon: Icons.truck, text: "Les livraisons récurrentes de café se préparent toutes seules." },
        ]}
      >
        <Scene className={s.demoPanel} shift={6}>
          <div
            className={b.deliveries}
            role="img"
            aria-label="Démonstration : les livraisons récurrentes de café en grains de la semaine, préparées automatiquement, sans ressaisie."
          >
            <div className={b.card} aria-hidden="true">
              <div className={b.cardHead}>
                <b>Livraisons de café en grains</b>
                <span className={b.time}>Cette semaine</span>
              </div>
              {DELIVERIES.map((row, i) => (
                <div key={row.client} className={b.delivery}>
                  <span className={b.truck}>{Icons.truck}</span>
                  <span className={b.deliveryText}>
                    <b>{row.client}</b>
                    <small>{row.detail}</small>
                  </span>
                  <span className={`${b.ready} ${b.appear}`} style={d(0.6 + i * 0.9)}>
                    Préparée
                  </span>
                </div>
              ))}
              <span className={`${b.auto} ${b.appear}`} style={d(3.4)}>
                Préparées automatiquement, sans ressaisie
              </span>
            </div>
          </div>
          <span className={s.fictive}>Données fictives</span>
        </Scene>
      </IconPoints>

      <ProjectCta title={"Votre parc, vos interventions, vos livraisons : parlons-en."} />
    </>
  );
}
