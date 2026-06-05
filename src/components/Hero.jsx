import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <header className="hero">
      <p className="date-bar">{t.dateBar}</p>
      <h1 className="hero-title">{t.hero.title}</h1>
      <p className="hero-subtitle">{t.hero.subtitle}</p>
      <div className="hero-divider" />
      <p className="hero-dedication">
        {t.hero.dedicationPrefix}{' '}
        <span className="pet-name">{siteConfig.herName}</span>{' '}
        {t.hero.dedicationMid}{' '}
        <span className="pet-name">{siteConfig.petName}</span>
        {t.hero.dedicationEnd}
      </p>
    </header>
  )
}
