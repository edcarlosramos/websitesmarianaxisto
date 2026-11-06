import { key } from "../../assets";
import { Overline, Reveal } from "../../components";
import styles from "../../style";
import { journey, steps } from "../content";

const Steps = () => (
  <ol className="mt-12 md:mt-16 lg:mt-[110px] lg:grid lg:grid-cols-3 lg:gap-6">
    {steps.map((step, index) => (
      <Reveal
        as="li"
        key={step.id}
        delay={0.12 * index}
        className="border-t border-navy-800 py-6 md:grid md:grid-cols-[152px_1fr] md:py-7 lg:block lg:border-t-0 lg:py-0"
        style={{ "--stagger": `${index * 72}px` }}
      >
        <div className="lg:mt-(--stagger)">
          <span className="font-display block text-[56px] leading-none text-wine italic md:text-[84px] lg:h-[150px] lg:border-b lg:border-navy-800 lg:text-[120px]">
            {step.id}
          </span>
        </div>
        <div className="mt-4 md:mt-1.5 lg:mt-6">
          <h3 className="font-inter text-[26px] leading-[1.15] text-navy-800 md:text-[30px] lg:text-[32px]">{step.title}</h3>
          <p className={`${styles.body} mt-2.5 text-navy-700 md:max-w-[440px] lg:mt-4 lg:max-w-[340px]`}>{step.content}</p>
        </div>
      </Reveal>
    ))}
  </ol>
);

// 14 days in a grid: 2 columns on phones, 3 on tablets, 7 per row on desktop (one row per week).
const Journey = () => (
  <div id="jornada" className="mt-20 scroll-mt-24 md:mt-28 lg:mt-[150px]">
    <Reveal className="lg:flex lg:items-end lg:justify-between lg:gap-12">
      <div>
        <Overline>Sua jornada em 14 dias</Overline>
        <h3 className="font-display mt-5 text-[36px] leading-[1.06] tracking-[-0.02em] text-navy-800 md:text-[48px] lg:mt-6 lg:text-[56px]">
          Dos sons mais difíceis <em className="text-wine">a uma conversa com argumentos.</em>
        </h3>
      </div>
      <p className={`${styles.lead} mt-5 max-w-[420px] text-navy-700 lg:mt-0 lg:w-[360px] lg:shrink-0`}>
        Cada dia tem um passo novo, e você aplica na hora.
      </p>
    </Reveal>

    <ol className="mt-10 grid grid-cols-2 border-t border-l border-rule-soft md:mt-14 md:grid-cols-3 lg:grid-cols-7">
      {journey.map((goal, index) => (
        <Reveal
          as="li"
          key={goal}
          delay={0.03 * (index % 7)}
          amount={0.1}
          className={`flex min-h-[176px] flex-col border-r border-b border-rule-soft p-4 md:min-h-[200px] md:p-5 lg:min-h-[232px] ${
            index === 0 || index === journey.length - 1 ? "on-dark bg-navy-900" : "bg-paper/60"
          }`}
        >
          <span className={`${styles.overline} ${index === 0 || index === journey.length - 1 ? "text-lilac" : "text-muted"}`}>Dia</span>
          <span
            className={`font-display mt-1 block text-[52px] leading-none italic md:text-[60px] ${
              index === 0 || index === journey.length - 1 ? "text-lilac" : "text-wine"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p
            className={`mt-auto pt-4 font-sans text-[14px] leading-[1.45] md:text-[15px] ${
              index === 0 || index === journey.length - 1 ? "text-lavender" : "text-navy-700"
            }`}
          >
            {goal}
          </p>
        </Reveal>
      ))}
    </ol>
  </div>
);

const HowItWorks = () => (
  <section id="como-funciona" aria-labelledby="how-title" className="relative overflow-hidden bg-lavender pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[140px]">
    <img
      src={key}
      alt=""
      aria-hidden="true"
      loading="lazy"
      width="640"
      height="229"
      className="key-float absolute right-5 top-6 w-[120px] -rotate-[18deg] md:right-7 md:top-10 md:w-[180px] lg:right-[max(90px,calc(50%-630px))] lg:top-10 lg:w-[230px]"
    />

    <div className={styles.container}>
      <div className="lg:flex lg:items-start lg:justify-between lg:gap-12">
        <Reveal className="lg:max-w-[760px]">
          <Overline>03 — Como funciona</Overline>
          <h2 id="how-title" className={`${styles.heading2} mt-5 text-navy-800 md:mt-6 lg:mt-7`}>
            Um passo novo por dia. <em className="text-wine">E você aplica na hora.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-5 max-w-[520px] md:mt-7 lg:mt-[60px] lg:w-[384px] lg:shrink-0">
          <p className={`${styles.lead} text-navy-700`}>O Desafio funciona pela velocidade de prática e aplicação.</p>
        </Reveal>
      </div>

      <Steps />
      <Journey />
    </div>
  </section>
);

export default HowItWorks;
