import Img from '../images/Img.jsx';

/* SPREAD 20 TRAPPED BY TRIUMPH (placeholder left, caption right) */
export default function Spread020TrappedByTriumph() {
  return (
    <section className="spread amenities" data-screen-label="20 Trapped by triumph">
      <div className="page left paper">
        <div className="am-rh">I · The Tiger Dilemma · Trapped by Triumph</div>
        <div className="am-L-text">
          <h2 className="am-title-serif">Saved.<br /><em>And now what?</em></h2>
          <div className="am-body-serif">
            <p>We brought the tiger back. The forest forgave us. And then it asked us a question we have
              not yet learned how to answer.</p>
            <p>Conservation success is rarely straightforward. The policies that saved the tiger were
              built for scarcity for a world in which the animal was vanishing. They were not designed
              for the world we now inhabit, where the tiger is here, and growing, and pressing against
              every boundary we drew.</p>
            <p>The triumph is real. So is the dilemma it created.</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s35" src="/photos/p20-1.jpg" alt="A tiger's face resting low behind rusted iron bars, watching out" loading="lazy" />
        </div>
        <div className="pagenum l">31</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s36" src="/photos/p15-4.jpg" alt="A tiger's eyes through narrow cage bars in cold low light" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title-serif">What do<br /><em>we owe it</em></h2>
          <div className="am-body-serif">
            <p>Once you save a wild thing, what do you owe it? The question of how conservation success
              translates into lasting wild lives has no easy answer.</p>
            <p>A tiger behind bars is safe from poachers. But safety is not the same as life not for an
              animal built to cover a hundred kilometres a season, to hunt, to hold territory, to move
              through a forest on its own terms. The debt does not end at rescue.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s37" src="/photos/p16-1.jpg" alt="A lone tiger sitting in the open grassland of Chitwan" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title-serif">Conservation<br /><em>vs. Coexistence</em></h2>
          <div className="am-body-serif">
            <p>Conservation is the act of saving. Coexistence is the act of staying long after the
              photographs have stopped and the headlines have moved on.</p>
            <p>It requires patience, not heroism. It is the farmer who rebuilds the fence. The ranger who
              files another report. The community that agrees again to share the forest with something
              that might take a cow, or worse. Coexistence is ordinary, relentless, and mostly
              unremarked.</p>
          </div>
        </div>
        <div className="pagenum r">32</div>
      </div>
    </section>
  );
}
