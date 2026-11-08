import * as THREE from "three";
const LITTER = 5000,
  WISPS = 120,
  LITTER_COLOURS = ["#a7c46e", "#8db06a", "#c2c87e", "#7d9d63"].map(
    (c) => new THREE.Color(c),
  );
export class Effects {
  constructor(scene) {
    this.particles = [];
    this.dummy = new THREE.Object3D();
    // Rounded, low-opacity dust puffs; no bright rectangular paper particles.
    this.puffs = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        color: "#e8e5cb",
        transparent: true,
        opacity: 0.32,
        depthWrite: false,
      }),
      140,
    );
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [-0.012, 0, 0, 0.012, 0, 0, 0.024, 0.12, 0],
        3,
      ),
    );
    this.slivers = new THREE.InstancedMesh(
      g,
      new THREE.MeshBasicMaterial({ color: "#78945d", side: THREE.DoubleSide }),
      140,
    );
    // Clippings left lying on the ground after a cut; the oldest are recycled.
    const piece = new THREE.PlaneGeometry(0.035, 0.17);
    piece.rotateX(-Math.PI / 2);
    this.litter = new THREE.InstancedMesh(
      piece,
      new THREE.MeshLambertMaterial({ color: "#ffffff", side: THREE.DoubleSide }),
      LITTER,
    );
    this.litter.count = 0;
    this.litterNext = 0;
    this.litter.frustumCulled = false;
    this.litter.receiveShadow = true;
    scene.add(this.litter);
    // Dark wisps drawn out of withering grass, drifting towards the player.
    this.wispParticles = [];
    this.wisps = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.MeshBasicMaterial({
        color: "#140e1a",
        transparent: true,
        opacity: 0.82,
        depthWrite: false,
      }),
      WISPS,
    );
    this.wisps.count = 0;
    this.wisps.frustumCulled = false;
    scene.add(this.wisps);
    // Expanding ground rings for the power cut.
    this.rings = [];
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.86, 1, 48),
        new THREE.MeshBasicMaterial({
          color: i ? "#fff0b8" : "#ffc35a",
          transparent: true,
          opacity: 0,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          side: THREE.DoubleSide,
        }),
      );
      ring.rotation.x = -Math.PI / 2;
      ring.visible = false;
      ring.userData = { age: 1, delay: 0 };
      scene.add(ring);
      this.rings.push(ring);
    }
    for (const mesh of [this.puffs, this.slivers]) {
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.count = 0;
      scene.add(mesh);
    }
  }
  burst(blades, critical = false, quiet = false) {
    if (!blades.length) return;
    // A fixed budget per action, rather than multiplying debris by grass count.
    const count = quiet
      ? 2
      : Math.min(7, 2 + Math.ceil(Math.sqrt(blades.length))) + (critical ? 3 : 0);
    for (let i = 0; i < count; i++) {
      const t = blades[Math.floor((i * blades.length) / count)],
        life = (critical ? 0.6 : 0.3) + Math.random() * 0.18;
      this.particles.push({
        kind: "puff",
        x: t.x,
        y: 0.25 + Math.random() * 0.15,
        z: t.z,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 0.3 + Math.random() * 0.2,
        vz: (Math.random() - 0.5) * 0.5,
        life,
        max: life,
        // Power cuts: the same dust, just bigger and slower to settle.
        size: (quiet ? 0.07 : critical ? 0.24 : 0.11) + Math.random() * 0.06,
        color: "#e8e5cb",
      });
    }
    for (
      let i = 0;
      i < (quiet ? 0 : Math.min(3, blades.length));
      i++
    ) {
      const t = blades[Math.floor(Math.random() * blades.length)],
        life = 0.2 + Math.random() * 0.17;
      this.particles.push({
        kind: "sliver",
        x: t.x,
        y: 0.3,
        z: t.z,
        vx: (Math.random() - 0.5) * 1.2,
        vy: 0.55 + Math.random() * 0.6,
        vz: (Math.random() - 0.5) * 1.2,
        life,
        max: life,
        size: 0.7,
        color: "#78945d",
      });
    }
    this.particles = this.particles.slice(-140);
  }
  // Leave a few cut pieces lying where the blades fell.
  scatter(blades) {
    const d = this.dummy,
      n = Math.min(16, blades.length);
    for (let i = 0; i < n; i++) {
      const t = blades[Math.floor((i * blades.length) / n)],
        index = this.litterNext;
      this.litterNext = (this.litterNext + 1) % LITTER;
      this.litter.count = Math.max(this.litter.count, index + 1);
      d.position.set(
        t.x + (Math.random() - 0.5) * 0.35,
        0.035 + Math.random() * 0.02,
        t.z + (Math.random() - 0.5) * 0.35,
      );
      d.rotation.set((Math.random() - 0.5) * 0.3, Math.random() * Math.PI, 0);
      d.scale.setScalar(0.7 + Math.random() * 0.6);
      d.updateMatrix();
      this.litter.setMatrixAt(index, d.matrix);
      this.litter.setColorAt(
        index,
        LITTER_COLOURS[Math.floor(Math.random() * LITTER_COLOURS.length)],
      );
    }
    this.litter.instanceMatrix.needsUpdate = true;
    if (this.litter.instanceColor) this.litter.instanceColor.needsUpdate = true;
  }
  wisp(x, y, z) {
    if (this.wispParticles.length >= WISPS) return;
    this.wispParticles.push({
      p: new THREE.Vector3(x, y, z),
      v: new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        0.6 + Math.random() * 0.5,
        (Math.random() - 0.5) * 0.4,
      ),
      age: 0,
      life: 2.2 + Math.random() * 1.2,
      size: 0.035 + Math.random() * 0.035,
      phase: Math.random() * 6.28,
    });
  }
  // The release of a power cut: ground rings and clippings flung outward.
  powerBurst(x, z) {
    this.rings.forEach((ring, i) => {
      ring.position.set(x, 0.7 + i * 0.12, z);
      ring.userData = { age: 0, delay: i * 0.09, speed: 1 - i * 0.18 };
      ring.visible = true;
    });
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2 + Math.random() * 0.2,
        speed = 2.5 + Math.random() * 2.5,
        life = 0.45 + Math.random() * 0.35;
      this.particles.push({
        kind: "sliver",
        x: x + Math.cos(a) * 0.4,
        y: 0.35 + Math.random() * 0.3,
        z: z + Math.sin(a) * 0.4,
        vx: Math.cos(a) * speed,
        vy: 1.6 + Math.random() * 2.2,
        vz: Math.sin(a) * speed,
        life,
        max: life,
        size: 0.9 + Math.random() * 0.6,
        color: i % 3 ? "#9cc56c" : "#ffd36e",
      });
    }
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2,
        life = 0.5 + Math.random() * 0.25;
      this.particles.push({
        kind: "puff",
        x: x + Math.cos(a) * 0.6,
        y: 0.25,
        z: z + Math.sin(a) * 0.6,
        vx: Math.cos(a) * 2.6,
        vy: 0.35,
        vz: Math.sin(a) * 2.6,
        life,
        max: life,
        size: 0.18 + Math.random() * 0.1,
        color: "#f7e2b0",
      });
    }
    this.particles = this.particles.slice(-140);
  }
  update(dt, toward) {
    // Wisps rise, then are pulled in towards the player, curling as they come.
    const pull = new THREE.Vector3();
    let w = 0;
    this.wispParticles = this.wispParticles.filter((q) => {
      q.age += dt;
      if (toward) {
        pull.copy(toward).sub(q.p);
        const dist = pull.length();
        if (dist < 0.45) return false;
        pull.normalize().multiplyScalar(Math.min(1, q.age * 0.9) * 3.2);
        q.v.addScaledVector(pull, dt);
        q.v.x += Math.sin(q.age * 6 + q.phase) * dt * 1.4;
        q.v.z += Math.cos(q.age * 5 + q.phase) * dt * 1.4;
      }
      q.v.multiplyScalar(1 - dt * 0.9);
      q.p.addScaledVector(q.v, dt);
      return q.age < q.life;
    });
    for (const q of this.wispParticles) {
      const fade = Math.min(1, q.age * 4) * (1 - Math.max(0, (q.age - q.life + 0.5) / 0.5));
      this.dummy.position.copy(q.p);
      this.dummy.rotation.set(q.age * 3, q.phase, q.age * 2);
      this.dummy.scale.setScalar(q.size * Math.max(0.05, fade));
      this.dummy.updateMatrix();
      this.wisps.setMatrixAt(w++, this.dummy.matrix);
    }
    this.wisps.count = w;
    this.wisps.instanceMatrix.needsUpdate = true;
    for (const ring of this.rings) {
      const u = ring.userData;
      if (!ring.visible) continue;
      u.age += dt;
      const t = Math.max(0, u.age - u.delay) / 0.75;
      if (t >= 1) {
        ring.visible = false;
        continue;
      }
      const eased = 1 - Math.pow(1 - t, 3);
      ring.scale.setScalar(0.3 + eased * 5.5 * u.speed);
      ring.material.opacity = (u.age < u.delay ? 0 : 1) * (1 - t) * 0.4;
    }
    this.particles = this.particles.filter((p) => p.life > 0);
    let puff = 0,
      sliver = 0;
    for (const p of this.particles) {
      p.life -= dt;
      const age = 1 - Math.max(0, p.life) / p.max;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      if (p.kind === "sliver") p.vy -= 5 * dt;
      this.dummy.position.set(p.x, p.y, p.z);
      this.dummy.rotation.set(age * 2, p.x, p.kind === "sliver" ? age * 3 : 0);
      const size =
        p.kind === "puff"
          ? p.size * (0.5 + age * 1.7) * Math.pow(1 - age, 0.5)
          : p.size * (1 - age);
      this.dummy.scale.set(size, size * (p.kind === "puff" ? 0.8 : 1), size);
      this.dummy.updateMatrix();
      const mesh = p.kind === "puff" ? this.puffs : this.slivers,
        index = p.kind === "puff" ? puff++ : sliver++;
      mesh.setMatrixAt(index, this.dummy.matrix);
      mesh.setColorAt(index, new THREE.Color(p.color));
    }
    this.puffs.count = puff;
    this.slivers.count = sliver;
    for (const mesh of [this.puffs, this.slivers]) {
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
  }
}
