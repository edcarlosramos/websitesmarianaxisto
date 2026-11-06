import { Overline, Reveal } from "../../components";
import styles from "../../style";
import { objections } from "../content";

const Objections = () => (
  <section aria-labelledby="objections-title" className="on-dark bg-navy-900 pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[140px]">
    <div className={styles.container}>
      <Reveal className="max-w-[820px]">
        <Overline tone="lilac">08 — “Mas…”</Overline>
        <h2
          id="objections-title"
          className="font-display mt-5 text-[44px] leading-[1.05] tracking-[-0.018em] text-lavender md:mt-6 md:text-[60px] lg:mt-7 lg:text-[72px] lg:leading-[1.02]"
        >
          Toda dúvida tem <em className="text-lilac">uma resposta.</em>
        </h2>
      </Reveal>

      <ul className="mt-12 grid border-b border-rule-dark md:mt-16 md:grid-cols-2 md:gap-x-12 lg:mt-20 lg:gap-x-20">
        {objections.map((item, index) => (
          <Reveal
            as="li"
            key={item.question}
            delay={0.06 * (index % 2)}
            className={`border-t border-rule-dark py-8 md:py-10 ${index === objections.length - 1 ? "md:col-span-2" : ""}`}
          >
            <p className="font-display text-[28px] leading-[1.15] text-lilac italic md:text-[32px] lg:text-[36px]">“{item.question}”</p>
            <p className="mt-4 max-w-[560px] font-sans text-[16px] leading-[1.6] text-muted-dark md:text-[17px]">{item.answer}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Objections;
