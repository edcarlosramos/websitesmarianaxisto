import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

const TILT = 14; // max tilt in degrees
const spring = { stiffness: 260, damping: 20, mass: 0.6 };

// Round gold stamp ("+400 alunas" by default). Size is driven by the parent through `className` (width).
// On hover it behaves like a 3D card: it tilts toward the pointer and sinks slightly.
// `sheen` adds a band of light that sweeps across the face every few seconds.
const Stamp = ({ className = "", style, value = "+400", caption = "alunas", valueClass = "text-[33cqw]", sheen = false }) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  // Pointer position inside the stamp, -0.5 → 0.5 on each axis.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const pressed = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [TILT, -TILT]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-TILT, TILT]), spring);
  const scale = useSpring(useTransform(pressed, [0, 1], [1, 0.94]), spring);
  const shadow = useTransform(
    [rotateX, rotateY, scale],
    ([rx, ry, s]) =>
      `${(-ry * 0.9).toFixed(1)}px ${(rx * 0.9 + 18 * s - 6).toFixed(1)}px ${(34 * s - 10).toFixed(1)}px rgb(var(--shadow-rgb, 18 21 46) / ${(0.28 - (1 - s) * 1.7).toFixed(2)})`,
  );
  // Soft highlight that follows the pointer across the gold face.
  const glare = useTransform([px, py], ([x, y]) => `radial-gradient(circle at ${50 + x * 90}% ${50 + y * 90}%, rgb(255 255 255 / 0.45), transparent 55%)`);
  const glareOpacity = useSpring(pressed, spring);
  // Depth of the text above the face. It is 0 at rest so the stamp has no 3D transform then:
  // a 3D layer is rasterized once and scaled, which made the text blurry until the pointer touched it.
  const depth = useSpring(useTransform(pressed, [0, 1], [0, 18]), spring);
  const transformStyle = useTransform(depth, (d) => (d > 0.1 ? "preserve-3d" : "flat"));

  // Tracked on window: in the hero the text column sits above the art and would swallow the stamp's own pointer events.
  useEffect(() => {
    if (reduceMotion) return undefined;
    const onPointerMove = (event) => {
      if (event.pointerType !== "mouse" || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      // Reacts a little before the pointer reaches the edge (radius 0.6 of the stamp's width).
      const inside = x * x + y * y <= 0.36;
      const clamp = (v) => Math.max(-0.5, Math.min(0.5, v));
      px.set(inside ? clamp(x) : 0);
      py.set(inside ? clamp(y) : 0);
      pressed.set(inside ? 1 : 0);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [reduceMotion, px, py, pressed]);

  return (
    <motion.div
      ref={ref}
      className={`absolute aspect-square ${className}`}
      style={{ ...style, perspective: 600 }}
      initial={{ scale: 0.6, rotate: -30, opacity: 0 }}
      whileInView={{ scale: 1, rotate: -10, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 180, damping: 14, delay: 1.2 }}
    >
      <motion.div
        className="artboard relative grid size-full place-items-center rounded-full bg-lilac text-navy-900"
        style={{ rotateX, rotateY, scale, boxShadow: shadow, transformStyle }}
      >
        <span className="absolute inset-[5%] rounded-full border border-navy-900" aria-hidden="true" />
        <motion.p className="text-center leading-none" style={{ z: depth }}>
          <span className={`font-display block ${valueClass}`}>{value}</span>
          <span className="mt-[6cqw] block font-sans text-[7.6cqw] font-semibold uppercase tracking-[0.25em]">{caption}</span>
        </motion.p>
        {sheen && (
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="stamp-sheen absolute inset-y-[-20%] left-0 w-[45%] bg-linear-to-r from-transparent via-white/70 to-transparent" />
          </span>
        )}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full mix-blend-soft-light"
          style={{ backgroundImage: glare, opacity: glareOpacity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Stamp;
