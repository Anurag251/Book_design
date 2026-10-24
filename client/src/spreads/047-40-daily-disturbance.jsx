import Img from '../images/Img.jsx';

/* SPREAD 40 DAILY DISTURBANCE (placeholder left, text right) */
export default function Spread047DailyDisturbance() {
  return (
    <section className="spread scrapbook" data-screen-label="40 Daily disturbance">
      {/* Left page uses slide 38's 3-photo collage; the 4th photo (s113) sits below the text on the right page */}
      <div className="page left paper sb-three">
        <figure className="sb-print sb-tall">
          <Img slot="s110" src="/image_assets/img_0096.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="sb-print sb-top">
          <Img slot="s111" src="/image_assets/img_0072.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="sb-print sb-mid">
          <Img slot="s112" src="/image_assets/img_0040.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="pagenum l">85</div>
      </div>
      <div className="page right paper">
        <div className="page-text">
          <div className="running-head r">I · Conservation Tourism · A Dilemma</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Stewardship or Spectacle</span> </div>
          <h3>The tourism<br /><em>dilemma</em>.</h3>
          <div className="body">
            <p>In recent years, Nepal's protected areas have welcomed close to one million visitors
              annually. Chitwan alone attracts more than 300,000 visitors a year averaging over <em>800 people a day</em> entering the forest. In peak seasons, this pressure is concentrated into a few hours,
              zones, and tracks.</p>
            <p>Wildlife does not experience annual statistics. <em>It experiences daily disturbance.</em></p>
            <p>As visitor numbers rise, so do vehicles, noise, dust, and human presence. Tigers are
              increasingly surrounded by convoys of safari jeeps. Elephants alter routes. Rhinos avoid
              open spaces. What begins as admiration slowly becomes intrusion.</p>
          </div>
          <div className="pull"> The challenge is whether conservation tourism can remain true to its purpose <em>as success accelerates</em>. </div>
          {/* Fills the space between the text and the bottom margin */}
          <figure style={{ flex: "1", minHeight: "0", margin: "24px 0 0", overflow: "hidden", position: "relative", boxShadow: "0 24px 50px -32px rgba(0,0,0,.55)" }}>
            <Img slot="s113" src="/image_assets/img_0083.jpeg" alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </figure>
          <div className="pagenum r">86</div>
        </div>
      </div>
    </section>
  );
}
