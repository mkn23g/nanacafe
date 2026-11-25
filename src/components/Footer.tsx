import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>
          <strong>NANA CAFÉ — Coffee &amp; Space</strong> · {t('footer.line1Prefix')}
          <strong>Pathoumvanh Group</strong>
        </p>
        <p style={{ marginTop: '0.35rem' }}>{t('footer.line2')}</p>
        <p style={{ marginTop: '0.6rem' }}>
          <a href="#hero">{t('footer.backToTop')}</a>
        </p>
      </div>
    </footer>
  )
}
