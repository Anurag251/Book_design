import Img from '../images/Img.jsx';

/* SPREAD 1 COVER (postcard style) */
export default function Spread002Cover() {
  return (
    <section className="spread cover" data-screen-label="01 Cover">
      <div className="page left pcb">
        <div className="pc-grain" />
        <div className="pc-frame" />
        <div className="pcb-head">
          <div className="mk">B·B<small>An Independent Conservation Essay</small></div>
          <div className="mk" style={{ textAlign: "right" }}>Vol. I<small>MMXXVI · 212 pages</small></div>
        </div>
        <div className="pcb-divider" />
        <div className="pcb-msg">
          <div className="ts">What happens after conservation succeeds</div>
          <p><span className="cap">N</span>epal protected the tiger, the rhino, the elephant and they came back, bringing a new set
            of questions with them. A quiet meditation on coexistence, restraint, and what we owe the
            wild now that it has returned.</p>
          <div className="sign">from the Terai</div>
        </div>
        <div className="pcb-right">
          <div className="pcb-postmark">CONSERVATION<br />·NEPAL·<br />MMXXVI</div>
          <div className="pcb-isbn">
            <div className="bars" />
            <div className="no">ISBN 978-9937-0-XXXX-X</div>
          </div>
          <div className="pcb-addr">
            <div className="to">A conversation, not a treatise</div>
            <div className="praise">"A small country shaping a big idea for the future of conservation patient, honest, and
              rooted in lived observation."<span className="who">Editorial note</span></div>
          </div>
        </div>
      </div>
      <div className="page right pcf">
        <div className="pc-grain" />
        <div className="pc-frame" />
        <div className="pcf-head"><span>A Postcard from Nepal</span><span>Vol. I · MMXXVI</span></div>
        <div className="pcf-title">
          <div className="kick">An Independent Conservation Essay</div>
          <h1>Addressing<br />Nepal's Wildlife<br /><em>Dilemma</em></h1>
        </div>
        <div className="pcf-card">
          <div className="pic">
            <Img slot="s2" src="/photos/p20-1.jpg" alt="A wild tiger at the edge of the Terai grassland at dusk" />
          </div>
          <div className="cardcap"><span>Greetings from the Wild</span><span>Chitwan · Nepal</span></div>
          <div className="pcf-postmark">NEPAL<br />·2026·</div>
          <div className="pcf-stamp">
            <Img slot="s3" src="/photos/p15-1.jpg" alt="A tiger in the sal forest" />
            <div className="den">रू ५<small>Wildlife · Nepal</small></div>
          </div>
        </div>
        <div className="pcf-foot"><span className="auth">Binayak Basnyat</span><span className="pub">An Independent Essay · Kathmandu</span></div>
      </div>
    </section>
  );
}
