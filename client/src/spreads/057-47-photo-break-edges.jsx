import Img from '../images/Img.jsx';

/* SPREAD 48 URBAN PLANNING DIVIDER — PHOTO BREAK 47· Photo break edges */
export default function Spread05747PhotoBreakEdges() {
  return (
    <section className="spread spanfig sp-four" data-screen-label="47· Photo break edges">
      {/* Full-spread layout from slide 44 */}
      <div className="page l paper">
        <div className="pagenum l">105</div>
      </div>
      <div className="page r paper">
        <div className="pagenum r">106</div>
      </div>
      <figure className="sp-img sp-main">
        <Img slot="s139" src="/image_assets/img_0120.jpeg" alt="The last cultivated field before the Terai forest begins" loading="lazy" />
      </figure>
      <figure className="sp-img sp-small">
        <Img slot="s136" src="/image_assets/img_0076.jpeg" alt="" loading="lazy" />
      </figure>
      <figure className="sp-img sp-side">
        <Img slot="s137" src="/image_assets/img_0077.jpeg" alt="" loading="lazy" />
      </figure>
      <p className="sp-cap">Where the town meets the wetland.</p>
      <figure className="sp-img sp-strip">
        <Img slot="s138" src="/image_assets/img_0124.jpeg" alt="" loading="lazy" />
      </figure>
    </section>
  );
}
