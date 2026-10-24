import Img from '../images/Img.jsx';

/* SPREAD 5 INTRODUCTION DIVIDER (dark text left, placeholder right) */
export default function Spread005IntroductionPostcardOpener() {
  return (
    <section className="spread editorial" data-screen-label="05 Introduction postcard opener">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">A Postcard from Nepal · Introduction</span></div>
          <h2>From Protection<br />to <em>Coexistence</em></h2>
        </div>
        <div className="ed-lead"> <span className="dc">N</span>epal protected the tiger, the rhino, the elephant and they returned. This is the story of
          what success asks of us next: a country learning to share its own wild. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s4" src="/photos/p20-1.jpg" alt="The floodplain grassland of Chitwan at dawn" />
        </div>
        <div className="pagenum l">1</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s5" src="/photos/p09-1.jpg" alt="A river winding through the lowland forest" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s6" src="/photos/p07-1.jpg" alt="A wild yak grazing on the Himalayan high plateau" />
        </div>
        <div className="ed-essay">
          <div className="kick">The Argument</div>
          <h3>A success with<br /><em>new questions</em></h3>
          <p>Forest cover near 46 percent. Years of zero poaching of the one-horned rhino. A tiger
            population nearly tripled. And then the harder part animals pressing back into a landscape
            full of people. Recovery, it turns out, is not the end of the story but the start of a new
            one.</p>
          <div className="by">Introduction · From Protection to Coexistence</div>
        </div>
        <div className="pagenum r">2</div>
      </div>
    </section>
  );
}
