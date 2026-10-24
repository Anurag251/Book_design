import Img from '../images/Img.jsx';

/* SPREAD 101 COLOPHON */
export default function Spread106Colophon() {
  return (
    <section className="spread" data-screen-label="101 Colophon">
      <div className="page left" style={{ position: "relative", overflow: "hidden", background: "#e8e2d8" }}>
        <Img slot="s266" src="/image_assets/img_0131.jpeg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", cursor: "pointer" }} />
        <div style={{ position: "absolute", inset: "0", background: "rgba(238,232,220,0.82)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0 130px", pointerEvents: "none", zIndex: "1" }}>
          <h4 style={{ fontFamily: "var(--sans)", fontSize: "18px", letterSpacing: ".42em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 26px", fontWeight: "600" }}>Addressing Nepal’s Wildlife Dilemma</h4>
          <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "28px", lineHeight: "1.7", color: "#46402f", maxWidth: "680px", margin: "0 0 40px" }}>When conservation succeeds, what comes next is not an ending but a question and a
            responsibility we choose to keep.</p>
          <hr className="rule amber" />
        </div>
        <div className="pagenum l">203</div>
      </div>
      {/* Right page: full-bleed washed photo + dedication */}
      <div className="page right" style={{ position: "relative", overflow: "hidden", background: "#e8e2d8" }}>
        {/* Click this image to replace it using the book's image system */}
        <Img slot="s267" src="/image_assets/img_0130.jpeg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", cursor: "pointer" }} />
        {/* overlay + text both non-interactive so clicks reach the img below */}
        <div style={{ position: "absolute", inset: "0", background: "rgba(238,232,220,0.62)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "180px 160px", pointerEvents: "none" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "42px", fontStyle: "italic", lineHeight: "1.68", textAlign: "center", color: "#2b2620", maxWidth: "920px", margin: "0" }}> For every trail left wild,<br />every forest left standing,<br />and every creature that has not yet<br />learned to fear us. </p>
        </div>
        <div className="pagenum r">204</div>
      </div>
    </section>
  );
}
