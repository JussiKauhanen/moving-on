import { AmbientMusic } from "./ambient-music.js";
// Locally bundled CC0 foley layered with original Web Audio ambience.
const SAMPLES = {
  pull: "pull.ogg",
  step: "step.ogg",
  pickup: "pickup.ogg",
};
export class GameAudio {
  constructor() {
    this.volume = 0.6;
    this.muted = false;
    this.buffers = {};
    this.lastBird = 0;
    this.lastStep = 0;
    this.musicVolume = 0.55;
  }
  async init() {
    if (this.ctx) {
      await this.ctx.resume();
      return;
    }
    this.ctx = new AudioContext();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);
    await this.ctx.resume();
    for (const [key, file] of Object.entries(SAMPLES)) {
      fetch(`${import.meta.env.BASE_URL}audio/${file}`)
        .then((r) => {
          if (!r.ok) throw new Error("sample unavailable");
          return r.arrayBuffer();
        })
        .then((b) => this.ctx.decodeAudioData(b))
        .then((b) => (this.buffers[key] = b))
        .catch(() => {});
    }
    this.noiseBuffer = this.ctx.createBuffer(
      1,
      this.ctx.sampleRate * 3,
      this.ctx.sampleRate,
    );
    const data = this.noiseBuffer.getChannelData(0);
    let previous = 0;
    for (let i = 0; i < data.length; i++) {
      previous = (previous + Math.random() * 0.04 - 0.02) / 1.02;
      data[i] = previous * 3;
    }
    this.snipBuffer = this.ctx.createBuffer(
      1,
      this.ctx.sampleRate,
      this.ctx.sampleRate,
    );
    const white = this.snipBuffer.getChannelData(0);
    for (let i = 0; i < white.length; i++) white[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    noise.loop = true;
    const low = this.ctx.createBiquadFilter();
    low.type = "lowpass";
    low.frequency.value = 650;
    this.wind = this.ctx.createGain();
    this.wind.gain.value = 0.16;
    noise.connect(low).connect(this.wind).connect(this.master);
    noise.start();
    this.music = new AmbientMusic(this.ctx, this.master);
    this.music.volume = this.musicVolume;
  }
  setMusicVolume(value) {
    this.musicVolume = value;
    if (this.music) this.music.volume = value;
  }
  setVolume(value) {
    this.volume = value;
    this.sync();
  }
  toggle() {
    this.muted = !this.muted;
    this.sync();
    return this.muted;
  }
  sync() {
    if (this.master)
      this.master.gain.setTargetAtTime(
        this.muted ? 0 : this.volume,
        this.ctx.currentTime,
        0.1,
      );
  }
  sample(key, volume = 0.3, rate = 1) {
    if (!this.ctx || !this.buffers[key]) return false;
    const source = this.ctx.createBufferSource();
    source.buffer = this.buffers[key];
    source.playbackRate.value = rate;
    const gain = this.ctx.createGain();
    gain.gain.value = volume;
    source.connect(gain).connect(this.master);
    source.start();
    return true;
  }
  tone(freq, duration, volume = 0.1, type = "sine", end = freq) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime,
      o = this.ctx.createOscillator(),
      g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, now);
    o.frequency.exponentialRampToValueAtTime(Math.max(1, end), now + duration);
    g.gain.setValueAtTime(0.001, now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.001, volume), now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, now + duration);
    o.connect(g).connect(this.master);
    o.start();
    o.stop(now + duration + 0.02);
  }
  noise(duration, volume, frequency = 1500) {
    if (!this.ctx || !this.noiseBuffer) return;
    let source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;
    source.playbackRate.value = 1 + Math.random();
    let f = this.ctx.createBiquadFilter();
    f.type = "highpass";
    f.frequency.value = frequency;
    let g = this.ctx.createGain();
    g.gain.setValueAtTime(volume, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    source.connect(f).connect(g).connect(this.master);
    source.start(0, Math.random());
    source.stop(this.ctx.currentTime + duration);
  }
  snip(count = 0) {
    if (!this.ctx || !this.snipBuffer) return;
    const now = this.ctx.currentTime,
      variation = 0.94 + Math.random() * 0.12;
    const burst = (delay, length, frequency, gain) => {
      const source = this.ctx.createBufferSource(),
        filter = this.ctx.createBiquadFilter(),
        envelope = this.ctx.createGain();
      source.buffer = this.snipBuffer;
      source.playbackRate.value = variation;
      filter.type = "bandpass";
      filter.Q.value = 0.65;
      filter.frequency.setValueAtTime(frequency, now + delay);
      filter.frequency.exponentialRampToValueAtTime(
        frequency * 0.65,
        now + delay + length,
      );
      envelope.gain.setValueAtTime(0.0001, now + delay);
      envelope.gain.exponentialRampToValueAtTime(gain, now + delay + 0.002);
      envelope.gain.exponentialRampToValueAtTime(0.0001, now + delay + length);
      source.connect(filter).connect(envelope).connect(this.master);
      source.start(now + delay, Math.random() * 0.6);
      source.stop(now + delay + length + 0.01);
    };
    // Close: dry steel sliding past steel. Release: a tiny, softer second snick.
    burst(0, 0.045, 4800, 0.32);
    burst(0.052, 0.026, 6200, 0.11);
    if (count) burst(0.008, 0.09, 2300, 0.07 + Math.min(count, 15) * 0.003);
  }
  cut(tool, count, critical = false) {
    if (tool === "clippers") this.snip(count);
    else {
      this.sample("pull", 0.22, 1.15 + Math.random() * 0.14);
      this.noise(0.1, 0.45, 650);
      this.tone(135, 0.045, 0.045, "sine", 75);
    }
    // Power cuts add their own whoosh (see whoosh()).
  }
  unsettle() {
    this.tone(53, 1.9, 0.14, "sine", 32);
    this.tone(57, 1.7, 0.1, "sine", 34);
    if (!this.ctx || !this.snipBuffer) return;
    const now = this.ctx.currentTime,
      source = this.ctx.createBufferSource(),
      filter = this.ctx.createBiquadFilter(),
      gain = this.ctx.createGain();
    source.buffer = this.snipBuffer;
    source.loop = true;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1100, now);
    filter.frequency.exponentialRampToValueAtTime(60, now + 1.2);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.55);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.35);
    source.connect(filter).connect(gain).connect(this.master);
    source.start();
    source.stop(now + 1.4);
  }
  pickup() {
    this.sample("pickup", 0.4, 1.2);
    [523, 659, 784].forEach((f, i) =>
      setTimeout(() => this.tone(f, 0.24, 0.09), i * 90),
    );
  }
  bus() {
    if (!this.ctx || !this.noiseBuffer || !this.snipBuffer) return;
    const ctx = this.ctx,
      now = ctx.currentTime,
      mix = ctx.createGain(),
      pan = ctx.createStereoPanner(),
      low = ctx.createBiquadFilter();
    pan.pan.setValueAtTime(-0.25, now);
    pan.pan.linearRampToValueAtTime(-0.95, now + 6.5);
    low.type = "lowpass";
    low.frequency.setValueAtTime(620, now);
    low.frequency.exponentialRampToValueAtTime(85, now + 7);
    mix.gain.setValueAtTime(0.001, now);
    mix.gain.exponentialRampToValueAtTime(0.34, now + 0.2);
    mix.gain.setValueAtTime(0.34, now + 1);
    mix.gain.exponentialRampToValueAtTime(0.001, now + 8);
    mix.connect(low).connect(pan).connect(this.master);
    for (const harmonic of [1, 2, 3]) {
      const osc = ctx.createOscillator(),
        gain = ctx.createGain();
      osc.type = harmonic === 1 ? "triangle" : "sine";
      gain.gain.value = 0.24 / harmonic;
      const f = 34 * harmonic;
      osc.frequency.setValueAtTime(f, now);
      osc.frequency.linearRampToValueAtTime(f * 1.9, now + 2);
      osc.frequency.linearRampToValueAtTime(f * 1.25, now + 2.3);
      osc.frequency.linearRampToValueAtTime(f * 2.1, now + 4.3);
      osc.frequency.exponentialRampToValueAtTime(f * 0.8, now + 8);
      osc.connect(gain).connect(mix);
      osc.start();
      osc.stop(now + 8.2);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    }
    const rumble = ctx.createBufferSource(),
      rumbleGain = ctx.createGain();
    rumble.buffer = this.noiseBuffer;
    rumble.loop = true;
    rumbleGain.gain.value = 0.7;
    rumble.connect(rumbleGain).connect(mix);
    rumble.start();
    rumble.stop(now + 8.2);
    const hiss = ctx.createBufferSource(),
      hissFilter = ctx.createBiquadFilter(),
      hissGain = ctx.createGain();
    hiss.buffer = this.snipBuffer;
    hissFilter.type = "bandpass";
    hissFilter.frequency.value = 1800;
    hissFilter.Q.value = 0.5;
    hissGain.gain.setValueAtTime(0.07, now);
    hissGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
    hiss.connect(hissFilter).connect(hissGain).connect(pan);
    hiss.start();
    hiss.stop(now + 0.85);
    rumble.onended = () => {
      rumble.disconnect();
      rumbleGain.disconnect();
      mix.disconnect();
      low.disconnect();
      pan.disconnect();
    };
    hiss.onended = () => {
      hiss.disconnect();
      hissFilter.disconnect();
      hissGain.disconnect();
    };
  }
  // Power cut: a rising charge while the hands wind up...
  powerUp(duration = 0.34) {
    if (!this.ctx) return;
    const ctx = this.ctx,
      now = ctx.currentTime,
      out = ctx.createGain(),
      filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(4200, now + duration);
    out.gain.setValueAtTime(0.0001, now);
    out.gain.exponentialRampToValueAtTime(0.16, now + duration * 0.9);
    out.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.08);
    filter.connect(out).connect(this.master);
    for (const [type, detune] of [
      ["sawtooth", 0],
      ["square", 7],
      ["sine", -12],
    ]) {
      const o = ctx.createOscillator();
      o.type = type;
      o.detune.value = detune;
      o.frequency.setValueAtTime(140, now);
      o.frequency.exponentialRampToValueAtTime(880, now + duration);
      o.connect(filter);
      o.start(now);
      o.stop(now + duration + 0.1);
    }
    if (this.noiseBuffer) {
      const n = ctx.createBufferSource(),
        bp = ctx.createBiquadFilter(),
        g = ctx.createGain();
      n.buffer = this.snipBuffer;
      bp.type = "bandpass";
      bp.Q.value = 2;
      bp.frequency.setValueAtTime(600, now);
      bp.frequency.exponentialRampToValueAtTime(5000, now + duration);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.12, now + duration);
      g.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.05);
      n.connect(bp).connect(g).connect(this.master);
      n.start(now);
      n.stop(now + duration + 0.1);
    }
  }
  // ...then a big low thump and a wide whoosh as the grass is thrown outward.
  whoosh() {
    if (!this.ctx || !this.snipBuffer) return;
    const ctx = this.ctx,
      now = ctx.currentTime;
    const thump = ctx.createOscillator(),
      tg = ctx.createGain();
    thump.type = "sine";
    thump.frequency.setValueAtTime(120, now);
    thump.frequency.exponentialRampToValueAtTime(38, now + 0.35);
    tg.gain.setValueAtTime(0.5, now);
    tg.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    thump.connect(tg).connect(this.master);
    thump.start(now);
    thump.stop(now + 0.5);
    for (const side of [-1, 1]) {
      const n = ctx.createBufferSource(),
        bp = ctx.createBiquadFilter(),
        g = ctx.createGain(),
        pan = ctx.createStereoPanner();
      n.buffer = this.snipBuffer;
      n.loop = true;
      n.playbackRate.value = side < 0 ? 0.9 : 1.1;
      bp.type = "bandpass";
      bp.Q.value = 0.9;
      bp.frequency.setValueAtTime(3200, now);
      bp.frequency.exponentialRampToValueAtTime(260, now + 0.9);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.32, now + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 1.05);
      pan.pan.setValueAtTime(0, now);
      pan.pan.linearRampToValueAtTime(side * 0.9, now + 0.8);
      n.connect(bp).connect(g).connect(pan).connect(this.master);
      n.start(now, Math.random());
      n.stop(now + 1.1);
    }
    [523, 784, 1046].forEach((f, i) =>
      setTimeout(() => this.tone(f, 0.32, 0.05, "triangle", f * 1.01), 40 + i * 55),
    );
  }
  // Looking into the well: something breathes a word you can't make out.
  wellLook() {
    if (!this.ctx || !this.snipBuffer) return;
    const ctx = this.ctx,
      now = ctx.currentTime;
    this.tone(61, 4, 0.07, "sine", 58);
    this.tone(64.5, 4, 0.05, "sine", 63);
    for (let i = 0; i < 3; i++) {
      const n = ctx.createBufferSource(),
        bp = ctx.createBiquadFilter(),
        g = ctx.createGain(),
        start = now + 0.6 + i * 0.55 + Math.random() * 0.2;
      n.buffer = this.snipBuffer;
      n.loop = true;
      n.playbackRate.value = 0.5;
      bp.type = "bandpass";
      bp.Q.value = 6;
      const f = 700 + Math.random() * 900;
      bp.frequency.setValueAtTime(f, start);
      bp.frequency.linearRampToValueAtTime(f * (0.6 + Math.random() * 0.8), start + 0.5);
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.09, start + 0.18);
      g.gain.exponentialRampToValueAtTime(0.0001, start + 0.55);
      n.connect(bp).connect(g).connect(this.master);
      n.start(start, Math.random());
      n.stop(start + 0.6);
    }
    setTimeout(() => this.drip(0.5), 1900);
  }
  drip(volume = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx,
      now = ctx.currentTime,
      pan = ctx.createStereoPanner();
    pan.pan.value = Math.random() * 1.6 - 0.8;
    pan.connect(this.master);
    const f = 900 + Math.random() * 900;
    // The plink, then two softer echoes off the stone.
    [0, 0.19, 0.41].forEach((delay, i) => {
      const o = ctx.createOscillator(),
        g = ctx.createGain(),
        t = now + delay;
      o.type = "sine";
      o.frequency.setValueAtTime(f * 1.6, t);
      o.frequency.exponentialRampToValueAtTime(f * 0.55, t + 0.09);
      const v = 0.07 * volume * Math.pow(0.32, i);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(v, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
      o.connect(g).connect(pan);
      o.start(t);
      o.stop(t + 0.2);
    });
  }
  rope() {
    this.tone(210, 0.5, 0.05, "triangle", 150);
    setTimeout(() => this.tone(180, 0.6, 0.04, "triangle", 120), 380);
    this.noise(0.9, 0.22, 400);
  }
  // A distant, enormous exhale. Barely there.
  groan() {
    if (!this.ctx) return;
    const ctx = this.ctx,
      now = ctx.currentTime,
      o = ctx.createOscillator(),
      lfo = ctx.createOscillator(),
      lfoGain = ctx.createGain(),
      lp = ctx.createBiquadFilter(),
      g = ctx.createGain();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(46, now);
    o.frequency.exponentialRampToValueAtTime(33, now + 2.4);
    lfo.frequency.value = 5.5;
    lfoGain.gain.value = 2.5;
    lfo.connect(lfoGain).connect(o.frequency);
    lp.type = "lowpass";
    lp.frequency.value = 180;
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.12, now + 0.5);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
    o.connect(lp).connect(g).connect(this.master);
    o.start(now);
    lfo.start(now);
    o.stop(now + 2.5);
    lfo.stop(now + 2.5);
  }
  setUnderground(on) {
    this.underground = on;
    if (!this.ctx) return;
    if (!this.cave) {
      const ctx = this.ctx,
        n = ctx.createBufferSource(),
        lp = ctx.createBiquadFilter(),
        o = ctx.createOscillator(),
        og = ctx.createGain();
      this.cave = ctx.createGain();
      this.cave.gain.value = 0;
      n.buffer = this.noiseBuffer;
      n.loop = true;
      n.playbackRate.value = 0.35;
      lp.type = "lowpass";
      lp.frequency.value = 160;
      o.frequency.value = 49;
      og.gain.value = 0.05;
      n.connect(lp).connect(this.cave);
      o.connect(og).connect(this.cave);
      this.cave.connect(this.master);
      n.start();
      o.start();
    }
    this.cave.gain.setTargetAtTime(on ? 0.5 : 0, this.ctx.currentTime, 0.6);
  }
  creak() {
    this.tone(170, 0.65, 0.08, "triangle", 100);
    this.noise(0.4, 0.3, 700);
  }
  eerie() {
    this.tone(74, 3, 0.06, "sine", 72);
    this.tone(78, 3, 0.04, "sine", 76);
  }
  update(dt, time, moving, progress, paused, unconscious = false) {
    if (!this.ctx || !this.wind) return;
    this.wind.gain.setTargetAtTime(
      unconscious
        ? 0
        : paused
          ? 0.035
          : this.underground
            ? 0.012
            : 0.1 + Math.sin(time * 0.2) * 0.025,
      this.ctx.currentTime,
      0.4,
    );
    this.music?.update(paused, unconscious || this.underground);
    if (paused || unconscious) return;
    if (moving && time - this.lastStep > 0.43) {
      this.lastStep = time;
      if (!this.sample("step", 0.16, 0.85 + Math.random() * 0.25))
        this.noise(0.09, 0.4, 100);
    }
    if (this.underground) {
      if (time - (this.lastDrip || 0) > (this.nextDrip || 2)) {
        this.lastDrip = time;
        this.nextDrip = 0.8 + Math.random() * 3.2;
        this.drip(0.5 + Math.random() * 0.6);
      }
      return;
    }
    if (time - this.lastBird > 7 + Math.random() * 7 && progress < 0.72) {
      this.lastBird = time;
      const f = 1600 + Math.random() * 900;
      this.tone(f, 0.12, 0.025, "sine", f * 1.3);
      setTimeout(() => this.tone(f * 1.1, 0.17, 0.02, "sine", f), 180);
    }
  }
}
