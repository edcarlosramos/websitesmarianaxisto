import { printColumns } from "../../constants";
import { Overline, PrintCard, Reveal } from "../../components";
import { Wall } from "../../sections/Messages";
import styles from "../../style";
import { featuredProofs } from "../content";

// Stands in for a testimonial screenshot that hasn't been added yet (empty `src` in content.js).
const Placeholder = ({ index, width, height }) => (
  <div
    className="grid place-items-center rounded-[20px] border border-dashed border-rule-soft bg-lavender/60 p-6 text-center"
    style={{ aspectRatio: `${width} / ${height}` }}
  >
    <p className="font-sans text-[14px] leading-[1.5] text-muted">
      Depoimento {index + 1}
      <br />
      (print em breve)
    </p>
  </div>
);

const Proof = () => (
  <section id="depoimentos" aria-labelledby="proof-title" className="bg-paper pt-20 pb-20 md:pt-28 md:pb-24 lg:pt-[140px] lg:pb-[80px]">
    <div className={styles.container}>
      <Reveal className="lg:flex lg:items-end lg:justify-between lg:gap-12">
        <div>
          <Overline>05 — Quem já participou</Overline>
          <h2 id="proof-title" className="mt-4 lg:mt-6">
            <span className="font-display block text-[100px] leading-none tracking-[-0.03em] text-wine md:text-[160px] lg:text-[180px]">+400</span>
            <span className="font-display mt-2 block max-w-[560px] text-[28px] leading-[1.15] text-navy-800 italic md:text-[40px]">
              alunas já destravaram o inglês com o método da Mariana.
            </span>
          </h2>
        </div>
        <p className={`${styles.lead} mt-6 max-w-[420px] text-navy-700 lg:mt-0 lg:w-[360px] lg:shrink-0`}>
          Mensagens de alunas do Desafio, sem edição, do jeito que chegaram.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 lg:mt-20 lg:gap-8">
        {featuredProofs.map((proof, index) => (
          <Reveal as="li" key={proof.id} delay={0.1 * index}>
            <p className={`${styles.overline} mb-4 text-wine`}>{proof.tag}</p>
            {proof.src ? <PrintCard {...proof} /> : <Placeholder index={index} width={proof.width} height={proof.height} />}
          </Reveal>
        ))}
      </ul>
    </div>

    <div className="mt-20 md:mt-24 lg:mt-[120px]">
      <Reveal className={styles.container}>
        <h3 className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-navy-800 md:text-[44px] lg:text-[52px]">
          Mais depoimentos de <em className="text-wine">quem já participou.</em>
        </h3>
      </Reveal>
      <div className="relative mt-8 md:mt-10 lg:mt-[56px]">
        <Wall columns={printColumns.desktop} offsets={[60, -110, -20]} speeds={[22, 18, 25]} gap={32} colWidth={328} className="hidden h-[820px] lg:block" />
        <Wall columns={printColumns.tablet} offsets={[50, -120]} speeds={[28, 23]} gap={24} colWidth={324} className={`${styles.container} hidden h-[920px] md:block lg:hidden`} />
        <Wall columns={printColumns.mobile} offsets={[40]} speeds={[34]} gap={20} colWidth={324} className={`${styles.container} h-[1060px] md:hidden`} />
      </div>
    </div>
  </section>
);

export default Proof;
