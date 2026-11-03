import { ribbonPhrases } from "../constants";
import { Button, Overline, Reveal, Ribbon } from "../components";
import styles from "../style";

const RIBBONS = [
  { className: "hidden lg:block", box: [1440, 380], pts: [-60, 300, 380, 320, 760, 280, 1000, 60, 1180, -110, 1300, -280, 1500, -400], band: 64, font: 17 },
  { className: "hidden md:block lg:hidden", box: [768, 300], pts: [-40, 250, 230, 260, 461, 210, 614, 90, 730, 0, 806, -10, 860, -80], band: 56, font: 15 },
  { className: "md:hidden", box: [390, 220], pts: [-40, 190, 117, 200, 234, 150, 312, 86, 370, 20, 410, 10, 460, -50], band: 44, font: 12 },
];

const FinalCta = () => (
  <section aria-labelledby="final-title" className="on-dark relative overflow-hidden bg-navy-900 pt-24 md:pt-28 lg:pt-[170px]">
    <div className={`${styles.container} relative z-10`}>
      <Reveal>
        <Overline tone="lilac">09 — Sua vez</Overline>
        <h2
          id="final-title"
          className="font-display mt-5 max-w-[940px] text-[44px] leading-[1.05] tracking-[-0.02em] text-lavender md:text-[68px] lg:mt-7 lg:text-[88px] lg:leading-[1.04]"
        >
          O inglês pode ser a única coisa entre você <em className="text-lilac">e o que vem depois.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.15} className="mt-10 lg:mt-14">
        <Button label="Garantir minha vaga" surface="dark" size="md" className="md:hidden" />
        <Button label="Falar com a equipe e garantir minha vaga" surface="dark" className="hidden md:inline-flex" />
        <p className="mt-6 font-sans text-[14px] text-muted-dark">Garantia de 7 dias · Conversa direta no WhatsApp</p>
      </Reveal>
    </div>

    {RIBBONS.map((r) => (
      <div key={r.box[0]} className={`relative mx-auto w-full ${r.className}`} style={{ aspectRatio: `${r.box[0]} / ${r.box[1]}` }}>
        <Ribbon
          pts={r.pts}
          viewBox={r.box}
          band={r.band}
          fontSize={r.font}
          phrase={ribbonPhrases.next}
          bandColor="var(--color-lilac)"
          textColor="var(--color-navy-900)"
        />
      </div>
    ))}
  </section>
);

export default FinalCta;
