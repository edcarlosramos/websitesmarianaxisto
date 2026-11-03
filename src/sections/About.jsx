import { motion } from "motion/react";

import { key, mariana } from "../assets";
import { Overline, Reveal } from "../components";
import styles from "../style";

const Portrait = () => (
  // On mobile the top margin reserves room above the arch so the floating key never overlaps the title or the photo.
  <div className="relative mx-auto mt-24 w-[300px] md:mx-0 md:mt-0 md:ml-auto md:w-[400px] lg:ml-0 lg:w-[500px]">
    <motion.img
      src={key}
      alt=""
      aria-hidden="true"
      loading="lazy"
      width="640"
      height="229"
      className="key-float absolute left-0 -top-[93px] w-[130px] md:-left-[300px] md:top-6 md:w-[240px] lg:-left-[100px] lg:-top-14 lg:w-[300px]"
      initial={{ rotate: -60, opacity: 0 }}
      whileInView={{ rotate: -38, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
    />
    <Reveal y={40} className="relative aspect-[500/760] w-full overflow-hidden rounded-t-full bg-wine">
      <img
        src={mariana}
        alt="Mariana Xisto sorrindo, de blazer preto com broche das bandeiras do Brasil e dos Estados Unidos"
        loading="lazy"
        decoding="async"
        width="1000"
        height="1500"
        className="absolute inset-0 size-full object-cover object-[50%_35%]"
      />
    </Reveal>
    <span className="absolute -bottom-3 right-[12%] inline-flex rounded-full bg-lilac px-3.5 py-[7px] font-sans text-[12px] font-semibold uppercase leading-[1.2] tracking-[0.12em] text-navy-900 md:right-[8%] lg:-right-16">
      Criadora do Método Maker
    </span>
  </div>
);

const About = () => (
  <section id="mariana" aria-labelledby="about-title" className="overflow-hidden bg-lavender pt-20 pb-20 md:pt-28 md:pb-24 lg:pt-[150px] lg:pb-[150px]">
    <div className={`${styles.container} flex flex-col gap-12 md:gap-16 lg:grid lg:grid-cols-[500px_minmax(0,576px)] lg:justify-between lg:gap-0`}>
      <div className="order-2 lg:order-1">
        <Portrait />
      </div>

      <div className="order-1 lg:order-2">
        <Reveal>
          <Overline>05 — Quem conduz</Overline>
          <h2 id="about-title" className={`${styles.heading2Sm} mt-5 text-navy-800 md:mt-6 lg:mt-7 lg:text-[64px]`}>
            Antes de ensinar inglês, eu <em className="text-wine">fui exatamente essa mulher.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:block">
          <AboutText />
        </Reveal>
      </div>

      <Reveal className="order-3 lg:hidden">
        <AboutText />
      </Reveal>
    </div>
  </section>
);

function AboutText() {
  return (
    <div className="lg:mt-[42px]">
      <div className="max-w-[560px] space-y-5 font-sans text-[16px] leading-[1.6] text-navy-700 md:text-[18px] lg:max-w-[520px] lg:space-y-6 lg:text-[19px]">
        <p>
          Estudei, me esforcei e, mesmo assim, não conseguia me comunicar em inglês. A virada veio quando parei de tratar o
          inglês como matéria e passei a usá-lo como ferramenta.
        </p>
        <p>Dessa virada nasceu o Método Maker — e a Comunidade Maker, onde mulheres como você saem da teoria e começam a falar.</p>
      </div>
      <p className="font-display mt-8 text-[40px] leading-none text-wine italic lg:text-[44px]">Mariana Xisto</p>
      <ul className="mt-8 flex flex-col gap-1 border-t border-navy-800 pt-5 font-sans text-[14px] font-semibold leading-[1.45] tracking-[0.03em] text-navy-800 md:flex-row md:gap-10">
        <li>Licenciada em Biologia</li>
        <li>Pesquisadora em Ensino e Metodologias Ativas</li>
      </ul>
    </div>
  );
}

export default About;
