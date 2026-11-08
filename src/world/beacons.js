import * as THREE from "three";
// A soft pillar of light over one buried find at a time, so the player is gently
// drawn to search. It fades as you get close and moves on once the item is taken.
const vertexShader = `varying float vY; varying vec3 vN; varying vec3 vV;
  void main(){ vY = uv.y; vec4 mv = modelViewMatrix * vec4(position, 1.);
  vV = normalize(-mv.xyz); vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * mv; }`;
const fragmentShader = `uniform vec3 color; uniform float strength; uniform float uTime;
  varying float vY; varying vec3 vN; varying vec3 vV;
  void main(){
    float facing = pow(abs(dot(vN, vV)), 1.2);
    float rise = (1. - vY) * (0.75 + 0.25 * sin(vY * 9. - uTime * 1.4));
    float a = facing * rise * strength;
    gl_FragColor = vec4(color, a);
  }`;
export class Beacons {
  constructor(scene, points) {
    this.time = { value: 0 };
    this.items = [];
    const geometry = new THREE.CylinderGeometry(0.4, 0.6, 16, 16, 1, true);
    geometry.translate(0, 8, 0);
    for (const point of points) {
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {
          color: { value: new THREE.Color("#ffb83d") },
          strength: { value: 0 },
          uTime: this.time,
        },
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(point.position.x, 0, point.position.z);
      mesh.renderOrder = 3;
      scene.add(mesh);
      this.items.push({ point, mesh });
    }
  }
  get found() {
    return this.items.filter((b) => b.point.taken).length;
  }
  get total() {
    return this.items.length;
  }
  // Only one pillar at a time: the nearest find still waiting. When it is
  // picked up, the next nearest one lights.
  update(time, camera) {
    this.time.value = time;
    if (!this.active || this.active.point.taken) {
      let best = null,
        bestD = Infinity;
      for (const b of this.items) {
        if (b.point.taken) continue;
        const d = Math.hypot(
          camera.position.x - b.mesh.position.x,
          camera.position.z - b.mesh.position.z,
        );
        if (d < bestD) {
          bestD = d;
          best = b;
        }
      }
      this.active = best;
    }
    for (const b of this.items) {
      const { point, mesh } = b,
        d = Math.hypot(
          camera.position.x - mesh.position.x,
          camera.position.z - mesh.position.z,
        ),
        // Clear from afar, gone at arm's length so it never blinds you.
        near = THREE.MathUtils.smoothstep(d, 1.5, 6),
        target = b === this.active && !point.taken ? 0.95 * near : 0;
      const u = mesh.material.uniforms.strength;
      u.value = THREE.MathUtils.lerp(u.value, target, 0.05);
      mesh.visible = u.value > 0.005;
    }
  }
}
