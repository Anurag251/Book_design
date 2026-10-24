import Img from '../images/Img.jsx';

/* SPREAD 19 BUSTING THE MYTH (text left, placeholder right) */
export default function Spread019BustingTheMyth() {
  return (
    <section className="spread" data-screen-label="19 Busting the myth">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">I · The Tiger Dilemma · Myth vs. Science</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">Myth · Science · Management</span> </div>
          <h3>Busting the myth<br />of the <em>"man-eater"</em>.</h3>
          <div className="body myth-body" style={{ fontSize: "26px", lineHeight: "1.55" }}>
            <h4>The Belief</h4>
            <p>Across South Asia, a common belief persists: once a tiger kills and eats a human, it
              develops a taste for human flesh. Human meat is said to be "salty." This belief is
              powerful but it is a myth.</p>
            <h4>The Science</h4>
            <p>There is no biological evidence that human flesh creates preference in tigers. Healthy
              tigers do not seek humans. Upright posture, noise, and unpredictability make people poor
              prey compared to deer or boar.</p>
            <h4>Why Attacks Repeat</h4>
            <p>Repeated attacks are usually linked to <em>stress and limitation</em>, not taste. Many "man-eaters" are old, injured, or displaced males with broken canines,
              damaged claws, or weakened hunting ability.</p>
            <h4>From Myth to Management</h4>
            <p>Tigers are not changing. <em>Landscapes are.</em> Nepal's challenge is to replace myth with science and fear with planning integrating
              wildlife movement, habitat connectivity, and human safety into development.</p>
          </div>
          <div className="pagenum l">29</div>
        </div>
      </div>
      <div className="page right">
        <div className="fig bleed">
          <Img slot="s34" src="/photos/p15-4.jpg" alt="A tiger's eyes through narrow cage bars in cold low light" />
          <div className="vignette" />
          <div className="overlay-cap">
            <div className="pl">Plate XIII <b>· low light</b></div>
            <div className="tx">Not changed <b>displaced.</b> Most "man-eaters" are old, injured, or pushed out, not hungry for us.</div>
          </div>
        </div>
        <div className="pagenum r img-pn">30</div>
      </div>
    </section>
  );
}
