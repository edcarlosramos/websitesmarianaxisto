import { motion } from "motion/react";

// Fades and lifts its content the first time it enters the viewport.
const Reveal = ({ as = "div", delay = 0, y = 28, amount = 0.25, className = "", children, ...rest }) => {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: [0.2, 0, 0, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
