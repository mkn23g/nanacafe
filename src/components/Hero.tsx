import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-badge">{t('hero.badge')}</span>
          <h1>
            {t('hero.titleLine1')}
            <br />
            <span className="accent">{t('hero.titleAccent')}</span>
          </h1>
          <p className="hero-lead">{t('hero.lead')}</p>
          <p className="hero-lao">{t('hero.laoQuote')}</p>
          <div className="hero-cta">
            <a href="#menu" className="btn btn-primary">{t('hero.ctaPrimary')}</a>
            <a href="#visit" className="btn btn-ghost">{t('hero.ctaSecondary')}</a>
          </div>
          <div className="hero-meta">
            <div>
              <strong>{t('hero.hoursLabel')}</strong>
              <span>{t('hero.hoursVal')}</span>
            </div>
            <div>
              <strong>{t('hero.locationLabel')}</strong>
              <span>{t('hero.locationVal')}</span>
            </div>
            <div>
              <strong>{t('hero.hotlineLabel')}</strong>
              <span>020 5435 0888</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo-frame">
            <img
              src="/images/nana-11.jpg"
              alt="Signature iced coffee drinks from NANA CAFÉ Coffee and Space"
            />
          </div>
          <div className="hero-floating-card">
            <strong>{t('hero.floatingTitle')}</strong>
            <span>{t('hero.floatingSub')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
