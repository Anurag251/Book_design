import Img from '../images/Img.jsx';

/* SPREAD 82 OWLS (placeholder left, text right) — COLLAGE C12· Collage the silent ones */
export default function Spread101C12CollageTheSilentOnes() {
  return (
    <section className="spread" data-screen-label="C12· Collage the silent ones">
      <div className="page l">
        <div className="gmosaic">
          <Img slot="s255" src="/image_assets/img_0087.jpeg" alt="" loading="lazy" />
          <Img slot="s256" src="/image_assets/img_0110.jpeg" alt="" loading="lazy" />
          <Img slot="s257" src="/image_assets/img_0060.jpeg" alt="" loading="lazy" />
          <Img slot="s258" src="/image_assets/img_0098.jpeg" alt="" loading="lazy" />
          <div className="gbar"><span className="gtx">The silent ones</span></div>
        </div>
        <div className="pagenum l img-pn">193</div>
      </div>
      <div className="page r">
        <div className="gfig">
          <Img slot="s259" src="/image_assets/img_0109.jpeg" alt="An owl built for the dark, its serrated feathers designed to erase their own sound" loading="lazy" />
          <div className="gv" />
          <div className="gcap"><span className="gpl">Plate · Night</span><span className="gtx">Built for the dark feathers that erase their own sound.</span></div>
        </div>
        <div className="pagenum r img-pn">194</div>
      </div>
    </section>
  );
}
