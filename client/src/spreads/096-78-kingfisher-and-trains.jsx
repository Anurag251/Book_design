import Img from '../images/Img.jsx';

/* SPREAD 78 KINGFISHER (placeholder left, text right) */
export default function Spread096KingfisherAndTrains() {
  return (
    <section className="spread bio-feature" data-screen-label="78 Kingfisher and trains">
      <div className="page left">
        <div className="bio-hero">
          <Img slot="s237" src="/image_assets/img_0082.jpeg" alt="A white-throated kingfisher perched on driftwood the beak shape that reshaped the bullet train" />
        </div>
        <div className="bio-vert"><span>IV · Biomimicry</span></div>
        <div className="bio-head">
          <div className="pre">The Kingfisher &amp; High-Speed Trains</div>
          <h2>The King<em>fisher</em></h2>
          <div className="tagline">Beak-first, almost no splash. The shape that reshaped the bullet train.</div>
        </div>
        <div className="pagenum l img-pn">183</div>
      </div>
      <div className="page right">
        <div className="bio-R">
          {/* Row 1: image | content */}
          <div className="bio-row r1">
            <div className="bri">
              <Img slot="s238" src="/image_assets/img_0126.jpeg" alt="Observation the kingfisher's beak entering water with almost no splash" loading="lazy" />
            </div>
            <div className="brc">
              <div className="brule" />
              <div className="bk">Observation</div>
              <div className="bq">Beak-first, almost<br />no <em>splash</em>.</div>
              <p className="bt">The kingfisher dives from air into water to catch fish with almost no splash its long,
                narrow beak moving between two mediums with minimal disturbance. This elegant design
                caught the attention of engineers working on Japan's high-speed Shinkansen.</p>
            </div>
          </div>
          {/* Row 2: content | image */}
          <div className="bio-row r2">
            <div className="brc">
              <div className="brule" />
              <div className="bk">Discovery</div>
              <div className="bq">A birdwatcher<br />who changed<br /><em>engineering</em>.</div>
              <p className="bt">Early bullet trains created a loud sonic boom when exiting tunnels at high speed. One lead
                engineer, a birdwatcher, noticed how the kingfisher entered water smoothly. Inspired,
                designers reshaped the train's nose to match the kingfisher's beak.</p>
            </div>
            <div className="bri">
              <Img slot="s239" src="/image_assets/img_0122.jpeg" alt="Discovery the kingfisher shape that inspired the redesign of Japan's bullet train nose" loading="lazy" />
            </div>
          </div>
          {/* Row 3: image | content */}
          <div className="bio-row r3">
            <div className="bri">
              <Img slot="s240" src="/image_assets/img_0123.jpeg" alt="Result less noise, 15% lower energy consumption, higher speed by mimicking the kingfisher's beak" loading="lazy" />
            </div>
            <div className="brc">
              <div className="brule" />
              <div className="bk">Result</div>
              <div className="bq">Less noise. Less<br />energy. Higher<br /><em>speeds</em>.</div>
              <p className="bt">The redesigned nose was a breakthrough quieter tunnels, 15% lower energy consumption, and
                faster travel. A simple observation of a bird's hunting behavior solved a complex
                engineering challenge.</p>
            </div>
          </div>
        </div>
        <div className="pagenum r">184</div>
      </div>
    </section>
  );
}
