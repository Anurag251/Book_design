import Img from '../images/Img.jsx';

/* SPREAD 15 SUPER MALES (text left, 4-up grid right) */
export default function Spread015SuperMales() {
  return (
    <section className="spread editorial" data-screen-label="15 Super males">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">Tiger Dilemma · Super Males</span></div>
          <h2>"<em>Super males</em>"<br />and territory.</h2>
        </div>
        <div className="ed-lead"> <span className="dc">R</span>ising human–tiger encounters in Nepal are increasingly shaped by the dominance of large,
          prime adult tigers not by prey scarcity. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s26" src="/photos/p15-1.jpg" alt="Researcher Savanna at her tripod watching the grassland edge" />
        </div>
        <div className="pagenum l">21</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s27" src="/photos/p15-2.jpg" alt="A tiger moving through open grassland" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s28" src="/photos/p15-3.jpg" alt="Tiger territory at the forest edge" />
        </div>
        <div className="ed-essay">
          <div className="kick">Territory, Not Hunger</div>
          <h3>Conflict by<br /><em>success</em>,<br />not scarcity.</h3>
          <p>A dominant male can hold 60–100 km², overlapping the home ranges of two to four breeding
            females. As tiger populations recover, sub-adult and weaker males are forced out roaming
            into buffer zones, community forests, and agricultural edges. Today's conflict is a
            by-product of recovery.</p>
          <div className="by">Part I · The Tiger Dilemma</div>
        </div>
        <div className="pagenum r">22</div>
      </div>
    </section>
  );
}
