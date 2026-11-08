// Original, slow instrumental score. No external streams or licensed recordings.
export class AmbientMusic {
  constructor(ctx, destination) {
    this.ctx = ctx;
    this.volume = 0.55;
    this.index = 0;
    this.nextChord = ctx.currentTime + 3;
    this.nextNote = ctx.currentTime + 4;
    this.noteIndex = 0;
    this.output = ctx.createGain();
    this.output.gain.value = 0.12;
    this.output.connect(destination);
    const reverb = ctx.createConvolver(),
      ir = ctx.createBuffer(2, ctx.sampleRate * 3, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      let smooth = 0;
      for (let i = 0; i < d.length; i++) {
        smooth = smooth * 0.7 + (Math.random() * 2 - 1) * 0.3;
        d[i] = smooth * Math.pow(1 - i / d.length, 3) * 0.38;
      }
    }
    reverb.buffer = ir;
    const wet = ctx.createGain();
    wet.gain.value = 0.3;
    reverb.connect(wet).connect(this.output);
    this.reverb = reverb;
    this.chords = [
      [146.83, 220, 277.18, 329.63],
      [130.81, 196, 246.94, 293.66],
      [123.47, 185, 220, 293.66],
      [110, 164.81, 220, 277.18],
    ];
    this.melody = [2, 4, 3, 1, 2, 0, 3, 1];
  }
  voice(freq, start, duration, volume, type = "sine", pan = 0) {
    const osc = this.ctx.createOscillator(),
      gain = this.ctx.createGain(),
      filter = this.ctx.createBiquadFilter(),
      stereo = this.ctx.createStereoPanner();
    osc.type = type;
    osc.frequency.value = freq;
    osc.detune.value = (Math.random() - 0.5) * 4;
    filter.type = "lowpass";
    filter.frequency.value = type === "triangle" ? 700 : 1800;
    stereo.pan.value = pan;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(
      volume,
      start + (type === "triangle" ? 1.9 : 0.025),
    );
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(filter).connect(gain).connect(stereo);
    stereo.connect(this.output);
    stereo.connect(this.reverb);
    osc.start(start);
    osc.stop(start + duration + 0.1);
    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
      stereo.disconnect();
    };
  }
  update(paused, unconscious) {
    const now = this.ctx.currentTime;
    this.output.gain.setTargetAtTime(
      unconscious ? 0 : this.volume * (paused ? 0.08 : 0.23),
      now,
      unconscious ? 0.12 : 0.8,
    );
    if (paused || unconscious) return;
    if (this.nextChord < now - 0.5) this.nextChord = now + 0.1;
    if (this.nextNote < now - 0.5) this.nextNote = now + 1;
    if (now + 0.15 >= this.nextChord) {
      const chord = this.chords[this.index % 4];
      chord.forEach((f, i) =>
        this.voice(f, this.nextChord, 16, 0.1, "triangle", (i - 1.5) * 0.27),
      );
      this.index++;
      this.nextChord += 12;
    }
    if (now + 0.1 >= this.nextNote) {
      const chord = this.chords[Math.max(0, this.index - 1) % 4],
        sequence = this.melody[this.noteIndex++ % 8],
        f = sequence === 4 ? chord[0] * 4 : chord[sequence] * 2;
      this.voice(
        f,
        this.nextNote,
        4.8,
        0.15,
        "sine",
        Math.sin(this.noteIndex * 1.7) * 0.4,
      );
      this.nextNote += this.noteIndex % 3 === 0 ? 4.8 : 2.4;
    }
  }
}
