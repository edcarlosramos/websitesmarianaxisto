import { painPoints } from "../constants";
import { Overline, Reveal } from "../components";
import styles from "../style";

const Problem = () => (
  <section aria-labelledby="problem-title" className="on-dark bg-navy-900 pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[110px]">
    <div className={styles.container}>
      <div className="lg:grid lg:grid-cols-[minmax(0,560px)_minmax(0,576px)] lg:justify-between">
        <div>
          <Reveal>
            <Overline tone="lilac">01 — O ponto de partida</Overline>
            <h2
              id="problem-title"
              className="font-display mt-5 text-[44px] leading-[1.05] tracking-[-0.018em] text-lavender md:mt-6 md:text-[64px] md:leading-[1.04] lg:mt-7 lg:text-[76px] lg:leading-[1.02]"
            >
              Você já estudou inglês. <em className="text-lilac">Mas não fala.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[520px] font-sans text-[16px] leading-[1.6] text-muted-dark md:mt-7 md:text-[18px] lg:mt-14 lg:max-w-[420px]">
              Curso, professora particular, aplicativo. Você fez a sua parte — e, na hora de abrir a boca, o inglês trava.
            </p>
          </Reveal>
        </div>

        <ol className="mt-10 border-b border-rule-dark md:mt-16 lg:mt-11">
          {painPoints.map((pain, index) => (
            <Reveal
              as="li"
              key={pain}
              delay={0.08 * index}
              className="flex gap-6 border-t border-rule-dark py-5 md:min-h-24 md:gap-12 md:py-6 lg:min-h-[104px]"
            >
              <span className="w-5 pt-1.5 font-sans text-[12px] font-semibold tracking-[0.07em] text-lilac md:w-6 md:text-[14px]">
                0{index + 1}
              </span>
              <span className="font-inter flex-1 text-[20px] leading-[1.3] text-lavender md:text-[24px]">{pain}</span>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="mt-14 md:mt-24 lg:mt-[94px] lg:border-t lg:border-rule-dark lg:pt-12">
        <p className="font-display text-[38px] leading-[1.06] tracking-[-0.018em] text-lavender md:text-[60px] lg:text-[84px]">
          O problema não é você.
          <br />
          <em className="text-lilac">O problema é o método.</em>
        </p>
      </Reveal>
    </div>
  </section>
);

export default Problem;
