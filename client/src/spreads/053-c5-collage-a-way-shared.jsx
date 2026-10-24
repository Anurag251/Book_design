import Img from '../images/Img.jsx';

/* SPREAD 45 A WAY FORWARD (placeholder left, text right) — COLLAGE C5· Collage a way shared */
export default function Spread053C5CollageAWayShared() {
  return (
    <section className="spread scrapbook" data-screen-label="C5· Collage a way shared">
      {/* Left page uses slide 33's 4-photo collage */}
      <div className="page l paper">
        <figure className="sb-print sb-tall">
          <Img slot="s124" src="/image_assets/img_0099.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="sb-print sb-top">
          <Img slot="s125" src="/image_assets/img_0105.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="sb-print sb-mid">
          <Img slot="s126" src="/image_assets/img_0104.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="sb-print sb-wide">
          <Img slot="s127" src="/image_assets/img_0111.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="pagenum l">97</div>
      </div>
      <div className="page r">
        <div className="gfig">
          <Img slot="s128" src="/image_assets/img_0112.jpeg" alt="The edge where forest and farmland meet in Nepal's buffer zone" loading="lazy" />
          <div className="gv" />
          <div className="gcap"><span className="gpl">Plate · Buffer zone</span><span className="gtx">Where the forest and the field agree to overlap.</span></div>
        </div>
        <div className="pagenum r img-pn">98</div>
      </div>
    </section>
  );
}
