import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for using the ${site.name} website and services.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        description="Please read these terms carefully before using the Robotech website or engaging our services."
      />

      <section className="section">
        <div className={`container ${styles.content}`}>
          <p className={styles.updated}>Last updated: July 19, 2026</p>

          <h2>1. Agreement to terms</h2>
          <p>
            By accessing this website or engaging {site.name} for staffing and
            recruitment services, you agree to these Terms and Conditions. If you
            do not agree, please discontinue use of the site and services.
          </p>

          <h2>2. About Robotech</h2>
          <p>
            {site.name} provides IT staffing, recruitment, and related workforce
            solutions. Information on this website is for general informational
            purposes and does not constitute a binding offer unless confirmed in a
            separate written agreement.
          </p>

          <h2>3. Use of the website</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the site for unlawful, harmful, or fraudulent purposes</li>
            <li>Attempt to disrupt, probe, or compromise site security or availability</li>
            <li>Misrepresent your identity or affiliation when contacting us</li>
            <li>Copy or reuse site content for commercial purposes without permission</li>
          </ul>

          <h2>4. Candidate and client information</h2>
          <p>
            Information submitted through our contact channels may be used to
            respond to inquiries and, where appropriate, to discuss potential
            staffing engagements. Formal placements are governed by separate
            service agreements, confidentiality terms, and applicable privacy
            notices.
          </p>

          <h2>5. No guarantee of outcomes</h2>
          <p>
            While we apply professional care in our recruitment processes,{" "}
            {site.name} does not guarantee employment for candidates or successful
            hiring outcomes for clients unless expressly stated in a signed
            agreement.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            All branding, text, design, and other materials on this website are
            owned by or licensed to {site.name}. You may not reproduce or
            distribute them without prior written consent.
          </p>

          <h2>7. Third-party links</h2>
          <p>
            This site may reference third-party websites or services. We are not
            responsible for their content, policies, or practices.
          </p>

          <h2>8. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {site.name} is not liable for
            indirect, incidental, or consequential damages arising from use of
            this website. Nothing in these terms excludes liability that cannot
            be excluded under applicable law.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update these Terms and Conditions from time to time. Continued
            use of the website after changes are posted constitutes acceptance of
            the revised terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms may be sent to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or by writing to{" "}
            {site.address}.
          </p>
        </div>
      </section>
    </>
  );
}
