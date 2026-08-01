export const site = {
  name: "Robotechs Inc.",
  tagline: "IT Staffing & Outsourcing Services",
  description:
    "Robotechs Inc. connects organizations with skilled technology professionals through specialist recruitment and workforce solutions.",
  email: "hello@robotech.com",
  phone: "+1 (555) 240-8800",
  address: "1200 Market Street, Suite 400, San Francisco, CA 94102",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM PT",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact?audience=candidate", label: "Contact Us" },
] as const;

export const services = [
  {
    slug: "it-staffing",
    title: "IT Staffing",
    summary:
      "Place skilled technology professionals into permanent and contract roles with speed and precision.",
    details:
      "We source, screen, and present candidates across engineering, infrastructure, product, and IT operations so you hire with confidence.",
  },
  {
    slug: "workforce-solutions",
    title: "Workforce Solutions",
    summary:
      "Flexible workforce programs that scale with project demand and enterprise hiring goals.",
    details:
      "From surge hiring to managed programs, we build delivery models around your timelines, compliance needs, and quality bar.",
  },
  {
    slug: "software-development",
    title: "Software Development",
    summary:
      "Engineers and product talent for modern application, platform, and digital delivery teams.",
    details:
      "Full-stack, backend, frontend, mobile, and QA professionals matched to your stack, culture, and delivery cadence.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary:
      "Security specialists who protect systems, data, and enterprise resilience.",
    details:
      "Recruit for security engineering, GRC, SOC, identity, and cloud security roles with specialists who understand the domain.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    summary:
      "Cloud architects, platform engineers, and DevOps talent to modernize delivery.",
    details:
      "AWS, Azure, GCP, Kubernetes, CI/CD, and SRE expertise to keep your infrastructure reliable and scalable.",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    summary:
      "Data engineers, analysts, and scientists who turn information into decisions.",
    details:
      "Hire for pipelines, warehousing, BI, analytics engineering, and applied AI with candidates assessed for real delivery skill.",
  },
] as const;

export const specialties = [
  "Software Engineering",
  "Cloud & DevOps",
  "Data & Analytics",
  "Cybersecurity",
  "Product & Design",
  "IT Infrastructure",
  "AI & Machine Learning",
  "Quality Assurance",
] as const;
