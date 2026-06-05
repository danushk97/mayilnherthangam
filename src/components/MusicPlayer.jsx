import { useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'
import { assetUrl } from './Polaroid'

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
        {playing ? (
          <span className="music-icon">⏸</span>
        ) : (
          <span className="music-icon">▶</span>
        )}
      </button>
      <span className="music-pill-title">{t.music.title}</span>
    </div>
  )
}
