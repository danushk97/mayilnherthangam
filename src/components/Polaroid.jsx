export function assetUrl(path) {
  return import.meta.env.BASE_URL + path.split('/').map(encodeURIComponent).join('/')
}

export default function Polaroid({
  src,
  alt,
  caption,
  onClick,
  tilt = 0,
  size = 'md',
  className = '',
  showTape = false,
}) {
  return (
    <button
      type="button"
      className={`polaroid polaroid--${size} ${className}`.trim()}
      style={{ '--tilt': `${tilt}deg` }}
      onClick={onClick}
      aria-label={alt || caption}
    >
      {showTape && <span className="polaroid-tape" aria-hidden="true" />}
      <div className="polaroid-frame">
        <div className="polaroid-photo">
          <img
            src={assetUrl(src)}
            alt={alt || caption}
            loading="lazy"
            onError={(e) => {
              e.target.classList.add('polaroid-img--error')
            }}
          />
          {!caption && (
            <span className="polaroid-zoom" aria-hidden="true">+</span>
          )}
        </div>
        {caption && <p className="polaroid-caption">{caption}</p>}
      </div>
    </button>
  )
}
