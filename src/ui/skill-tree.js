import {
  SKILLS,
  SKILL_ROOT,
  TREE_ITEMS,
  canBuy,
  prerequisiteMet,
  skillCost,
} from "../systems/rules.js";
import { treeIcon, treeBadge } from "./tree-icons.js";
// The skill tree: one square tile per skill level, joined by thin lines that
// grow out of the skull at the centre. Hover a tile for its details; click the
// next tile of a chain to learn it.
const TILE = 54; // px
const REQUIREMENT = {
  clippers: "Find the clippers",
  spores: "Find the sporepod",
};
export function renderSkillTree({ canvas, state, onBuy }) {
  canvas.replaceChildren();
  const all = [SKILL_ROOT, ...SKILLS, ...TREE_ITEMS].flatMap((s) => s.nodes),
    xs = all.map((n) => n[0]),
    ys = all.map((n) => n[1]),
    [minX, maxX, minY, maxY] = [
      Math.min(...xs),
      Math.max(...xs),
      Math.min(...ys),
      Math.max(...ys),
    ];
  const w = canvas.clientWidth || 900,
    h = canvas.clientHeight || 520,
    scale = Math.min(
      (w - TILE * 2) / (maxX - minX || 1),
      (h - TILE * 1.6) / (maxY - minY || 1),
      96,
    ),
    ox = w / 2 - ((minX + maxX) / 2) * scale,
    oy = h / 2 - ((minY + maxY) / 2) * scale;
  const at = ([x, y]) => [ox + x * scale, oy + y * scale];

  const svgNS = "http://www.w3.org/2000/svg",
    svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "tree-lines");
  svg.setAttribute("width", w);
  svg.setAttribute("height", h);
  const line = (a, b, cls) => {
    const l = document.createElementNS(svgNS, "line"),
      [x1, y1] = at(a),
      [x2, y2] = at(b);
    Object.entries({ x1, y1, x2, y2 }).forEach(([k, v]) => l.setAttribute(k, v));
    l.setAttribute("class", cls);
    svg.append(l);
  };
  // Where each chain starts from: its parent's tile at the required level.
  const anchor = (skill) => {
    if (!skill.parent) return SKILL_ROOT.nodes[0];
    const parent = SKILLS.find((s) => s.id === skill.parent);
    return parent.nodes[(skill.parentLevel || 1) - 1];
  };
  for (const skill of SKILLS) {
    const level = state.skills[skill.id] || 0;
    skill.nodes.forEach((node, i) => {
      const from = i ? skill.nodes[i - 1] : anchor(skill);
      line(from, node, `${skill.branch} ${i < level ? "lit" : "dim"}`);
    });
  }
  for (const item of TREE_ITEMS)
    line(
      SKILL_ROOT.nodes[0],
      item.nodes[0],
      `item ${state.items.has(item.id) ? "lit" : "dim"}`,
    );
  canvas.append(svg);

  const tip = document.createElement("div");
  tip.className = "tree-tip";
  tip.hidden = true;
  const showTip = (el, html) => {
    tip.innerHTML = html;
    tip.hidden = false;
    const left = parseFloat(el.style.left),
      top = parseFloat(el.style.top),
      right = left > w * 0.62;
    tip.style.left = `${right ? left - TILE / 2 - 14 : left + TILE / 2 + 14}px`;
    tip.style.top = `${Math.min(Math.max(top, 70), h - 70)}px`;
    tip.classList.toggle("to-left", right);
  };
  const place = (el, node) => {
    const [x, y] = at(node);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  };

  const root = document.createElement("div");
  root.className = "tree-root";
  root.innerHTML = treeIcon("skull");
  place(root, SKILL_ROOT.nodes[0]);
  canvas.append(root);

  for (const item of TREE_ITEMS) {
    const found = state.items.has(item.id),
      tile = document.createElement("div");
    tile.className = `tile item ${found ? "found" : "unknown"}`;
    tile.innerHTML = treeIcon("cricket");
    place(tile, item.nodes[0]);
    tile.addEventListener("pointerenter", () =>
      showTip(
        tile,
        found
          ? `<b>${item.name}</b><p>${item.description}</p><small>Found in the grass</small>`
          : `<b>Something small</b><p>Buried somewhere in the lawn.</p>`,
      ),
    );
    tile.addEventListener("pointerleave", () => (tip.hidden = true));
    canvas.append(tile);
  }

  for (const skill of SKILLS) {
    const level = state.skills[skill.id] || 0,
      icon = skill.branch === "spore" ? "spore" : "grass";
    skill.nodes.forEach((node, i) => {
      const owned = i < level,
        next = i === level,
        open = next && prerequisiteMet(skill, state),
        affordable = next && canBuy(skill, state),
        status = owned
          ? "owned"
          : affordable
            ? "available"
            : open
              ? "next"
              : "locked",
        tile = document.createElement("button");
      tile.type = "button";
      tile.className = `tile ${skill.branch} ${status}`;
      // The clickable tile of each chain carries the skill id.
      if (next || (i === skill.max - 1 && level >= skill.max))
        tile.dataset.skill = skill.id;
      tile.dataset.level = String(i + 1);
      tile.setAttribute(
        "aria-label",
        `${skill.name}, level ${i + 1} of ${skill.max}${owned ? ", learned" : ""}`,
      );
      tile.innerHTML = treeIcon(icon) + treeBadge(skill.badge);
      place(tile, node);
      const cost = skillCost(skill, i),
        requirement =
          skill.needs && !state.items.has(skill.needs)
            ? REQUIREMENT[skill.needs]
            : skill.parent && !prerequisiteMet(skill, state)
              ? `Needs ${SKILLS.find((s) => s.id === skill.parent).name}${skill.parentLevel > 1 ? ` ${["", "I", "II", "III"][skill.parentLevel]}` : ""}`
              : null;
      const footer = owned
        ? `<small class="learned">Learned</small>`
        : requirement
          ? `<small class="needs">${requirement}</small>`
          : i > level
            ? `<small class="needs">Learn the one before it first</small>`
            : `<small class="cost ${affordable ? "" : "short"}"><em>${cost.toLocaleString()}</em> clippings${affordable ? " · click to learn" : ""}</small>`;
      tile.addEventListener("pointerenter", () =>
        showTip(
          tile,
          `<span class="tip-level">${skill.max > 1 ? `${["", "I", "II", "III"][i + 1]} of ${["", "I", "II", "III"][skill.max]}` : ""}</span><b>${skill.name}</b><p>${skill.description}</p>${footer}`,
        ),
      );
      tile.addEventListener("focus", () => tile.dispatchEvent(new Event("pointerenter")));
      tile.addEventListener("pointerleave", () => (tip.hidden = true));
      tile.addEventListener("blur", () => (tip.hidden = true));
      tile.addEventListener("click", () => {
        if (next && canBuy(skill, state)) onBuy(skill);
      });
      canvas.append(tile);
    });
  }
  canvas.append(tip);
}
