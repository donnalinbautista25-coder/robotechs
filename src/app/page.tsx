import Link from "next/link";
import { services, specialties, site } from "@/lib/site";
import styles from "./home.module.css";

const stats = [
  { value: "12+", label: "Years placing IT talent" },
  { value: "2,400+", label: "Successful placements" },
  { value: "94%", label: "Client retention rate" },
  { value: "48 hrs", label: "Average shortlist turnaround" },
];

const reasons = [
  {
    title: "Specialist recruiters",
    copy: "Every search is led by consultants who understand technical roles, not generalist volume hiring.",
  },
  {
    title: "Quality over volume",
    copy: "We present calibrated shortlists—candidates assessed for skill, communication, and cultural fit.",
  },
  {
    title: "Partnership mindset",
    copy: "From briefing to onboarding, we stay close to hiring managers and candidates alike.",
  },
];

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.brandLockup} fade-up`}>
            <span>{site.name}</span>
          </h1>
          <p className={`${styles.heroHeadline} fade-up-delay`}>
            Connecting skilled technology professionals with organizations that need them.
          </p>
          <div className="gold-rule gold-rule--animated" />
          <p className={`${styles.heroCopy} fade-up-delay-2`}>
            Specialist IT staffing and workforce solutions—trusted recruitment for
            permanent, contract, and leadership roles.
          </p>
          <div className={`${styles.heroActions} fade-up-delay-2`}>
            <Link href="/contact" className="btn btn--gold">
              Hire top talent
            </Link>
            <Link href="/services" className="btn btn--outline">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className={`container ${styles.split}`}>
          <article className={styles.splitCard}>
            <p className="eyebrow">For employers</p>
            <h2>Build the team that delivers</h2>
            <p>
              From startups to enterprises, we help you hire engineers, architects,
              analysts, and technology leaders with speed and precision.
            </p>
            <Link href="/contact" className="btn btn--navy">
              Request talent
            </Link>
          </article>
          <article className={styles.splitCard}>
            <p className="eyebrow">For professionals</p>
            <h2>Find work that fits your craft</h2>
            <p>
              Looking for your next permanent or contract role? Our consultants match
              you with opportunities aligned to your skills and ambitions.
            </p>
            <Link href="/contact" className="btn btn--ghost">
              Speak with a recruiter
            </Link>
          </article>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">By the numbers</p>
          <h2>Your partner in technology hiring</h2>
          <div className="gold-rule" />
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.servicesHead}>
            <div>
              <p className="eyebrow">What we do</p>
              <h2>A solution for every workforce need</h2>
            </div>
            <Link href="/services" className="btn btn--ghost">
              View all services
            </Link>
          </div>

          <ul className={styles.serviceList}>
            {services.slice(0, 4).map((service) => (
              <li key={service.slug} className={styles.serviceItem}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">Specialisms</p>
          <h2>Deep coverage across technology disciplines</h2>
          <div className="gold-rule" />
          <p className="lead">
            We recruit across the modern IT landscape—helping organizations fill
            critical roles with professionals who are ready to contribute from day one.
          </p>
          <div className={styles.specialties}>
            {specialties.map((item) => (
              <span key={item} className={styles.specialty}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className={`container ${styles.why}`}>
          <div className={styles.whyCopy}>
            <p className="eyebrow">Why Robotech</p>
            <h2>We help you make the right decisions for tomorrow</h2>
            <div className="gold-rule" />
            <p>
              The right hire can transform a team. The right role can transform a
              career. Robotech exists to make those matches with clarity, care, and
              commercial urgency.
            </p>
          </div>
          <ul className={styles.whyList}>
            {reasons.map((reason) => (
              <li key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </li>
            ))}
          </ul>
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
            Contact Robotech
          </Link>
        </div>
      </section>
    </div>
  );
}
