import { motion } from "motion/react";

import { sealPath } from "../utils/geometry";

const OUTLINE = sealPath({ cx: 230, cy: 230, r: 200, bumps: 18, amp: 10 });

// Wax seal ("Garantia · 7 dias" by default), drawn in a 460×460 box and scaled by its container.
// `valueClass` sets the size of the middle line, so a word can replace the number.
const Seal = ({ className = "", label = "Garantia", value = "7", caption = "dias", valueClass = "text-[32cqw] leading-[0.9]" }) => (
  <motion.div
    className={`artboard relative aspect-square ${className}`}
    initial={{ rotate: -40, scale: 0.85, opacity: 0 }}
    whileInView={{ rotate: -8, scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ type: "spring", stiffness: 120, damping: 16 }}
  >
    <svg viewBox="0 0 460 460" className="absolute inset-0 size-full" aria-hidden="true">
      <path d={OUTLINE} fill="var(--color-lilac)" />
      <circle cx="230" cy="230" r="170" fill="none" stroke="var(--color-navy-900)" strokeWidth="1.5" />
      <circle cx="230" cy="230" r="156" fill="none" stroke="var(--color-navy-900)" strokeWidth="0.75" />
    </svg>
    <p className="relative flex size-full flex-col items-center justify-center text-navy-900">
      {label && <span className="font-sans text-[3.1cqw] font-semibold uppercase tracking-[0.36em]">{label}</span>}
      <span className={`font-display ${valueClass}`}>{value}</span>
      {caption && <span className="font-display text-[7cqw] italic leading-none">{caption}</span>}
    </p>
  </motion.div>
);

export default Seal;
