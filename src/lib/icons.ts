import {
  Briefcase,
  Building2,
  Code2,
  Handshake,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "it-staffing": Users,
  "software-development": Code2,
  "workforce-management": Briefcase,
};

export const whatWeDo = [
  {
    title: "Direct Employment",
    copy: "Every consultant placed through Robotechs is directly employed by us. We manage payroll, onboarding, compliance, and ongoing support.",
    icon: Users,
  },
  {
    title: "Workforce Partnerships",
    copy: "We work alongside established staffing and recruiting firms to connect qualified talent with enterprise-level opportunities.",
    icon: Handshake,
  },
  {
    title: "Enterprise-Ready Talent",
    copy: "Our professionals are matched to assignments based on technical skill, certifications, and career goals, built to meet enterprise standards.",
    icon: ShieldCheck,
  },
] as const;

export const contactHighlights = [
  {
    title: "Staffing partners",
    copy: "Staffing firms, recruiting partners, and MSPs can start a dedicated partnership inquiry.",
    icon: Handshake,
  },
  {
    title: "Job seekers",
    copy: "Technology professionals can submit a resume or sign up for job alerts.",
    icon: Users,
  },
  {
    title: "General inquiries",
    copy: "Enterprise clients and other visitors can reach the team from this page.",
    icon: Building2,
  },
] as const;
