import { printColumns } from "../constants";
import { Button, Overline, PrintColumn, Reveal } from "../components";
import styles from "../style";

const Wall = ({ columns, offsets, durations, gap, className }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="mx-auto flex justify-center" style={{ gap }}>
      {columns.map((items, index) => (
        <PrintColumn
          key={index}
          items={items}
          offset={offsets[index]}
          duration={durations[index]}
          reverse={index % 2 === 1}
          gap={gap}
          className="w-full max-w-[324px] md:w-[324px] lg:w-[328px]"
        />
      ))}
    </div>
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[20%] bg-linear-to-b from-paper to-transparent" />
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-linear-to-t from-paper to-transparent" />
  </div>
);

const Messages = () => (
  <section aria-labelledby="messages-title" className="bg-paper pt-20 pb-20 md:pt-24 md:pb-24 lg:pt-[120px] lg:pb-[80px]">
    <div className={`${styles.container} lg:flex lg:items-start lg:justify-between lg:gap-12`}>
      <Reveal className="lg:max-w-[780px]">
        <Overline>Direto do WhatsApp</Overline>
        <h2
          id="messages-title"
          className="font-display mt-5 text-[40px] leading-[1.06] tracking-[-0.02em] text-navy-800 md:mt-6 md:text-[52px] lg:mt-7 lg:text-[68px] lg:leading-[1.04]"
        >
          Elas contam, <em className="text-wine">com as próprias palavras.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mt-4 max-w-[480px] md:mt-5 lg:mt-[58px] lg:w-[384px] lg:shrink-0">
        <p className={`${styles.lead} text-navy-700`}>
          Mensagens enviadas por alunas da Comunidade Maker — sem edição, do jeito que chegaram.
        </p>
      </Reveal>
    </div>

    <div className="relative mt-8 md:mt-10 lg:mt-[60px]">
      <Wall columns={printColumns.desktop} offsets={[60, -110, -20]} durations={[70, 82, 76]} gap={32} className="hidden h-[820px] lg:block" />
      <Wall columns={printColumns.tablet} offsets={[50, -120]} durations={[72, 84]} gap={24} className={`${styles.container} hidden h-[920px] md:block lg:hidden`} />
      <Wall columns={printColumns.mobile} offsets={[40]} durations={[80]} gap={20} className={`${styles.container} h-[1060px] md:hidden`} />

      <div className="relative z-10 -mt-14 flex justify-center px-6 md:px-0 lg:-mt-6">
        <Button label="Quero esse resultado" size="md" className="md:hidden" />
        <Button label="Quero esse resultado" className="hidden md:inline-flex" />
      </div>
    </div>
  </section>
);

export default Messages;
