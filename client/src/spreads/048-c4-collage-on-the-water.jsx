import Img from '../images/Img.jsx';

/* SPREAD 41 THE SARAS (placeholder left, caption right) — COLLAGE C4· Collage on the water */
export default function Spread048C4CollageOnTheWater() {
  return (
    <section className="spread" data-screen-label="C4· Collage on the water">
      {/* Collage scaled to 90% inside a 5% paper border, matching the right page */}
      <div className="page left paper ed3">
        <figure className="ed3-img ed3-top" style={{ left: "58px", top: "86px", width: "630px", height: "864px", boxShadow: "0 36px 70px -38px rgba(0,0,0,.55)" }}>
          <Img slot="s114" src="/image_assets/img_0033.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="ed3-img ed3-tall" style={{ left: "713px", right: "58px", top: "86px", bottom: "86px", boxShadow: "0 36px 70px -38px rgba(0,0,0,.55)" }}>
          <Img slot="s115" src="/image_assets/img_0117.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="ed3-label" style={{ left: "157px", top: "986px", width: "180px" }}><span className="bar" />On the water</div>
        <figure className="ed3-img ed3-small" style={{ left: "355px", top: "975px", width: "333px", height: "432px", boxShadow: "0 36px 70px -38px rgba(0,0,0,.55)" }}>
          <Img slot="s116" src="/image_assets/img_0121.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="pagenum l">87</div>
      </div>
      <div className="page r paper">
        {/* Inset to 90% of the page so a paper border shows around the photo */}
        <div className="gfig" style={{ position: "absolute", inset: "5%", width: "auto", height: "auto", boxShadow: "0 36px 70px -38px rgba(0,0,0,.55)" }}>
          <Img slot="s117" src="/image_assets/img_0097.jpeg" alt="Wading birds on the Terai floodplain at first light" loading="lazy" />
          <div className="gv" />
          <div className="gcap"><span className="gpl">Plate · Wetland</span><span className="gtx">Waders and wings on the floodplain at first light.</span></div>
        </div>
        <div className="pagenum r">88</div>
      </div>
    </section>
  );
}
