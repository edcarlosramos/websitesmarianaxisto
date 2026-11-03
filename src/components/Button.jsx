import { motion } from "motion/react";

import { WHATSAPP_URL } from "../constants";

const surfaces = {
  light: {
    root: "bg-navy-900 text-lavender hover:bg-wine active:bg-wine-900 focus-visible:outline-wine",
    chip: "bg-lime text-navy-900",
  },
  dark: {
    root: "bg-lime text-navy-900 hover:bg-lime-soft active:bg-lime-deep focus-visible:outline-lavender",
    chip: "bg-navy-900 text-lime",
  },
};

const sizes = {
  lg: { root: "h-16 gap-4 pl-8 pr-2 text-[17px]", chip: "size-12 text-[22px]" },
  md: { root: "h-[52px] gap-4 pl-6 pr-2 text-[15px]", chip: "size-9 text-[18px]" },
};

// Every CTA on the page leads to the team's WhatsApp, as on marianaxisto.com.br.
const Button = ({ label, surface = "light", size = "lg", href = WHATSAPP_URL, className = "" }) => {
  const s = surfaces[surface];
  const z = sizes[size];
  // Responsive variants pass "hidden md:inline-flex"; only default to inline-flex otherwise.
  const display = /(^|\s)hidden(\s|$)/.test(className) ? "" : "inline-flex";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate="rest"
      className={`group ${display} shrink-0 items-center rounded-full font-sans font-semibold leading-[1.2] whitespace-nowrap transition-colors duration-200 ease-(--ease-out-soft) focus-visible:outline-[3px] focus-visible:outline-offset-2 ${s.root} ${z.root} ${className}`}
      variants={{ tap: { scale: 0.98 } }}
    >
      <span>{label}</span>
      <motion.span
        aria-hidden="true"
        className={`grid place-items-center rounded-full font-medium ${s.chip} ${z.chip}`}
        variants={{ rest: { x: 0 }, hover: { x: 6 } }}
        transition={{ type: "spring", stiffness: 420, damping: 26 }}
      >
        →
      </motion.span>
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </motion.a>
  );
};

export default Button;
