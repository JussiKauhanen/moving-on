import * as THREE from "three";
import {
  box,
  ball,
  cylinder,
  beam,
  roof,
  bake,
  makeClippers,
} from "./primitives.js";
import { buildLoreProp } from "./collectibles.js";
import { Foliage } from "./foliage.js";
import { seededRandom } from "../systems/rules.js";
export function buildGarden(scene, level) {
  const root = new THREE.Group(),
    random = seededRandom(level.seed),
    colliders = [],
    interactables = [],
    flowerData = [],
    foliage = [];
  const block = (x, z, w, d) => colliders.push({ x, z, w, d });
  box(root, [220, 0.35, 220], "#5f7f6c", [0, -0.25, 0]);
  box(root, [35, 0.06, 37], "#6f8a5e", [0, -0.035, -3.5]);
  box(root, [160, 0.08, 5.5], "#b2a393", [0, -0.02, 21]);
  for (let x = -70; x < 75; x += 5)
    box(root, [2, 0.012, 0.13], "#dfcbb0", [x, 0.03, 21]);
  // Meandering flagstone walk, with irregular, individually placed stones.
  for (let i = 0; i < level.path.length - 1; i++) {
    let a = level.path[i],
      b = level.path[i + 1],
      len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    for (let t = 0; t < len; t += 0.72)
      for (let side of [-1, 1]) {
        const x = a[0] + ((b[0] - a[0]) * t) / len + side * 0.36,
          z = a[1] + ((b[1] - a[1]) * t) / len;
        let stone = cylinder(
          root,
          0.44,
          0.47,
          0.09,
          ["#bcb69b", "#a9ac94", "#d0c2a7"][Math.floor(random() * 3)],
          [x, 0.03, z],
          5,
        );
        stone.rotation.y = random() * 3;
        stone.scale.z = 0.78;
      }
  }
  function window(p, x, y, z, w = 1.25, h = 1.7) {
    box(p, [w + 0.22, h + 0.22, 0.16], "#d4b99e", [x, y, z]);
    box(p, [w, h, 0.18], "#29494b", [x, y, z + 0.06]);
    box(p, [0.07, h, 0.09], "#bba58b", [x, y, z + 0.18]);
    box(p, [w, 0.07, 0.09], "#bba58b", [x, y, z + 0.18]);
    box(p, [w + 0.4, 0.13, 0.36], "#dbb79a", [x, y - h / 2 - 0.13, z + 0.05]);
    for (const side of [-1, 1]) {
      box(p, [0.45, h + 0.15, 0.1], "#758f82", [
        x + side * (w / 2 + 0.36),
        y,
        z,
      ]);
      for (let j = 0; j < 6; j++)
        box(p, [0.38, 0.035, 0.08], "#4e736b", [
          x + side * (w / 2 + 0.36),
          y - 0.65 + j * 0.25,
          z + 0.065,
        ]);
    }
  }
  const h = level.house,
    house = new THREE.Group();
  root.add(house);
  house.position.set(h.position[0], 0, h.position[1]);
  box(house, [h.width, 0.38, h.depth], "#7a8278", [0, 0.19, 0]);
  box(house, [h.width, h.height, h.depth], "#bd8270", [
    0,
    h.height / 2 + 0.3,
    0,
  ]);
  for (let y = 0.7; y < h.height; y += 0.42)
    box(house, [h.width + 0.03, 0.035, h.depth + 0.035], "#ac7565", [0, y, 0]);
  roof(house, h.width + 1, h.depth + 1, 2.5, h.height + 0.3, "#64665d");
  for (let y = 0; y < 7; y++)
    for (let side of [-1, 1])
      box(
        house,
        [0.13, 0.14, h.depth + 1.12],
        "#77796a",
        [
          side * (h.width / 2 + 0.5) * (1 - y / 7),
          h.height + 0.3 + (y * 2.5) / 7,
          0,
        ],
        [0, 0, side * -0.42],
      );
  box(house, [1.1, 2.5, 1.1], "#9c7266", [2, 8.1, -1]);
  box(house, [1.35, 0.22, 1.35], "#bb9d85", [2, 9.2, -1]);
  window(house, -3.3, 2.1, h.depth / 2 + 0.06);
  window(house, 3.3, 2.1, h.depth / 2 + 0.06);
  window(house, -3.3, 4.85, h.depth / 2 + 0.06, 1.1, 1.35);
  window(house, 0, 4.85, h.depth / 2 + 0.06, 1.1, 1.35);
  window(house, 3.3, 4.85, h.depth / 2 + 0.06, 1.1, 1.35);
  box(house, [1.7, 2.8, 0.18], "#d4b99e", [0, 1.65, h.depth / 2 + 0.08]);
  box(house, [1.4, 2.6, 0.2], "#385957", [0, 1.55, h.depth / 2 + 0.18]);
  box(house, [0.9, 0.9, 0.05], "#233d40", [0, 2.2, h.depth / 2 + 0.3]);
  ball(house, 0.06, "#d9b067", [0.5, 1.4, h.depth / 2 + 0.33]);
  box(house, [5.3, 0.25, 2.1], "#a7a08a", [0, 0.2, h.depth / 2 + 0.8]);
  box(house, [3, 0.14, 0.65], "#bbb398", [0, 0.07, h.depth / 2 + 2]);
  box(
    house,
    [5.7, 0.2, 2.6],
    "#62685b",
    [0, 3.25, h.depth / 2 + 1],
    [0.09, 0, 0],
  );
  for (let x of [-2.35, 2.35])
    box(house, [0.14, 3, 0.14], "#c6b298", [x, 1.7, h.depth / 2 + 1.9]);
  // Subtle broken boards, creeping ivy, and a dark upstairs window.
  box(
    house,
    [1.5, 0.16, 0.1],
    "#a38b71",
    [-3.3, 1.8, h.depth / 2 + 0.32],
    [0, 0, 0.22],
  );
  for (let i = 0; i < 35; i++) {
    let x = -h.width / 2 + random() * 1.2,
      y = random() * 4;
    ball(
      house,
      0.17 + random() * 0.15,
      "#607d62",
      [x, y, h.depth / 2 + 0.12],
      [1, 0.6, 1],
    );
  }
  block(h.position[0], h.position[1], h.width + 0.1, h.depth + 0.1);
  const watcher = box(scene, [0.24, 0.65, 0.06], "#182b30", [
    h.position[0],
    4.8,
    h.position[1] + h.depth / 2 + 0.2,
  ]);
  watcher.visible = false;
  // Walk-in sheds. Front walls leave a generous real doorway.
  function shed(data, utility = false) {
    const g = new THREE.Group();
    root.add(g);
    g.position.set(data.position[0], 0, data.position[1]);
    const { width: w, depth: d, height: h } = data;
    box(g, [w, 0.15, d], "#8b8970", [0, 0.075, 0]);
    box(g, [w, h, 0.15], utility ? "#8a9a85" : "#8f9680", [0, h / 2, -d / 2]);
    for (let side of [-1, 1]) {
      box(g, [0.16, h, d], "#7d8976", [(side * w) / 2, h / 2, 0]);
      block(data.position[0] + (side * w) / 2, data.position[1], 0.18, d);
    }
    block(data.position[0], data.position[1] - d / 2, w, 0.18);
    for (let x = -w / 2 + 0.18; x < w / 2; x += 0.38)
      box(g, [0.035, h, 0.06], "#62796c", [x, h / 2, -d / 2 + 0.1]);
    roof(g, w + 0.5, d + 0.6, 0.95, h, "#596c62");
    for (let side of [-1, 1]) {
      box(g, [0.75, h, 0.18], "#8f9680", [side * (w / 2 - 0.37), h / 2, d / 2]);
      block(
        data.position[0] + side * (w / 2 - 0.37),
        data.position[1] + d / 2,
        0.75,
        0.18,
      );
    }
    box(g, [w, 0.24, 0.2], "#b1ac8b", [0, h - 0.1, d / 2 + 0.06]);
    box(g, [w - 1, 0.15, 0.82], "#b9a27c", [0, 0.9, -d / 2 + 0.9]);
    for (let x of [-w / 2 + 0.8, w / 2 - 0.8])
      box(g, [0.11, 0.9, 0.6], "#716f58", [x, 0.45, -d / 2 + 0.9]);
    box(g, [1.5, 0.1, 0.4], "#a28f6a", [0, 2.0, -d / 2 + 0.3]);
    for (let i = 0; i < 3; i++) {
      cylinder(g, 0.13, 0.1, 0.28, ["#b38b68", "#8a9b81", "#d1b68a"][i], [
        -0.5 + i * 0.45,
        2.18,
        -d / 2 + 0.3,
      ]);
    }
    if (!utility) {
      box(
        g,
        [1.2, 2.6, 0.1],
        "#788975",
        [w / 2 + 0.35, 1.3, d / 2 + 0.25],
        [0, -0.6, 0.02],
      );
      box(
        g,
        [0.8, 0.09, 0.11],
        "#b4ae8c",
        [w / 2 + 0.35, 1.2, d / 2 + 0.28],
        [0, -0.6, 0.2],
      );
    }
  }
  shed(level.shed);
  shed(level.utility, true);
  // Low picket fence, with hedges and a hinged front gate.
  function fenceSegment(a, b) {
    let length = Math.hypot(b[0] - a[0], b[1] - a[1]),
      cx = (a[0] + b[0]) / 2,
      cz = (a[1] + b[1]) / 2,
      angle = -Math.atan2(b[1] - a[1], b[0] - a[0]);
    for (let y of [0.45, 1])
      box(root, [length, 0.12, 0.12], "#bdba9a", [cx, y, cz], [0, angle, 0]);
    for (let t = 0; t <= length; t += 0.6) {
      const x = a[0] + ((b[0] - a[0]) * t) / length,
        z = a[1] + ((b[1] - a[1]) * t) / length;
      box(
        root,
        [0.18, 1.35, 0.16],
        "#d4ccb0",
        [x, 0.675, z],
        [0, angle, random() * 0.04],
      );
    }
  }
  const { minX, maxX, minZ } = level.bounds;
  const gateZ = level.gate.z,
    gateWidth = level.gate.width,
    halfGate = gateWidth / 2;
  fenceSegment([minX, gateZ], [-halfGate, gateZ]);
  fenceSegment([halfGate, gateZ], [maxX, gateZ]);
  fenceSegment([minX, gateZ], [minX, minZ]);
  fenceSegment([maxX, gateZ], [maxX, minZ]);
  fenceSegment([minX, minZ], [maxX, minZ]);
  block((minX - halfGate) / 2, gateZ, -halfGate - minX, 0.22);
  block((maxX + halfGate) / 2, gateZ, maxX - halfGate, 0.22);
  const gate = new THREE.Group();
  scene.add(gate);
  gate.position.set(-halfGate, 0, gateZ);
  const pickets = Math.max(2, Math.round(gateWidth / 0.55));
  for (let i = 0; i < pickets; i++)
    box(gate, [0.22, 1.22, 0.15], "#738a75", [
      0.2 + (i * (gateWidth - 0.4)) / (pickets - 1),
      0.61,
      0,
    ]);
  for (let y of [0.3, 0.95])
    box(gate, [gateWidth, 0.13, 0.13], "#a5ab86", [halfGate, y, 0]);
  beam(gate, [0.1, 0.25, 0.08], [gateWidth - 0.1, 1, 0.08], 0.06, "#a5ab86");
  for (let x of [-halfGate - 0.15, halfGate + 0.15]) {
    box(root, [0.28, 1.75, 0.28], "#d4c9a9", [x, 0.875, gateZ]);
    ball(root, 0.2, "#d4c9a9", [x, 1.78, gateZ]);
  }
  // Flower islands, carefully edged with small cobblestones.
  for (const bed of level.flowerbeds) {
    const [x, z] = bed.position;
    cylinder(root, bed.radius, bed.radius, 0.11, "#596853", [x, 0.03, z], 24);
    const n = Math.round(bed.radius * 15);
    for (let i = 0; i < n; i++) {
      let a = (i / n) * Math.PI * 2;
      const m = ball(
        root,
        0.23,
        ["#a9ad99", "#c2bda1", "#949e8d"][i % 3],
        [x + Math.cos(a) * bed.radius, 0.13, z + Math.sin(a) * bed.radius],
        [1, 0.62, 0.8],
      );
      m.rotation.y = random() * 5;
    }
    for (let i = 0; i < 45; i++) {
      let a = random() * 6.28,
        r = Math.sqrt(random()) * (bed.radius - 0.3),
        px = x + Math.cos(a) * r,
        pz = z + Math.sin(a) * r,
        y = 0.3 + random() * 0.45;
      flowerData.push({
        x: px,
        z: pz,
        height: y,
        color: bed.color,
        flower: true,
        cut: false,
      });
    }
    // Flower beds can be walked into and cut; the stone edging stays intact.
  }
  function tree(x, z, s = 1, far = false) {
    const height = (5 + random() * 2) * s;
    const trunk = far ? "#6a6f9a" : "#5a5f86";
    beam(root, [x, 0, z], [x + 0.2, height, z], 0.2 * s, trunk);
    for (let i = 0; i < 7; i++) {
      let a = i * 2.4,
        r = (1 + random()) * s,
        y = height - 1 + random() * 2;
      const cx = x + Math.cos(a) * r,
        cz = z + Math.sin(a) * r;
      beam(root, [x, height * 0.6, z], [cx, y, cz], 0.08 * s, trunk);
      // A small dark core keeps the canopy from reading as hollow.
      if (!far || i % 2)
        ball(root, 0.75 * s, "#3d6e70", [cx, y - 0.1 * s, cz], [1, 0.75, 1]);
      foliage.push({
        x: cx,
        y,
        z: cz,
        size: (3.1 + random() * 1.2) * s,
        tint: ["#ffffff", "#e6f4ec", "#f6f0dc", "#d8ebe6"][i % 4],
      });
      if (!far && i % 2)
        foliage.push({
          x: cx + (random() - 0.5) * s,
          y: y + 0.7 * s,
          z: cz + (random() - 0.5) * s,
          size: (2.2 + random()) * s,
          tint: "#f4f6e2",
        });
    }
    if (!far) block(x, z, 0.65 * s, 0.65 * s);
  }
  level.trees.forEach((t) => tree(...t));
  for (let i = 0; i < 50; i++) {
    let a = (i / 50) * Math.PI * 2;
    tree(
      Math.sin(a) * (29 + random() * 13),
      Math.cos(a) * (29 + random() * 13) - 5,
      1.1 + random() * 0.65,
      true,
    );
  }
  for (let i = 0; i < 48; i++) {
    let a = (i / 48) * 6.28;
    ball(
      root,
      4 + random() * 4,
      "#7d9f9a",
      [Math.sin(a) * 70, 1, Math.cos(a) * 65],
      [2, 0.5, 1.5],
      1,
    );
  }
  // A capped old well and a bench facing the house.
  const wp = level.points.find((p) => p.id === "well").position;
  cylinder(root, 1, 1.05, 0.8, "#9b9f8e", [wp[0], 0.4, wp[2]], 12);
  cylinder(root, 0.72, 0.72, 0.04, "#263e3e", [wp[0], 0.82, wp[2]], 16);
  for (let i = 0; i < 9; i++) {
    let a = (i / 9) * 6.28;
    ball(
      root,
      0.27,
      "#b2b5a0",
      [wp[0] + Math.cos(a) * 0.88, 0.83, wp[2] + Math.sin(a) * 0.88],
      [1, 0.5, 1],
    );
  }
  // A winch frame with a rope that goes down further than it should.
  const winch = new THREE.Group();
  winch.position.set(wp[0], 0, wp[2]);
  root.add(winch);
  for (const side of [-1, 1])
    box(winch, [0.16, 2.3, 0.16], "#6d5a48", [side * 0.98, 1.15, 0]);
  box(winch, [2.3, 0.16, 0.18], "#7b6650", [0, 2.3, 0]);
  roof(winch, 2.6, 1.3, 0.55, 2.35, "#5d5266");
  cylinder(winch, 0.09, 0.09, 1.2, "#8a7356", [0, 1.95, 0], 8, [0, 0, Math.PI / 2]);
  cylinder(winch, 0.025, 0.025, 1.9, "#b39a6c", [0, 1.0, 0], 5);
  block(wp[0], wp[2], 1.9, 1.9);
  box(root, [2.2, 0.15, 0.65], "#a88c68", [12, 0.6, 8]);
  box(root, [2.2, 0.5, 0.1], "#9b8466", [12, 1, 8.3], [0.12, 0, 0]);
  for (let x of [11.2, 12.8])
    box(root, [0.12, 0.6, 0.5], "#4c655d", [x, 0.3, 8]);
  block(12, 8, 2.2, 0.8);
  // Fallen leaves, loose rocks, mushrooms and worn pots add scale.
  for (let i = 0; i < 100; i++) {
    let x = random() * 34 - 17,
      z = random() * 35 - 20;
    ball(
      root,
      0.07 + random() * 0.09,
      ["#c5ac69", "#9a9c62", "#889275"][i % 3],
      [x, 0.02, z],
      [1, 0.1, 0.55],
    );
  }
  for (let i = 0; i < 8; i++) {
    let x = -15 + random() * 2,
      z = 8 + random() * 2;
    cylinder(root, 0.025, 0.035, 0.18, "#d4c6a0", [x, 0.1, z]);
    ball(root, 0.13, "#b6896a", [x, 0.21, z], [1, 0.45, 1]);
  }
  cylinder(root, 0.38, 0.25, 0.6, "#b68467", [-9, 0.3, -7], 9);
  cylinder(root, 0.32, 0.32, 0.02, "#54664f", [-9, 0.61, -7], 9);
  // Roadside sign.
  box(root, [0.1, 2.8, 0.1], "#5a7169", [4.5, 1.4, 19]);
  box(root, [0.75, 0.85, 0.12], "#d1c7a4", [4.5, 2.4, 19]);
  box(root, [0.45, 0.27, 0.14], "#5b7c6a", [4.5, 2.45, 19.01]);
  scene.add(bake(root));
  const leaves = new Foliage(scene, foliage);
  for (const point of level.points) {
    const g = new THREE.Group();
    g.position.set(...point.position);
    scene.add(g);
    if (point.lore) buildLoreProp(g, point);
    g.visible = !point.buried;
    if (point.kind === "note") {
      box(g, [0.52, 0.64, 0.02], "#eee0b6", [0, 0, 0]);
      for (let i = 0; i < 5; i++)
        box(g, [0.32 - i * 0.025, 0.015, 0.025], "#a79a7b", [
          0,
          0.17 - i * 0.07,
          0.015,
        ]);
    }
    if (point.kind === "clippers") {
      const c = makeClippers(g);
      c.rotation.set(-Math.PI / 2, 0, 0.6);
      c.scale.setScalar(0.85);
    }
    if (point.kind === "oil") {
      box(g, [0.25, 0.33, 0.19], "#bb8e4d", [0, 0.13, 0]);
      beam(g, [0.08, 0.25, 0], [0.25, 0.47, 0], 0.028, "#bfbb9e");
      cylinder(g, 0.05, 0.06, 0.12, "#6b7e66", [0, 0.35, 0]);
    }
    if (point.kind === "stone")
      box(g, [0.38, 0.1, 0.19], "#abb0a4", [0, 0, 0], [0, 0.3, 0]);
    if (point.kind === "charm") {
      ball(g, 0.16, "#e5be62", [0, 0.15, 0], [0.65, 0.6, 1.3]);
      beam(g, [-0.15, 0.1, -0.1], [0.14, 0.1, 0.1], 0.025, "#e5be62");
    }
    if (point.kind === "spores") {
      for (let i = 0; i < 4; i++) {
        let x = i * 0.13 - 0.2;
        cylinder(g, 0.028, 0.035, 0.22, "#bbc9ab", [x, 0.1, 0]);
        ball(g, 0.11, "#b2c6a7", [x, 0.24, 0], [1, 0.6, 1]);
      }
    }
    interactables.push({
      ...point,
      object: g,
      position: new THREE.Vector3(...point.position),
      taken: false,
      revealed: !point.buried,
    });
  }
  const bus = new THREE.Group();
  scene.add(bus);
  bus.position.set(-7, 0, 21);
  box(bus, [6, 2.7, 2.4], "#d4b77d", [0, 1.7, 0]);
  box(bus, [6, 0.65, 2.45], "#6b8b7f", [0, 0.9, 0]);
  box(bus, [6, 0.15, 2.5], "#e5d7b4", [0, 2, 0]);
  for (let x = -2.4; x < 3; x += 1)
    for (let z of [-1.22, 1.22])
      box(bus, [0.78, 0.8, 0.04], "#456765", [x, 2.2, z]);
  for (let x of [-2, 2])
    for (let z of [-1.17, 1.17])
      cylinder(bus, 0.48, 0.48, 0.18, "#344843", [x, 0.5, z], 12, [
        Math.PI / 2,
        0,
        0,
      ]);
  return {
    colliders,
    interactables,
    gate,
    bus,
    watcher,
    flowerData,
    foliage: leaves,
  };
}
