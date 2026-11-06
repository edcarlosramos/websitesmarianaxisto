import { Overline, Reveal, Ribbon } from "../../components";
import styles from "../../style";
import CtaBlock from "../CtaBlock";
import { finalRibbonPhrase } from "../content";

const RIBBONS = [
  { className: "hidden lg:block", box: [1440, 380], pts: [-60, 300, 380, 320, 760, 280, 1000, 60, 1180, -110, 1300, -280, 1500, -400], band: 64, font: 17 },
  { className: "hidden md:block lg:hidden", box: [768, 300], pts: [-40, 250, 230, 260, 461, 210, 614, 90, 730, 0, 800, -40, 860, -80], band: 56, font: 15 },
  { className: "md:hidden", box: [390, 220], pts: [-40, 190, 117, 200, 234, 150, 312, 86, 372, 37, 420, -10, 460, -50], band: 44, font: 12 },
];

const FinalCta = () => (
  <section aria-labelledby="final-title" className="on-dark relative overflow-hidden bg-navy-900 pt-24 md:pt-28 lg:pt-[170px]">
    <div className={`${styles.container} relative z-10`}>
      <Reveal>
        <Overline tone="lilac">11 — Sua vez</Overline>
        <h2
          id="final-title"
          className="font-display mt-5 max-w-[980px] text-[44px] leading-[1.05] tracking-[-0.02em] text-lavender md:text-[64px] lg:mt-7 lg:text-[80px] lg:leading-[1.04]"
        >
          Imagine ouvir o seu áudio do primeiro dia <em className="text-lilac">e perceber a diferença na sua própria voz.</em>
        </h2>
        <p className="mt-6 max-w-[620px] font-sans text-[16px] leading-[1.6] text-muted-dark md:text-[18px] lg:mt-8">
          Em 14 dias, com 20 minutos por dia, você pode sair da vergonha e começar a falar.
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mt-10 lg:mt-14">
        <CtaBlock
          location="final_cta"
          label="Quero falar inglês em 14 dias"
          note="R$ 97 ou 12x de R$ 9,86 · Garantia de evolução · Apenas 20 vagas"
          surface="dark"
        />
      </Reveal>

      <Reveal className="mt-16 max-w-[720px] border-t border-rule-dark pt-8 md:mt-20 lg:mt-24">
        <p className="font-sans text-[15px] leading-[1.65] text-lavender md:text-[17px]">
          <strong className="font-display mr-2 text-[22px] font-normal text-lilac italic md:text-[26px]">PS:</strong>
          você não precisa de mais um ano de aulas para começar a falar. Precisa de prática, correção e 20 minutos por dia. São
          apenas 20 vagas e as inscrições fecham sábado, 14/11, às 23h59. Garanta a sua agora.
        </p>
      </Reveal>
    </div>

    {RIBBONS.map((r) => (
      <div key={r.box[0]} className={`relative mx-auto w-full ${r.className}`} style={{ aspectRatio: `${r.box[0]} / ${r.box[1]}` }}>
        <Ribbon
          pts={r.pts}
          viewBox={r.box}
          band={r.band}
          fontSize={r.font}
          phrase={finalRibbonPhrase}
          bandColor="var(--color-lilac)"
          textColor="var(--color-navy-900)"
        />
      </div>
    ))}
  </section>
);

export default FinalCta;
