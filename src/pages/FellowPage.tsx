import { Link } from 'react-router-dom'
import { PageHero } from '../components/Layout'

export function FellowPage() {
  return (
    <>
      <PageHero
        kicker="Merit recognition"
        title="ACRS Fellow"
        subtitle="A prestigious recognition for academicians, scholars, and industry professionals with exceptional contributions in artificial intelligence, cybersecurity, and secure intelligent systems."
        image="/images/hero-defence.png"
      />

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-20">
        <article className="glass rounded-[2rem] p-10">
          <p className="text-lg leading-8 text-fog/80">
            The AI & Cybersecurity Research Society (ACRS) is a non-profit for members from
            academia and industry. It is a platform for institutions, labs, researchers,
            scientists, scholars, students, and professionals passionate about artificial
            intelligence, cybersecurity, and secure computing.
          </p>
          <p className="mt-5 text-lg leading-8 text-fog/80">
            ACRS fosters collaboration through international conferences, the ACRS Insights
            technology magazine, and the ACRS Fellow membership.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Industry impact',
              items: [
                'Accomplished professionals with extensive experience applying modern technologies to complex industrial challenges.',
                'Visionaries driving innovation and setting benchmarks in their fields.',
              ],
            },
            {
              title: 'Academic excellence',
              items: [
                'A consistent track record of impactful research publications, books, and patents.',
                'Proven expertise in teaching and mentoring at leading institutions.',
              ],
            },
            {
              title: 'Innovative contribution',
              items: [
                'Groundbreaking work in artificial intelligence, cybersecurity, secure machine learning, cryptography, and related fields.',
                'Contributions that lead to real-world applications and societal impact.',
              ],
            },
          ].map((col) => (
            <article key={col.title} className="lift rounded-[2rem] border border-line p-8">
              <h2 className="headline text-3xl text-white">{col.title}</h2>
              <ul className="mt-5 space-y-4 text-lg leading-8 text-fog/75">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="rounded-[2rem] border border-line p-10">
          <h2 className="headline text-4xl text-white">Benefits of Fellow membership</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Rights and privileges',
                text: 'Permission to use the designation “Fellow ACRS”, “ACRS Fellow”, or “F-ACRS” in email signatures, business cards, letterheads, and similar materials. Priority consideration for articles in ACRS Insights.',
              },
              {
                title: 'Global recognition',
                text: 'Showcase expertise and accomplishments on a global platform among peers, institutions, and industry leaders.',
              },
              { title: 'Professional networking', text: 'Connect with researchers, CISOs, AI scientists, and innovators working on intelligent and secure systems.' },
              {
                title: 'Leadership roles',
                text: 'Become eligible for leadership positions within ACRS and help shape the future of research and development.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="headline text-2xl text-mint">{item.title}</h3>
                <p className="mt-3 text-lg leading-8 text-fog/75">{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass rounded-[2rem] p-10">
          <h2 className="headline text-4xl text-white">Nomination and selection</h2>
          <ol className="mt-8 space-y-5 text-lg leading-8 text-fog/80">
            <li>
              <strong className="text-white">1. Call for nominations.</strong> Eligible candidates
              may nominate themselves. Applicants must enter the name and email of one referee.
              One reference is mandatory from: an existing ACRS Fellow; a teaching faculty member
              from any university; the applicant’s Vice-Chancellor, Director, or Manager (for
              industry applicants); or a Fellow of any other recognized organization.
            </li>
            <li>
              <strong className="text-white">2. Screening.</strong> Applications are screened for
              completeness, usually on the same day as submission.
            </li>
            <li>
              <strong className="text-white">3. Expert review.</strong> A committee from academia
              and industry reviews each application. This may take 2–4 weeks after screening.
            </li>
            <li>
              <strong className="text-white">4. Final approval.</strong> The ACRS governing body
              makes the final decision based on expert review comments.
            </li>
          </ol>
        </article>

        <article className="rounded-[2rem] border border-line p-10">
          <h2 className="headline text-4xl text-white">Distinguished Fellow</h2>
          <p className="mt-6 text-lg leading-8 text-fog/80">
            The Distinguished Fellow designation is an invitation-only honour for exceptional
            academicians and industry professionals with significant contributions and, typically,
            more than 15 years of exemplary experience. The steering committee may waive the
            minimum experience requirement for an exceptionally qualified applicant.
          </p>
          <p className="mt-5 text-lg leading-8 text-fog/80">
            If you believe you are eligible, share your detailed CV at{' '}
            <a className="text-mint" href="mailto:contact@acrs.in">
              contact@acrs.in
            </a>
            .
          </p>
          <p className="mt-5 text-lg leading-8 text-fog/65">
            ACRS Fellow members are expected to remain a small share of total membership, and
            Distinguished Fellows a smaller share of Fellows, preserving the standing of the
            honour.
          </p>
        </article>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/membership"
            className="rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink"
          >
            Apply here
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-line px-7 py-3.5 text-lg font-semibold text-white"
          >
            Become a Fellow Assessor
          </Link>
        </div>
      </section>
    </>
  )
}
