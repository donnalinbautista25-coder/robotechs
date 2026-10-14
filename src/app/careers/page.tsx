import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import CareerCarousel from "@/components/CareerCarousel";
import JobBoard from "@/components/JobBoard";
import { sampleJobs } from "@/lib/jobs";
import { careerReasons } from "@/lib/site";
import contact from "../contact/contact.module.css";
import styles from "./careers.module.css";

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
        <div className={`container ${styles.intro}`}>
          <div>
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
          <CareerCarousel reasons={careerReasons} />
        </div>
      </section>

      <section className="section section--grey">
        <div className={`container ${styles.jobs}`}>
          <p className="eyebrow">Sample openings</p>
          <h2>Current opportunities</h2>
          <div className="accent-rule" />
          <p className="lead">
            These roles are fixed examples of the assignments Robotechs staffs.
            Select one to read the description.
          </p>
          <JobBoard jobs={sampleJobs} />
          <p className={styles.note}>
            Don&apos;t see a current fit?{" "}
            <a href="#resume">Submit your resume</a> to join our talent database
            and be considered for future opportunities as they arise.
          </p>
        </div>
      </section>

      <section id="resume" className={`section ${styles.resume}`}>
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
