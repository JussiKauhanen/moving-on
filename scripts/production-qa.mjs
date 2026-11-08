import { chromium } from "@playwright/test";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve, extname } from "node:path";
import assert from "node:assert/strict";
const root = resolve("dist"),
  base = "/mowing-on/";
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".ogg": "audio/ogg",
};
const server = createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    if (!path.startsWith(base)) {
      res.writeHead(404);
      res.end();
      return;
    }
    const file = resolve(root, path.slice(base.length) || "index.html");
    if (!file.startsWith(root + "/")) throw new Error("outside static root");
    res.setHeader(
      "Content-Type",
      types[extname(file)] || "application/octet-stream",
    );
    res.end(await readFile(file));
  } catch {
    res.writeHead(404);
    res.end();
  }
});
await new Promise((resolve) => server.listen(4174, "127.0.0.1", resolve));
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--enable-webgl", "--use-angle=metal", "--disable-gpu-sandbox"],
});
try {
  const page = await browser.newPage({
      viewport: { width: 1280, height: 800 },
    }),
    errors = [],
    requests = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("request", (r) => requests.push(r.url()));
  await page.goto("http://127.0.0.1:4174/mowing-on/");
  await page.locator("#loading").waitFor({ state: "hidden" });
  await page.screenshot({ path: "test-results/production-title.png" });
  await page.locator("#start").click();
  await page.waitForTimeout(5500);
  // The first diary entry opens by itself shortly after arriving.
  await page.locator("#diary-panel .diary-close").click({ timeout: 15000 });
  await page.waitForTimeout(300);
  assert.ok(await page.evaluate(() => !!document.pointerLockElement));
  assert.equal(
    await page.evaluate(() => window.__garden),
    undefined,
    "Production has no test harness",
  );
  assert.ok(
    requests.filter((r) => r.endsWith(".ogg")).length === 3,
    "All sound samples load from nested deployment path",
  );
  assert.ok(
    requests.every(
      (r) => r.startsWith("http://127.0.0.1:4174/") || r.startsWith("data:"),
    ),
    "No external runtime requests",
  );
  assert.deepEqual(errors, []);
  await page.screenshot({ path: "test-results/production-arrival.png" });
  console.log(
    "PASS: production WebGL, pointer lock, all audio, relative subdirectory assets, no external requests, no debug harness.",
  );
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
