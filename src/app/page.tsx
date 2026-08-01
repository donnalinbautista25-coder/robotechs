import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Headphones,
  ShieldCheck,
  Users,
} from "lucide-react";
import ParallaxBand from "@/components/ParallaxBand";
import ParallaxHero from "@/components/ParallaxHero";
import { serviceIcons } from "@/lib/icons";
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

const approach = [
  {
    title: "Listen first",
    copy: "We start with your roadmap, constraints, and culture—not a generic job description.",
  },
  {
    title: "Calibrate tightly",
    copy: "Every shortlist is scored against technical depth, delivery history, and team fit.",
  },
  {
    title: "Stay accountable",
    copy: "From offer through onboarding, your consultant remains the single point of ownership.",
  },
];

const audiences = [
  {
    title: "For employers",
    copy: "Scale engineering, security, cloud, and data teams with recruiters who speak your stack.",
    href: "/contact?audience=employer",
    cta: "Start a search",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "For professionals",
    copy: "Access roles that match your skills, compensation expectations, and career direction.",
    href: "/contact?audience=candidate",
    cta: "Explore opportunities",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },
];

const stats = [
  { value: "500+", label: "Employees" },
  { value: "120+", label: "Client Partners" },
  { value: "2,400+", label: "Consultants Placed" },
  { value: "18+", label: "Industries Served" },
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
      <ParallaxHero image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80">
        <p className={styles.brandLine}>{site.name}</p>
        <h1 className={styles.heroTitle}>
          Connecting top IT talent with enterprise success
        </h1>
        <p className={styles.heroCopy}>
          Specialist IT staffing and outsourcing services that help organizations
          hire skilled professionals and build high-performing technology teams.
        </p>
        <div className={styles.heroActions}>
          <Link
            href="/contact?audience=employer"
            className={`btn btn--primary ${styles.heroBtn}`}
          >
            Partner with us <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/contact?audience=candidate"
            className={`btn btn--outline ${styles.heroBtn}`}
          >
            Submit talent
          </Link>
        </div>
      </ParallaxHero>

      <section className={styles.features}>
        <div className={`container ${styles.featuresGrid}`}>
          {features.map(({ title, copy, icon: Icon }) => (
            <article key={title} className={styles.feature}>
              <span className={styles.featureIcon} aria-hidden="true">
                <Icon strokeWidth={1.5} size={22} />
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
            <div className="accent-rule" />
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
            <div className={styles.womenOwned}>
              <p className={styles.womenOwnedLabel}>Proudly women-owned</p>
              <div className={styles.womenOwnedBadges}>
                <Image
                  src="/badges/women-owned-seal.png"
                  alt="Women Owned Business"
                  width={72}
                  height={72}
                  className={styles.womenOwnedSeal}
                />
                <Image
                  src="/badges/women-owned-logo.png"
                  alt="Women Owned"
                  width={90}
                  height={89}
                  className={styles.womenOwnedLogo}
                />
              </div>
            </div>
            <Link href="/about" className={`btn btn--navy ${styles.aboutCta}`}>
              Learn more about us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>Why choose {site.name}</h2>
            <div className="accent-rule" />
            <ul className={styles.whyList}>
              {whyPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2
                    className={styles.check}
                    size={18}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ParallaxBand
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80"
        minHeight="medium"
      >
        <p className={styles.parallaxEyebrow}>Perspective</p>
        <h2 className={styles.parallaxTitle}>
          The right hire changes the trajectory of a team.
        </h2>
        <p className={styles.parallaxCopy}>
          We help technology leaders fill critical roles with people who raise the
          bar—not just fill a seat. Clarity, speed, and judgment guide every search.
        </p>
      </ParallaxBand>

      <section className={`section ${styles.approachSection}`}>
        <div className={`container ${styles.approachLayout}`}>
          <div className={styles.approachMedia}>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
              alt="Consultants collaborating in a modern office"
              fill
              className={styles.approachImage}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div>
            <p className="eyebrow">How we work</p>
            <h2>A disciplined approach to technology hiring</h2>
            <div className="accent-rule" />
            <p className={styles.approachLead}>
              Every engagement follows a clear rhythm so stakeholders know what to
              expect—and when decisions will land.
            </p>
            <ol className={styles.approachList}>
              {approach.map((item, index) => (
                <li key={item.title}>
                  <span className={styles.approachIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">What we offer</p>
            <h2>Our services</h2>
            <div className="accent-rule" />
          </div>

          <ul className={styles.serviceGrid}>
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Users;
              return (
                <li key={service.slug} className={styles.serviceCard}>
                  <span className={styles.serviceIcon} aria-hidden="true">
                    <Icon strokeWidth={1.4} size={24} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.audienceSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">Who we serve</p>
            <h2>Built for both sides of the hire</h2>
            <div className="accent-rule" />
          </div>
          <div className={styles.audienceGrid}>
            {audiences.map((item) => (
              <article key={item.title} className={styles.audienceCard}>
                <div className={styles.audienceMedia}>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className={styles.audienceImage}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.audienceBody}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <Link href={item.href} className={styles.audienceLink}>
                    {item.cta} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ParallaxBand
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=80"
        minHeight="short"
        overlay="soft"
      >
        <p className={styles.parallaxEyebrow}>By the numbers</p>
        <div className={styles.parallaxStats}>
          {stats.map(({ value, label }) => (
            <article key={label} className={styles.parallaxStat}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </ParallaxBand>

      <section className={styles.trusted}>
        <div className="container">
          <p className="eyebrow">Partnerships</p>
          <h2>Trusted by leading organizations</h2>
          <div className="accent-rule" />
          <ul className={styles.logoRow}>
            {trusted.map((name) => (
              <li key={name}>{name}</li>
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
          <Link href="/contact?audience=employer" className="btn btn--primary">
            Partner with us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
