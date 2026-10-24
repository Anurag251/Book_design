import Img from '../images/Img.jsx';

export default function Spread022CagesToCorridorsDivider() {
  return (
    <section className="spread" data-screen-label="21 Cages to Corridors divider">
      <div className="page left dark">
        <div className="divider-page">
          <div>
            <div className="eyebrow">Part One · Chapter the Second</div>
            <p className="roman" style={{ fontSize: "192px", lineHeight: ".86" }}>From<br />Cages<br />to<br />Corridors</p>
          </div>
          <div>
            <h2 className="heading" style={{ fontSize: "96px" }}>A framework for global<br /><em>tiger reintroduction</em>.</h2>
            <hr className="rule amber" style={{ margin: "28px 0 0" }} />
            <p className="epigraph"> Nepal's tiger dilemma need not end in cages. It can mark the beginning of a new chapter in
              global conservation one that transforms surplus and conflict into restoration and shared
              responsibility. <span className="who">Part I · From Cages to Corridors</span> </p>
          </div>
          <div className="bot">
            <div className="pgs">Pages 37 48</div>
            <div className="orn" style={{ color: "var(--amber-2)" }}><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>
        <div className="pagenum l img-pn">35</div>
      </div>
      <div className="page right">
        {/* One full-page photo (cover). Removed grid photos, to restore:
            <Img slot="s40" src="/image_assets/img_0014.jpeg" alt="" loading="lazy" />
            <Img slot="s41" src="/image_assets/img_0010.jpeg" alt="" loading="lazy" />
            <Img slot="s42" src="/image_assets/img_0002.jpeg" alt="" loading="lazy" />
            Previous photo (tiger close-up, also used on several other slides):
            <Img slot="s39" src="/image_assets/img_0012.jpeg" alt="" loading="lazy" /> */}
        <div className="gfig">
          <Img slot="s273" src="/photos/p11-1.jpg" alt="A tiger peering over a wall from behind the bars of its enclosure" loading="lazy" />
        </div>
        <div className="pagenum r img-pn">36</div>
      </div>
    </section>
  );
}
