import { clamp } from "./rules.js";
const ease = (t) => 1 - (1 - t) ** 3;
// Contact happens at the end of the quick closing stroke, followed by a short hold.
export function contactFraction(tool) {
  return tool === "clippers" ? 0.23 : 0.38;
}
export function actionPose(progress, tool) {
  const p = clamp(progress, 0, 1);
  if (tool === "clippers") {
    const close =
      p < 0.12
        ? (-0.12 * p) / 0.12
        : p < 0.23
          ? -0.12 + 1.12 * ease((p - 0.12) / 0.11)
          : p < 0.35
            ? 1
            : 1 - ease((p - 0.35) / 0.65);
    return {
      close,
      reach: Math.max(0, close),
      lift: 0,
      grip: Math.max(0, close),
    };
  }
  const reach = p < 0.38 ? ease(p / 0.38) : 1 - ease((p - 0.38) / 0.62);
  const lift = p < 0.38 ? 0 : Math.sin(((p - 0.38) / 0.62) * Math.PI);
  return {
    close: 0,
    reach,
    lift,
    grip:
      p < 0.27 ? 0 : p < 0.38 ? (p - 0.27) / 0.11 : 1 - ease((p - 0.38) / 0.62),
  };
}
