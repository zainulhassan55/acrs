import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../content'

export function HeroBackdrop({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {heroSlides.map((item, i) => (
        <img
          key={`${item.src}-${i}`}
          src={`${item.src}?v=2`}
          alt=""
          className={`hero-photo absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? 'is-active opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06101c] from-0% via-[#06101c]/70 via-38% to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06101c]/80 via-transparent to-[#06101c]/25" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        {children}

        <Link
          to={slide.to}
          className="glass lift max-w-md justify-self-end rounded-[1.8rem] p-7 lg:mt-10"
        >
          <p className="kicker">Navigate</p>
          <h2 className="headline mt-3 text-3xl text-white sm:text-4xl">{slide.title}</h2>
          <p className="mt-3 text-lg leading-8 text-fog/85">{slide.text}</p>
          <span className="mt-5 inline-flex rounded-full bg-mint px-5 py-2 text-sm font-semibold text-ink">
            {slide.label} →
          </span>
        </Link>
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/50 text-2xl text-white backdrop-blur-md"
        onClick={() => setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/50 text-2xl text-white backdrop-blur-md"
        onClick={() => setIndex((current) => (current + 1) % heroSlides.length)}
        aria-label="Next image"
      >
        ›
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-9 bg-mint' : 'w-2.5 bg-white/45'
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Show ${item.title}`}
          />
        ))}
      </div>
    </section>
  )
}
