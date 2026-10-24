import Img from '../images/Img.jsx';

/* SPREAD 50 DEVNAGAR — magazine shoot layout: title + details left, photo grid right */
export default function Spread060Devnagar() {
  return (
    <section className="spread mshoot" data-screen-label="50 Devnagar">
      <div className="page left paper">
        <div className="ms-head">
          <div className="ms-kicker">II · Urban Planning · Field Note</div>
          <h2 className="ms-title">Do we really<br />have to <em>choose?</em> —</h2>
          <p className="ms-intro">Can a sight like this not be a part of urban living? Do we really have to choose between
            living in urban areas <em>or</em> in nature?</p>
          <div className="ms-meta">
            <div><div className="k">Plate</div><div className="v">xxxvii</div></div>
            <div><div className="k">Location</div><div className="v">Devnagar, Bharatpur</div></div>
            <div><div className="k">Chapter</div><div className="v">II · Urban Planning</div></div>
            <div><div className="k">Note</div><div className="v">Wildlife in an everyday street</div></div>
          </div>
        </div>
        <figure className="ms-img ms-wide">
          <Img slot="s146" src="/image_assets/img_0049.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="pagenum l">111</div>
      </div>
      <div className="page right paper">
        <figure className="ms-img ms-hero">
          <Img slot="s147" src="/image_assets/img_0058.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="ms-img ms-pair-a">
          <Img slot="s148" src="/image_assets/img_0127.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="ms-img ms-pair-b">
          <Img slot="s149" src="/image_assets/img_0131.jpeg" alt="" loading="lazy" />
        </figure>
        <div className="pagenum r">112</div>
      </div>
    </section>
  );
}
