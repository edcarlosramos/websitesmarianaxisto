import { Button, Overline, Reveal } from "../components";
import styles from "../style";
import TimelineHorizontal from "./TimelineHorizontal";
import TimelineVertical from "./TimelineVertical";

const Results = () => (
  <section id="resultados" aria-labelledby="results-title" className="overflow-hidden bg-paper pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[80px]">
    <div className={`${styles.container} lg:flex lg:items-start lg:justify-between`}>
      <Reveal className="lg:max-w-[820px]">
        <Overline>03 — Em 20 semanas</Overline>
        <h2 id="results-title" className={`${styles.heading2} mt-5 text-navy-800 md:mt-6 lg:mt-7`}>
          O que muda na sua vida em <em className="text-wine">vinte semanas?</em>
        </h2>
      </Reveal>
      <Reveal delay={0.15} className="hidden lg:mt-[52px] lg:block">
        <Button label="Quero esse resultado" />
      </Reveal>
    </div>

    <TimelineHorizontal />
    <TimelineVertical />

    <div className={`${styles.container} mt-10 lg:hidden`}>
      <Button label="Quero esse resultado" size="md" className="md:hidden" />
      <Button label="Quero esse resultado" className="hidden md:inline-flex" />
    </div>
  </section>
);

export default Results;
