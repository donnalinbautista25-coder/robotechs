import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  GitMerge,
  LockKeyhole,
  MonitorCog,
  type LucideIcon,
} from "lucide-react";
import IndustryMarquee from "@/components/IndustryMarquee";
import PageHero from "@/components/PageHero";
import { staffingRoles, staffingSteps } from "@/lib/site";
import styles from "../services.module.css";

const roleIcons: Record<(typeof staffingRoles)[number], LucideIcon> = {
  "Software Engineering and Development": Code2,
  "Cloud Infrastructure and Platform Engineering": Cloud,
  "Database Administration": Database,
  "Systems Analysis": MonitorCog,
  Cybersecurity: LockKeyhole,
};

const deliveryFocus = [
  { title: "Application development", icon: Code2 },
  { title: "Systems integration", icon: GitMerge },
  { title: "Technical delivery", icon: MonitorCog },
] as const;

const pages = {
  "it-staffing": {
    title: "IT Staffing",
    description:
      "Robotechs sources, evaluates, and places qualified technology professionals into contract, contract-to-hire, project-based, and long-term assignments.",
  },
  "software-development": {
    title: "Software Development",
    description:
      "Robotechs places software development professionals into enterprise technology projects, supporting application development, systems integration, and technical delivery work.",
  },
} as const;

type Slug = keyof typeof pages;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug as Slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero title={page.title} description={page.description} />

      {slug === "it-staffing" ? (
        <>
          <section className="section">
            <div className={`container ${styles.split}`}>
              <div className={styles.frame}>
                <Image
                  src="/images/it-staffing.jpg"
                  alt="Technology professionals working across an enterprise floor"
                  fill
                  className={styles.frameImage}
                  sizes="(max-width: 800px) 100vw, 42vw"
                />
              </div>
              <div className={styles.copy}>
                <p className="eyebrow">Roles</p>
                <h2>Skilled IT talent for enterprise-level engagements</h2>
                <div className="accent-rule" />
                <p className="lead">
                  We support contract, contract-to-hire, project-based, and
                  long-term assignments across these disciplines.
                </p>
                <ul className={styles.roles}>
                  {staffingRoles.map((role) => {
                    const Icon = roleIcons[role];
                    return (
                      <li key={role}>
                        <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                        <span>{role}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>

          <section className="section section--grey">
            <div className={`container ${styles.model}`}>
              <div>
                <p className="eyebrow">Our model</p>
                <h2>How our staffing model works</h2>
                <div className="accent-rule" />
              </div>
              <ol className={styles.steps}>
                {staffingSteps.map((step, index) => (
                  <li key={step.title}>
                    <span className={styles.stepIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <IndustryMarquee title="Industries supported" />
        </>
      ) : (
        <section className="section">
          <div className="container">
            <div className={`${styles.split} ${styles.splitEnd}`}>
              <div className={styles.copy}>
                <p className="eyebrow">Engagements</p>
                <h2>Technical talent for software and systems projects</h2>
                <div className="accent-rule" />
                <p className="lead">
                  Our consultants are matched to assignments based on relevant
                  experience, technical proficiency, and project requirements,
                  with Robotechs managing the full employment relationship
                  throughout the engagement.
                </p>
                <p className={`eyebrow ${styles.focusLabel}`}>What the work covers</p>
                <ul className={styles.focus}>
                  {deliveryFocus.map(({ title, icon: Icon }) => (
                    <li key={title}>
                      <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.frame}>
                <Image
                  src="/images/software-office.jpg"
                  alt="A developer working at a laptop in an open office"
                  fill
                  className={styles.frameImage}
                  sizes="(max-width: 800px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">Next step</p>
          <h2>Talk with a workforce partner</h2>
          <div className="accent-rule" />
          <div className={styles.ctaRow}>
            <Link href="/partner" className="btn btn--primary">
              Partner With Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn btn--outline">
              All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
