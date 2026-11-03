import { useCallback, useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  // Fixed bar: transparent over the hero, solid with a soft shadow once the page scrolls.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // MobileMenu sits outside the header: backdrop-blur would trap its fixed overlay.
  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-30 transition-[background-color,box-shadow] duration-300 ${
          isScrolled
            ? "bg-lavender/90 shadow-[0_1px_0_var(--color-rule-light),0_8px_24px_-12px_rgb(18_21_46/0.25)] backdrop-blur-md"
            : ""
        }`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
      >
        <div
          className={`${styles.container} flex items-center justify-between transition-[height] duration-300 ${
            isScrolled ? "h-16 md:h-[72px] lg:h-20" : "h-20 md:h-24 lg:h-[104px]"
          }`}
        >
          <a href="#inicio" aria-label="Comunidade Maker — início">
            <img
              src={logo}
              alt="Comunidade Maker"
              width="720"
              height="251"
              className="h-9 w-auto md:h-11 lg:h-[52px]"
            />
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
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
};

export default Navbar;
