import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { careerReasons } from "@/lib/site";
import about from "../about/about.module.css";
import contact from "../contact/contact.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with Robotechs. Direct employment, enterprise technology assignments, and ongoing support.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        description="Build your career with Robotechs."
      />

      <section className="section">
        <div className="container">
          <p className="eyebrow">For technology professionals</p>
          <h2>Enterprise opportunities, with direct employment</h2>
          <div className="accent-rule" />
          <p className="lead">
            Robotechs connects skilled IT professionals with enterprise-level
            opportunities across software development, cloud infrastructure,
            cybersecurity, database administration, and systems analysis. As a
            Robotechs employee, you&apos;re supported from onboarding through
            every stage of your assignment, with direct employment, payroll
            administration, and dedicated support throughout your career with
            us.
          </p>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <p className="eyebrow">Why work with Robotechs</p>
          <h2>Support from the first day of an assignment</h2>
          <div className="accent-rule" />
          <ul className={about.handles}>
            {careerReasons.map((item) => (
              <li key={item}>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Current opportunities</p>
          <h2>Openings will be listed here</h2>
          <div className="accent-rule" />
          <p className="lead">
            Job listings will appear on this page as openings become available.
          </p>
          <p className="lead">
            Don&apos;t see a current fit? Submit your resume to join our talent
            database and be considered for future opportunities as they arise.
          </p>
        </div>
      </section>

      <section className="section section--grey">
        <div className={`container ${contact.layout}`}>
          <div className={contact.formBlock}>
            <p className="eyebrow">Talent database</p>
            <h2>Submit your resume</h2>
            <div className="accent-rule" />
            <InquiryForm
              intent="careers"
              submitLabel="Submit Your Resume"
              fields={[
                { name: "name", label: "Name", required: true, half: true },
                { name: "email", label: "Email", type: "email", required: true, half: true },
                { name: "phone", label: "Phone", type: "tel", half: true },
                { name: "expertise", label: "Area of expertise", required: true, half: true },
                { name: "linkedin", label: "LinkedIn (optional)", half: true },
                {
                  name: "resume",
                  label: "Resume upload (PDF, DOC, or DOCX, up to 4 MB)",
                  type: "file",
                  required: true,
                  accept: ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                },
                { name: "jobAlerts", label: "Sign up for job alerts", type: "checkbox" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
