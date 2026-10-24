import Img from '../images/Img.jsx';

/* SPREAD 75 THE RESOLUTION (placeholder left, text right) */
export default function Spread092TheResolution() {
  return (
    <section className="spread" data-screen-label="75 The resolution">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s226" src="/image_assets/img_0100.jpeg" alt="An animal in open natural space the evolution from zoo cage to conservation sanctuary" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">III - The Zoo Dilemma</div>
            <div className="tx">Not closing, evolving. Space replaces cages. Freedom replaces display.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">175</div>
      </div>
      <div className="page right paper">
        <div className="page-text">
          <div className="running-head r">III · The Zoo Dilemma · The Resolution</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Not Closing Evolving</span> </div>
          <h3>Zoos that complete<br />the <em>wild</em>.</h3>
          <div className="body">
            <p>The zoo dilemma is not solved by closing zoos, nor by defending them as they are. It is solved by <em>evolving</em> them. When space replaces cages, technology replaces confinement, and purpose replaces
              display, the zoo becomes relevant again not a place to look at animals, but a system that
              prepares both animals and humans for coexistence.</p>
            <p>Animals gain ecologically meaningful spaces. Human interaction shifts from entitlement to
              respect. Scientific knowledge expands through non-intrusive monitoring. Urban communities
              retain access through immersive education without the burden of captivity.</p>
          </div>
          <div className="pull"> In this model, zoos no longer compete with the wild <em>they complete it</em>. </div>
          <div className="pagenum r">176</div>
        </div>
      </div>
    </section>
  );
}
