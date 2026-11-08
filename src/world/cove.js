import * as THREE from "three";
import { box, ball, cylinder, material, mesh } from "./primitives.js";
import { seededRandom } from "../systems/rules.js";
// The cove beneath the well: its own small scene, entered by rope.
// Local coordinates; the floor is y = 0 and north is negative z, as in the garden.
export const COVE = {
  spawn: [0.9, 1.68, 4.3],
  yaw: 0.12,
  shadowTint: "#5a2a5e", // post-process shadow tint while underground
  pitch: -0.12,
  rope: [0, 3.15],
  pool: { position: [1.7, -2.4], radius: [4.6, 3.1] },
  pillar: [2.6, -2.9],
  pod: [-4.1, -3.4],
  // Walkable floor: an ellipse inside the cave walls.
  floor: { center: [0, -0.4], radius: [7.6, 6.7] },
};
const STONE = ["#4a3550", "#56405e", "#664f6e", "#4f3a56"];
function waterMaterial(time) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: time,
      deep: { value: new THREE.Color("#0f6f86") },
      shallow: { value: new THREE.Color("#3fe0d6") },
      fogColor: { value: new THREE.Color("#1c1630") },
    },
    vertexShader: `varying vec2 vUv; varying vec3 vWorld; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `
      uniform float uTime; uniform vec3 deep; uniform vec3 shallow;
      varying vec2 vUv; varying vec3 vWorld;
      void main(){
        float r = length(vUv - .5) * 2.;
        float bands = sin(vWorld.x * 2.1 + uTime * .7 + sin(vWorld.z * 1.7 + uTime * .5) * 1.4);
        float glints = smoothstep(.88, 1., bands) * .35;
        vec3 c = mix(shallow, deep, smoothstep(.25, 1., 1. - r) * .75);
        c += glints;
        c = mix(c, shallow * 1.2, smoothstep(.82, 1., r) * .6);
        gl_FragColor = vec4(c, .86);
        #include <colorspace_fragment>
      }`,
  });
}
function shaftMaterial(color, strength) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    uniforms: {
      color: { value: new THREE.Color(color) },
      strength: { value: strength },
      uTime: { value: 0 },
    },
    vertexShader: `varying float vY; varying vec3 vNormalV; varying vec3 vView;
      void main(){ vY = uv.y; vec4 mv = modelViewMatrix * vec4(position,1.); vView = normalize(-mv.xyz); vNormalV = normalize(normalMatrix * normal); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 color; uniform float strength; uniform float uTime;
      varying float vY; varying vec3 vNormalV; varying vec3 vView;
      void main(){
        float facing = pow(abs(dot(vNormalV, vView)), 1.6);
        float fade = smoothstep(0., .55, vY) * (.55 + .45 * vY);
        float flicker = .92 + .08 * sin(uTime * 1.3 + vY * 6.);
        gl_FragColor = vec4(color * facing * fade * strength * flicker, 1.);
      }`,
  });
}
export class Cove {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#170f1c");
    this.scene.fog = new THREE.Fog("#24182e", 7, 26);
    this.time = { value: 0 };
    this.interactables = [];
    this.colliders = [];
    const random = seededRandom(404),
      s = this.scene,
      root = new THREE.Group();
    s.add(root);
    s.add(new THREE.HemisphereLight("#c39ad0", "#2a1a30", 1.25));
    const waterGlow = new THREE.PointLight("#7fd0d8", 2.6, 9, 1.4);
    waterGlow.position.set(COVE.pool.position[0], 1.4, COVE.pool.position[1]);
    s.add(waterGlow);
    const wellLight = new THREE.PointLight("#b9c7e6", 3, 6, 1.5);
    wellLight.position.set(COVE.rope[0], 5, COVE.rope[1]);
    s.add(wellLight);

    // Floor with an elliptical hole for the pool basin.
    const [px, pz] = COVE.pool.position,
      [prx, prz] = COVE.pool.radius;
    const outline = new THREE.Shape();
    outline.absellipse(0, 0, 11, 10, 0, Math.PI * 2);
    const hole = new THREE.Path();
    hole.absellipse(px, -pz, prx, prz, 0, Math.PI * 2, true);
    outline.holes.push(hole);
    const floor = mesh(
      root,
      new THREE.ShapeGeometry(outline, 48),
      "#56405e",
      [0, 0, 0],
      [-Math.PI / 2, 0, 0],
    );
    floor.receiveShadow = true;
    // The basin, darker and deep under the glowing surface.
    const basin = mesh(
      root,
      new THREE.CircleGeometry(1, 40),
      "#0d2a3a",
      [px, -1.4, pz],
      [-Math.PI / 2, 0, 0],
    );
    basin.scale.set(prx, prz, 1);
    const basinWall = new THREE.Mesh(
      new THREE.CylinderGeometry(1, 0.9, 1.4, 40, 1, true),
      new THREE.MeshBasicMaterial({ color: "#123446", side: THREE.BackSide }),
    );
    basinWall.position.set(px, -0.7, pz);
    basinWall.scale.set(prx, 1, prz);
    root.add(basinWall);
    this.water = new THREE.Mesh(
      new THREE.CircleGeometry(1, 48),
      waterMaterial(this.time),
    );
    this.water.rotation.x = -Math.PI / 2;
    this.water.position.set(px, -0.08, pz);
    this.water.scale.set(prx, prz, 1);
    this.water.renderOrder = 2;
    s.add(this.water);
    // Rim stones.
    for (let i = 0; i < 34; i++) {
      const a = (i / 34) * Math.PI * 2;
      ball(
        root,
        0.28 + random() * 0.22,
        STONE[i % 4],
        [px + Math.cos(a) * prx * 1.02, 0.02, pz + Math.sin(a) * prz * 1.02],
        [1.3, 0.45, 1],
      );
    }
    this.colliders.push(
      { x: px, z: pz, w: prx * 2 - 0.6, d: prz * 1.15 },
      { x: px, z: pz, w: prx * 1.35, d: prz * 2 - 0.5 },
    );

    // Cave shell: a lumpy inverted dome with horizontal strata.
    const shell = new THREE.IcosahedronGeometry(1, 5);
    const pos = shell.attributes.position,
      colors = [],
      v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const n =
        Math.sin(v.x * 7.1 + v.y * 3.3) * 0.05 +
        Math.sin(v.z * 9.3 - v.y * 4.1) * 0.04 +
        Math.sin((v.x + v.z) * 15.7) * 0.02;
      v.multiplyScalar(1 + n);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    const shellMesh = new THREE.Mesh(
      shell,
      new THREE.MeshLambertMaterial({
        vertexColors: true,
        side: THREE.BackSide,
        flatShading: true,
      }),
    );
    const sp = shellMesh.geometry.attributes.position;
    for (let i = 0; i < sp.count; i += 3) {
      const y = (sp.getY(i) + sp.getY(i + 1) + sp.getY(i + 2)) / 3;
      const band = Math.floor((y * 6.5 + 10) * 1.6 + Math.sin(i * 0.37) * 0.35);
      const c = new THREE.Color(
        ["#4a3550", "#5e4566", "#735a7a", "#523d5a", "#806a8a"][
          ((band % 5) + 5) % 5
        ],
      );
      for (let k = 0; k < 3; k++) colors.push(c.r, c.g, c.b);
    }
    shellMesh.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3),
    );
    shellMesh.geometry.computeVertexNormals();
    shellMesh.scale.set(10.5, 6.6, 9.6);
    shellMesh.position.y = 1.4;
    shellMesh.receiveShadow = true;
    s.add(shellMesh);
    // Openings: the well mouth above the rope, a crack of daylight over the pod.
    const sky = (x, z, y, r, color) => {
      const disc = new THREE.Mesh(
        new THREE.CircleGeometry(r, 18),
        new THREE.MeshBasicMaterial({ color, fog: false }),
      );
      disc.rotation.x = Math.PI / 2;
      disc.position.set(x, y, z);
      s.add(disc);
      const lip = new THREE.Mesh(
        new THREE.TorusGeometry(r * 1.08, r * 0.28, 6, 18),
        material("#2c2540"),
      );
      lip.rotation.x = Math.PI / 2;
      lip.position.set(x, y - 0.05, z);
      s.add(lip);
    };
    sky(COVE.rope[0], COVE.rope[1], 7.25, 0.55, "#c9d3ea");
    sky(COVE.pod[0], COVE.pod[1], 6.55, 0.95, "#fff3da");

    // Stalactites drip from the roof; stalagmites rise in rust and ochre.
    const roofY = (x, z) => {
      const nx = x / 10.5,
        nz = z / 9.6;
      return 1.4 + 6.6 * Math.sqrt(Math.max(0, 1 - nx * nx - nz * nz)) - 0.3;
    };
    for (let i = 0; i < 46; i++) {
      const a = random() * Math.PI * 2,
        r = 2 + random() * 6.8,
        x = Math.cos(a) * r,
        z = Math.sin(a) * r * 0.9;
      if (Math.hypot(x - COVE.pod[0], z - COVE.pod[1]) < 1.6) continue;
      if (Math.hypot(x - COVE.rope[0], z - COVE.rope[1]) < 1.2) continue;
      const h = 0.6 + random() * (r > 5 ? 2.6 : 1.4),
        w = 0.12 + random() * 0.3,
        y = roofY(x, z);
      const cone = mesh(
        root,
        new THREE.ConeGeometry(w, h, 6),
        random() > 0.7 ? "#7a5470" : STONE[i % 4],
        [x, y - h / 2 + 0.15, z],
        [Math.PI, random() * 3, 0],
      );
      cone.castShadow = false;
    }
    const stalagmite = (x, z, h, w, collide = true) => {
      // Layered: a wide dark base, rust bands and a pale lip, like poured wax.
      const layers = Math.max(2, Math.round(h / 0.55));
      for (let j = 0; j < layers; j++) {
        const t = j / layers,
          r = w * (1 - t * 0.78);
        cylinder(
          root,
          r * 0.82,
          r,
          h / layers + 0.02,
          ["#a65f3e", "#c27448", "#d98b55", "#b06a44"][j % 4],
          [x, (h / layers) * (j + 0.5), z],
          7,
        );
      }
      mesh(
        root,
        new THREE.ConeGeometry(w * 0.24, h * 0.35, 6),
        "#c98458",
        [x, h + h * 0.15, z],
      );
      if (collide) this.colliders.push({ x, z, w: w * 1.6, d: w * 1.6 });
    };
    stalagmite(-6.4, 1.6, 2.8, 0.75);
    stalagmite(-5.6, 2.6, 1.6, 0.45);
    stalagmite(-7, 3.4, 3.6, 0.85);
    stalagmite(6.2, 2.4, 2.4, 0.6);
    stalagmite(5.2, 3.6, 1.3, 0.4);
    stalagmite(6.8, -1.2, 3.2, 0.7);
    stalagmite(-2.4, -6.1, 2.2, 0.55);
    stalagmite(4.4, -5.6, 1.8, 0.5);
    for (let i = 0; i < 14; i++) {
      const a = random() * Math.PI * 2,
        x = Math.cos(a) * (6.2 + random() * 1.6),
        z = Math.sin(a) * (5.6 + random() * 1.4) - 0.4;
      stalagmite(x, z, 0.4 + random() * 1.1, 0.18 + random() * 0.2, false);
    }
    // The layered stone pillar standing in the water, and its reflection.
    const [qx, qz] = COVE.pillar;
    const pillar = new THREE.Group();
    const tiers = [
      [0.95, 0.5],
      [0.8, 0.55],
      [0.88, 0.45],
      [0.66, 0.6],
      [0.58, 0.5],
      [0.42, 0.55],
      [0.3, 0.45],
    ];
    let y = -0.1;
    tiers.forEach(([r, h], j) => {
      cylinder(pillar, r, r * 1.08, h, "#6a5578", [0, y + h / 2, 0], 7, [
        0,
        j * 0.6,
        0,
      ]);
      cylinder(pillar, r * 1.12, r * 1.16, 0.1, "#d9773c", [0, y + 0.05, 0], 7, [
        0,
        j * 0.6,
        0,
      ]);
      y += h;
    });
    cylinder(pillar, 0.12, 0.3, 0.5, "#5a4d74", [0.05, y + 0.2, 0], 6);
    pillar.position.set(qx, 0, qz);
    root.add(pillar);
    const reflection = pillar.clone();
    reflection.scale.y = -0.85;
    reflection.position.y = -0.16;
    reflection.traverse((o) => {
      if (o.isMesh) o.material = material("#2b3a55");
    });
    s.add(reflection);
    const islet = ball(root, 0.5, "#4a4062", [px - 1.6, -0.05, pz + 0.9], [1.4, 0.35, 1]);
    islet.castShadow = false;
    box(root, [0.9, 0.08, 0.55], "#c0703f", [px - 1.6, 0.06, pz + 0.9], [0, 0.4, 0]);

    // The rope you came down on.
    const [rx, rz] = COVE.rope;
    cylinder(root, 0.035, 0.035, 7.2, "#a48d5f", [rx, 3.65, rz], 6);
    for (let k = 0; k < 6; k++)
      ball(root, 0.06, "#8a7448", [rx, 0.6 + k * 1.15, rz], [1, 1.4, 1]);
    cylinder(root, 0.25, 0.3, 0.1, "#8a7448", [rx + 0.15, 0.05, rz + 0.1], 8);
    this.wellShaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 1.1, 7.1, 20, 1, true),
      shaftMaterial("#9fb3e0", 0.18),
    );
    this.wellShaft.position.set(rx, 3.65, rz);
    s.add(this.wellShaft);

    // The sporepod, resting on a mossy mound in a column of daylight.
    const [ox, oz] = COVE.pod;
    ball(root, 1.1, "#334d4a", [ox, -0.25, oz], [1.3, 0.55, 1.15], 1);
    for (let i = 0; i < 16; i++) {
      const a = random() * Math.PI * 2,
        r = 0.4 + random() * 0.9;
      ball(
        root,
        0.06 + random() * 0.06,
        i % 3 ? "#5f8f6c" : "#a7cf8a",
        [ox + Math.cos(a) * r, 0.25 - r * 0.18, oz + Math.sin(a) * r],
        [1, 0.6, 1],
      );
    }
    this.colliders.push({ x: ox, z: oz, w: 1.4, d: 1.4 });
    const pod = new THREE.Group();
    pod.position.set(ox, 0.36, oz);
    this.podGlow = new THREE.MeshStandardMaterial({
      color: "#e8e0c4",
      emissive: "#a6d98c",
      emissiveIntensity: 0.6,
      roughness: 0.8,
      flatShading: true,
    });
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.26, 1), this.podGlow);
    body.scale.set(1, 1.4, 1);
    body.position.y = 0.3;
    pod.add(body);
    for (let k = 0; k < 4; k++) {
      const rib = new THREE.Mesh(
        new THREE.TorusGeometry(0.265 - Math.abs(k - 1.5) * 0.04, 0.025, 5, 14),
        material("#b9a77e"),
      );
      rib.rotation.x = Math.PI / 2;
      rib.position.y = 0.12 + k * 0.12;
      pod.add(rib);
    }
    cylinder(pod, 0.03, 0.06, 0.22, "#6e8a5c", [0, 0.02, 0], 6);
    const crown = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.16, 6), this.podGlow);
    crown.position.y = 0.72;
    pod.add(crown);
    s.add(pod);
    this.pod = pod;
    this.podLight = new THREE.PointLight("#b8ef9a", 2.2, 3.5, 1.6);
    this.podLight.position.set(ox, 0.9, oz);
    s.add(this.podLight);
    const sun = new THREE.SpotLight("#ffe7c2", 70, 11, 0.36, 0.55, 1.4);
    sun.position.set(ox, 6.5, oz);
    sun.target.position.set(ox, 0, oz);
    sun.castShadow = true;
    sun.shadow.mapSize.set(512, 512);
    s.add(sun, sun.target);
    this.shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 1.75, 6.6, 28, 1, true),
      shaftMaterial("#ffe2b4", 0.42),
    );
    this.shaft.position.set(ox, 3.3, oz);
    s.add(this.shaft);
    // Dust motes drifting through the light.
    const motes = 150,
      mp = new Float32Array(motes * 3);
    this.moteSeeds = [];
    for (let i = 0; i < motes; i++) {
      this.moteSeeds.push([random() * Math.PI * 2, random(), random()]);
    }
    const mg = new THREE.BufferGeometry();
    mg.setAttribute("position", new THREE.BufferAttribute(mp, 3));
    this.motes = new THREE.Points(
      mg,
      new THREE.PointsMaterial({
        color: "#fff0cf",
        size: 0.035,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    this.motes.frustumCulled = false;
    s.add(this.motes);
    root.traverse((o) => {
      if (o.isMesh) o.receiveShadow = true;
    });

    this.interactables.push(
      {
        id: "spores",
        kind: "sporepod",
        label: "Take the sporepod",
        object: pod,
        position: new THREE.Vector3(ox, 0.8, oz),
        taken: false,
        revealed: true,
        reach: 3.2,
      },
      {
        id: "rope",
        kind: "rope",
        label: "Climb back up",
        object: null,
        position: new THREE.Vector3(rx, 1.4, rz),
        taken: false,
        revealed: true,
        wide: true,
      },
    );
  }
  walkable(x, z) {
    const { center, radius } = COVE.floor;
    return (
      ((x - center[0]) / radius[0]) ** 2 + ((z - center[1]) / radius[1]) ** 2 <
      1
    );
  }
  get area() {
    return {
      colliders: this.colliders,
      walkable: (x, z) => this.walkable(x, z),
    };
  }
  update(dt, time) {
    this.time.value = time;
    this.shaft.material.uniforms.uTime.value = time;
    this.wellShaft.material.uniforms.uTime.value = time + 4;
    const pulse = 0.5 + 0.5 * Math.sin(time * 1.6);
    this.podGlow.emissiveIntensity = 0.35 + pulse * 0.55;
    this.podLight.intensity = this.pod.visible ? 1.4 + pulse * 1.6 : 0;
    this.pod.rotation.y = Math.sin(time * 0.4) * 0.15;
    this.pod.scale.setScalar(1 + pulse * 0.035);
    const p = this.motes.geometry.attributes.position,
      [ox, oz] = COVE.pod;
    this.moteSeeds.forEach(([a, h, r], i) => {
      const y = ((h * 6 + time * 0.12 * (0.5 + r)) % 6) + 0.2,
        rad = (0.4 + r * 0.9) * (0.55 + (6.6 - y) / 9),
        ang = a + time * 0.05 * (r - 0.5);
      p.setXYZ(
        i,
        ox + Math.cos(ang) * rad,
        6.4 - y,
        oz + Math.sin(ang) * rad * 0.9,
      );
    });
    p.needsUpdate = true;
  }
}
