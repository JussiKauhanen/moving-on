import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
const palette = new Map();
const ramp = new THREE.DataTexture(
  new Uint8Array([75, 75, 75, 255, 165, 165, 165, 255, 255, 255, 255, 255]),
  3,
  1,
  THREE.RGBAFormat,
);
ramp.minFilter = ramp.magFilter = THREE.NearestFilter;
ramp.needsUpdate = true;
export function material(color) {
  if (!palette.has(color))
    palette.set(
      color,
      new THREE.MeshToonMaterial({ color, gradientMap: ramp }),
    );
  return palette.get(color);
}
export function mesh(
  parent,
  geometry,
  color,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
) {
  const m = new THREE.Mesh(
    geometry,
    typeof color === "string" ? material(color) : color,
  );
  m.position.set(...position);
  m.rotation.set(...rotation);
  m.castShadow = m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function box(p, size, color, pos, rot) {
  return mesh(p, new THREE.BoxGeometry(...size), color, pos, rot);
}
export function ball(p, radius, color, pos, scale = [1, 1, 1], detail = 0) {
  const m = mesh(p, new THREE.IcosahedronGeometry(radius, detail), color, pos);
  m.scale.set(...scale);
  return m;
}
export function cylinder(p, r1, r2, h, color, pos, sides = 8, rot) {
  return mesh(p, new THREE.CylinderGeometry(r1, r2, h, sides), color, pos, rot);
}
export function beam(p, a, b, radius, color) {
  const start = new THREE.Vector3(...a),
    end = new THREE.Vector3(...b),
    d = end.clone().sub(start);
  const m = cylinder(
    p,
    radius,
    radius * 1.1,
    d.length(),
    color,
    start.add(end).multiplyScalar(0.5).toArray(),
    6,
  );
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  return m;
}
export function roof(p, w, d, h, y, color) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2, 0);
  s.lineTo(w / 2, 0);
  s.lineTo(0, h);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: false });
  return mesh(p, g, color, [0, y, -d / 2]);
}
export function bake(root) {
  root.updateMatrixWorld(true);
  const groups = new Map();
  root.traverse((o) => {
    if (!o.isMesh) return;
    const key = o.material.uuid;
    if (!groups.has(key)) groups.set(key, { mat: o.material, geos: [] });
    let g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    if (g.index) g = g.toNonIndexed();
    g.deleteAttribute("uv");
    groups.get(key).geos.push(g);
  });
  const baked = new THREE.Group();
  for (const { mat, geos } of groups.values()) {
    const g = mergeGeometries(geos);
    const m = new THREE.Mesh(g, mat);
    m.castShadow = m.receiveShadow = true;
    baked.add(m);
    geos.forEach((g) => g.dispose());
  }
  root.traverse((o) => {
    if (o.isMesh) o.geometry.dispose();
  });
  return baked;
}
export function makeClippers(parent, rust = true) {
  const g = new THREE.Group();
  parent.add(g);
  const halves = [];
  for (let side of [-1, 1]) {
    const half = new THREE.Group();
    g.add(half);
    halves.push(half);
    half.rotation.z = side * 0.35;
    box(half, [0.075, 0.4, 0.07], "#89705b", [0, -0.23, 0]);
    box(half, [0.11, 0.22, 0.095], "#386c65", [0, -0.35, 0]);
    const shape = new THREE.Shape();
    shape.moveTo(-0.055, 0);
    shape.lineTo(0.055, 0);
    shape.lineTo(0.025, 0.47);
    shape.lineTo(-0.028, 0.53);
    shape.closePath();
    mesh(
      half,
      new THREE.ExtrudeGeometry(shape, { depth: 0.035, bevelEnabled: false }),
      rust ? "#9aaea8" : "#ced8c7",
      [0, 0, -0.015],
    );
    if (rust) {
      box(half, [0.045, 0.12, 0.039], "#986c4e", [0.008, 0.15, 0.006]);
      box(half, [0.028, 0.065, 0.039], "#986c4e", [-0.012, 0.32, 0.006]);
    }
    box(
      half,
      [0.012, 0.32, 0.038],
      "#d3d9c9",
      [-0.035, 0.19, 0.004],
      [0, 0, -0.04],
    );
  }
  cylinder(g, 0.055, 0.055, 0.07, "#d4b995", [0, 0, 0.03], 10, [
    Math.PI / 2,
    0,
    0,
  ]);
  g.userData.halves = halves;
  return g;
}
