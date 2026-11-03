import { motion } from "motion/react";

import { outcomes, ribbonPhrases } from "../constants";
import { Ribbon } from "../components";
import { sampleCubic, yAtX } from "../utils/geometry";
import TimelineStop from "./TimelineStop";

// Desktop timeline: the ribbon waves across the page and the five outcomes alternate
// above and below it. Artboard = 1440 × 520 (Penpot section, y 400 → 920).
const BOX = [1440, 520];
const PTS = [-40, 300, 220, 140, 420, 460, 720, 300, 1020, 140, 1220, 460, 1480, 280];
const STOPS_X = [200, 460, 720, 980, 1240];
const SAMPLES = sampleCubic(PTS);
const u = (n) => `${(n / BOX[0]) * 100}cqw`;

const TimelineHorizontal = () => (
  <div className="artboard relative mx-auto mt-6 hidden w-full max-w-[1440px] lg:block" style={{ aspectRatio: `${BOX[0]} / ${BOX[1]}` }}>
    <Ribbon pts={PTS} viewBox={BOX} band={56} fontSize={15} phrase={ribbonPhrases.skills} />

    <ol>
      {outcomes.map((outcome, index) => {
        const x = STOPS_X[index];
        const y = yAtX(SAMPLES, x);
        const above = index % 2 === 0;
        const isLast = index === outcomes.length - 1;

        return (
          <li key={outcome}>
            <TimelineStop number={index + 1} isLast={isLast} delay={0.6 + index * 0.12} style={{ left: u(x), top: u(y), width: u(72), height: u(72) }} />
            <div
              className={`absolute w-[15.3cqw] -translate-x-1/2 text-center ${above ? "-translate-y-full" : ""}`}
              style={{ left: u(x), top: u(above ? y - 60 : y + 60) }}
            >
              <motion.div
                initial={{ opacity: 0, y: above ? 12 : -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.2, 0, 0, 1], delay: 0.8 + index * 0.12 }}
              >
                {isLast && <p className="mb-2 font-sans text-[12px] font-semibold uppercase tracking-[0.17em] text-wine">Ao final</p>}
                <p className="font-inter text-[max(17px,1.46cqw)] leading-[1.3] text-navy-800">{outcome}</p>
              </motion.div>
            </div>
          </li>
        );
      })}
    </ol>
  </div>
);

export default TimelineHorizontal;
