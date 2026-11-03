import { motion } from "motion/react";

// Round menu toggle: navy with two lilac lines (closed) → lilac with an × (open).
const MenuButton = ({ isOpen, onClick, className = "", ...rest }) => (
  <button
    type="button"
    onClick={onClick}
    aria-expanded={isOpen}
    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
    className={`relative grid size-12 place-items-center rounded-full transition-colors duration-200 ${
      isOpen ? "bg-lilac text-navy-900" : "bg-navy-900 text-lilac hover:bg-wine"
    } ${className}`}
    {...rest}
  >
    <motion.span
      className="absolute h-0.5 w-5 rounded-full bg-current"
      animate={isOpen ? { y: 0, rotate: 45 } : { y: -4, rotate: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
    />
    <motion.span
      className="absolute h-0.5 w-5 rounded-full bg-current"
      animate={isOpen ? { y: 0, rotate: -45 } : { y: 4, rotate: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
    />
  </button>
);

export default MenuButton;
