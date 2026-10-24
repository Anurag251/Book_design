import Img from '../images/Img.jsx';

/* SPREAD 69 RHINO (placeholder left, caption right) */
export default function Spread084RhinoPlate() {
  return (
    <section className="spread" data-screen-label="69 Rhino plate">
      <div className="page left">
        <div className="fig bleed">
          <Img slot="s210" src="/image_assets/img_0039.jpeg" alt="Two one-horned rhinoceroses seen reflected in a vehicle side mirror during a safari" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Plate xlix - Chitwan</div>
            <div className="tx">Two one-horned rhinoceroses in the vehicle mirror wild recovery, viewed from a managed distance.</div>
          </div>
        </div>
        <div className="pagenum l img-pn">159</div>
      </div>
      <div className="page right paper">
        <div className="page-caption center">
          <div className="running-head r">III · The Zoo Dilemma</div>
          <div className="plate-no">Plate xlix</div>
          <div className="lead">A Crossroads</div>
          <h2 className="ttl">The <em>rhino</em>.</h2>
          <hr className="rule amber" />
          <div className="pull"> Habitat loss, fragmentation, and recovery in isolated pockets have blurred the boundary
            between wild and managed spaces. <em>This places zoos at a crossroads.</em> </div>
          <div className="pagenum r">160</div>
        </div>
      </div>
    </section>
  );
}
