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
// The skill tree grows from this centre node; it is decorative and always owned.
export const SKILL_ROOT = {
  id: "gardener",
  name: "The gardener",
  branch: "Origin",
  description:
    "A pair of willing hands and a long day ahead. Every habit grows from here.",
  tree: [0, 0],
};
export const SKILLS = [
  {
    id: "roots",
    tree: [-3, -1.55], // skill-tree position, in node cells from the centre
    name: "Light fingers",
    icon: "⌁",
    branch: "Hands",
    description:
      "Another 12% less time between pulls. Still one blade, one hand at a time.",
    cost: 80,
    max: 1,
    parent: "hands",
  },
  {
    id: "reach",
    tree: [3, -1.55],
    name: "A wider sweep",
    icon: "⌁",
    branch: "Tools",
    description: "Cut 3 more blades and reach 8 cm wider with each level.",
    cost: 110,
    max: 3,
    parent: "clipping",
    needs: "clippers",
  },
  {
    id: "hands",
    tree: [-1.5, -0.85],
    name: "A practiced hand",
    icon: "✋",
    branch: "Hands",
    description: "30% less time between pulls. Every little blade counts.",
    cost: 30,
    max: 3,
  },
  {
    id: "clipping",
    tree: [1.5, -0.85],
    name: "Find your rhythm",
    icon: "✂",
    branch: "Tools",
    description: "22% less time between snips with each level.",
    cost: 65,
    max: 3,
    needs: "clippers",
  },
  {
    id: "critical",
    tree: [-1.5, 0.85],
    name: "A perfect moment",
    icon: "✧",
    branch: "Instinct",
    description:
      "Each cut has a 7% chance to build into a power cut: a sweeping 3× cut that blasts the grass outward.",
    cost: 100,
    max: 1,
  },
  {
    id: "luck",
    tree: [-3, 1.55],
    name: "Trust your instinct",
    icon: "☼",
    branch: "Instinct",
    description: "+6% power-cut chance per level.",
    cost: 160,
    max: 3,
    parent: "critical",
  },
  {
    id: "spores",
    tree: [1.5, 0.85],
    name: "Something spreading",
    icon: "❋",
    branch: "Nature",
    description:
      "Clipping infects nearby grass. It slowly withers and spreads.",
    cost: 140,
    max: 1,
    needs: "spores",
  },
  {
    id: "spread",
    tree: [3, 1.55],
    name: "Deep roots",
    icon: "⌘",
    branch: "Nature",
    description: "The spores spread farther and wither faster.",
    cost: 200,
    max: 2,
    parent: "spores",
  },
];
export function skillCost(skill, level) {
  return Math.round(skill.cost * (1 + level * 0.7));
}
export function canBuy(skill, state) {
  return (
    (state.skills[skill.id] || 0) < skill.max &&
    state.compost >= skillCost(skill, state.skills[skill.id] || 0) &&
    (!skill.parent || state.skills[skill.parent] > 0) &&
    (!skill.needs || state.items.has(skill.needs))
  );
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
      (state.skills[skill.id] || 0) < skill.max &&
      (!skill.parent || state.skills[skill.parent] > 0) &&
      (!skill.needs || state.items.has(skill.needs)),
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
