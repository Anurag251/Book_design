import Img from '../images/Img.jsx';

/* SPREAD 42 GUESTS OF THE WILD DIVIDER */
export default function Spread050GuestsOfTheWildDivider() {
  return (
    <section className="spread" data-screen-label="42 Guests of the Wild divider">
      <div className="page left dark">
        <div className="divider-page">
          <div>
            <div className="eyebrow">Conservation Tourism · A New Model</div>
            <p className="roman" style={{ fontSize: "179px", lineHeight: ".86" }}>Guests<br />of the<br />Wild</p>
          </div>
          <div>
            <h2 className="heading" style={{ fontSize: "92px" }}>A new model for<br /><em>conservation tourism</em>.</h2>
            <hr className="rule amber" style={{ margin: "28px 0 0" }} />
            <p className="epigraph"> The answer is not to close forests or restrict curiosity. It is to redesign how humans
              move through wild spaces layered across landscapes, differentiated by experience, and
              guided by restraint. <span className="who">Conservation Tourism · A Way Forward</span> </p>
          </div>
          <div className="bot">
            <div className="pgs">Pages 76 84</div>
            <div className="orn" style={{ color: "var(--amber-2)" }}><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>
        <div className="pagenum l img-pn">91</div>
      </div>
      <div className="page right">
        <div className="ggrid">
          <Img slot="s119" src="/image_assets/img_0101.jpeg" alt="" loading="lazy" />
          <Img slot="s120" src="/image_assets/img_0088.jpeg" alt="" loading="lazy" />
          <Img slot="s121" src="/image_assets/img_0051.jpeg" alt="" loading="lazy" />
          <Img slot="s122" src="/image_assets/img_0046.jpeg" alt="" loading="lazy" />
          <div className="gbar"><span className="gtx">A single quiet safari moment one jeep, soft light, an unhurried animal. Restraint made v…</span></div>
        </div>
        <div className="pagenum r img-pn">92</div>
      </div>
    </section>
  );
}
