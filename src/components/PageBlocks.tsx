import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Section({
  kicker,
  title,
  children,
  className = '',
}: {
  kicker?: string
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 md:py-20 ${className}`}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      {title ? <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2> : null}
      {children}
    </section>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-acrs mt-8 max-w-3xl space-y-5 text-xl leading-8 text-white/72">{children}</div>
}

export function CardGrid({
  items,
}: {
  items: { title: string; text?: string; to?: string }[]
}) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const inner = (
          <>
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            {item.text ? <p className="mt-3 text-lg leading-8 text-white/62">{item.text}</p> : null}
          </>
        )
        return item.to ? (
          <Link key={item.title} to={item.to} className="card-surface block p-7 transition hover:border-mint/40">
            {inner}
            <span className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-mint">Learn more</span>
          </Link>
        ) : (
          <article key={item.title} className="card-surface p-7">
            {inner}
          </article>
        )
      })}
    </div>
  )
}

export function ListPanel({ items }: { items: string[] }) {
  return (
    <ul className="mt-10 grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="card-surface px-6 py-4 text-lg text-white/80">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ComingSoon({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="card-surface mt-10 p-8 md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">{title}</p>
      <p className="mt-4 max-w-3xl text-xl leading-8 text-white/72">{text}</p>
    </div>
  )
}
