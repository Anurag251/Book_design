import Img from '../images/Img.jsx';

export default function Spread098RhinoNaturalArmor() {
  return (
    <section className="spread bio-feature" data-screen-label="79 Rhino natural armor">
      <div className="page left">
        <div className="bio-hero">
          <Img slot="s246" src="/image_assets/img_0083.jpeg" alt="A one-horned rhinoceros showing its deeply folded natural armor thick, flexible, and impact-ready" />
        </div>
        <div className="bio-vert"><span>IV · Biomimicry</span></div>
        <div className="bio-head">
          <div className="pre">The Rhinoceros · Natural Armor</div>
          <h2>Natural<em>Armor</em></h2>
          <div className="tagline">Thick, deeply folded dermis. Strength and flexibility at once.</div>
        </div>
        <div className="pagenum l img-pn">187</div>
      </div>
      <div className="page right">
        <div className="bio-R">
          {/* Row 1: image | content */}
          <div className="bio-row r1">
            <div className="bri">
              <Img slot="s247" src="/image_assets/img_0116.jpeg" alt="Structure rhinoceros skin showing deeply folded, plate-like armor that retains full flexibility" loading="lazy" />
            </div>
            <div className="brc">
              <div className="brule" />
              <div className="bk">Structure</div>
              <div className="bq">Armor that<br />still <em>moves</em>.</div>
              <p className="bt">The Indian rhinoceros wears a suit of natural armor thick, deeply folded skin forming
                large plates across the shoulders, back, and hindquarters. Yet this armor is not rigid:
                the folds allow the animal to move, run, graze, and fight without losing flexibility.</p>
            </div>
          </div>
          {/* Row 2: content | image */}
          <div className="bio-row r2">
            <div className="brc">
              <div className="brule" />
              <div className="bk">Science</div>
              <div className="bq">Layered, textured,<br />and <em>impact-ready</em>.</div>
              <p className="bt">Scientists have found that the rhino's strength lies not only in skin thickness but in its
                layered, textured composition. The folds distribute pressure and absorb impact, preventing
                damage from concentrated force a principle with no engineering equivalent.</p>
            </div>
            <div className="bri">
              <Img slot="s248" src="/image_assets/img_0084.jpeg" alt="Science layered, textured skin structure that distributes pressure and absorbs impact" loading="lazy" />
            </div>
          </div>
          {/* Row 3: image | content */}
          <div className="bio-row r3">
            <div className="bri">
              <Img slot="s249" src="/image_assets/img_0108.jpeg" alt="Application engineering materials inspired by rhino dermis for impact protection" loading="lazy" />
            </div>
            <div className="brc">
              <div className="brule" />
              <div className="bk">Application</div>
              <div className="bq">Strength and<br />flexibility<br /><em>coexist</em>.</div>
              <p className="bt">Understanding this could inspire flexible body armor for security forces, impact-resistant
                materials for vehicles and helmets, and protective gear for rangers proving that
                protection need not come at the cost of movement.</p>
            </div>
          </div>
        </div>
        <div className="pagenum r">188</div>
      </div>
    </section>
  );
}
