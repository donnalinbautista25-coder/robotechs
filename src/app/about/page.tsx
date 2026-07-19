import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Robotech—our mission, values, and approach to specialist IT staffing.",
};

const values = [
  {
    title: "Integrity",
    copy: "Honest counsel for clients and candidates. We set expectations clearly and follow through.",
  },
  {
    title: "Craft",
    copy: "Recruitment is a discipline. We invest in market knowledge, technical literacy, and process excellence.",
  },
  {
    title: "Partnership",
    copy: "We measure success by long-term outcomes—retained talent, trusted relationships, and repeat engagement.",
  },
  {
    title: "Momentum",
    copy: "Hiring windows close quickly. We move with urgency without compromising quality.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Robotech is a specialist IT staffing firm helping organizations and professionals make decisive, well-matched career and hiring moves."
      />

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Built for technology hiring</h2>
            <div className="gold-rule" />
          </div>
          <div className={styles.prose}>
            <p>
              Robotech was founded on a simple belief: technology teams deserve
              recruiters who understand their work. We specialize in connecting
              skilled IT professionals with organizations that need capability,
              reliability, and cultural fit—not just résumés.
            </p>
            <p>
              Today we support employers across software, infrastructure, data,
              security, and digital product organizations. Whether you are scaling
              a product team or searching for a technology leader, we bring
              structured search, market insight, and a human approach.
            </p>
            <p>
              For candidates, we offer thoughtful representation—roles that match
              your skills, compensation expectations, and career direction.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <p className="eyebrow">How we work</p>
          <h2>A clear, collaborative process</h2>
          <div className="gold-rule" />
          <ul className={styles.timeline}>
            <li>
              <strong>Listen</strong>
              <p>
                We begin with a precise briefing: role outcomes, team context,
                must-have skills, and timeline.
              </p>
            </li>
            <li>
              <strong>Source & assess</strong>
              <p>
                Our consultants map the market, engage talent, and evaluate
                technical and interpersonal fit.
              </p>
            </li>
            <li>
              <strong>Present & advise</strong>
              <p>
                You receive a calibrated shortlist with clear context—so decisions
                move faster and with fewer surprises.
              </p>
            </li>
            <li>
              <strong>Support to start</strong>
              <p>
                We stay involved through offer, acceptance, and onboarding to
                protect a strong start for everyone.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Values</p>
          <h2>What guides every engagement</h2>
          <div className="gold-rule" />
          <ul className={styles.values}>
            {values.map((value) => (
              <li key={value.title} className={styles.value}>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">Work with us</p>
          <h2>Let’s build your next chapter</h2>
          <div className="gold-rule" />
          <p className="lead" style={{ marginBottom: "1.5rem" }}>
            Whether you are hiring or exploring your next role, our team is ready
            to help.
          </p>
          <Link href="/contact" className="btn btn--gold">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
