import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  Globe2,
  Handshake,
  Headphones,
  LockKeyhole,
  ShieldCheck,
  Users,
} from "lucide-react";
import { services, site } from "@/lib/site";
import styles from "./home.module.css";

const features = [
  {
    title: "Direct Employment",
    copy: "W-2 employment options with clear ownership and accountability.",
    icon: Users,
  },
  {
    title: "Payroll & Compliance",
    copy: "Compliant onboarding, payroll, and workforce administration support.",
    icon: ClipboardCheck,
  },
  {
    title: "Enterprise Ready",
    copy: "Processes built for regulated industries and complex hiring needs.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Solutions",
    copy: "Permanent, contract, and hybrid models tailored to your roadmap.",
    icon: Handshake,
  },
  {
    title: "Ongoing Support",
    copy: "Dedicated consultants from briefing through placement and beyond.",
    icon: Headphones,
  },
];

const whyPoints = [
  "Specialist IT recruiters who understand technical roles",
  "Calibrated shortlists—quality over volume",
  "Transparent communication with hiring managers",
  "Flexible engagement models for every workforce need",
  "Nationwide reach with local market insight",
  "Long-term partnership mindset, not transactional filling",
];

const serviceIcons = {
  "it-staffing": Users,
  "workforce-solutions": Cloud,
  "software-development": Code2,
  cybersecurity: LockKeyhole,
  "cloud-devops": Cloud,
  "data-analytics": Database,
} as const;

const stats = [
  { value: "500+", label: "Employees", icon: Users },
  { value: "120+", label: "Client Partners", icon: Building2 },
  { value: "2,400+", label: "Consultants Placed", icon: Award },
  { value: "18+", label: "Industries Served", icon: Globe2 },
];

const trusted = [
  "Nexus Financial",
  "Northline Systems",
  "Aether Cloud",
  "Meridian Health",
  "Summit Retail",
  "Cascade Energy",
];

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <p className={`${styles.brandLine} fade-up`}>{site.name}</p>
          <h1 className={`${styles.heroTitle} fade-up-delay`}>
            Connecting top IT talent with enterprise{" "}
            <span className={styles.goldWord}>success</span>
          </h1>
          <p className={`${styles.heroCopy} fade-up-delay-2`}>
            Specialist IT staffing and outsourcing services that help organizations
            hire skilled professionals and build high-performing technology teams.
          </p>
          <div className={`${styles.heroActions} fade-up-delay-2`}>
            <Link href="/contact" className={`btn btn--gold ${styles.heroBtn}`}>
              Partner with us <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/contact" className={`btn btn--outline ${styles.heroBtn}`}>
              Submit talent <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className={`btn btn--outline ${styles.heroBtn}`}>
              View openings <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={`container ${styles.featuresGrid}`}>
          {features.map(({ title, copy, icon: Icon }) => (
            <article key={title} className={styles.feature}>
              <span className={styles.featureIcon} aria-hidden="true">
                <Icon strokeWidth={1.6} size={28} />
              </span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <p className="eyebrow">About {site.name}</p>
            <h2>IT staffing built for modern enterprises</h2>
            <div className="gold-rule" />
            <p>
              {site.name} partners with organizations to source, screen, and place
              technology professionals across permanent, contract, and project-based
              engagements. We combine specialist recruiting with practical workforce
              solutions so hiring stays fast, compliant, and high quality.
            </p>
            <p>
              From software engineering to cybersecurity and cloud infrastructure, our
              consultants understand the roles you need—and the outcomes you expect.
            </p>
            <Link href="/about" className={`btn btn--navy ${styles.aboutCta}`}>
              Learn more about us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>Why choose {site.name}</h2>
            <div className="gold-rule" />
            <ul className={styles.whyList}>
              {whyPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2
                    className={styles.check}
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.rFrame} aria-hidden="true">
            <span className={styles.rLetter}>R</span>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">What we offer</p>
            <h2>Our services</h2>
            <div className="gold-rule" />
          </div>

          <ul className={styles.serviceGrid}>
            {services.map((service) => {
              const Icon =
                serviceIcons[service.slug as keyof typeof serviceIcons] ?? Users;
              return (
                <li key={service.slug} className={styles.serviceCard}>
                  <span className={styles.serviceIcon} aria-hidden="true">
                    <Icon strokeWidth={1.5} size={30} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={styles.trusted}>
        <div className="container">
          <p className="eyebrow">Partnerships</p>
          <h2>Trusted by leading organizations</h2>
          <div className="gold-rule" />
          <ul className={styles.logoRow}>
            {trusted.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.statsSection}`}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map(({ value, label, icon: Icon }) => (
            <article key={label} className={styles.stat}>
              <span className={styles.statIcon} aria-hidden="true">
                <Icon strokeWidth={1.6} size={26} />
              </span>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--navy">
        <div className={`container ${styles.ctaBand}`}>
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Ready to strengthen your technology team?</h2>
            <p>
              Tell us what you need—roles, timelines, and constraints—and we will
              outline a clear path forward.
            </p>
          </div>
          <Link href="/contact" className="btn btn--gold">
            Partner with us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
