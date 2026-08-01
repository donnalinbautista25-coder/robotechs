"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ParallaxBand.module.css";

type ParallaxBandProps = {
  image: string;
  alt?: string;
  children: React.ReactNode;
  className?: string;
  overlay?: "dark" | "soft";
  minHeight?: "short" | "medium" | "tall";
};

export default function ParallaxBand({
  image,
  alt = "",
  children,
  className = "",
  overlay = "dark",
  minHeight = "medium",
}: ParallaxBandProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
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
      if (!el || !mediaEl) return;

      const rect = el.getBoundingClientRect();
      // Keep the photo nearly locked to the viewport while the section scrolls over it
      const y = rect.top * -0.55;
      mediaEl.style.transform = `translate3d(0, ${y}px, 0) scale(1.4)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.band} ${styles[minHeight]} ${className}`}
    >
      <div
        ref={mediaRef}
        className={styles.media}
        aria-hidden={alt ? undefined : true}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className={styles.image}
          sizes="100vw"
        />
      </div>
      <div
        className={`${styles.overlay} ${styles[`overlay--${overlay}`]}`}
        aria-hidden="true"
      />
      <div className={`container ${styles.content}`}>{children}</div>
    </section>
  );
}
