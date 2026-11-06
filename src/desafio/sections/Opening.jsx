import { Overline, Reveal } from "../../components";
import styles from "../../style";
import CtaBlock from "../CtaBlock";

// "Abertura": the story behind the challenge, ending in the first checkout button.
const Opening = () => (
  <section aria-labelledby="opening-title" className="bg-paper pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[140px]">
    <div className={`${styles.container} lg:grid lg:grid-cols-[minmax(0,560px)_minmax(0,560px)] lg:justify-between`}>
      <Reveal>
        <Overline>01 — O ponto de partida</Overline>
        <h2 id="opening-title" className={`${styles.heading2Sm} mt-5 text-navy-800 md:mt-6 lg:mt-7`}>
          O problema nunca foi falta de estudo. <em className="text-wine">Foi falta de prática.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 md:mt-10 lg:mt-[58px]">
        <div className={`${styles.lead} max-w-[560px] space-y-5 text-navy-700 lg:space-y-6`}>
          <p>
            Você já estudou inglês. Na escola, num cursinho, num aplicativo. Sabe algumas regras, entende algumas palavras.
            Mas, quando alguém fala com você, a mente dá branco e a vergonha aparece.
          </p>
          <p>Numa aula tradicional, você passa a maior parte do tempo ouvindo, e quase nunca fala.</p>
          <p>
            No Desafio Fale Inglês em 14 Dias, é o contrário: <strong className="font-semibold text-navy-800">você fala desde o primeiro dia</strong>.
            São 20 minutos por dia de prática, com uma professora ouvindo o seu áudio e corrigindo a sua pronúncia, todos os dias.
          </p>
          <p>Em 14 dias, você vai dos sons mais difíceis do inglês até discutir um tema em inglês com argumentos.</p>
        </div>
        <CtaBlock location="opening" className="mt-10 lg:mt-12" />
      </Reveal>
    </div>
  </section>
);

export default Opening;
