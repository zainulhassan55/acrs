import { Link } from 'react-router-dom'
import { HeroBackdrop } from '../components/HeroGallery'
import { CardGrid } from '../components/PageBlocks'
import { conferences, focusAreas, society } from '../content'

export function HomePage() {
  return (
    <>
      <HeroBackdrop>
        <div>
          <p className="inline-flex rounded-full border border-white/15 bg-ink/40 px-4 py-1.5 text-sm tracking-[0.22em] text-mint uppercase backdrop-blur-md">
            Global professional institute
          </p>
          <h1 className="headline mt-7 text-4xl text-white sm:text-6xl lg:text-[4.4rem]">
            Global Institute
            <span className="mt-2 block bg-gradient-to-r from-mint to-sky bg-clip-text text-transparent">
              for Digital Intelligence and Security
            </span>
          </h1>
          <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-gold md:text-3xl">
            {society.tagline}
          </p>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-fog/90">
            GIDIS is an international professional institute dedicated to advancing research,
            education, collaboration, and professional development in digital intelligence,
            cybersecurity, and related areas of science, engineering, and technology.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/membership/apply"
              className="rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink"
            >
              JOIN GIDIS
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-white/20 bg-ink/35 px-7 py-3.5 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10"
            >
              EXPLORE OUR ACTIVITIES
            </Link>
          </div>
        </div>
      </HeroBackdrop>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <p className="kicker">About GIDIS</p>
        <h2 className="headline mt-4 max-w-4xl text-4xl text-white md:text-5xl">
          A global community for intelligent and secure digital systems
        </h2>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/72">
          GIDIS brings together researchers, academicians, industry professionals, students, and
          institutions working across artificial intelligence, cybersecurity, data science,
          intelligent systems, and digital technologies. The Institute exists to strengthen
          international collaboration, professional recognition, and scholarly exchange.
        </p>
        <Link to="/about" className="mt-8 inline-flex text-lg font-semibold text-mint">
          Learn more about GIDIS →
        </Link>
      </section>

      <section className="border-y border-line bg-ink-2/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="kicker">Focus areas</p>
          <h2 className="headline mt-4 max-w-4xl text-4xl text-white md:text-5xl">
            Fields that define our work
          </h2>
          <CardGrid items={focusAreas} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">Events</p>
            <h2 className="headline mt-4 text-4xl text-white md:text-5xl">Upcoming conferences</h2>
          </div>
          <Link to="/events/conferences" className="text-lg font-semibold text-mint">
            All conferences →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {conferences.slice(0, 4).map((event) => (
            <article key={event.title} className="card-surface border-l-4 border-mint p-8">
              <p className="text-base text-gold">
                {event.dates} · {event.mode}
              </p>
              <h3 className="headline mt-4 text-2xl text-white">{event.title}</h3>
              <p className="mt-3 text-lg text-white/55">{event.venue}</p>
              <p className="mt-4 text-lg leading-8 text-white/72">{event.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="card-surface overflow-hidden p-10 md:p-16">
          <p className="kicker">Join the Institute</p>
          <h2 className="headline mt-4 text-4xl text-white md:text-5xl">Become a member</h2>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/72">
            Membership is open to students, professionals, researchers, and institutions. Advanced
            grades are awarded on merit.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/membership/apply" className="rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink">
              Apply for membership
            </Link>
            <Link to="/contact" className="rounded-full border border-line px-7 py-3.5 text-lg font-semibold text-white">
              Contact GIDIS
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
