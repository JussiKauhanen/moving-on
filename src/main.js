import * as THREE from "three";
import "./style.css";
import "./skill-tree.css";
import level from "./levels/garden.js";
import { buildGarden } from "./world/garden.js";
import { Flowers } from "./world/flowers.js";
import { FlowerIncident } from "./systems/flower-incident.js";
import { Grass } from "./world/grass.js";
import { Hands } from "./world/hands.js";
import { Player } from "./systems/player.js";
import { Effects } from "./systems/effects.js";
import { Discoveries } from "./systems/discoveries.js";
import { GameAudio } from "./systems/audio.js";
import { RetroPost } from "./systems/post.js";
import { Cove, COVE } from "./world/cove.js";
import { renderSkillTree } from "./ui/skill-tree.js";
import { treeIcon } from "./ui/tree-icons.js";
import { Diary } from "./ui/diary.js";
import { gardenDiary } from "./levels/garden-diary.js";
import "./diary.css";
import {
  skillCost,
  upgradeProgress,
  toolStats,
  sporeStats,
  clamp,
} from "./systems/rules.js";
// Power cut timing: a short automatic wind-up, then the release.
const POWER = { charge: 0.34, radius: 1.9, limit: 3, fov: 64 };
const $ = (id) => document.getElementById(id);
const canvas = $("game");
let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: "high-performance",
  });
} catch (error) {
  $("loading").innerHTML =
    "<p>This garden needs WebGL 2. Please enable hardware acceleration and open it in a modern desktop browser.</p>";
  throw error;
}
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.03;
renderer.autoClear = false;
const palette = level.palette;
const scene = new THREE.Scene();
scene.background = new THREE.Color(palette.morning.fog);
scene.fog = new THREE.Fog(palette.morning.fog, 24, 98);
const camera = new THREE.PerspectiveCamera(
  64,
  innerWidth / innerHeight,
  0.05,
  150,
);
const hemi = new THREE.HemisphereLight(
  palette.morning.hemiSky,
  palette.morning.hemiGround,
  palette.morning.hemiIntensity,
);
scene.add(hemi);
const sun = new THREE.DirectionalLight(
  palette.morning.sun,
  palette.morning.sunIntensity,
);
sun.position.set(-20, 29, 13);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, {
  left: -31,
  right: 31,
  top: 31,
  bottom: -31,
  near: 1,
  far: 95,
});
sun.shadow.normalBias = 0.055;
sun.shadow.bias = -0.0002;
sun.shadow.radius = 3;
scene.add(sun);
sun.target.position.set(0, 0, -4);
scene.add(sun.target);
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(120, 32, 16),
  new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      top: { value: new THREE.Color(palette.morning.top) },
      bottom: { value: new THREE.Color(palette.morning.bottom) },
    },
    vertexShader:
      "varying vec3 vPosition; void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    fragmentShader:
      "varying vec3 vPosition; uniform vec3 top; uniform vec3 bottom; void main(){float t=smoothstep(-5.,95.,vPosition.y);gl_FragColor=vec4(mix(bottom,top,t),1.);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}",
  }),
);
scene.add(sky);
const clouds = new THREE.Group();
scene.add(clouds);
const cloudMat = new THREE.MeshBasicMaterial({
  color: palette.morning.cloud,
  transparent: true,
  opacity: 0.7,
});
for (let i = 0; i < 15; i++) {
  const g = new THREE.Group();
  g.position.set(
    Math.sin(i * 2.4) * 65,
    22 + (i % 4) * 3,
    Math.cos(i * 2.4) * 65,
  );
  for (let j = 0; j < 4; j++) {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(3.5, 1), cloudMat);
    m.position.set(j * 3, Math.sin(j * 2) * 1.4, 0);
    m.scale.set(1.5, 0.45, 1);
    g.add(m);
  }
  clouds.add(g);
}
const world = buildGarden(scene, level),
  grass = new Grass(scene, level),
  flowers = new Flowers(scene, world.flowerData),
  effects = new Effects(scene),
  hands = new Hands(),
  audio = new GameAudio(),
  player = new Player(camera, level, world, canvas),
  post = new RetroPost(renderer, camera),
  cove = new Cove();
