import * as THREE from "three";
import { isPlantable, seededRandom } from "../systems/rules.js";
export class Grass {
  constructor(scene, level) {
    this.level = level;
    this.tufts = [];
    this.cells = new Map();
    this.cutCount = 0;
    this.infected = new Set();
    this.time = { value: 0 };
    const random = seededRandom(level.seed + 5),
      cfg = level.grass;
    for (let x = cfg.minX; x < cfg.maxX; x += cfg.spacing)
      for (let z = cfg.minZ; z < cfg.maxZ; z += cfg.spacing) {
        const px = x + (random() - 0.5) * cfg.spacing * 0.9,
          pz = z + (random() - 0.5) * cfg.spacing * 0.9;
        if (!isPlantable(px, pz, level)) continue;
        const tuft = {
          x: px,
          z: pz,
          height: cfg.height[0] + random() * (cfg.height[1] - cfg.height[0]),
          angle: random() * 6.28,
          width: 0.7 + random() * 0.65,
          cut: false,
          infection: 0,
          index: this.tufts.length,
        };
        this.tufts.push(tuft);
        const key = this.key(px, pz);
        if (!this.cells.has(key)) this.cells.set(key, []);
        this.cells.get(key).push(tuft);
      }
    const vertices = [],
      colors = [];
    for (let i = 0; i < 1; i++) {
      const a = i * 2.399,
        r = 0.03 + i * 0.018,
        bx = Math.cos(a) * r,
        bz = Math.sin(a) * r,
        dx = Math.cos(a) * 0.09,
        dz = Math.sin(a) * 0.09,
        leanx = Math.cos(a) * 0.25,
        leanz = Math.sin(a) * 0.25,
        h = 0.65 + random() * 0.4;
      const points = [
        [bx - dx, 0, bz - dz],
        [bx + dx, 0, bz + dz],
        [bx + dx * 0.5 + leanx * 0.4, h * 0.55, bz + dz * 0.5 + leanz * 0.4],
        [bx - dx * 0.5 + leanx * 0.4, h * 0.55, bz - dz * 0.5 + leanz * 0.4],
        [bx + leanx, h, bz + leanz],
      ];
      for (const idx of [0, 1, 2, 0, 2, 3, 3, 2, 4]) {
        vertices.push(...points[idx]);
        const c = idx < 2 ? 0.59 : idx === 4 ? 1 : 0.87;
        colors.push(c, c, c);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    const material = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 1,
      side: THREE.DoubleSide,
      vertexColors: true,
    });
    // x, z, start time, strength of the latest power-cut shockwave.
    this.shockUniform = { value: new THREE.Vector4(0, 0, -100, 0) };
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.time;
      shader.uniforms.uShock = this.shockUniform;
      shader.vertexShader =
        "uniform float uTime;\nuniform vec4 uShock;\n" + shader.vertexShader;
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
      float phase = instanceMatrix[3].x * .7 + instanceMatrix[3].z * .47;
      float wave = sin(uTime * 1.65 + phase) * .09 + sin(uTime * 2.8 + phase * 1.7) * .035;
      transformed.x += wave * position.y * position.y;
      transformed.z += cos(uTime * 1.3 + phase) * .045 * position.y;
    `,
        )
        .replace(
          "#include <color_vertex>",
          `#include <color_vertex>
      // Cool teal roots under warm, sunlit tips.
      vColor.rgb *= mix(vec3(.38, .6, .72), vec3(1.), smoothstep(0., .85, position.y));
    `,
        )
        .replace(
          "#include <project_vertex>",
          `vec4 mvPosition = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      // A travelling ring flattens blades outward, then lets them spring back.
      float shockAge = uTime - uShock.z;
      if (shockAge > 0. && shockAge < 3.5) {
        vec2 fromShock = instanceMatrix[3].xz - uShock.xy;
        float dist = length(fromShock);
        float front = shockAge * 10.5;
        float ring = exp(-pow((dist - front) / 1.15, 2.));
        float behind = step(dist, front) * exp(-(front - dist) * .45) * cos((front - dist) * 1.7) * .4;
        float fade = exp(-shockAge * 1.25) * (1. - smoothstep(6., 15., dist)) * uShock.w;
        float push = (ring + behind) * fade;
        float bend = position.y * position.y;
        mvPosition.xz += fromShock / max(dist, .001) * push * bend * .95;
        mvPosition.y -= abs(push) * bend * .38;
      }
      mvPosition = modelViewMatrix * mvPosition;
      gl_Position = projectionMatrix * mvPosition;`,
        );
    };
    this.mesh = new THREE.InstancedMesh(geometry, material, this.tufts.length);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.receiveShadow = true;
    this.mesh.frustumCulled = false;
    this.dummy = new THREE.Object3D();
    const tint = new THREE.Color();
    const palette = [
      "#b9c66c",
      "#94bd78",
      "#cfcb7c",
      "#78ad86",
      "#a8c56e",
      "#d9d48c",
    ];
    for (const t of this.tufts) {
      this.setTransform(t);
      tint.set(palette[Math.floor(random() * palette.length)]);
      this.mesh.setColorAt(t.index, tint);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    scene.add(this.mesh);
  }
  shock(x, z, strength = 1) {
    this.shockUniform.value.set(x, z, this.time.value, strength);
  }
  key(x, z) {
    return `${Math.floor(x / 2)},${Math.floor(z / 2)}`;
  }
  setTransform(t) {
    this.dummy.position.set(t.x, 0.025, t.z);
    this.dummy.rotation.set(0, t.angle, 0);
    this.dummy.scale.set(t.cut ? 0.5 : t.width, t.cut ? 0.065 : t.height, 1);
    this.dummy.updateMatrix();
    this.mesh.setMatrixAt(t.index, this.dummy.matrix);
  }
  near(x, z, r) {
    const results = [];
    for (let a = Math.floor((x - r) / 2); a <= Math.floor((x + r) / 2); a++)
      for (let b = Math.floor((z - r) / 2); b <= Math.floor((z + r) / 2); b++) {
        for (const t of this.cells.get(`${a},${b}`) || [])
          if (!t.cut && Math.hypot(t.x - x, t.z - z) < r) results.push(t);
      }
    return results;
  }
  cut(x, z, r, limit) {
    const list = this.near(x, z, r)
      .sort(
        (a, b) => Math.hypot(a.x - x, a.z - z) - Math.hypot(b.x - x, b.z - z),
      )
      .slice(0, limit);
    for (const t of list) this.remove(t);
    return list;
  }
  remove(t) {
    if (t.cut) return;
    t.cut = true;
    this.cutCount++;
    this.infected.delete(t);
    this.setTransform(t);
    this.mesh.setColorAt(t.index, new THREE.Color("#5f7d66"));
    this.mesh.instanceColor.needsUpdate = true;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  infect(x, z, r) {
    for (const t of this.near(x, z, r)) {
      if (!t.infection) {
        t.infection = 0.01;
        this.infected.add(t);
      }
    }
  }
  update(dt, time, spread) {
    this.time.value = time;
    const removed = [];
    for (const t of [...this.infected]) {
      t.infection += dt * (1 + spread * 0.4);
      if (t.infection > 2.5) {
        this.remove(t);
        removed.push(t);
        if (Math.random() < 0.46 + spread * 0.12)
          this.infect(t.x, t.z, 0.48 + spread * 0.12);
      } else if (t.infection > 1) {
        this.mesh.setColorAt(t.index, new THREE.Color("#6d6378"));
        this.mesh.instanceColor.needsUpdate = true;
      }
    }
    return removed;
  }
}
