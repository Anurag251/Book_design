import Img from '../images/Img.jsx';

/* SPREAD 23 PHASE 1 REHABILITATION (text left, placeholder right) */
export default function Spread024Phase1Rehabilitation() {
  return (
    <section className="spread editorial" data-screen-label="23 Phase 1 Rehabilitation">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">Cages to Corridors · Phase One</span></div>
          <h2>Phase One<br /><em>Rehabilitation</em></h2>
        </div>
        <div className="ed-lead"> <span className="dc">T</span>he first step is to redefine what captivity means to move from a cage to a forested
          enclosure where tigers can <em>re-learn to be wild</em>. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s46" src="/image_assets/img_0069.jpeg" alt="A tiger lying on the tiled floor of a barred concrete cage" loading="lazy" />
        </div>
        <div className="pagenum l">39</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s47" src="/image_assets/img_0125.jpeg" alt="A tiger in an open forested enclosure, showing space and natural movement during rehabilitation" loading="lazy" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s48" src="/image_assets/img_0008.jpeg" alt="A tiger's eye visible through the bars of a cage" loading="lazy" />
        </div>
        <div className="ed-essay">
          <div className="kick">Re-wilding</div>
          <h3>Returning the wild<br />to <em>captive tigers</em>.</h3>
          <p>Tigers selected for rehabilitation are housed in expansive forested enclosures not cages
            that allow them to relearn hunting, establish territories, and restore natural behavior.
            The goal is not taming, but <em>re-wilding</em>: assessing whether an individual can survive independently and avoid people.</p>
          <div className="by">Phase I · Rehabilitation</div>
        </div>
        <div className="pagenum r">40</div>
      </div>
    </section>
  );
}
