import { Link } from 'react-router-dom'
import { HeroBackdrop } from '../components/HeroGallery'
import { conferences, membershipPlans, nav, researchAreas, society } from '../content'

const stats = [
  { label: 'Focus areas', value: 'AI + Cybersecurity' },
  { label: 'Student chapters', value: 'Campus-led' },
  { label: 'Fellow recognition', value: 'Merit-based' },
  { label: 'Headquarters', value: society.hq },
]

const quickNav = nav.filter((item) => item.to !== '/')

export function HomePage() {
  return (
    <>
      <HeroBackdrop>
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-ink/40 px-4 py-1.5 text-sm tracking-[0.22em] text-mint uppercase backdrop-blur-md">
              Artificial intelligence · Cyber defence · Research
            </p>
            <h1 className="headline mt-7 text-5xl text-white sm:text-7xl lg:text-[5.4rem]">
              AI & Cybersecurity
              <span className="mt-2 block bg-gradient-to-r from-mint to-sky bg-clip-text text-transparent">
                Research Society
              </span>
            </h1>
            <p className="mt-5 font-serif text-3xl text-gold">{society.shortName}</p>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-fog/90">
              ACRS is a non-profit scientific society for institutions, labs, researchers,
              scientists, academicians, scholars, students, and industry professionals working at
              the meeting point of artificial intelligence and cybersecurity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink"
              >
                Join ACRS
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/20 bg-ink/35 px-7 py-3.5 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10"
              >
                Explore the society
              </Link>
            </div>
          </div>
      </HeroBackdrop>

      <section className="border-y border-line bg-ink-2/80">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <p className="kicker mb-5">Navigate ACRS</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {quickNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="lift rounded-2xl border border-line bg-white/5 px-4 py-4 text-center text-base font-semibold text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink-2/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-line bg-white/5 px-5 py-6">
              <p className="headline text-3xl text-white md:text-[2rem]">{item.value}</p>
              <p className="mt-2 text-base text-fog/65">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <p className="kicker">Research landscape</p>
        <h2 className="headline mt-4 max-w-4xl text-4xl text-white md:text-6xl">
          Built for AI and cybersecurity
        </h2>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-fog/80">
          ACRS exists to advance research where intelligent systems and digital security meet —
          from trustworthy AI to cyber defence, privacy, and forensics.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <article key={area.title} className="lift rounded-[1.6rem] border border-line p-7">
              <h3 className="headline text-2xl text-white">{area.title}</h3>
              <p className="mt-3 text-lg leading-8 text-fog/75">{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Campus programme</p>
            <h2 className="headline mt-4 text-4xl text-white md:text-6xl">
              ACRS Students’ Chapter
            </h2>
            <p className="mt-6 text-xl leading-9 text-fog/80">
              The Students’ Chapter helps engineering colleges, polytechnics, and universities
              teach AI, machine learning, cybersecurity, and secure computing — and connect
              classrooms with industry practice.
            </p>
            <Link to="/students" className="mt-8 inline-flex text-lg font-semibold text-mint">
              Chapter guidelines →
            </Link>
          </div>
          <div className="glass rounded-[2rem] p-8">
            <p className="headline text-2xl text-white">Membership durations</p>
            <div className="mt-6 divide-y divide-line">
              {membershipPlans.slice(0, 3).map((plan) => (
                <div key={plan.duration} className="flex items-center justify-between py-5">
                  <span className="text-lg text-fog/85">{plan.duration}</span>
                  <span className="text-xl font-semibold text-gold">{plan.fee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2/50">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-sky/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <p className="kicker">Recognition</p>
          <h2 className="headline mt-4 max-w-3xl text-4xl text-white md:text-6xl">ACRS Fellow</h2>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-fog/80">
            ACRS Fellow is awarded to academicians, scholars, and industry professionals with
            exceptional contributions in artificial intelligence, cybersecurity, secure systems,
            and related technologies.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/fellow"
              className="rounded-full bg-sky px-7 py-3.5 text-lg font-semibold text-ink"
            >
              Apply here
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-line px-7 py-3.5 text-lg font-semibold text-white"
            >
              We are looking for ACRS Fellow Assessors
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">Join us</p>
            <h2 className="headline mt-4 text-4xl text-white md:text-6xl">
              Three steps to membership
            </h2>
          </div>
          <Link to="/membership" className="hidden text-lg font-semibold text-mint md:inline">
            Membership details →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            'Register by using the Register link on this website.',
            'Verify the email by clicking the link sent to your registered email ID.',
            'Log in and apply for the membership category that matches your profile.',
          ].map((step, i) => (
            <article key={step} className="glass rounded-[2rem] p-8">
              <p className="headline text-5xl text-mint">0{i + 1}</p>
              <p className="mt-6 text-lg leading-8 text-fog/80">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-2/40">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker">Events</p>
              <h2 className="headline mt-4 text-4xl text-white md:text-6xl">
                AI & cybersecurity conferences
              </h2>
            </div>
            <Link to="/conferences" className="text-lg font-semibold text-mint">
              All conferences →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {conferences.slice(0, 4).map((event) => (
              <article
                key={event.title}
                className="lift rounded-[2rem] border-l-4 border-mint bg-ink-2/80 p-8"
              >
                <p className="text-base text-gold">
                  {event.dates} · {event.mode}
                </p>
                <h3 className="headline mt-4 text-2xl text-white md:text-3xl">{event.title}</h3>
                <p className="mt-3 text-lg text-fog/65">{event.venue}</p>
                <p className="mt-4 text-lg leading-8 text-fog/80">{event.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="glass overflow-hidden rounded-[2.4rem] p-10 md:p-16">
          <p className="kicker">Contact us</p>
          <h2 className="headline mt-4 text-4xl text-white md:text-6xl">Get in touch</h2>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-fog/80">
            Contact address: {society.address}
          </p>
          <p className="mt-3 text-2xl text-mint">{society.emails[0]}</p>
          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-3.5 text-lg font-semibold text-ink"
          >
            Open contact page
          </Link>
        </div>
      </section>
    </>
  )
}
