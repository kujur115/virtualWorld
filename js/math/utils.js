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

const add = (p1, p2) => new Point(p1.x + p2.x, p1.y + p2.y);
const subtract = (p1, p2) => new Point(p1.x - p2.x, p1.y - p2.y);
const scale = (p1, scaler) => new Point(p1.x * scaler, p1.y * scaler);
