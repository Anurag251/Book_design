import Img from '../images/Img.jsx';

export default function Spread058UrbanPlanningPostcardOpener() {
  return (
    <section className="spread editorial" data-screen-label="48 Urban Planning postcard opener">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">A Postcard from Nepal · Part Two</span></div>
          <h2>The Urban<br />Planning <em>Dilemma</em></h2>
        </div>
        <div className="ed-lead"> <span className="dc">U</span>rban growth rarely pauses to ask how nature can remain central to design. Yet thoughtful
          planning can hold both light and trees, growth and green. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s140" src="/photos/p07-2.jpg" alt="A misty sal-forest road at dawn in the Terai" />
        </div>
        <div className="pagenum l">107</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s141" src="/photos/p10-1.jpg" alt="A spider web strung between branches, nature's own engineering" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s142" src="/photos/p09-1.jpg" alt="A river winding through the lowland forest" />
        </div>
        <div className="ed-essay">
          <div className="kick">Part Two</div>
          <h3>Cities, corridors,<br />and <em>boundaries</em></h3>
          <p>A hundred-year-old tree felled for a steel light-pole nature removed, not integrated. The
            dilemma is not development versus conservation, but whether we are willing to imagine
            cities where nature is part of the plan, not pushed aside by it.</p>
          <div className="by">Part II · Urban Planning</div>
        </div>
        <div className="pagenum r">108</div>
      </div>
    </section>
  );
}
