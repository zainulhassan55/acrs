import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContactPage } from './pages/ContactPage'
import { ConferencesPage } from './pages/ConferencesPage'
import { HomePage } from './pages/HomePage'
import { MembershipPage } from './pages/MembershipPage'
import {
  AboutPage,
  AwardsPage,
  ChapterDirectoryPage,
  ChaptersOverviewPage,
  CommunitiesPage,
  ConstitutionPage,
  DocumentsPage,
  EducationPage,
  EstablishChapterPage,
  FellowsPage,
  GalleryPage,
  GrantsPage,
  LeadershipPage,
  LoginPage,
  MembershipBenefitsPage,
  MembershipCategoriesPage,
  MembershipDirectoryPage,
  MembershipFaqPage,
  MembershipOverviewPage,
  NewsPage,
  NominationsPage,
  OpportunitiesPage,
  PastEventsPage,
  ProfessionalChaptersPage,
  PublicationsPage,
  ResearchPage,
  SponsorshipPage,
  StudentChaptersPage,
  UpcomingEventsPage,
  VisionPage,
  WorkshopsPage,
} from './pages/SocietyPages'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/vision" element={<VisionPage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
          <Route path="/about/constitution" element={<ConstitutionPage />} />
          <Route path="/membership" element={<MembershipOverviewPage />} />
          <Route path="/membership/categories" element={<MembershipCategoriesPage />} />
          <Route path="/membership/benefits" element={<MembershipBenefitsPage />} />
          <Route path="/membership/apply" element={<MembershipPage />} />
          <Route path="/membership/directory" element={<MembershipDirectoryPage />} />
          <Route path="/membership/faq" element={<MembershipFaqPage />} />
          <Route path="/chapters" element={<ChaptersOverviewPage />} />
          <Route path="/chapters/professional" element={<ProfessionalChaptersPage />} />
          <Route path="/chapters/students" element={<StudentChaptersPage />} />
          <Route path="/chapters/establish" element={<EstablishChapterPage />} />
          <Route path="/chapters/directory" element={<ChapterDirectoryPage />} />
          <Route path="/programs/research" element={<ResearchPage />} />
          <Route path="/programs/education" element={<EducationPage />} />
          <Route path="/programs/workshops" element={<WorkshopsPage />} />
          <Route path="/programs/grants" element={<GrantsPage />} />
          <Route path="/programs/communities" element={<CommunitiesPage />} />
          <Route path="/events/conferences" element={<ConferencesPage />} />
          <Route path="/events/upcoming" element={<UpcomingEventsPage />} />
          <Route path="/events/past" element={<PastEventsPage />} />
          <Route path="/events/sponsorship" element={<SponsorshipPage />} />
          <Route path="/recognition/fellows" element={<FellowsPage />} />
          <Route path="/recognition/awards" element={<AwardsPage />} />
          <Route path="/recognition/nominations" element={<NominationsPage />} />
          <Route path="/resources/news" element={<NewsPage />} />
          <Route path="/resources/publications" element={<PublicationsPage />} />
          <Route path="/resources/opportunities" element={<OpportunitiesPage />} />
          <Route path="/resources/gallery" element={<GalleryPage />} />
          <Route path="/resources/documents" element={<DocumentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/students" element={<Navigate to="/chapters/students" replace />} />
          <Route path="/fellow" element={<Navigate to="/recognition/fellows" replace />} />
          <Route path="/conferences" element={<Navigate to="/events/conferences" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
