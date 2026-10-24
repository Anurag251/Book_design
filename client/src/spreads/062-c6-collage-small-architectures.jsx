import Img from '../images/Img.jsx';

/* SPREAD 52 SPIDER WEB — COLLAGE C6· Collage small architectures. Staggered grid: 3 tall photos left, mirrored 2×2 right */
export default function Spread062C6CollageSmallArchitectures() {
  return (
    <section className="spread stagger" data-screen-label="C6· Collage small architectures">
      <div className="page l paper">
        {/* Staggered triptych: one photo (s155) seen through three offset strips (offsets in book.css).
            Removed photos, to restore:
            <Img slot="s153" src="/image_assets/img_0047.jpeg" alt="" loading="lazy" />
            <Img slot="s154" src="/image_assets/img_0086.jpeg" alt="" loading="lazy" /> */}
        <figure className="st-img st-v1">
          <Img slot="s155" src="/image_assets/img_0108.jpeg" alt="" loading="lazy" className="st-span" />
        </figure>
        <figure className="st-img st-v2">
          <Img slot="s155" src="/image_assets/img_0108.jpeg" alt="" loading="lazy" className="st-span" />
        </figure>
        <figure className="st-img st-v3">
          <Img slot="s155" src="/image_assets/img_0108.jpeg" alt="" loading="lazy" className="st-span" />
        </figure>
        <div className="pagenum l">115</div>
      </div>
      <div className="page r paper">
        <figure className="st-img st-a">
          <Img slot="s156" src="/image_assets/img_0127.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="st-img st-b">
          <Img slot="s157" src="/image_assets/img_0111.jpeg" alt="Dense undergrowth in a community forest the overlooked engineering of the forest floor" loading="lazy" />
        </figure>
        <figure className="st-img st-c">
          <Img slot="s268" src="/image_assets/img_0050.jpeg" alt="A path through the community forest" loading="lazy" />
        </figure>
        <figure className="st-img st-d">
          <Img slot="s269" src="/image_assets/img_0011.jpeg" alt="Undergrowth around a forest tree trunk" loading="lazy" />
        </figure>
        <div className="pagenum r">116</div>
      </div>
    </section>
  );
}
