import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PrintButton from "@/components/PrintButton";
import { industries, site } from "@/lib/site";
import styles from "../terms/terms.module.css";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "Robotechs IT staffing and outsourcing services: direct employment, payroll, compliance, and enterprise technology talent.",
};

const capabilities = [
  "IT Staffing (Software Engineering, Cloud, Database, Systems Analysis, Cybersecurity)",
  "Direct Employment and Employer-of-Record Services",
  "Payroll Administration",
  "Onboarding and Employment Compliance",
  "Workforce Management for Contract, Contract-to-Hire, and Long-Term Assignments",
];

const reasons = [
  "Direct Employment Model",
  "Compliance Management",
  "Enterprise-Ready Consultants",
  "Flexible Staffing Support",
];

export default function CapabilityPage() {
  return (
    <>
      <PageHero
        title="Capability Statement"
        description="IT staffing and outsourcing services."
      />

      <section className="section">
        <div className={`container ${styles.content}`}>
          <p className="lead">
            Robotechs is an IT staffing and outsourcing company providing
            skilled technology professionals to enterprise organizations through
            established workforce and recruitment partners.
          </p>

          <h2>Core capabilities</h2>
          <ul>
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Industries served</h2>
          <p>{industries.join(", ")}</p>

          <h2>Why Robotechs</h2>
          <ul>
            {reasons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Contact</h2>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <PrintButton />
        </div>
      </section>
    </>
  );
}
