import Img from '../images/Img.jsx';

/* SPREAD 64 ADDRESSING CONFLICT DIVIDER — PHOTO BREAK 63· Photo break the buffer zone */
export default function Spread07763PhotoBreakTheBuffer() {
  return (
    <section className="spread" data-screen-label="63· Photo break the buffer zone">
      {/* One photo per page, inset 10% on every side (80% of the page) so paper shows around it.
          Removed grid photos, to restore:
          <Img slot="s194" src="/image_assets/img_0063.jpeg" alt="" loading="lazy" />
          <Img slot="s195" src="/image_assets/img_0083.jpeg" alt="" loading="lazy" />
          <Img slot="s196" src="/image_assets/img_0084.jpeg" alt="" loading="lazy" /> */}
      <div className="page l paper">
        <div className="gfig" style={{ position: "absolute", inset: "10%", width: "auto", height: "auto", boxShadow: "0 36px 70px -38px rgba(0,0,0,.55)" }}>
          <Img slot="s193" src="/image_assets/img_0074.jpeg" alt="" loading="lazy" />
        </div>
        <div className="pagenum l">145</div>
      </div>
      <div className="page r paper">
        <div className="gfig" style={{ position: "absolute", inset: "10%", width: "auto", height: "auto", boxShadow: "0 36px 70px -38px rgba(0,0,0,.55)" }}>
          <Img slot="s197" src="/image_assets/img_0100.jpeg" alt="Wildlife in a shared forest buffer zone protected habitat that exists in a fragile balance" loading="lazy" />
          <div className="gv" />
          <div className="gcap"><span className="gpl">Plate · Buffer zone</span><span className="gtx">A shared forest safe until it isn’t.</span></div>
        </div>
        <div className="pagenum r">146</div>
      </div>
    </section>
  );
}
