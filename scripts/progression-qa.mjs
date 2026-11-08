import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--enable-webgl", "--use-angle=metal", "--disable-gpu-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
try {
  await page.goto("http://127.0.0.1:5173/?test=1");
  await page.locator("#loading").waitFor({ state: "hidden" });
  await page.locator("#start").click();
  await page.locator("#diary-panel .diary-close").click({ timeout: 15000 });
  await page.waitForTimeout(300);
  await page.waitForTimeout(300);
  // Approach buried objects at eye-level aim; harvest through the ordinary work action.
  for (const id of ["charm"]) {
    const initial = await page.evaluate((id) => {
      const g = window.__garden,
        p = g.world.interactables.find((i) => i.id === id).position;
      g.teleport(p.x, p.z + 1.7, 0, Math.atan2(p.y - 1.68, 1.7));
      g.state.items.add("clippers");
      g.state.items.add("stone");
      g.equip("clippers");
      return g.findTarget()?.id;
    }, id);
    assert.notEqual(initial, id, "Items remain hidden until grass is cleared");
    for (let i = 0; i < 12; i++) {
      await page.evaluate(
        ({ id, i }) => {
          const g = window.__garden,
            p = g.world.interactables.find((p) => p.id === id).position;
          const offset = ((i % 3) - 1) * 0.27;
          g.teleport(
            p.x + offset,
            p.z + 1.7 + ((Math.floor(i / 3) % 3) - 1) * 0.25,
            0,
            Math.atan2(0.3 - 1.68, 1.7),
          );
          g.state.cooldown = 0;
          g.work();
        },
        { id, i },
      );
      await page.waitForFunction(() => !window.__garden.state.action);
    }
    await page.evaluate((id) => {
      const g = window.__garden,
        p = g.world.interactables.find((p) => p.id === id).position;
      g.teleport(p.x, p.z + 1.7, 0, Math.atan2(p.y - 1.68, 1.7));
    }, id);
    assert.equal(
      await page.evaluate(() => window.__garden.findTarget()?.id),
      id,
    );
    await page.keyboard.press("KeyE");
    assert.ok(
      await page.evaluate((id) => window.__garden.state.items.has(id), id),
    );
  }
  // Force only the random draw: the cut itself lands as a wider power cut.
  const before = await page.evaluate(() => window.__garden.state.score);
  await page.evaluate(async () => {
    const g = window.__garden;
    g.teleport(-5, 11, 0, -0.4);
    g.state.skills.critical = 1;
    g.state.cooldown = 0;
    const random = Math.random;
    try {
      Math.random = () => 0;
      g.work();
      await new Promise((resolve) => {
        function wait() {
          if (g.state.action) requestAnimationFrame(wait);
          else resolve();
        }
        requestAnimationFrame(wait);
      });
    } finally {
      Math.random = random;
    }
  });
  const gained = (await page.evaluate(() => window.__garden.state.score)) - before;
  assert.ok(gained > 10, `Power cut clears three times the blades (${gained})`);
  await page.screenshot({ path: "test-results/critical.png" });
  // The sporepod waits in the cove beneath the well.
  await page.evaluate(() => {
    const g = window.__garden;
    g.teleport(-10, 0.2, 0, -0.3);
  });
  await page.waitForTimeout(200);
  assert.equal(await page.evaluate(() => window.__garden.findTarget()?.id), "well");
  await page.keyboard.press("KeyF");
  await page.waitForFunction(() => window.__garden.state.underground && !window.__garden.state.transition, null, { timeout: 20000 });
  await page.evaluate(() => window.__garden.teleport(-2.2, -1.6, 0.85, -0.4));
  await page.waitForTimeout(200);
  assert.equal(await page.evaluate(() => window.__garden.findTarget()?.id), "spores");
  await page.keyboard.press("KeyE");
  assert.ok(await page.evaluate(() => window.__garden.state.items.has("spores")));
  await page.screenshot({ path: "test-results/cove.png" });
  await page.evaluate(() => window.__garden.teleport(0, 4.3, 0, -0.3));
  await page.waitForTimeout(200);
  await page.keyboard.press("KeyE");
  await page.waitForFunction(() => !window.__garden.state.underground && !window.__garden.state.transition, null, { timeout: 20000 });
  await page.waitForFunction(() => /came up with you/.test(document.getElementById("toast").textContent), null, { timeout: 10000 });
  // Buying spores makes an infection capable of crediting more grass over time.
  await page.evaluate(async () => {
    const g = window.__garden;
    g.state.skills.spores = 1;
    g.state.skills.spread = 1;
    g.teleport(-5, 7, 0, -0.4);
    g.state.cooldown = 0;
    const random = Math.random;
    try {
      Math.random = () => 0;
      g.work();
      await new Promise((resolve) => {
        function wait() {
          if (g.state.action) requestAnimationFrame(wait);
          else resolve();
        }
        requestAnimationFrame(wait);
      });
    } finally {
      Math.random = random;
    }
  });
  assert.ok(await page.evaluate(() => window.__garden.grass.infected.size > 0));
  const infectedBefore = await page.evaluate(() => window.__garden.state.score);
  await page.waitForFunction(
    (before) => window.__garden.state.score > before,
    infectedBefore,
    { timeout: 20000 },
  );
  // Shortcut only the amount already cut to test the success exit trigger.
  await page.evaluate(() => {
    const g = window.__garden;
    g.grass.cutCount = Math.ceil(g.grass.tufts.length * 0.9);
    g.teleport(0, 18, 0, 0);
  });
  await page.waitForFunction(() => window.__garden.state.ended, null, {
    timeout: 10000,
  });
  assert.equal(
    await page.locator("#end-title").textContent(),
    "A little good done.",
  );
  assert.deepEqual(errors, []);
  console.log(
    "PASS: buried discoveries, power cuts, cove and sporepod, spore propagation/score, successful departure.",
  );
} finally {
  await browser.close();
}
