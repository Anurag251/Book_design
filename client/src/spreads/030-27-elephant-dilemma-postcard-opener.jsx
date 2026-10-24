import Img from '../images/Img.jsx';

export default function Spread030ElephantDilemmaPostcardOpener() {
  return (
    <section className="spread editorial" data-screen-label="27 Elephant Dilemma postcard opener">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">A Postcard from Nepal · Part One</span></div>
          <h2>The <em>Elephant</em><br />Dilemma</h2>
        </div>
        <div className="ed-lead"> <span className="dc">F</span>or centuries the elephant has stood beside us worker, symbol, companion. As the old roles
          fade, Nepal must design a bridge between past practice and future ethics. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s61" src="/photos/p06-1.jpg" alt="A mahout and elephant in the forest at Meghauli, Chitwan" />
        </div>
        <div className="pagenum l">51</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s62" src="/photos/p14-1.jpg" alt="An elephant resting in tall grass" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s63" src="/photos/p12-1.jpg" alt="An elephant calf beside its mother" />
        </div>
        <div className="ed-essay">
          <div className="kick">Part One</div>
          <h3>From labour<br />to <em>learning</em></h3>
          <p>Elephants built Nepal's conservation carrying patrols, guiding visitors, anchoring
            livelihoods. As values shifted, that role rightly came into question. The animals now
            stand in an uncertain middle ground: no longer attractions, not easily wild again.</p>
          <div className="by">Part I · The Elephant Dilemma</div>
        </div>
        <div className="pagenum r">52</div>
      </div>
    </section>
  );
}
