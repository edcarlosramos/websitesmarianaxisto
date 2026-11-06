import { Overline, Reveal, Seal } from "../../components";
import styles from "../../style";
import { urgency } from "../content";

const Guarantee = () => (
  <section aria-labelledby="guarantee-title" className="on-dark overflow-hidden bg-wine pt-24 pb-24 lg:py-[110px]">
    <div className={`${styles.container} flex flex-col items-center gap-12 lg:grid lg:grid-cols-[460px_minmax(0,576px)] lg:items-center lg:justify-between lg:gap-0`}>
      <Seal
        className="w-[280px] md:w-[360px] lg:ml-[30px] lg:w-[460px]"
        label=""
        value="Garantia"
        caption=""
        valueClass="text-[16cqw] leading-none italic"
      />

      <Reveal className="w-full">
        <Overline tone="lilac">09 — Garantia de evolução</Overline>
        <h2 id="guarantee-title" className="font-display mt-5 text-[44px] leading-[1.04] tracking-[-0.02em] text-lavender md:text-[64px] lg:mt-7 lg:text-[76px] lg:leading-[1.02]">
          Você aplica. <em className="text-lilac">Ou devolvemos.</em>
        </h2>
        <p className="mt-6 max-w-[540px] font-sans text-[16px] leading-[1.6] text-blush md:text-[18px] lg:mt-8 lg:max-w-[520px] lg:text-[19px]">
          Se você aplicar o Desafio, entregando os 14 áudios no prazo, e não evoluir, devolvemos o seu investimento. É só pedir
          até o último dia do Desafio, 29/11.
        </p>
      </Reveal>
    </div>
  </section>
);

// Scarcity strip right after the guarantee: gold band, four short facts.
export const Urgency = () => (
  <section aria-labelledby="urgency-title" className="bg-lilac py-14 md:py-16 lg:py-20">
    <div className={styles.container}>
      <h2 id="urgency-title" className={`${styles.overline} text-navy-900`}>
        Por que agora
      </h2>
      <ul className="mt-6 grid gap-x-10 border-t border-navy-900 md:grid-cols-2 lg:grid-cols-4">
        {urgency.map((item, index) => (
          <Reveal as="li" key={item} delay={0.06 * index} className="flex gap-4 border-b border-navy-900/30 py-5 lg:border-b-0 lg:pt-6">
            <span className="font-display text-[28px] leading-none text-navy-900 italic">0{index + 1}</span>
            <p className="font-sans text-[15px] leading-[1.5] font-medium text-navy-900 md:text-[16px]">{item}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Guarantee;
