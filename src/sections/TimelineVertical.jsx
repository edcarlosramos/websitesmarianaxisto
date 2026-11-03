import { motion } from "motion/react";

import { outcomes, ribbonPhrases } from "../constants";
import { Ribbon } from "../components";
import useMediaQuery from "../hooks/useMediaQuery";
import { sampleCubic, verticalWave, xAtY } from "../utils/geometry";
import styles from "../style";
import TimelineStop from "./TimelineStop";

// Tablet / mobile timeline: the ribbon snakes down on the left, outcomes read on the right.
const CONFIG = {
  tablet: { stopX: 82, textX: 192, amp: 100, band: 52, font: 14, step: 182, size: 28 },
  mobile: { stopX: 24, textX: 80, amp: 28, band: 36, font: 10, step: 150, size: 20 },
};

const TimelineVertical = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const c = isTablet ? CONFIG.tablet : CONFIG.mobile;
  const firstY = 60;
  const height = firstY + c.step * 4 + 90;
  const pts = verticalWave({ x: c.stopX, top: firstY - 50, bottom: firstY + c.step * 4 + 70, amp: c.amp });
  const samples = sampleCubic(pts);
  const width = c.stopX + c.amp + c.band;
  const stop = c.band + 12;

  return (
    <div className={`${styles.container} mt-12 md:mt-16 lg:hidden`}>
      <div className="relative" style={{ height }}>
        <div className="absolute left-0 top-0" style={{ width, height }}>
          <Ribbon pts={pts} viewBox={[width, height]} band={c.band} fontSize={c.font} phrase={ribbonPhrases.skills} />
        </div>

        <ol>
          {outcomes.map((outcome, index) => {
            const y = firstY + index * c.step;
            const isLast = index === outcomes.length - 1;

            return (
              <li key={outcome}>
                <TimelineStop
                  number={index + 1}
                  isLast={isLast}
                  delay={0.3 + index * 0.1}
                  style={{ left: xAtY(samples, y), top: y, width: stop, height: stop }}
                />
                <motion.div
                  className="absolute right-0"
                  style={{ left: c.textX, top: y - 24 }}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.2, 0, 0, 1], delay: 0.2 + index * 0.08 }}
                >
                  {isLast && (
                    <p className="absolute -top-6 font-sans text-[12px] font-semibold uppercase tracking-[0.17em] text-wine">Ao final</p>
                  )}
                  <p className="font-inter max-w-[440px] leading-[1.3] text-navy-800" style={{ fontSize: c.size }}>
                    {outcome}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TimelineVertical;
