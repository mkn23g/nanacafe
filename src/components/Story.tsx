import { useTranslation } from 'react-i18next'

export function Story() {
  const { t } = useTranslation()

  return (
    <>
      <div className="pattern-strip" aria-hidden="true" />
      <section id="story" className="section section-white">
        <div className="container story-grid">
          <div className="story-photo reveal">
            <img
              src="/images/nana-13.jpg"
              alt="Fiorenzato espresso grinders with Lao Premium Arabica 100% origin cards at Nana Café"
            />
          </div>

          <div className="reveal">
            <p className="section-label">{t('story.label')}</p>
            <h2 className="section-title">{t('story.title')}</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
              {t('story.desc')}
            </p>

            <div className="roast-cards">
              <div className="roast-card">
                <h4>{t('story.roast1Title')}</h4>
                <p>{t('story.roast1Desc')}</p>
              </div>
              <div className="roast-card">
                <h4>{t('story.roast2Title')}</h4>
                <p>{t('story.roast2Desc')}</p>
              </div>
              <div className="roast-card">
                <h4>{t('story.roast3Title')}</h4>
                <p>{t('story.roast3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
