import MemoryGallery from './MemoryGallery'
import LetterCard from './LetterCard'

export default function MainSection({ photos, onPhotoClick }) {
  return (
    <section className="main-section">
      <MemoryGallery photos={photos} onPhotoClick={onPhotoClick} />
      <LetterCard />
    </section>
  )
}
