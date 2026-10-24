import Img from '../images/Img.jsx';

/* SPREAD 60 CONFLICT AS SUCCESS (placeholder left, text right) */
export default function Spread072ConflictAsSuccess() {
  return (
    <section className="spread amenities" data-screen-label="60 Conflict as success">
      <div className="page left paper">
        <div className="am-rh">Human–Animal Conflict · A Consequence of Success</div>
        <div className="am-L-text">
          <h2 className="am-title">RECOVERY</h2>
          <div className="am-body">
            <p>Nepal's conservation achievements are among the most widely recognized in the world.
              Tigers, rhinos, elephants, and leopards have recovered to levels not seen for decades.</p>
            <p>This recovery required political will, community sacrifice, sustained anti-poaching
              effort, and the kind of long-term institutional commitment that few countries have
              managed. Nepal managed it and the animals came back.</p>
          </div>
        </div>
        <div className="am-L-photo">
          <Img slot="s180" src="/image_assets/img_0099.jpeg" alt="Wildlife returned to the Nepal landscape conservation recovery at scale" loading="lazy" />
        </div>
        <div className="pagenum l">135</div>
      </div>
      <div className="page right paper">
        <div className="am-R1-photo">
          <Img slot="s181" src="/image_assets/img_0105.jpeg" alt="Wildlife moving beyond protected boundaries into community land expansion as consequence of recovery" loading="lazy" />
        </div>
        <div className="am-R1-text">
          <h2 className="am-title">EXPANSION</h2>
          <div className="am-body">
            <p>As wildlife numbers grow and territories expand beyond protected boundaries, encounters
              with people have become more frequent particularly where forests meet farms.</p>
            <p>Elephants raid granaries. Leopards take livestock. Rhinos wander into sugarcane at night.
              These are the predictable results of a wildlife population that has outgrown the
              boundaries drawn around it at the beginning of the recovery.</p>
          </div>
        </div>
        <div className="am-R2-photo">
          <Img slot="s182" src="/image_assets/img_0104.jpeg" alt="A human-animal encounter zone the consequence of ecological success pressing beyond park edges" loading="lazy" />
        </div>
        <div className="am-R2-text">
          <h2 className="am-title">CONSEQUENCE</h2>
          <div className="am-body">
            <p>Human–animal conflict in Nepal is <em>not a sign of ecological failure, but a consequence of ecological success</em> one that now demands capable and deliberate management.</p>
            <p>Managing this transition fairly compensating losses, expanding corridors, building early
              warning systems is not a conservation afterthought. It is the work that determines whether
              the communities who enabled this recovery are willing to continue living alongside the
              animals they brought back.</p>
          </div>
        </div>
        <div className="pagenum r">136</div>
      </div>
    </section>
  );
}
