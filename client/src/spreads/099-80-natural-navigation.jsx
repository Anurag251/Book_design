import Img from '../images/Img.jsx';

/* SPREAD 80 MIGRATORY BIRDS — panorama layout: one wide photo across the top, text below */
export default function Spread099NaturalNavigation() {
  return (
    <section className="spread pano" data-screen-label="80 Natural navigation">
      {/* Removed photos, to restore:
          <Img slot="s251" src="/image_assets/img_0116.jpeg" alt="" loading="lazy" />
          <Img slot="s252" src="/image_assets/img_0103.jpeg" alt="" loading="lazy" />
          <Img slot="s253" src="/image_assets/img_0033.jpeg" alt="" loading="lazy" /> */}
      <div className="page left paper">
        <div className="pn-title">
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">The Migratory Wisdom of Himalayan Birds</span> </div>
          <h3>Maps written<br />in <em>instinct</em>.</h3>
        </div>
        <div className="pagenum l">189</div>
      </div>
      <div className="page right paper">
        <div className="running-head r">IV · Biomimicry · Natural Navigation</div>
        <div className="pn-body">
          <p>Migratory birds such as the bar-headed goose and ruddy shelduck travel thousands of
            kilometers each year, often flying over the Himalayas above 8,000 meters higher than many
            aircraft routes. They complete these journeys without maps, instruments, or GPS.</p>
          <p>Research suggests they use multiple cues at once: sensing the Earth's magnetic field as an
            internal compass, navigating by sun and stars, polarized light, and visual memory of
            rivers and mountains. Some studies suggest proteins in their eyes may let them <em>detect magnetic fields</em> directly.</p>
          <p>Understanding this could inspire GPS-independent navigation for aircraft, drones, and
            autonomous vehicles. <em>The skies above Nepal are not only migration corridors, but pathways of scientific discovery.</em></p>
        </div>
        <div className="pagenum r">190</div>
      </div>
      <figure className="pn-img">
        <Img slot="s250" src="/image_assets/img_0085.jpeg" alt="" loading="lazy" />
      </figure>
    </section>
  );
}
