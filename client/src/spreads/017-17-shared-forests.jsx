import Img from '../images/Img.jsx';

/* SPREAD 17 SHARED FORESTS (placeholder left, text right) */
export default function Spread017SharedForests() {
  return (
    <section className="spread amenities" data-screen-label="17 Shared forests">
      <div className="page left paper">
        <div className="am-rh">I · The Tiger Dilemma · Conflict Zones</div>
        <div className="am-L-text">
          <h2 className="am-title-serif">Shared<br /><em>Forests</em></h2>
          <div className="am-body-serif">
            <p>The forest is seen as shared and safe until a tiger appears in a space that was never
              meant to be a boundary.</p>
            <p>For communities living along the park edge, the buffer zone is not a conservation tool it
              is a commute. A place to collect firewood, graze cattle, and find the things farmland
              cannot provide. And now it is shared with animals that do not understand maps.</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s30" src="/photos/p15-2.jpg" alt="Buffer-zone villagers wading a wide river with fodder bundles on their backs" loading="lazy" />
        </div>
        <div className="pagenum l">25</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s31" src="/photos/p16-1.jpg" alt="A lone tiger sitting in the open grassland of Chitwan" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title-serif">The<br /><em>Displaced</em></h2>
          <div className="am-body-serif">
            <p>Sub-adult and weaker male tigers, pushed from prime territory, are forced into buffer
              zones, community forests, and forest edges spaces people depend on daily.</p>
            <p>These are not problem animals. They are displaced ones following the only corridors left
              to them, passing through the same shade and water a village child might use on the way to
              school.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s32" src="/image_assets/img_0012.jpeg" alt="A super male tiger in tall grassland" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title-serif">The<br /><em>Conflict</em></h2>
          <div className="am-body-serif">
            <p>Sudden encounters escalate into attacks not due to prey shortage, but stress,
              displacement, and surprise. The shared forest becomes contested ground.</p>
            <p>When conflict occurs, the response is swift and blunt the tiger is captured and caged.
              Rarely is the root cause addressed. The next displaced animal is already moving through
              the undergrowth toward the same edge.</p>
          </div>
        </div>
        <div className="pagenum r">26</div>
      </div>
    </section>
  );
}
