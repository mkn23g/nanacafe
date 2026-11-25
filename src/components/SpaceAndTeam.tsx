import { teamMembers } from '../data/cafeData'

export function SpaceAndTeam() {
  return (
    <section id="space" className="section section-dark">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Our Space &amp; People</p>
          <h2 className="section-title">Grand Opening &amp; Hospitality Team</h2>
          <p className="section-subtitle">
            Opened on September 9, 2024 in Ban Haysoke, our team of baristas, chefs,
            and managers is dedicated to warm, attentive service every day.
          </p>
        </div>

        <div className="gallery-grid reveal">
          <figure className="gallery-card">
            <img src="/images/nana-04.jpg" alt="NANA CAFÉ Coffee and Space grand opening ribbon cutting" />
            <figcaption className="gallery-caption">
              Grand Opening Celebration — NANA CAFÉ Coffee &amp; Space, Vientiane
            </figcaption>
          </figure>
          <figure className="gallery-card">
            <img src="/images/nana-01.jpg" alt="Nana Café baristas and front-of-house team" />
            <figcaption className="gallery-caption">
              Our Barista &amp; Service Team — Coffee O'Clock 7:00–18:00 / 19:00
            </figcaption>
          </figure>
          <figure className="gallery-card">
            <img src="/images/nana-12.jpg" alt="Nana Café seasonal event and QR menu" />
            <figcaption className="gallery-caption">
              Seasonal Events &amp; Community Gatherings at Ban Haysoke
            </figcaption>
          </figure>
        </div>

        <div className="reveal">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--gold-light)', marginBottom: '1.25rem' }}>
            Leadership &amp; Operations Team
          </h3>
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div className="team-card" key={i}>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
