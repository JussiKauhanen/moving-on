import * as THREE from "three";
import { clamp } from "./rules.js";
export class Player {
  constructor(camera, level, world, canvas) {
    this.camera = camera;
    this.level = level;
    this.world = world;
    this.canvas = canvas;
    this.keys = new Set();
    this.enabled = true;
    this.area = null;
    this.yaw = 0;
    this.pitch = -0.08;
    this.velocity = new THREE.Vector3();
    this.walkTime = 0;
    this.moving = false;
    this.sensitivity = 0.0021;
    this.bob = true;
    this.reset();
    addEventListener("keydown", (e) => {
      if (e.target instanceof HTMLInputElement) return;
      this.keys.add(e.code);
      if (["Space", "Tab", "ArrowUp", "ArrowDown"].includes(e.code))
        e.preventDefault();
    });
    addEventListener("keyup", (e) => this.keys.delete(e.code));
    addEventListener("blur", () => this.keys.clear());
    document.addEventListener("pointerlockchange", () => {
      if (!this.locked) {
        this.keys.clear();
        this.velocity.set(0, 0, 0);
      }
    });
    addEventListener("mousemove", (e) => {
      if (this.locked && this.enabled) {
        this.yaw -= e.movementX * this.sensitivity;
        this.pitch = clamp(
          this.pitch - e.movementY * this.sensitivity,
          -1.35,
          1.2,
        );
      }
    });
  }
  get locked() {
    return document.pointerLockElement === this.canvas;
  }
  async lock() {
    try {
      await this.canvas.requestPointerLock();
      return this.locked;
    } catch {
      return false;
    }
  }
  reset() {
    this.camera.position.set(...this.level.spawn);
    this.yaw = this.level.yaw;
    this.pitch = -0.08;
    this.velocity.set(0, 0, 0);
    this.orient();
  }
  orient() {
    this.camera.rotation.set(this.pitch, this.yaw, 0, "YXZ");
  }
  blocked(x, z) {
    const r = 0.28;
    // Another space (the cove) supplies its own floor and colliders.
    if (this.area)
      return (
        !this.area.walkable(x, z) ||
        this.area.colliders.some(
          (c) =>
            Math.abs(x - c.x) < c.w / 2 + r && Math.abs(z - c.z) < c.d / 2 + r,
        )
      );
    const b = this.level.bounds;
    if (x < b.minX + r || x > b.maxX - r || z < b.minZ + r || z > b.maxZ - r)
      return true;
    if (
      !this.world.gateOpen &&
      Math.abs(z - this.level.gate.z) < r + 0.12 &&
      Math.abs(x) < this.level.gate.width / 2
    )
      return true;
    return this.world.colliders.some(
      (c) => Math.abs(x - c.x) < c.w / 2 + r && Math.abs(z - c.z) < c.d / 2 + r,
    );
  }
  update(dt) {
    if (!this.enabled) {
      this.moving = false;
      return;
    }
    this.orient();
    if (!this.locked) {
      this.moving = false;
      return;
    }
    const forward =
      Number(this.keys.has("KeyW") || this.keys.has("ArrowUp")) -
      Number(this.keys.has("KeyS") || this.keys.has("ArrowDown"));
    const side =
      Number(this.keys.has("KeyD") || this.keys.has("ArrowRight")) -
      Number(this.keys.has("KeyA") || this.keys.has("ArrowLeft"));
    const len = Math.hypot(forward, side) || 1,
      speed = this.keys.has("ShiftLeft") ? 4.5 : 2.7;
    const tx =
        ((-Math.sin(this.yaw) * forward + Math.cos(this.yaw) * side) / len) *
        speed,
      tz =
        ((-Math.cos(this.yaw) * forward - Math.sin(this.yaw) * side) / len) *
        speed;
    this.velocity.x = THREE.MathUtils.damp(this.velocity.x, tx, 12, dt);
    this.velocity.z = THREE.MathUtils.damp(this.velocity.z, tz, 12, dt);
    const p = this.camera.position,
      dx = this.velocity.x * dt,
      dz = this.velocity.z * dt;
    if (!this.blocked(p.x + dx, p.z)) p.x += dx;
    if (!this.blocked(p.x, p.z + dz)) p.z += dz;
    this.moving = Math.hypot(dx, dz) > 0.007;
    this.walkTime += this.moving ? dt * speed * 2.7 : 0;
    p.y =
      1.68 + (this.bob && this.moving ? Math.sin(this.walkTime) * 0.025 : 0);
  }
}
