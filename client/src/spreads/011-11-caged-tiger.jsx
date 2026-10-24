import Img from '../images/Img.jsx';

/* SPREAD 11 CAGED TIGER (placeholder left, caption right) */
export default function Spread011CagedTiger() {
  return (
    <section className="spread" data-screen-label="11 Caged tiger">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s18" src="/photos/p11-1.jpg" alt="A Royal Bengal tiger looks up from inside a holding cage at Bishazari Lake, Chitwan" />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Plate VI <b>· Bishazari Lake, Chitwan</b></div>
            <div className="tx">Labelled a <b>"man-eater"</b> and removed from the forest with no plan for what comes next.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">13</div>
      </div>
      <div className="page right paper">
        <div className="page-caption">
          <div className="running-head r">I · The Tiger Dilemma</div>
          <div className="plate-no">Plate vi</div>
          <div className="lead">From the Field</div>
          <h2 className="ttl">A <em>"man-eater"</em><br />at Bishazari Lake.</h2>
          <hr className="rule amber" />
          <div className="body"> A Royal Bengal tiger, captured after being labeled a "man-eater," now lives confined in a
            30–40-foot cage near Chitwan's Bishazari Lake. Removed from the forest with no clear plan
            for release, rehabilitation, or long-term care, its fate remains uncertain. Is this
            lifelong captivity, relocation, or quiet disappearance the final chapter for an animal
            born wild? </div>
          <div className="meta">
            <div>
              <div className="k">Location</div>
              <div className="v">Bishazari Lake, Chitwan</div>
            </div>
            <div>
              <div className="k">Species</div>
              <div className="v"><em>Panthera tigris tigris</em></div>
            </div>
            <div>
              <div className="k">Status</div>
              <div className="v">Confined · 30–40 ft cage</div>
            </div>
            <div>
              <div className="k">Outlook</div>
              <div className="v"><em>Uncertain</em></div>
            </div>
          </div>
          <div className="pagenum r">14</div>
        </div>
      </div>
    </section>
  );
}
