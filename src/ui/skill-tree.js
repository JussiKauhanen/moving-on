import { SKILLS, SKILL_ROOT, canBuy, skillCost } from "../systems/rules.js";
import { pixelIcon } from "./pixel-icons.js";
// A dark, pixel-framed upgrade tree: nodes on a grid, orthogonal wires,
// and a detail readout that follows hover and keyboard focus.
const PAD_X = 9, // % of the canvas kept clear at each edge
  PAD_Y = 13;
const REQUIREMENT = {
  clippers: "Find the clippers",
  spores: "Find the sporepod",
};
function nodeState(skill, state) {
  const level = state.skills[skill.id] || 0;
  if (level >= skill.max) return "maxed";
  if (canBuy(skill, state)) return "available";
  const prereq = !skill.parent || state.skills[skill.parent] > 0,
    found = !skill.needs || state.items.has(skill.needs);
  if (!prereq || !found) return "locked";
  return level > 0 ? "owned" : "reachable";
}
function pips(skill, level) {
  let html = "";
  for (let i = 0; i < skill.max; i++)
    html += `<i class="${i < level ? "on" : ""}"></i>`;
  return `<span class="pips">${html}</span>`;
}
export function renderSkillTree({ canvas, detail, state, onBuy, focusId }) {
  const all = [SKILL_ROOT, ...SKILLS],
    xs = all.map((s) => s.tree[0]),
    ys = all.map((s) => s.tree[1]),
    [minX, maxX, minY, maxY] = [
      Math.min(...xs),
      Math.max(...xs),
      Math.min(...ys),
      Math.max(...ys),
    ];
  const place = ([x, y]) => [
    PAD_X + ((x - minX) / (maxX - minX || 1)) * (100 - PAD_X * 2),
    PAD_Y + ((y - minY) / (maxY - minY || 1)) * (100 - PAD_Y * 2) - 3,
  ];
  canvas.replaceChildren();
  // Wires first, so nodes sit on top of them.
  const svgNS = "http://www.w3.org/2000/svg",
    svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "tree-wires");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");
  for (const skill of SKILLS) {
    const parent = skill.parent
        ? SKILLS.find((s) => s.id === skill.parent)
        : SKILL_ROOT,
      [x1, y1] = place(parent.tree),
      [x2, y2] = place(skill.tree),
      path = document.createElementNS(svgNS, "path"),
      status = nodeState(skill, state);
    path.setAttribute("d", `M${x1} ${y1} H${x2} V${y2}`);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    path.setAttribute(
      "class",
      `wire ${status === "maxed" || status === "owned" ? "wire-owned" : status === "locked" ? "wire-locked" : "wire-open"}`,
    );
    svg.append(path);
  }
  canvas.append(svg);

  const show = (skill) => {
    const root = skill === SKILL_ROOT,
      level = state.skills[skill.id] || 0,
      status = root ? "maxed" : nodeState(skill, state),
      cost = root ? 0 : skillCost(skill, level),
      requirement =
        skill.needs && !state.items.has(skill.needs)
          ? REQUIREMENT[skill.needs]
          : skill.parent && !state.skills[skill.parent]
            ? `Requires ${SKILLS.find((s) => s.id === skill.parent).name}`
            : null;
    detail.dataset.status = status;
    detail.innerHTML = `
      <div class="detail-icon">${pixelIcon(skill.id)}</div>
      <span class="detail-branch">${skill.branch}</span>
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
      ${root ? "" : `<div class="detail-level"><span>Level ${level} / ${skill.max}</span>${pips(skill, level)}</div>`}
      <div class="detail-cost">${
        root
          ? "<span>Always with you</span>"
          : status === "maxed"
            ? "<span>Rooted in habit</span>"
            : requirement
              ? `${pixelIcon("lock", "small")}<span>${requirement}</span>`
              : `${pixelIcon("clippings", "small")}<b class="${state.compost >= cost ? "" : "short"}">${cost.toLocaleString()}</b><span>clippings</span>`
      }</div>
      ${status === "available" ? `<button class="detail-buy" data-buy="${skill.id}">Learn <kbd>Click</kbd></button>` : ""}`;
    detail.querySelector("[data-buy]")?.addEventListener("click", () =>
      onBuy(skill),
    );
  };

  const rootNode = document.createElement("button");
  rootNode.className = "node root-node maxed";
  rootNode.setAttribute("aria-label", SKILL_ROOT.name);
  rootNode.innerHTML = pixelIcon("gardener");
  const [rx, ry] = place(SKILL_ROOT.tree);
  rootNode.style.left = `${rx}%`;
  rootNode.style.top = `${ry}%`;
  rootNode.addEventListener("pointerenter", () => show(SKILL_ROOT));
  rootNode.addEventListener("focus", () => show(SKILL_ROOT));
  canvas.append(rootNode);

  let focusNode = null;
  for (const skill of SKILLS) {
    const level = state.skills[skill.id] || 0,
      status = nodeState(skill, state),
      [x, y] = place(skill.tree),
      node = document.createElement("button");
    node.className = `node ${status}`;
    node.dataset.skill = skill.id;
    node.dataset.branch = skill.branch.toLowerCase();
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
    node.setAttribute(
      "aria-label",
      `${skill.name}, level ${level} of ${skill.max}`,
    );
    node.disabled = !canBuy(skill, state);
    // Disabled buttons still need to show their details on hover.
    node.innerHTML = `${pixelIcon(status === "locked" ? "lock" : skill.id)}${pips(skill, level)}<span class="node-name">${skill.name}</span>`;
    const hover = () => show(skill);
    node.addEventListener("pointerenter", hover);
    node.addEventListener("focus", hover);
    node.addEventListener("click", () => {
      if (canBuy(skill, state)) onBuy(skill);
      else show(skill);
    });
    canvas.append(node);
    if (skill.id === focusId) focusNode = node;
  }
  // Pointer events on disabled buttons are swallowed, so a hit layer catches hover.
  canvas.onpointermove = (e) => {
    const hit = document
      .elementsFromPoint(e.clientX, e.clientY)
      .find((el) => el.classList?.contains("node"));
    if (hit?.dataset.skill && hit.disabled)
      show(SKILLS.find((s) => s.id === hit.dataset.skill));
  };
  const initial =
    SKILLS.find((s) => s.id === focusId) ||
    SKILLS.find((s) => canBuy(s, state)) ||
    SKILL_ROOT;
  show(initial);
  if (focusNode && !focusNode.disabled) focusNode.focus({ preventScroll: true });
}
