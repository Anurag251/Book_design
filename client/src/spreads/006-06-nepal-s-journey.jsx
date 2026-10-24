import Img from '../images/Img.jsx';

/* SPREAD 6 NEPAL'S JOURNEY  (text left, placeholder right) */
export default function Spread006NepalSJourney() {
  return (
    <section className="spread" data-screen-label="06 Nepal's journey">
      <div className="page left paper">
        <div className="page-text">
          <div className="running-head l">Introduction · From Protection to Coexistence</div>
          <div className="kicker"> <span className="orn"><span className="dot" /></span> <span className="small-caps">From Development to Conservation</span> </div>
          <h3>Nepal's journey from development challenges<br />to <em>conservation leadership</em>.</h3>
          <div className="body">
            <p><span className="dropcap">N</span>epal is often described through the lens of economic limitation, ranking around 103rd
              globally in terms of GDP. Yet this narrow measure obscures a far more important story.
              While Nepal may lag economically, it stands among the world's most compelling conservation
              leaders.</p>
            <p>Through community forestry and inclusive conservation models, forest cover has rebounded
              to nearly 46 percent of the country. Wildlife efforts have delivered equally striking
              results: multiple consecutive years of zero poaching of the one-horned rhinoceros, and a
              near-tripling of the Bengal tiger population from just over 120 individuals in 2010 to
              more than 350 today.</p>
            <p>These successes, however, have created a new and more complex challenge. As tiger,
              elephant, and rhino populations recover, their expanding ranges increasingly overlap with
              human settlements, agriculture, and infrastructure.</p>
          </div>
          <div className="pagenum l">3</div>
        </div>
      </div>
      <div className="page right">
        <div className="fig mount onpaper">
          <div className="print"> <span className="pc tl" /><span className="pc tr" /><span className="pc bl" /><span className="pc br" /> <Img slot="s7" src="/photos/p06-1.jpg" alt="" /> </div>
        </div>
        <div className="pagenum r img-pn">4</div>
      </div>
    </section>
  );
}
