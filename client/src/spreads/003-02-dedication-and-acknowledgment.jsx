/* SPREAD 2–3 MERGED: DEDICATION + ACKNOWLEDGMENT */
export default function Spread003DedicationAndAcknowledgment() {
  return (
    <section className="spread" data-screen-label="02 Dedication &amp; Acknowledgment">
      {/* LEFT dark forest: three sections stacked with space-between */}
      <div className="page left paper ded-merged-left">
        <div className="running-head l" style={{ left: "80px" }}>For my grandfather</div>
        {/* Section 1: top dagger ornament */}
        <div className="ded-top">
          <div className="ded-cross">†</div>
          <div className="ded-ornline"> <span className="dl" /><span className="dd" /><span className="dl" /> </div>
        </div>
        {/* Section 2: enriched B·B seal */}
        <div className="ded-seal">
          <div className="ded-seal-glyph">B·B</div>
          <div className="ded-seal-name">Binayak Basnyat</div>
          <hr className="ded-seal-divline" />
          <div className="ded-seal-label">An Independent<br />Conservation Essay</div>
          <div className="ded-seal-year">Nepal · MMXXVI</div>
        </div>
        {/* Section 3: dedication text */}
        <div className="ded-bottom">
          <hr className="ded-bline" />
          <div className="ded-dedication"> Dedicated to my grandfather,<br /> <span className="ded-name">Mr. Netra B. Basnyat</span>,<br /> whose lifelong service in Nepal's Ministry of Forests<br /> spanned from <em>District Officer</em> to <em>Acting Chief Conservator</em>. </div>
          <div className="ded-sig">Binayak Basnyat</div>
        </div>
        <div className="pagenum l" style={{ left: "80px" }}>II · III</div>
      </div>
      {/* RIGHT paper: full acknowledgment */}
      <div className="page right paper">
        <div className="page-text">
          <div className="running-head r">Acknowledgment</div>
          <div className="eyebrow">Acknowledgment</div>
          <h2>A reflection,<br />and an <em>invitation</em>.</h2>
          <hr className="rule amber" />
          <div className="body">
            <p><span className="dropcap">T</span>his book is both a reflection and an invitation. I would like to acknowledge and thank the
              many conservationists, planners, researchers, community leaders, and practitioners whose
              work often undertaken quietly and over decades has shaped Nepal's remarkable conservation
              journey.</p>
            <p>The issues presented here are not conclusions, but conversation starters. They are offered
              with respect to those who have dedicated their lives to these fields, and with the hope
              that experts across disciplines will engage with, challenge, and expand upon them through
              open dialogue.</p>
            <p>If this work contributes in any way to deeper inquiry, shared learning, and collaborative
              thinking around Nepal's evolving conservation dilemmas, it will have served its purpose.</p>
          </div>
          <div className="pagenum r">IV · V</div>
        </div>
      </div>
    </section>
  );
}
