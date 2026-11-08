import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import level from "../src/levels/garden.js";
import { Cove, COVE } from "../src/world/cove.js";
import { Player } from "../src/systems/player.js";
import { Grass } from "../src/world/grass.js";
test("the sporepod lives in the cove beneath the well, not in the lawn", () => {
  assert.equal(
    level.points.some((p) => p.id === "spores"),
    false,
  );
  const well = level.points.find((p) => p.id === "well");
  assert.deepEqual(
    well.actions.map(([key]) => key),
    ["E", "F"],
  );
  const cove = new Cove();
  const pod = cove.interactables.find((p) => p.id === "spores");
  assert.ok(pod && pod.kind === "sporepod");
  assert.ok(cove.interactables.some((p) => p.id === "rope"));
});
test("the cove has its own floor: spawn is walkable, water and walls are not", () => {
  const cove = new Cove();
  const camera = new THREE.PerspectiveCamera();
  globalThis.addEventListener ??= () => {};
  globalThis.document ??= { addEventListener() {} };
  const player = new Player(camera, level, { colliders: [] }, null);
  player.area = cove.area;
  assert.equal(player.blocked(COVE.spawn[0], COVE.spawn[2]), false);
  assert.equal(player.blocked(...COVE.pool.position), true);
  assert.equal(player.blocked(0, -12), true);
  // Garden rules (gate, fence) no longer apply underground.
  assert.equal(player.blocked(0, 2), false);
});
test("a power-cut shockwave is stamped with the current grass clock", () => {
  const grass = new Grass(new THREE.Scene(), {
    ...level,
    grass: { ...level.grass, minX: -1, maxX: 1, minZ: -1, maxZ: 1 },
  });
  grass.time.value = 12.5;
  grass.shock(2, -3, 1);
  assert.deepEqual(grass.shockUniform.value.toArray(), [2, -3, 12.5, 1]);
});
