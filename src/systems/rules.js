export function seededRandom(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export function distanceToSegment(x, z, a, b) {
  const dx = b[0] - a[0],
    dz = b[1] - a[1];
  const t = clamp(
    ((x - a[0]) * dx + (z - a[1]) * dz) / (dx * dx + dz * dz || 1),
    0,
    1,
  );
  return Math.hypot(x - a[0] - t * dx, z - a[1] - t * dz);
}
export function insideBuilding(x, z, b, padding = 0) {
  return (
    Math.abs(x - b.position[0]) < b.width / 2 + padding &&
    Math.abs(z - b.position[1]) < b.depth / 2 + padding
  );
}
export function isPlantable(x, z, level) {
  if (
    [level.house, level.shed, level.utility].some((b) =>
      insideBuilding(x, z, b, 0.45),
    )
  )
    return false;
  if (
    level.flowerbeds.some(
      (b) => Math.hypot(x - b.position[0], z - b.position[1]) < b.radius + 0.22,
    )
  )
    return false;
  if (
    level.path
      .slice(1)
      .some((p, i) => distanceToSegment(x, z, level.path[i], p) < 0.82)
  )
    return false;
  const well = level.points.find((p) => p.kind === "well");
  if (well && Math.hypot(x - well.position[0], z - well.position[2]) < 1.25)
    return false;
  return true;
}
// ─── Skill tree ──────────────────────────────────────────────────────────────
// Every skill and price lives here. Each level of a skill is its own tile in the
// tree; `nodes` lists those tiles' positions (x right, y down, in tile units from
// the skull at the centre). `parentLevel` is how far the parent must be learned.
// `badge` is the small corner mark: speed, more, chance, reach, power.
export const SKILL_ROOT = {
  id: "gardener",
  name: "The gardener",
  branch: "Origin",
  description: "A pair of willing hands and a long day ahead.",
  nodes: [[0, 0]],
};
export const SKILLS = [
  {
    id: "hands",
    name: "A practiced hand",
    branch: "grass",
    badge: "speed",
    description: "30% less time between pulls.",
    cost: 30,
    max: 3,
    nodes: [
      [-1.1, -0.9],
      [-1.5, -1.8],
      [-1.9, -2.7],
    ],
  },
  {
    id: "roots",
    name: "Light fingers",
    branch: "grass",
    badge: "speed",
    description: "Another 12% less time between pulls.",
    cost: 90,
    max: 1,
    parent: "hands",
    parentLevel: 3,
    nodes: [[-2.3, -3.6]],
  },
  {
    id: "critical",
    name: "A perfect moment",
    branch: "grass",
    badge: "power",
    description:
      "Each cut has a 7% chance to build into a power cut: a 3× cut that blasts the grass outward.",
    cost: 100,
    max: 1,
    nodes: [[0, -1.2]],
  },
  {
    id: "luck",
    name: "Trust your instinct",
    branch: "grass",
    badge: "chance",
    description: "+6% power-cut chance.",
    cost: 160,
    max: 3,
    parent: "critical",
    nodes: [
      [0, -2.1],
      [0, -3],
      [0, -3.9],
    ],
  },
  {
    id: "clipping",
    name: "Find your rhythm",
    branch: "grass",
    badge: "speed",
    description: "22% less time between snips.",
    cost: 65,
    max: 3,
    needs: "clippers",
    nodes: [
      [1.1, -0.9],
      [1.5, -1.8],
      [1.9, -2.7],
    ],
  },
  {
    id: "reach",
    name: "A wider sweep",
    branch: "grass",
    badge: "more",
    description: "Each snip cuts 3 more blades and reaches 8 cm wider.",
    cost: 110,
    max: 3,
    parent: "clipping",
    parentLevel: 3,
    needs: "clippers",
    nodes: [
      [2.3, -3.6],
      [2.7, -4.5],
      [3.1, -5.4],
    ],
  },
  {
    id: "spores",
    name: "Something spreading",
    branch: "spore",
    badge: null,
    description:
      "Your cuts release spores. They wither a small patch, then rest before they can spread again.",
    cost: 140,
    max: 1,
    needs: "spores",
    nodes: [[-1.4, 0]],
  },
  {
    id: "spread",
    name: "Deep roots",
    branch: "spore",
    badge: "reach",
    description: "Each release spreads much farther before it burns out.",
    cost: 200,
    max: 3,
    parent: "spores",
    nodes: [
      [-2.4, -0.35],
      [-3.4, -0.55],
      [-4.4, -0.65],
    ],
  },
  {
    id: "sporeRate",
    name: "Restless spores",
    branch: "spore",
    badge: "speed",
    description: "Spores are ready again sooner, and wither grass faster.",
    cost: 180,
    max: 3,
    parent: "spores",
    nodes: [
      [-2.4, 0.65],
      [-3.4, 0.95],
      [-4.4, 1.15],
    ],
  },
];
// Found objects that show in the tree as fixed tiles.
export const TREE_ITEMS = [
  {
    id: "charm",
    name: "Brass cricket",
    description: "+3% power-cut chance once power cuts are learned.",
    nodes: [[1.4, 0]],
  },
];
export function skillCost(skill, level) {
  return Math.round(skill.cost * (1 + level * 0.7));
}
export function prerequisiteMet(skill, state) {
  return (
    (!skill.parent ||
      (state.skills[skill.parent] || 0) >= (skill.parentLevel || 1)) &&
    (!skill.needs || state.items.has(skill.needs))
  );
}
export function canBuy(skill, state) {
  return (
    (state.skills[skill.id] || 0) < skill.max &&
    state.compost >= skillCost(skill, state.skills[skill.id] || 0) &&
    prerequisiteMet(skill, state)
  );
}
// Spores: a release on the next cut, then a cooldown. Each release spreads to
// at most `budget` blades, so it always burns out; skills widen and quicken it.
export function sporeStats(state) {
  const reach = state.skills.spread || 0,
    rate = state.skills.sporeRate || 0;
  return {
    cooldown: 30 * Math.pow(0.7, rate), // seconds: 30, 21, 14.7, 10.3
    budget: 10 + reach * 22, // blades per release: 10, 32, 54, 76
    radius: 0.45 + reach * 0.12,
    wither: 2.6 * Math.pow(0.82, rate), // seconds for a blade to wither
  };
}
export function toolStats(state) {
  const clipping = state.tool === "clippers";
  return {
    cooldown: clipping
      ? 0.46 *
        Math.pow(0.78, state.skills.clipping || 0) *
        (state.items.has("oil") ? 0.92 : 1)
      : 0.42 *
        Math.pow(0.7, state.skills.hands || 0) *
        (state.skills.roots ? 0.88 : 1),
    radius: clipping
      ? 0.63 +
        (state.items.has("stone") ? 0.05 : 0) +
        (state.skills.reach || 0) * 0.08
      : 0.32,
    limit: clipping
      ? 9 + (state.items.has("stone") ? 1 : 0) + (state.skills.reach || 0) * 3
      : 1,
    critChance: state.skills.critical
      ? 0.07 +
        (state.skills.luck || 0) * 0.06 +
        (state.items.has("charm") ? 0.03 : 0)
      : 0,
  };
}

// Only reachable, unmaxed nodes contribute to the next-upgrade countdown.
export function upgradeProgress(state) {
  const eligible = SKILLS.filter(
    (skill) =>
      (state.skills[skill.id] || 0) < skill.max && prerequisiteMet(skill, state),
  );
  const available = eligible.filter((skill) => canBuy(skill, state)).length;
  const remaining = eligible.length
    ? Math.max(
        0,
        Math.min(
          ...eligible.map(
            (skill) =>
              skillCost(skill, state.skills[skill.id] || 0) - state.compost,
          ),
        ),
      )
    : null;
  return { available, remaining };
}
