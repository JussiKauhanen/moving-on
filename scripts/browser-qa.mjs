import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import assert from "node:assert/strict";
await fs.mkdir("test-results", { recursive: true });
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--enable-webgl", "--use-angle=metal", "--disable-gpu-sandbox"],
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
const snapshot = () => page.evaluate(() => window.__garden.snapshot());
async function aimAt(id, x, z) {
  await page.evaluate(
    ({ id, x, z }) => {
      const g = window.__garden,
        p = g.world.interactables.find((i) => i.id === id).position,
        dx = p.x - x,
        dz = p.z - z;
      g.teleport(
        x,
        z,
        Math.atan2(-dx, -dz),
        Math.atan2(p.y - 1.68, Math.hypot(dx, dz)),
      );
    },
    { id, x, z },
  );
  await page.waitForTimeout(150);
}
async function interact(id, x, z) {
  await aimAt(id, x, z);
  const actual = await page.evaluate(() => window.__garden.findTarget()?.id);
  assert.equal(actual, id, `Reachable interaction: ${id}`);
  await page.keyboard.press("KeyE");
  await page.waitForTimeout(150);
}
try {
  await page.goto("http://127.0.0.1:5173/?test=1");
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "test-results/title.png" });
  assert.ok(await page.evaluate(() => !!window.__garden));
  await page.locator("#start").click();
  await page.waitForTimeout(5500);
  assert.ok(await page.evaluate(() => !!document.pointerLockElement));
  await page.screenshot({ path: "test-results/arrival.png" });
  await page.keyboard.down("KeyW");
  await page.waitForTimeout(1600);
  await page.keyboard.up("KeyW");
  assert.ok(
    await page.evaluate(() => window.__garden.camera.position.z > 16.3),
    "Closed gate blocks player",
  );
  await page.keyboard.press("KeyE");
  await page.waitForTimeout(300);
  assert.ok(
    await page.evaluate(() => window.__garden.world.gateOpen),
    "Gate opens via E",
  );
  await page.keyboard.down("KeyW");
  await page.waitForTimeout(1300);
  await page.keyboard.up("KeyW");
  assert.ok(
    await page.evaluate(() => window.__garden.camera.position.z < 15),
    "Walk through open gate",
  );
  await page.evaluate(() => window.__garden.teleport(-3, 12, 0, -0.5));
  await page.mouse.down();
  await page.waitForTimeout(1600);
  await page.mouse.up();
  let s = await snapshot();
  assert.ok(
    s.score >= 3 && s.score <= 6,
    "Bare hands remove one tuft per action",
  );
  console.log("Hand harvesting", s);
  await interact("note", -12, -10);
  assert.equal((await snapshot()).modal, "note");
  await page.screenshot({ path: "test-results/note.png" });
  await page.locator("#note-panel .primary").click();
  await page.waitForTimeout(200);
  await interact("clippers", -11.2, -9.4);
  assert.ok((await snapshot()).items.includes("clippers"));
  await page.evaluate(() => window.__garden.teleport(-3, 10, 0, -0.4));
  const before = (await snapshot()).score;
  await page.mouse.down();
  await page.waitForTimeout(1100);
  await page.mouse.up();
  assert.ok(
    (await snapshot()).score - before >= 14,
    "Clippers cut wider swathes",
  );
  await page.screenshot({ path: "test-results/clipping.png" });
  await interact("oil", 12.1, -5);
  await interact("stone", 13.6, -5);
  assert.ok(
    (await snapshot()).items.includes("oil") &&
      (await snapshot()).items.includes("stone"),
  );
  await page.keyboard.press("Digit1");
  assert.equal(await page.evaluate(() => window.__garden.state.tool), "hands");
  await page.keyboard.press("Digit2");
  await page.keyboard.press("Tab");
  await page.waitForTimeout(300);
  assert.equal((await snapshot()).modal, "journal");
  const dayBefore = (await snapshot()).dayTime;
  await page.waitForTimeout(300);
  assert.equal((await snapshot()).dayTime, dayBefore, "Day pauses in journal");
  // Seed earnings to exercise late progression without 15 minutes of mowing.
  await page.evaluate(() => {
    window.__garden.state.compost = 1000;
    window.__garden.renderSkills();
  });
  await page.locator('[data-skill="hands"]').click();
  await page.locator('[data-skill="critical"]').click();
  s = await snapshot();
  assert.equal(s.skills.hands, 1);
  assert.equal(s.skills.critical, 1);
  assert.equal(s.compost, 870);
  await page.screenshot({ path: "test-results/journal.png" });
  await page.locator("#journal-panel .close").click();
  await page.waitForTimeout(200);
  assert.ok(await page.evaluate(() => !!document.pointerLockElement));
  await page.evaluate(() => {
    const g = window.__garden;
    g.teleport(-7, 11, 0, -0.4);
    g.state.cooldown = 0;
    g.chargePower();
  });
  await page.waitForFunction(
    () => !window.__garden.state.power && !window.__garden.state.action,
  );
  await page.screenshot({ path: "test-results/critical.png" });
  await page.evaluate(() => {
    window.__garden.state.dayTime = 900;
  });
  await page.waitForTimeout(300);
  await page.evaluate(() => window.__garden.teleport(0, 9, 0, -0.05));
  await page.screenshot({ path: "test-results/dusk.png" });
  await page.evaluate(() => {
    window.__garden.state.dayTime = 1079.95;
  });
  await page.waitForTimeout(300);
  assert.equal((await snapshot()).modal, "end");
  assert.deepEqual(errors, []);
  console.log(
    "PASS: arrival, gate, movement, hand pull, clippers, note, oil, stone, tool switching, upgrades, pause, dusk, ending.",
  );
  console.log("Browser errors:", errors);
} finally {
  await browser.close();
}
