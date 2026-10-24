import Img from '../images/Img.jsx';

/* SPREAD 27 ELEPHANT DILEMMA DIVIDER — PHOTO BREAK 26· Photo break the elephant's country. One photo across the whole spread */
export default function Spread02926PhotoBreakTheElephant() {
  return (
    <section className="spread" data-screen-label="26· Photo break the elephant's country">
      {/* Removed photo, to restore:
          <Img slot="s60" src="/image_assets/img_0022.jpeg" alt="An elephant's ankles chained at sunset with a young calf standing between the legs" loading="lazy" /> */}
      <div className="page l">
        <div className="pagenum l img-pn">49</div>
      </div>
      <div className="page r">
        <div className="pagenum r img-pn">50</div>
      </div>
      <div className="gfig" style={{ position: "absolute", inset: "0", width: "auto", height: "auto", zIndex: "2" }}>
        <Img slot="s59" src="/image_assets/img_0070.jpeg" alt="A working elephant at the forest edge in Sauraha, older than the road beside it" loading="lazy" />
        <div className="gv" />
      </div>
    </section>
  );
}
