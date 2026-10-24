import Img from '../images/Img.jsx';

export default function Spread082ZooDilemmaPostcardOpener() {
  return (
    <section className="spread editorial" data-screen-label="67 Zoo Dilemma postcard opener">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">A Postcard from Nepal · Part Three</span></div>
          <h2>The <em>Zoo</em><br />Dilemma</h2>
        </div>
        <div className="ed-lead"> <span className="dc">T</span>he zoo asks an old question in a new century: what do we owe the animals we hold? Between
          conservation and conscience lies the work of redesign. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s203" src="/photos/p11-1.jpg" alt="An animal regarding the viewer, care and confinement in one frame" />
        </div>
        <div className="pagenum l">155</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s204" src="/photos/p15-2.jpg" alt="A tiger behind the line of an enclosure" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s205" src="/photos/p15-3.jpg" alt="A quiet enclosure at the edge of the forest" />
        </div>
        <div className="ed-essay">
          <div className="kick">Part Three</div>
          <h3>Captivity,<br />and <em>conscience</em></h3>
          <p>When control replaces coexistence, the question is no longer whether zoos should exist,
            but how they must change to remain relevant places of conservation and learning rather
            than confinement and display.</p>
          <div className="by">Part III · The Zoo Dilemma</div>
        </div>
        <div className="pagenum r">156</div>
      </div>
    </section>
  );
}
