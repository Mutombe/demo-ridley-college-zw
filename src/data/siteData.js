export const designTokens = {
  heroStyle: "strips",
  typography: {
    heading: "Raleway",
    body: "Merriweather",
    display: "Fira Sans",
  },
  effects: {
    noise: false,
    glassmorphism: "none",
    floatingShapes: true,
    scrollProgress: false,
    meshGradient: true,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "carousel",
  testimonialStyle: "slider",
  statsStyle: "icon-boxes",
  bgPattern: "dots",
  homeSectionOrder: [
    "hero", "services", "projects", "stats", "testimonials", "whyChooseUs", "cta"
  ],
};

const siteData = {
  business: {
    name: "RIDLEY COLLEGE ZW", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    legalName: "Ridley College Zimbabwe (Pvt) Ltd",
    tagline: "Modern Education, Exceptional Results",
    description:
      "Ridley College is a premier private college in Harare's Pomona suburb, delivering personalised education, expert tutoring, and internationally recognised qualifications that unlock limitless potential for every student.",
    phone: "+263 77 779 2394",
    phoneRaw: "+263777792394",
    whatsappNumber: "263777792394",
    email: "info@ridleycollegezw.co.zw",
    address: "4 Inverary Rd Pomona, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5.0,
    ratingRounded: 5,
    reviewCount: 15,
    established: "2015",
    yearsExperience: "10+",
    projectsCompleted: "3,000+",
    employees: "40+",
    coordinates: { lat: -17.753784, lng: 31.081308 },
    hours: [
      { day: "Monday - Sunday", time: "Open 24 Hours" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.081308!3d-17.753784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ1JzEzLjYiUyAzMcKwMDQnNTIuNyJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "ridley-college-zw-cookie-consent",
    socialLinks: { facebook: "#", linkedin: "#", instagram: "#" },
  },

  navbar: { logoLine1: "Ridley", logoLine2: "College" },

  hero: {
    badge: "5-Star Rated Private College",
    titleParts: [
      { text: "Elevate Your " },
      { text: "Potential.", highlight: true },
      { text: " Excel Beyond Limits." },
    ],
    subtitle:
      "At Ridley College, we believe every student is capable of extraordinary achievement. Our personalised approach, expert tutors, and intimate class sizes ensure no talent goes unnoticed and no potential goes unrealised.",
    ctaPrimary: "Apply Now",
    ctaSecondary: "Our Programmes",
    trustBadge: "Accredited & Recognised",
    backgroundImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200",
    backgroundAlt: "Ridley College students in an engaging classroom session",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200", alt: "Students in a modern classroom environment" },
      { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400", alt: "Private college campus with manicured gardens" },
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400", alt: "One-on-one tutoring session with expert mentor" },
    ],
  },

  stats: [
    { number: "3,000+", label: "Students Tutored" },
    { number: "10+", label: "Years of Excellence" },
    { number: "100%", label: "Dedication" },
    { number: "15+", label: "Subject Areas" },
  ],

  servicesPreview: [
    { iconName: "GraduationCap", title: "Cambridge IGCSE & A-Level", desc: "Comprehensive preparation for Cambridge international examinations with proven track records of distinction-level results." },
    { iconName: "Users", title: "Private Tutoring", desc: "One-on-one sessions with subject specialists who adapt to each student's learning style, pace, and academic goals." },
    { iconName: "Lightbulb", title: "ZIMSEC Preparation", desc: "Intensive O-Level and A-Level preparation with past paper drills, model answers, and exam technique coaching." },
    { iconName: "Star", title: "Accelerated Learning", desc: "Fast-track programmes for motivated students who want to complete qualifications ahead of schedule without sacrificing depth." },
    { iconName: "ChartLineUp", title: "Exam Revision Bootcamps", desc: "Intensive 2-4 week revision programmes before major exams. Focused, structured, and results-driven preparation." },
    { iconName: "Rocket", title: "University Prep & Counselling", desc: "SAT/IELTS preparation, university application guidance, and personal statement coaching for international admissions." },
  ],

  featuredProjects: [
    { image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200", title: "Cambridge A-Level Success 2024", category: "Exam Results" },
    { image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", title: "New Science Laboratory", category: "Facilities" },
    { image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800", title: "International University Placements", category: "Student Success" },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "The Ridley " },
      { text: "Advantage", highlight: true },
    ],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
    imageAlt: "Ridley College tutor working closely with a student",
    experienceYears: "5.0",
    experienceLabel: "Star Rating",
    points: [
      { title: "Intimate Class Sizes", desc: "Maximum 12 students per class ensures every learner receives personal attention and immediate feedback from expert tutors." },
      { title: "Expert Subject Specialists", desc: "Our tutors hold advanced degrees and have proven track records in Cambridge and ZIMSEC examinations. They do not just teach, they mentor." },
      { title: "Beautiful Pomona Campus", desc: "A serene, leafy campus designed for focused learning. Modern classrooms, science labs, and study spaces in one of Harare's finest suburbs." },
      { title: "Proven Exam Results", desc: "Consistent distinction rates above 80% in Cambridge and ZIMSEC examinations. Our results speak for themselves, year after year." },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400",
    backgroundAlt: "Ridley College campus in Pomona, Harare",
    titleParts: [
      { text: "Excellence Is " },
      { text: "Not Optional.", highlight: true },
      { text: " It Is Expected." },
    ],
    subtitle: "Spaces are limited. Apply now for our next intake and discover what personalised education can do for your academic future.",
    ctaPrimary: "Apply for Admission",
    whatsappText: "Hello Ridley College! I am interested in applying. Please share programme details and fees.",
  },

  homeTestimonials: [
    { name: "Tadiwanashe Mujuru", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "Cambridge A-Level Student", text: "Ridley College transformed my grades completely. I went from a C to an A* in Mathematics in just one term. The tutors here are genuinely exceptional and they never give up on you.", rating: 5 },
    { name: "Ruvimbo Chikomba", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "Parent of IGCSE Student", text: "Moving our daughter to Ridley was the best decision we ever made. The small class sizes mean she gets personal attention. Her confidence and grades have both soared.", rating: 5 },
    { name: "Kundai Mashava", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "University Prep Student", text: "The SAT preparation and university counselling at Ridley helped me secure admission to a top UK university. The personal statement coaching was invaluable.", rating: 5 },
  ],

  about: {
    heroTitle: [{ text: "Where Every " }, { text: "Student", highlight: true }, { text: " Matters" }],
    heroSubtitle: "Ridley College was built on the conviction that personalised education produces extraordinary results.",
    storyImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    storyImageAlt: "Ridley College campus in Pomona",
    storyProjectCount: "3,000+",
    storyProjectLabel: "Students Mentored",
    storyTitle: "A College Built Around the Student, Not the System.",
    storyParagraphs: [
      "Ridley College was founded in 2015 by a group of educators who were frustrated with the factory-model of education. We believed that smaller classes, dedicated tutors, and personalised learning plans could produce dramatically better results.",
      "We chose Pomona for its tranquil, residential setting. A place where students can focus without the distractions of the city centre. Our campus feels like a second home, with modern facilities set among beautiful gardens.",
      "Today, Ridley College is recognised as one of Harare's finest private colleges, with a perfect 5-star rating and a track record of producing top performers in Cambridge and ZIMSEC examinations. Our alumni are studying at universities across the UK, South Africa, and beyond.",
    ],
    mission: "To provide personalised, world-class education that unlocks the full potential of every student, regardless of their starting point.",
    vision: "To be recognised as Southern Africa's premier private college for academic excellence, student welfare, and university placement success.",
    values: [
      { iconName: "Star", title: "Excellence", desc: "We set high standards and support every student to meet them." },
      { iconName: "Heart", title: "Care", desc: "Every student is known by name and supported as an individual." },
      { iconName: "Lightbulb", title: "Innovation", desc: "Modern teaching methods that engage and inspire learning." },
      { iconName: "ShieldCheck", title: "Integrity", desc: "Honest assessment, transparent communication, and ethical conduct." },
      { iconName: "Users", title: "Community", desc: "A warm, inclusive environment where students feel they belong." },
      { iconName: "Trophy", title: "Achievement", desc: "We celebrate success and learn from setbacks with resilience." },
    ],
    team: [
      { name: "Mr. Tawanda Ridley", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "College Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
      { name: "Mrs. Petronella Dube", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "Academic Coordinator", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Mr. Collins Makumbe", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "Head of Sciences", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Ms. Tatenda Mugabe", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "Student Welfare Officer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    ],
    milestones: [
      { year: "2015", title: "College Founded", desc: "Ridley College opens in Pomona with a vision for personalised education." },
      { year: "2017", title: "Cambridge Centre Status", desc: "Approved as an official Cambridge International examination centre." },
      { year: "2019", title: "100% Pass Rate", desc: "Achieved 100% pass rate in ZIMSEC O-Level examinations for the first time." },
      { year: "2021", title: "Science Lab Opening", desc: "State-of-the-art science laboratory opened, enhancing practical learning." },
      { year: "2023", title: "University Prep Launch", desc: "Launched SAT/IELTS preparation and international university counselling service." },
      { year: "2024", title: "Perfect 5-Star Rating", desc: "Achieved and maintained a perfect 5/5 rating from students and parents." },
    ],
    ctaTitle: "Experience the Ridley Difference",
    ctaSubtitle: "Book a campus visit and see why our students consistently outperform expectations.",
    ctaCta: "Book a Visit",
  },

  services: {
    heroTitle: [{ text: "Academic " }, { text: "Programmes", highlight: true }, { text: " & Tutoring" }],
    heroSubtitle: "From Cambridge IGCSE to university preparation, our programmes are designed to unlock your full academic potential.",
    items: [
      { iconName: "GraduationCap", title: "Cambridge IGCSE & A-Level", slug: "cambridge-igcse-alevel", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200", desc: "Comprehensive Cambridge International preparation with small classes, expert tutors, and consistent distinction-level results.", features: ["Official Cambridge examination centre", "Maximum 12 students per class", "Subject specialist tutors with advanced degrees", "Regular mock examinations and feedback", "Past paper libraries and study resources", "Consistent 80%+ distinction rate"] },
      { iconName: "Users", title: "Private Tutoring", slug: "private-tutoring", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800", desc: "One-on-one sessions tailored to your specific needs, learning style, and goals. From catch-up to extension, we meet you where you are.", features: ["Personalised learning plans for each student", "Flexible scheduling including evenings and weekends", "All subjects from primary to A-Level", "Progress reports shared with parents regularly", "Homework support and study skills coaching", "Online tutoring option available"] },
      { iconName: "Lightbulb", title: "ZIMSEC Preparation", slug: "zimsec-preparation", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", desc: "Intensive O-Level and A-Level preparation with proven exam technique coaching, model answers, and structured revision plans.", features: ["Full ZIMSEC syllabus coverage", "Past paper drilling and exam technique workshops", "Model answer analysis and marking scheme mastery", "Regular progress assessments and parent feedback", "Subject-specific revision notes and summaries", "Guaranteed improvement or extended support"] },
      { iconName: "Star", title: "Accelerated Learning", slug: "accelerated-learning", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", desc: "Fast-track programmes for gifted and motivated students who want to complete qualifications ahead of schedule.", features: ["Complete O-Levels in 1 year instead of 2", "A-Level fast-track for advanced students", "Enrichment activities and academic competitions", "University-level preparation modules", "Mentorship from top-performing alumni", "Recognised by universities for early entry"] },
      { iconName: "ChartLineUp", title: "Exam Revision Bootcamps", slug: "exam-revision-bootcamps", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", desc: "Intensive 2-4 week pre-examination programmes that compress and consolidate key content, sharpen exam technique, and build confidence.", features: ["2-week and 4-week intensive options", "Daily structured sessions from 8am-4pm", "Focus on high-yield topics and common exam traps", "Timed practice papers under exam conditions", "One-on-one feedback sessions after each mock", "Breakfast and lunch provided during bootcamp"] },
      { iconName: "Rocket", title: "University Prep & Counselling", slug: "university-prep-counselling", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", desc: "SAT, IELTS, and TOEFL preparation combined with expert university application guidance and personal statement coaching.", features: ["SAT and IELTS preparation courses", "University application strategy and guidance", "Personal statement and essay coaching", "Interview preparation and mock interviews", "Scholarship identification and application support", "Partnerships with universities in UK, SA, and beyond"] },
    ],
    ctaTitle: "Find the Right Programme",
    ctaSubtitle: "Every student is different. Let us help you choose the path that unlocks your potential.",
  },

  projects: {
    heroTitle: [{ text: "Our " }, { text: "Achievements", highlight: true }],
    heroSubtitle: "From outstanding exam results to campus development, explore the milestones that define Ridley College.",
    categories: ["All", "Exam Results", "Facilities", "Student Success", "Community"],
    items: [
      { id: 1, title: "Cambridge A-Level Success 2024", category: "Exam Results", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200", desc: "92% of A-Level students achieved A*-B grades, with 6 students earning straight A*s across all subjects.", services: ["Cambridge A-Level", "Mathematics", "Sciences"] },
      { id: 2, title: "New Science Laboratory", category: "Facilities", location: "Pomona Campus", year: "2024", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", desc: "A fully equipped physics, chemistry, and biology laboratory enabling hands-on practical examinations.", services: ["Lab Construction", "Equipment Installation"] },
      { id: 3, title: "UK University Placements", category: "Student Success", location: "United Kingdom", year: "2024", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800", desc: "12 Ridley students secured places at Russell Group universities in the UK, including UCL and Edinburgh.", services: ["University Prep", "IELTS Training"] },
      { id: 4, title: "ZIMSEC O-Level 100% Pass Rate", category: "Exam Results", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", desc: "Third consecutive year of 100% pass rate in ZIMSEC O-Level examinations. 78% achieved 5+ A grades.", services: ["ZIMSEC Preparation", "Exam Coaching"] },
      { id: 5, title: "Community Tutoring Outreach", category: "Community", location: "Epworth, Harare", year: "2023", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", desc: "Free weekend tutoring programme for 50 students from disadvantaged backgrounds in Epworth.", services: ["Community Outreach", "Mathematics Tutoring"] },
      { id: 6, title: "Digital Learning Platform", category: "Facilities", location: "Online", year: "2022", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", desc: "Launch of Ridley Online, providing recorded lessons and interactive exercises for remote learners.", services: ["E-Learning", "Content Development"] },
    ],
  },

  reviews: {
    heroTitle: [{ text: "What Parents & " }, { text: "Students", highlight: true }, { text: " Say" }],
    heroSubtitle: "Our perfect 5-star rating reflects the transformative impact Ridley College has on every student who walks through our doors.",
    ratingBreakdown: [{ stars: 5, count: 15 }, { stars: 4, count: 0 }, { stars: 3, count: 0 }, { stars: 2, count: 0 }, { stars: 1, count: 0 }],
    items: [
      { name: "Tadiwanashe Mujuru", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face", role: "A-Level Student", text: "Ridley College transformed my grades completely. I went from a C to an A* in Mathematics in just one term.", rating: 5, date: "2024-09-05", project: "Cambridge A-Level" },
      { name: "Ruvimbo Chikomba", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face", role: "Parent", text: "Moving our daughter to Ridley was the best decision we ever made. The small class sizes mean she gets personal attention.", rating: 5, date: "2024-08-20", project: "IGCSE Programme" },
      { name: "Kundai Mashava", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&h=100&fit=crop&crop=face", role: "University Prep Student", text: "The SAT preparation and university counselling helped me secure admission to a top UK university.", rating: 5, date: "2024-07-15", project: "University Prep" },
      { name: "Mr. Tapiwa Nyoni", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face", role: "Parent of Two Students", text: "Both my children attend Ridley and the improvement is remarkable. The tutors know each child's strengths and weaknesses.", rating: 5, date: "2024-06-10", project: "O-Level Programme" },
      { name: "Nyasha Dziva", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face", role: "IGCSE Student", text: "The exam revision bootcamp before my IGCSEs was incredible. Two weeks of intense preparation that completely changed my results.", rating: 5, date: "2024-05-22", project: "Revision Bootcamp" },
      { name: "Mrs. Chenai Pfumbi", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face", role: "Parent", text: "Ridley College feels like a family. The teachers genuinely care about each student. My son's confidence has grown tremendously since joining.", rating: 5, date: "2024-04-18", project: "Private Tutoring" },
      { name: "Tino Machiridza", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face", role: "A-Level Graduate", text: "I achieved 3 A*s at A-Level thanks to Ridley. The accelerated learning programme let me complete in 18 months instead of 2 years.", rating: 5, date: "2024-03-12", project: "Accelerated Learning" },
      { name: "Panashe Chigara", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", role: "O-Level Student", text: "The ZIMSEC preparation is thorough and effective. Past paper drills and exam technique workshops made all the difference.", rating: 5, date: "2024-02-28", project: "ZIMSEC Preparation" },
      { name: "Dr. Fungai Moyo", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face", role: "Parent", text: "As a doctor, I understand the importance of personalised attention. Ridley provides exactly that. My daughter is thriving academically and socially.", rating: 5, date: "2024-01-15", project: "Cambridge IGCSE" },
      { name: "Rutendo Chidemo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", role: "Private Tutoring Student", text: "The one-on-one tutoring in Chemistry helped me understand concepts I had struggled with for years. My tutor was patient and brilliant.", rating: 5, date: "2023-12-08", project: "Private Tutoring" },
      { name: "Kudzai Madanhire", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "A-Level Student", text: "Ridley's university counselling service is exceptional. They helped me identify the right universities and craft a compelling personal statement.", rating: 5, date: "2023-11-20", project: "University Prep" },
      { name: "Mrs. Sithembile Ncube", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "Parent", text: "The communication with parents is outstanding. Regular progress reports, parent meetings, and an open-door policy make me feel involved in my child's education.", rating: 5, date: "2023-10-15", project: "Parent Communication" },
      { name: "Tinotenda Shumba", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "IGCSE Graduate", text: "I achieved 9 A*s in my IGCSEs. Ridley's structured approach and dedicated tutors made this possible. I am forever grateful.", rating: 5, date: "2023-09-28", project: "Cambridge IGCSE" },
      { name: "Anopa Mutasa", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "Revision Bootcamp Student", text: "The bootcamp was intense but worth every minute. The daily mock exams and immediate feedback built my confidence for the real thing.", rating: 5, date: "2023-08-14", project: "Revision Bootcamp" },
      { name: "Mr. Simbarashe Choto", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "Parent", text: "We transferred our son from a government school and the difference was immediate. Smaller classes, better resources, and tutors who actually care.", rating: 5, date: "2023-07-22", project: "O-Level Programme" },
      { name: "Makanaka Zvobgo", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "A-Level Student", text: "The Pomona campus is beautiful and peaceful. It is the perfect environment for focused studying. I love coming to school every day.", rating: 5, date: "2023-06-30", project: "Campus Life" },
      { name: "Tafadzwa Chirinda", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "IELTS Prep Student", text: "I needed an IELTS score of 7.0 for university admission. Ridley's preparation course helped me achieve 7.5. Their techniques really work.", rating: 5, date: "2023-05-15", project: "IELTS Preparation" },
    ],
    ctaTitle: "Experience the Ridley Difference",
    ctaSubtitle: "See for yourself why every single parent and student rates us 5 stars.",
    ctaCta: "Book a Campus Visit",
    ctaWhatsappText: "Hello Ridley College! I would like to book a campus visit and learn about your programmes.",
  },

  contact: {
    heroTitle: [{ text: "Get in " }, { text: "Touch", highlight: true }],
    heroSubtitle: "Book a campus visit, enquire about programmes, or start your application. We are here to help.",
    formTitle: "Send Us a Message",
    formSubtitle: "Our admissions team responds within 24 hours.",
  },

  careers: {
    heroTitle: [{ text: "Join Our " }, { text: "Team", highlight: true }],
    heroSubtitle: "We are looking for passionate educators who believe in the power of personalised education.",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400",
    cultureTitle: "Teaching at Ridley",
    cultureItems: [
      { iconName: "Heart", title: "Student-Centred", desc: "Every decision we make starts with the question: what is best for the student?" },
      { iconName: "Users", title: "Small Community", desc: "A close-knit team where every teacher is known, valued, and supported." },
      { iconName: "Star", title: "Excellence Expected", desc: "We hire the best and give them the freedom to deliver exceptional results." },
    ],
    cultureImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
    cultureImageAlt: "Ridley College tutors in a planning session",
    cultureTagline: "Where Great Teachers Thrive",
    cultureTaglineDesc: "Small classes mean you can actually teach. Individual attention means you see the impact of your work every day.",
    benefits: [
      { iconName: "CurrencyDollar", title: "Premium Compensation", desc: "Above-market salaries reflecting the calibre of educators we hire." },
      { iconName: "Users", title: "Small Class Sizes", desc: "Maximum 12 students means you can focus on teaching, not crowd control." },
      { iconName: "GraduationCap", title: "Professional Development", desc: "Cambridge training, conference attendance, and certification support." },
      { iconName: "Heart", title: "Medical Aid", desc: "Comprehensive medical coverage for you and your family." },
      { iconName: "Clock", title: "Work-Life Balance", desc: "Reasonable teaching loads and no excessive administrative burden." },
      { iconName: "Rocket", title: "Beautiful Campus", desc: "Work in a serene, well-resourced environment in Pomona." },
    ],
    positions: [
      { id: 1, title: "Mathematics Tutor (A-Level)", department: "Sciences", type: "Full-Time", location: "Pomona, Harare", description: "Teach Cambridge and ZIMSEC A-Level Mathematics. Prepare students for top university admissions.", requirements: ["Degree in Mathematics or related field", "Cambridge teaching experience preferred", "Proven track record of A*-A results", "Passionate about personalised education"] },
      { id: 2, title: "English Language & Literature Tutor", department: "Humanities", type: "Full-Time", location: "Pomona, Harare", description: "Deliver engaging IGCSE and A-Level English lessons. Support university personal statement writing.", requirements: ["Degree in English or Education", "IGCSE/A-Level teaching experience", "Strong written communication skills", "Creative and student-centred approach"] },
      { id: 3, title: "Science Tutor (Physics/Chemistry)", department: "Sciences", type: "Full-Time", location: "Pomona, Harare", description: "Teach practical and theoretical science to IGCSE and A-Level students in our new laboratory.", requirements: ["Degree in Physics, Chemistry, or related field", "Laboratory management experience", "Cambridge or ZIMSEC teaching track record", "Ability to make science accessible and exciting"] },
      { id: 4, title: "University Counsellor", department: "Student Services", type: "Part-Time", location: "Pomona, Harare", description: "Guide students through international university applications, personal statements, and scholarship applications.", requirements: ["Experience in university admissions counselling", "Knowledge of UK, SA, and US application processes", "Strong writing and editing skills", "Established university contacts preferred"] },
    ],
    generalApplicationTitle: "Interested in Joining Ridley?",
    generalApplicationSubtitle: "We are always open to hearing from exceptional educators. Send us your CV.",
    generalApplicationCta: "Apply Now",
  },

  footer: {
    description: "Ridley College is a premier private college in Pomona, Harare, offering Cambridge IGCSE, A-Level, ZIMSEC preparation, private tutoring, and university counselling.",
    copyright: "2025 Ridley College ZW. All rights reserved.",
  },
};

export default siteData;
