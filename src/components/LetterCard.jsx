import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'

export default function LetterCard() {
  const { t } = useLanguage()

  return (
    <article className="letter-card">
      <span className="letter-quote-mark" aria-hidden="true">"</span>
      <p className="letter-label">{t.letter.label}</p>
      <h2 className="letter-greeting">{t.letter.greeting(siteConfig.herName)}</h2>
      <div className="letter-body">
        {t.letter.paragraphs.map((p, i) =>
          p.quote ? (
            <blockquote key={i} className="letter-blockquote">
              {p.text}
            </blockquote>
          ) : (
            <p key={i}>{p.text}</p>
          ),
        )}
      </div>
      <footer className="letter-signoff">
        <p className="letter-yours">{t.letter.signoff}</p>
        <p className="letter-signature">{t.letter.signature}</p>
      </footer>
    </article>
  )
}
