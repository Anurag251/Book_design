import Img from '../images/Img.jsx';

/* SPREAD 8 WATER TOWER (text left, placeholder right) */
export default function Spread008WaterTower() {
  return (
    <section className="spread" data-screen-label="08 Water tower">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">Introduction · The Water Tower</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Rivers from the Roof of the World</span> </div>
          <h3>The vertical <em>water tower</em><br />powering life from the Himalayas to the Terai.</h3>
          <div className="body">
            <p><span className="dropcap">N</span>epal is often called the water tower of South Asia because, despite its small size, it
              contains around 6,000 rivers and rivulets that descend rapidly from the Himalayas to the
              plains, releasing enormous volumes of freshwater into the subcontinent.</p>
            <p>These waters are organized into four great river basins the <em>Koshi</em> in the east, <em>Gandaki</em> (Narayani) in the center, <em>Karnali</em> in the west, and <em>Mahakali</em> in the far west all originating in snowfields, glaciers, high-altitude lakes, and
              thousands of natural springs.</p>
            <p>This dramatic water gradient fuels Nepal's extraordinary biodiversity. Cold glacial rivers
              support snow trout; powerful mid-hill rivers carry the legendary golden mahseer; warm
              Terai wetlands shelter gharial crocodiles, otters, and the endangered Ganges river dolphin
              one of the few freshwater dolphins on Earth.</p>
          </div>
          <div className="pagenum l">7</div>
        </div>
      </div>
      <div className="page right">
        <div className="fig mount tall onpaper">
          <div className="print"> <span className="pc tl" /><span className="pc tr" /><span className="pc bl" /><span className="pc br" /> <Img slot="s11" src="/photos/p08-1.jpg" alt="Fishermen poling a dugout across the Rapti River at sunset, Chitwan" /> </div>
          <div className="cap">
            <div className="no">Pl. IV</div>
            <div className="txt">
              <div className="loc">Rapti River · Chitwan last light</div>
              <div className="desc">Fishermen pole home as the spring-fed river slows toward the plains.</div>
            </div>
          </div>
        </div>
        <div className="pagenum r img-pn">8</div>
      </div>
    </section>
  );
}
