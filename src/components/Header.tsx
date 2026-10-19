"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${open ? styles.headerOpen : ""}`}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label={`${site.name} home`}>
            <Image
              src="/images/logo.png"
              alt=""
              width={40}
              height={40}
              className={styles.mark}
              priority
            />
            <span className={styles.brandText}>
              <span className={styles.name}>{site.name}</span>
              <span className={styles.tag}>
                Where <strong>Global Talent</strong>
                <br className={styles.tagBreak} /> Meets <strong>Innovation</strong>
              </span>
              <span className={styles.slogan}>We got IT</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const linkClass = `${styles.link} ${active ? styles.active : ""}`;

              if (link.children) {
                return (
                  <div key={link.href} className={styles.item}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                    <div className={styles.submenu}>
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className={styles.sublink}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              );
            })}
            <Link href="/submit-talent" className={`btn btn--outline ${styles.cta} ${styles.ctaGhost}`}>
              Submit Talent
            </Link>
            <Link href="/partner" className={`btn btn--primary ${styles.cta}`}>
              Partner With Us
            </Link>
          </nav>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <div
        id="mobile-nav"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileLink} ${active ? styles.mobileActive : ""}`}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`${styles.mobileLink} ${styles.mobileChild} ${pathname === child.href ? styles.mobileActive : ""}`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            );
          })}
          <Link href="/submit-talent" className={`btn btn--ghost ${styles.mobileCta} ${styles.mobileCtaFirst}`}>
            Submit Talent
          </Link>
          <Link href="/partner" className={`btn btn--primary ${styles.mobileCta}`}>
            Partner With Us
          </Link>
        </nav>
      </div>
    </>
  );
}
