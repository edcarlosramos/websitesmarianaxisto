import { includes } from "../constants";
import { Button, Overline, Reveal } from "../components";
import styles from "../style";

const Includes = () => (
  <section id="inclui" aria-labelledby="includes-title" className="bg-paper pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[90px]">
    <div className={`${styles.container} lg:grid lg:grid-cols-[minmax(0,420px)_minmax(0,700px)] lg:justify-between`}>
      <Reveal className="lg:self-start">
        <Overline>06 — O que você recebe</Overline>
        <h2 id="includes-title" className={`${styles.heading2Sm} mt-5 text-navy-800 md:mt-6 lg:mt-7`}>
          Tudo o que você precisa para <em className="text-wine">começar a falar.</em>
        </h2>
        <p className={`${styles.lead} mt-7 hidden max-w-[380px] text-navy-700 lg:block`}>
          Ao vivo, gravado e com acompanhamento de perto — de segunda a sexta.
        </p>
        <div className="mt-[56px] hidden lg:block">
          <Button label="Garantir minha vaga" />
        </div>
      </Reveal>

      <ol className="mt-10 md:mt-12 lg:mt-[10px]">
        {includes.map((item, index) => (
          <Reveal
            as="li"
            key={item.id}
            delay={0.06 * index}
            className={`flex gap-5 md:gap-8 ${
              item.highlight
                ? "bg-lilac p-6 md:p-6 lg:p-8"
                : "border-t border-rule-light py-6 md:py-7 lg:py-[30px]"
            }`}
          >
            <span
              className={`font-display w-[52px] shrink-0 text-[32px] leading-none italic md:w-16 md:text-[44px] lg:w-[72px] lg:text-[48px] ${
                item.highlight ? "text-navy-900" : "text-wine"
              }`}
            >
              {item.id}
            </span>
            <div>
              <h3 className="font-display text-[22px] leading-[1.2] text-navy-900 md:text-[28px]">{item.title}</h3>
              <p className={`mt-2 font-sans text-[15px] leading-[1.6] md:text-[17px] lg:max-w-[540px] ${item.highlight ? "text-navy-900" : "text-navy-700"}`}>
                {item.content}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-10 lg:hidden">
        <Button label="Garantir minha vaga" size="md" className="md:hidden" />
        <Button label="Garantir minha vaga" className="hidden md:inline-flex" />
      </div>
    </div>
  </section>
);

export default Includes;
