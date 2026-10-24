import Img from '../images/Img.jsx';

/* SPREAD 79 RHINO ARMOR — COLLAGE C11· Collage the blueprint.
   Big photo centred over the spine (528–1776), a tall narrow photo each side (376px wide), all full height */
export default function Spread097C11CollageTheBlueprint() {
  return (
    <section className="spread herox" data-screen-label="C11· Collage the blueprint">
      {/* Removed photos, to restore:
          <Img slot="s243" src="/image_assets/img_0047.jpeg" alt="" loading="lazy" />
          <Img slot="s244" src="/image_assets/img_0108.jpeg" alt="" loading="lazy" /> */}
      <div className="page l paper">
        <div className="pagenum l">185</div>
      </div>
      <div className="page r paper">
        <div className="pagenum r">186</div>
      </div>
      <figure className="hx-img" style={{ left: "128px", width: "376px", top: "150px", bottom: "150px" }}>
        <Img slot="s241" src="/image_assets/img_0116.jpeg" alt="" loading="lazy" />
      </figure>
      <figure className="hx-img" style={{ left: "528px", width: "1248px", top: "150px", bottom: "150px" }}>
        <Img slot="s245" src="/image_assets/img_0127.jpeg" alt="A field study in the wild every solution we need is already drawn in nature" loading="lazy" />
      </figure>
      <figure className="hx-img" style={{ right: "128px", width: "376px", top: "150px", bottom: "150px" }}>
        <Img slot="s242" src="/image_assets/img_0123.jpeg" alt="" loading="lazy" />
      </figure>
    </section>
  );
}
