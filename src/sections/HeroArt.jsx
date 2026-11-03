import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { mariana } from "../assets";
import { ribbonPhrases } from "../constants";
import { Ribbon, Stamp } from "../components";

// Hero composition per breakpoint, transcribed from the Penpot artboards.
// Coordinates are in artboard pixels and converted to container-query units (cqw),
// so the whole composition scales with the width of its box.
const ART = {
  desktop: {
    box: [1440, 1000],
    className: "hidden lg:block absolute left-1/2 top-0 w-full max-w-[1440px] -translate-x-1/2",
    numeral: { x: 630, y: 40, size: 920 },
    label: { x: 1040, y: 196, size: 72 },
    photo: { x: 890, y: 290, w: 491 },
    stamp: { x: 1236, y: 610, w: 156 },
    ribbon: { pts: [-60, 1050, 320, 1045, 580, 1000, 740, 800, 870, 630, 1000, 520, 1180, 430, 1300, 370, 1400, 320, 1700, 160], band: 60, font: 16 },
  },
  tablet: {
    box: [768, 660],
    className: "hidden md:block lg:hidden relative -mt-[50px] w-full",
    numeral: { x: 250, y: 50, size: 720 },
    label: { x: 578, y: 112, size: 52 },
    photo: { x: 350, y: 200, w: 360 },
    stamp: { x: 70, y: 420, w: 132 },
    ribbon: { pts: [-40, 630, 200, 640, 340, 570, 430, 460, 530, 340, 650, 280, 900, 180], band: 52, font: 14 },
  },
  mobile: {
    box: [390, 500],
    className: "md:hidden relative mt-10 w-full",
    numeral: { x: 96, y: 0, size: 500 },
    label: { x: 24, y: 68, size: 34 },
    photo: { x: 120, y: 68, w: 280 },
    stamp: { x: 16, y: 250, w: 104 },
    ribbon: { pts: [-30, 470, 120, 480, 190, 400, 240, 300, 300, 190, 360, 150, 460, 90], band: 40, font: 11 },
  },
};

const HeroArt = ({ variant }) => {
  const art = ART[variant];
  const [bw, bh] = art.box;
  const u = (n) => `${(n / bw) * 100}cqw`;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const numeralY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <div ref={ref} className={`artboard overflow-hidden ${art.className}`} style={{ aspectRatio: `${bw} / ${bh}` }} aria-hidden="true">
      <motion.span
        className="font-display absolute leading-none text-wine select-none"
        style={{ left: u(art.numeral.x), top: u(art.numeral.y), fontSize: u(art.numeral.size), y: numeralY }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], delay: 0.2 }}
      >
        5
      </motion.span>

      <Ribbon pts={art.ribbon.pts} viewBox={art.box} band={art.ribbon.band} fontSize={art.ribbon.font} phrase={ribbonPhrases.speech} delay={0.4} />

      <motion.span
        className="font-display absolute leading-none italic text-wine"
        style={{ left: u(art.label.x), top: u(art.label.y), fontSize: u(art.label.size) }}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0, 0, 1], delay: 0.7 }}
      >
        meses
      </motion.span>

      <motion.img
        src={mariana}
        alt=""
        width="1000"
        height="1753"
        fetchPriority="high"
        decoding="async"
        className="absolute h-auto max-w-none"
        style={{ left: u(art.photo.x), top: u(art.photo.y), width: u(art.photo.w), y: photoY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.2, 0, 0, 1], delay: 0.35 }}
      />

      <Stamp style={{ left: u(art.stamp.x), top: u(art.stamp.y), width: u(art.stamp.w) }} />
    </div>
  );
};

export default HeroArt;
