import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/Layout'
import { society } from '../content'

const fieldClass =
  'rounded-2xl border border-line bg-ink px-5 py-4 text-lg text-white outline-none focus:border-mint'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Contact us"
        subtitle="Write to the AI & Cybersecurity Research Society for membership, student chapters, fellow nominations, conferences, and general queries."
        image="/images/hero-secure-ai.png"
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2">
        <article className="glass rounded-[2rem] p-10">
          <h2 className="headline text-4xl text-white">Contact address</h2>
          <p className="mt-6 text-xl leading-9 text-fog/80">{society.address}</p>
          <p className="mt-8 text-base tracking-[0.18em] text-fog/55 uppercase">Email</p>
          <a className="mt-2 block text-2xl text-mint" href={`mailto:${society.emails[0]}`}>
            {society.emails[0]}
          </a>
          <p className="mt-8 text-lg leading-8 text-fog/75">
            Headquarters: {society.hq}. For conference-related involvement, please visit the
            conferences page or include the event name in your message.
          </p>
        </article>

        <article className="rounded-[2rem] border border-line p-10">
          <h2 className="headline text-4xl text-white">Send a message</h2>
          {sent ? (
            <p className="mt-8 text-lg leading-8 text-mint">
              Thank you. Your message has been recorded. The ACRS team will respond by email.
            </p>
          ) : (
            <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
              <label className="grid gap-2 text-base">
                <span className="text-fog/70">Name</span>
                <input required name="name" className={fieldClass} />
              </label>
              <label className="grid gap-2 text-base">
                <span className="text-fog/70">Email</span>
                <input required type="email" name="email" className={fieldClass} />
              </label>
              <label className="grid gap-2 text-base">
                <span className="text-fog/70">Message</span>
                <textarea required name="message" rows={6} className={fieldClass} />
              </label>
              <button
                type="submit"
                className="rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink"
              >
                Send message
              </button>
            </form>
          )}
        </article>
      </section>
    </>
  )
}
