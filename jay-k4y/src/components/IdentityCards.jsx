import '../styles/main.scss';

const cards = [
  {
    title: 'THE NOMAD',
    lore: '"I walk between worlds. Never lost—just unclaimed."',
  },
  {
    title: 'THE WITCH',
    lore: '"Magic isn’t cast. It’s born in blood and rhythm."',
  },
  {
    title: 'THE CROWN',
    lore: '"A throne of thorns. A king without comfort."',
  },
];

export default function IdentityCards() {
  return (
    <section className="identity-section" data-scroll-section>
      <h2 className="section-title">IDENTITIES</h2>
      <div className="card-grid">
        {cards.map((card, i) => (
          <div className="tarot-card" key={i}>
            <div className="tarot-card-inner">
              <div className="tarot-card-front">{card.title}</div>
              <div className="tarot-card-back">{card.lore}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
