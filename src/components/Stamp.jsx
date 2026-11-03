import { motion } from "motion/react";

// "+400 alunas" round stamp. Size is driven by the parent through `className` (width).
const Stamp = ({ className = "", style }) => (
  <motion.div
    className={`absolute aspect-square ${className}`}
    style={style}
    initial={{ scale: 0.6, rotate: -30, opacity: 0 }}
    whileInView={{ scale: 1, rotate: -10, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 180, damping: 14, delay: 1.2 }}
  >
    <div className="artboard relative grid size-full place-items-center rounded-full bg-lilac text-navy-900">
      <span className="absolute inset-[5%] rounded-full border border-navy-900" aria-hidden="true" />
      <p className="text-center leading-none">
        <span className="font-display block text-[33cqw]">+400</span>
        <span className="mt-[6cqw] block font-sans text-[7.6cqw] font-semibold uppercase tracking-[0.25em]">alunas</span>
      </p>
    </div>
  </motion.div>
);

export default Stamp;
