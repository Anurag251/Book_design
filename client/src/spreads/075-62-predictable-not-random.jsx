import Img from '../images/Img.jsx';

/* SPREAD 62 PREDICTABLE, NOT RANDOM (placeholder left, text right) */
export default function Spread075PredictableNotRandom() {
  return (
    <section className="spread mag-opener" data-screen-label="62 Predictable not random">
      <div className="page left paper">
        <div className="mo-rh">Human–Animal Conflict · The Next Frontier</div>
        <div className="mo-photo-col">
          <Img slot="s188" src="/image_assets/img_0112.jpeg" alt="" loading="lazy" />
        </div>
        <div className="mo-headline-col">
          <h2 className="mo-headline">PREDICT­ABLE<br />NOT<br /><em>RANDOM</em></h2>
          <div className="mo-rule" />
          <div className="mo-body"> Human–animal conflict in Nepal is neither random nor unavoidable. It is spatially
            concentrated, behaviorally patterned, and largely <em>predictable</em>. </div>
        </div>
        <div className="pagenum l img-pn">141</div>
      </div>
      <div className="page right paper">
        <div className="mo-col-L">
          <div className="mo-ph-tall">
            <Img slot="s189" src="/image_assets/img_0113.jpeg" alt="" loading="lazy" />
          </div>
          <div className="mo-ph-sm">
            <Img slot="s190" src="/image_assets/img_0095.jpeg" alt="" loading="lazy" />
          </div>
        </div>
        <div className="mo-context"> <span className="ctx-label">Pattern</span> <p>Conflict between humans and wildlife in Nepal is not random. It is concentrated, seasonal,
          and largely predictable which means it is largely preventable.</p> </div>
        <div className="mo-section-head">Coexistence</div>
        <div className="mo-section-body"> Reducing conflict to zero fatalities is not an unrealistic ideal it is a logical extension
          of the same commitment that once made zero-poaching years possible. <em>This is not a retreat from conservation, but its natural evolution.</em> </div>
        <div className="mo-cap">Fig. The forest–farmland boundary</div>
        <div className="pagenum r">142</div>
      </div>
    </section>
  );
}
