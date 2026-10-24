import Img from '../images/Img.jsx';

/* SPREAD 56 KEY OUTCOMES (text left, placeholder right) */
export default function Spread068DesigningWithNatureOutcomes() {
  return (
    <section className="spread amenities" data-screen-label="56 Designing with nature outcomes">
      <div className="page left paper">
        <div className="am-rh">Urban Planning · Key Outcomes</div>
        <div className="am-L-text">
          <h2 className="am-title">DESIGN<br />WITH<br />NATURE</h2>
          <div className="am-body">
            <p>Less ecological loss: fewer trees cut, corridors intact. Stronger infrastructure: reduced
              landslides, flooding, and long-term maintenance costs.</p>
            <p>The argument for designing with nature has always been framed as an environmental one but
              in Nepal's terrain, where monsoon flooding reshapes landscapes annually, it is equally an
              engineering and economic argument. The forest does not need to be justified by
              biodiversity alone.</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s170" src="/image_assets/img_0065.jpeg" alt="A wildlife corridor intact through the urban fringe fewer trees cut, fewer boundaries drawn" loading="lazy" />
        </div>
        <div className="pagenum l">127</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s171" src="/image_assets/img_0091.jpeg" alt="A naturalistic habitat space resilience preserved rather than engineered" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title">RESILIENCE</h2>
          <div className="am-body">
            <p>Lower conflict: wildlife movement planned, not displaced. Climate-ready cities: natural
              cooling, water absorption, shade built into the design.</p>
            <p>As the Terai heats and monsoons intensify, the urban areas that survive best will be those
              that retained their tree canopy, permeable surfaces, and functional wetlands. Resilience
              is not engineered it is preserved.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s172" src="/image_assets/img_0002.jpeg" alt="A functioning ecosystem the living legacy of designing with rather than against nature" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title">LEGACY</h2>
          <div className="am-body">
            <p>Faster delivery, fewer disputes, smoother approvals. Long-term savings: lower repair and
              disaster costs. <em>A replicable model for fragile landscapes worldwide.</em></p>
            <p>Nepal sits at the intersection of rapid urbanization and irreplaceable biodiversity. The
              choices made here over the next decade will either demonstrate that the two can coexist or
              confirm that they cannot. Either result will be studied for generations.</p>
          </div>
        </div>
        <div className="pagenum r">128</div>
      </div>
    </section>
  );
}
