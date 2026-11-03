import { AnimatePresence, motion } from "motion/react";

const FaqItem = ({ id, question, answer, isOpen, onToggle }) => (
  <div className="border-t border-navy-800">
    <h3>
      <button
        type="button"
        id={`${id}-button`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
      >
        <span
          className={`font-display text-[20px] leading-[1.25] transition-colors duration-200 md:text-[24px] lg:text-[26px] ${
            isOpen ? "text-navy-900" : "text-navy-900 group-hover:text-wine"
          }`}
        >
          {question}
        </span>
        <span
          aria-hidden="true"
          className={`relative mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-200 ${
            isOpen
              ? "border-lilac bg-lilac text-navy-900"
              : "border-navy-800 text-navy-900 group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-lilac"
          }`}
        >
          <span className="absolute h-px w-3.5 bg-current" />
          <motion.span
            className="absolute h-3.5 w-px bg-current"
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.25 }}
          />
        </span>
      </button>
    </h3>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`${id}-panel`}
          role="region"
          aria-labelledby={`${id}-button`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="overflow-hidden"
        >
          <p className="max-w-[580px] pb-7 pr-16 font-sans text-[15px] leading-[1.6] text-navy-700 md:text-[17px]">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FaqItem;
