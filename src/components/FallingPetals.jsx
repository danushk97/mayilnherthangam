import { useMemo } from 'react'

const CLOVER = `${import.meta.env.BASE_URL}clover.png`

export default function FallingPetals() {
  const clovers = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 14}s`,
        duration: `${12 + Math.random() * 14}s`,
        size: `${18 + Math.random() * 22}px`,
        rotation: `${Math.random() * 360}deg`,
        opacity: 0.35 + Math.random() * 0.45,
        drift: `${-40 + Math.random() * 80}px`,
      })),
    [],
  )

  return (
    <div className="petals" aria-hidden="true">
      {clovers.map((c) => (
        <span
          key={c.id}
          className="falling-clover"
          style={{
            left: c.left,
            width: c.size,
            height: c.size,
            opacity: c.opacity,
            '--clover-mask': `url(${CLOVER})`,
            '--delay': c.delay,
            '--duration': c.duration,
            '--rotation': c.rotation,
            '--drift': c.drift,
          }}
        />
      ))}
    </div>
  )
}
