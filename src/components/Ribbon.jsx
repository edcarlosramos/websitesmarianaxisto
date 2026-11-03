import { useCallback, useEffect, useId, useMemo, useRef } from "react";
import { motion, useAnimationFrame, useInView, useReducedMotion } from "motion/react";

import { toPathD } from "../utils/geometry";

// Phones and tablets: fewer, slower ribbon updates.
const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
const TOUCH_FRAME_MS = 1000 / 30;
const TOUCH_SPEED = 0.6;

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
  const svgRef = useRef(null);
  // Only animate while on (or near) screen: moving the text repaints the whole SVG every frame.
  const isInView = useInView(svgRef, { margin: "200px" });
  const phraseLength = useRef(0);
  const offset = useRef(0);
  const pending = useRef(0);

  const d = useMemo(() => toPathD(pts), [pts]);
  const [vw, vh] = viewBox;
  const repeated = useMemo(() => phrase.repeat(Math.ceil((vw * 3) / (fontSize * 0.62 * phrase.length)) + 2), [phrase, vw, fontSize]);

  const measure = useCallback(() => {
    const text = textRef.current;
    if (!text) return;
    const repeats = repeated.length / phrase.length;
    phraseLength.current = text.getComputedTextLength() / repeats;
  }, [repeated, phrase]);

  // Re-measure on resize too: a ribbon hidden at its breakpoint measures 0 and would never move once shown.
  useEffect(() => {
    measure();
    document.fonts?.ready.then(measure);
    const observer = new ResizeObserver(measure);
    if (textRef.current) observer.observe(textRef.current.ownerSVGElement);
    return () => observer.disconnect();
  }, [measure]);

  // Overlays (menu) draw as soon as they mount; page ribbons draw when scrolled into view.
  // One trigger for the whole SVG: band and text used to observe themselves separately, and the text's taller
  // box could enter the viewport first, so the phrase faded in before the band had drawn.
  const hasEntered = useInView(svgRef, { once: true, amount: 0.2 });
  const shown = drawOnMount || hasEntered || reduceMotion;
  const reveal = (to, from) => ({ animate: shown ? to : from });

  useAnimationFrame((_, delta) => {
    if (reduceMotion || !isInView || !phraseLength.current || !textPathRef.current) return;
    // Touch devices: repaint at ~30fps and drift slower. Each repaint redraws the whole SVG on the CPU.
    pending.current += delta;
    if (isTouch && pending.current < TOUCH_FRAME_MS) return;
    const elapsed = pending.current;
    pending.current = 0;
    offset.current = (offset.current + (elapsed / 1000) * speed * (isTouch ? TOUCH_SPEED : 1)) % phraseLength.current;
    textPathRef.current.setAttribute("startOffset", -phraseLength.current + offset.current);
  });

  return (
    <svg
      ref={svgRef}
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
        {...reveal({ pathLength: 1 }, { pathLength: 0 })}
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
        {...reveal({ opacity: 1 }, { opacity: 0 })}
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
