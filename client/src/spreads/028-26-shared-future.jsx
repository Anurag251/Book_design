import Img from '../images/Img.jsx';

/* SPREAD 26 SHARED FUTURE (placeholder left, text right) */
export default function Spread028SharedFuture() {
  return (
    <section className="spread" data-screen-label="26 Shared future">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s58" src="/image_assets/img_0012.jpeg" alt="A tiger moving back into the treeline a shared future for a shared species" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">I - From Cages to Corridors</div>
            <div className="tx">A tiger walks back into the trees. A shared future for a shared species.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">47</div>
      </div>
      <div className="page right paper">
        <div className="page-text">
          <div className="running-head r">I · From Cages to Corridors · Closing</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">A Shared Future</span> </div>
          <h3>A shared future for<br />a <em>shared species</em>.</h3>
          <div className="body">
            <p>Through this three-phase model, Nepal's conservation challenge becomes a global
              opportunity. Tigers move from cages to corridors from symbols of conflict to <em>agents of restoration</em>.</p>
            <p>Nepal, in turn, evolves from a conservation success story into a conservation leader with
              global reach helping restore what history erased, not by exporting problems, but by <em>exporting solutions</em>.</p>
          </div>
          <div className="pull" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "48px", lineHeight: "1.45", color: "var(--ink)", borderTop: "2px solid var(--amber)", borderBottom: "2px solid var(--amber)", padding: "36px 0", margin: "48px 0" }}> The tiger does not know borders. In learning to live beside it, Nepal has discovered
            something the rest of the world is still <em style={{ color: "var(--amber)", fontStyle: "italic" }}>searching for</em>. </div>
          <div className="pagenum r">48</div>
        </div>
      </div>
    </section>
  );
}
