import Img from '../images/Img.jsx';

/* SPREAD 32 TRUNK BIOMIMICRY (text left, placeholder right) */
export default function Spread036TrunkBiomimicry() {
  return (
    <section className="spread editorial" data-screen-label="32 Trunk biomimicry">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">Elephant Dilemma · Biomimicry</span></div>
          <h2>How elephants inspire<br /><em>design</em>.</h2>
        </div>
        <div className="ed-lead"> <span className="dc">I</span>n biomimicry the practice of learning from nature the elephant's trunk has become a source
          of global fascination, studied to develop next-generation robotic and bionic systems. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s79" src="/image_assets/img_0081.jpeg" alt="" loading="lazy" />
        </div>
        <div className="pagenum l">63</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s80" src="/image_assets/img_0128.jpeg" alt="" loading="lazy" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s81" src="/image_assets/img_0129.jpeg" alt="" loading="lazy" />
        </div>
        <div className="ed-essay">
          <div className="kick">Learning from the Trunk</div>
          <h3>Partners in<br /><em>learning</em>,<br />not display.</h3>
          <p>Domesticated elephants like Shyam Kali and Top Prasad make close observation possible.
            This opens an important reframing: elephants as partners in learning protected, respected,
            and recognized as teachers of innovation rather than relics of the past.</p>
          <div className="by">The Elephant Dilemma</div>
        </div>
        <div className="pagenum r">64</div>
      </div>
    </section>
  );
}
