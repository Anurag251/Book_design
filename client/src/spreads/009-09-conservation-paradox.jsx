import Img from '../images/Img.jsx';

/* SPREAD 9 CONSERVATION PARADOX (placeholder left, text right) */
export default function Spread009ConservationParadox() {
  return (
    <section className="spread amenities" data-screen-label="09 Conservation paradox">
      <div className="page left paper">
        <div className="am-rh">Introduction · The Conservation Paradox</div>
        <div className="am-L-text">
          <h2 className="am-title-serif">Conservation<br /><em>Paradox</em></h2>
          <div className="am-body-serif">
            <p>Nepal's wildlife dilemma is no longer about preventing loss but about managing its own success.</p>
            <p>For decades, the goal was clear: stop the decline. Now, with forests recovering and
              animals returning in numbers not seen for generations, the country faces a question no
              conservation manual fully anticipated.</p>
            <p>What does it look like when you win?</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s12" src="/photos/p09-1.jpg" alt="A Tibetan gazelle on the high Himalayan plain" loading="lazy" />
        </div>
        <div className="pagenum l">9</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s13" src="/photos/p16-1.jpg" alt="A lone tiger sitting in the open grassland of Chitwan" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title-serif">The<br /><em>Rebound</em></h2>
          <div className="am-body-serif">
            <p>Rhinos surged from under 100 to over 700. Tiger numbers doubled. Forest cover nears 45
              percent. Over 20 percent of Nepal is now protected.</p>
            <p>This is what success looks like on paper and in the field, it is extraordinary. The
              grasslands of Chitwan now hold a density of large mammals that rivals any remaining
              wilderness on earth.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s14" src="/photos/p06-1.jpg" alt="A mahout riding an elephant with a calf, moving through forest grassland" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title-serif">The<br /><em>Spillover</em></h2>
          <div className="am-body-serif">
            <p>Growing wildlife populations now move beyond park boundaries into farmland, villages, and
              corridors an unintended consequence of conservation success.</p>
            <p>A tiger in a rice field is not a failure. It is an animal running out of room. The same
              instincts that make it a remarkable predator make it, inevitably, a neighbour no one asked
              for.</p>
          </div>
        </div>
        <div className="pagenum r">10</div>
      </div>
    </section>
  );
}
