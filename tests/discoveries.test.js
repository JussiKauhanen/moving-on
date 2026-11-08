import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import level from "../src/levels/garden.js";
import { Grass } from "../src/world/grass.js";
import { Discoveries } from "../src/systems/discoveries.js";
import { upgradeProgress } from "../src/systems/rules.js";
test("next upgrade countdown respects funds, prerequisites and purchase spending", () => {
  const state = { items: new Set(), skills: {}, compost: 0 };
  assert.deepEqual(upgradeProgress(state), { available: 0, remaining: 45 });
  state.compost = 45;
  assert.deepEqual(upgradeProgress(state), { available: 1, remaining: 0 });
  state.skills.hands = 1;
  state.compost = 0;
  assert.equal(upgradeProgress(state).remaining, 77);
  state.compost = 98;
  assert.equal(upgradeProgress(state).available, 1);
  state.items.add("clippers");
  assert.equal(upgradeProgress(state).available, 2);
});
test("lawn is roughly twice as dense, taller, and all keepsakes have real grass cover", () => {
  const grass = new Grass(new THREE.Scene(), level);
  assert.ok(grass.tufts.length > 30000 && grass.tufts.length < 32500);
  assert.ok(grass.tufts.every((t) => t.height >= 1.1));
  for (const p of level.points.filter((p) => p.buried))
    assert.ok(
      grass.near(p.position[0], p.position[2], p.revealRadius || 0.72).length >
        20,
      p.id,
    );
});
test("buried finds are always in the lawn; walking onto one or clearing it makes it collectable", () => {
  const grass = new Grass(new THREE.Scene(), level);
  const points = level.points
    .filter((p) => p.buried)
    .map((p) => ({
      ...p,
      position: new THREE.Vector3(...p.position),
      object: { visible: false },
    }));
  const discoveries = new Discoveries(points, grass);
  const [p, q] = points;
  // Physically present from the start, just not yet found.
  assert.ok(points.every((x) => x.object.visible));
  discoveries.update(new THREE.Vector3(p.position.x + 5, 1.68, p.position.z));
  assert.equal(p.revealed, false);
  // Stepping right next to it finds it, grass and all.
  discoveries.update(new THREE.Vector3(p.position.x + 0.8, 1.68, p.position.z));
  assert.equal(p.revealed, true);
  assert.ok(points.slice(1).every((x) => !x.revealed));
  // Clearing the grass over another one also reveals it.
  grass
    .near(q.position.x, q.position.z, q.revealRadius)
    .forEach((t) => grass.remove(t));
  discoveries.update();
  assert.equal(q.revealed, true);
});
