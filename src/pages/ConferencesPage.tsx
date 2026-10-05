import { PageHero } from '../components/Layout'
import { conferences } from '../content'

export function ConferencesPage() {
  return (
    <>
      <PageHero
        kicker="Events"
        title="Conferences"
        subtitle="GIDIS organizes and technically supports scholarly conferences, workshops, and seminars in digital intelligence, cybersecurity, and related fields."
        image="/images/hero-defence.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6">
          {conferences.map((event) => (
            <article
              key={event.title}
              className="lift rounded-[2rem] border border-line border-l-4 border-l-mint bg-ink-2/60 p-8 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 text-base text-gold">
                <span>{event.dates}</span>
                <span className="text-fog/35">•</span>
                <span>{event.mode}</span>
                <span className="text-fog/35">•</span>
                <span>{event.venue}</span>
              </div>
              <h2 className="headline mt-4 text-3xl text-white md:text-4xl">{event.title}</h2>
              <p className="mt-3 text-base text-mint">{event.support}</p>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-fog/80">{event.blurb}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
