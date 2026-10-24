import Img from '../images/Img.jsx';

/* SPREAD 68 ZOO DILEMMA ESSAY (text left, placeholder right) */
export default function Spread083RethinkingSpaceAndPurpose() {
  return (
    <section className="spread" data-screen-label="68 Rethinking space and purpose">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">III · The Zoo Dilemma</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Rethinking Space, Purpose, Relevance</span> </div>
          <h3>Between care<br />and <em>confinement</em>.</h3>
          <div className="body">
            <p><span className="dropcap">Z</span>oos occupy one of the most uneasy positions in modern conservation sitting between care
              and confinement, education and entertainment, protection and control. For generations,
              they have shaped how people encounter wildlife, often becoming the first and only place
              where humans meet species absent from their surroundings.</p>
            <p>Traditional zoo models were built around visibility and containment. Animals were housed
              in compact enclosures designed for observation rather than ecological realism environments
              that ensured survival but rarely supported natural movement, behavior, or social
              complexity.</p>
            <p>The zoo dilemma, then, is not about keeping or closing zoos. It is about <em>redefining their purpose and spatial logic</em>. In an era where coexistence is the central challenge, zoos must decide whether they
              remain places of observation or evolve into spaces that prepare both animals and people
              for living alongside one another.</p>
          </div>
          {/* Fills the space between the text and the bottom margin */}
          <figure style={{ flex: "1", minHeight: "0", margin: "24px 0 0", overflow: "hidden", position: "relative", boxShadow: "0 24px 50px -32px rgba(0,0,0,.55)" }}>
            <Img slot="s206" src="/image_assets/img_0016.jpeg" alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </figure>
          <div className="pagenum l">157</div>
        </div>
      </div>
      {/* Right page: one photo (s207) split across 3 rows inside a 90% area (offsets in book.css).
          Removed photos, to restore:
          <Img slot="s208" src="/image_assets/img_0018.jpeg" alt="" loading="lazy" />
          <Img slot="s209" src="/image_assets/img_0125.jpeg" alt="" loading="lazy" /> */}
      <div className="page right paper rowtrip">
        <figure className="rt-img rt-1">
          <Img slot="s207" src="/image_assets/img_0017.jpeg" alt="" loading="lazy" className="rt-span" />
        </figure>
        <figure className="rt-img rt-2">
          <Img slot="s207" src="/image_assets/img_0017.jpeg" alt="" loading="lazy" className="rt-span" />
        </figure>
        <figure className="rt-img rt-3">
          <Img slot="s207" src="/image_assets/img_0017.jpeg" alt="" loading="lazy" className="rt-span" />
        </figure>
        <div className="pagenum r">158</div>
      </div>
    </section>
  );
}
