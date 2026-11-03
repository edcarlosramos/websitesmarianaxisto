// Cubic bézier helpers shared by the ribbons (SVG paths) and the timeline stops.
// `pts` = [x0, y0, c1x, c1y, c2x, c2y, x1, y1, c1x, ...] in absolute coordinates.

export const toPathD = (pts) => {
  let d = `M${pts[0]},${pts[1]}`;
  for (let i = 2; i < pts.length; i += 6) {
    const [a, b, c, e, f, g] = pts.slice(i, i + 6);
    d += ` C${a},${b} ${c},${e} ${f},${g}`;
  }
  return d;
};

export const sampleCubic = (pts, steps = 120) => {
  const out = [];
  let [x0, y0] = [pts[0], pts[1]];
  for (let i = 2; i < pts.length; i += 6) {
    const [a, b, c, d, e, f] = pts.slice(i, i + 6);
    for (let k = 0; k <= steps; k++) {
      const t = k / steps;
      const mt = 1 - t;
      out.push([
        mt ** 3 * x0 + 3 * mt * mt * t * a + 3 * mt * t * t * c + t ** 3 * e,
        mt ** 3 * y0 + 3 * mt * mt * t * b + 3 * mt * t * t * d + t ** 3 * f,
      ]);
    }
    [x0, y0] = [e, f];
  }
  return out;
};

const nearest = (samples, axis, value) =>
  samples.reduce((best, p) => (Math.abs(p[axis] - value) < Math.abs(best[axis] - value) ? p : best), samples[0]);

export const yAtX = (samples, x) => nearest(samples, 0, x)[1];
export const xAtY = (samples, y) => nearest(samples, 1, y)[0];

// Builds a vertical wave (used by the mobile/tablet timeline): starts at (x, top),
// alternates `amp` to each side over `segments` equal segments.
export const verticalWave = ({ x, top, bottom, amp, segments = 4 }) => {
  const pts = [x, top];
  const seg = (bottom - top) / segments;
  let y = top;
  for (let k = 0; k < segments; k++) {
    const dir = k % 2 === 0 ? 1 : -1;
    pts.push(x + dir * amp, y + seg * 0.33, x + dir * amp, y + seg * 0.66, x, y + seg);
    y += seg;
  }
  return pts;
};

// Wavy wax-seal outline.
export const sealPath = ({ cx, cy, r, bumps = 18, amp = 10 }) => {
  let d = "";
  for (let i = 0; i <= 360; i += 2) {
    const a = (i * Math.PI) / 180;
    const rr = r + amp * Math.sin(a * bumps) + 3 * Math.sin(a * 5 + 1);
    d += `${i ? " L" : "M"}${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
  }
  return `${d} Z`;
};
