import Img from '../images/Img.jsx';

/* SPREAD 76 BIOMIMICRY DIVIDER — PHOTO BREAK 75· Photo break patterns.
   Bracket layout: accent bar, framed title + big figure across the spine, one photo left, two right */
export default function Spread09375PhotoBreakPatterns() {
  return (
    <section className="spread bracket" data-screen-label="75· Photo break patterns">
      <div className="page l paper">
        <div className="pagenum l">177</div>
      </div>
      <div className="page r paper">
        <div className="pagenum r">178</div>
      </div>

      <div className="bk-bar" />
      <div className="bk-frame" />
      <div className="bk-frame-bottom" />

      <div className="bk-text">
        <h2 className="bk-title">Patterns of <em>the Wild</em></h2>
        <p className="bk-sub">Before every invention, an animal</p>
        <p className="bk-body">Long before engineers sketched their first design, nature was already testing ideas in the
          curve of a hornbill’s beak, the dappled coat of a spotted deer, the patient stride of a nilgai
          through tall grass. Every pattern is a solution, refined and waiting quietly to be read.</p>
      </div>
      <div className="bk-figure">
        <div className="bk-num">3.8<small>bn</small></div>
        <div className="bk-cap">Years of nature’s<br />research &amp; development</div>
      </div>

      <figure className="bk-img" style={{ left: "322px", top: "966px", width: "732px", height: "612px" }}>
        <Img slot="s227" src="/image_assets/img_0047.jpeg" alt="A nilgai grazing in tall grass" loading="lazy" />
      </figure>
      <figure className="bk-img" style={{ left: "1798px", top: "131px", width: "378px", height: "760px" }}>
        <Img slot="s228" src="/image_assets/img_0086.jpeg" alt="An oriental pied hornbill perched on a branch" loading="lazy" />
      </figure>
      <figure className="bk-img" style={{ left: "1249px", top: "966px", width: "927px", height: "612px" }}>
        <Img slot="s229" src="/image_assets/img_0131.jpeg" alt="A spotted deer standing in tall grass" loading="lazy" />
      </figure>
    </section>
  );
}
