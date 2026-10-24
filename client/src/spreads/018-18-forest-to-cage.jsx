import Img from '../images/Img.jsx';

/* SPREAD 18 FROM FOREST TO CAGE (placeholder left, caption right) */
export default function Spread018ForestToCage() {
  return (
    <section className="spread" data-screen-label="18 Forest to cage">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s33" src="/photos/p15-3.jpg" alt="A Bengal tiger standing inside a concrete holding cage behind iron bars" />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Plate XII <b>· From Forest to Cage</b></div>
            <div className="tx">Capture is fast; rehabilitation is rare. A conservation success becomes a <b>logistics problem</b>.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">27</div>
      </div>
      <div className="page right paper">
        <div className="page-caption">
          <div className="running-head r">I · The Tiger Dilemma · A Holding Problem</div>
          <div className="plate-no">Plate xii</div>
          <div className="lead">A Holding Problem</div>
          <h2 className="ttl">Captures rise.<br />Cages don't <em>scale</em>.</h2>
          <hr className="rule amber" />
          <div className="body"> As incidents involving so-called <em>"man-eaters"</em> rise, Nepal is quietly accumulating a captive population of tigers not by choice, but by
            default. Capture is fast; rehabilitation is rare. The policies, infrastructure, and
            long-term plans for these animals remain limited and increasingly inadequate. A
            conservation success is becoming a logistics problem. </div>
          <div className="meta">
            <div>
              <div className="k">Trend</div>
              <div className="v"><em>Rising captures</em></div>
            </div>
            <div>
              <div className="k">Facilities</div>
              <div className="v">Limited</div>
            </div>
            <div>
              <div className="k">Pathway out</div>
              <div className="v"><em>Unclear</em></div>
            </div>
            <div>
              <div className="k">Time horizon</div>
              <div className="v">Lifelong (often)</div>
            </div>
          </div>
          <div className="pagenum r">28</div>
        </div>
      </div>
    </section>
  );
}
