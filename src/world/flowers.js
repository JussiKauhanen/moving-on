import * as THREE from "three";
import { material } from "./primitives.js";
export class Flowers {
  constructor(scene, data) {
    this.plants = data;
    this.cutCount = 0;
    this.dummy = new THREE.Object3D();
    const geometry = new THREE.CylinderGeometry(0.022, 0.022, 1, 5);
    geometry.translate(0, 0.5, 0);
    this.parts = [
      new THREE.InstancedMesh(geometry, material("#4f7957"), data.length),
      new THREE.InstancedMesh(
        new THREE.IcosahedronGeometry(0.13),
        material("#ffffff"),
        data.length,
      ),
      new THREE.InstancedMesh(
        new THREE.IcosahedronGeometry(0.05),
        material("#e3bf67"),
        data.length,
      ),
      new THREE.InstancedMesh(
        new THREE.IcosahedronGeometry(0.12),
        material("#718d60"),
        data.length,
      ),
    ];
    this.plants.forEach((p, i) => {
      p.index = i;
      this.transform(p);
      this.parts[1].setColorAt(i, new THREE.Color(p.color));
    });
    for (const mesh of this.parts) {
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      scene.add(mesh);
    }
  }
  transform(p) {
    const scales = [
      [1, p.height, 1],
      [1, 0.45, 1],
      [1, 1, 1],
      [1, 0.25, 0.6],
    ];
    const positions = [
      [p.x, 0, p.z],
      [p.x, p.height, p.z],
      [p.x, p.height + 0.05, p.z],
      [p.x + 0.07, p.height * 0.45, p.z],
    ];
    this.parts.forEach((mesh, i) => {
      this.dummy.position.set(...positions[i]);
      this.dummy.scale.set(...scales[i]);
      if (p.cut) this.dummy.scale.setScalar(0);
      this.dummy.updateMatrix();
      mesh.setMatrixAt(p.index, this.dummy.matrix);
      mesh.instanceMatrix.needsUpdate = true;
    });
  }
  near(x, z, r) {
    return this.plants.filter(
      (p) => !p.cut && Math.hypot(p.x - x, p.z - z) < r,
    );
  }
  remove(p) {
    if (p.cut) return;
    p.cut = true;
    this.cutCount++;
    this.transform(p);
  }
}
