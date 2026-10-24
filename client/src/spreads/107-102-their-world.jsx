import Img from '../images/Img.jsx';

/* SPREAD 102 THEIR WORLD — closing gallery: title bottom-left, scattered collage of Nepal's animals and birds */
const tiles = [
  // Left page cluster (against the spine)
  { slot: 's274', src: '/image_assets/img_0087.jpeg', name: 'Spotted owlets', box: { left: 548, top: 300, width: 210, height: 260 } },
  { slot: 's275', src: '/image_assets/img_0060.jpeg', name: 'Leopard', box: { left: 770, top: 90, width: 380, height: 520 } },
  { slot: 's276', src: '/image_assets/img_0052.jpeg', name: 'Indian peafowl', box: { left: 770, top: 622, width: 380, height: 400 } },
  // Right page cluster
  { slot: 's277', src: '/image_assets/img_0116.jpeg', name: 'Eagle', box: { left: 1170, top: 60, width: 220, height: 200 } },
  { slot: 's278', src: '/image_assets/img_0093.jpeg', name: 'Asian elephants', box: { left: 1170, top: 272, width: 400, height: 500 } },
  { slot: 's279', src: '/image_assets/img_0094.jpeg', name: 'Rhesus macaque', box: { left: 1582, top: 190, width: 210, height: 240 } },
  { slot: 's280', src: '/image_assets/img_0084.jpeg', name: 'One-horned rhino', box: { left: 1582, top: 442, width: 320, height: 330 } },
  { slot: 's281', src: '/image_assets/img_0082.jpeg', name: 'White-throated kingfisher', box: { left: 1914, top: 520, width: 300, height: 252 } },
  { slot: 's282', src: '/image_assets/img_0042.jpeg', name: 'Spotted deer', box: { left: 1170, top: 784, width: 300, height: 320 } },
  { slot: 's283', src: '/image_assets/img_0036.jpeg', name: 'Great hornbill', box: { left: 1482, top: 784, width: 320, height: 430 } },
  { slot: 's284', src: '/image_assets/img_0041.jpeg', name: 'Sarus cranes', box: { left: 1814, top: 784, width: 300, height: 270 } },
  { slot: 's285', src: '/image_assets/img_0044.jpeg', name: 'Ruddy shelducks', box: { left: 1850, top: 1066, width: 230, height: 250 } },
];

export default function Spread107TheirWorld() {
  return (
    <section className="spread tworld" data-screen-label="102 Their world">
      <div className="page left paper">
        <div className="tw-title">
          <p className="tw-its">it’s</p>
          <h2 className="tw-big">Their<br />World</h2>
          <p className="tw-kicker">We are only guests here.</p>
          <p className="tw-intro">From the leopard resting in the canopy to the kingfisher waiting at the river’s edge, every
            creature in these pages was here long before us. This is their forest, their river, their sky — a
            world that asks only for room to remain wild.</p>
        </div>
        <div className="pagenum l">205</div>
      </div>
      <div className="page right paper">
        <div className="pagenum r">206</div>
      </div>
      {tiles.map(({ slot, src, name, box }) => (
        <figure key={slot} className="tw-img" style={{ left: `${box.left}px`, top: `${box.top}px`, width: `${box.width}px`, height: `${box.height}px` }}>
          <Img slot={slot} src={src} alt={name} loading="lazy" />
          <figcaption>{name}</figcaption>
        </figure>
      ))}
    </section>
  );
}
