import { motion } from "motion/react";

// Numbered circle sitting on the timeline ribbon. The last one (graduation) is wine.
const TimelineStop = ({ number, isLast, style, className = "", delay = 0 }) => (
  <motion.span
    aria-hidden="true"
    className={`artboard absolute grid place-items-center rounded-full outline-[5px] outline-paper ${
      isLast ? "bg-wine text-lavender" : "bg-lilac text-navy-900"
    } ${className}`}
    style={{ ...style, x: "-50%", y: "-50%" }}
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 260, damping: 18, delay }}
  >
    <span className="font-display text-[50cqw] leading-none">{number}</span>
  </motion.span>
);

export default TimelineStop;
