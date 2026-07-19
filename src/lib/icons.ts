import {
  Award,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Compass,
  Database,
  Handshake,
  HeartHandshake,
  LockKeyhole,
  MessageSquare,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "it-staffing": Users,
  "workforce-solutions": Briefcase,
  "software-development": Code2,
  cybersecurity: LockKeyhole,
  "cloud-devops": Cloud,
  "data-analytics": Database,
};

export const aboutProcess = [
  {
    title: "Listen",
    copy: "We begin with a precise briefing: role outcomes, team context, must-have skills, and timeline.",
    icon: MessageSquare,
  },
  {
    title: "Source & assess",
    copy: "Our consultants map the market, engage talent, and evaluate technical and interpersonal fit.",
    icon: Search,
  },
  {
    title: "Present & advise",
    copy: "You receive a calibrated shortlist with clear context—so decisions move faster and with fewer surprises.",
    icon: Target,
  },
  {
    title: "Support to start",
    copy: "We stay involved through offer, acceptance, and onboarding to protect a strong start for everyone.",
    icon: Rocket,
  },
] as const;

export const aboutValues = [
  {
    title: "Integrity",
    copy: "Honest counsel for clients and candidates. We set expectations clearly and follow through.",
    icon: Scale,
  },
  {
    title: "Craft",
    copy: "Recruitment is a discipline. We invest in market knowledge, technical literacy, and process excellence.",
    icon: Sparkles,
  },
  {
    title: "Partnership",
    copy: "We measure success by long-term outcomes—retained talent, trusted relationships, and repeat engagement.",
    icon: Handshake,
  },
  {
    title: "Momentum",
    copy: "Hiring windows close quickly. We move with urgency without compromising quality.",
    icon: Award,
  },
] as const;

export const contactHighlights = [
  {
    title: "Employers",
    copy: "Partner with us to fill critical technology roles with vetted professionals.",
    icon: Building2,
  },
  {
    title: "Candidates",
    copy: "Tell us about your skills and goals—we will help match you with the right opportunity.",
    icon: HeartHandshake,
  },
  {
    title: "Trusted process",
    copy: "Clear communication, specialist recruiters, and support from briefing to onboarding.",
    icon: ShieldCheck,
  },
  {
    title: "Clear next steps",
    copy: "Share a few details and a Robotech consultant will respond within one business day.",
    icon: Compass,
  },
] as const;
