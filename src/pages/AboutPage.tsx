import { PageHero } from '../components/Layout'
import { objectives, society } from '../content'
import { publicUrl } from '../publicUrl'

export function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About ACRS"
        title="A society for research that is intelligent and secure"
        subtitle="The AI & Cybersecurity Research Society (ACRS) is established to promote research in artificial intelligence, cybersecurity, and the technologies that connect them, with headquarters in Taichung, Taiwan."
        image="/images/hero-ai-cyber.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <article className="glass rounded-[2rem] p-10">
          <h2 className="headline text-4xl text-white">About the society</h2>
          <p className="mt-6 text-lg leading-8 text-fog/80">
            AI & Cybersecurity Research Society is a scientific community of institutions, labs,
            researchers, scientists, academicians, research scholars, students, and industry
            professionals interested in AI, cybersecurity, and related technologies. ACRS works
            in close association with the {society.lab}.
          </p>
          <p className="mt-5 text-lg leading-8 text-fog/80">
            ACRS serves as a platform for collaboration through international conferences,
            student chapters, incubation, and the ACRS Fellow membership. These initiatives
            help share technological advancements and drive progress across the global research
            community.
          </p>
        </article>

        <article className="glass mt-8 rounded-[2rem] p-10">
          <h2 className="headline text-4xl text-white">Objectives</h2>
          <p className="mt-6 text-lg leading-8 text-fog/80">
            Cyber events continue to escalate in frequency and severity. ACRS is established to
            conduct world-class AI and cybersecurity research, and to train the next generation
            of security professionals.
          </p>
          <ul className="mt-6 grid gap-4 text-lg leading-8 text-fog/80 md:grid-cols-2">
            {objectives.map((item) => (
              <li key={item} className="rounded-2xl border border-line p-5">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="glass mt-8 rounded-[2rem] p-10">
          <h2 className="headline text-4xl text-white">About the logo</h2>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[220px_1fr]">
            <img
              src={publicUrl('logo.png')}
              alt="ACRS emblem"
              className="mx-auto h-44 w-44 rounded-[2rem] object-cover shadow-[0_20px_50px_rgba(62,224,208,0.2)]"
            />
            <div>
              <p className="text-lg leading-8 text-fog/80">
                The ACRS emblem is a shield of intelligence: a neural network for artificial
                intelligence, held inside a cyber shield, with a golden keyhole for trust,
                access, and security.
              </p>
              <ul className="mt-6 grid gap-4 text-lg leading-8 text-fog/80 md:grid-cols-2">
                <li className="rounded-2xl border border-line p-5">
                  The shield represents cyber defence, privacy, and resilience.
                </li>
                <li className="rounded-2xl border border-line p-5">
                  The neural web represents AI, learning systems, and research.
                </li>
                <li className="rounded-2xl border border-line p-5">
                  The keyhole represents secure access, cryptography, and trust.
                </li>
                <li className="rounded-2xl border border-line p-5">
                  Mint, sky, and gold are the society’s colours: clarity, networks, and discovery.
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="mt-8 rounded-[2rem] border border-line p-10">
          <h2 className="headline text-4xl text-white">People</h2>
          <p className="mt-6 text-lg leading-8 text-fog/80">
            The core committee is responsible for day-to-day activities and routine decisions
            pertaining to ACRS programmes. Distinguished experts on the committee also contribute
            to selecting Fellow and Distinguished Fellow members.
          </p>
          <p className="mt-5 text-lg leading-8 text-fog/80">
            The Advisory Committee shapes strategic direction and supports the planning of events
            and academic programmes. Names and affiliations of committee members will be published
            here as the society’s leadership pages are updated.
          </p>
        </article>
      </section>
    </>
  )
}
