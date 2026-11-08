// The gardener's diary: each new entry appears on the page while a short burst
// of pen-scratching plays. Click the page to stop the sound early.
export class Diary {
  constructor({ panel, audio, entries }) {
    this.panel = panel;
    this.audio = audio;
    this.entries = entries;
    this.pages = []; // { id, stamp }
    this.index = -1;
    this.timer = null;
    this.page = panel.querySelector(".diary-body");
    this.date = panel.querySelector(".diary-date");
    this.count = panel.querySelector(".diary-count");
    this.prev = panel.querySelector(".diary-prev");
    this.next = panel.querySelector(".diary-next");
    this.prev.addEventListener("click", () => this.turn(-1));
    this.next.addEventListener("click", () => this.turn(1));
    this.page.addEventListener("click", () => this.finish());
  }
  has(id) {
    return this.pages.some((p) => p.id === id);
  }
  // Add an entry (once) and show it, written out live.
  write(id, stamp) {
    if (!this.has(id)) this.pages.push({ id, stamp });
    this.index = this.pages.findIndex((p) => p.id === id);
    this.show(true);
  }
  turn(step) {
    const next = this.index + step;
    if (next < 0 || next >= this.pages.length) return;
    this.index = next;
    this.audio.pageTurn?.();
    this.show(false);
  }
  get writing() {
    return !!this.timer;
  }
  show(animate) {
    this.stop();
    const { id, stamp } = this.pages[this.index],
      entry = this.entries[id];
    this.date.textContent = stamp;
    this.count.textContent = `${this.index + 1} / ${this.pages.length}`;
    this.prev.disabled = this.index === 0;
    this.next.disabled = this.index === this.pages.length - 1;
    this.page.replaceChildren();
    // Build every paragraph empty, remember its full text, then write in order.
    const queue = [];
    for (const part of entry.parts) {
      if (part.note) {
        const slip = document.createElement("div");
        slip.className = "diary-note";
        for (const line of part.note) {
          const p = document.createElement("p");
          p.textContent = line;
          slip.append(p);
        }
        this.page.append(slip);
        queue.push({ slip });
      } else
        for (const text of part.text) {
          const p = document.createElement("p");
          this.page.append(p);
          queue.push({ p, text });
        }
    }
    // The page appears complete; only the sound of writing plays out.
    for (const q of queue) {
      if (q.p) q.p.textContent = q.text;
      else q.slip.classList.add("shown");
    }
    if (!animate) return;
    const letters = queue.reduce((n, q) => n + (q.text?.length || 0), 0),
      strokes = Math.min(70, Math.round(letters / 5));
    let i = 0;
    this.timer = setInterval(() => {
      // Bursts of scratches with small gaps, like words.
      if (i % 5 !== 4) this.audio.scratch?.();
      if (++i >= strokes) this.stop();
    }, 55);
  }
  finish() {
    this.stop();
  }
  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
