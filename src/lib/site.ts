export const site = {
  name: "Robotechs Inc.",
  shortName: "Robotechs",
  tagline: "Where Global Talent Meets Innovation",
  description:
    "Robotechs is an IT staffing and outsourcing company that places skilled technology professionals with enterprise organizations through established workforce partners.",
  email: "info@robotechs.com",
  phone: "",
  address: "",
  hours: "",
};

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/it-staffing", label: "IT Staffing" },
      { href: "/services/software-development", label: "Software Development" },
    ],
  },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/submit-talent", label: "Submit Talent" },
  { href: "/capability", label: "Capability Statement" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const industries = [
  "Financial Services",
  "Healthcare",
  "Insurance",
  "Technology",
  "Retail",
  "Manufacturing",
  "Telecommunications",
] as const;

export const services = [
  {
    slug: "it-staffing",
    title: "IT Staffing",
    summary:
      "Sourcing, recruiting, and placing skilled IT professionals, including software engineers, cloud specialists, systems analysts, database administrators, and cybersecurity experts, into enterprise assignments.",
    href: "/services/it-staffing",
  },
  {
    slug: "software-development",
    title: "Software Development",
    summary:
      "Technology professionals supporting application development, systems engineering, and technical project work for enterprise clients.",
    href: "/services/software-development",
  },
  {
    slug: "workforce-management",
    title: "Workforce Management",
    summary:
      "Direct employment, payroll administration, onboarding, and compliance support for every consultant we place, so partners and clients can rely on a fully managed workforce relationship.",
  },
] as const;

export const staffingRoles = [
  "Software Engineering and Development",
  "Cloud Infrastructure and Platform Engineering",
  "Database Administration",
  "Systems Analysis",
  "Cybersecurity",
] as const;

export const staffingSteps = [
  {
    title: "Sourcing and Evaluation",
    copy: "We identify candidates based on technical skill, certifications, experience, and career goals.",
  },
  {
    title: "Matching",
    copy: "Candidates are matched to assignments that fit both client needs and individual career objectives.",
  },
  {
    title: "Direct Employment",
    copy: "Robotechs employs every placed consultant directly, managing payroll, compliance, and onboarding.",
  },
  {
    title: "Ongoing Support",
    copy: "We maintain communication between employees, clients, and workforce partners throughout the assignment.",
  },
] as const;

export const employmentHandles = [
  "Onboarding and orientation",
  "Payroll administration",
  "Employment verification and work authorization compliance",
  "Timesheet and performance management",
  "Ongoing employee support throughout the assignment",
] as const;

export const partnerHandles = [
  "Employer-of-record services",
  "Payroll administration",
  "Onboarding and orientation",
  "Employment verification and work authorization compliance",
  "Timesheet and performance management",
  "Ongoing employee support for the duration of the assignment",
] as const;

export const whyRobotechs = [
  {
    title: "Direct Employment Model",
    copy: "Robotechs employs every consultant directly, simplifying the workforce relationship for partners and clients.",
  },
  {
    title: "Payroll Administration",
    copy: "Full payroll management handled in house, accurately and on time.",
  },
  {
    title: "Compliance Management",
    copy: "Employment verification, work authorization, and regulatory compliance handled at every step.",
  },
  {
    title: "Enterprise-Ready Consultants",
    copy: "Technical talent matched to the standards of large-scale enterprise engagements.",
  },
  {
    title: "Flexible Staffing Support",
    copy: "A workforce model built to scale as partnership and project volume grows.",
  },
] as const;

export const careerReasons = [
  "Direct employment with dedicated onboarding support",
  "Placement on enterprise-level technology projects",
  "Ongoing career and assignment support",
  "Opportunities across multiple industries and technical disciplines",
] as const;

export const partnerExamples = [
  "Hays",
  "TEKsystems",
  "Insight Global",
  "Randstad",
  "Robert Half",
  "Adecco Group",
  "ManpowerGroup",
  "Kelly Services",
] as const;

export const privacyOutline = [
  "Introduction and Scope",
  "Information We Collect (resumes, contact forms, employment records)",
  "How We Use Information",
  "Information Sharing (staffing partners, clients, service providers)",
  "Data Security",
  "Candidate and Employee Data Handling",
  "Cookies and Website Analytics",
  "Your Rights and Choices",
  "Contact Information for Privacy Inquiries",
] as const;

export const termsOutline = [
  "Acceptance of Terms",
  "Use of Website",
  "Submission of Resumes and Consultant Profiles",
  "Partnership Inquiries and Communications",
  "Intellectual Property",
  "Disclaimers and Limitation of Liability",
  "Governing Law",
  "Changes to Terms",
  "Contact Information",
] as const;
