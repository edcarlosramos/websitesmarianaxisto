import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

import { featuredTestimonial, testimonials } from "../constants";
import { Overline, Reveal } from "../components";
import styles from "../style";

const Tag = ({ children, filled = false }) => (
  <span
    className={`inline-flex rounded-full px-3.5 py-[7px] font-sans text-[12px] font-semibold uppercase leading-[1.2] tracking-[0.12em] ${
      filled ? "bg-lilac text-navy-900" : "border border-lilac text-lilac"
    }`}
  >
    {children}
  </span>
);

const Attribution = ({ name, photo }) => (
  <p className="flex items-center gap-3 font-sans text-[14px] text-muted-dark">
    <img src={photo} alt="" width={40} height={40} loading="lazy" decoding="async" className="size-10 shrink-0 rounded-full object-cover ring-1 ring-lilac/60" />
    <span>{name}</span>
  </p>
);

const Arrow = ({ direction, disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Depoimento anterior" : "Próximo depoimento"}
    className="grid size-12 place-items-center rounded-full border border-lilac text-lilac transition-colors duration-200 hover:bg-lilac hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac disabled:pointer-events-none disabled:bg-transparent disabled:text-lilac disabled:opacity-30"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`size-5 ${direction === "prev" ? "rotate-180" : ""}`}>
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

// Shows one testimonial on phones and two from tablets up; the arrows slide one card at a time.
const TestimonialCarousel = () => {
  const trackRef = useRef(null);
  const targetRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [edges, setEdges] = useState({ start: true, end: false });
  const [height, setHeight] = useState(null);

  // The track takes the height of the cards in view (not the tallest card overall),
  // so a long testimonial further along doesn't leave an empty band under short ones.
  const fitHeight = useCallback((left) => {
    const el = trackRef.current;
    if (!el) return;
    const from = left ?? el.scrollLeft;
    const visible = [...el.children].filter((card) => card.offsetLeft + card.offsetWidth > from + 2 && card.offsetLeft < from + el.clientWidth - 2);
    if (visible.length) setHeight(Math.max(...visible.map((card) => card.offsetHeight)));
  }, []);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    const refresh = () => {
      updateEdges();
      fitHeight();
    };
    refresh();
    // Re-measure when card heights change (resize, web fonts loading in).
    const observer = new ResizeObserver(refresh);
    [...el.children].forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [updateEdges, fitHeight]);

  // Left offset of card `index`, clamped to the track's scroll range.
  const offsetOf = (el, index) => {
    const step = el.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0);
    return { step, left: Math.min(index * step, el.scrollWidth - el.clientWidth) };
  };

  // Aim at an exact card (not a relative scrollBy) so quick repeated clicks keep
  // advancing even while the previous smooth scroll is still running.
  const slide = (dir) => {
    const el = trackRef.current;
    if (!el?.firstElementChild) return;
    const { step } = offsetOf(el, 0);
    const maxIndex = Math.ceil((el.scrollWidth - el.clientWidth) / step - 0.01);
    const from = targetRef.current ?? Math.round(el.scrollLeft / step);
    const to = Math.min(maxIndex, Math.max(0, from + dir));
    targetRef.current = to;
    const { left } = offsetOf(el, to);
    fitHeight(left);
    el.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
  };

  // Once the arrow's target is reached, or the visitor swipes, follow the real scroll position again.
  const handleScroll = () => {
    updateEdges();
    const el = trackRef.current;
    if (targetRef.current !== null && Math.abs(el.scrollLeft - offsetOf(el, targetRef.current).left) < 2) targetRef.current = null;
  };
  const releaseTarget = () => {
    targetRef.current = null;
  };
  // A swipe settles on new cards: fit the height to them.
  const handleScrollEnd = () => {
    releaseTarget();
    fitHeight();
  };

  return (
    <Reveal
      delay={0.1}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Depoimentos de alunas"
      className="mt-14 border-t border-rule-dark pt-10 md:mt-12 lg:mt-[60px] lg:pt-12"
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onScrollEnd={handleScrollEnd}
        onTouchStart={releaseTarget}
        style={{ height: height ?? undefined }}
        className="relative flex snap-x snap-mandatory items-start gap-8 overflow-x-auto overflow-y-hidden transition-[height] duration-500 ease-(--ease-out-soft) [scrollbar-width:none] motion-reduce:transition-none lg:gap-11 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item) => (
          <figure key={item.id} className="w-full shrink-0 snap-start md:w-[calc(50%-16px)] lg:w-[calc(50%-22px)]">
            <Tag>{item.tag}</Tag>
            <blockquote className="font-inter mt-6 text-[18px] leading-[1.45] text-lavender md:text-[20px]">“{item.content}”</blockquote>
            <figcaption className="mt-5">
              <Attribution name={item.name} photo={item.photo} />
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 flex justify-end gap-3">
        <Arrow direction="prev" disabled={edges.start} onClick={() => slide(-1)} />
        <Arrow direction="next" disabled={edges.end} onClick={() => slide(1)} />
      </div>
    </Reveal>
  );
};

const Testimonials = () => (
  <section aria-labelledby="testimonials-title" className="on-dark bg-navy-900 pt-20 pb-20 md:pt-28 md:pb-24 lg:pt-[140px] lg:pb-[90px]">
    <div className={`${styles.container} lg:grid lg:grid-cols-[minmax(0,480px)_minmax(0,640px)] lg:justify-between`}>
      <Reveal>
        <Overline tone="lilac">04 — Quem já fez o caminho</Overline>
        <h2 id="testimonials-title" className="mt-4 lg:mt-6">
          <span className="font-display block text-[120px] leading-none tracking-[-0.03em] text-lilac md:text-[200px]">+400</span>
          <span className="font-display mt-2 block max-w-[520px] text-[28px] leading-[1.15] text-lavender italic md:text-[40px] lg:mt-8 lg:max-w-[400px]">
            mulheres já saíram do inglês travado para a conversa real.
          </span>
        </h2>
        <p className="mt-10 hidden max-w-[360px] font-sans text-[15px] leading-[1.5] text-muted-dark lg:block">
          Relatos reais de alunas da Comunidade Maker.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-rule-dark pt-12 md:mt-16 lg:mt-[30px] lg:border-t-0 lg:pt-0">
        <Reveal as="figure" delay={0.1}>
          <span aria-hidden="true" className="font-display block h-[0.55em] text-[90px] leading-none text-lilac md:text-[132px] lg:text-[180px]">
            “
          </span>
          <blockquote className="font-inter mt-8 text-[30px] leading-[1.2] text-lavender md:text-[44px] lg:mt-14 lg:text-[44px] lg:leading-[1.18]">
            {featuredTestimonial.content}
          </blockquote>
          <figcaption className="mt-7 flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-5">
            <Tag filled>{featuredTestimonial.tag}</Tag>
            <Attribution name={featuredTestimonial.name} photo={featuredTestimonial.photo} />
          </figcaption>
        </Reveal>

        <TestimonialCarousel />
      </div>
    </div>
  </section>
);

export default Testimonials;
