import Img from '../images/Img.jsx';

/* SPREAD 36 WHAT THE TRUNK TEACHES (text-only, both pages) */
export default function Spread041WhatTheTrunkTeaches() {
  return (
    <section className="spread editorial" data-screen-label="36 What the trunk teaches">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">The Elephant Dilemma · A Closing Note</span></div>
          <h2>What the trunk<br /><em>teaches us</em>.</h2>
        </div>
        <div className="ed-lead"> <span className="dc">T</span>he elephant's trunk is not just an anatomical wonder. It is a lesson in balance power
          without violence, intelligence without domination. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s91" src="/image_assets/img_0066.jpeg" alt="Two elephants with their mahouts crossing a river, texture and movement in water" loading="lazy" />
        </div>
        <div className="pagenum l">73</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s92" src="/image_assets/img_0082.jpeg" alt="A white-throated kingfisher perched on driftwood at the Rapti River at first light" loading="lazy" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s93" src="/image_assets/img_0106.jpeg" alt="The Rapti River landscape at the forest edge, a scene that teaches stillness and listening" loading="lazy" />
        </div>
        <div className="ed-essay">
          <div className="kick">A Closing Note</div>
          <h3>Not controlling<br /><em>listening</em>.</h3>
          <p>If conservation has a future, it may begin here. The elephant dilemma need not end in
            disappearance. With patience, humility, and imagination, Nepal can transform uncertainty
            into leadership where elephants are neither exploited nor abandoned, but recognized as
            teachers of coexistence.</p>
          <div className="by">Closing · The Elephant Dilemma</div>
        </div>
        <div className="pagenum r">74</div>
      </div>
    </section>
  );
}
