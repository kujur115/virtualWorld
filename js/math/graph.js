class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }
  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }
  addPoint(point) {
    this.points.push(point);
  }
  containsPoint(point) {
    return this.points.find((p) => p.equals(point));
  }
  containsSeqment(seq) {
    return this.segments.find((s) => s.equals(seq));
  }
  tryAddSeqment(seq) {
    if (!this.containsSeqment(seq)) {
      this.addSeqment(seq);
      return true;
    }
    return false;
  }

  addSegment(segment) {
    this.segments.push(segment);
  }

  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }

    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}
