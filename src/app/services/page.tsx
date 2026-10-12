import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { serviceIcons } from "@/lib/icons";
import { services } from "@/lib/site";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technology staffing and workforce solutions for enterprise organizations, delivered through direct employment and compliance-first workforce management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="Robotechs provides technology staffing and workforce solutions built for enterprise scale."
      />

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we provide</p>
          <h2>Specialized technical talent, directly employed</h2>
          <div className="accent-rule" />
          <p className="lead" style={{ marginBottom: "2rem" }}>
            Connecting qualified IT professionals with organizations that need
            specialized technical talent, delivered through direct employment
            and compliance-first workforce management.
          </p>

          <ul className={styles.grid}>
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? CheckCircle2;
              return (
                <li key={service.slug} className={styles.card}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon size={28} strokeWidth={1.55} />
                  </span>
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                  {"href" in service ? (
                    <Link href={service.href} className={styles.more}>
                      Learn more <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">Next step</p>
          <h2>Ready to build your enterprise workforce pipeline?</h2>
          <div className="accent-rule" />
          <Link href="/partner" className="btn btn--primary">
            Partner With Us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
