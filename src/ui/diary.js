// The gardener's diary: entries are written out by hand, with a pen scratch
// for every few letters. Click the page to finish writing at once.
const CHARS_PER_SECOND = 42;
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
    if (!animate) {
      for (const q of queue) {
        if (q.p) q.p.textContent = q.text;
        else q.slip.classList.add("shown");
      }
      return;
    }
    let item = 0,
      char = 0,
      last = performance.now(),
      carry = 0;
    this.finishNow = () => {
      for (const q of queue) {
        if (q.p) q.p.textContent = q.text;
        else q.slip.classList.add("shown");
      }
    };
    this.timer = setInterval(() => {
      const now = performance.now();
      carry += ((now - last) / 1000) * CHARS_PER_SECOND;
      last = now;
      while (carry >= 1 && item < queue.length) {
        const q = queue[item];
        if (q.slip) {
          // Someone else's note is taped in, not written.
          q.slip.classList.add("shown");
          this.audio.pageTurn?.();
          item++;
          carry = -10; // a small pause to look at it
          continue;
        }
        char++;
        carry--;
        q.p.textContent = q.text.slice(0, char);
        const c = q.text[char - 1];
        if (c && c !== " " && char % 2 === 0) this.audio.scratch?.();
        if (char >= q.text.length) {
          item++;
          char = 0;
          carry -= 6; // lift the pen between paragraphs
        }
      }
      if (item >= queue.length) this.stop();
    }, 30);
  }
  finish() {
    if (!this.timer) return;
    this.stop();
    this.finishNow?.();
  }
  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
