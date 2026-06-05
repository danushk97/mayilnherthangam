import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'
import Polaroid from './Polaroid'

const SCATTER = [
  { tilt: -4, wide: true },
  { tilt: 3, tall: true },
  { tilt: -3 },
  { tilt: 5, wide: true },
  { tilt: -2 },
  { tilt: 4, tall: true },
  { tilt: -5 },
  { tilt: 2, wide: true },
  { tilt: -3 },
  { tilt: 4 },
  { tilt: -2, tall: true },
  { tilt: 3 },
  { tilt: -4, wide: true },
  { tilt: 2 },
  { tilt: -3 },
  { tilt: 5 },
]

const DUO_TILTS = [-2, 2]

export default function MemoryGallery({ photos, onPhotoClick }) {
  const { t } = useLanguage()
  const prioritySet = new Set(siteConfig.priorityPhotos)
  const topPhotos = siteConfig.priorityPhotos
    .map((src) => photos.find((p) => p.src === src))
    .filter(Boolean)
  const restPhotos = photos.filter((p) => !prioritySet.has(p.src))

  const openPhoto = (src) => {
    const idx = photos.findIndex((p) => p.src === src)
    if (idx >= 0) onPhotoClick(idx)
  }

  return (
    <section className="memory-gallery" id="memories">
      <header className="memory-gallery-header">
        <p className="memory-gallery-eyebrow">{t.gallery.eyebrow}</p>
        <h2 className="memory-gallery-title">{t.gallery.title}</h2>
        <p className="memory-gallery-sub">{t.gallery.subtitle}</p>
      </header>

      <div className="memory-top-duo">
        {topPhotos.map((photo, i) => (
          <Polaroid
            key={photo.src}
            className="memory-top-duo__item"
            src={photo.src}
            caption={photo.caption}
            alt={photo.caption}
            onClick={() => openPhoto(photo.src)}
            tilt={DUO_TILTS[i]}
            size="featured"
          />
        ))}
      </div>

      <div className="memory-wall">
        {restPhotos.map((photo, i) => {
          const style = SCATTER[i % SCATTER.length]
          const classes = [
            'memory-wall__item',
            style.wide && 'memory-wall__item--wide',
            style.tall && 'memory-wall__item--tall',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <Polaroid
              key={photo.src}
              className={classes}
              src={photo.src}
              caption={i % 4 === 0 ? photo.caption : undefined}
              alt={photo.caption || t.gallery.viewPhoto(photo.caption)}
              onClick={() => openPhoto(photo.src)}
              tilt={style.tilt}
              size="md"
              showTape={i % 3 === 1}
            />
          )
        })}
      </div>

      <p className="memory-gallery-hint">{t.gallery.hint}</p>
    </section>
  )
}
