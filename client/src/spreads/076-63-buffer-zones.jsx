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
      <div className="page right">
        <div className="gstack">
          <Img slot="s191" src="/image_assets/img_0009.jpeg" alt="" loading="lazy" />
          <Img slot="s192" src="/image_assets/img_0056.jpeg" alt="" loading="lazy" />
          <div className="gbar"><span className="gtx">A buffer-zone landscape community forest, footpaths, and a park boundary line in the dis…</span></div>
        </div>
        <div className="pagenum r img-pn">144</div>
      </div>
    </section>
  );
}
