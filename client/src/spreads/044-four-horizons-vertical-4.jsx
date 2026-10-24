import Img from '../images/Img.jsx';

/* SPREAD 38 THE EAGLE WATCHES (placeholder left, caption right) — FULL-SPREAD VERTICAL FOUR */
export default function Spread044FourHorizonsVertical4() {
  return (
    <section className="spread spanfig sp-four" data-screen-label="Four horizons vertical 4">
      <div className="page left paper">
        <div className="pagenum l">79</div>
      </div>
      <div className="page right paper">
        <div className="pagenum r">80</div>
      </div>
      <figure className="sp-img sp-main">
        <Img slot="s100" src="/image_assets/img_0132.jpeg" alt="" loading="lazy" />
      </figure>
      <figure className="sp-img sp-small">
        <Img slot="s101" src="/image_assets/img_0003.jpeg" alt="" loading="lazy" />
      </figure>
      <figure className="sp-img sp-side">
        <Img slot="s102" src="/image_assets/img_0071.jpeg" alt="" loading="lazy" />
      </figure>
      <p className="sp-cap">Four horizons Terai to Himalaya.</p>
      <figure className="sp-img sp-strip">
        <Img slot="s103" src="/image_assets/img_0072.jpeg" alt="" loading="lazy" />
      </figure>
    </section>
  );
}
