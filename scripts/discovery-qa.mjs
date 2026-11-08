import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
await fs.mkdir('test-results',{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--enable-webgl','--use-angle=metal','--disable-gpu-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
async function aim(id,x,z){await page.evaluate(({id,x,z})=>{const g=window.__garden,p=g.world.interactables.find(p=>p.id===id).position;g.teleport(x,z,Math.atan2(x-p.x,z-p.z),Math.atan2(p.y-1.68,Math.hypot(p.x-x,p.z-z)));},{id,x,z});await page.waitForTimeout(100);}
async function click(){await page.mouse.down();await page.mouse.up();await page.waitForTimeout(100);}
try{
 await page.goto('http://127.0.0.1:5173/?test=1');await page.locator('#loading').waitFor({state:'hidden'});await page.locator('#start').click();await page.waitForTimeout(5500);await page.locator('#diary-panel .diary-close').click({timeout:15000});await page.waitForTimeout(300);
 assert.ok(await page.evaluate(()=>window.__garden.grass.tufts.length>30000));
 await page.keyboard.down('KeyW');await page.waitForTimeout(1500);await page.keyboard.up('KeyW');await click();assert.ok(await page.evaluate(()=>window.__garden.world.gateOpen));
 await aim('note',-12,-10);assert.ok(await page.locator('#interact').evaluate(e=>e.classList.contains('is-eye')));await click();assert.equal(await page.evaluate(()=>window.__garden.state.modal),'diary');await page.locator('#diary-panel .diary-close').click();await page.waitForTimeout(200);
 await aim('clippers',-11.2,-9.4);assert.equal(await page.locator('#interact').evaluate(e=>e.classList.contains('is-eye')),false);await click();assert.ok(await page.evaluate(()=>window.__garden.state.items.has('clippers')));
 await page.evaluate(()=>window.__garden.teleport(-3,10,0,-.3));await page.screenshot({path:'test-results/gloves-lush-garden.png'});
 // Hidden means no model and no targeting, even when looking exactly at the prop.
 await aim('gnome',-5,11.7);assert.equal(await page.evaluate(()=>window.__garden.findTarget()?.id==='gnome'),false);assert.equal(await page.evaluate(()=>window.__garden.world.interactables.find(p=>p.id==='gnome').object.visible),true,'Physically there in the grass');
 // Mow a small overlapping grid through the usual delayed contact action.
 for(let i=0;i<16;i++){await page.evaluate(i=>{const g=window.__garden;g.teleport(-5+(i%4-1.5)*.23,11.7+(Math.floor(i/4)-1.5)*.23,0,Math.atan2(.3-1.68,1.7));g.state.cooldown=0;g.work();},i);await page.waitForFunction(()=>!window.__garden.state.action);}
 await aim('gnome',-5,11.7);assert.equal(await page.evaluate(()=>window.__garden.findTarget()?.id),'gnome');await page.screenshot({path:'test-results/discovered-gnome.png'});const before=await page.evaluate(()=>window.__garden.state.score);await click();assert.equal(await page.evaluate(()=>window.__garden.state.modal),'lore');assert.equal(await page.evaluate(()=>window.__garden.state.score),before,'Picking up does not also cut');await page.screenshot({path:'test-results/gnome-lore.png'});await page.locator('#lore-back').click();await page.waitForTimeout(200);
 // Directly clear a second patch as a fixture to check the original paper artwork and journal persistence.
 await page.evaluate(()=>{const g=window.__garden,p=g.world.interactables.find(p=>p.id==='drawing').position;g.grass.cut(p.x,p.z,1,999);g.discoveries.update();});await aim('drawing',6,10.7);assert.ok(await page.locator('#interact').evaluate(e=>e.classList.contains('is-eye')));await click();assert.equal(await page.locator('#lore-art').isVisible(),true);await page.screenshot({path:'test-results/found-drawing.png'});await page.locator('#lore-back').click();await page.waitForTimeout(200);
 await page.evaluate(()=>window.__garden.state.compost=45);await page.waitForTimeout(200);assert.ok(await page.locator('#journal-button').evaluate(e=>e.classList.contains('ready')));assert.match(await page.locator('#next-upgrade').textContent(),/upgrade.*available/);
 await page.keyboard.press('Tab');await page.waitForTimeout(150);await page.locator('[data-skill="hands"]').click();assert.equal(await page.evaluate(()=>window.__garden.state.compost),0);await page.locator('[data-item="gnome"]').click();assert.equal(await page.locator('#lore-title').textContent(),'The seventh gardener');await page.locator('#lore-back').click();assert.equal(await page.evaluate(()=>window.__garden.state.modal),'journal');assert.equal(await page.locator('.keepsake').count(),2);await page.screenshot({path:'test-results/skills-and-keepsakes.png'});await page.locator('#journal-panel .close').click();await page.waitForTimeout(250);
 assert.match(await page.locator('#next-upgrade').textContent(),/77 clippings/);
 assert.ok(await page.evaluate(()=>window.__garden.audio.music.index>0&&window.__garden.audio.music.noteIndex>0),'Ambient chords and melody are running');
 await page.evaluate(()=>document.exitPointerLock());await page.waitForTimeout(150);await page.locator('#music-volume').fill('0');assert.equal(await page.evaluate(()=>window.__garden.audio.music.volume),0);await page.locator('#music-volume').fill('55');assert.equal(await page.evaluate(()=>window.__garden.audio.music.volume),.55);
 assert.deepEqual(errors,[]);console.log('PASS: click gate/note/tool, eye/hand icons, 2× lush lawn, genuinely buried gnome, physical mowing reveal, original paper art, journal re-reading, upgrade countdown, Tab availability, ambient score and music control.');
}finally{await browser.close();}
