import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import contact from "../contact/contact.module.css";

export const metadata: Metadata = {
  title: "Submit Talent",
  description:
    "Staffing firms and recruiting partners can submit consultants for review against enterprise opportunities.",
};

export default function SubmitTalentPage() {
  return (
    <>
      <PageHero
        title="Submit Talent"
        description="Submit a consultant for placement consideration."
      />

      <section className="section">
        <div className={`container ${contact.layout}`}>
          <div className={contact.formBlock}>
            <p className="eyebrow">For staffing firms</p>
            <h2>A dedicated channel for placing partners</h2>
            <div className="accent-rule" />
            <p className="lead" style={{ marginBottom: "1.75rem" }}>
              Staffing firms and recruiting partners can submit consultants
              directly for review against current and upcoming enterprise
              opportunities. This is a dedicated channel separate from general
              inquiries, built for partners actively placing technical talent.
            </p>
            <InquiryForm
              intent="talent"
              submitLabel="Submit Consultant Profile"
              fields={[
                { name: "firm", label: "Submitting firm", required: true, half: true },
                { name: "name", label: "Contact name", required: true, half: true },
                { name: "email", label: "Email", type: "email", required: true, half: true },
                { name: "phone", label: "Phone", type: "tel", half: true },
                { name: "consultant", label: "Consultant name", required: true, half: true },
                { name: "role", label: "Role / specialization", required: true, half: true },
                { name: "experience", label: "Years of experience", half: true },
                {
                  name: "resume",
                  label: "Resume upload (PDF, DOC, or DOCX, up to 4 MB)",
                  type: "file",
                  required: true,
                  accept: ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                },
                { name: "notes", label: "Notes", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
