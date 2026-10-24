import Img from '../images/Img.jsx';

/* SPREAD 58 HUMAN-ANIMAL CONFLICT DIVIDER */
export default function Spread070HumanAnimalConflictPostcardOpener() {
  return (
    <section className="spread editorial" data-screen-label="58 Human-Animal Conflict postcard opener">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">A Postcard from Nepal · Part Two</span></div>
          <h2>The Human–<br />Animal <em>Conflict</em></h2>
        </div>
        <div className="ed-lead"> <span className="dc">W</span>here parks end and fields begin, success spills over. The frontline of coexistence is a
          forest edge at dusk shared by those who farm it and those who hunt it. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s176" src="/photos/p13-1.jpg" alt="The forest edge where reserve meets farmland at dusk" />
        </div>
        <div className="pagenum l">131</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s177" src="/photos/p18-1.jpg" alt="An elephant herd moving through the floodplain at dusk" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s178" src="/photos/p14-1.jpg" alt="A village field at the edge of the jungle" />
        </div>
        <div className="ed-essay">
          <div className="kick">Part Two</div>
          <h3>Conflict as a<br />structural <em>outcome</em></h3>
          <p>Crop loss, livestock taken, a year's income erased in a single night. Human–animal
            conflict is not a sign of ecological failure but of ecological success and it now demands
            capable, deliberate management rather than fear.</p>
          <div className="by">Part II · Human–Animal Conflict</div>
        </div>
        <div className="pagenum r">132</div>
      </div>
    </section>
  );
}
