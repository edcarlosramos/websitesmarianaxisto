import { useState } from "react";

import { track } from "../analytics";
import { key } from "../assets";
import { comparison, pillars } from "../constants";
import { Overline, Reveal } from "../components";
import styles from "../style";

const VIDEO_ID = "4wYytMX0O5Q";
const VIDEO_TITLE = "O caminho exato para falar inglês em 20 semanas";

// Shows the YouTube thumbnail first and only loads the player when the visitor presses play,
// so the heavy embed doesn't slow down the page load.
const MethodVideo = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <Reveal className="mt-12 md:mt-16 lg:mt-[86px]">
      <div className="relative aspect-video w-full overflow-hidden bg-navy-900">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
            title={VIDEO_TITLE}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              track("video_play", { video_location: "method", video_title: VIDEO_TITLE });
              setPlaying(true);
            }}
            aria-label={`Assistir ao vídeo: ${VIDEO_TITLE}`}
            className="group absolute inset-0 size-full cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-lilac"
          >
            <img
              src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              width="1280"
              height="720"
              className="size-full object-cover transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.02]"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-navy-900/15 transition-colors duration-300 group-hover:bg-navy-900/5" />
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 grid size-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/30 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 md:size-[92px]"
            >
              <svg viewBox="0 0 24 24" className="ml-1 size-7 md:size-9">
                <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </Reveal>
  );
};

const Method = () => (
  <section id="metodo" aria-labelledby="method-title" className="relative overflow-hidden bg-lavender pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[60px]">
    <img
      src={key}
      alt=""
      aria-hidden="true"
      loading="lazy"
      width="640"
      height="229"
      className="key-float absolute right-5 top-6 w-[120px] -rotate-[18deg] md:right-7 md:top-10 md:w-[180px] lg:right-[max(90px,calc(50%-630px))] lg:top-10 lg:w-[230px]"
    />

    <div className={styles.container}>
      <div className="lg:flex lg:items-start lg:justify-between lg:gap-12">
        <Reveal className="lg:max-w-[760px]">
          <Overline>02 — O Método Maker</Overline>
          <h2 id="method-title" className={`${styles.heading2} mt-5 text-navy-800 md:mt-6 lg:mt-7`}>
            A teoria sai da aula ao vivo. <em className="text-wine">A sua fala entra no lugar dela.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-5 max-w-[520px] md:mt-7 lg:mt-[60px] lg:w-[384px] lg:shrink-0">
          <p className={`${styles.lead} text-navy-700`}>
            No Maker, o tempo ao vivo não é para ouvir explicação. É para falar, ser corrigida e ganhar velocidade — com
            outras mulheres que estão no mesmo processo.
          </p>
        </Reveal>
      </div>

      <ol className="mt-12 md:mt-16 lg:mt-[130px] lg:grid lg:grid-cols-3 lg:gap-6">
        {pillars.map((pillar, index) => (
          <Reveal
            as="li"
            key={pillar.id}
            delay={0.12 * index}
            className="border-t border-navy-800 py-6 md:grid md:grid-cols-[152px_1fr] md:py-7 lg:block lg:border-t-0 lg:py-0"
            style={{ "--stagger": `${index * 72}px` }}
          >
            <div className="lg:mt-(--stagger)">
              <span className="font-display block text-[56px] leading-none text-wine italic md:text-[84px] lg:h-[150px] lg:border-b lg:border-navy-800 lg:text-[120px]">
                {pillar.id}
              </span>
            </div>
            <div className="mt-4 md:mt-1.5 lg:mt-6">
              <h3 className="font-inter text-[26px] leading-[1.15] text-navy-800 md:text-[30px] lg:text-[32px]">{pillar.title}</h3>
              <p className={`${styles.body} mt-2.5 text-navy-700 md:max-w-[440px] lg:mt-4 lg:max-w-[340px]`}>{pillar.content}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-6 grid md:mt-10 lg:mt-[86px] lg:grid-cols-[560fr_640fr]">
        <div className="border border-rule-soft p-5 md:p-7 lg:px-8 lg:py-8">
          <p className={`${styles.overline} text-muted`}>Aula particular</p>
          <p className="mt-3 font-sans text-[16px] leading-[1.5] text-navy-700 md:text-[17px] lg:text-[18px]">{comparison.private}</p>
        </div>
        <div className="on-dark bg-navy-900 p-5 md:p-7 lg:px-10 lg:py-8">
          <p className={`${styles.overline} text-lilac`}>Método Maker</p>
          <p className="mt-3 font-sans text-[16px] leading-[1.5] text-lavender md:text-[17px] lg:text-[18px]">{comparison.maker}</p>
        </div>
      </Reveal>

      <MethodVideo />
    </div>
  </section>
);

export default Method;
