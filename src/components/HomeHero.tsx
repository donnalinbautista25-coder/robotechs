"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./HomeHero.module.css";

type Side = "hiring" | "talent" | null;

type PanelData = {
  eyebrow: string;
  title: string;
  copy: string;
  points: readonly string[];
  tags: readonly string[];
  meta: readonly { value: string; label: string }[];
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

const panels: Record<"hiring" | "talent", PanelData> = {
  hiring: {
    eyebrow: "For employers",
    title: "Partner with us",
    copy: "Build high-performing technology teams with specialist IT recruiters who understand your stack, culture, and delivery goals.",
    points: [
      "Calibrated shortlists, not résumé dumps",
      "Permanent, contract, and hybrid models",
      "Accountable support through every hire",
    ],
    tags: ["Engineering", "Cloud", "Security", "Data"],
    meta: [
      { value: "120+", label: "Client partners" },
      { value: "18+", label: "Industries" },
    ],
    href: "/contact?audience=employer",
    cta: "Start a search",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern office workspace for growing technology teams",
  },
  talent: {
    eyebrow: "For professionals",
    title: "Find your next role",
    copy: "Access curated technology opportunities with representation that aligns to your skills, compensation goals, and career path.",
    points: [
      "Roles matched to your expertise",
      "Transparent guidance through every step",
      "Opportunities across modern IT stacks",
    ],
    tags: ["Full-stack", "DevOps", "Product", "AI"],
    meta: [
      { value: "2,400+", label: "Placements" },
      { value: "500+", label: "Employees" },
    ],
    href: "/contact?audience=candidate",
    cta: "Explore opportunities",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Professional exploring their next career opportunity",
  },
};

export default function HomeHero() {
  const [active, setActive] = useState<Side>(null);

  return (
    <section
      className={`${styles.hero} ${active ? styles[`focus-${active}`] : styles.balanced}`}
      onMouseLeave={() => setActive(null)}
    >
      <h1 className={styles.srOnly}>Robotechs Inc. IT staffing</h1>

      <div className={styles.split} role="group" aria-label="Choose hiring or talent path">
        <article
          className={`${styles.panel} ${styles.hiring} ${active === "hiring" ? styles.expanded : ""} ${active === "talent" ? styles.collapsed : ""}`}
          onMouseEnter={() => setActive("hiring")}
        >
          <div className={styles.media}>
            <Image
              src={panels.hiring.image}
              alt={panels.hiring.imageAlt}
              fill
              priority
              className={styles.image}
              sizes="(max-width: 820px) 100vw, 70vw"
            />
            <div className={styles.mediaShade} aria-hidden="true" />
          </div>

          <div className={styles.content}>
            <div className={styles.panelHit}>
              <span className={styles.panelEyebrow}>{panels.hiring.eyebrow}</span>
              <h2 className={styles.panelTitle}>{panels.hiring.title}</h2>
              <p className={styles.panelTeaser}>
                <span className={styles.seeMore}>See more</span>
              </p>
            </div>

            <div className={styles.panelBody}>
              <p className={styles.panelCopy}>{panels.hiring.copy}</p>
              <ul className={styles.points}>
                {panels.hiring.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {panels.hiring.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.meta}>
                {panels.hiring.meta.map((item) => (
                  <div key={item.label} className={styles.metaItem}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <Link
                href={panels.hiring.href}
                className={`btn btn--primary ${styles.panelCta}`}
              >
                {panels.hiring.cta} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>

        <article
          className={`${styles.panel} ${styles.talent} ${active === "talent" ? styles.expanded : ""} ${active === "hiring" ? styles.collapsed : ""}`}
          onMouseEnter={() => setActive("talent")}
        >
          <div className={styles.media}>
            <Image
              src={panels.talent.image}
              alt={panels.talent.imageAlt}
              fill
              priority
              className={styles.image}
              sizes="(max-width: 820px) 100vw, 70vw"
            />
            <div className={styles.mediaShade} aria-hidden="true" />
          </div>

          <div className={styles.content}>
            <div className={styles.panelHit}>
              <span className={styles.panelEyebrow}>{panels.talent.eyebrow}</span>
              <h2 className={styles.panelTitle}>{panels.talent.title}</h2>
              <p className={styles.panelTeaser}>
                <span className={styles.seeMore}>See more</span>
              </p>
            </div>

            <div className={styles.panelBody}>
              <p className={styles.panelCopy}>{panels.talent.copy}</p>
              <ul className={styles.points}>
                {panels.talent.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {panels.talent.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.meta}>
                {panels.talent.meta.map((item) => (
                  <div key={item.label} className={styles.metaItem}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <Link
                href={panels.talent.href}
                className={`btn btn--primary ${styles.panelCta}`}
              >
                {panels.talent.cta} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
