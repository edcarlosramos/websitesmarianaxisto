import { Overline, Reveal } from "../../components";
import styles from "../../style";
import { painPoints } from "../content";

const Pain = () => (
  <section aria-labelledby="pain-title" className="on-dark bg-navy-900 pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[140px]">
    <div className={`${styles.container} lg:grid lg:grid-cols-[minmax(0,480px)_minmax(0,640px)] lg:justify-between`}>
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <Overline tone="lilac">02 — Você se reconhece?</Overline>
        <h2
          id="pain-title"
          className="font-display mt-5 text-[44px] leading-[1.05] tracking-[-0.018em] text-lavender md:mt-6 md:text-[64px] md:leading-[1.04] lg:mt-7 lg:text-[72px] lg:leading-[1.02]"
        >
          Se alguma destas situações é sua, <em className="text-lilac">este Desafio foi feito para você.</em>
        </h2>
      </Reveal>

      <ol className="mt-10 border-b border-rule-dark md:mt-16 lg:mt-[10px]">
        {painPoints.map((pain, index) => (
          <Reveal
            as="li"
            key={pain}
            delay={0.06 * index}
            className="flex gap-6 border-t border-rule-dark py-5 md:gap-12 md:py-6 lg:min-h-[96px]"
          >
            <span className="w-5 pt-1.5 font-sans text-[12px] font-semibold tracking-[0.07em] text-lilac md:w-6 md:text-[14px]">
              0{index + 1}
            </span>
            <span className="font-inter flex-1 text-[19px] leading-[1.35] text-lavender md:text-[22px]">{pain}</span>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Pain;
