import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/Layout'
import { CardGrid, ComingSoon, ListPanel, Prose } from '../components/PageBlocks'
import {
  academyCategories,
  awards,
  committees,
  councilRoles,
  governanceDocuments,
  grants,
  membershipBenefits,
  membershipCategories,
  membershipFaqs,
  membershipPlans,
  missionPoints,
  opportunities,
  professionalChapters,
  researchActivities,
  sponsorshipSupport,
  studentActivities,
  technicalCommunities,
} from '../content'

function Shell({
  kicker,
  title,
  subtitle,
  image = '/images/hero-ai-cyber.png',
  children,
}: {
  kicker: string
  title: string
  subtitle: string
  image?: string
  children: ReactNode
}) {
  return (
    <>
      <PageHero kicker={kicker} title={title} subtitle={subtitle} image={image} />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">{children}</section>
    </>
  )
}

export function AboutPage() {
  return (
    <Shell
      kicker="About"
      title="About GIDIS"
      subtitle="The Global Institute for Digital Intelligence and Security is an international professional institute for researchers, educators, industry professionals, students, and institutions."
    >
      <Prose>
        <p>
          GIDIS was established to advance knowledge, professional practice, and international
          collaboration in digital intelligence, cybersecurity, and related fields of science,
          engineering, and technology.
        </p>
        <p>
          The Institute brings together people and organizations who work at the intersection of
          intelligent systems, digital trust, data, and emerging technologies. It provides a
          structured professional home for research collaboration, education, conferences,
          chapters, technical communities, and recognition.
        </p>
        <p>
          GIDIS is not a university and not a commercial consultancy. It is a professional
          institute: a membership-based community with governance, programs, and a public mission.
        </p>
      </Prose>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { title: 'Research', text: 'Collaborative work across AI, cybersecurity, and digital systems.', to: '/programs/research' },
          { title: 'Community', text: 'Chapters, technical communities, and a global membership network.', to: '/chapters' },
          { title: 'Recognition', text: 'Fellowships, awards, and professional membership grades.', to: '/recognition/fellows' },
        ].map((item) => (
          <Link key={item.title} to={item.to} className="card-surface block p-7 hover:border-mint/40">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-lg leading-8 text-white/62">{item.text}</p>
          </Link>
        ))}
      </div>
    </Shell>
  )
}

export function VisionPage() {
  return (
    <Shell
      kicker="About"
      title="Vision & Mission"
      subtitle="GIDIS exists to strengthen the world’s capacity to develop intelligent systems that are trustworthy, secure, and beneficial."
      image="/images/hero-secure-ai.png"
    >
      <h2 className="headline text-3xl text-white">Vision</h2>
      <Prose>
        <p>
          To be a globally respected professional institute advancing digital intelligence,
          cybersecurity, and trustworthy technology for the benefit of society, industry, and
          research.
        </p>
      </Prose>
      <h2 className="headline mt-14 text-3xl text-white">Mission</h2>
      <ListPanel items={missionPoints} />
    </Shell>
  )
}

export function LeadershipPage() {
  return (
    <Shell
      kicker="About"
      title="Leadership & Governance"
      subtitle="GIDIS is governed by a Council and supported by standing committees. Named officers will be published when appointments are confirmed."
      image="/images/hero-defence.png"
    >
      <Prose>
        <p>
          The Institute is led by a Governing Council responsible for strategy, professional
          standards, membership policy, and the integrity of GIDIS programs. Committee chairs
          support the Council in defined areas of work.
        </p>
      </Prose>
      <h2 className="headline mt-14 text-3xl text-white">Governing Council</h2>
      <ListPanel items={councilRoles.map((role) => `${role} — to be announced`)} />
      <h2 className="headline mt-14 text-3xl text-white">Standing committees</h2>
      <ListPanel items={committees} />
    </Shell>
  )
}

export function ConstitutionPage() {
  return (
    <Shell
      kicker="About"
      title="Constitution & Bylaws"
      subtitle="The Institute’s constitutional instruments and operating policies will be published as they are formally adopted."
    >
      <Prose>
        <p>
          GIDIS operates under a constitution, bylaws, and supporting regulations. Until each
          document is approved and released, this page lists the instruments that will form the
          public governance library.
        </p>
      </Prose>
      <ListPanel items={governanceDocuments} />
    </Shell>
  )
}

