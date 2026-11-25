import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

export function VisitContact() {
  const { t } = useTranslation()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      const first = form.querySelector(':invalid') as HTMLElement | null
      first?.focus()
      form.reportValidity()
      return
    }
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const original = btn.textContent
    btn.textContent = t('visit.sentDemo')
    btn.disabled = true
    setTimeout(() => {
      btn.textContent = original
      btn.disabled = false
      form.reset()
    }, 3000)
  }

  return (
    <section id="visit" className="section section-white">
      <div className="container">
        <div className="reveal">
          <p className="section-label">{t('visit.label')}</p>
          <h2 className="section-title">{t('visit.title')}</h2>
          <p className="section-subtitle">{t('visit.subtitle')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card reveal">
            <h3>{t('visit.addrHeading')}</h3>
            <p>
              {t('visit.addrEn')}
              <br />
              {t('visit.addrLo')}
            </p>
            <p style={{ marginTop: '0.6rem' }}>
              <a
                href="https://maps.app.goo.gl/m677wdPWXWP7HRYz5?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--gold-light)', fontWeight: 700 }}
              >
                {t('visit.mapsCta')}
              </a>
            </p>

            <h3>{t('visit.hoursHeading')}</h3>
            <p>{t('visit.hoursVal')}</p>

            <h3>{t('visit.phoneHeading')}</h3>
            <p>
              {t('visit.phoneLabel')} <a href="tel:+8562054350888">020 5435 0888</a>
              <br />
              {t('visit.emailLabel')} <a href="mailto:nanacafecoffee88@gmail.com">nanacafecoffee88@gmail.com</a>
            </p>

            <h3>{t('visit.socialHeading')}</h3>
            <div className="social-row">
              <span className="social-pill">Facebook: NANA CAFÉ Coffee and space</span>
              <span className="social-pill">IG: @nana_cafe88</span>
              <span className="social-pill">TikTok: @nana_cafe_0909</span>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate aria-label="Cafe inquiry form">
            <p className="form-note">{t('visit.demoNote')}</p>

            <div className="form-group">
              <label htmlFor="nana-name">{t('visit.nameLabel')}</label>
              <input id="nana-name" type="text" required placeholder={t('visit.namePlaceholder')} />
            </div>

            <div className="form-group">
              <label htmlFor="nana-contact">{t('visit.contactLabel')}</label>
              <input id="nana-contact" type="text" required placeholder={t('visit.contactPlaceholder')} />
            </div>

            <div className="form-group">
              <label htmlFor="nana-topic">{t('visit.topicLabel')}</label>
              <select id="nana-topic" required>
                <option value="">{t('visit.topicDefault')}</option>
                <option value="table">{t('visit.topicTable')}</option>
                <option value="catering">{t('visit.topicCatering')}</option>
                <option value="space">{t('visit.topicSpace')}</option>
                <option value="feedback">{t('visit.topicFeedback')}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nana-msg">{t('visit.msgLabel')}</label>
              <textarea id="nana-msg" required placeholder={t('visit.msgPlaceholder')} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              {t('visit.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
