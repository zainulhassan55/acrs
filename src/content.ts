export const society = {
  shortName: 'GIDIS',
  name: 'Global Institute for Digital Intelligence and Security',
  fullTitle: 'Global Institute for Digital Intelligence and Security (GIDIS)',
  tagline: 'Advancing Intelligence. Strengthening Digital Trust. Connecting Global Innovation.',
  hq: 'Taichung, Taiwan',
  address:
    "13F.-2, No. 910, Sec. 2, Taiwan Blvd., He'an Vil., Xitun Dist., Taichung City 407, Taiwan",
  emails: ['contact@gidis-edu.org'],
}

export type MenuItem = { to: string; label: string }
export type MenuGroup = { label: string; items: MenuItem[] }

export const primaryMenuLabels = ['About', 'Membership', 'Chapters', 'Programs', 'Events'] as const

export const menu: MenuGroup[] = [
  {
    label: 'About',
    items: [
      { to: '/about', label: 'About GIDIS' },
      { to: '/about/vision', label: 'Vision & Mission' },
      { to: '/about/leadership', label: 'Leadership & Governance' },
      { to: '/about/constitution', label: 'Constitution & Bylaws' },
    ],
  },
  {
    label: 'Membership',
    items: [
      { to: '/membership', label: 'Become a Member' },
      { to: '/membership/categories', label: 'Membership Categories' },
      { to: '/membership/benefits', label: 'Membership Benefits' },
      { to: '/membership/apply', label: 'Apply for Membership' },
      { to: '/membership/directory', label: 'Member Directory' },
      { to: '/membership/faq', label: 'Membership FAQ' },
    ],
  },
  {
    label: 'Chapters',
    items: [
      { to: '/chapters', label: 'Chapters Overview' },
      { to: '/chapters/professional', label: 'Professional Chapters' },
      { to: '/chapters/students', label: 'Student Chapters' },
      { to: '/chapters/establish', label: 'Establish a Chapter' },
      { to: '/chapters/directory', label: 'Chapter Directory' },
    ],
  },
  {
    label: 'Programs',
    items: [
      { to: '/programs/research', label: 'Research & Innovation' },
      { to: '/programs/education', label: 'Education & Training' },
      { to: '/programs/workshops', label: 'Workshops, Lectures & Webinars' },
      { to: '/programs/grants', label: 'Grants & Support' },
      { to: '/programs/communities', label: 'Technical Communities' },
    ],
  },
  {
    label: 'Events',
    items: [
      { to: '/events/conferences', label: 'Conferences' },
      { to: '/events/upcoming', label: 'Upcoming Events' },
      { to: '/events/past', label: 'Past Events' },
      { to: '/events/sponsorship', label: 'Technical Sponsorship' },
    ],
  },
  {
    label: 'Recognition',
    items: [
      { to: '/recognition/fellows', label: 'Fellows' },
      { to: '/recognition/awards', label: 'Awards & Honors' },
      { to: '/recognition/nominations', label: 'Award Nominations' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { to: '/resources/news', label: 'News' },
      { to: '/resources/publications', label: 'Publications' },
      { to: '/resources/opportunities', label: 'Opportunities' },
      { to: '/resources/gallery', label: 'Gallery' },
      { to: '/resources/documents', label: 'Documents' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

export const membershipPlans = [
  { duration: 'Student Member', fee: 'NT$1,500 / year', note: 'UG / PG / PhD students' },
  { duration: 'Professional Member', fee: 'NT$4,000 / year', note: 'Researchers, academics, industry' },
  { duration: 'Senior Member', fee: 'By evaluation', note: 'Merit-based' },
  { duration: 'Fellow', fee: 'By nomination', note: 'Merit-based' },
  { duration: 'Distinguished Fellow', fee: 'By invitation', note: 'Highest recognition' },
  { duration: 'Institutional Member', fee: 'On application', note: 'Universities and organizations' },
]

export const heroSlides = [
  {
    src: 'images/hero-ai-cyber.png',
    title: 'Digital intelligence',
    text: 'A global community advancing research, education, and collaboration.',
    to: '/about',
    label: 'About GIDIS',
  },
  {
    src: 'images/hero-secure-ai.png',
    title: 'Chapters worldwide',
    text: 'Student and professional chapters connecting campuses and regions.',
    to: '/chapters',
    label: 'Explore chapters',
  },
  {
    src: 'images/hero-defence.png',
    title: 'Conferences & recognition',
    text: 'Scholarly events, technical sponsorship, fellowships, and awards.',
    to: '/events/conferences',
    label: 'View events',
  },
]

export const focusAreas = [
  { title: 'Artificial Intelligence', text: 'Foundations, applications, and responsible development of intelligent systems.' },
  { title: 'Cybersecurity & Digital Trust', text: 'Protection of systems, data, and infrastructure in an interconnected world.' },
  { title: 'Data Science & Analytics', text: 'Methods for extracting insight from complex, large-scale data.' },
  { title: 'Internet of Things', text: 'Connected devices, cyber-physical systems, and secure sensing.' },
  { title: 'Generative & Agentic AI', text: 'Generative models, autonomous agents, and their safe deployment.' },
  { title: 'Cloud & Edge Computing', text: 'Distributed platforms for scalable and intelligent services.' },
  { title: 'Blockchain & Digital Systems', text: 'Distributed ledgers, digital infrastructure, and trusted transactions.' },
  { title: 'Quantum Technologies', text: 'Quantum computing, communications, and emerging security implications.' },
  { title: 'Intelligent Networks & 6G', text: 'Next-generation communications and intelligent networking.' },
  { title: 'Digital Transformation', text: 'Organizational, industrial, and societal adoption of digital technologies.' },
]

export const missionPoints = [
  'Advance research and innovation in digital intelligence and cybersecurity.',
  'Build an international network of researchers, professionals, students, and institutions.',
  'Promote collaboration between academia and industry.',
  'Support professional and technical development.',
  'Encourage responsible, trustworthy, and ethical technology development.',
  'Provide platforms for knowledge exchange through conferences, workshops, lectures, and publications.',
  'Recognize outstanding professional, academic, and research contributions.',
  'Support students and early-career researchers through chapters, mentorship, and professional opportunities.',
]

export const councilRoles = [
  'President',
  'Vice President',
  'Secretary General',
  'Treasurer',
  'Executive Members',
]

export const committees = [
  'Membership Committee',
  'Awards & Recognition Committee',
  'Research & Innovation Committee',
  'Education & Training Committee',
  'Conference & Events Committee',
  'Student Activities Committee',
  'Chapter Development Committee',
  'Industry Engagement Committee',
  'Ethics & Professional Conduct Committee',
]

export const membershipCategories = [
  { title: 'Student Member', target: 'Undergraduate, postgraduate, and doctoral students.', path: 'Open application with proof of enrolment.' },
  { title: 'Professional Member', target: 'Researchers, academics, and industry professionals.', path: 'Open application with professional affiliation.' },
  { title: 'Senior Member', target: 'Experienced professionals with significant contributions.', path: 'Merit-based evaluation of record and impact.' },
  { title: 'Fellow', target: 'Established experts with distinguished contributions.', path: 'Nomination, review, and governing approval.' },
  { title: 'Distinguished Fellow', target: 'The Institute’s highest professional recognition.', path: 'Invitation by the Governing Council.' },
  { title: 'Institutional Member', target: 'Universities, research centres, and organizations.', path: 'Institutional application and agreement.' },
]

export const membershipBenefits = [
  { title: 'Global professional network', text: 'Connect with researchers, academicians, industry professionals, innovators, and technology leaders worldwide.' },
  { title: 'Research collaboration', text: 'Identify collaborators and participate in multidisciplinary research initiatives.' },
  { title: 'Professional recognition', text: 'Eligible members may apply or be nominated for advanced membership grades and professional recognitions.' },
  { title: 'Conferences & events', text: 'Participate in GIDIS conferences, workshops, webinars, technical meetings, and professional activities.' },
  { title: 'Leadership opportunities', text: 'Contribute through committees, chapters, technical communities, events, and professional programs.' },
  { title: 'Professional development', text: 'Access lectures, training programs, workshops, mentoring activities, and educational resources.' },
  { title: 'Student opportunities', text: 'Students can participate in chapters, mentoring programs, competitions, research activities, and networking.' },
  { title: 'Awards & honors', text: 'Eligible members may be considered for GIDIS awards and professional recognition programs.' },
]

export const membershipFaqs = [
  { q: 'Who can join GIDIS?', a: 'Students, researchers, academics, industry professionals, and institutions working in digital intelligence, cybersecurity, and related fields may apply in the appropriate membership category.' },
  { q: 'How do I apply?', a: 'Complete the membership application form. Student and Professional grades are processed by application. Senior, Fellow, and Distinguished grades follow merit-based or nomination procedures.' },
  { q: 'When will the member directory appear?', a: 'Public profiles will list only information that members have consented to share, such as name, institution, country, expertise, and membership grade.' },
  { q: 'How are fees paid?', a: 'Fees are listed in New Taiwan Dollars (NT$) and may be paid online, by credit card, or by bank transfer after an application is received.' },
]

export const studentActivities = [
  'Research seminars',
  'Coding competitions',
  'Cybersecurity challenges',
  'AI workshops',
  'Hackathons',
  'Career sessions',
  'Research mentoring',
  'Guest lectures',
]

export const professionalChapters = [
  'GIDIS Taiwan Chapter',
  'GIDIS regional chapters in other countries, established by professional communities',
]

export const technicalCommunities = [
  'Artificial Intelligence & Machine Learning',
  'Cybersecurity & Digital Trust',
  'Generative AI & Agentic Systems',
  'IoT & Cyber-Physical Systems',
  'Data Science & Big Data',
  'Cloud & Edge Intelligence',
  'Blockchain & FinTech',
  'Quantum Computing & Security',
  '6G & Intelligent Networks',
  'Digital Management & Transformation',
]

export const conferences = [
  {
    title: '3rd International Conference on Smart System & Advanced Computing (SysCom 2026)',
    venue: 'Taichung, Taiwan',
    dates: '19–20 December 2026',
    mode: 'In-person',
    support: 'Organized with support of GIDIS',
    blurb:
      'AI, machine learning, smart systems, cybersecurity, IoT, and advanced computing.',
  },
  {
    title: 'International Conference on AI Security and Trust (ICAST 2026)',
    venue: 'Taichung, Taiwan',
    dates: '14–15 August 2026',
    mode: 'Hybrid',
    support: 'GIDIS flagship conference',
    blurb: 'Trustworthy AI, adversarial robustness, and secure intelligent systems.',
  },
  {
    title: 'International Conference on Cyber Intelligence and Defence (ICCID 2026)',
    venue: 'Taipei, Taiwan',
    dates: '9–10 October 2026',
    mode: 'Hybrid',
    support: 'Technically supported by GIDIS',
    blurb: 'Threat intelligence, cyber operations, and AI-assisted defence.',
  },
  {
    title: 'Congress on Secure Intelligent Systems (CSIS 2026)',
    venue: 'Taichung, Taiwan',
    dates: '5–6 September 2026',
    mode: 'In-person and online',
    support: 'Organized with GIDIS',
    blurb: 'Intelligent systems designed to remain secure under attack.',
  },
  {
    title: 'International Conference on Privacy, Cryptography and AI (IPCAI 2026)',
    venue: 'Kaohsiung, Taiwan',
    dates: '29–30 August 2026',
    mode: 'Hybrid',
    support: 'In association with GIDIS',
    blurb: 'Privacy-preserving machine learning, cryptography, and confidential computing.',
  },
  {
    title: 'Workshop on Adversarial Machine Learning and Cyber Resilience (AMLCR 2026)',
    venue: 'Taichung, Taiwan',
    dates: '26–27 September 2026',
    mode: 'Hybrid',
    support: 'GIDIS technical workshop',
    blurb: 'Attacking and defending learning systems in real-world cyber environments.',
  },
]

export const sponsorshipSupport = [
  'Technical collaboration',
  'International publicity',
  'Technical committee participation',
  'Speaker recommendations',
  'Reviewer support',
  'Professional networking',
  'Award sponsorship',
  'Student engagement',
  'Joint workshops and technical sessions',
]

export const researchActivities = [
  'International research groups',
  'Collaborative research projects',
  'Research challenges',
  'Industry–academia projects',
  'Visiting research programs',
  'Research mentorship',
  'Special interest groups',
  'Research networking',
]

export const academyCategories = [
  'Professional training',
  'Short courses',
  'Certificate programs (to be offered only after standards are formally established)',
  'Workshops',
  'Webinars',
  'Distinguished lectures',
  'Summer and winter schools',
  'Student training',
]

export const awards = [
  { title: 'GIDIS Outstanding Researcher Award', purpose: 'Recognizes sustained research excellence in areas aligned with the Institute’s mission.' },
  { title: 'GIDIS Early Career Researcher Award', purpose: 'Honours emerging researchers who have already made a distinctive contribution.' },
  { title: 'GIDIS AI Innovation Award', purpose: 'Recognizes significant innovation in artificial intelligence and related systems.' },
  { title: 'GIDIS Cybersecurity Excellence Award', purpose: 'Recognizes outstanding work in cybersecurity and digital trust.' },
  { title: 'GIDIS Digital Innovation Award', purpose: 'Honours impactful digital systems, products, or transformations.' },
  { title: 'GIDIS Industry Innovation Award', purpose: 'Recognizes industry leadership that advances intelligent and secure technologies.' },
  { title: 'GIDIS Outstanding Educator Award', purpose: 'Honours excellence in teaching, mentoring, and educational leadership.' },
  { title: 'GIDIS Women in Digital Intelligence Award', purpose: 'Recognizes distinguished contributions by women in the Institute’s fields.' },
  { title: 'GIDIS Young Scientist Award', purpose: 'Celebrates promising scientific achievement at an early career stage.' },
  { title: 'GIDIS Outstanding Service Award', purpose: 'Recognizes exceptional service to GIDIS and its professional community.' },
]

export const grants = [
  { title: 'Student Travel Grant', text: 'Support for students presenting work or participating in GIDIS-related scholarly events.' },
  { title: 'Conference Registration Grant', text: 'Assistance with registration for eligible GIDIS conferences and workshops.' },
  { title: 'Research Seed Grant', text: 'Early support for collaborative research aligned with GIDIS priorities.' },
  { title: 'Student Project Support', text: 'Encouragement for high-quality student projects in digital intelligence and security.' },
  { title: 'Women in Technology Support', text: 'Targeted support for participation, research, and professional development.' },
  { title: 'Early Career Researcher Support', text: 'Programs that help early-career researchers build networks and scholarly impact.' },
]

export const governanceDocuments = [
  'Constitution',
  'Bylaws',
  'Membership Bylaws',
  'Senior Membership Regulations',
  'Fellowship Regulations',
  'Distinguished Fellowship Regulations',
  'Chapter Regulations',
  'Election Procedures',
  'Awards Regulations',
  'Code of Ethics',
  'Professional Conduct Policy',
  'Conflict of Interest Policy',
  'Privacy Policy',
  'Refund Policy',
  'Terms & Conditions',
]

export const opportunities = [
  'Call for members',
  'Call for Fellows',
  'Call for chapter chairs',
  'Call for reviewers',
  'Call for speakers',
  'Research collaboration',
  'Internships',
  'Volunteer opportunities',
  'Committee vacancies',
]
