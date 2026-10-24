import Img from '../images/Img.jsx';

/* SPREAD 12 SORAYA INTERLUDE (caption left, placeholder right) */
export default function Spread012InterludeEditorial() {
  return (
    <section className="spread editorial" data-screen-label="12 Interlude editorial">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">An Interlude · The Tiger Dilemma</span></div>
          <h2>What are we<br />saving it <em>for?</em></h2>
        </div>
        <div className="ed-lead">A pause in the forest, before the next question. Conservation is not only the rescue of a
          species, it is the quiet promise that the wild will still be standing for whoever comes
          next.</div>
        <div className="ed-photo ed-figL">
          <Img slot="s19" src="/photos/p16-1.jpg" alt="A lone tiger sitting in the open grassland of Chitwan, surrounded by tall green grass" />
        </div>
        <div className="pagenum l">15</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s20" src="/photos/p08-1.jpg" alt="The Rapti river at sunset, a small boat crossing under a golden sky" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s21" src="/photos/p06-1.jpg" alt="A mahout riding an elephant with a calf alongside, moving through forest grassland" />
        </div>
        <div className="ed-essay">
          <div className="kick">Stillness</div>
          <h3>The wild,<br />at its <em>own pace</em></h3>
          <p>Beyond the headlines of capture and conflict, the forest keeps a slower clock. A tiger
            sits in the grass and watches the light move; an elephant walks a path it has walked for
            forty years. This is what conservation is finally for not the animal alone, but the
            standing forest that holds it.</p>
          <div className="by">The Terai · at dawn</div>
        </div>
        <div className="pagenum r">16</div>
      </div>
    </section>
  );
}
