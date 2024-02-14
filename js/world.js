class World {
  constructor(graph, roadWith = 100, roadRoundness = 10) {
    this.graph = graph;
    this.roadWith = roadWith;
    this.roadRoundness = roadRoundness;

    this.envelopes = [];
    this.intersections = [];
    this.generate();
  }
  generate() {
    this.envelopes.length = 0;
    for (const seg of this.graph.segments)
      this.envelopes.push(new Envelope(seg, this.roadWith, this.roadRoundness));

    // if (this.envelopes.length >= 2)
    //   Polygon.break(
    //     this.envelopes[0].poly,
    //     this.envelopes[1].poly
    //   );
    // Polygon.multiBreak(this.envelopes.map((e) => e.poly));
    this.roadBorders = Polygon.union(this.envelopes.map((e) => e.poly));
  }
  draw(ctx) {
    for (const env of this.envelopes)
      env.draw(ctx, { fill: "#BBB", stroke: "#BBB", lineWidth: 15 });
    for (const seg of this.graph.segments)
      seg.draw(ctx, { color: "white", width: 4, dash: [10, 10] });
    for (const seg of this.roadBorders)
      seg.draw(ctx, { color: "white", width: 4 });
  }
}
