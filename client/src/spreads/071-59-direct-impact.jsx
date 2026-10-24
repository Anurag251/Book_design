import Img from '../images/Img.jsx';

/* SPREAD 59 DIRECT IMPACT (text left, placeholder right) */
export default function Spread071DirectImpact() {
  return (
    <section className="spread" data-screen-label="59 Direct impact">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">II · Human–Animal Conflict · Direct Impact</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">The Human Cost</span> </div>
          <h3>Measured in <em>fatalities</em><br />and injuries.</h3>
          <div className="body">
            <p>The most visible and tragic dimension of this conflict is direct human impact. Over the
              past five years, approximately <em>two hundred people</em> have lost their lives due to encounters with wild animals across Nepal, with some recent
              years recording close to sixty deaths nationwide. Hundreds more are injured annually many
              sustaining long-term physical disability, psychological trauma, or loss of livelihood.</p>
            <p>These incidents are overwhelmingly linked to large mammals particularly rhinoceros,
              tigers, and wild elephants in the Terai, and leopards and bears in hill and forest-fringe
              regions.</p>
            <p>Contrary to common perception, most fatal encounters do not occur deep inside national
              parks. They take place in buffer zones and forest-edge landscapes, often within a
              kilometer of protected areas, during routine activities collecting firewood, grazing
              livestock, farming, or traveling along riverbanks. The pattern is consistent and
              predictable: <em>where daily human movement overlaps with established wildlife routes, the risk of lethal
              encounters rises sharply.</em></p>
          </div>
          <div className="pagenum l">133</div>
        </div>
      </div>
      <div className="page right">
        <div className="fig bleed">
          <Img slot="s179" src="/image_assets/img_0035.jpeg" alt="The edge where forest ends and farmland begins the frontline of human-animal coexistence in Nepal" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">II - Human Animal Conflict</div>
            <div className="tx">Where the forest ends and the field begins. The frontline of coexistence.</div>
          </div>
        </div>
        <div className="pagenum r img-pn">134</div>
      </div>
    </section>
  );
}
