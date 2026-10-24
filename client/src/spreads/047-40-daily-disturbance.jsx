import Img from '../images/Img.jsx';

/* SPREAD 40 DAILY DISTURBANCE (placeholder left, text right) */
export default function Spread047DailyDisturbance() {
  return (
    <section className="spread" data-screen-label="40 Daily disturbance">
      <div className="page left">
        <div className="gv4">
          <Img slot="s110" src="/image_assets/img_0096.jpeg" alt="" loading="lazy" />
          <Img slot="s111" src="/image_assets/img_0072.jpeg" alt="" loading="lazy" />
          <Img slot="s112" src="/image_assets/img_0040.jpeg" alt="" loading="lazy" />
          <Img slot="s113" src="/image_assets/img_0083.jpeg" alt="" loading="lazy" />
          <div className="gbar"><span className="gtx">A rhino in a Chitwan grassland calm, unhurried placed against a single distant jeep.</span></div>
        </div>
        <div className="pagenum l img-pn">85</div>
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
          <div className="pagenum r">86</div>
        </div>
      </div>
    </section>
  );
}
