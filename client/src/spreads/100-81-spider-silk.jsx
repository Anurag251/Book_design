import Img from '../images/Img.jsx';

/* SPREAD 81 SPIDER SILK (text left, placeholder right) */
export default function Spread100SpiderSilk() {
  return (
    <section className="spread bio-feature" data-screen-label="81 Spider silk">
      <div className="page left">
        <div className="bio-hero">
          <Img slot="s254" src="/image_assets/img_0086.jpeg" alt="A spider and its web silk stronger than steel, lighter than thread, a natural super-material" />
        </div>
        <div className="bio-vert"><span>IV · Biomimicry</span></div>
        <div className="bio-head" style={{ top: "70%", transform: "translateY(-50%)" }}>
          <div className="pre">Nature's Super Material</div>
          <h2>Spider<em>Silk</em></h2>
          <div className="tagline">Stronger than steel, lighter than thread. A web that defies physics.</div>
        </div>
        <div className="pagenum l img-pn">191</div>
      </div>
      <div className="page right">
        <div className="bio-R" style={{ display: "flex", flexDirection: "column", padding: "148px 155px 128px" }}>
          {/* Decorative chapter number */}
          <div style={{ position: "absolute", bottom: "32px", right: "72px", fontFamily: "var(--serif)", fontSize: "400px", fontStyle: "italic", lineHeight: "1", color: "rgba(0,0,0,0.045)", pointerEvents: "none", userSelect: "none" }}>81</div>
          {/* Block 1: Section header */}
          <div style={{ position: "relative", zIndex: "1", marginBottom: "80px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "44px" }}> <div style={{ width: "60px", height: "3px", background: "var(--amber)", flexShrink: "0" }} /> <span style={{ fontFamily: "var(--sans)", fontSize: "15px", letterSpacing: ".44em", textTransform: "uppercase", color: "var(--amber)" }}>IV · Biomimicry</span> </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "116px", lineHeight: "1.0", fontStyle: "italic", color: "var(--ink)", marginBottom: "22px" }}>Spider Silk</div>
            <div style={{ fontFamily: "var(--sans)", fontSize: "18px", letterSpacing: ".08em", textTransform: "uppercase", color: "#aaa" }}>Stronger than steel  ·  Lighter than thread</div>
          </div>
          {/* Block 2: Pull quote */}
          <div style={{ borderLeft: "4px solid var(--amber)", paddingLeft: "48px", marginBottom: "80px", position: "relative", zIndex: "1" }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: "37px", fontStyle: "italic", lineHeight: "1.58", color: "var(--ink)" }}> "Each strand is stronger than steel, more elastic than nylon, and produced without heat,
              pressure, or a single drop of solvent only water, protein, and four hundred million years
              of evolution." </div>
          </div>
          {/* Block 3: Body text */}
          <div style={{ position: "relative", zIndex: "1" }}>
            <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.1)", marginBottom: "48px" }} />
            <p className="bt" style={{ fontSize: "23px", lineHeight: "1.88", margin: "0 0 36px" }}>Spider silk is one of nature's most remarkable materials. Each strand is stronger
              weight-for-weight than high-grade steel and tougher than Kevlar, yet the spider spins it
              silently a web whose geometry is mathematically tuned to absorb kinetic energy and resist
              failure from any direction of stress.</p>
            <p className="bt" style={{ fontSize: "23px", lineHeight: "1.88", margin: "0 0 36px" }}>Scientists have long sought to replicate it. The secret lies in a protein sequence that
              folds into interlocking crystalline regions within an elastic matrix simultaneously rigid
              and stretchy. Applications span surgical sutures, ultra-light body armour, biodegradable
              textiles, and flexible aerospace composites.</p>
            <p className="bt" style={{ fontSize: "23px", lineHeight: "1.88", margin: "0" }}>What makes spider silk most extraordinary is the elegance of its production. No heat, no
              solvent, no pressure only water, protein, and a biological spinnerette perfected over four
              hundred million years. Nature's reminder that the most sophisticated engineering always
              leaves the lightest footprint.</p>
          </div>
        </div>
        <div className="pagenum r">192</div>
      </div>
    </section>
  );
}
