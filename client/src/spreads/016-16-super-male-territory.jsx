import Img from '../images/Img.jsx';

/* SPREAD 16 SUPER MALE TERRITORY (placeholder left, caption right) */
export default function Spread016SuperMaleTerritory() {
  return (
    <section className="spread" data-screen-label="16 Super male territory">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s29" src="/image_assets/img_0012.jpeg" alt="A tiger barely visible in tall misty grassland at Chitwan, a super male surveying his territory" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
        </div>
        <div className="pagenum l img-pn">23</div>
      </div>
      <div className="page right paper">
        <div className="page-caption">
          <div className="running-head r">I · The Tiger Dilemma</div>
          <div className="plate-no">Plate x</div>
          <div className="lead">Field Note</div>
          <h2 className="ttl">A small kingdom,<br />fiercely <em>defended</em>.</h2>
          <hr className="rule amber" />
          <div className="body"> A super male typically holds compact territories of <em>60–100 km²</em>, smaller but richer than those of average males. Because prey is abundant, super males
            can defend smaller areas more aggressively. By monopolizing prime land and mates, they
            displace younger or weaker males to peripheral, human-dominated landscapes increasing the
            likelihood of human–tiger encounters despite abundant prey. </div>
          <div className="meta">
            <div>
              <div className="k">Super male</div>
              <div className="v">60–100 km²</div>
            </div>
            <div>
              <div className="k">Typical male</div>
              <div className="v">100–150 km²</div>
            </div>
            <div>
              <div className="k">Females overlapped</div>
              <div className="v"><em>3–4 / 1–2</em></div>
            </div>
            <div>
              <div className="k">Density</div>
              <div className="v">~3–5 tigers / 100 km²</div>
            </div>
          </div>
          <div className="pagenum r">24</div>
        </div>
      </div>
    </section>
  );
}
