import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import { whatWeDo } from "@/lib/icons";
import { industries, site } from "@/lib/site";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <HomeHero />

      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <p className="eyebrow">{site.shortName}</p>
          <h2>Enterprise IT Talent. Delivered Through Trusted Partnerships.</h2>
          <div className="accent-rule" />
          <p className="lead">
            Robotechs is an IT staffing and outsourcing company that places
            skilled technology professionals with enterprise organizations
            through established workforce partners.
          </p>
          <p className={styles.approachLead}>
            Robotechs bridges the gap between highly skilled technology
            professionals and the workforce demands of enterprise clients. We
            recruit, employ, and support IT talent, including software
            engineers, cloud specialists, database administrators, systems
            analysts, and cybersecurity professionals, for project-based,
            contract, contract-to-hire, and long-term assignments.
          </p>
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

      <section className="section">
        <div className="container">
          <p className="eyebrow">Coverage</p>
          <h2>Industries we support</h2>
          <div className="accent-rule" />
          <ul className={styles.industryList}>
            {industries.map((industry) => (
              <li key={industry}>
                <CheckCircle2 size={15} aria-hidden="true" />
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

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
