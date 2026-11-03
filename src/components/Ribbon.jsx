import { useEffect, useId, useMemo, useRef } from "react";
import { motion, useAnimationFrame, useReducedMotion } from "motion/react";

import { toPathD } from "../utils/geometry";

// A thick band that follows a bézier path with an English phrase flowing along it.
// The phrase drifts slowly along the band ("a voz que flui"); the band draws itself in on view.
const Ribbon = ({
  pts,
  viewBox,
  band = 60,
  fontSize = 16,
  phrase,
  bandColor = "var(--color-navy-800)",
  textColor = "var(--color-lilac)",
  speed = 22,
  className = "",
  delay = 0,
  drawOnMount = false,
}) => {
  const id = useId().replace(/:/g, "");
  const reduceMotion = useReducedMotion();
  const textPathRef = useRef(null);
  const textRef = useRef(null);
  const phraseLength = useRef(0);
  const offset = useRef(0);

  const d = useMemo(() => toPathD(pts), [pts]);
  const [vw, vh] = viewBox;
  const repeated = useMemo(() => phrase.repeat(Math.ceil((vw * 3) / (fontSize * 0.62 * phrase.length)) + 2), [phrase, vw, fontSize]);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    const measure = () => {
      const repeats = repeated.length / phrase.length;
      phraseLength.current = text.getComputedTextLength() / repeats;
    };
    measure();
    document.fonts?.ready.then(measure);
  }, [repeated, phrase]);

  // Overlays (menu) draw as soon as they mount; page ribbons draw when scrolled into view.
  const reveal = (to) => (drawOnMount ? { animate: to } : { whileInView: to, viewport: { once: true, amount: 0.2 } });

  useAnimationFrame((_, delta) => {
    if (reduceMotion || !phraseLength.current || !textPathRef.current) return;
    offset.current = (offset.current + (delta / 1000) * speed) % phraseLength.current;
    textPathRef.current.setAttribute("startOffset", -phraseLength.current + offset.current);
  });

  return (
    <svg
      className={`pointer-events-none absolute left-0 top-0 h-auto w-full overflow-visible ${className}`}
      viewBox={`0 0 ${vw} ${vh}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path id={`ribbon-${id}`} d={d} />
      </defs>
      <motion.path
        d={d}
        fill="none"
        stroke={bandColor}
        strokeWidth={band}
        initial={reduceMotion ? false : { pathLength: 0 }}
        {...reveal({ pathLength: 1 })}
        transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1], delay }}
      />
      <motion.text
        ref={textRef}
        fill={textColor}
        fontFamily="var(--font-sans)"
        fontWeight="600"
        fontSize={fontSize}
        letterSpacing={fontSize * 0.04}
        dominantBaseline="central"
        initial={reduceMotion ? false : { opacity: 0 }}
        {...reveal({ opacity: 1 })}
        transition={{ duration: 0.8, delay: delay + 1.1 }}
      >
        <textPath ref={textPathRef} href={`#ribbon-${id}`} startOffset="0">
          {repeated}
        </textPath>
      </motion.text>
    </svg>
  );
};

export default Ribbon;
