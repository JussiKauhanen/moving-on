import * as THREE from "three";
import { Eldritch } from "../world/eldritch.js";
const smooth = (a, b, t) => THREE.MathUtils.smoothstep(t, a, b);
// Deliberately silent: this sequence never writes narrative text or a notification.
export class FlowerIncident {
  constructor({
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
    clouds,
  }) {
    Object.assign(this, {
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
      clouds,
    });
    this.horror = new Eldritch(scene);
    this.active = false;
    this.elapsed = 0;
  }
  start() {
    if (this.active) return;
    this.active = true;
    this.elapsed = 0;
    this.saved = {
      position: this.camera.position.clone(),
      yaw: this.player.yaw,
      pitch: this.player.pitch,
      top: this.sky.material.uniforms.top.value.clone(),
      bottom: this.sky.material.uniforms.bottom.value.clone(),
      fog: this.scene.fog.color.clone(),
      sun: this.sun.intensity,
      hemi: this.hemi.intensity,
      exposure: this.renderer.toneMappingExposure,
      cloud: this.clouds?.material.color.clone(),
    };
    // As you fall backwards, the sky is the last thing you see.
    this.horror.place(this.camera, this.saved.yaw);
    this.player.enabled = false;
    this.player.keys.clear();
    this.player.velocity.set(0, 0, 0);
    this.hud.style.opacity = "0";
    this.veil.hidden = false;
    this.groaned = false;
    this.audio.unsettle();
  }
  update(dt) {
    if (!this.active) return;
    this.elapsed += dt;
    const t = this.elapsed,
      fall = smooth(0.2, 1.25, t),
      wake = smooth(3.3, 5.4, t),
      dark = smooth(0, 0.8, t) * (1 - wake);
    this.sky.material.uniforms.top.value
      .copy(this.saved.top)
      .lerp(new THREE.Color("#090e20"), dark);
    this.sky.material.uniforms.bottom.value
      .copy(this.saved.bottom)
      .lerp(new THREE.Color("#101628"), dark);
    this.scene.fog.color
      .copy(this.saved.fog)
      .lerp(new THREE.Color("#0b1420"), dark);
    this.sun.intensity = this.saved.sun * (1 - dark * 0.99);
    this.hemi.intensity = this.saved.hemi * (1 - dark * 0.94);
    this.renderer.toneMappingExposure = this.saved.exposure * (1 - dark * 0.5);
    if (this.clouds)
      this.clouds.material.color
        .copy(this.saved.cloud)
        .lerp(new THREE.Color("#1b1d33"), dark);
    // Falling backwards: the view tips up into the darkened sky, then fades.
    const tip = fall * (1 - wake);
    this.camera.position.copy(this.saved.position);
    this.camera.position.y -= tip * 1.05;
    this.camera.rotation.set(
      THREE.MathUtils.lerp(this.saved.pitch, 0.95, tip),
      this.saved.yaw + tip * 0.12,
      tip * 0.28,
      "YXZ",
    );
    // A glimpse only: it is there while you fall, gone before you hit the ground.
    this.horror.update(t, smooth(0.7, 1.05, t) * (1 - smooth(1.45, 1.8, t)));
    if (t > 0.95 && !this.groaned) {
      this.groaned = true;
      this.audio.groan?.();
    }
    this.veil.style.opacity = String(
      smooth(1.45, 2.1, t) * (1 - smooth(3.3, 5, t)),
    );
    if (t >= 5.4) {
      this.active = false;
      this.player.enabled = true;
      this.player.yaw = this.saved.yaw;
      this.player.pitch = this.saved.pitch;
      this.player.keys.clear();
      this.player.velocity.set(0, 0, 0);
      this.camera.position.copy(this.saved.position);
      this.player.orient();
      this.hud.style.opacity = "";
      this.veil.hidden = true;
      this.horror.update(0, 0);
      if (this.clouds) this.clouds.material.color.copy(this.saved.cloud);
    }
  }
}
