import * as THREE from "three";
import { actionPose, contactFraction } from "../systems/action-motion.js";
import { box, ball, cylinder, makeClippers } from "./primitives.js";
export class Hands {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      55,
      innerWidth / innerHeight,
      0.01,
      10,
    );
    this.scene.add(new THREE.HemisphereLight("#fff4d4", "#5c8178", 1.8));
    const light = new THREE.DirectionalLight("#ffe2b0", 1.6);
    light.position.set(-2, 3, 2);
    this.scene.add(light);
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.root.position.set(0, -0.5, -0.85);
    this.arms = [];
    this.fingers = [];
    this.heldBlades = [];
    this.holding = false;
    this.nextHand = 0;
    this.activeHand = 0;
    this.elapsed = 2;
    this.duration = 0.42;
    this.critical = 0;
    this.charge = 0; // 0–1 while a power cut winds up
    for (let side of [-1, 1]) {
      const g = new THREE.Group();
      this.root.add(g);
      g.position.set(side * 0.34, -0.04, 0.12);
      g.rotation.set(-0.55, 0, side * -0.25);
      cylinder(g, 0.12, 0.165, 0.65, "#536e64", [0, -0.34, 0.055], 8);
      cylinder(g, 0.145, 0.145, 0.105, "#c39058", [0, -0.035, 0], 8);
      cylinder(g, 0.147, 0.147, 0.026, "#dfb075", [0, 0.012, 0], 8);
      ball(g, 0.115, "#3c5059", [0, 0.095, 0], [0.82, 1.18, 0.7], 1);
      box(g, [0.12, 0.018, 0.025], "#657d7e", [0, 0.11, 0.076]);
      const fingers = [];
      for (let i = 0; i < 4; i++)
        fingers.push(
          box(
            g,
            [0.036, 0.11, 0.055],
            "#415863",
            [-0.059 + i * 0.039, 0.19, -0.012],
            [0.25, 0, 0],
          ),
        );
      this.fingers.push(fingers);
      box(
        g,
        [0.045, 0.1, 0.065],
        "#374c56",
        [side * -0.1, 0.08, -0.025],
        [0, 0, side * -0.6],
      );
      const bladeGeometry = new THREE.BufferGeometry();
      bladeGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
          [-0.018, 0, 0, 0.018, 0, 0, 0.04, 0.3, 0],
          3,
        ),
      );
      const blade = new THREE.Mesh(
        bladeGeometry,
        new THREE.MeshBasicMaterial({
          color: "#8dba60",
          side: THREE.DoubleSide,
        }),
      );
      blade.position.set(0, 0.18, -0.055);
      blade.visible = false;
      g.add(blade);
      this.heldBlades.push(blade);
      this.arms.push(g);
    }
    this.clippers = makeClippers(this.root);
    this.clippers.position.set(0, 0.12, -0.12);
    this.clippers.rotation.x = -0.7;
    this.clippers.scale.setScalar(0.85);
    this.clippers.visible = false;
    this.glow = new THREE.PointLight("#ffb34c", 0, 2);
    this.glow.position.set(0, 0, -0.3);
    this.scene.add(this.glow);
  }
  swing(duration, critical = false, tool = "hands") {
    this.elapsed = 0;
    this.holding = false;
    this.duration = duration;
    this.critical = critical ? 1 : 0;
    if (tool === "hands") {
      this.activeHand = this.nextHand;
      this.nextHand = 1 - this.nextHand;
    }
    return duration * contactFraction(tool);
  }
  update(dt, time, tool, moving) {
    this.elapsed += dt;
    const p = Math.min(1, this.elapsed / this.duration);
    const pose = actionPose(p, tool),
      clip = tool === "clippers";
    this.clippers.visible = clip;
    const bob = moving
      ? Math.sin(time * 9) * 0.008
      : Math.sin(time * 1.7) * 0.004;
    const recoil =
      clip && p > 0.23
        ? Math.exp(-(p - 0.23) * 13) * Math.sin((p - 0.23) * 35)
        : 0;
    this.root.position.set(
      0,
      -0.5 + bob + (clip ? pose.reach * 0.045 : 0),
      -0.85 - (clip ? pose.reach * 0.035 : 0),
    );
    this.root.rotation.z = clip ? recoil * 0.012 : 0;
    if (this.charge > 0) {
      // Wind up: draw back, lower, and tremble with stored force.
      const c = this.charge,
        shake = c * c * 0.012;
      this.root.position.x += (Math.random() - 0.5) * shake;
      this.root.position.y += -c * 0.07 + (Math.random() - 0.5) * shake;
      this.root.position.z += c * 0.12;
      this.root.rotation.x = c * 0.18;
    } else this.root.rotation.x = 0;
    for (let i = 0; i < 2; i++) {
      const side = i ? 1 : -1,
        g = this.arms[i];
      const act = clip ? pose.reach : i === this.activeHand ? pose.reach : 0;
      const lift = !clip && i === this.activeHand ? pose.lift : 0;
      g.position.set(
        side * ((clip ? 0.22 : 0.34) - act * (clip ? 0.12 : 0.22)),
        (clip ? -0.15 : -0.04) - act * 0.03 + lift * 0.22,
        (clip ? 0.04 : 0.12) - (clip ? 0 : act * 0.19) + lift * 0.08,
      );
      g.rotation.set(
        -0.55 - act * 0.4 + lift * 0.3,
        0,
        side * (-0.25 + act * 0.3),
      );
      const grip = clip ? 0.8 : i === this.activeHand ? pose.grip : 0;
      this.heldBlades[i].visible =
        !clip && this.holding && i === this.activeHand && p > 0.38 && p < 0.86;
      this.fingers[i].forEach((f) => {
        f.rotation.x = 0.25 + grip * 1.35;
        f.position.z = -0.012 - grip * 0.02;
      });
    }
    this.clippers.userData.halves.forEach(
      (h, i) => (h.rotation.z = (i ? 1 : -1) * (0.39 - pose.close * 0.385)),
    );
    this.clippers.position.y = 0.12 + recoil * 0.012;
    this.glow.intensity =
      this.critical * Math.max(0, pose.reach) * 5 + this.charge * this.charge * 6;
  }
  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
  render(renderer) {
    renderer.clearDepth();
    renderer.render(this.scene, this.camera);
  }
}
