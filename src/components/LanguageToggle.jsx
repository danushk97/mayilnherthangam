import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className="lang-toggle"
      role="group"
      aria-label={t.langToggle.label}
      data-lang={lang}
    >
      <span className="lang-toggle-slider" aria-hidden="true" />
      <button
        type="button"
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="lang-dot" aria-hidden="true">·</span>
      <button
        type="button"
        className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
    </div>
  )
}
