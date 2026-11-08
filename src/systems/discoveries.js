// Objects are not rendered or targetable until 90% of their local cover is gone.
export class Discoveries {
  constructor(points, grass) {
    this.points = points;
    this.grass = grass;
    this.lastCut = -1;
    for (const p of points) {
      if (!p.buried) continue;
      p.revealed = false;
      p.object.visible = false;
      p.coverAtStart = grass.near(
        p.position.x,
        p.position.z,
        p.revealRadius || 0.72,
      ).length;
    }
  }
  update() {
    if (this.lastCut === this.grass.cutCount) return;
    this.lastCut = this.grass.cutCount;
    for (const p of this.points) {
      if (!p.buried || p.revealed || p.taken) continue;
      const left = this.grass.near(
        p.position.x,
        p.position.z,
        p.revealRadius || 0.72,
      ).length;
      if (p.coverAtStart > 0 && left <= Math.floor(p.coverAtStart * 0.1)) {
        p.revealed = true;
        p.object.visible = true;
      }
    }
  }
}
