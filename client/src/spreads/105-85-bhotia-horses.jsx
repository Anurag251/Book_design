import Img from '../images/Img.jsx';

/* SPREAD 85 BHOTIA HORSES (placeholder left, caption right) */
export default function Spread105BhotiaHorses() {
  return (
    <section className="spread" data-screen-label="85 Bhotia horses">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s265" src="/image_assets/img_0132.jpeg" alt="A Bhotia horse navigating steep Himalayan terrain in Mustang" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Closing - Mustang</div>
            <div className="tx">The Bhotia horse on steep Himalayan terrain. Six native breeds, one vertical country.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">201</div>
      </div>
      <div className="page right paper">
        <div className="page-caption center">
          <div className="running-head r">Closing · Mustang</div>
          <div className="plate-no">Plate lix</div>
          <div className="lead">Six Native Breeds</div>
          <h2 className="ttl">The <em>Bhotia</em><br />horse.</h2>
          <hr className="rule amber" />
          <div className="pull"> Nepal has six native horse breeds. The mountain horses of Mustang are <em>Bhotia horses</em> with their chests set closer to the ground, they possess exceptional balance and strength
            for climbing steep Himalayan terrain, unmatched by any other horse breed in the world. </div>
          <div className="pagenum r">202</div>
        </div>
      </div>
    </section>
  );
}
