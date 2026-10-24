import Img from '../images/Img.jsx';

/* SPREAD 39 FEWER FOOTPRINTS (text left, placeholder right) */
export default function Spread046FewerFootprints() {
  return (
    <section className="spread amenities" data-screen-label="39 Fewer footprints">
      <div className="page left paper">
        <div className="am-rh">Conservation Tourism · High Value, Low Volume</div>
        <div className="am-L-text">
          <h2 className="am-title">FEWER FOOTPRINTS</h2>
          <div className="am-body">
            <p>Wildlife tourism must balance ecological integrity with economic sustainability. A
              controlled model where fewer guests generate <em>higher per-capita revenue</em> reduces pressure on wildlife while maintaining income for parks, communities, and
              conservation programs.</p>
            <p>Nepal's parks are not simply tourist attractions. They are functioning ecosystems, and
              every vehicle that enters carries an ecological cost. The question is not whether tourism
              belongs here it is whether tourism is willing to accept limits.</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s107" src="/image_assets/img_0036.jpeg" alt="A wildlife encounter in Chitwan few vehicles, soft light, unhurried viewing" loading="lazy" />
        </div>
        <div className="pagenum l">83</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s108" src="/image_assets/img_0041.jpeg" alt="A safari scene in open forest high-value, low-impact wildlife viewing" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title">HIGH VALUE</h2>
          <div className="am-body">
            <p>Volume-driven tourism imposes long-term ecological costs through habitat disturbance,
              altered animal behavior, and increased human–wildlife conflict.</p>
            <p>Tigers habituated to vehicles stop avoiding them. Rhinos abandon open water during peak
              hours. The very animals visitors come to see are slowly reshaped by the act of watching.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s109" src="/image_assets/img_0054.jpeg" alt="The quiet of the forest the moment that low-volume tourism preserves" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title">LOW VOLUME</h2>
          <div className="am-body">
            <p>100 visitors with strict vehicle limits and trained guides cause significantly less
              disturbance than 1,000 under mass tourism. <em>High-value tourism is not elitism it is ecological necessity.</em></p>
            <p>The premium charged is not for exclusivity. It compensates for the cost of doing this well
              smaller groups, slower experiences, stronger protections the only model under which these
              landscapes remain worth visiting.</p>
          </div>
        </div>
        <div className="pagenum r">84</div>
      </div>
    </section>
  );
}
