import { motion } from "motion/react";

import { WHATSAPP_URL } from "../constants";

const surfaces = {
  light: {
    root: "bg-green text-white hover:bg-green-hover active:bg-green-active focus-visible:outline-green",
    chip: "bg-green-bright text-white",
  },
  dark: {
    root: "bg-green text-white hover:bg-green-hover active:bg-green-active focus-visible:outline-lavender",
    chip: "bg-green-bright text-white",
  },
};

const sizes = {
  lg: { root: "h-16 gap-4 pl-8 pr-2 text-[17px]", chip: "size-12", icon: "size-6" },
  md: { root: "h-[52px] gap-4 pl-6 pr-2 text-[15px]", chip: "size-9", icon: "size-5" },
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
        className={`grid place-items-center overflow-hidden rounded-full ${s.chip} ${z.chip}`}
        variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
        transition={{ type: "spring", stiffness: 420, damping: 26 }}
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={z.icon}
          variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </motion.svg>
      </motion.span>
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </motion.a>
  );
};

export default Button;
