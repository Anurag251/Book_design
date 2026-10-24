import Img from '../images/Img.jsx';

/* SPREAD 28 OLDEST ELEPHANT (placeholder left, caption right) */
export default function Spread031NepalSOldestElephant() {
  return (
    <section className="spread" data-screen-label="28 Nepal's oldest elephant">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s64" src="/image_assets/img_0021.jpeg" alt="Nepal's oldest elephant at Sauraha NTNC, a portrait of age, memory, and quiet dignity" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Plate xx - Sauraha, NTNC</div>
            <div className="tx">Nepal's oldest elephant. Decades of life, memory, and quiet dignity.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">53</div>
      </div>
      <div className="page right paper">
        <div className="page-caption">
          <div className="running-head r">I · The Elephant Dilemma</div>
          <div className="plate-no">Plate xx</div>
          <div className="lead">From the Field</div>
          <h2 className="ttl">Decades of life,<br />memory, and <em>service</em>.</h2>
          <hr className="rule amber" />
          <div className="body"> Nepal's oldest elephant, housed at Sauraha under the National Trust for Nature
            Conservation (NTNC). The sunken cheeks visible here are a natural sign of advanced age in
            elephants marking decades of life, memory, and service alongside humans and forests. </div>
          <div className="pull"> A quiet reminder of Nepal's long relationship with its wildlife, conservation, and <em>coexistence</em>. </div>
          <div className="meta">
            <div>
              <div className="k">Location</div>
              <div className="v">Sauraha, Chitwan</div>
            </div>
            <div>
              <div className="k">Custodian</div>
              <div className="v">NTNC</div>
            </div>
            <div>
              <div className="k">Tells</div>
              <div className="v"><em>Sunken cheeks</em> advanced age</div>
            </div>
            <div>
              <div className="k">Status</div>
              <div className="v">Cared for · Aging</div>
            </div>
          </div>
          <div className="pagenum r">54</div>
        </div>
      </div>
    </section>
  );
}
