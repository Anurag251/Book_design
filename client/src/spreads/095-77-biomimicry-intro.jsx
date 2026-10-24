import Img from '../images/Img.jsx';

/* SPREAD 77 BIOMIMICRY INTRO (text left, placeholder right) */
export default function Spread095BiomimicryIntro() {
  return (
    <section className="spread" data-screen-label="77 Biomimicry intro">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">IV · Biomimicry · Learning from Nature's Intelligence</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">A Living Laboratory</span> </div>
          <h3>Wildlife as a source<br />of <em>knowledge</em>.</h3>
          <div className="body">
            <p><span className="dropcap">N</span>epal's wildlife should not only be protected it should be observed as a source of
              knowledge. Nature has spent millions of years solving complex problems: how to move
              efficiently, build resilient structures, communicate across landscapes, and maintain
              balance within ecosystems. The study of learning from these solutions is called <em>biomimicry</em>.</p>
            <p>With ecosystems from the tropical forests of Chitwan to the alpine environments of
              Sagarmatha, Nepal offers an extraordinary living laboratory of natural innovation. Each
              species represents millions of years of refined design.</p>
            <p>A powerful example is the Asian elephant. Engineers at firms such as Festo have studied
              the trunk's muscular hydrostat structure to design flexible robotic arms that grip and
              handle objects with both strength and precision showing how observing wildlife can inspire
              breakthroughs in engineering.</p>
          </div>
          <div className="pagenum l">181</div>
        </div>
      </div>
      <div className="page right">
        <div className="gv4">
          <Img slot="s233" src="/image_assets/img_0082.jpeg" alt="" loading="lazy" />
          <Img slot="s234" src="/image_assets/img_0106.jpeg" alt="" loading="lazy" />
          <Img slot="s235" src="/image_assets/img_0122.jpeg" alt="" loading="lazy" />
          <Img slot="s236" src="/image_assets/img_0126.jpeg" alt="" loading="lazy" />
          <div className="gbar"><span className="gtx">An elephant's trunk in detail beside a hint of a robotic/bionic arm nature meeting engin…</span></div>
        </div>
        <div className="pagenum r img-pn">182</div>
      </div>
    </section>
  );
}
