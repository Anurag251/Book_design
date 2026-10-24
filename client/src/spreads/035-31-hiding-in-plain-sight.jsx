import Img from '../images/Img.jsx';

/* SPREAD 31 HIDING IN PLAIN SIGHT (placeholder left, caption right) */
export default function Spread035HidingInPlainSight() {
  return (
    <section className="spread journal" data-screen-label="31 Hiding in plain sight">
      <div className="page left paper">
        <div className="running-head l">I · The Elephant Dilemma · Fun Fact</div>
        <div className="page-caption jr-text">
          <div className="plate-no">Plate xxiii</div>
          <div className="lead">A Curious Detail</div>
          <h2 className="ttl">Hiding<br />in <em>plain sight</em>.</h2>
          <hr className="rule amber" />
          <div className="body"> A domesticated elephant disappears behind its favorite cover towering elephant grass.
            Elephants can eat up to <em>150 kg of grass a day</em> and use tall grass both as food and as natural camouflage, proving that even the largest
            land animal on Earth knows how to <em>hide in plain sight</em>. </div>
        </div>
        <figure className="jr-fig jr-portrait">
          <Img slot="s76" src="/image_assets/img_0027.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="page-caption jr-meta">
          <div className="meta">
            <div>
              <div className="k">Daily forage</div>
              <div className="v"><em>Up to 150 kg</em></div>
            </div>
            <div>
              <div className="k">Cover</div>
              <div className="v">Elephant grass</div>
            </div>
            <div>
              <div className="k">Use</div>
              <div className="v">Food &amp; camouflage</div>
            </div>
            <div>
              <div className="k">Lesson</div>
              <div className="v"><em>Adaptation</em></div>
            </div>
          </div>
        </div>
        <div className="pagenum l">61</div>
      </div>
      <div className="page right paper">
        <figure className="jr-fig jr-land jr-land-a"> <Img slot="s77" src="/image_assets/img_0020.jpeg" alt="" loading="lazy" /> <span className="jr-date">Elephant grass</span> </figure>
        <figure className="jr-fig jr-land jr-land-b"> <Img slot="s78" src="/image_assets/img_0048.jpeg" alt="" loading="lazy" /> <span className="jr-date">Food &amp; camouflage</span> </figure>
        <div className="pagenum r">62</div>
      </div>
    </section>
  );
}
