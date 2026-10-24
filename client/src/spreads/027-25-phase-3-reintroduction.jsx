import Img from '../images/Img.jsx';

/* SPREAD 25 PHASE 3 REINTRODUCTION (text left, placeholder right) */
export default function Spread027Phase3Reintroduction() {
  return (
    <section className="spread" data-screen-label="25 Phase 3 Reintroduction">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">I · From Cages to Corridors · Phase 3</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Phase Three · Reintroduction</span> </div>
          <h3>Returning tigers to<br /><em>restored landscapes</em>.</h3>
          <div className="body">
            <p>The final phase is the most visible and the most sensitive: returning tigers to landscapes
              where they once belonged. Reintroduction must occur only where ecosystems are <em>ready</em>, not merely willing.</p>
            <p>Host countries must demonstrate: sufficient contiguous habitat, a stable and monitored
              prey base, strong legal protection and enforcement, long-term political commitment, and
              meaningful community participation and benefit-sharing.</p>
            <p>Releases should be gradual, closely monitored, and supported by rapid-response conflict
              mitigation teams. Tigers must be tracked, territories mapped, and early warning systems
              established for nearby communities. <em>Reintroduction is not a single event it is a decade-long commitment.</em></p>
          </div>
          <div className="pagenum l">45</div>
        </div>
      </div>
      <div className="page right">
        <div className="fig bleed">
          <Img slot="s57" src="/image_assets/img_0014.jpeg" alt="A tiger in a restored natural landscape during the reintroduction phase" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Phase Three - Reintroduction</div>
            <div className="tx">Returning tigers to restored landscapes. The final and most visible phase.</div>
          </div>
        </div>
        <div className="pagenum r img-pn">46</div>
      </div>
    </section>
  );
}
