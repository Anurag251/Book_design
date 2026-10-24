import Img from '../images/Img.jsx';

/* SPREAD 56 KEY OUTCOMES (text left, placeholder right) */
export default function Spread068DesigningWithNatureOutcomes() {
  return (
    <section className="spread amenities" data-screen-label="56 Designing with nature outcomes">
      <div className="page left paper">
        <div className="am-rh">Urban Planning · Key Outcomes</div>
        <div className="am-L-text">
          <h2 className="am-title">DESIGN<br />WITH<br /><em>NATURE</em></h2>
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
        {/* Bottom block: the top block mirrored — photo left, text right — 665px lower (same 38px gap as the right page) */}
        <div className="am-L-text" style={{ top: "767px", left: "755px" }}>
          <h2 className="am-title">FROM<br />SMOKE<br />TO <em>SOIL</em></h2>
          <div className="am-body">
            <p>After the rice (paddy) harvest, farmers often burn the remaining stalks, straw, and stubble
              to prepare their fields for the next crop. Yet what is commonly treated as agricultural
              waste could be a valuable resource. Through sustainable crop residue management, these
              remains can be returned to the soil, composted, used as mulch, or transformed into useful
              products—turning what once went up in smoke into something that nourishes the land and
              supports the next harvest.</p>
          </div>
        </div>
        <div className="am-L-photo" style={{ top: "748px", left: "77px", right: "auto", width: "653px" }}>
          <Img slot="s272" src="/image_assets/img_0065.jpeg" alt="Burnt paddy stubble in a harvested field" loading="lazy" />
        </div>
        <div className="pagenum l">127</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s171" src="/image_assets/img_0091.jpeg" alt="A naturalistic habitat space resilience preserved rather than engineered" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title"><em>RESILIENCE</em></h2>
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
          <h2 className="am-title"><em>LEGACY</em></h2>
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
