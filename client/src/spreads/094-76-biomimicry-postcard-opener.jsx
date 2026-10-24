import Img from '../images/Img.jsx';

export default function Spread094BiomimicryPostcardOpener() {
  return (
    <section className="spread editorial" data-screen-label="76 Biomimicry postcard opener">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">A Postcard from Nepal · Part Four</span></div>
          <h2><em>Biomimicry</em></h2>
        </div>
        <div className="ed-lead"> <span className="dc">N</span>ature has been prototyping for four billion years. To learn from it rather than merely
          manage it may be the most hopeful turn conservation can take. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s230" src="/photos/p12-1.jpg" alt="An elephant's trunk in detail, an organ of astonishing complexity" />
        </div>
        <div className="pagenum l">179</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s231" src="/photos/p17-1.jpg" alt="A close study of natural structure and form" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s232" src="/photos/p07-1.jpg" alt="A wild yak on the high plateau, adapted to its world" />
        </div>
        <div className="ed-essay">
          <div className="kick">Part Four</div>
          <h3>Nature as<br /><em>teacher</em></h3>
          <p>The elephant's trunk lifts a tree or a single grain of rice. Engineers study it to build
            bionic arms that marry strength with flexibility. If conservation has a future, it may
            begin here not in controlling nature, but in listening to it.</p>
          <div className="by">Part IV · Biomimicry</div>
        </div>
        <div className="pagenum r">180</div>
      </div>
    </section>
  );
}
