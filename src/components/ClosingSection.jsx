import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'

export default function ClosingSection() {
  const { t } = useLanguage()

  return (
    <section className="closing">
      <p className="closing-line">{t.closing.line}</p>
      <p className="closing-location">{siteConfig.location}</p>
    </section>
  )
}
