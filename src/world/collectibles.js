import * as THREE from "three";
import { box, ball, cylinder } from "./primitives.js";
export function paperArtwork(item) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 640;
  const c = canvas.getContext("2d");
  c.fillStyle = "#dfd1a8";
  c.fillRect(0, 0, 512, 640);
  c.fillStyle = "#c5b88f";
  for (let i = 0; i < 160; i++) {
    const x = (i * 97) % 512,
      y = (i * 193) % 640;
    c.fillRect(x, y, 1 + (i % 3), 1);
  }
  c.strokeStyle = "#b5aa8990";
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(252, 0);
  c.lineTo(259, 640);
  c.moveTo(0, 321);
  c.lineTo(512, 315);
  c.stroke();
  if (item.paper === "newspaper") {
    c.fillStyle = "#4d5148";
    c.textAlign = "center";
    c.font = "bold 31px Georgia";
    c.fillText("THE BRIAR GAZETTE", 256, 64);
    c.font = "14px Georgia";
    c.fillText("SATURDAY, 14 JUNE 1986", 256, 94);
    c.fillRect(34, 110, 444, 3);
    c.font = "bold 26px Georgia";
    c.fillText("A GARDEN TO REMEMBER", 256, 157);
    c.font = "16px Georgia";
    c.fillText("Local family takes the prize once again", 256, 188);
    c.fillStyle = "#6b6a5c";
    c.fillRect(51, 215, 410, 185);
    c.fillStyle = "#d1c29c";
    c.fillRect(57, 221, 398, 173);
    c.strokeStyle = "#7d7763";
    c.setLineDash([5, 4]);
    c.strokeRect(58, 222, 396, 171);
    c.setLineDash([]);
    c.fillStyle = "#55574c";
    for (let col = 0; col < 3; col++)
      for (let line = 0; line < 17; line++)
        c.fillRect(38 + col * 148, 432 + line * 8, 122 - ((line * 17) % 35), 2);
    c.font = "bold 15px Georgia";
    c.textAlign = "left";
    c.fillText("MISSING SINCE MONDAY", 40, 597);
    c.strokeStyle = "#936451";
    c.strokeRect(29, 575, 270, 35);
  } else {
    c.lineCap = "round";
    c.lineWidth = 5;
    c.strokeStyle = "#9d6954";
    c.strokeRect(126, 195, 260, 245);
    c.beginPath();
    c.moveTo(98, 197);
    c.lineTo(254, 87);
    c.lineTo(410, 197);
    c.stroke();
    c.strokeStyle = "#587f84";
    c.strokeRect(167, 231, 54, 65);
    c.strokeRect(286, 231, 54, 65);
    c.strokeRect(239, 342, 52, 97);
    c.strokeStyle = "#7c935b";
    for (let i = 0; i < 26; i++) {
      let x = 21 + i * 19;
      c.beginPath();
      c.moveTo(x, 540);
      c.lineTo(x - 7, 513 - (i % 4) * 8);
      c.moveTo(x, 540);
      c.lineTo(x + 8, 510);
      c.stroke();
    }
    if (item.paper === "plan") {
      c.strokeStyle = "#736f8a";
      for (let i = 0; i < 6; i++) {
        c.beginPath();
        c.moveTo(111 + i * 18, 160);
        c.lineTo(365 + i * 6, 450);
        c.stroke();
      }
      c.strokeStyle = "#668167";
      c.strokeRect(185, 355, 146, 145);
      for (let i = 0; i < 5; i++) {
        c.beginPath();
        c.moveTo(199 + i * 29, 355);
        c.lineTo(199 + i * 29, 500);
        c.stroke();
      }
    } else {
      c.strokeStyle = "#746987";
      for (let i = 0; i < 6; i++) {
        const x = 55 + i * 79,
          y = 460 + (i % 2) * 20;
        c.beginPath();
        c.arc(x, y, 13, 0, 6.28);
        c.moveTo(x, y + 14);
        c.lineTo(x, y + 55);
        c.moveTo(x - 16, y + 31);
        c.lineTo(x + 16, y + 31);
        c.stroke();
      }
      c.fillStyle = "#d0a64d";
      for (let i = 0; i < 12; i++)
        c.fillRect(293 + (i % 3) * 8, 244 + i * 2, 25, 5);
    }
    c.fillStyle = "#7e7763";
    c.font = "italic 23px Georgia";
    c.textAlign = "center";
    c.fillText(
      item.paper === "plan" ? "the way home" : "everybody is here",
      256,
      593,
    );
  }
  return canvas;
}
export function buildLoreProp(parent, item) {
  if (item.paper) {
    const canvas = paperArtwork(item),
      texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(0.42, 0.53),
      new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
        roughness: 1,
      }),
    );
    m.rotation.set(-Math.PI / 2, 0, item.paper === "newspaper" ? 0.3 : -0.25);
    m.position.y = 0.025;
    m.receiveShadow = true;
    parent.add(m);
    parent.userData.artwork = canvas.toDataURL();
  } else if (item.kind === "gnome") {
    cylinder(parent, 0.13, 0.18, 0.27, "#698478", [0, 0.15, 0]);
    ball(parent, 0.105, "#cdb993", [0, 0.35, 0]);
    cylinder(parent, 0, 0.13, 0.26, item.color, [0, 0.52, 0]);
    ball(parent, 0.075, "#dfd9bc", [0, 0.3, 0.09], [1, 1.4, 0.4]);
    ball(parent, 0.035, "#bc9773", [0, 0.36, 0.12]);
    for (const x of [-0.055, 0.055])
      ball(parent, 0.012, "#39494a", [x, 0.39, 0.085]);
    for (const x of [-0.1, 0.1])
      ball(parent, 0.075, "#485856", [x, 0.035, 0.07], [1, 0.5, 1.4]);
  } else if (item.kind === "toycar") {
    box(parent, [0.23, 0.1, 0.43], item.color, [0, 0.1, 0]);
    box(parent, [0.2, 0.13, 0.28], item.color, [0, 0.2, -0.02]);
    box(parent, [0.205, 0.085, 0.12], "#7caaaa", [0, 0.21, -0.04]);
    for (const x of [-0.13, 0.13])
      for (const z of [-0.13, 0.13])
        cylinder(parent, 0.047, 0.047, 0.03, "#374944", [x, 0.06, z], 8, [
          0,
          0,
          Math.PI / 2,
        ]);
    box(parent, [0.17, 0.035, 0.01], "#ddd0a4", [0, 0.09, 0.22]);
  } else if (item.kind === "key") {
    const key = new THREE.Mesh(
      new THREE.TorusGeometry(0.065, 0.018, 6, 12),
      new THREE.MeshStandardMaterial({
        color: "#b6a15e",
        metalness: 0.45,
        roughness: 0.6,
      }),
    );
    key.rotation.x = -Math.PI / 2;
    parent.add(key);
    box(parent, [0.027, 0.024, 0.2], "#b6a15e", [0, 0, 0.14]);
    box(parent, [0.065, 0.024, 0.03], "#b6a15e", [0.025, 0, 0.22]);
  } else {
    box(parent, [0.32, 0.045, 0.21], "#52595b", [0, 0.03, 0]);
    box(parent, [0.27, 0.005, 0.13], "#d5c7a3", [0, 0.056, 0]);
    for (const x of [-0.075, 0.075])
      cylinder(parent, 0.032, 0.032, 0.006, "#343e40", [x, 0.062, 0], 10);
    for (let i = 0; i < 3; i++)
      box(parent, [0.16 - i * 0.025, 0.006, 0.005], "#787562", [
        0,
        0.065,
        -0.045 + i * 0.012,
      ]);
  }
}
