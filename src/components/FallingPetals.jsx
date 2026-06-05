import { useMemo } from 'react'

export default function FallingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 14}s`,
        duration: `${12 + Math.random() * 14}s`,
        size: `${10 + Math.random() * 14}px`,
        rotation: `${Math.random() * 360}deg`,
        opacity: 0.25 + Math.random() * 0.35,
        drift: `${-30 + Math.random() * 60}px`,
      })),
    [],
  )

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            '--delay': p.delay,
            '--duration': p.duration,
            '--rotation': p.rotation,
            '--drift': p.drift,
          }}
        />
      ))}
    </div>
  )
}
