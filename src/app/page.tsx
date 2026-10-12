import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  LockKeyhole,
  MonitorCog,
} from "lucide-react";
import HomeHero from "@/components/HomeHero";
import IndustryMarquee from "@/components/IndustryMarquee";
import { whatWeDo } from "@/lib/icons";
import { site } from "@/lib/site";
import styles from "./home.module.css";

const placedRoles = [
  { title: "Software engineers", icon: Code2 },
  { title: "Cloud specialists", icon: Cloud },
  { title: "Database administrators", icon: Database },
  { title: "Systems analysts", icon: MonitorCog },
  { title: "Cybersecurity professionals", icon: LockKeyhole },
] as const;

const assignmentTypes = [
  "Project-based",
  "Contract",
  "Contract-to-hire",
  "Long-term",
] as const;

export default function HomePage() {
  return (
    <div className={styles.home}>
      <HomeHero />

      <section className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.introLayout}`}>
          <div className={styles.introCopy}>
            <p className="eyebrow">{site.shortName}</p>
            <h2>Enterprise IT Talent. Delivered Through Trusted Partnerships.</h2>
            <div className="accent-rule" />
            <p className="lead">
              Robotechs is an IT staffing and outsourcing company that places
              skilled technology professionals with enterprise organizations
              through established workforce partners.
            </p>
            <p>
              Robotechs bridges the gap between highly skilled technology
              professionals and the workforce demands of enterprise clients. We
              recruit, employ, and support IT talent for project-based,
              contract, contract-to-hire, and long-term assignments.
            </p>
          </div>

          <aside className={styles.introPanel}>
            <div className={styles.introMedia}>
              <Image
                src="/images/tech-hiring.jpg"
                alt="Team reviewing a technology hiring plan"
                width={1024}
                height={741}
                className={styles.introImage}
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
            <p className="eyebrow">Who we place</p>
            <ul className={styles.introRoles}>
              {placedRoles.map(({ title, icon: Icon }) => (
                <li key={title}>
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
            <ul className={styles.assignmentTypes}>
              {assignmentTypes.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">What we do</p>
            <h2>Employment, partnerships, and enterprise-ready talent</h2>
          </div>
          <div className={styles.featuresGrid}>
            {whatWeDo.map(({ title, copy, icon: Icon }) => (
              <article key={title} className={styles.feature}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <Icon strokeWidth={1.5} size={22} />
                </span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <IndustryMarquee />

      <section className="section section--grey">
        <div className="container">
          <p className="eyebrow">Why partner with Robotechs</p>
          <h2>A workforce partner built for enterprise-scale staffing</h2>
          <div className="accent-rule" />
          <p className="lead">
            A growing, dependable workforce partner built for enterprise-scale
            staffing needs. We serve as employer of record, payroll
            administrator, and full compliance manager, so your team can focus
            on placements, not paperwork.
          </p>
          <Link href="/partner#why" className={`btn btn--navy ${styles.aboutCta}`}>
            Why partner with Robotechs <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section section--navy">
        <div className={`container ${styles.ctaBand}`}>
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Ready to build your enterprise workforce pipeline?</h2>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/partner" className="btn btn--primary">
              Partner With Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn btn--outline">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
