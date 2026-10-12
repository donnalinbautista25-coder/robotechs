import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Cloud,
  Code2,
  Database,
  Headphones,
  LockKeyhole,
  MonitorCog,
  UserRoundPlus,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { employmentHandles, site } from "@/lib/site";
import styles from "./about.module.css";

const placedRoles: { title: string; icon: LucideIcon }[] = [
  { title: "Software engineers", icon: Code2 },
  { title: "Database administrators", icon: Database },
  { title: "Cloud specialists", icon: Cloud },
  { title: "Systems analysts", icon: MonitorCog },
  { title: "Cybersecurity professionals", icon: LockKeyhole },
];

const operationIcons: LucideIcon[] = [
  UserRoundPlus,
  Wallet,
  BadgeCheck,
  ClipboardList,
  Headphones,
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Robotechs connects skilled technology professionals with enterprise opportunities and manages the full employment relationship.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Robotechs is an IT staffing and outsourcing company built to connect skilled technology professionals with enterprise-level opportunities."
      />

      <section className="section">
        <div className={`container ${styles.overview}`}>
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Talent placed through trusted workforce partners</h2>
            <div className="accent-rule" />
            <p className="lead">
              We work through established workforce and recruitment partners to
              place qualified talent into contract, contract-to-hire,
              project-based, and long-term assignments.
            </p>
          </div>
          <aside className={styles.panel}>
            <Image
              src="/images/workspace.jpg"
              alt="Professionals working together in a modern workspace"
              width={1024}
              height={768}
              className={styles.photo}
              sizes="(max-width: 800px) 100vw, 46vw"
            />
            <p className="eyebrow">Who we place</p>
            <ul className={styles.roles}>
              {placedRoles.map(({ title, icon: Icon }) => (
                <li key={title}>
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--grey">
        <div className={`container ${styles.operate}`}>
          <div>
            <p className="eyebrow">How we operate</p>
            <h2>Direct employment from onboarding through the assignment</h2>
            <div className="accent-rule" />
            <p className="lead">
              As a staffing and outsourcing provider, Robotechs identifies and
              evaluates qualified candidates, matches them to opportunities
              aligned with their skills and career objectives, and manages the
              full employment relationship from onboarding through the life of
              the assignment. Every professional placed through Robotechs is
              directly employed by our company.
            </p>
          </div>
          <ul className={styles.operateList}>
            {employmentHandles.map((item, index) => {
              const Icon = operationIcons[index];
              return (
                <li key={item}>
                  <span className={styles.operateIcon} aria-hidden="true">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.overview}`}>
          <div className={styles.storyMedia}>
            <Image
              src="/images/for-employers.jpg"
              alt="Colleagues in conversation at the office"
              width={1024}
              height={768}
              className={styles.photo}
              sizes="(max-width: 800px) 100vw, 46vw"
            />
          </div>
          <div className={styles.story}>
            <div>
              <p className="eyebrow">Our growth</p>
              <h2>An enterprise-ready foundation</h2>
              <div className="accent-rule" />
              <p>
                Robotechs is a newly established company built with an
                enterprise-ready foundation. We currently support technology
                professionals assigned to enterprise-scale projects through
                strategic staffing partnerships, and we are actively expanding
                as new client opportunities and project demand grow.
              </p>
            </div>
            <div>
              <p className="eyebrow">Our commitment</p>
              <h2>Reliable talent, supported people</h2>
              <div className="accent-rule" />
              <p>
                We are committed to delivering reliable technology talent
                solutions while supporting the professional growth of our
                employees and the evolving workforce needs of our clients and
                partners.
              </p>
            </div>
            <div className={styles.womenOwned}>
              <p className={styles.womenOwnedLabel}>Proudly women-owned</p>
              <div className={styles.womenOwnedBadges}>
                <Image
                  src="/badges/women-owned-seal.png"
                  alt="Women Owned Business"
                  width={72}
                  height={72}
                  className={styles.womenOwnedSeal}
                />
                <Image
                  src="/badges/women-owned-logo.png"
                  alt="Women Owned"
                  width={90}
                  height={89}
                  className={styles.womenOwnedLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">Work with us</p>
          <h2>Talk with {site.shortName}</h2>
          <div className="accent-rule" />
          <div className={styles.ctaRow}>
            <Link href="/partner" className="btn btn--primary">
              Partner With Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/careers" className="btn btn--outline">
              Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
