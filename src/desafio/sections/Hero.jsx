import { motion } from "motion/react";

import { Overline } from "../../components";
import styles from "../../style";
import HeroArt from "../../sections/HeroArt";
import CtaBlock from "../CtaBlock";
import { ribbonPhrase } from "../content";

const enter = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0, 0, 1], delay },
});

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden bg-lavender lg:min-h-[min(1000px,69.445vw)]">
    <HeroArt variant="desktop" numeral="14" label="dias" phrase={ribbonPhrase} />

    <div className={`${styles.container} relative z-10 pt-28 md:pt-[152px] lg:pt-[min(220px,15.3vw)]`}>
      <motion.div {...enter(0.1)}>
        <Overline tone="navy" className="max-w-[300px] leading-[1.5] md:max-w-none lg:max-w-[min(600px,41.7vw)]">
          Desafio Fale Inglês em 14 Dias · Edição Black
        </Overline>
      </motion.div>

      <motion.h1
        {...enter(0.2)}
        className="font-display mt-3 max-w-[346px] text-[40px] leading-[1.05] tracking-[-0.022em] text-navy-800 md:mt-4 md:max-w-[600px] md:text-[60px] lg:max-w-[min(600px,41.7vw)] lg:text-[clamp(44px,4.45vw,64px)] lg:leading-[1.02]"
      >
        Fale mais inglês em <em className="text-wine">14 dias</em> do que em um ano de aulas tradicionais.
      </motion.h1>

      <motion.p
        {...enter(0.35)}
        className="mt-5 max-w-[340px] font-sans text-[16px] leading-[1.55] text-navy-700 md:mt-7 md:max-w-[500px] md:text-[18px] lg:mt-8 lg:max-w-[min(500px,34.7vw)] lg:text-[19px]"
      >
        Um desafio prático para quem já estudou inglês, mas ainda não consegue falar. Você pratica todos os dias, envia seu
        áudio e recebe a correção individual da sua pronúncia antes do próximo desafio.
      </motion.p>

      <motion.div {...enter(0.5)} className="mt-7 md:mt-10 lg:mt-[min(48px,3.4vw)]">
        <CtaBlock location="hero" />
      </motion.div>
    </div>

    <HeroArt variant="tablet" numeral="14" label="dias" phrase={ribbonPhrase} />
    <HeroArt variant="mobile" numeral="14" label="dias" phrase={ribbonPhrase} />
  </section>
);

export default Hero;
