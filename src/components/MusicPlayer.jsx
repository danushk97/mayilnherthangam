import { useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'
import { assetUrl } from './Polaroid'

function PlayIcon() {
  return (
    <svg className="music-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M8 6.5v11l9-5.5-9-5.5z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg className="music-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M7 6h3v12H7V6zm7 0h3v12h-3V6z" />
    </svg>
  )
}

export default function MusicPlayer() {
  const { t } = useLanguage()
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = (e) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <div className="music-pill">
      <audio
        ref={audioRef}
        src={assetUrl(siteConfig.songFile)}
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        className="music-pill-btn"
        onClick={toggle}
        aria-label={playing ? t.music.pause : t.music.play}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <span className="music-pill-title">{t.music.title}</span>
    </div>
  )
}
