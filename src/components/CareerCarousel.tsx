"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CareerCarousel.module.css";

const DELAY = 4500;

const doodles: Record<string, string> = {
  "Direct employment with dedicated onboarding support": "/images/career-onboarding.jpg",
  "Placement on enterprise-level technology projects": "/images/career-projects.jpg",
  "Ongoing career and assignment support": "/images/career-support.jpg",
  "Opportunities across multiple industries and technical disciplines":
    "/images/career-industries-wide.jpg",
};

type CareerCarouselProps = {
  reasons: readonly string[];
};

export default function CareerCarousel({ reasons }: CareerCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = reasons.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused || count < 2) return;

    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % count);
    }, DELAY);

    return () => window.clearTimeout(id);
  }, [paused, count, index]);

  return (
    <div
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Why work with Robotechs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          setPaused(false);
        }
      }}
    >
      <p className={`eyebrow ${styles.heading}`}>Why work with Robotechs</p>
      <div className={styles.track} aria-hidden="true">
        <span key={index} className={paused ? styles.barPaused : styles.bar} />
      </div>
      <div className={styles.stage}>
        <div className={styles.doodle} aria-hidden="true">
          <Image
            key={reasons[index]}
            src={doodles[reasons[index]]}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className={styles.doodleImage}
          />
        </div>
        <p className={styles.slide} aria-live="polite">
          <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
          <span key={reasons[index]} className={styles.copy}>
            {reasons[index]}
          </span>
        </p>
      </div>
    </div>
  );
}
