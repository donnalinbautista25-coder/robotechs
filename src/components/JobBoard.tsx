"use client";

import { useEffect, useState } from "react";
import type { SampleJob } from "@/lib/jobs";
import styles from "./JobBoard.module.css";

type JobBoardProps = {
  jobs: readonly SampleJob[];
};

export default function JobBoard({ jobs }: JobBoardProps) {
  const [activeId, setActiveId] = useState(jobs[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const active = jobs.find((job) => job.id === activeId) ?? jobs[0];

  if (!active) return null;

  useEffect(() => {
    if (!open) return;
    const narrow = window.matchMedia("(max-width: 899px)").matches;
    if (!narrow) return;
    document.getElementById("job-description")?.scrollIntoView({ block: "start" });
  }, [open, activeId]);

  function select(id: string) {
    setActiveId(id);
    setOpen(true);
  }

  return (
    <div className={`${styles.board} ${open ? styles.boardOpen : ""}`}>
      <ul className={styles.list} aria-label="Sample openings">
        {jobs.map((job) => {
          const selected = job.id === active.id;
          return (
            <li key={job.id}>
              <button
                type="button"
                className={`${styles.item} ${selected ? styles.itemActive : ""}`}
                aria-pressed={selected}
                aria-controls="job-description"
                onClick={() => select(job.id)}
              >
                <span className={styles.itemTitle}>{job.title}</span>
                <span className={styles.itemSummary}>{job.summary}</span>
                <span className={styles.meta}>
                  <span>{job.discipline}</span>
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <article
        id="job-description"
        className={styles.detail}
        aria-live="polite"
        aria-labelledby="job-title"
      >
        <button type="button" className={styles.back} onClick={() => setOpen(false)}>
          All openings
        </button>
        <p className="eyebrow">{active.discipline}</p>
        <h3 id="job-title">{active.title}</h3>
        <p className={styles.meta}>
          <span>{active.employment}</span>
          <span>{active.type}</span>
          <span>{active.location}</span>
        </p>
        <p className={styles.overview}>{active.overview}</p>
        <h4>What the work covers</h4>
        <ul>
          {active.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>What you bring</h4>
        <ul>
          {active.qualifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className={`btn btn--primary ${styles.apply}`} href="#resume">
          Submit your resume
        </a>
      </article>
    </div>
  );
}
