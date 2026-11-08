import * as THREE from "three";
import { seededRandom } from "../systems/rules.js";
// Something in the clouds. Built from soft masses, hanging tendrils and a few
// pale eyes; drawn faintly, unfogged, and only ever shown for a second or so.
export class Eldritch {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    this.group.renderOrder = -1;
    scene.add(this.group);
    const random = seededRandom(1313);
    const flesh = new THREE.MeshBasicMaterial({
      color: "#2a2340",
      transparent: true,
      opacity: 0,
      fog: false,
      depthWrite: false,
    });
    const shade = new THREE.MeshBasicMaterial({
      color: "#16152a",
      transparent: true,
      opacity: 0,
      fog: false,
      depthWrite: false,
    });
    const eye = new THREE.MeshBasicMaterial({
      color: "#c9c39a",
      transparent: true,
      opacity: 0,
      fog: false,
      depthWrite: false,
    });
    const pupil = new THREE.MeshBasicMaterial({
      color: "#0b0a14",
      transparent: true,
      opacity: 0,
      fog: false,
      depthWrite: false,
    });
    const cloud = new THREE.MeshBasicMaterial({
      color: "#272b47",
      transparent: true,
      opacity: 0,
      fog: false,
      depthWrite: false,
    });
    this.materials = { flesh, shade, eye, pupil, cloud };
    this.body = new THREE.Group();
    this.group.add(this.body);
    // The mass: lumpy, overlapping, a little like weather.
    for (let i = 0; i < 16; i++) {
      const g = new THREE.IcosahedronGeometry(1, 2),
        p = g.attributes.position;
      for (let k = 0; k < p.count; k++) {
        const x = p.getX(k),
          y = p.getY(k),
          z = p.getZ(k),
          n = 1 + Math.sin(x * 4 + i) * 0.12 + Math.sin(y * 5 - i) * 0.1;
        p.setXYZ(k, x * n, y * n, z * n);
      }
      const m = new THREE.Mesh(g, i % 3 ? flesh : shade);
      const a = (i / 16) * Math.PI * 2 + random();
      m.position.set(
        Math.cos(a) * (6 + random() * 9),
        Math.sin(a * 2) * 4 + random() * 4,
        (random() - 0.5) * 6,
      );
      m.scale.set(7 + random() * 7, 5 + random() * 5, 6);
      this.body.add(m);
    }
    // Tendrils hang and curl beneath it.
    this.tendrils = [];
    for (let i = 0; i < 9; i++) {
      const sx = (i - 4) * 4.2 + (random() - 0.5) * 2,
        len = 18 + random() * 20,
        points = [];
      for (let k = 0; k <= 6; k++) {
        const t = k / 6;
        points.push(
          new THREE.Vector3(
            sx + Math.sin(t * 3 + i) * 3 * t,
            -4 - t * len,
            Math.cos(t * 2.5 + i) * 2 * t,
          ),
        );
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 24, 0.9 + random() * 0.6, 5),
        i % 2 ? flesh : shade,
      );
      const holder = new THREE.Group();
      holder.add(tube);
      holder.userData.phase = random() * 6;
      this.body.add(holder);
      this.tendrils.push(holder);
    }
    // Eyes, unevenly placed and sized. Some will not be open.
    this.eyes = [];
    for (let i = 0; i < 8; i++) {
      const holder = new THREE.Group(),
        r = 0.5 + random() * 1.1;
      holder.position.set(
        (random() - 0.5) * 34,
        (random() - 0.35) * 14,
        5 + random() * 2,
      );
      const white = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), eye);
      white.scale.set(1.5, 1, 0.4);
      const slit = new THREE.Mesh(new THREE.SphereGeometry(r * 0.55, 10, 6), pupil);
      slit.scale.set(0.35, 1.5, 0.3);
      slit.position.z = r * 0.35;
      holder.add(white, slit);
      holder.userData.delay = random() * 0.5;
      this.body.add(holder);
      this.eyes.push(holder);
    }
    // Darkened clouds drift in front, so it is never seen whole.
    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 2), cloud);
      m.position.set(
        (random() - 0.5) * 60,
        -8 + random() * 16,
        10 + random() * 6,
      );
      m.scale.set(12 + random() * 12, 3 + random() * 3, 4);
      this.group.add(m);
    }
  }
  // Place it high in the sky in the direction the camera will fall towards.
  place(camera, yaw) {
    const dir = new THREE.Vector3(
      -Math.sin(yaw) * Math.cos(0.95),
      Math.sin(0.95),
      -Math.cos(yaw) * Math.cos(0.95),
    );
    this.group.position.copy(camera.position).addScaledVector(dir, 92);
    this.group.lookAt(camera.position);
    this.group.scale.setScalar(2.3); // bigger than the frame: never seen whole
  }
  update(t, visibility) {
    this.group.visible = visibility > 0.001;
    if (!this.group.visible) return;
    const m = this.materials;
    m.flesh.opacity = 0.42 * visibility;
    m.shade.opacity = 0.55 * visibility;
    m.cloud.opacity = 0.8 * visibility;
    m.eye.opacity = 0.2 * visibility;
    m.pupil.opacity = 0.35 * visibility;
    this.body.position.y = Math.sin(t * 0.8) * 1.2;
    this.body.rotation.z = Math.sin(t * 0.3) * 0.04;
    for (const tendril of this.tendrils)
      tendril.rotation.z = Math.sin(t * 1.4 + tendril.userData.phase) * 0.12;
    for (const e of this.eyes) {
      // Eyes open late and unevenly, then one by one close.
      const open = THREE.MathUtils.smoothstep(t, 0.85 + e.userData.delay, 1.15 + e.userData.delay);
      e.scale.y = Math.max(0.05, open);
    }
  }
}
