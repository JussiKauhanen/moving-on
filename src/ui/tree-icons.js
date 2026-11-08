// Silhouette icons for the skill tree (24×24) and their corner badges (12×12).
const ICONS = {
  grass: `<path d="M12 22.5V6.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    <ellipse cx="12" cy="4.6" rx="1.7" ry="3"/>
    ${[8.6, 12.8, 17]
      .map(
        (y) => `<ellipse cx="9.4" cy="${y}" rx="1.6" ry="2.9" transform="rotate(-38 9.4 ${y})"/>
    <ellipse cx="14.6" cy="${y}" rx="1.6" ry="2.9" transform="rotate(38 14.6 ${y})"/>`,
      )
      .join("")}`,
  spore: `<path d="M12 1.5c-3.6 0-6.2 4.2-6.2 9.4 0 1.2.9 2.1 2.1 2.1h8.2c1.2 0 2.1-.9 2.1-2.1 0-5.2-2.6-9.4-6.2-9.4Z"/>
    <path d="M9.7 13.6h4.6l.7 7.2c0 .9-.7 1.7-1.6 1.7h-2.8c-.9 0-1.6-.8-1.6-1.7Z"/>
    <g class="hole"><circle cx="10" cy="6" r="1.1"/><circle cx="13.6" cy="8.4" r="1.2"/><circle cx="9.3" cy="10" r=".9"/><circle cx="14.5" cy="4.6" r=".8"/><circle cx="12" cy="11" r=".7"/></g>`,
  skull: `<path d="M12 1.5c-5 0-8.8 3.6-8.8 8.4 0 2.9 1.4 5.2 3.5 6.5v3.4c0 1.2 1 2.2 2.2 2.2h6.2c1.2 0 2.2-1 2.2-2.2v-3.4c2.1-1.3 3.5-3.6 3.5-6.5 0-4.8-3.8-8.4-8.8-8.4Z"/>
    <g class="hole"><ellipse cx="8.5" cy="11" rx="2.5" ry="2.7"/><ellipse cx="15.5" cy="11" rx="2.5" ry="2.7"/><path d="M12 14.2l-1.3 2.6h2.6Z"/>
    <rect x="9.6" y="19" width=".9" height="3"/><rect x="11.55" y="19" width=".9" height="3"/><rect x="13.5" y="19" width=".9" height="3"/></g>`,
  cricket: `<ellipse cx="11" cy="13.5" rx="6.5" ry="2.6"/><circle cx="18" cy="12.3" r="2"/>
    <path d="M19 10.6 23 3.5M18 10.5 20.5 2.8M9 15.5 6 21M12 15.8 13.5 21M14 12 9 6.5 3.5 17.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
};
const BADGES = {
  speed: `<path d="M2.5 1h7M2.5 11h7M3.2 1.2c0 3.2 5.6 3 5.6 4.8S3.2 7.6 3.2 10.8M8.8 1.2c0 3.2-5.6 3-5.6 4.8s5.6 1.6 5.6 4.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M4.2 9.6h3.6L6 7.6Z"/>`,
  more: `<path d="M6 1.5v9M1.5 6h9" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`,
  chance: `<circle cx="3" cy="3" r="1.8"/><circle cx="9" cy="9" r="1.8"/><path d="M10 2 2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
  reach: `<circle cx="6" cy="6" r="3.8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="1.6 1.4"/><circle cx="6" cy="6" r="1.3"/><path d="M6 0v1.6M6 10.4V12M0 6h1.6M10.4 6H12" stroke="currentColor" stroke-width="1.2"/>`,
  power: `<path d="M7.2 0 1.8 7h3.6L4.2 12l6-7.6H6.6Z"/>`,
};
export function treeIcon(name) {
  return `<svg class="tree-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${ICONS[name] || ICONS.grass}</svg>`;
}
export function treeBadge(name) {
  if (!name || !BADGES[name]) return "";
  return `<svg class="tree-badge" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">${BADGES[name]}</svg>`;
}
