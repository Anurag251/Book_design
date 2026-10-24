import Img from '../images/Img.jsx';

/* SPREAD 47 RUDDY SHELDUCK (placeholder left, caption right) */
export default function Spread056WhiteThroatedKingfisher() {
  return (
    <section className="spread" data-screen-label="47 White-throated Kingfisher">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s135" src="/image_assets/img_0082.jpeg" alt="A white-throated kingfisher perched on bleached driftwood beside the Rapti River" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Plate xxxv - Rapti River</div>
            <div className="tx">A white-throated kingfisher perched on bleached driftwood. Still, vivid, perfectly placed.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">103</div>
      </div>
      <div className="page right paper">
        <div className="page-caption center">
          <div className="running-head r">I · Conservation Tourism · Coda</div>
          <div className="plate-no">Plate xxxv</div>
          <div className="lead">Still Hunter</div>
          <h2 className="ttl">The white-throated<br /><em>kingfisher</em>.</h2>
          <hr className="rule amber" />
          <div className="pull"> The white-throated kingfisher does not chase it waits, watches, and strikes with
            precision. On the Rapti's driftwood perches, it is the river's most brilliant sentinel. <em>A bird that rewards patience in those who look.</em> </div>
          <div className="pagenum r">104</div>
        </div>
      </div>
    </section>
  );
}
