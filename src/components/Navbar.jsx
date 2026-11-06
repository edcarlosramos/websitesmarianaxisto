import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";

import { logo } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import Button from "./Button";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

// Colours per theme: "light" sits on the lavender hero, "dark" on a black one (light text, white logo).
const THEMES = {
  light: {
    scrolled:
      // Phones get a solid background: the blur would be recomputed on every scrolled frame.
      "bg-lavender shadow-[0_1px_0_var(--color-rule-light),0_8px_24px_-12px_rgb(18_21_46/0.25)] lg:bg-lavender/90 lg:backdrop-blur-md",
    link: "text-navy-800 hover:text-wine after:bg-wine",
    logo: "",
    menu: "",
  },
  dark: {
    scrolled: "on-dark bg-ink shadow-[0_1px_0_var(--color-rule-dark),0_8px_24px_-12px_rgb(0_0_0/0.6)] lg:bg-ink/85 lg:backdrop-blur-md",
    link: "text-lavender hover:text-lilac after:bg-lilac",
    logo: "brightness-0 invert",
    menu: "ring-1 ring-rule-dark",
  },
};

// `links` are the in-page anchors; `cta` is the button on the right ({ label, href, note }).
const Navbar = ({ links = navLinks, cta = { label: "Garantir minha vaga" }, theme = "light" }) => {
  const t = THEMES[theme];
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
          isScrolled ? t.scrolled : theme === "dark" ? "on-dark" : ""
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
              className={`h-9 w-auto md:h-11 lg:h-[52px] ${t.logo}`}
            />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative font-sans text-[15px] font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${t.link}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-10 lg:gap-0">
            <Button location="navbar" label={cta.label} href={cta.href} pulse={cta.pulse} surface={theme} size="md" className="hidden md:inline-flex" />
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(true)} className={`lg:hidden ${t.menu}`} />
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={close} links={links} cta={cta} />
    </>
  );
};

export default Navbar;
