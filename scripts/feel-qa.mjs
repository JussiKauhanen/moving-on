import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
await fs.mkdir("test-results", { recursive: true });
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--enable-webgl", "--use-angle=metal", "--disable-gpu-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } }),
  errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
try {
  await page.goto("http://127.0.0.1:5173/?test=1");
  await page.locator("#loading").waitFor({ state: "hidden" });
  await page.locator("#start").click();
  await page.waitForTimeout(5500);
  const scoreBox = await page.locator("#score").boundingBox();
  assert.ok(scoreBox.x < 100 && scoreBox.y < 100, "Score is top left");
  await page.evaluate(() => window.__garden.teleport(-3, 12, 0, -0.5));
  for (const hand of [0, 1]) {
    const before = await page.evaluate(() => window.__garden.state.score);
    const start = await page.evaluate(() => {
      const g = window.__garden;
      g.state.cooldown = 0;
      g.work();
      return { hand: g.hands.activeHand, score: g.state.score };
    });
    assert.equal(start.hand, hand);
    assert.equal(start.score, before, "No grass removed before contact");
    await page.waitForFunction(() => !window.__garden.state.action);
    assert.equal(
      await page.evaluate(() => window.__garden.state.score),
      before + 1,
      "One blade per pull",
    );
    await page.waitForTimeout(260);
  }
  await page.evaluate(() => {
    const g = window.__garden;
    g.state.items.add("clippers");
    g.equip("clippers");
    g.teleport(-3, 9, 0, -0.5);
    g.snips = 0;
    const original = g.audio.snip.bind(g.audio);
    g.audio.snip = (...a) => {
      g.snips++;
      original(...a);
    };
    g.state.cooldown = 0;
    g.work();
  });
  await page.waitForFunction(() => !window.__garden.state.action);
  assert.equal(await page.evaluate(() => window.__garden.snips), 1);
  const effect = await page.evaluate(() => ({
    puffs: window.__garden.effects.puffs.count,
    slivers: window.__garden.effects.slivers.count,
  }));
  assert.ok(effect.puffs <= 7 && effect.puffs > 0);
  assert.ok(effect.slivers <= 3);
  await page.screenshot({ path: "test-results/snipping-puffs.png" });
  // Render the actual snip offline to check that it has no sustained ringing tail.
  const sound = await page.evaluate(async () => {
    const { GameAudio } = await import("/src/systems/audio.js");
    const a = new GameAudio();
    a.ctx = new OfflineAudioContext(1, 12000, 48000);
    a.master = a.ctx.createGain();
    a.master.connect(a.ctx.destination);
    a.snipBuffer = window.__garden.audio.snipBuffer;
    a.snip(9);
    const b = await a.ctx.startRendering(),
      d = b.getChannelData(0);
    let peak = 0,
      tail = 0;
    for (let i = 0; i < d.length; i++) {
      peak = Math.max(peak, Math.abs(d[i]));
      if (i > 7200) tail = Math.max(tail, Math.abs(d[i]));
    }
    return { peak, tail };
  });
  assert.ok(sound.peak > 0.01 && sound.peak < 1);
  assert.ok(sound.tail < 0.0001, "No clang-like ringing after 150 ms");
  console.log("Snip waveform", sound);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(180);
  assert.equal(await page.locator("#skills .node[data-skill]").count(), 8);
  await page.screenshot({ path: "test-results/skill-tree.png" });
  await page.locator("#journal-panel .close").click();
  await page.waitForTimeout(200);
  await page.evaluate(() => {
    const g = window.__garden,
      p = g.flowers.plants[0];
    g.equip("hands");
    g.teleport(p.x, p.z + 1.5, 0, Math.atan2(0.3 - 1.68, 1.5));
    g.state.cooldown = 0;
    g.work();
  });
  await page.waitForFunction(() => window.__garden.incident.active);
  const day = await page.evaluate(() => window.__garden.state.dayTime);
  assert.equal(
    await page.evaluate(() => window.__garden.player.enabled),
    false,
  );
  await page.waitForTimeout(1800);
  await page.screenshot({ path: "test-results/flower-blackout.png" });
  assert.ok(
    Number(
      await page.locator("#flower-veil").evaluate((e) => e.style.opacity),
    ) > 0.99,
  );
  await page.evaluate(() => document.exitPointerLock());
  await page.waitForFunction(() => window.__garden.state.modal === "pause");
  const pausedAt = await page.evaluate(() => window.__garden.incident.elapsed);
  await page.waitForTimeout(350);
  assert.equal(
    await page.evaluate(() => window.__garden.incident.elapsed),
    pausedAt,
    "Escape pauses incident safely",
  );
  await page.locator("#resume").click();
  await page.waitForFunction(
    () => !window.__garden.incident.active,
    {},
    { timeout: 10000 },
  );
  assert.equal(await page.evaluate(() => window.__garden.player.enabled), true);
  assert.equal(await page.locator("#flower-veil").isVisible(), false);
  assert.equal(await page.evaluate(() => window.__garden.state.held), false);
  assert.equal(await page.evaluate(() => window.__garden.flowers.cutCount), 1);
  assert.ok(
    (await page.evaluate(() => window.__garden.state.dayTime)) - day < 0.5,
  );
  assert.equal(
    await page.locator("#toast").evaluate((e) => e.classList.contains("show")),
    false,
  );
  await page.screenshot({ path: "test-results/flower-recovery.png" });
  await page.keyboard.down("KeyS");
  await page.waitForTimeout(250);
  await page.keyboard.up("KeyS");
  assert.ok(await page.evaluate(() => window.__garden.player.moving));
  assert.deepEqual(errors, []);
  console.log(
    "PASS: alternating single-blade pulls, delayed contact, snip waveform, bounded puffs, top-left score, connected skill branches, flower blackout, pause and silent recovery.",
  );
} finally {
  await browser.close();
}
