import Img from '../images/Img.jsx';

/* SPREAD 41 THE SARAS (placeholder left, caption right) — COLLAGE C4· Collage on the water */
export default function Spread048C4CollageOnTheWater() {
  return (
    <section className="spread" data-screen-label="C4· Collage on the water">
      <div className="page left paper ed3">
        <figure className="ed3-img ed3-top">
          <Img slot="s114" src="/image_assets/img_0033.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="ed3-img ed3-tall">
          <Img slot="s115" src="/image_assets/img_0117.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="ed3-label"><span className="bar" />On the water</div>
        <figure className="ed3-img ed3-small">
          <Img slot="s116" src="/image_assets/img_0121.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="pagenum l">87</div>
      </div>
      <div className="page r">
        <div className="gfig">
          <Img slot="s117" src="/image_assets/img_0097.jpeg" alt="Wading birds on the Terai floodplain at first light" loading="lazy" />
          <div className="gv" />
          <div className="gcap"><span className="gpl">Plate · Wetland</span><span className="gtx">Waders and wings on the floodplain at first light.</span></div>
        </div>
        <div className="pagenum r img-pn">88</div>
      </div>
    </section>
  );
}
