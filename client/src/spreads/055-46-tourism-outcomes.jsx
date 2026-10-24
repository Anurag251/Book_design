import Img from '../images/Img.jsx';

/* SPREAD 46 THE OUTCOME (text left, placeholder right) */
export default function Spread055TourismOutcomes() {
  return (
    <section className="spread amenities" data-screen-label="46 Tourism outcomes">
      <div className="page left paper">
        <div className="am-rh">Conservation Tourism · The Outcome</div>
        <div className="am-L-text">
          <h2 className="am-title">FROM SUCCESS</h2>
          <div className="am-body">
            <p>Budget travelers still experience wildlife meaningfully. Local communities earn more, and
              protect more. Core habitats breathe.</p>
            <p>The shift from volume to value requires new permit systems, community ownership
              structures, and a willingness to hold the line against pressure for growth. Where it has
              been implemented, the results are measurable and durable.</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s132" src="/image_assets/img_0087.jpeg" alt="Conservation success made visible in the wild" loading="lazy" />
        </div>
        <div className="pagenum l">101</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s133" src="/image_assets/img_0110.jpeg" alt="Wildlife behaving naturally unhurried, undisturbed" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title">TO MATURITY</h2>
          <div className="am-body">
            <p>Wildlife behaves naturally. Tourism income rises without crowding. The forest thrives and
              visitors experience something real.</p>
            <p>Animals seen on their own terms, in genuine habitat, at appropriate distance this is a
              fundamentally different experience than a convoy of jeeps surrounding a single sighting.
              Quality of encounter improves as quantity declines.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s134" src="/image_assets/img_0109.jpeg" alt="A pair of hornbills in the Terai forest the forest thriving" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title">THE OUTCOME</h2>
          <div className="am-body">
            <p>Nepal moves from conservation <em>success</em> to conservation <em>maturity</em> a model where the forest thrives, communities prosper, and restraint becomes the highest
              form of respect.</p>
            <p>Other nations are watching. From India's buffer zones to Africa's private conservancies,
              the question of how to run tourism that does not consume what it claims to protect is
              unresolved. Nepal has the ecological wealth and the moment to answer it first.</p>
          </div>
        </div>
        <div className="pagenum r">102</div>
      </div>
    </section>
  );
}
