import { Overline, Reveal } from "../../components";
import { Portrait } from "../../sections/About";
import styles from "../../style";
import { pillars } from "../content";

const MentorText = () => (
  <div className="lg:mt-[42px]">
    <div className="max-w-[560px] space-y-5 font-sans text-[16px] leading-[1.6] text-navy-700 md:text-[18px] lg:max-w-[540px] lg:text-[18px]">
      <p>
        Sou fundadora da Mariana Xisto Idiomas e líder da Comunidade Maker. Sou licenciada em Biologia, membro da U.S.–Brazil
        Exchange Alumni e pesquisadora em Metodologias Ativas. Falo inglês (C2) e espanhol (C1).
      </p>
      <p>
        Ao longo da minha trajetória, percebi que a maioria das pessoas não trava por falta de estudo, e sim por falta de
        prática. Por isso, criei um método com três pilares:
      </p>
    </div>

    <ol className="mt-8 border-b border-navy-800">
      {pillars.map((pillar) => (
        <li key={pillar.id} className="flex gap-5 border-t border-navy-800 py-5 md:gap-8">
          <span className="font-display w-10 shrink-0 text-[32px] leading-none text-wine italic md:w-12 md:text-[40px]">{pillar.id}</span>
          <div>
            <h3 className="font-inter text-[20px] leading-[1.25] text-navy-900 md:text-[22px]">{pillar.title}</h3>
            <p className="mt-1.5 font-sans text-[15px] leading-[1.6] text-navy-700 md:text-[16px]">{pillar.content}</p>
          </div>
        </li>
      ))}
    </ol>

    <div className="mt-8 max-w-[560px] space-y-5 font-sans text-[16px] leading-[1.6] text-navy-700 md:text-[18px] lg:text-[18px]">
      <p>Para que cada aluna receba correção individual de verdade, o Desafio tem apenas 20 vagas.</p>
      <p>
        O Desafio Fale Inglês em 14 Dias é a porta de entrada desse método. Em 14 dias, quero que você ouça a sua própria voz e
        pense: <em className="font-display text-[1.15em] text-wine">“eu consigo, eu já fiz isso”.</em>
      </p>
    </div>
    <p className="font-display mt-8 text-[40px] leading-none text-wine italic lg:text-[44px]">Mariana Xisto</p>
  </div>
);

const Mentor = () => (
  <section id="mariana" aria-labelledby="mentor-title" className="overflow-hidden bg-lavender pt-20 pb-20 md:pt-28 md:pb-24 lg:pt-[150px] lg:pb-[150px]">
    <div className={`${styles.container} flex flex-col gap-12 md:gap-16 lg:grid lg:grid-cols-[500px_minmax(0,576px)] lg:justify-between lg:gap-0`}>
      <div className="order-2 lg:order-1 lg:sticky lg:top-28 lg:self-start">
        <Portrait />
      </div>

      <div className="order-1 lg:order-2">
        <Reveal>
          <Overline>06 — Quem conduz</Overline>
          <h2 id="mentor-title" className={`${styles.heading2Sm} mt-5 text-navy-800 md:mt-6 lg:mt-7 lg:text-[64px]`}>
            Oi, eu sou a <em className="text-wine">Mariana Xisto.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="hidden lg:block">
          <MentorText />
        </Reveal>
      </div>

      <Reveal className="order-3 lg:hidden">
        <MentorText />
      </Reveal>
    </div>
  </section>
);

export default Mentor;
