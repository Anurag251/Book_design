import Img from '../images/Img.jsx';

export default function Spread090AddressingZooDivider() {
  return (
    <section className="spread" data-screen-label="73 Addressing Zoo divider">
      <div className="page left dark">
        <div className="divider-page">
          <div>
            <div className="eyebrow">Part Three · A Path Forward</div>
            <p className="roman" style={{ fontSize: "192px", lineHeight: ".86" }}>Six<br />Phases</p>
          </div>
          <div>
            <h2 className="heading" style={{ fontSize: "84px" }}>Addressing the<br /><em>Zoo</em> Dilemma.</h2>
            <hr className="rule amber" style={{ margin: "28px 0 0" }} />
            <p className="epigraph"> A deliberate transition from confinement-based display toward landscape-based
              conservation, learning, and coexistence. <span className="who">Part III · A Phase-Wise Path</span> </p>
          </div>
          <div className="bot">
            <div className="pgs">Pages 111 118</div>
            <div className="orn" style={{ color: "var(--amber-2)" }}><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>
        <div className="pagenum l img-pn">171</div>
      </div>
      <div className="page right">
        <div className="ggrid">
          <Img slot="s222" src="/image_assets/img_0039.jpeg" alt="" loading="lazy" />
          <Img slot="s223" src="/image_assets/img_0040.jpeg" alt="" loading="lazy" />
          <Img slot="s224" src="/image_assets/img_0063.jpeg" alt="" loading="lazy" />
          <Img slot="s225" src="/image_assets/img_0071.jpeg" alt="" loading="lazy" />
          <div className="gbar"><span className="gtx">A landscape-scale wildlife reserve seen from a viewing machhan the zoo reimagined.</span></div>
        </div>
        <div className="pagenum r img-pn">172</div>
      </div>
    </section>
  );
}
