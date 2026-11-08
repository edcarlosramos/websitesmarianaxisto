import { motion } from "motion/react";

import styles from "../../style";
import HeroArt from "../../sections/HeroArt";
import heroPhoto from "../../assets/desafio/mariana-hero-desafio.webp";
import CtaBlock from "../CtaBlock";
import Countdown from "../Countdown";
import { ribbonPhrase } from "../content";

const enter = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0, 0, 1], delay },
});

// showNumeral: false hides the big gold "14 dias" behind the photo (set to true to bring it back).
const art = {
  numeral: "14",
  label: "dias",
  phrase: ribbonPhrase,
  tone: "dark",
  showNumeral: false,
  photo: heroPhoto,
  stamp: { value: "Vagas", caption: "limitadas", valueClass: "text-[22cqw] italic", sheen: true },
};

// Black Friday edition: near-black hero with gold-foil type, a "Black" badge and a countdown to the end of sign-ups.
const Hero = () => (
  <section id="inicio" className="on-dark relative overflow-hidden bg-ink lg:min-h-[min(1000px,69.445vw)]">
    {/* Soft gold glow behind the portrait, and a faint one under the copy. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-[10%] top-[30%] size-[640px] rounded-full bg-[radial-gradient(circle,rgb(217_177_85/0.22),transparent_65%)] md:top-[40%] lg:top-[8%] lg:right-[2%] lg:size-[900px]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-[20%] -top-[10%] size-[600px] rounded-full bg-[radial-gradient(circle,rgb(194_24_91/0.28),transparent_65%)]"
    />

    <HeroArt variant="desktop" {...art} />

    <div className={`${styles.container} relative z-10 pt-28 md:pt-[152px] lg:pt-[min(200px,13.9vw)] lg:pb-20`}>
      <motion.div {...enter(0.1)} className="flex flex-wrap items-center gap-3">
        <span className="inline-flex rounded-full bg-lilac px-3.5 py-[7px] font-sans text-[12px] font-bold uppercase leading-[1.2] tracking-[0.2em] text-ink">
          Black
        </span>
        <span className={`${styles.overline} text-lavender`}>Desafio Fale Inglês em 14 Dias</span>
      </motion.div>

      <motion.h1
        {...enter(0.2)}
        className="font-display mt-5 max-w-[346px] text-[40px] leading-[1.05] tracking-[-0.022em] text-lavender md:mt-6 md:max-w-[600px] md:text-[60px] lg:max-w-[min(600px,41.7vw)] lg:text-[clamp(44px,4.45vw,64px)] lg:leading-[1.02]"
      >
        Fale mais inglês em <em className="text-gold">14 dias</em> do que em um ano de aulas tradicionais.
      </motion.h1>

      <motion.p
        {...enter(0.35)}
        className="mt-5 max-w-[340px] font-sans text-[16px] leading-[1.55] text-muted-dark md:mt-7 md:max-w-[500px] md:text-[18px] lg:mt-8 lg:max-w-[min(500px,34.7vw)] lg:text-[clamp(16px,1.32vw,19px)]"
      >
        Um desafio prático para quem já estudou inglês, mas ainda não consegue falar. Você pratica todos os dias, envia seu
        áudio e recebe a correção individual da sua pronúncia antes do próximo desafio.
      </motion.p>

      <motion.div {...enter(0.5)} className="mt-7 md:mt-10 lg:mt-[min(44px,3vw)]">
        <CtaBlock location="hero" surface="dark" />
      </motion.div>

      <motion.div {...enter(0.65)}>
        <Countdown className="mt-8 md:mt-10" />
      </motion.div>
    </div>

    <HeroArt variant="tablet" {...art} />
    <HeroArt variant="mobile" {...art} />
  </section>
);

export default Hero;
