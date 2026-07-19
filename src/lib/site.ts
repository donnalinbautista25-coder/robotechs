export const site = {
  name: "Robotech",
  tagline: "IT staffing that moves business forward",
  description:
    "Robotech connects organizations with skilled technology professionals through specialist recruitment and workforce solutions.",
  email: "hello@robotech.com",
  phone: "+1 (555) 240-8800",
  address: "1200 Market Street, Suite 400, San Francisco, CA 94102",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM PT",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const services = [
  {
    slug: "permanent-placement",
    title: "Permanent Placement",
    summary:
      "Find lasting technology talent aligned to your culture, stack, and growth plans.",
    details:
      "We source, screen, and present candidates for full-time roles across engineering, product, data, security, and IT operations—so you hire with confidence.",
  },
  {
    slug: "contract-staffing",
    title: "Contract Staffing",
    summary:
      "Scale your team quickly with vetted contractors for projects and peak demand.",
    details:
      "Flexible engagements from weeks to multi-year programs. We handle sourcing and compliance so you stay focused on delivery.",
  },
  {
    slug: "contract-to-hire",
    title: "Contract-to-Hire",
    summary:
      "Evaluate fit in real work before making a permanent offer.",
    details:
      "Reduce hiring risk by starting with a contract engagement, then convert when both sides are ready.",
  },
  {
    slug: "executive-search",
    title: "Technology Leadership Search",
    summary:
      "Discreet search for CTOs, VPs of Engineering, and senior technical leaders.",
    details:
      "A retained, research-led process to identify leaders who can shape strategy, culture, and delivery at scale.",
  },
  {
    slug: "managed-workforce",
    title: "Managed Workforce Solutions",
    summary:
      "Program support for high-volume or specialized hiring initiatives.",
    details:
      "From surge hiring to niche skill campaigns, we build a delivery model around your timelines and quality bar.",
  },
  {
    slug: "talent-advisory",
    title: "Talent Market Advisory",
    summary:
      "Compensation, availability, and skills insight to guide smarter hiring decisions.",
    details:
      "Practical market intelligence so employers and candidates make informed moves in a fast-changing tech landscape.",
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
