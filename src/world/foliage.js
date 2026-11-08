import * as THREE from "three";
import { seededRandom } from "../systems/rules.js";
// Painterly leaf clumps: crossed, alpha-cut cards with brushy strokes, gently swaying.
// Gives trees the airy, hand-cut silhouette of a painted set rather than solid balls.
function leafTexture() {
  const size = 256,
    canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const c = canvas.getContext("2d"),
    random = seededRandom(91);
  // Dark core first, light strokes on top, brightest towards the upper left.
  const layers = [
    { tones: ["#3b7277", "#47807c", "#356670"], count: 150, reach: 0.9, lift: 0.06 },
    { tones: ["#5fa695", "#70b8a0", "#549a90"], count: 140, reach: 0.8, lift: -0.06 },
    { tones: ["#97d4ae", "#b0e0b4", "#86c8a8"], count: 105, reach: 0.7, lift: -0.16 },
    { tones: ["#d4e7a6", "#bfe0a8", "#eef0b8"], count: 38, reach: 0.5, lift: -0.3 },
  ];
  for (const layer of layers)
    for (let i = 0; i < layer.count; i++) {
      const a = random() * Math.PI * 2,
        r = Math.sqrt(random()) * layer.reach * size * 0.45,
        x = size / 2 + Math.cos(a) * r - layer.lift * size * 0.25,
        y = size / 2 + Math.sin(a) * r * 0.82 + layer.lift * size * 0.45;
      c.save();
      c.translate(x, y);
      c.rotate(-0.9 + random() * 0.9);
      c.fillStyle = layer.tones[Math.floor(random() * layer.tones.length)];
      const w = 7 + random() * 12,
        h = 16 + random() * 26;
      // A jagged, knife-cut stroke: a skewed quad with a notch.
      c.beginPath();
      c.moveTo(-w * 0.5, -h * 0.5);
      c.lineTo(w * 0.35, -h * 0.55);
      c.lineTo(w * 0.55, h * 0.1);
      c.lineTo(w * 0.1, h * 0.55);
      c.lineTo(-w * 0.4, h * 0.3);
      c.lineTo(-w * 0.15, 0);
      c.closePath();
      c.fill();
      c.restore();
    }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = true;
  return texture;
}
export class Foliage {
  constructor(scene, clumps) {
    this.time = { value: 0 };
    const planes = [];
    for (let i = 0; i < 3; i++) {
      const p = new THREE.PlaneGeometry(1, 1);
      p.rotateY((i * Math.PI) / 3);
      planes.push(p);
    }
    const geometry = mergePlanes(planes);
    // Leaves are lit as one soft volume rather than as flat cards.
    const normals = geometry.attributes.normal;
    for (let i = 0; i < normals.count; i++) {
      const y = geometry.attributes.position.getY(i);
      normals.setXYZ(i, 0, 0.6 + y * 0.8, 0.35);
    }
    const map = leafTexture();
    const material = new THREE.MeshLambertMaterial({
      map,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.time;
      shader.vertexShader = "uniform float uTime;\n" + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        float leafPhase = instanceMatrix[3].x * .37 + instanceMatrix[3].z * .23;
        transformed.x += sin(uTime * 1.1 + leafPhase) * .035 * (position.y + .5);
        transformed.z += cos(uTime * .9 + leafPhase) * .03 * (position.y + .5);`,
      );
    };
    this.mesh = new THREE.InstancedMesh(geometry, material, clumps.length);
    this.mesh.customDepthMaterial = new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
      map,
      alphaTest: 0.5,
    });
    const dummy = new THREE.Object3D(),
      tint = new THREE.Color(),
      random = seededRandom(17);
    clumps.forEach((clump, i) => {
      dummy.position.set(clump.x, clump.y, clump.z);
      dummy.rotation.set(0, random() * Math.PI, (random() - 0.5) * 0.3);
      dummy.scale.set(clump.size, clump.size * 0.86, clump.size);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
      tint.set(clump.tint || "#ffffff");
      this.mesh.setColorAt(i, tint);
    });
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    scene.add(this.mesh);
  }
}
function mergePlanes(planes) {
  const positions = [],
    normals = [],
    uvs = [],
    index = [];
  let offset = 0;
  for (const p of planes) {
    positions.push(...p.attributes.position.array);
    normals.push(...p.attributes.normal.array);
    uvs.push(...p.attributes.uv.array);
    for (const i of p.index.array) index.push(i + offset);
    offset += p.attributes.position.count;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  g.setIndex(index);
  return g;
}
