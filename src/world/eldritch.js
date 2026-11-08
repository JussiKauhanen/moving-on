import * as THREE from "three";
import { seededRandom } from "../systems/rules.js";
// What waits above the clouds: a vast black monolith, etched with faint gold,
// splitting the sky with dark rays. Drawn unfogged and only ever glimpsed.
function etchedTexture() {
  if (typeof document === "undefined") return null; // headless tests
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 1024;
  const g = c.getContext("2d"),
    random = seededRandom(66);
  g.fillStyle = "#050507";
  g.fillRect(0, 0, 256, 1024);
  // Angular glyphs, densest near the middle, catching a little light.
  for (let i = 0; i < 260; i++) {
    const y = 512 + (random() - 0.5) * 900 * random(),
      x = 128 + (random() - 0.5) * 220 * (1 - Math.abs(y - 512) / 560),
      len = 8 + random() * 40,
      a = [0, Math.PI / 4, -Math.PI / 4, Math.PI / 2][Math.floor(random() * 4)];
    g.strokeStyle = `rgba(${190 + random() * 50}, ${150 + random() * 40}, 80, ${0.25 + random() * 0.55})`;
    g.lineWidth = 2 + random() * 4;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function glowTexture() {
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d"),
    grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.25, "rgba(225,220,240,0.6)");
  grad.addColorStop(1, "rgba(200,200,220,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}
export class Eldritch {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    const random = seededRandom(1313),
      basic = (opts) =>
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          fog: false,
          depthWrite: false,
          side: THREE.DoubleSide,
          ...opts,
        });
    this.materials = {
      glow: basic({ map: glowTexture(), color: "#f2eefa" }),
      light: basic({ color: "#ece6f6", blending: THREE.AdditiveBlending }),
      dark: basic({ color: "#07070b" }),
      stone: basic({ map: etchedTexture(), color: "#ffffff", side: THREE.FrontSide }),
      cloud: basic({ color: "#15151c" }),
    };
    const m = this.materials;
    // Pale light breaking through behind it.
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), m.glow);
    glow.position.z = -12;
    this.group.add(glow);
    // Rays fanning out from the centre: pale shafts and black streaks.
    this.rays = new THREE.Group();
    this.rays.position.z = -8;
    this.group.add(this.rays);
    for (let i = 0; i < 30; i++) {
      const a = (i / 30) * Math.PI * 2 + random() * 0.15,
        length = 90 + random() * 90,
        width = 6 + random() * 18,
        shape = new THREE.BufferGeometry();
      shape.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
          [0, 0, 0, length, -width / 2, 0, length, width / 2, 0],
          3,
        ),
      );
      const ray = new THREE.Mesh(shape, i % 3 === 0 ? m.light : m.dark);
      ray.rotation.z = a;
      ray.position.z = i % 3 === 0 ? 0.5 : 0;
      this.rays.add(ray);
    }
    // The monolith: an elongated, edge-on diamond.
    this.stone = new THREE.Mesh(new THREE.OctahedronGeometry(1, 0), m.stone);
    this.stone.scale.set(6, 46, 6);
    this.stone.rotation.y = Math.PI / 4;
    this.group.add(this.stone);
    // Storm clouds in front, so it is never seen cleanly.
    for (let i = 0; i < 16; i++) {
      const cloud = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 2), m.cloud);
      const side = i % 2 ? 1 : -1;
      cloud.position.set(
        side * (14 + random() * 55),
        (random() - 0.5) * 70,
        8 + random() * 8,
      );
      cloud.scale.set(18 + random() * 22, 6 + random() * 8, 5);
      this.group.add(cloud);
    }
  }
  // Place it high in the sky in the direction the camera will fall towards.
  place(camera, yaw) {
    const dir = new THREE.Vector3(
      -Math.sin(yaw) * Math.cos(0.95),
      Math.sin(0.95),
      -Math.cos(yaw) * Math.cos(0.95),
    );
    this.group.position.copy(camera.position).addScaledVector(dir, 95);
    this.group.lookAt(camera.position);
    this.group.scale.setScalar(1.1);
  }
  update(t, visibility) {
    this.group.visible = visibility > 0.001;
    if (!this.group.visible) return;
    const m = this.materials,
      pulse = 0.85 + 0.15 * Math.sin(t * 9);
    m.glow.opacity = 0.55 * visibility * pulse;
    m.light.opacity = 0.35 * visibility * pulse;
    m.dark.opacity = 0.85 * visibility;
    m.stone.opacity = visibility;
    m.cloud.opacity = 0.8 * visibility;
    this.rays.rotation.z = t * 0.12;
    this.stone.rotation.y = Math.PI / 4 + t * 0.15;
  }
}
