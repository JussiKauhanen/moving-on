import test from "node:test";
import assert from "node:assert/strict";
import level from "../src/levels/garden.js";
import {
  seededRandom,
  isPlantable,
  toolStats,
  canBuy,
  SKILLS,
  skillCost,
  sporeStats,
} from "../src/systems/rules.js";
import { Grass } from "../src/world/grass.js";
import { Player } from "../src/systems/player.js";
import * as THREE from "three";
const state = () => ({
  tool: "hands",
  items: new Set(),
  skills: {},
  compost: 0,
});
test("level has stable seeded planting, clear buildings, paths and flowerbeds", () => {
  const a = seededRandom(731),
    b = seededRandom(731);
  for (let i = 0; i < 20; i++) assert.equal(a(), b());
  for (const object of [
    level.house,
    level.shed,
    level.utility,
    ...level.flowerbeds,
  ])
    assert.equal(isPlantable(...object.position, level), false);
  for (const p of level.path) assert.equal(isPlantable(...p, level), false);
  assert.equal(isPlantable(-9, 8, level), true);
});
test("hands stay single-tuft while tool maintenance improves clippers", () => {
  const s = state();
  assert.equal(toolStats(s).limit, 1);
  assert.equal(toolStats(s).critChance, 0);
  s.items.add("charm");
  assert.equal(toolStats(s).critChance, 0);
  s.skills.hands = 1;
  assert.ok(toolStats(s).cooldown < 0.42);
  s.tool = "clippers";
  const rusty = toolStats(s);
  s.items.add("oil");
  s.items.add("stone");
  const honed = toolStats(s);
  assert.ok(honed.cooldown < rusty.cooldown);
  assert.ok(honed.limit > rusty.limit);
  assert.ok(honed.radius > rusty.radius);
});
test("skill spending requires prerequisite, discovery, funds and level cap", () => {
  const s = state(),
    critical = SKILLS.find((s) => s.id === "critical"),
    luck = SKILLS.find((s) => s.id === "luck"),
    spores = SKILLS.find((s) => s.id === "spores");
  s.compost = 1000;
  assert.equal(canBuy(luck, s), false);
  assert.equal(canBuy(spores, s), false);
  assert.equal(canBuy(critical, s), true);
  s.skills.critical = 1;
  assert.equal(canBuy(critical, s), false);
  assert.equal(canBuy(luck, s), true);
  assert.equal(toolStats(s).critChance, 0.07);
  s.skills.luck = 1;
  assert.equal(toolStats(s).critChance, 0.13);
  s.items.add("spores");
  assert.equal(canBuy(spores, s), true);
  s.compost = 0;
  assert.equal(canBuy(spores, s), false);
  assert.ok(skillCost(luck, 1) > skillCost(luck, 0));
});
test("grass cuts count exactly once, leave no selectable stubble and obey limit", () => {
  const grass = new Grass(new THREE.Scene(), level);
  const t = grass.tufts[250];
  const first = grass.cut(t.x, t.z, 0.8, 1);
  assert.equal(first.length, 1);
  assert.equal(grass.cutCount, 1);
  assert.ok(!grass.near(t.x, t.z, 0.8).includes(first[0]));
  grass.remove(first[0]);
  assert.equal(grass.cutCount, 1);
  const next = grass.cut(t.x, t.z, 1, 14);
  assert.equal(next.length, 14);
  assert.equal(grass.cutCount, 15);
});
test("infection withers living grass and credits each tuft once", () => {
  const grass = new Grass(new THREE.Scene(), level),
    t = grass.tufts[200];
  grass.infect(t.x, t.z, 0.4);
  const initial = grass.infected.size;
  assert.ok(initial > 0);
  const removed = grass.update(3, 3, 2.6);
  assert.equal(removed.length, initial);
  assert.equal(grass.cutCount, initial);
  assert.ok(removed.every((t) => t.cut));
});
test("a spore release spreads, then always burns out at its budget", () => {
  const grass = new Grass(new THREE.Scene(), level),
    t = grass.tufts[9000];
  grass.infect(t.x, t.z, 0.3, 25);
  let total = 0;
  for (let i = 0; i < 60 && (grass.infected.size || !total); i++)
    total += grass.update(1, i, 0.5).length;
  assert.equal(total, 25);
  assert.equal(grass.infected.size, 0);
});
test("spore skills widen the spread and shorten the cooldown", () => {
  const s = state();
  const base = sporeStats(s);
  s.skills.spread = 2;
  s.skills.sporeRate = 2;
  const grown = sporeStats(s);
  assert.ok(grown.budget > base.budget * 3);
  assert.ok(grown.cooldown < base.cooldown * 0.6);
  assert.ok(grown.wither < base.wither);
});
test("chained skills unlock tile by tile", () => {
  const s = state(),
    roots = SKILLS.find((k) => k.id === "roots");
  s.compost = 1000;
  s.skills.hands = 2;
  assert.equal(canBuy(roots, s), false);
  s.skills.hands = 3;
  assert.equal(canBuy(roots, s), true);
  for (const skill of SKILLS) assert.equal(skill.nodes.length, skill.max);
});
test("collision blocks house, fence and closed gate while allowing open gate", () => {
  const p = Object.create(Player.prototype);
  p.level = level;
  p.world = {
    gateOpen: false,
    colliders: [
      { x: 3, z: -16, w: 11, d: 8 },
      { x: -9.95, z: 16, w: 16.1, d: 0.22 },
    ],
  };
  assert.equal(p.blocked(3, -12), true);
  assert.equal(p.blocked(0, 16), true);
  assert.equal(p.blocked(-8, 16), true);
  assert.equal(p.blocked(19, 0), true);
  p.world.gateOpen = true;
  assert.equal(p.blocked(0, 16), false);
  assert.equal(p.blocked(0, 12), false);
});
