import Img from '../images/Img.jsx';

/* SPREAD 22 BEYOND BORDERS (placeholder left, text right) */
export default function Spread023BeyondBorders() {
  return (
    <section className="spread mag-opener" data-screen-label="22 Beyond Borders">
      <div className="page left paper">
        <div className="mo-rh">From Cages to Corridors · Beyond Borders</div>
        <div className="mo-photo-col">
          <Img slot="s43" src="/image_assets/img_0012.jpeg" alt="A tiger barely visible in misty tall grassland a landscape where tigers were once lost" loading="lazy" />
        </div>
        <div className="mo-headline-col">
          <h2 className="mo-headline">WHERE<br />TIGERS<br />WERE<br /><em>LOST</em></h2>
          <div className="mo-rule" />
          <div className="mo-body"> Across much of Asia, tigers have vanished from landscapes where they once thrived. Nepal's
            conservation success now presents a rare opportunity for <em>holistic conservation</em>. </div>
        </div>
        <div className="pagenum l img-pn">37</div>
      </div>
      <div className="page right paper">
        <div className="mo-col-L">
          <div className="mo-ph-tall">
            <Img slot="s44" src="/image_assets/img_0014.jpeg" alt="" loading="lazy" />
          </div>
          <div className="mo-ph-sm">
            <Img slot="s45" src="/image_assets/img_0016.jpeg" alt="" loading="lazy" />
          </div>
        </div>
        <div className="mo-context"> <span className="ctx-label">Context</span> <p>Nepal holds Asia's fastest-growing wild tiger population a conservation success that now
          has the potential to benefit the entire region.</p> </div>
        <div className="mo-section-head">Restoration</div>
        <div className="mo-section-body"> Nepal and former tiger-range countries can work together to rehabilitate, breed where
          appropriate, and reintroduce tigers into restored habitats transforming <em>surplus into restoration</em>, and national challenges into shared global responsibility. </div>
        <div className="mo-cap">Fig. 2 Passage, not confinement</div>
        <div className="pagenum r">38</div>
      </div>
    </section>
  );
}
