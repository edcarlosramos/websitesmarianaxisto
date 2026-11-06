import { Overline, Reveal } from "../../components";
import styles from "../../style";
import { benefits } from "../content";

const Check = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    <path d="M5 12.5 10 17.5 19 7" />
  </svg>
);

const Benefits = () => (
  <section aria-labelledby="benefits-title" className="bg-paper pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[140px]">
    <div className={styles.container}>
      <Reveal className="max-w-[820px]">
        <Overline>04 — O que muda em você</Overline>
        <h2 id="benefits-title" className={`${styles.heading2Sm} mt-5 text-navy-800 md:mt-6 lg:mt-7`}>
          Em 14 dias, você <em className="text-wine">sai da vergonha e começa a falar.</em>
        </h2>
      </Reveal>

      <ul className="mt-12 grid border-t border-rule-light md:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Reveal
            as="li"
            key={benefit.title}
            delay={0.06 * (index % 3)}
            className="flex gap-5 border-b border-rule-light py-7 md:pr-8 md:py-8 lg:py-10"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lilac text-navy-900">
              <Check className="size-5" />
            </span>
            <div>
              <h3 className="font-inter text-[21px] leading-[1.25] text-navy-900 md:text-[23px]">{benefit.title}</h3>
              <p className="mt-2 font-sans text-[15px] leading-[1.6] text-navy-700 md:text-[16px]">{benefit.content}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export { Check };
export default Benefits;
