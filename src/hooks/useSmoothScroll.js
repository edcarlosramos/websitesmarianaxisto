import { useEffect } from "react";
import Lenis from "lenis";
import { frame, cancelFrame } from "motion/react";

let lenis = null;

export const getLenis = () => lenis;

// Smooth, inertial page scrolling (Lenis) driven by Motion's frame loop.
// Disabled when the visitor prefers reduced motion. In-page anchors are handled by Lenis.
const useSmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: true, autoRaf: false });
    const update = ({ timestamp }) => lenis.raf(timestamp);
    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
      lenis = null;
    };
  }, []);
};

export default useSmoothScroll;
