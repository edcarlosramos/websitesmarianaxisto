import { Overline, Reveal, Seal } from "../components";
import styles from "../style";

const Guarantee = () => (
  <section aria-labelledby="guarantee-title" className="on-dark overflow-hidden bg-wine pt-24 pb-24 lg:py-[110px]">
    <div className={`${styles.container} flex flex-col items-center gap-12 lg:grid lg:grid-cols-[460px_minmax(0,576px)] lg:items-center lg:justify-between lg:gap-0`}>
      <Seal className="w-[280px] md:w-[360px] lg:ml-[30px] lg:w-[460px]" />

      <Reveal className="w-full">
        <Overline tone="lilac">07 — Garantia incondicional</Overline>
        <h2 id="guarantee-title" className="font-display mt-5 text-[44px] leading-[1.04] tracking-[-0.02em] text-lavender md:text-[64px] lg:mt-7 lg:text-[80px] lg:leading-[1.02]">
          O risco é meu, não seu.
        </h2>
        <p className="mt-6 max-w-[540px] font-sans text-[16px] leading-[1.6] text-blush md:text-[18px] lg:mt-8 lg:max-w-[520px] lg:text-[19px]">
          Entre e participe do primeiro encontro. Se não se adaptar, devolvemos 100% do valor em até 7 dias — sem justificativa,
          sem burocracia.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Guarantee;
