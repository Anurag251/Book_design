import Img from '../images/Img.jsx';

/* SPREAD 14 WHY TERAI BUILT FOR TIGERS (placeholder left, text right) */
export default function Spread014TeraiBuiltForTigers() {
  return (
    <section className="spread" data-screen-label="14 Terai built for tigers">
      <div className="page left">
        <div className="fig mount tall onpaper">
          <div className="print"> <span className="pc tl" /><span className="pc tr" /><span className="pc bl" /><span className="pc br" /> <Img slot="s25" src="/photos/p14-1.jpg" alt="A spotted chital fawn at night in the Terai undergrowth" /> </div>
          <div className="cap">
            <div className="no">Pl. IX</div>
            <div className="txt">
              <div className="loc">Terai undergrowth after dark</div>
              <div className="desc">A chital fawn at last light the <em>staple prey</em> that makes the Terai built for tigers.</div>
            </div>
          </div>
        </div>
        <div className="pagenum l img-pn">19</div>
      </div>
      <div className="page right paper">
        <div className="page-text">
          <div className="running-head r">I · The Tiger Dilemma · Why It Works</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Prey, Predator, Place</span> </div>
          <h3>Why Nepal's Terai is naturally <em>built for tigers</em>.</h3>
          <div className="body">
            <p>Nepal's tiger success is underpinned by exceptional prey–predator dynamics. Ecologically,
              a viable tiger landscape requires 20–25 large prey per km²; optimal habitats support
              60–90. Much of Nepal's Terai falls in this optimal range, enabling some of the highest
              tiger densities in Asia around <em>3–5 tigers per 100 km²</em>.</p>
            <p>Over 70 percent of a tiger's diet comes from deer species alone. By biomass: <em>chital (45–55%)</em>, <em>sambar (15–25%)</em>, <em>wild boar (10–20%)</em>, with hog deer, swamp deer, and gaur making up the remainder.</p>
            <p>In Chitwan National Park alone, estimates suggest over <em>40,000 chital</em>, 3,000–5,000 sambar, and more than 10,000 wild boar, supporting 120+ tigers.</p>
          </div>
          <div className="pagenum r">20</div>
        </div>
      </div>
    </section>
  );
}