const discoveries = new Discoveries(world.interactables, grass);
const incident = new FlowerIncident({
  player,
  camera,
  sky,
  sun,
  hemi,
  scene,
  renderer,
  audio,
  veil: $("flower-veil"),
  hud: $("hud"),
  clouds: { material: cloudMat },
});
const diary = new Diary({
  panel: $("diary-panel"),
  audio,
  entries: gardenDiary,
});
// "Day one · 09:14", from the in-game clock.
function clockStamp() {
  const p = clamp(state.dayTime / level.day.durationSeconds, 0, 1),
    hours = level.day.startHour + (level.day.endHour - level.day.startHour) * p;
  return `Day one · ${String(Math.floor(hours)).padStart(2, "0")}:${String(Math.floor((hours % 1) * 60)).padStart(2, "0")}`;
}
function writeDiary(id) {
  setModal("diary");
  diary.write(id, clockStamp());
}
const state = {
  started: false,
  ended: false,
  modal: null,
  tool: "hands",
  items: new Set(),
  skills: {},
  score: 0,
  compost: 0,
  dayTime: 0,
  totalTime: 0,
  cooldown: 0,
  held: false,
  power: null,
  sporeCooldown: 0,
  kick: 0,
  flash: 0,
  hitstop: 0,
  underground: false,
  transition: false,
  surface: null,
  followed: false,
  action: null,
  readNote: false,
  horror: 0,
  restored: false,
};
let target = null,
  toastTimer,
  lastUI = 0,
  focusSkill = null;
let loreReturn = null;
const direction = new THREE.Vector3(),
  aim = new THREE.Vector3();
document.body.classList.add("menu");
function toast(text, duration = 4200) {
  clearTimeout(toastTimer);
  $("toast").textContent = text;
  $("toast").classList.add("show");
  toastTimer = setTimeout(() => $("toast").classList.remove("show"), duration);
}
function setModal(name) {
  state.modal = name;
  state.action = null;
  state.held = false;
  if (name) {
    clearTimeout(toastTimer);
    $("toast").classList.remove("show");
  }
  if (state.modal !== "diary") diary.finish();
  for (const id of ["pause", "diary", "journal", "lore", "end"])
    $(`${id}-panel`).hidden = id !== name;
  $("overlay").hidden = !name;
  if (name) {
    document.exitPointerLock();
    if (name === "journal") renderSkills();
  }
}
function resume() {
  if (state.ended) return;
  setModal(null);
  player.lock().then((locked) => {
    if (!locked) {
      setModal("pause");
      toast("Click “Back to the garden” to capture the mouse.");
    }
  });
}
function begin() {
  audio
    .init()
    .then(() => audio.bus())
    .catch(() => toast("Sound is unavailable, but the garden is ready."));
  state.started = true;
  player.reset();
  $("title-screen").hidden = true;
  $("postcard").hidden = true;
  $("hud").hidden = false;
  document.body.classList.remove("menu");
  document.body.classList.add("playing");
  $("arrival-fade").hidden = false;
  setTimeout(() => ($("arrival-fade").hidden = true), 1700);
  $("day-intro").hidden = false;
  setTimeout(() => ($("day-intro").hidden = true), 5200);
  // The first diary entry, once the bus has gone.
  setTimeout(() => {
    if (!state.ended && !state.modal && !diary.has("arrival")) writeDiary("arrival");
  }, 3200);
  player.lock().then((locked) => {
    if (!locked) setModal("pause");
  });
}
$("start").addEventListener("click", begin);
$("resume").addEventListener("click", resume);
$("restart").addEventListener("click", () => {
  if ($("restart").dataset.confirm === "yes") location.reload();
  else {
    $("restart").dataset.confirm = "yes";
    $("restart").textContent =
      "Discard today’s progress and restart? Click again.";
  }
});
$("again").addEventListener("click", () => location.reload());
$("sound-button").addEventListener("click", () => {
  const muted = audio.toggle();
  $("sound-button").innerHTML =
    `${muted ? "♩" : "♫"} <span>SOUND ${muted ? "OFF" : "ON"}</span>`;
});
$("volume").addEventListener("input", (e) =>
  audio.setVolume(Number(e.target.value) / 100),
);
$("music-volume").addEventListener("input", (e) =>
  audio.setMusicVolume(Number(e.target.value) / 100),
);
$("sensitivity").addEventListener(
  "input",
  (e) => (player.sensitivity = Number(e.target.value) * 0.000525),
);
$("bob").addEventListener("change", (e) => (player.bob = e.target.checked));
$("retro").addEventListener("change", (e) => (post.enabled = e.target.checked));
$("compost-icon").innerHTML = treeIcon("grass");
for (const b of document.querySelectorAll("[data-close]"))
  b.addEventListener("click", resume);
