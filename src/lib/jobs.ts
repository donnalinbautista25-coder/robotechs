export type SampleJob = {
  id: string;
  title: string;
  discipline: string;
  employment: string;
  type: string;
  location: string;
  summary: string;
  overview: string;
  responsibilities: readonly string[];
  qualifications: readonly string[];
};

export const sampleJobs: readonly SampleJob[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    discipline: "Software development",
    employment: "Direct employment",
    type: "Contract-to-hire",
    location: "United States",
    summary: "Application development on an enterprise technology assignment.",
    overview:
      "Support application development for an enterprise client. Robotechs employs you directly and stays involved from onboarding through the assignment.",
    responsibilities: [
      "Build and maintain application features with the client engineering team",
      "Review code and take part in technical design discussions",
      "Troubleshoot defects and document changes for handover",
      "Work within the client’s delivery process and tools",
    ],
    qualifications: [
      "Experience in application development for business or enterprise systems",
      "Comfort working in an existing codebase and a defined delivery process",
      "Clear communication with technical and non-technical partners",
    ],
  },
  {
    id: "cloud-infrastructure-engineer",
    title: "Cloud Infrastructure Engineer",
    discipline: "Cloud infrastructure",
    employment: "Direct employment",
    type: "Contract",
    location: "United States",
    summary: "Cloud platform work for enterprise applications and environments.",
    overview:
      "Support the cloud platforms that enterprise applications run on. The assignment covers environments, automation, and day-to-day reliability, with Robotechs as your employer.",
    responsibilities: [
      "Operate cloud environments used by enterprise applications",
      "Support infrastructure automation and release pipelines",
      "Monitor reliability and help resolve operational issues",
      "Document platform standards for the client team",
    ],
    qualifications: [
      "Experience with a major cloud platform and infrastructure automation",
      "Familiarity with networking, identity, and environment management",
      "Experience supporting production systems",
    ],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    discipline: "Cybersecurity",
    employment: "Direct employment",
    type: "Contract",
    location: "United States",
    summary: "Security monitoring and control support for an enterprise environment.",
    overview:
      "Help an enterprise client watch, review, and document security issues. Robotechs employs you directly and provides support for the length of the assignment.",
    responsibilities: [
      "Monitor and investigate security events",
      "Support vulnerability review and remediation tracking",
      "Help apply access, logging, and control standards",
      "Document findings for the client security and technology teams",
    ],
    qualifications: [
      "Experience in security operations, vulnerability management, or related control work",
      "Familiarity with common security tools and incident documentation",
      "Careful handling of sensitive system information",
    ],
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    discipline: "Database administration",
    employment: "Direct employment",
    type: "Contract",
    location: "United States",
    summary: "Administration of databases that support enterprise applications.",
    overview:
      "Administer databases used by enterprise business applications. Robotechs is the employer, and the work follows the client’s change and support process.",
    responsibilities: [
      "Administer databases used by business applications",
      "Support backup, recovery, performance, and access requests",
      "Apply change procedures for schema and configuration updates",
      "Coordinate with application teams on data issues",
    ],
    qualifications: [
      "Experience administering relational databases in a business environment",
      "Familiarity with backup, performance, and access control practices",
      "Ability to follow change and documentation standards",
    ],
  },
];