export function MembershipOverviewPage() {
  return (
    <Shell
      kicker="Membership"
      title="Become a Member"
      subtitle="GIDIS membership is a professional affiliation for people and institutions working in digital intelligence, cybersecurity, and related fields."
    >
      <Prose>
        <p>
          Members join a global network, take part in chapters and technical communities, and may
          progress through membership grades as their contributions grow. Student and Professional
          memberships are open by application. Senior, Fellow, and Distinguished grades are
          awarded on merit.
        </p>
      </Prose>
      <div className="mt-10 overflow-x-auto rounded-[1.4rem] border border-line">
        <table className="w-full min-w-[640px] text-left text-lg">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="px-6 py-5 font-medium">Category</th>
              <th className="px-6 py-5 font-medium">Fee</th>
              <th className="px-6 py-5 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {membershipPlans.map((plan) => (
              <tr key={plan.duration} className="border-t border-line">
                <td className="px-6 py-5 text-white">{plan.duration}</td>
                <td className="px-6 py-5 text-gold">{plan.fee}</td>
                <td className="px-6 py-5 text-white/60">{plan.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        to="/membership/apply"
        className="mt-10 inline-flex rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink"
      >
        Apply for membership
      </Link>
    </Shell>
  )
}

export function MembershipCategoriesPage() {
  return (
    <Shell
      kicker="Membership"
      title="Membership Categories"
      subtitle="Six grades of affiliation, from student membership to distinguished fellowship and institutional partnership."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {membershipCategories.map((item) => (
          <article key={item.title} className="card-surface p-7">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-lg leading-8 text-white/72">{item.target}</p>
            <p className="mt-3 text-base text-mint">{item.path}</p>
          </article>
        ))}
      </div>
    </Shell>
  )
}

export function MembershipBenefitsPage() {
  return (
    <Shell
      kicker="Membership"
      title="Membership Benefits"
      subtitle="GIDIS membership is designed to support research, professional growth, recognition, and international collaboration."
    >
      <CardGrid items={membershipBenefits} />
    </Shell>
  )
}

export function MembershipDirectoryPage() {
  return (
    <Shell
      kicker="Membership"
      title="Member Directory"
      subtitle="A public directory of members who have consented to share selected professional information."
    >
      <ComingSoon
        title="Directory in preparation"
        text="Profiles will appear only with member consent and may include name, institution, country, areas of expertise, and membership grade. No names will be listed until members opt in."
      />
    </Shell>
  )
}

export function MembershipFaqPage() {
  return (
    <Shell kicker="Membership" title="Membership FAQ" subtitle="Answers to common questions about joining and participating in GIDIS.">
      <div className="space-y-5">
        {membershipFaqs.map((item) => (
          <article key={item.q} className="card-surface p-7">
            <h3 className="text-xl font-semibold text-white">{item.q}</h3>
            <p className="mt-3 text-lg leading-8 text-white/68">{item.a}</p>
          </article>
        ))}
      </div>
    </Shell>
  )
}

export function ChaptersOverviewPage() {
  return (
    <Shell
      kicker="Chapters"
      title="GIDIS Chapters"
      subtitle="Chapters are the local expression of GIDIS — on campuses and in professional communities around the world."
      image="/images/hero-secure-ai.png"
    >
      <Prose>
        <p>
          A GIDIS chapter brings members together for seminars, technical meetings, student
          activities, and regional collaboration. Chapters operate under Institute regulations and
          remain part of the global GIDIS community.
        </p>
      </Prose>
      <CardGrid
        items={[
          { title: 'Student Chapters', text: 'Campus communities for undergraduate, postgraduate, and doctoral students.', to: '/chapters/students' },
          { title: 'Professional Chapters', text: 'Regional communities of researchers, educators, and industry professionals.', to: '/chapters/professional' },
          { title: 'Establish a Chapter', text: 'Guidance for universities and professional groups wishing to form a GIDIS chapter.', to: '/chapters/establish' },
        ]}
      />
    </Shell>
  )
}

export function ProfessionalChaptersPage() {
  return (
    <Shell
      kicker="Chapters"
      title="Professional Chapters"
      subtitle="Professional chapters connect GIDIS members in cities, regions, and countries."
    >
      <Prose>
        <p>
          Professional chapters host technical meetings, industry engagement, and regional
          collaboration. Additional chapters will be listed as they are chartered.
        </p>
      </Prose>
      <ListPanel items={professionalChapters} />
    </Shell>
  )
}

export function StudentChaptersPage() {
  return (
    <Shell
      kicker="Chapters"
      title="Student Chapters"
      subtitle="Student chapters help universities build communities in AI, cybersecurity, intelligent systems, and digital technologies."
      image="/images/hero-secure-ai.png"
    >
      <Prose>
        <p>
          A GIDIS Student Chapter is a campus community affiliated with the Institute. It supports
          seminars, workshops, competitions, mentoring, and professional exposure for students.
        </p>
      </Prose>
      <h2 className="headline mt-10 text-3xl text-white">Typical activities</h2>
      <ListPanel items={studentActivities} />
    </Shell>
  )
}

export function EstablishChapterPage() {
  return (
    <Shell
      kicker="Chapters"
      title="Establish a Chapter"
      subtitle="Universities and professional groups may apply to form a GIDIS Student Chapter or Professional Chapter."
    >
      <Prose>
        <p>
          Chapter establishment follows Institute regulations, including a founding group of
          members, a proposed leadership team, and an activity plan. Applications are reviewed by
          the Chapter Development Committee.
        </p>
        <p>
          To begin, write to GIDIS with the proposed chapter type, host institution or region, and
          a short statement of purpose. Detailed forms will be published with the Chapter
          Regulations.
        </p>
      </Prose>
      <Link to="/contact" className="mt-10 inline-flex rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink">
        Contact GIDIS about a chapter
      </Link>
    </Shell>
  )
}

export function ChapterDirectoryPage() {
  return (
    <Shell
      kicker="Chapters"
      title="Chapter Directory"
      subtitle="Chartered student and professional chapters will be listed here as they are established."
    >
      <ComingSoon
        title="Directory opening with first charters"
        text="Each listing will include chapter name, type, location, and a contact nominated by the chapter. No chapter will be published until it is formally recognized."
      />
    </Shell>
  )
}

export function ResearchPage() {
  return (
    <Shell
      kicker="Programs"
      title="Research & Innovation"
      subtitle="GIDIS supports collaborative research at the intersection of digital intelligence, cybersecurity, and emerging technologies."
    >
      <ListPanel items={researchActivities} />
    </Shell>
  )
}

export function EducationPage() {
  return (
    <Shell
      kicker="Programs"
      title="Education & Training"
      subtitle="Professional learning offered by GIDIS and its partners. Certificate programs will be announced only after academic standards are formally established."
    >
      <ListPanel items={academyCategories} />
    </Shell>
  )
}

export function WorkshopsPage() {
  return (
    <Shell
      kicker="Programs"
      title="Workshops, Lectures & Webinars"
      subtitle="A standing program of technical talks, distinguished lectures, and online briefings."
    >
      <ComingSoon
        title="Calendar forthcoming"
        text="Confirmed workshops, distinguished lectures, and webinars will be listed with date, speaker, and registration details as they are scheduled."
      />
    </Shell>
  )
}

export function GrantsPage() {
  return (
    <Shell
      kicker="Programs"
      title="Grants & Support"
      subtitle="Targeted support for students, early-career researchers, and participation in scholarly events."
    >
      <CardGrid items={grants} />
    </Shell>
  )
}

export function CommunitiesPage() {
  return (
    <Shell
      kicker="Programs"
      title="Technical Communities"
      subtitle="Special-interest communities that connect members around defined technical domains."
    >
      <ListPanel items={technicalCommunities} />
    </Shell>
  )
}

export function UpcomingEventsPage() {
  return (
    <Shell
      kicker="Events"
      title="Upcoming Events"
      subtitle="Conferences, workshops, and professional meetings currently open or soon to be announced."
      image="/images/hero-defence.png"
    >
      <p className="text-xl leading-8 text-white/72">
        See the conferences page for dated scholarly events. Additional lectures and chapter
        meetings will appear here as they are confirmed.
      </p>
      <Link to="/events/conferences" className="mt-8 inline-flex text-lg font-semibold text-mint">
        View conferences →
      </Link>
    </Shell>
  )
}

export function PastEventsPage() {
  return (
    <Shell kicker="Events" title="Past Events" subtitle="An archive of completed GIDIS conferences, workshops, and professional activities.">
      <ComingSoon
        title="Archive will grow with the Institute"
        text="Completed events will be listed with dates, venues, and published outcomes. This archive is empty until the first GIDIS events have concluded."
      />
    </Shell>
  )
}

export function SponsorshipPage() {
  return (
    <Shell
      kicker="Events"
      title="Technical Sponsorship"
      subtitle="Organizers of scholarly conferences may request GIDIS technical collaboration and professional support."
    >
      <Prose>
        <p>
          Technical sponsorship is a professional association, not automatic branding. Requests are
          reviewed for scholarly quality, relevance to GIDIS fields, and ethical standards.
        </p>
      </Prose>
      <h2 className="headline mt-10 text-3xl text-white">Support that may be offered</h2>
      <ListPanel items={sponsorshipSupport} />
    </Shell>
  )
}

export function FellowsPage() {
  return (
    <Shell
      kicker="Recognition"
      title="GIDIS Fellows"
      subtitle="Fellowship is a merit-based professional distinction for individuals with distinguished contributions in the Institute’s fields."
      image="/images/hero-defence.png"
    >
      <Prose>
        <p>
          GIDIS Fellow recognizes sustained excellence in research, education, professional
          leadership, or innovation in digital intelligence, cybersecurity, and related
          technologies. Election is by nomination and review; it is not available by fee alone.
        </p>
        <p>
          Distinguished Fellowship is the Institute’s highest recognition and is conferred by
          invitation of the Governing Council.
        </p>
      </Prose>
      <Link to="/contact" className="mt-10 inline-flex rounded-full bg-sky px-7 py-3.5 text-lg font-semibold text-ink">
        Enquire about nomination
      </Link>
    </Shell>
  )
}

export function AwardsPage() {
  return (
    <Shell
      kicker="Recognition"
      title="Awards & Honors"
      subtitle="GIDIS awards recognize research, innovation, education, service, and professional impact."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {awards.map((item) => (
          <article key={item.title} className="card-surface p-7">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-lg leading-8 text-white/68">{item.purpose}</p>
          </article>
        ))}
      </div>
    </Shell>
  )
}

export function NominationsPage() {
  return (
    <Shell
      kicker="Recognition"
      title="Award Nominations"
      subtitle="Nominations for GIDIS awards and advanced membership grades will open according to the Awards Regulations."
    >
      <ComingSoon
        title="Nomination cycle not yet open"
        text="When a cycle opens, this page will publish eligibility, required materials, deadlines, and the official nomination form. Until then, general enquiries may be sent through the contact page."
      />
    </Shell>
  )
}

export function NewsPage() {
  return (
    <Shell kicker="Resources" title="News" subtitle="Announcements from the Institute, its chapters, and its scholarly programs.">
      <ComingSoon
        title="No items yet"
        text="News will appear here as GIDIS publishes calls, chapter charters, conference announcements, and official notices."
      />
    </Shell>
  )
}

export function PublicationsPage() {
  return (
    <Shell
      kicker="Resources"
      title="Publications"
      subtitle="Scholarly outputs associated with GIDIS conferences, workshops, and research programs."
    >
      <ComingSoon
        title="Publication list forthcoming"
        text="Proceedings, special issues, and Institute reports will be listed once they are formally published. GIDIS does not list unaffiliated work as Institute publications."
      />
    </Shell>
  )
}

export function OpportunitiesPage() {
  return (
    <Shell
      kicker="Resources"
      title="Opportunities"
      subtitle="Open calls for members, volunteers, reviewers, speakers, and professional service."
    >
      <ListPanel items={opportunities} />
      <p className="mt-8 text-lg text-white/62">
        Specific openings with dates and application instructions will be posted as they arise.
      </p>
    </Shell>
  )
}

export function GalleryPage() {
  return (
    <Shell kicker="Resources" title="Gallery" subtitle="Photographs from GIDIS events, chapters, and professional activities.">
      <ComingSoon
        title="Gallery opening after first events"
        text="Images will be published with consent and event attribution. This space remains reserved until GIDIS has held activities that can be documented."
      />
    </Shell>
  )
}

export function DocumentsPage() {
  return (
    <Shell
      kicker="Resources"
      title="Documents"
      subtitle="Official Institute documents available for download once they are adopted."
    >
      <ListPanel items={governanceDocuments} />
      <p className="mt-8 text-lg text-white/62">
        Files will be attached as each instrument is approved. Until then, the titles above
        indicate the intended public record.
      </p>
    </Shell>
  )
}

export function LoginPage() {
  return (
    <Shell
      kicker="Members"
      title="Member Login"
      subtitle="The member portal will allow confirmed members to manage their profile, chapter affiliation, and applications."
      image="/images/hero-secure-ai.png"
    >
      <ComingSoon
        title="Portal in development"
        text="Member login will open after the membership system is commissioned. If you have submitted an application, GIDIS will write to you by email. For access questions, use the contact page."
      />
      <form
        className="card-surface mt-8 grid max-w-md gap-5 p-8"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="grid gap-2 text-base">
          <span className="text-white/70">Email</span>
          <input disabled className="rounded-2xl border border-line bg-ink px-5 py-4 text-white/40" />
        </label>
        <label className="grid gap-2 text-base">
          <span className="text-white/70">Password</span>
          <input disabled type="password" className="rounded-2xl border border-line bg-ink px-5 py-4 text-white/40" />
        </label>
        <button type="button" disabled className="rounded-full bg-white/20 px-7 py-3.5 text-lg font-semibold text-white/50">
          Sign in (coming soon)
        </button>
      </form>
    </Shell>
  )
}
