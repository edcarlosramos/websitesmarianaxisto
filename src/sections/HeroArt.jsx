import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { marianaHero } from "../assets";
import { ribbonPhrases } from "../constants";
import { Ribbon, Stamp } from "../components";

// Hero composition per breakpoint, transcribed from the Penpot artboards.
// Coordinates are in artboard pixels and converted to container-query units (cqw),
// so the whole composition scales with the width of its box.
const ART = {
  desktop: {
    box: [1440, 1000],
    // Overflow stays visible so the ribbon runs past the 1440px artboard on wide screens (the section clips it).
    className: "hidden lg:block lg:overflow-visible absolute left-1/2 top-0 w-full max-w-[1440px] -translate-x-1/2",
    numeral: { x: 640, y: 150, size: 600 },
    label: { x: 1120, y: 150, size: 64 },
    photo: { x: 890, y: 290, w: 491 },
    stamp: { x: 730, y: 600, w: 156 },
    ribbon: { pts: [-60, 1050, 320, 1045, 580, 1000, 740, 800, 870, 630, 1000, 520, 1180, 430, 1300, 370, 1400, 320, 1700, 160, 2000, 0, 2300, -160, 2600, -320], band: 60, font: 16 },
  },
  tablet: {
    box: [768, 660],
    className: "hidden md:block lg:hidden relative -mt-[50px] w-full",
    numeral: { x: 180, y: 120, size: 460 },
    label: { x: 480, y: 110, size: 46 },
    photo: { x: 350, y: 200, w: 360 },
    stamp: { x: 70, y: 420, w: 132 },
    ribbon: { pts: [-40, 630, 200, 640, 340, 570, 430, 460, 530, 340, 650, 280, 900, 180], band: 52, font: 14 },
  },
  mobile: {
    box: [390, 500],
    className: "md:hidden relative mt-10 w-full",
    numeral: { x: 40, y: 40, size: 300 },
    label: { x: 236, y: 30, size: 30 },
    photo: { x: 104, y: 80, w: 300 },
    stamp: { x: 16, y: 250, w: 104 },
    ribbon: { pts: [-30, 470, 120, 480, 190, 400, 240, 300, 300, 190, 360, 150, 460, 90], band: 40, font: 11 },
  },
};

const HeroArt = ({ variant, numeral = "20", label = "semanas", phrase = ribbonPhrases.speech }) => {
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
        {numeral}
      </motion.span>

      <Ribbon pts={art.ribbon.pts} viewBox={art.box} band={art.ribbon.band} fontSize={art.ribbon.font} phrase={phrase} delay={0.4} />

      <motion.span
        className="font-display absolute leading-none italic text-wine"
        style={{ left: u(art.label.x), top: u(art.label.y), fontSize: u(art.label.size) }}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0, 0, 1], delay: 0.7 }}
      >
        {label}
      </motion.span>

      <motion.img
        src={marianaHero}
        alt=""
        width="1000"
        height="1500"
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
