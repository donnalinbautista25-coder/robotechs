"use client";

import { useEffect, useState } from "react";
import styles from "./PaletteToggle.module.css";

const STORAGE_KEY = "robotechs-palette";

export type PaletteMode = "subtle" | "rich";

function applyPalette(mode: PaletteMode) {
  document.documentElement.setAttribute("data-palette", mode);
}

export default function PaletteToggle() {
  const [mode, setMode] = useState<PaletteMode>("subtle");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const next: PaletteMode = saved === "rich" ? "rich" : "subtle";
    setMode(next);
    applyPalette(next);
    setReady(true);
  }, []);

  function toggle() {
    const next: PaletteMode = mode === "subtle" ? "rich" : "subtle";
    setMode(next);
    applyPalette(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const rich = mode === "rich";

  return (
    <button
      type="button"
      className={`${styles.toggle} ${rich ? styles.rich : ""} ${ready ? styles.ready : ""}`}
      onClick={toggle}
      aria-pressed={rich}
      aria-label={rich ? "Switch to subtle gold palette" : "Switch to rich gold palette"}
      title={rich ? "Subtle gold" : "More gold"}
    >
      <span className={styles.swatch} aria-hidden="true" />
      <span className={styles.label}>{rich ? "Gold on" : "Gold"}</span>
    </button>
  );
}
