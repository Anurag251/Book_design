import Img from '../images/Img.jsx';

/* SPREAD 71 PAIR OF HORNBILL (placeholder left, caption right) */
export default function Spread087PairOfHornbill() {
  return (
    <section className="spread" data-screen-label="71 Pair of Hornbill">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s220" src="/image_assets/img_0109.jpeg" alt="A pair of hornbills perched in the Terai forest, a species whose pair-bond depends on intact canopy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Plate li - Terai Forest</div>
            <div className="tx">A pair of hornbills. A species whose pair-bond depends on intact forest.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">165</div>
      </div>
      <div className="page right paper">
        <div className="page-caption center">
          <div className="running-head r">III · The Zoo Dilemma</div>
          <div className="plate-no">Plate li</div>
          <div className="lead">Cages Made Unnecessary</div>
          <h2 className="ttl">Pair of<br /><em>hornbill</em>.</h2>
          <hr className="rule amber" />
          <div className="pull"> In cities, zoo functions evolve into museum-like learning environments immersive visuals,
            virtual reality, storytelling. <em>Technology does not dominate nature; it protects it by making cages unnecessary.</em> </div>
          <div className="pagenum r">166</div>
        </div>
      </div>
    </section>
  );
}
