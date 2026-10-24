import Img from '../images/Img.jsx';

export default function Spread086ZoosInNepal() {
  return (
    <section className="spread" data-screen-label="70 Zoos in Nepal">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">III · The Zoo Dilemma · Zoos in Nepal</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Small Scale, Big Questions</span> </div>
          <h3>Two models,<br />one <em>dilemma</em>.</h3>
          <div className="body">
            <p>Unlike many countries, Nepal has never developed a large network of zoological parks. It
              relies on a small number of facilities serving different purposes public education,
              captive care, and species recovery.</p>
            <p>The <em>Central Zoo, Jawalakhel</em> sits within the dense urban fabric of Kathmandu Valley. It offers many Nepalis their first
              encounter with wildlife, yet like many urban zoos is constrained by location. Limited
              space restricts enclosure size and ecological complexity, particularly for wide-ranging
              species.</p>
            <p>The <em>Gharial Breeding Center, Kasara</em> operates on a different logic: breeding, rearing, and releasing gharials into river
              systems, directly linking captive care with wild recovery. Together these reveal the core
              dilemma urban zoos provide access but face welfare constraints; conservation facilities
              prove effective yet remain limited in scope.</p>
          </div>
          <div className="pagenum l">163</div>
        </div>
      </div>
      <div className="page right paper">
        {/* Two stacked photos framed on paper, margins matching the text page */}
        <div style={{ position: "absolute", top: "150px", bottom: "150px", left: "128px", right: "128px", display: "grid", gridTemplateRows: "1fr 1fr", gap: "40px" }}>
          <figure style={{ margin: "0", position: "relative", overflow: "hidden", boxShadow: "0 24px 50px -32px rgba(0,0,0,.55)" }}>
            <Img slot="s218" src="/image_assets/img_0035.jpeg" alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </figure>
          <figure style={{ margin: "0", position: "relative", overflow: "hidden", boxShadow: "0 24px 50px -32px rgba(0,0,0,.55)" }}>
            <Img slot="s219" src="/image_assets/img_0038.jpeg" alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </figure>
        </div>
        <div className="pagenum r">164</div>
      </div>
    </section>
  );
}
