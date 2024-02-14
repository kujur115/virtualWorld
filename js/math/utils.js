function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER) {
  let minDist = Number.MAX_SAFE_INTEGER;
  let nearest = null;
  for (const point of points) {
    const dist = distance(point, loc);
    if (dist < minDist && dist < threshold) {
      minDist = dist;
      nearest = point;
    }
  }
  return nearest;
}
const distance = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);
const average = (p1, p2) => new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
const add = (p1, p2) => new Point(p1.x + p2.x, p1.y + p2.y);
const subtract = (p1, p2) => new Point(p1.x - p2.x, p1.y - p2.y);
const scale = (p1, scaler) => new Point(p1.x * scaler, p1.y * scaler);
const translate = (loc, angle, offset) =>
  new Point(loc.x + offset * Math.cos(angle), loc.y + offset * Math.sin(angle));

const angle = (p) => Math.atan2(p.y, p.x);

const getIntersection = (a, b, c, d) => {
  const tTop = (d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x);
  const uTop = (c.y - a.y) * (a.x - b.x) - (c.x - a.x) * (a.y - b.y);
  const bottom = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y);
  if (bottom != 0) {
    const t = tTop / bottom;
    const u = uTop / bottom;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1)
      return {
        x: lerp(a.x, b.x, t),
        y: lerp(a.y, b.y, t),
        offset: t,
      };
  }
  return null;
};

const lerp = (a, b, t) => a + (b - a) * t;

const getRandomColor = () => {
  const hue = 209 + Math.random() * 260;
  return "hsl(" + hue + ", 100%, 60%)";
};
