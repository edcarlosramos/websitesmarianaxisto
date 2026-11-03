import { useCallback, useState } from "react";
import { motion } from "motion/react";

import { logo } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import Button from "./Button";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-30"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <div className={`${styles.container} flex h-20 items-center justify-between md:h-24 lg:h-[104px]`}>
        <a href="#inicio" aria-label="Comunidade Maker — início">
          <img src={logo} alt="Comunidade Maker" width="720" height="251" className="h-9 w-auto md:h-11 lg:h-[52px]" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="relative font-sans text-[15px] font-medium text-navy-800 transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-wine after:transition-transform after:duration-300 hover:text-wine hover:after:scale-x-100"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-10 lg:gap-0">
          <Button label="Garantir minha vaga" size="md" className="hidden md:inline-flex" />
          <MenuButton isOpen={isOpen} onClick={() => setIsOpen(true)} className="lg:hidden" />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </motion.header>
  );
};

export default Navbar;
