import Img from '../images/Img.jsx';

const frame = { position: "absolute", margin: "0", overflow: "hidden", boxShadow: "0 24px 50px -32px rgba(0,0,0,.55)" };
const fill = { position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" };

/* SPREAD 70 ZOOS IN NEPAL — COLLAGE C10· Collage behind the glass. Two stacked photos left, one large photo right */
export default function Spread085C10CollageBehindTheGlass() {
  return (
    <section className="spread" data-screen-label="C10· Collage behind the glass">
      {/* Removed photos, to restore:
          <Img slot="s213" src="/image_assets/img_0074.jpeg" alt="" loading="lazy" />
          <Img slot="s215" src="/image_assets/img_0076.jpeg" alt="" loading="lazy" />
          <Img slot="s216" src="/image_assets/img_0077.jpeg" alt="" loading="lazy" />
          <Img slot="s217" src="/image_assets/img_0096.jpeg" alt="" loading="lazy" /> */}
      <div className="page l paper">
        <figure style={{ ...frame, left: "128px", right: "110px", top: "150px", height: "702px" }}>
          <Img slot="s211" src="/image_assets/img_0083.jpeg" alt="" loading="lazy" style={fill} />
        </figure>
        <figure style={{ ...frame, left: "128px", right: "110px", top: "876px", bottom: "150px" }}>
          <Img slot="s212" src="/image_assets/img_0084.jpeg" alt="" loading="lazy" style={fill} />
        </figure>
        <div className="pagenum l">161</div>
      </div>
      <div className="page r paper">
        <figure style={{ ...frame, left: "110px", right: "128px", top: "150px", bottom: "150px" }}>
          <Img slot="s214" src="/image_assets/img_0075.jpeg" alt="" loading="lazy" style={fill} />
        </figure>
        <div className="pagenum r">162</div>
      </div>
    </section>
  );
}
