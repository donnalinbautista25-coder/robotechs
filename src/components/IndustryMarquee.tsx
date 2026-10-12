import {
  Factory,
  HeartPulse,
  Landmark,
  Radio,
  Shield,
  ShoppingBag,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/site";
import styles from "./IndustryMarquee.module.css";

const industryIcons: Record<(typeof industries)[number], LucideIcon> = {
  "Financial Services": Landmark,
  Healthcare: HeartPulse,
  Insurance: Shield,
  Technology: Cpu,
  Retail: ShoppingBag,
  Manufacturing: Factory,
  Telecommunications: Radio,
};

type IndustryMarqueeProps = {
  eyebrow?: string;
  title?: string;
};

export default function IndustryMarquee({
  eyebrow = "Coverage",
  title = "Industries we support",
}: IndustryMarqueeProps) {
  const loop = [...industries, ...industries];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <div className="accent-rule" />
      </div>

      <div className={styles.marquee}>
        <ul className={styles.track}>
          {loop.map((industry, index) => {
            const Icon = industryIcons[industry];
            const duplicate = index >= industries.length;
            return (
              <li key={`${industry}-${index}`} aria-hidden={duplicate || undefined}>
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                <span>{industry}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
