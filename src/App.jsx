import { useMemo, useState } from 'react'
import Hero from './components/Hero'
import MainSection from './components/MainSection'
import ClosingSection from './components/ClosingSection'
import FallingPetals from './components/FallingPetals'
import LanguageToggle from './components/LanguageToggle'
import MusicPlayer from './components/MusicPlayer'
import { assetUrl } from './components/Polaroid'
import { useLanguage } from './i18n/LanguageContext'
import { siteConfig } from './config'

export default function App() {
  const { t } = useLanguage()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const photos = useMemo(
    () =>
      siteConfig.photoFiles.map((src, i) => ({
        src,
        caption: t.photoCaptions[i] ?? '',
      })),
    [t],
  )

  return (
    <div className="app">
      <FallingPetals />
      <LanguageToggle />
      <MusicPlayer />

      <main className="page">
        <Hero />
        <MainSection
          photos={photos}
          onPhotoClick={setLightboxIndex}
        />
        <ClosingSection />
      </main>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  )
}

function Lightbox({ photos, index, onClose, onNavigate }) {
  const { t } = useLanguage()
  const photo = photos[index]
  const prev = () => onNavigate((index - 1 + photos.length) % photos.length)
  const next = () => onNavigate((index + 1) % photos.length)

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label={t.lightbox.close}
      >
        ×
      </button>
      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => { e.stopPropagation(); prev() }}
        aria-label={t.lightbox.previous}
      >
        ‹
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={assetUrl(photo.src)} alt={photo.caption} />
        {photo.caption && <p className="lightbox-caption">{photo.caption}</p>}
        <p className="lightbox-counter">
          {index + 1} / {photos.length}
        </p>
      </div>
      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => { e.stopPropagation(); next() }}
        aria-label={t.lightbox.next}
      >
        ›
      </button>
    </div>
  )
}
