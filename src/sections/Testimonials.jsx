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

        <div className="mt-14 grid gap-0 border-t border-rule-dark md:mt-12 md:grid-cols-2 md:gap-8 md:border-t-0 lg:mt-[60px] lg:gap-11 lg:border-t lg:pt-12">
          {testimonials.map((item, index) => (
            <Reveal
              as="figure"
              key={item.id}
              delay={0.1 * index}
              className="border-t border-rule-dark pt-8 pb-10 first:border-t-0 md:border-t md:first:border-t md:pb-0 lg:border-t-0 lg:pt-0 lg:first:border-t-0"
            >
              <Tag>{item.tag}</Tag>
              <blockquote className="font-inter mt-6 text-[18px] leading-[1.45] text-lavender md:text-[20px]">“{item.content}”</blockquote>
              <figcaption className="mt-5">
                <Attribution name={item.name} photo={item.photo} />
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
