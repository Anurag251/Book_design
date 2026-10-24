import Img from '../images/Img.jsx';

/* SPREAD 84 PHOTOS DIVIDER */
export default function Spread104PhotosDivider() {
  return (
    <section className="spread" data-screen-label="84 Photos divider">
      <div className="page left dark">
        <div className="divider-page">
          <div>
            <div className="eyebrow">Closing · A Final Gallery</div>
            <p className="roman" style={{ fontSize: "230px", lineHeight: ".86" }}>Photos</p>
          </div>
          <div>
            <h2 className="heading" style={{ fontSize: "96px" }}>The quiet<br /><em>witnesses</em>.</h2>
            <hr className="rule amber" style={{ margin: "28px 0 0" }} />
            <p className="epigraph"> A closing gallery the creatures and landscapes that make the argument for coexistence more
              eloquently than any essay can. <span className="who">Closing · Photographs</span> </p>
          </div>
          <div className="bot">
            <div className="pgs">Pages 127 131</div>
            <div className="orn" style={{ color: "var(--amber-2)" }}><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>
        <div className="pagenum l img-pn">199</div>
      </div>
      <div className="page right">
        <div className="ggrid">
          <Img slot="s261" src="/image_assets/img_0116.jpeg" alt="A wildlife or landscape frame opening the closing gallery Nepal's quiet witnesses" loading="lazy" />
          <Img slot="s262" src="/image_assets/img_0102.jpeg" alt="A landscape or creature from Nepal's wild the closing gallery, frame two" loading="lazy" />
          <Img slot="s263" src="/image_assets/img_0103.jpeg" alt="A landscape or creature from Nepal's wild the closing gallery, frame three" loading="lazy" />
          <Img slot="s264" src="/image_assets/img_0114.jpeg" alt="A landscape or creature from Nepal's wild the closing gallery, frame four" loading="lazy" />
          <div className="gbar"><span className="gtx">A signature landscape or wildlife frame to open the closing photo gallery.</span></div>
        </div>
        <div className="pagenum r img-pn">200</div>
      </div>
    </section>
  );
}
