import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

import { navLinks, ribbonPhrases, socials } from "../constants";
import useMediaQuery from "../hooks/useMediaQuery";
import { getLenis } from "../hooks/useSmoothScroll";
import Button from "./Button";
import MenuButton from "./MenuButton";
import Overline from "./Overline";
import Ribbon from "./Ribbon";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Full-screen menu on phones, right-side drawer over a dimmed page on tablets.
const MobileMenu = ({ isOpen, onClose, links = navLinks, cta = { label: "Garantir minha vaga" } }) => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.activeElement;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    panelRef.current?.querySelector(FOCUSABLE)?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !panelRef.current) return;
      const items = [...panelRef.current.querySelectorAll(FOCUSABLE)];
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
      lenis?.start();
      previous?.focus?.();
    };
  }, [isOpen, onClose]);

  const goTo = (event, id) => {
    event.preventDefault();
    onClose();
    const target = document.getElementById(id);
    requestAnimationFrame(() => {
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(target, { duration: 1.2 });
      else target?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={onClose}
            className="absolute inset-0 hidden cursor-default bg-navy-900/60 md:block"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="on-dark absolute inset-y-0 right-0 flex w-full flex-col overflow-hidden bg-navy-900 px-6 pt-5 md:w-[440px] md:px-10"
            initial={isTablet ? { x: "100%" } : { opacity: 0 }}
            animate={isTablet ? { x: 0 } : { opacity: 1 }}
            exit={isTablet ? { x: "100%" } : { opacity: 0 }}
            transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-[22px] italic text-lavender">Comunidade Maker</p>
              <MenuButton isOpen onClick={onClose} />
            </div>

            <Overline tone="lilac" className="mt-12">Menu</Overline>
            <nav aria-label="Seções da página" className="mt-6">
              <ul>
                {links.map((link, index) => (
                  <motion.li
                    key={link.id}
                    className="border-t border-rule-dark last:border-b"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease: [0.2, 0, 0, 1], delay: 0.08 + index * 0.05 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(event) => goTo(event, link.id)}
                      className="group flex items-center gap-5 py-4 text-lavender md:py-5"
                    >
                      <span className="w-6 font-sans text-[12px] font-semibold tracking-[0.08em] text-lilac">0{index + 1}</span>
                      <span className="font-display flex-1 text-[36px] leading-[1.1] transition-colors group-hover:text-lilac group-hover:italic group-focus-visible:text-lilac group-focus-visible:italic md:text-[40px]">
                        {link.title}
                      </span>
                      <span aria-hidden="true" className="text-[20px] text-[#5a6199] transition-colors group-hover:text-lilac">
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-10">
              <Button location="mobile_menu" label={cta.label} href={cta.href} pulse={cta.pulse} surface="dark" size="md" />
              <p className="mt-5 font-sans text-[13px] text-muted-dark">{cta.note ?? "Conversa direta com a equipe no WhatsApp"}</p>
            </div>

            <div className="mt-auto pb-[150px] md:pb-[180px]">
              <p className="font-sans text-[14px] font-medium text-lavender">
                {socials.map((social, index) => (
                  <span key={social.id}>
                    {index > 0 && <span aria-hidden="true">  ·  </span>}
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-lilac">
                      {social.title}
                    </a>
                  </span>
                ))}
              </p>
              <p className="mt-1 font-sans text-[13px] text-muted-dark">@marianaxistobr</p>
            </div>

            {/* Short phones (e.g. iPhone SE): no room under the links, so the ribbon would cover them. */}
            <div className="absolute inset-x-0 bottom-0 h-[170px] [@media(max-height:760px)]:hidden">
              <Ribbon
                pts={[-30, 140, 120, 150, 215, 110, 290, 75, 350, 50, 390, 30, 430, 10]}
                viewBox={[390, 170]}
                band={38}
                fontSize={11}
                phrase={ribbonPhrases.menu}
                bandColor="var(--color-lilac)"
                textColor="var(--color-navy-900)"
                delay={0.2}
                drawOnMount
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
