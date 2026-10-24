import Img from '../images/Img.jsx';

/* SPREAD 13 YOUNG MALE TIGER (placeholder left, caption right) */
export default function Spread013YoungMaleTiger() {
  return (
    <section className="spread amenities" data-screen-label="13 Young male tiger">
      <div className="page left paper">
        <div className="am-rh">I · The Tiger Dilemma</div>
        <div className="am-L-text">
          <h2 className="am-title-serif">From<br /><em>Bardia</em></h2>
          <div className="am-body-serif">
            <p>A young male tiger captured in Bardia, now held at Kasara conservation infrastructure is
              limited and increasingly inadequate.</p>
            <p>He arrived in a wooden crate, sedated and silent. The cage at Kasara was the nearest
              available space. No rehabilitation plan existed. No release date was set. He has been
              waiting ever since not for rescue, but for a decision.</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s22" src="/photos/p13-1.jpg" alt="A young male tiger's eye seen through the bars of a holding cage" loading="lazy" />
        </div>
        <div className="pagenum l">17</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s23" src="/photos/p16-1.jpg" alt="A lone tiger sitting in the open grassland of Chitwan" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title-serif">In the<br /><em>Wild</em></h2>
          <div className="am-body-serif">
            <p>Young male tigers range freely across prime forest. In the wild, they roam buffer zones
              and community forests, avoiding the tight grip of dominant super males.</p>
            <p>Their territories are large and loosely held, shifting with the seasons and the movements
              of prey. They are restless by design built for distance, for searching, for the long and
              uncertain path to dominance.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s24" src="/photos/p15-3.jpg" alt="A Bengal tiger standing inside a concrete holding cage behind iron bars" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title-serif">In a<br /><em>Cage</em></h2>
          <div className="am-body-serif">
            <p>Capture is fast. Rehabilitation is rare. A conservation success becomes a logistics
              problem when there is no plan for what comes after.</p>
            <p>The animal is sedated, crated, and delivered to a facility never built to hold it and may
              remain there for years. The forest does not wait. The tiger's instincts begin to dull. The
              question of what happens next goes unanswered.</p>
          </div>
        </div>
        <div className="pagenum r">18</div>
      </div>
    </section>
  );
}
