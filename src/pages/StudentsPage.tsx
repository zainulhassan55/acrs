import { Link } from 'react-router-dom'
import { PageHero } from '../components/Layout'
import { society } from '../content'

const guidelines = [
  'Universities and colleges are eligible to establish a student chapter for programmes such as Bachelor’s / Master’s degrees in Computer Science, Artificial Intelligence, Data Science, Cybersecurity, and related fields.',
  'For each student chapter, there must be one faculty adviser who will be a single point of contact (SPOC). The department will initiate the request to establish the student chapter with the name of a faculty adviser.',
  'ACRS authorities will approve the request for student chapter establishment after verification.',
  'The SPOC will coordinate the registration of all students of the programme or course for which the chapter is being established.',
  'Students may deposit the fee directly using the registration link shared by the SPOC. Alternatively, the SPOC can collect the fee and relevant details and then deposit the same to the ACRS account.',
  'A minimum of 100 students is required to initiate a chapter.',
]

const benefits = [
  {
    title: 'Technical knowledge',
    text: 'The chapter hosts technical talks and discussions, bringing in experts to share knowledge and keep members updated on the latest advancements in engineering and technology.',
  },
  {
    title: 'Awareness of industry trends',
    text: 'ACRS Students’ Chapter activities keep students up to date on industry trends, best practices, and challenges.',
  },
  {
    title: 'Fee subsidy',
    text: 'SPOC and registered students can receive discounts on registration fees for ACRS programmes, including conferences, workshops, and seminars.',
  },
  {
    title: 'Professional growth',
    text: 'Workshops, seminars, and conferences enhance technical and non-technical skills, preparing students for careers in engineering and science.',
  },
  {
    title: 'Academic network',
    text: 'Interactions between students, faculty, and industry professionals are facilitated by establishing student chapters across universities and colleges.',
  },
  {
    title: 'Academic excellence awards',
    text: 'The chapter provides awards and recognition to students who demonstrate exceptional academic and extracurricular accomplishments.',
  },
]

export function StudentsPage() {
  return (
    <>
      <PageHero
        kicker="Campus programme"
        title="ACRS Students’ Chapter"
        subtitle="A collaborative programme for universities and colleges to teach artificial intelligence, cybersecurity, and secure computing — and to bridge academia with industry."
        image="/images/hero-secure-ai.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="glass rounded-[2rem] p-10">
          <h2 className="headline text-4xl text-white">Guidelines</h2>
          <ol className="mt-8 space-y-5">
            {guidelines.map((item, i) => (
              <li key={item} className="flex gap-5 text-lg leading-8 text-fog/80">
                <span className="headline text-2xl text-mint">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-lg text-fog/75">
            To start a students’ chapter, write to{' '}
            <a className="text-mint" href={`mailto:${society.emails[0]}`}>
              {society.emails[0]}
            </a>
            .
          </p>
        </div>

        <h2 className="headline mt-16 text-4xl text-white md:text-5xl">Chapter benefits</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="lift rounded-[2rem] border border-line p-8">
              <h3 className="headline text-2xl text-white">{item.title}</h3>
              <p className="mt-4 text-lg leading-8 text-fog/75">{item.text}</p>
            </article>
          ))}
        </div>

        <article className="mt-12 rounded-[2rem] border border-line p-10">
          <h2 className="headline text-4xl text-white">Benefits for the department</h2>
          <ul className="mt-8 space-y-4 text-lg leading-8 text-fog/80">
            <li>
              Two online seminars on recent technologies (artificial intelligence, machine
              learning, deep learning, computer vision, cybersecurity, and related topics) will be
              organized once a year for students and faculty associated with the chapter.
            </li>
            <li>
              A one-week online Students Training Programme (STP) with hands-on experience will be
              organized every year on the latest technologies.
            </li>
            <li>
              Students associated with the chapter will be eligible to pursue certification courses
              offered by ACRS at a concessional fee.
            </li>
            <li>
              Departments may organize academic events under the student chapter. Information about
              these events will be shared with ACRS members and published on the website. At the
              end of each year, a best chapter award will be presented.
            </li>
            <li>
              An e-certificate will be issued reflecting the establishment of the student chapter
              after confirmation from the SPOC that registrations are complete. The chapter should
              be renewed every year by registering newly admitted students.
            </li>
          </ul>
        </article>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/membership"
            className="rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink"
          >
            Register as a member
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-line px-7 py-3.5 text-lg font-semibold text-white"
          >
            Ask about a chapter
          </Link>
        </div>
      </section>
    </>
  )
}
