import { Overline, Reveal } from "../../components";
import styles from "../../style";
import CtaBlock from "../CtaBlock";
import { offerItems } from "../content";
import { Check } from "./Benefits";

const Price = () => (
  <div className="on-dark bg-navy-900 p-7 md:p-10 lg:p-12">
    <p className={`${styles.overline} text-lilac`}>Edição Black</p>
    <p className="mt-5 flex items-baseline gap-3 text-lavender">
      <span className="font-sans text-[20px] md:text-[24px]">R$</span>
      <span className="font-display text-[96px] leading-[0.9] tracking-[-0.03em] md:text-[120px]">97</span>
      <span className="font-sans text-[15px] text-muted-dark md:text-[16px]">no Pix</span>
    </p>
    <p className="mt-3 font-sans text-[16px] text-lavender md:text-[18px]">
      ou <strong className="font-semibold text-lilac">12x de R$ 9,86</strong> no cartão
    </p>
    <CtaBlock location="offer" surface="dark" className="mt-8 md:mt-10" />
  </div>
);

const Offer = () => (
  <section id="oferta" aria-labelledby="offer-title" className="bg-paper pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[140px]">
    <div className={`${styles.container} lg:grid lg:grid-cols-[minmax(0,640px)_minmax(0,500px)] lg:justify-between lg:gap-12`}>
      <div>
        <Reveal>
          <Overline>07 — A oferta</Overline>
          <h2 id="offer-title" className={`${styles.heading2Sm} mt-5 text-navy-800 md:mt-6 lg:mt-7`}>
            Tudo o que <em className="text-wine">você recebe.</em>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-12">
          {offerItems.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={0.05 * index}
              className={`flex gap-5 md:gap-6 ${item.highlight ? "mt-2 bg-lilac p-6 lg:p-7" : "border-t border-rule-light py-5 md:py-6"}`}
            >
              <span
                className={`grid size-9 shrink-0 place-items-center rounded-full ${item.highlight ? "bg-navy-900 text-lilac" : "bg-lilac text-navy-900"}`}
              >
                <Check className="size-4.5" />
              </span>
              <div>
                <h3 className="font-inter text-[20px] leading-[1.25] text-navy-900 md:text-[23px]">{item.title}</h3>
                <p className="mt-1.5 font-sans text-[15px] leading-[1.6] text-navy-700 md:text-[16px]">{item.content}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={0.15} className="mt-12 lg:sticky lg:top-28 lg:mt-[10px] lg:self-start">
        <Price />
      </Reveal>
    </div>
  </section>
);

export default Offer;
