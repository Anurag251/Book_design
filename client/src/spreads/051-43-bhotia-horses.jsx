import Img from '../images/Img.jsx';

/* SPREAD 43 YOUNG FOALS (placeholder left, caption right) */
export default function Spread051BhotiaHorses() {
  return (
    <section className="spread" data-screen-label="43 Bhotia Horses">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s123" src="/image_assets/img_0092.jpeg" alt="Two adult Bhotia horses nuzzling noses in the arid Mustang highland landscape" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Plate xxxii - Mustang Highlands</div>
            <div className="tx">Two Bhotia horses nuzzling noses in the arid highlands of Mustang. Companionship at
              altitude, under an open sky.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">93</div>
      </div>
      <div className="page right paper">
        <div className="page-caption center">
          <div className="running-head r">I · Conservation Tourism</div>
          <div className="plate-no">Plate xxxii</div>
          <div className="lead">Mountain Bonds</div>
          <h2 className="ttl">The <em>Bhotia</em><br />horses.</h2>
          <hr className="rule amber" />
          <div className="pull"> Nepal's Bhotia horses carry centuries of mountain life in their compact frames bred for
            balance on steep Himalayan terrain, and for the company of one another in a landscape
            where little else survives. <em>They endure together.</em> </div>
          <div className="pagenum r">94</div>
        </div>
      </div>
    </section>
  );
}
