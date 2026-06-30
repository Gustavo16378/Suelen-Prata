import { useEffect, useState } from 'react'

interface SlideshowProps {
  /** Caminhos das imagens que vão passar. */
  images: string[]
  alt: string
  /** Tempo entre as trocas (ms). */
  interval?: number
}

/**
 * Slideshow automático com crossfade — as imagens passam sozinhas, em loop.
 * Respeita "prefers-reduced-motion" (não roda sozinho nesse caso). Mostra
 * bolinhas indicando a posição. Pensado para preencher um container relative.
 */
export default function Slideshow({ images, alt, interval = 4500 }: SlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [images.length, interval])

  return (
    <>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        />
      ))}

      {images.length > 1 && (
        <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '7px', zIndex: 2 }}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Foto ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                width: '8px',
                height: '8px',
                padding: 0,
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: i === index ? 'var(--gold)' : 'rgba(255,255,255,.65)',
                transition: 'background .3s ease',
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}
