import Link from "next/link";
import Image from "next/image";
import { footerLinks, navLinks, site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandBlock}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/images/logo.png"
              alt=""
              width={28}
              height={28}
              className={styles.mark}
            />
            {site.name}
          </Link>
          <p>{site.tagline}</p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>More</h3>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.phone ? (
              <li>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                  {site.phone}
                </a>
              </li>
            ) : null}
            {site.address ? <li>{site.address}</li> : null}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {site.name} All rights reserved.
        </p>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}
