// Buried finds are always physically there in the lawn, hidden only by the grass
// itself. One becomes collectable when you stand right by it (as if you stepped
// on it), or once most of the grass covering it has been cut away.
export const FIND_DISTANCE = 1.6; // metres, measured along the ground
export class Discoveries {
  constructor(points, grass) {
    this.points = points;
    this.grass = grass;
    this.lastCut = -1;
    for (const p of points) {
      if (!p.buried) continue;
      p.revealed = false;
      p.object.visible = true;
      p.coverAtStart = grass.near(
        p.position.x,
        p.position.z,
        p.revealRadius || 0.72,
      ).length;
    }
  }
  update(viewer) {
    for (const p of this.points) {
      if (!p.buried || p.revealed || p.taken || !viewer) continue;
      if (
        Math.hypot(viewer.x - p.position.x, viewer.z - p.position.z) <
        FIND_DISTANCE
      )
        p.revealed = true;
    }
    if (this.lastCut === this.grass.cutCount) return;
    this.lastCut = this.grass.cutCount;
    for (const p of this.points) {
      if (!p.buried || p.revealed || p.taken) continue;
      const left = this.grass.near(
        p.position.x,
        p.position.z,
        p.revealRadius || 0.72,
      ).length;
      if (p.coverAtStart > 0 && left <= Math.floor(p.coverAtStart * 0.1))
        p.revealed = true;
    }
  }
}
