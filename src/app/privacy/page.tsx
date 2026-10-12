import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { privacyOutline, site } from "@/lib/site";
import styles from "../terms/terms.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy outline for the ${site.name} website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="This page is a structural outline. It is not final legal text."
      />

      <section className="section">
        <div className={`container ${styles.content}`}>
          <p className={styles.note}>
            This outline should be finalized with legal review before
            publishing. It is a structural placeholder, not legal text.
          </p>
          {privacyOutline.map((heading, index) => (
            <section key={heading}>
              <h2>
                {index + 1}. {heading}
              </h2>
              {heading.startsWith("Contact Information") ? (
                <p>
                  Privacy inquiries may be sent to{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              ) : (
                <p>This section will be completed after legal review.</p>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
