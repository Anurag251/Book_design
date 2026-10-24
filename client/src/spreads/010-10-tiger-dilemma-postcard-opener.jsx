import Img from '../images/Img.jsx';

/* SPREAD 10 TIGER DILEMMA DIVIDER (placeholder left, dark right) */
export default function Spread010TigerDilemmaPostcardOpener() {
  return (
    <section className="spread editorial" data-screen-label="10 Tiger Dilemma postcard opener">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">A Postcard from Nepal · Part One</span></div>
          <h2>The <em>Tiger</em><br />Dilemma</h2>
        </div>
        <div className="ed-lead"> <span className="dc">F</span>rom the brink of extinction to the pressure of plenty. The animal we worked hardest to
          save now presses against the very edges of our world and asks what comes after rescue. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s15" src="/photos/p16-1.jpg" alt="A wild Bengal tiger sitting in open Terai grassland" />
        </div>
        <div className="pagenum l">11</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s16" src="/photos/p13-1.jpg" alt="The forest edge where reserve meets farmland" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s17" src="/photos/p11-1.jpg" alt="Tiger tracks along a territory line" />
        </div>
        <div className="ed-essay">
          <div className="kick">Part One</div>
          <h3>From extinction<br />to <em>saturation</em></h3>
          <p>Just over 120 tigers in 2010; more than 350 today. It is the conservation success of a
            generation and the reason a young male, finding no territory of his own, now turns toward
            the village edge. This is the dilemma of plenty.</p>
          <div className="by">Part I · The Tiger Dilemma</div>
        </div>
        <div className="pagenum r">12</div>
      </div>
    </section>
  );
}
