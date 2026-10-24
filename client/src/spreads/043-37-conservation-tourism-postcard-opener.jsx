import Img from '../images/Img.jsx';

export default function Spread043ConservationTourismPostcardOpener() {
  return (
    <section className="spread editorial" data-screen-label="37 Conservation Tourism postcard opener">
      <div className="page left paper">
        <div className="ed-head">
          <div className="tick"><span className="bar" /><span className="ed-kicker">A Postcard from Nepal · Part One</span></div>
          <h2>The Conservation<br />Tourism <em>Dilemma</em></h2>
        </div>
        <div className="ed-lead"> <span className="dc">C</span>onservation tourism rests on a noble promise: that wildlife can be protected by making it
          valuable. Nepal has proven it true and now must keep it true as success accelerates. </div>
        <div className="ed-photo ed-figL">
          <Img slot="s97" src="/photos/p08-1.jpg" alt="The Rapti river at dusk, a boat crossing under a golden sky" />
        </div>
        <div className="pagenum l">77</div>
      </div>
      <div className="page right paper">
        <div className="ed-photo ed-figTall">
          <Img slot="s98" src="/photos/p19-1.jpg" alt="A grey-headed fish eagle watching over the river" />
        </div>
        <div className="ed-photo ed-figWide">
          <Img slot="s99" src="/photos/p17-1.jpg" alt="A rhino grazing in the grassland" />
        </div>
        <div className="ed-essay">
          <div className="kick">Part One</div>
          <h3>When value<br />becomes <em>pressure</em></h3>
          <p>Nearly a million visitors a year; Chitwan alone draws over eight hundred a day. But
            wildlife does not experience annual statistics it experiences daily disturbance. The model
            that funds protection can begin to undermine it.</p>
          <div className="by">Part I · Conservation Tourism</div>
        </div>
        <div className="pagenum r">78</div>
      </div>
    </section>
  );
}
