import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { partnerExamples, partnerHandles, whyRobotechs } from "@/lib/site";
import about from "../about/about.module.css";
import contact from "../contact/contact.module.css";
import home from "../home.module.css";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Robotechs partners with staffing firms and MSPs as employer of record, payroll provider, and workforce management partner.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        title="Partner With Us"
        description="A workforce partner built for staffing firms and MSPs."
      />

      <section className="section">
        <div className="container">
          <p className="eyebrow">Who we work with</p>
          <h2>Support for enterprise workforce engagements</h2>
          <div className="accent-rule" />
          <p className="lead">
            Robotechs partners with staffing agencies, recruiting firms, and
            managed service providers, including organizations like{" "}
            {partnerExamples.join(", ")}, to support enterprise workforce
            engagements.
          </p>
          <p className="lead">
            We act as the employer of record, payroll provider, and workforce
            management partner for consultants placed on enterprise assignments,
            allowing our partners to focus on client relationships and
            placements while we manage the employment side.
          </p>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <p className="eyebrow">What Robotechs handles</p>
          <h2>The employment side of every placement</h2>
          <div className="accent-rule" />
          <ul className={about.handles}>
            {partnerHandles.map((item) => (
              <li key={item}>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why" className="section">
        <div className="container">
          <p className="eyebrow">Why Robotechs</p>
          <h2>Why staffing partners and clients choose Robotechs</h2>
          <div className="accent-rule" />
          <ul className={home.whyList}>
            {whyRobotechs.map((item) => (
              <li key={item.title}>
                <CheckCircle2
                  className={home.check}
                  size={18}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <span>
                  <strong>{item.title}.</strong> {item.copy}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--grey">
        <div className={`container ${contact.layout}`}>
          <div className={contact.formBlock}>
            <p className="eyebrow">Partnership inquiry</p>
            <h2>Interested in exploring a partnership?</h2>
            <div className="accent-rule" />
            <InquiryForm
              intent="partner"
              submitLabel="Submit a Partnership Inquiry"
              fields={[
                { name: "company", label: "Company name", required: true, half: true },
                { name: "name", label: "Contact name", required: true, half: true },
                { name: "title", label: "Title", half: true },
                { name: "email", label: "Email", type: "email", required: true, half: true },
                { name: "phone", label: "Phone", type: "tel", half: true },
                {
                  name: "partnershipType",
                  label: "Type of partnership interest",
                  type: "select",
                  required: true,
                  half: true,
                  options: ["Staffing Firm", "MSP", "Direct Client", "Other"],
                },
                { name: "message", label: "Message", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
