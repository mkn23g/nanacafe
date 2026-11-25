import { useTranslation } from 'react-i18next'
import { teamMembers } from '../data/cafeData'

export function SpaceAndTeam() {
  const { t } = useTranslation()

  return (
    <section id="space" className="section section-dark">
      <div className="container">
        <div className="reveal">
          <p className="section-label">{t('space.label')}</p>
          <h2 className="section-title">{t('space.title')}</h2>
          <p className="section-subtitle">{t('space.subtitle')}</p>
        </div>

        <div className="gallery-grid reveal">
          <figure className="gallery-card">
            <img src="/images/nana-04.jpg" alt="NANA CAFÉ Coffee and Space grand opening ribbon cutting" />
            <figcaption className="gallery-caption">{t('space.cap1')}</figcaption>
          </figure>
          <figure className="gallery-card">
            <img src="/images/nana-01.jpg" alt="Nana Café baristas and front-of-house team" />
            <figcaption className="gallery-caption">{t('space.cap2')}</figcaption>
          </figure>
          <figure className="gallery-card">
            <img src="/images/nana-12.jpg" alt="Nana Café seasonal event and QR menu" />
            <figcaption className="gallery-caption">{t('space.cap3')}</figcaption>
          </figure>
        </div>

        <div className="reveal">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--gold-light)', marginBottom: '1.25rem' }}>
            {t('space.teamHeading')}
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