$("journal-button").addEventListener("click", () => {
  if (state.started && !state.ended && !incident.active) setModal("journal");
});
$("lore-close").addEventListener("click", closeLore);
$("lore-back").addEventListener("click", closeLore);
function closeLore() {
  if (loreReturn === "journal") setModal("journal");
  else resume();
}
function openLore(item, fromJournal = false) {
  loreReturn = fromJournal ? "journal" : null;
  $("lore-title").textContent = item.title;
  $("lore-meta").textContent = item.meta;
  $("lore-text").textContent = item.text;
  const artwork = item.object.userData.artwork;
  $("lore-art").hidden = !artwork;
  if (artwork) {
    $("lore-art").src = artwork;
    $("lore-art").alt = item.title;
  }
  setModal("lore");
}
document.addEventListener("pointerlockchange", () => {
  if (state.started && !state.ended && !player.locked && !state.modal)
    setModal("pause");
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && state.started && !state.ended) setModal("pause");
});
addEventListener("blur", () => {
  state.held = false;
  if (state.started && !state.ended && !state.modal) setModal("pause");
});
addEventListener("keydown", (e) => {
  if (!state.started || state.ended || e.repeat || incident.active) return;
  if (e.code === "Tab") {
    e.preventDefault();
    state.modal === "journal" ? resume() : setModal("journal");
    return;
  }
  if (state.modal === "diary" && ["KeyJ", "KeyE", "Space"].includes(e.code)) {
    e.preventDefault();
    if (diary.writing) diary.finish();
    else resume();
    return;
  }
  if (e.code === "Escape" && state.modal && state.modal !== "pause") {
    e.preventDefault();
    setModal("pause");
    return;
  }
  if (state.modal) return;
  if (e.code === "KeyJ" && diary.pages.length) {
    setModal("diary");
    diary.index = diary.pages.length - 1;
    diary.show(false);
    return;
  }
  if (e.code === "Digit1") equip("hands");
  if (e.code === "Digit2") equip("clippers");
  if (e.code === "KeyE") interact();
  if (e.code === "KeyF" && target?.actions) interact("F");
});
canvas.addEventListener("mousedown", (e) => {
  if (
    e.button !== 0 ||
    !player.locked ||
    state.modal ||
    state.ended ||
    incident.active
  )
    return;
  target = findTarget();
  if (target) {
    state.held = false;
    state.action = null;
    interact();
    return;
  }
  state.held = true;
  work();
});
addEventListener("mouseup", () => (state.held = false));
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
function equip(tool) {
  if (incident.active) return;
  state.action = null;
  if (tool === "clippers" && !state.items.has("clippers")) {
    toast("There might be something useful in the shed.");
    return;
  }
  state.tool = tool;
  state.held = false;
  updateHUD();
}
function lineBlocked(a, b) {
  // Sample the line through the same collision geometry used by the player.
  if (state.underground) return false;
  const n = Math.ceil(a.distanceTo(b) * 8);
  for (let i = 1; i < n; i++) {
    const t = i / n,
      x = THREE.MathUtils.lerp(a.x, b.x, t),
      z = THREE.MathUtils.lerp(a.z, b.z, t);
    if (
      world.colliders.some(
        (c) => Math.abs(x - c.x) < c.w / 2 && Math.abs(z - c.z) < c.d / 2,
      )
    )
      return true;
  }
  return false;
}
function findTarget() {
  discoveries.update();
  camera.getWorldDirection(direction);
  let best = null,
    bestScore = -1;
  const points = state.underground ? cove.interactables : world.interactables;
  for (const point of points) {
    if (point.taken) continue;
    if (point.id === "gate" && world.gateOpen) continue;
    if (point.buried && !point.revealed) continue;
    const v = point.position.clone().sub(camera.position),
      dist = v.length(),
      alignment = v.normalize().dot(direction);
    if (
      dist > (point.reach || 3) ||
      alignment < (point.id === "gate" ? 0.35 : point.wide ? 0.75 : 0.975)
    )
      continue;
    // Door / well interactions sit against their own collision shapes.
    if (
      !["house", "well", "gate"].includes(point.id) &&
      lineBlocked(camera.position, point.position)
    )
      continue;
    const score = alignment - dist * 0.06;
    if (score > bestScore) {
      bestScore = score;
      best = point;
    }
  }
  return best;
}
function interact(key = "E") {
  if (
    !target ||
    state.modal ||
    !player.locked ||
    incident.active ||
    state.transition
  )
    return;
  const item = target;
  if (item.buried && !item.revealed) return;
  state.action = null;
  state.held = false;
  if (item.id === "gate") {
    world.gateOpen = true;
    audio.creak();
    toast("The latch gives way. The garden is yours for the day.");
  } else if (item.id === "note") {
    state.readNote = true;
    writeDiary("note");
  } else if (item.id === "house") {
    audio.creak();
    toast("Locked. Your work is out here.", 3500);
  } else if (item.id === "well" && key === "F") {
    travel(true);
  } else if (item.id === "well") {
    audio.wellLook();
    state.wellLooks = (state.wellLooks || 0) + 1;
    toast(
      state.dayTime > 500
        ? "Something below stops moving when you look."
        : state.wellLooks > 1
          ? "Far down, a pale light. The rope is long enough to climb. [F]"
          : "The water is very still. Your reflection seems a little late.",
      5000,
    );
  } else if (item.id === "rope") {
    travel(false);
  } else {
    item.taken = true;
    item.object.visible = false;
    state.items.add(item.id);
    audio.pickup();
    if (item.lore) {
      openLore(item);
      target = null;
      updateHUD();
      return;
    }
    const messages = {
      clippers:
        "Rusty clippers. A little stiff, but better than nothing. [2] to equip.",
      oil: "A few drops of oil. Your clippers now recover 8% sooner.",
      stone:
        "A keen edge. A slightly wider cut. One extra blade with each snip.",
      charm:
        "A brass cricket, warm to the touch. +3% power-cut chance after unlocking.",
      spores:
        "The sporepod is warm, and slowly breathing. A new branch has appeared in your field notes.",
    };
    toast(messages[item.id], 5200);
    if (item.id === "clippers") equip("clippers");
  }
  target = null;
  updateHUD();
}
// Down the well and back: fade out, swap the space the player stands in, fade in.
function travel(down) {
  if (state.transition) return;
  state.transition = true;
  state.held = false;
  state.action = null;
  state.power = null;
  hands.charge = 0;
  target = null;
  player.enabled = false;
  player.keys.clear();
  player.velocity.set(0, 0, 0);
  audio.rope();
  const fade = $("travel-fade");
  fade.hidden = false;
  void fade.offsetWidth;
  fade.classList.add("dark");
  setTimeout(() => {
    if (down) {
      state.surface = {
        position: camera.position.clone(),
        yaw: player.yaw,
        pitch: player.pitch,
      };
      state.underground = true;
      player.area = cove.area;
      camera.position.set(...COVE.spawn);
      player.yaw = COVE.yaw;
      player.pitch = COVE.pitch;
    } else {
      state.underground = false;
      player.area = null;
      camera.position.copy(state.surface.position);
      player.yaw = state.surface.yaw;
      player.pitch = -0.05;
    }
    audio.setUnderground(down);
    post.setShadowTint(down ? COVE.shadowTint : undefined);
    player.orient();
    fade.classList.remove("dark");
    setTimeout(() => {
      fade.hidden = true;
      state.transition = false;
      player.enabled = true;
      if (!down && state.items.has("spores") && !state.followed) {
        state.followed = true;
        setTimeout(() => {
          toast("It feels like something came up with you.", 5600);
          audio.groan();
        }, 1100);
      }
    }, 850);
  }, 900);
}
function work(forceCritical = false) {
  if (
    (state.cooldown > 0 && !forceCritical) ||
    state.action ||
    state.modal ||
    state.ended ||
    (state.power && !forceCritical) ||
    state.underground ||
    state.transition ||
    incident.active
  )
    return;
  const stats = toolStats(state);
  camera.getWorldDirection(direction);
  if (direction.y > 0.22 && !forceCritical) return;
  const reach = clamp(
    (camera.position.y - 0.3) / Math.max(0.1, -direction.y),
    0.65,
    2.55,
  );
  aim.copy(camera.position).addScaledVector(direction, reach);
  aim.y = 0.2;
  if (lineBlocked(camera.position, aim)) return;
  state.cooldown = stats.cooldown;
  const contact = hands.swing(stats.cooldown, forceCritical, state.tool);
  state.action = {
    elapsed: 0,
    contact,
    tool: state.tool,
    stats,
    critical: forceCritical,
    aim: aim.clone(),
  };
}
function contactCut(action) {
  if (state.ended || state.modal || incident.active) return;
  const { stats, critical, tool, aim: point } = action;
  if (
    lineBlocked(camera.position, point) ||
    camera.position.distanceTo(point) > 3.5
  )
    return;
  const radius = stats.radius * (critical ? POWER.radius : 1),
    limit = stats.limit * (critical ? POWER.limit : 1);
  const targets = [
    ...grass.near(point.x, point.z, radius),
    ...flowers.near(point.x, point.z, radius),
  ]
    .sort(
      (a, b) =>
        Math.hypot(a.x - point.x, a.z - point.z) -
        Math.hypot(b.x - point.x, b.z - point.z),
    )
    .slice(0, limit);
  let flowerCut = false;
  const blades = [];
  for (const target of targets) {
    if (target.flower) {
      flowers.remove(target);
      flowerCut = true;
    } else {
      grass.remove(target);
      blades.push(target);
    }
  }
  audio.cut(tool, targets.length, critical);
  if (critical) releasePower(point);
  if (!targets.length) return;
  hands.holding = tool === "hands" && blades.length > 0;
  award(blades.length);
  effects.burst(targets, critical);
  if (flowerCut) {
    state.action = null;
    state.held = false;
    state.power = null;
    hands.charge = 0;
    target = null;
    clearTimeout(toastTimer);
    $("toast").classList.remove("show");
    $("interact").hidden = true;
    incident.start();
    return;
  }
  const pop = $("harvest-pop");
  pop.textContent = `+${blades.length}${critical ? "  ✦" : ""}`;
  pop.classList.remove("pop", "power");
  void pop.offsetWidth;
  pop.classList.add(critical ? "power" : "pop");
  $("score").classList.remove("score-tick");
  void $("score").offsetWidth;
  $("score").classList.add("score-tick");
  $("crosshair").classList.remove("cut-hit");
  void $("crosshair").offsetWidth;
  $("crosshair").classList.add("cut-hit");
  // Spores ride out on the next cut whenever they have recovered.
  if (state.skills.spores && state.sporeCooldown <= 0 && blades.length) {
    const spores = sporeStats(state);
    grass.infect(point.x, point.z, spores.radius + 0.25, spores.budget);
    state.sporeCooldown = spores.cooldown;
    effects.burst(blades, false, true);
    audio.spores?.();
  }
  if (!critical && !state.power && Math.random() < stats.critChance)
    chargePower();
  updateHUD();
}
// A power cut builds by itself: the hands wind up, then the next cut lands huge.
function chargePower() {
  state.power = { elapsed: 0 };
  audio.powerUp(POWER.charge);
}
function releasePower(point) {
  state.power = null;
  hands.charge = 0;
  grass.shock(point.x, point.z, 1);
  effects.powerBurst(point.x, point.z);
  state.kick = 1;
  state.flash = 0.55;
  state.hitstop = 0.07;
  audio.whoosh();
}
function award(count) {
  state.score += count;
  state.compost += count;
}
function renderSkills() {
  $("compost").textContent = state.compost.toLocaleString();
  $("inventory").textContent =
    ["clippers", "oil", "stone", "charm", "spores"]
      .filter((i) => state.items.has(i))
      .map(
        (i) =>
          ({
            clippers: "Rusty clippers",
            oil: "Oil can",
            stone: "Whetstone",
            charm: "Brass cricket",
            spores: "Sporepod",
          })[i],
      )
      .join(" · ") || "A pair of willing hands.";
  const collected = world.interactables.filter((p) => p.lore && p.taken);
  $("collection").hidden = !collected.length;
  $("collection-count").textContent = `${collected.length} keepsakes`;
  $("collection-list").replaceChildren();
  for (const item of collected) {
    const button = document.createElement("button");
    button.className = "keepsake";
    button.dataset.item = item.id;
    button.textContent = item.title;
    button.addEventListener("click", () => openLore(item, true));
    $("collection-list").append(button);
  }
  renderSkillTree({
    canvas: $("skills"),
    state,
    onBuy(skill) {
      const current = state.skills[skill.id] || 0;
      state.compost -= skillCost(skill, current);
      state.skills[skill.id] = current + 1;
      focusSkill = skill.id;
      audio.pickup();
      renderSkills();
      updateHUD();
    },
  });
}
function updateSporeMeter() {
  const meter = $("spore-meter");
  meter.hidden = !state.skills.spores;
  if (meter.hidden) return;
  const total = sporeStats(state).cooldown,
    ready = state.sporeCooldown <= 0;
  meter.classList.toggle("ready", ready);
  const fill = ready ? 1 : 1 - state.sporeCooldown / total;
  $("spore-clip-rect").setAttribute("y", String(24 * (1 - fill)));
  $("spore-clip-rect").setAttribute("height", String(24 * fill));
  $("spore-label").textContent = ready
    ? "Spores ready"
    : `Spores ${Math.ceil(state.sporeCooldown)}s`;
}
function updateHUD() {
  updateSporeMeter();
  $("score").textContent = state.score.toLocaleString();
  $("percentage").textContent =
    `${((grass.cutCount / grass.tufts.length) * 100).toFixed(1)}%`;
  const progress = upgradeProgress(state);
  $("next-upgrade").textContent = progress.available
    ? `${progress.available} upgrade${progress.available === 1 ? "" : "s"} available`
    : progress.remaining !== null
      ? `Next upgrade in ${progress.remaining.toLocaleString()} clippings`
      : "Explore to find more skills";
  $("upgrade-label").textContent = progress.available
    ? "Choose an upgrade"
    : "Skill tree";
  $("journal-button").classList.toggle("ready", progress.available > 0);
  $("journal-button").setAttribute(
    "aria-label",
    progress.available
      ? `Open skill tree, ${progress.available} upgrades available`
      : "Open skill tree",
  );
}
function finish(success) {
  state.ended = true;
  state.held = false;
  setModal("end");
  $("end-title").textContent = success
    ? "A little good done."
    : "The garden can wait.";
  $("end-eyebrow").textContent = success
    ? "DAY ONE · A JOB WELL DONE"
    : "DAY ONE · EVENING HAS COME";
  $("end-copy").textContent = success
    ? "The lawn is tidy. Your hands smell of green things. As you leave, an upstairs curtain moves. You decide not to wave."
    : "The last bus is waiting. You leave a little grass for another day. Behind you, a light comes on in the empty house.";
  $("end-score").textContent = state.score.toLocaleString();
  audio.eerie();
}
const tint = new THREE.Color();
function dayUpdate(dt) {
  state.dayTime += dt;
  const p = clamp(state.dayTime / level.day.durationSeconds, 0, 1),
    hours = level.day.startHour + (level.day.endHour - level.day.startHour) * p;
  $("time").textContent =
    `${String(Math.floor(hours)).padStart(2, "0")}:${String(Math.floor((hours % 1) * 60)).padStart(2, "0")}`;
  const dusk = THREE.MathUtils.smoothstep(p, 0.5, 1),
    m = palette.morning,
    d = palette.dusk;
  sky.material.uniforms.top.value.set(m.top).lerp(tint.set(d.top), dusk);
  sky.material.uniforms.bottom.value
    .set(m.bottom)
    .lerp(tint.set(d.bottom), dusk);
  scene.fog.color.set(m.fog).lerp(tint.set(d.fog), dusk);
  scene.background.copy(scene.fog.color);
  cloudMat.color.set(m.cloud).lerp(tint.set(d.cloud), dusk);
  sun.color.set(m.sun).lerp(tint.set(d.sun), dusk);
  hemi.color.set(m.hemiSky).lerp(tint.set(d.hemiSky), dusk);
  hemi.groundColor.set(m.hemiGround).lerp(tint.set(d.hemiGround), dusk);
  sun.intensity = THREE.MathUtils.lerp(m.sunIntensity, d.sunIntensity, dusk);
  hemi.intensity = THREE.MathUtils.lerp(
    m.hemiIntensity,
    d.hemiIntensity,
    dusk,
  );
  sun.position.set(-20 + p * 43, 29 - Math.sin((p * Math.PI) / 2) * 23, 13);
  if (p > 0.58 && state.horror === 0) {
    state.horror = 1;
    audio.eerie();
    toast("The birds have gone quiet.", 4300);
  }
  if (p > 0.76 && state.horror === 1) {
    state.horror = 2;
    world.watcher.visible = true;
    audio.creak();
    toast("Was that a window opening?", 4000);
  }
  if (p > 0.84) world.watcher.visible = false;
  if (
    !state.restored &&
    grass.cutCount / grass.tufts.length >= level.day.targetCleared
  ) {
    state.restored = true;
    audio.pickup();
    toast(
      "The garden is looking like itself again. Time to catch the bus.",
      5500,
    );
  }
  if (state.restored && camera.position.z > 17) finish(true);
  else if (p >= 1) finish(state.restored);
}
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  state.totalTime += dt;
  const time = state.totalTime;
  const sessionActive =
    state.started && !state.modal && !state.ended && player.locked;
  const active = sessionActive && !incident.active && !state.transition;
  // Hitstop: a few frames of near-stillness when a power cut lands.
  const fxDt = state.hitstop > 0 ? dt * 0.1 : dt;
  state.hitstop = Math.max(0, state.hitstop - dt);
  if (!state.started) {
    camera.position.set(10 + Math.sin(time * 0.035) * 0.35, 7.2, 21);
    camera.lookAt(-2, 1.1, -7);
    grass.time.value = time;
  } else {
    player.update(active ? dt : 0);
    if (active) {
      dayUpdate(dt);
      state.cooldown = Math.max(0, state.cooldown - dt);
      if (state.action) {
        state.action.elapsed += fxDt;
        if (state.action.elapsed >= state.action.contact) {
          const action = state.action;
          state.action = null;
          contactCut(action);
        }
      }
      state.sporeCooldown = Math.max(0, state.sporeCooldown - dt);
      const withered = grass.update(dt, time, sporeStats(state).wither);
      if (withered.length) {
        award(withered.length);
        effects.burst(withered, false, true);
      }
      if (state.power) {
        state.power.elapsed += dt;
        hands.charge = Math.min(1, state.power.elapsed / POWER.charge);
        if (state.power.elapsed >= POWER.charge && !state.power.released) {
          state.power.released = true;
          hands.charge = 0;
          work(true);
          // Nothing to swing at (looking at the sky, a wall): the charge fizzles.
          if (!state.action) state.power = null;
        }
      } else if (state.held) work();
      target = findTarget();
      $("interact").hidden = !target;
      if (target) {
        $("interact").classList.toggle(
          "is-eye",
          !!target.paper || ["note", "well", "house"].includes(target.id),
        );
        $("interact").setAttribute("aria-label", target.label);
        const actions = target.actions;
        $("interact-actions").hidden = !actions;
        if (actions && $("interact-actions").dataset.for !== target.id) {
          $("interact-actions").dataset.for = target.id;
          $("interact-actions").innerHTML = actions
            .map(([key, text]) => `<span><kbd>${key}</kbd>${text}</span>`)
            .join("");
        }
      }
      $("crosshair").hidden = !!target;
      $("crosshair").classList.toggle("target", !!target);
      world.bus.position.x -= dt * (4 + Math.min(state.dayTime, 8) * 1.5);
      world.bus.visible = world.bus.position.x > -100;
    }
    if (world.gateOpen)
      world.gate.rotation.y = THREE.MathUtils.damp(
        world.gate.rotation.y,
        -1.7,
        5,
        dt,
      );
    hands.update(active ? fxDt : 0, time, state.tool, active && player.moving);
  }
  // Power-cut camera: narrow during the wind-up, punch wide on release, shake.
  state.kick = Math.max(0, state.kick - dt * 2.3);
  state.flash = Math.max(0, state.flash - dt * 3.2);
  const kick = state.kick * state.kick,
    fov = POWER.fov - hands.charge * 4.5 + kick * 11;
  if (Math.abs(camera.fov - fov) > 0.01) {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }
  if (kick > 0.001 && active) {
    camera.rotation.x += (Math.random() - 0.5) * kick * 0.035;
    camera.rotation.z += (Math.random() - 0.5) * kick * 0.03;
  }
  post.material.uniforms.flash.value = state.flash;
  post.material.uniforms.warp.value = hands.charge * 0.6 + kick;
  incident.update(sessionActive ? dt : 0);
  effects.update(active ? fxDt : 0);
  clouds.rotation.y = time * 0.001;
  world.foliage.time.value = time;
  if (state.underground) cove.update(dt, time);
  audio.update(
    dt,
    time,
    active && player.moving,
    state.dayTime / level.day.durationSeconds,
    !active,
    incident.active,
  );
  if (time - lastUI > 0.15) {
    lastUI = time;
    updateHUD();
  }
  post.begin();
  renderer.render(state.underground ? cove.scene : scene, camera);
  if (state.started && (!incident.active || incident.elapsed > 4.7))
    hands.render(renderer);
  post.end(time);
}
const clock = new THREE.Clock();
addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  hands.resize(innerWidth, innerHeight);
  post.resize(innerWidth, innerHeight);
  if (state.modal === "journal") renderSkills();
});
updateHUD();
renderer.compile(scene, camera);
renderer.compile(cove.scene, camera);
$("loading").style.opacity = "0";
setTimeout(() => ($("loading").hidden = true), 800);
frame();
// Explicit opt-in harness for development QA; excluded from ordinary gameplay.
if (import.meta.env.DEV && new URLSearchParams(location.search).has("test")) {
  window.__garden = {
    state,
    world,
    grass,
    flowers,
    hands,
    effects,
    audio,
    incident,
    discoveries,
    diary,
    player,
    camera,
    renderer,
    post,
    cove,
    level,
    travel,
    chargePower,
    work,
    interact,
    findTarget,
    equip,
    dayUpdate,
    renderSkills,
    finish,
    teleport(x, z, yaw = 0, pitch = -0.35) {
      camera.position.set(x, 1.68, z);
      player.yaw = yaw;
      player.pitch = pitch;
      player.orient();
    },
    select(id) {
      target = world.interactables.find((p) => p.id === id);
    },
    snapshot() {
      return {
        score: state.score,
        compost: state.compost,
        grass: grass.tufts.length,
        cut: grass.cutCount,
        flowersCut: flowers.cutCount,
        incident: incident.active,
        items: [...state.items],
        skills: { ...state.skills },
        modal: state.modal,
        dayTime: state.dayTime,
        underground: state.underground,
        power: !!state.power,
        drawCalls: renderer.info.render.calls,
      };
    },
  };
}
