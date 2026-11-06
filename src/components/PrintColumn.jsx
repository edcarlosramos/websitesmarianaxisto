import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

import { prints } from "../constants";
import PrintCard from "./PrintCard";

// One vertical column of WhatsApp screenshots that scrolls endlessly: the list is rendered
// twice and translated by -50% (CSS keyframes so hover/focus can pause it).
// Each item carries its own bottom spacing so both copies have exactly the same height.
// `items` are keys into `source` (the site's prints by default).
const PrintColumn = ({ items, source = prints, duration = 60, offset = 0, reverse = false, gap = 32, className = "" }) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  // The column is a very tall layer: stop animating it while the section is off screen.
  const isInView = useInView(ref, { margin: "100px" });
  const list = items.map((key) => source[key]);
  const copies = reduceMotion ? [0] : [0, 1];

  return (
    <div ref={ref} className={`group relative ${className}`} style={{ marginTop: offset }}>
      <ul
        className={reduceMotion ? "" : "print-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"}
        style={{
          "--marquee-duration": `${duration}s`,
          "--marquee-direction": reverse ? "reverse" : "normal",
          animationPlayState: isInView ? undefined : "paused",
        }}
      >
        {copies.map((copy) =>
          list.map((print, index) => (
            <li key={`${copy}-${print.id}-${index}`} style={{ paddingBottom: gap }} aria-hidden={copy === 1 || undefined}>
              <PrintCard {...print} alt={copy === 1 ? "" : print.alt} />
            </li>
          )),
        )}
      </ul>
    </div>
  );
};

export default PrintColumn;
