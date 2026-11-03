import { motion } from "motion/react";

// Numbered circle sitting on the timeline ribbon. The last one (graduation) is wine.
// `simple` (mobile/tablet timeline): plain fade, which the browser runs off the main thread, instead of a spring pop.
const TimelineStop = ({ number, isLast, style, className = "", delay = 0, simple = false }) => (
  <motion.span
    aria-hidden="true"
    className={`artboard absolute grid place-items-center rounded-full outline-[5px] outline-paper ${
      isLast ? "bg-wine text-lavender" : "bg-lilac text-navy-900"
    } ${className}`}
    style={{ ...style, x: "-50%", y: "-50%" }}
    initial={simple ? { opacity: 0 } : { scale: 0 }}
    whileInView={simple ? { opacity: 1 } : { scale: 1 }}
    viewport={{ once: true }}
    transition={simple ? { duration: 0.5, ease: "easeOut", delay } : { type: "spring", stiffness: 260, damping: 18, delay }}
  >
    <span className="font-display text-[50cqw] leading-none">{number}</span>
  </motion.span>
);

export default TimelineStop;
