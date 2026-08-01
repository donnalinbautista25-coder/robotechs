"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ParallaxHero.module.css";

type ParallaxHeroProps = {
  image: string;
  children: React.ReactNode;
};

export default function ParallaxHero({ image, children }: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);

    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let frame = 0;

    const update = () => {
      const el = sectionRef.current;
      const mediaEl = mediaRef.current;
      const contentEl = contentRef.current;
      if (!el || !mediaEl) return;

      const scrolled = window.scrollY;
      // Background lags hard — clear “slow layer” feel while leaving the hero
      mediaEl.style.transform = `translate3d(0, ${scrolled * 0.65}px, 0) scale(1.35)`;
      if (contentEl) {
        contentEl.style.transform = `translate3d(0, ${scrolled * 0.18}px, 0)`;
        contentEl.style.opacity = String(
          Math.max(0, 1 - scrolled / (el.offsetHeight * 0.85)),
        );
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div ref={mediaRef} className={styles.media}>
        <Image
          src={image}
          alt=""
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <div ref={contentRef} className={`container ${styles.content}`}>
        {children}
      </div>
    </section>
  );
}
