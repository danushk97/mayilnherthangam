import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'
import { matchesAccessCode } from '../utils/accessCode'
import FallingPetals from './FallingPetals'
import LanguageToggle from './LanguageToggle'

const STORAGE_KEY = 'anniversary-unlocked'

export function isUnlocked() {
  return sessionStorage.getItem(STORAGE_KEY) === '1'
}

export function setUnlocked() {
  sessionStorage.setItem(STORAGE_KEY, '1')
}

export default function CodeGate({ onUnlock }) {
  const { t } = useLanguage()
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (matchesAccessCode(code, siteConfig.accessCodeB64)) {
      setUnlocked()
      onUnlock()
    } else {
      setError(true)
      setTimeout(() => setError(false), 600)
    }
  }

  return (
    <div className="code-gate">
      <FallingPetals />
      <LanguageToggle />
      <div className={`code-gate-card${error ? ' code-gate-card--error' : ''}`}>
        <p className="code-gate-eyebrow">{t.gate.eyebrow}</p>
        <h1 className="code-gate-title">{t.gate.title}</h1>
        <p className="code-gate-sub">{t.gate.subtitle}</p>
        <form className="code-gate-form" onSubmit={submit}>
          <input
            type="password"
            className="code-gate-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={t.gate.placeholder}
            autoComplete="off"
            autoFocus
            aria-label={t.gate.placeholder}
          />
          <button type="submit" className="code-gate-btn">
            {t.gate.button}
          </button>
        </form>
        {error && <p className="code-gate-error">{t.gate.error}</p>}
      </div>
    </div>
  )
}
