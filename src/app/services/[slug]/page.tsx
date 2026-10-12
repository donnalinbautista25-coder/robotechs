import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { industries, staffingRoles, staffingSteps } from "@/lib/site";
import styles from "../services.module.css";

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
            <div className="container">
              <p className="eyebrow">Roles</p>
              <h2>Skilled IT talent for enterprise-level engagements</h2>
              <div className="accent-rule" />
              <p className="lead">We support roles across:</p>
              <div className={styles.chips}>
                {staffingRoles.map((role) => (
                  <span key={role} className={styles.chip}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="section section--grey">
            <div className="container">
              <p className="eyebrow">Our model</p>
              <h2>How our staffing model works</h2>
              <div className="accent-rule" />
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

          <section className="section">
            <div className="container">
              <p className="eyebrow">Coverage</p>
              <h2>Industries supported</h2>
              <div className="accent-rule" />
              <div className={styles.chips}>
                {industries.map((industry) => (
                  <span key={industry} className={styles.chip}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="section">
          <div className="container">
            <p className="eyebrow">Engagements</p>
            <h2>Technical talent for software and systems projects</h2>
            <div className="accent-rule" />
            <p className="lead">
              Our consultants are matched to assignments based on relevant
              experience, technical proficiency, and project requirements, with
              Robotechs managing the full employment relationship throughout
              the engagement.
            </p>
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
