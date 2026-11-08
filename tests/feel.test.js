import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { actionPose, contactFraction } from "../src/systems/action-motion.js";
import { toolStats } from "../src/systems/rules.js";
import { Flowers } from "../src/world/flowers.js";
import { FlowerIncident } from "../src/systems/flower-incident.js";
test("blade closure and grasp reach coincide with the contact frame", () => {
  assert.equal(actionPose(contactFraction("clippers"), "clippers").close, 1);
  assert.equal(actionPose(0.32, "clippers").close, 1);
  assert.equal(actionPose(1, "clippers").close, 0);
  assert.equal(actionPose(contactFraction("hands"), "hands").reach, 1);
  assert.equal(actionPose(1, "hands").reach, 0);
});
test("maintenance is a modest boost and wider sweeps require skill investment", () => {
  const s = { tool: "clippers", items: new Set(), skills: {} };
  const base = toolStats(s);
  assert.equal(base.limit, 9);
  s.items.add("oil");
  s.items.add("stone");
  const maintained = toolStats(s);
  assert.ok(Math.abs(maintained.cooldown / base.cooldown - 0.92) < 1e-10);
  assert.equal(maintained.limit, 10);
  assert.ok(maintained.radius / base.radius < 1.1);
  s.skills.reach = 2;
  assert.equal(toolStats(s).limit, 16);
  s.tool = "hands";
  assert.equal(toolStats(s).limit, 1);
});
test("flowers are cuttable once, with their own count", () => {
  const flowers = new Flowers(new THREE.Scene(), [
    { x: 0, z: 0, height: 0.6, color: "#e9ad94", cut: false, flower: true },
  ]);
  const p = flowers.near(0, 0, 0.4)[0];
  assert.ok(p);
  flowers.remove(p);
  flowers.remove(p);
  assert.equal(flowers.cutCount, 1);
  assert.equal(flowers.near(0, 0, 0.4).length, 0);
});
test("flower incident restores exact daylight, view, HUD and controls without messages", () => {
  const camera = new THREE.PerspectiveCamera();
  camera.position.set(2, 1.68, 3);
  const player = {
    enabled: true,
    keys: new Set(["KeyW"]),
    velocity: new THREE.Vector3(1, 0, 1),
    yaw: 0.8,
    pitch: -0.4,
    orient() {
      camera.rotation.set(this.pitch, this.yaw, 0, "YXZ");
    },
  };
  const top = new THREE.Color("#aabbcc"),
    bottom = new THREE.Color("#ddccaa"),
    fog = new THREE.Color("#889977");
  const sky = {
      material: {
        uniforms: {
          top: { value: top.clone() },
          bottom: { value: bottom.clone() },
        },
      },
    },
    sun = { intensity: 2.1 },
    hemi = { intensity: 1.5 },
    scene = { fog: { color: fog.clone() }, add() {} },
    renderer = { toneMappingExposure: 1.03 },
    veil = { hidden: true, style: {} },
    hud = { style: {} },
    audio = { unsettle() {}, groan() {} };
  const incident = new FlowerIncident({
    player,
    camera,
    sky,
    sun,
    hemi,
    scene,
    renderer,
    audio,
    veil,
    hud,
  });
  incident.start();
  assert.equal(player.enabled, false);
  // Mid-fall the view tips up towards the sky, and something is briefly there.
  incident.update(1.2);
  assert.ok(camera.rotation.x > 0.4);
  assert.equal(incident.horror.group.visible, true);
  incident.update(1);
  assert.equal(incident.horror.group.visible, false);
  assert.equal(veil.style.opacity, "1");
  assert.ok(sun.intensity < 0.1);
  assert.ok(camera.position.y < 1);
  const elapsed = incident.elapsed;
  incident.update(0);
  assert.equal(incident.elapsed, elapsed);
  incident.update(3.3);
  assert.equal(incident.active, false);
  assert.equal(player.enabled, true);
  assert.equal(veil.hidden, true);
  assert.equal(hud.style.opacity, "");
  assert.ok(top.equals(sky.material.uniforms.top.value));
  assert.ok(fog.equals(scene.fog.color));
  assert.equal(sun.intensity, 2.1);
  assert.equal(hemi.intensity, 1.5);
  assert.equal(renderer.toneMappingExposure, 1.03);
  assert.deepEqual(camera.position.toArray(), [2, 1.68, 3]);
  assert.equal(player.keys.size, 0);
});
