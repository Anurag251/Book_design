/* SPREAD 4 CONTENTS (text-only, both pages) */
export default function Spread004Contents() {
  return (
    <section className="spread" data-screen-label="04 Contents">
      <div className="page left paper">
        <div className="contents">
          <div className="running-head l">Contents</div>
          <h2><em>Contents</em></h2>
          <div className="sub">a book in four parts</div>
          <div className="toc">
            <div className="part">
              <div className="pnum">Introduction</div>
              <div className="ptitle">From Protection to Coexistence</div>
              <div className="pdesc">Nepal's conservation success and the new questions it creates</div>
            </div>
            <div className="part">
              <div className="pnum">Part I</div>
              <div className="ptitle">Conservation Success Dilemmas</div>
              <div className="pdesc">When protection works and new challenges emerge</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
                <div className="item"><span className="n">i.</span><span className="t">The <em>Tiger</em> Conservation Dilemma From extinction to territorial saturation</span></div>
                <div className="item"><span className="n">ii.</span><span className="t">The <em>Elephant</em> Conservation Dilemma From labor to learning</span></div>
                <div className="item"><span className="n">iii.</span><span className="t">The <em>Conservation Tourism</em> Dilemma When value creation begins to create pressure</span></div>
              </div>
            </div>
          </div>
          <div className="pagenum l">VI</div>
        </div>
      </div>
      <div className="page right paper">
        <div className="contents">
          <div className="running-head r">Contents</div>
          <div className="toc" style={{ marginTop: "60px" }}>
            <div className="part">
              <div className="pnum">Part II</div>
              <div className="ptitle">Coexistence Dilemmas</div>
              <div className="pdesc">Where wildlife and people meet every day</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
                <div className="item"><span className="n">iv.</span><span className="t">The <em>Urban Planning</em> Dilemma Cities, corridors, and invisible ecological boundaries</span></div>
                <div className="item"><span className="n">v.</span><span className="t">The <em>Human–Animal Conflict</em> Dilemma Conflict as a structural outcome of success</span></div>
              </div>
            </div>
            <div className="part">
              <div className="pnum">Part III</div>
              <div className="ptitle">Ethical Dilemmas</div>
              <div className="pdesc">When control replaces coexistence</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
                <div className="item"><span className="n">vi.</span><span className="t">The <em>Zoo</em> Dilemma Conservation, captivity, and conscience</span></div>
              </div>
            </div>
            <div className="part">
              <div className="pnum">Part IV</div>
              <div className="ptitle">The Forward Lens</div>
              <div className="pdesc">Learning from nature, not just managing it</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
                <div className="item"><span className="n">vii.</span><span className="t"><em>Biomimicry</em> Nature as teacher, designer, and guide</span></div>
              </div>
            </div>
          </div>
          <div className="pagenum r">VII</div>
        </div>
      </div>
    </section>
  );
}
