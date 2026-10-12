"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    eyebrow: "For staffing partners",
    title: "Partner With Us",
    copy: "Robotechs acts as employer of record, payroll provider, and workforce management partner so staffing firms and MSPs can focus on placements.",
    points: [
      "Employer-of-record and payroll",
      "Onboarding and compliance support",
      "Enterprise-ready technical talent",
    ],
    tags: ["Staffing firms", "MSPs", "Enterprise"],
    meta: [
      { value: "EOR", label: "Employer of record" },
      { value: "7", label: "Industries" },
    ],
    href: "/partner",
    cta: "Partner With Us",
    image: "/images/partner-with-us.jpg",
    imageAlt: "Partners agreeing on a technology search",
  },
  talent: {
    eyebrow: "For recruiting partners",
    title: "Submit Talent",
    copy: "Staffing firms and recruiting partners can submit consultants for review against current and upcoming enterprise opportunities.",
    points: [
      "A channel built for placing partners",
      "Review against enterprise assignments",
      "Separate from general inquiries",
    ],
    tags: ["Engineering", "Cloud", "Security", "Data"],
    meta: [
      { value: "Direct", label: "Employment model" },
      { value: "IT", label: "Specialist talent" },
    ],
    href: "/submit-talent",
    cta: "Submit Talent",
    image: "/images/find-your-next-role.jpg",
    imageAlt: "Technology professionals ready for their next role",
  },
};

const ENTER_DELAY_MS = 110;
const LEAVE_DELAY_MS = 160;
const SWITCH_DELAY_MS = 70;

export default function HomeHero() {
  const [active, setActive] = useState<Side>(null);
  const activeRef = useRef<Side>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    return () => {
      if (enterTimer.current) clearTimeout(enterTimer.current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  function clearEnter() {
    if (enterTimer.current) {
      clearTimeout(enterTimer.current);
      enterTimer.current = null;
    }
  }

  function clearLeave() {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  }

  function activate(side: "hiring" | "talent") {
    clearLeave();
    clearEnter();

    const current = activeRef.current;
    if (current === side) return;

    // Already expanded on the other side — switch a bit faster
    const delay = current ? SWITCH_DELAY_MS : ENTER_DELAY_MS;
    enterTimer.current = setTimeout(() => {
      setActive(side);
      enterTimer.current = null;
    }, delay);
  }

  function deactivate() {
    clearEnter();
    clearLeave();
    leaveTimer.current = setTimeout(() => {
      setActive(null);
      leaveTimer.current = null;
    }, LEAVE_DELAY_MS);
  }

  return (
    <section
      className={`${styles.hero} ${active ? styles[`focus-${active}`] : styles.balanced}`}
      onMouseLeave={deactivate}
    >
      <h1 className={styles.srOnly}>
        Enterprise IT Talent. Delivered Through Trusted Partnerships.
      </h1>

      <div className={styles.split} role="group" aria-label="Choose hiring or talent path">
        <article
          className={`${styles.panel} ${styles.hiring} ${active === "hiring" ? styles.expanded : ""} ${active === "talent" ? styles.collapsed : ""}`}
          onMouseEnter={() => activate("hiring")}
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
          onMouseEnter={() => activate("talent")}
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
