import Img from '../images/Img.jsx';

/* SPREAD 7 MEGABIODIVERSITY (placeholder left, text right) */
export default function Spread007Megabiodiversity() {
  return (
    <section className="spread editorial" data-screen-label="07 Megabiodiversity">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">Introduction · Megabiodiversity</span></div>
          <h2>Nepal's<br /><em>Megabiodiversity</em></h2>
        </div>
        <div className="ed-lead"> <span className="dc">N</span>epal's greatest natural advantage lies not in its size, but in its <em>verticality</em> the greatest elevation gradient found anywhere on Earth. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s8" src="/photos/p07-1.jpg" alt="Wild yak grazing on the Himalayan high plateau" />
        </div>
        <div className="pagenum l">5</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s9" src="/photos/p07-2.jpg" alt="Terai monkeys crossing a misty forest road at dawn" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s10" src="/image_assets/img_0001.jpeg" alt="" loading="lazy" />
        </div>
        <div className="ed-essay">
          <div className="kick">A Vertical Country</div>
          <h3>Compressed<br /><em>ecosystems</em>,<br />extraordinary life.</h3>
          <p>Nepal hosts over 6,500 species of flowering plants, nearly 900 bird species, and more than
            200 mammals within just 0.1 percent of the Earth's landmass. This is not an exaggeration;
            it is the accurate ecological reality of the world's most vertical nation.</p>
          <div className="by">Introduction · Nepal's Journey</div>
        </div>
        <div className="pagenum r">6</div>
      </div>
    </section>
  );
}
