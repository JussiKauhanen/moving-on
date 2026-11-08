import * as THREE from "three";
import { isPlantable, seededRandom } from "../systems/rules.js";
import { material } from "./primitives.js";
// Little wild flowers scattered through the lawn: a stem and a blob of colour.
// Purely decorative. Cutting near one simply takes it with the grass.
const COLOURS = ["#f6a9bd", "#ffe38c", "#cdb8f4", "#ffffff", "#f7b86e", "#a6d6f2"];
export class WildFlowers {
  constructor(scene, level, count = 170) {
    const random = seededRandom(level.seed + 99),
      g = level.grass;
    this.plants = [];
    while (this.plants.length < count) {
      const x = g.minX + random() * (g.maxX - g.minX),
        z = g.minZ + random() * (g.maxZ - g.minZ);
      if (!isPlantable(x, z, level)) continue;
      this.plants.push({
        x,
        z,
        height: 1.35 + random() * 0.7,
        size: 0.06 + random() * 0.05,
        lean: (random() - 0.5) * 0.2,
        colour: COLOURS[Math.floor(random() * COLOURS.length)],
        cut: false,
      });
    }
    this.time = { value: 0 };
    const stemGeometry = new THREE.CylinderGeometry(0.012, 0.016, 1, 4);
    stemGeometry.translate(0, 0.5, 0);
    const sway = (m) => {
      m.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = this.time;
        shader.vertexShader = shader.vertexShader
          .replace("#include <common>", "#include <common>\nuniform float uTime;")
          .replace(
            "#include <project_vertex>",
            `vec4 mvPosition = instanceMatrix * vec4(transformed, 1.0);
            float h = clamp(mvPosition.y / 2.0, 0., 1.);
            float phase = instanceMatrix[3].x * .7 + instanceMatrix[3].z * .47;
            mvPosition.x += sin(uTime * 1.65 + phase) * .09 * h * h;
            mvPosition.z += cos(uTime * 1.3 + phase) * .05 * h;
            mvPosition = modelViewMatrix * mvPosition;
            gl_Position = projectionMatrix * mvPosition;`,
          );
      };
      return m;
    };
    const stemMat = sway(material("#5f8f63").clone()),
      headMat = sway(new THREE.MeshLambertMaterial({ color: "#ffffff" }));
    this.stems = new THREE.InstancedMesh(stemGeometry, stemMat, count);
    this.heads = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(1, 0),
      headMat,
      count,
    );
    const colour = new THREE.Color();
    this.plants.forEach((p, i) => {
      p.index = i;
      this.place(p);
      this.heads.setColorAt(i, colour.set(p.colour));
    });
    for (const mesh of [this.stems, this.heads]) {
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.receiveShadow = true;
      scene.add(mesh);
    }
  }
  place(p) {
    const d = new THREE.Object3D();
    d.position.set(p.x, 0, p.z);
    d.rotation.set(0, 0, p.lean);
    d.scale.set(1, p.cut ? 0.0001 : p.height, 1);
    d.updateMatrix();
    this.stems.setMatrixAt(p.index, d.matrix);
    d.rotation.set(0, 0, 0);
    d.position.set(p.x - Math.sin(p.lean) * p.height, Math.cos(p.lean) * p.height, p.z);
    d.scale.set(p.size, p.size * 0.8, p.size);
    if (p.cut) d.scale.setScalar(0.0001);
    d.updateMatrix();
    this.heads.setMatrixAt(p.index, d.matrix);
    this.stems.instanceMatrix.needsUpdate = true;
    this.heads.instanceMatrix.needsUpdate = true;
  }
  // Silently take any flowers within reach of a cut.
  cutNear(x, z, r) {
    for (const p of this.plants)
      if (!p.cut && Math.hypot(p.x - x, p.z - z) < r) {
        p.cut = true;
        this.place(p);
      }
  }
}
