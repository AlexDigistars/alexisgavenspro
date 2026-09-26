// Illustration « avant / après » du bloc Early de l'accueil : un logiciel daté et lent,
// puis le même logiciel repensé en tableau de bord. Données fictives.
import Scene from "@/components/Scene";
import s from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  return (
    <Scene className={s.scene}>
      <div
        className={s.grid}
        role="img"
        aria-label="Avant : un logiciel daté qui charge lentement. Après : un tableau de bord clair, à jour en temps réel."
      >
        <div className={s.col}>
          <span className={s.tagBefore}>Avant</span>
          <div className={s.old} aria-hidden="true">
            <div className={s.oldBar}>
              <span>Gestion.exe</span>
              <span className={s.oldButtons}>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
            <div className={s.oldMenu}>
              <span>Fichier</span>
              <span>Édition</span>
              <span>Clients</span>
              <span>Outils</span>
            </div>
            <div className={s.oldBody}>
              <div className={s.oldTable}>
                <i></i>
                <i></i>
                <i className={s.oldYellow}></i>
                <i></i>
                <i></i>
              </div>
              <div className={s.oldLoading}>
                <span className={s.spinner}></span>
                Chargement…
              </div>
            </div>
          </div>
        </div>

        <div className={s.col}>
          <span className={s.tagAfter}>Après</span>
          <div className={s.new} aria-hidden="true">
            <div className={s.newHead}>
              <strong>Tableau de bord</strong>
              <span className={s.live}>
                <span className={s.dot}></span>
                À jour
              </span>
            </div>
            <div className={s.kpis}>
              <span>
                <small>Chiffre d&apos;affaires</small>
                <b>48,2 k€</b>
              </span>
              <span>
                <small>Marge</small>
                <b>31 %</b>
              </span>
            </div>
            <div className={s.rows}>
              <span className={s.row}>
                <small>Studio Nova</small>
                <i style={{ width: "68%" }}></i>
              </span>
              <span className={s.row}>
                <small>Maison Lenoir</small>
                <i style={{ width: "42%" }}></i>
              </span>
              <span className={`${s.row} ${s.warn}`}>
                <small>Garage Ferrand</small>
                <i style={{ width: "16%" }}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
