import Img from '../images/Img.jsx';

/* SPREAD 63 BUFFER ZONES (text left, placeholder right) */
export default function Spread076BufferZones() {
  return (
    <section className="spread" data-screen-label="63 Buffer zones">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">II · Human–Animal Conflict · Buffer Zones</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Where Conservation Is Won or Lost</span> </div>
          <h3>Decided not in parks,<br />but at the <em>edges</em>.</h3>
          <div className="body">
            <p>Human–animal conflict in Nepal is decided not inside national parks, but in the buffer
              zones that lie between forests and human settlements. These transitional landscapes were
              intended to reduce friction yet they have increasingly become the primary sites of
              conflict. The reason is not proximity, but <em>management</em>.</p>
            <p>Most serious encounters occur just beyond park boundaries, where farming, grazing,
              firewood collection, and daily travel overlap with established wildlife routes. Crops
              attractive to animals are planted along forest edges; access is rarely timed or zoned;
              settlements cut across corridors.</p>
            <p>Buffer zones fail not because coexistence is impossible, but because they are treated as
              residual land rather than actively curated landscapes. <em>The future of conservation in Nepal will be decided not within parks, but in the spaces
              between forest and home.</em></p>
          </div>
          <div className="pagenum l">143</div>
        </div>
      </div>
      <div className="page right paper">
        {/* Two stacked photos framed on paper, margins matching the text page */}
        <div style={{ position: "absolute", top: "150px", bottom: "150px", left: "128px", right: "128px", display: "grid", gridTemplateRows: "1fr 1fr", gap: "40px" }}>
          <figure style={{ margin: "0", position: "relative", overflow: "hidden", boxShadow: "0 24px 50px -32px rgba(0,0,0,.55)" }}>
            <Img slot="s191" src="/image_assets/img_0009.jpeg" alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </figure>
          <figure style={{ margin: "0", position: "relative", overflow: "hidden", boxShadow: "0 24px 50px -32px rgba(0,0,0,.55)" }}>
            <Img slot="s192" src="/image_assets/img_0056.jpeg" alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </figure>
        </div>
        <div className="pagenum r">144</div>
      </div>
    </section>
  );
}
