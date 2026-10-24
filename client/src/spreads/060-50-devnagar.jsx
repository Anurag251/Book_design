import Img from '../images/Img.jsx';

/* SPREAD 50 DEVNAGAR (placeholder left, caption right) */
export default function Spread060Devnagar() {
  return (
    <section className="spread" data-screen-label="50 Devnagar">
      <div className="page left">
        <div className="gv4">
          <Img slot="s146" src="/image_assets/img_0049.jpeg" alt="" loading="lazy" />
          <Img slot="s147" src="/image_assets/img_0058.jpeg" alt="" loading="lazy" />
          <Img slot="s148" src="/image_assets/img_0127.jpeg" alt="" loading="lazy" />
          <Img slot="s149" src="/image_assets/img_0131.jpeg" alt="" loading="lazy" />
          <div className="gbar"><span className="gtx">Wildlife or greenery glimpsed within an everyday urban setting. Picture taken in Devnagar,…</span></div>
        </div>
        <div className="pagenum l img-pn">111</div>
      </div>
      <div className="page right paper">
        <div className="page-caption center">
          <div className="running-head r">II · Urban Planning · Field Note</div>
          <div className="plate-no">Plate xxxvii</div>
          <div className="lead">Devnagar, Bharatpur</div>
          <h2 className="ttl">Do we really<br />have to <em>choose?</em></h2>
          <hr className="rule amber" />
          <div className="pull"> Can a sight like this not be a part of urban living? Do we really have to choose between
            living in urban areas <em>or</em> in nature? </div>
          <div className="pagenum r">112</div>
        </div>
      </div>
    </section>
  );
}
