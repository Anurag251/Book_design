import Img from '../images/Img.jsx';

/* SPREAD 51 CLEARING NATURE ESSAY (text left, placeholder right) */
export default function Spread061ClearingNature() {
  return (
    <section className="spread amenities" data-screen-label="51 Clearing nature">
      <div className="page left paper">
        <div className="am-rh">Urban Planning · A Design Choice</div>
        <div className="am-L-text">
          <h2 className="am-title">PLAN WITH NATURE</h2>
          <div className="am-body">
            <p>Too often, trees and green cover must be cleared before roads arrive as if nature and
              infrastructure are mutually exclusive. But this is not an inevitability. <em>It is a design choice.</em></p>
            <p>In Nepal's rapidly urbanizing Terai, where corridors between protected areas are narrowing
              year by year, the road built tomorrow will determine the corridor that exists in twenty
              years. Planning is not simply infrastructure it is a form of ecological decision-making.</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s150" src="/image_assets/img_0064.jpeg" alt="The urban-forest edge in the Terai where planning decisions shape the next corridor" loading="lazy" />
        </div>
        <div className="pagenum l">113</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s151" src="/image_assets/img_0010.jpeg" alt="Wildlife at the edge of an urban fringe a tiger or large mammal in the buffer zone" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title">BIOPHILIC URBANISM</h2>
          <div className="am-body">
            <p>Narrower road profiles, permeable surfaces, tree-preserving layouts, green medians
              infrastructure woven through landscapes rather than imposed upon them.</p>
            <p>These are not expensive interventions. In many cases they cost no more than the standard
              approach and in areas prone to flooding and landslide, they are cheaper over time because
              the landscape still does part of the work.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s152" src="/image_assets/img_0064.jpeg" alt="Naturalized space restored to ecological function within an urban setting" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title">RESTORED</h2>
          <div className="am-body">
            <p>Bishan–Ang Mo Kio Park transformed a concrete flood canal into a naturalized river inside
              a public park. Roads remain fully functional, yet the landscape now supports birds, fish,
              insects, and human life at once.</p>
            <p>The lesson is transferable. A naturalized drainage corridor in Bharatpur or Hetauda is not
              a luxury feature it is a functional infrastructure improvement that happens also to give a
              civet or an otter somewhere to move.</p>
          </div>
        </div>
        <div className="pagenum r">114</div>
      </div>
    </section>
  );
}
