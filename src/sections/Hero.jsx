import { motion } from "motion/react";

import { Button, Overline } from "../components";
import styles from "../style";
import HeroArt from "./HeroArt";

const enter = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0, 0, 1], delay },
});

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden bg-lavender lg:min-h-[min(1000px,69.445vw)]">
    <HeroArt variant="desktop" />

    <div className={`${styles.container} relative z-10 pt-28 md:pt-[152px] lg:pt-[min(236px,16.39vw)]`}>
      <motion.div {...enter(0.1)}>
        <Overline tone="navy" className="max-w-[300px] leading-[1.5] md:max-w-none lg:max-w-[min(600px,41.7vw)]">
          Intensivo de conversação em inglês · para mulheres
        </Overline>
      </motion.div>

      <motion.h1
        {...enter(0.2)}
        className="font-display mt-3 max-w-[346px] text-[54px] leading-none tracking-[-0.022em] text-navy-800 md:mt-4 md:max-w-[600px] md:text-[84px] lg:max-w-[min(600px,41.7vw)] lg:text-[clamp(64px,6.945vw,100px)] lg:leading-[0.98]"
      >
        Do inglês <em className="text-wine">travado</em> à conversa real.
      </motion.h1>

      <motion.p
        {...enter(0.35)}
        className="mt-5 max-w-[330px] font-sans text-[16px] leading-[1.55] text-navy-700 md:mt-7 md:max-w-[480px] md:text-[18px] lg:mt-8 lg:max-w-[450px] lg:text-[19px]"
      >
        O método que já levou mais de 400 alunas do inglês travado à conversa real em 20 semanas — falando desde o primeiro
        encontro.
      </motion.p>

      <motion.div {...enter(0.5)} className="mt-7 md:mt-10 lg:mt-[min(56px,3.9vw)]">
        <Button label="Quero falar inglês em 20 semanas" size="md" className="md:hidden" />
        <Button label="Quero falar inglês em 20 semanas" className="hidden md:inline-flex" />
        <p className="mt-4 flex items-center gap-2.5 font-sans text-[13px] text-muted md:mt-5 md:text-[14px]">
          <span aria-hidden="true" className="size-2 rounded-full bg-wine" />
          Conversa direta com a equipe no WhatsApp
        </p>
      </motion.div>
    </div>

    <HeroArt variant="tablet" />
    <HeroArt variant="mobile" />
  </section>
);

export default Hero;
