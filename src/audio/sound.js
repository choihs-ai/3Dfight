// 효과음 — WebAudio 합성 (프로토타입 그대로). ④단계에서 샘플 사운드로 강화 예정
export const Sound = {
  ctx: null, muted: false,
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running' && this.ctx.resume) this.ctx.resume(); return; }
    try {
      const C = window.AudioContext || window.webkitAudioContext;
      this.ctx = new C();
      const c = this.ctx;
      this.out = c.createGain(); this.out.gain.value = 0.55; this.out.connect(c.destination);
      const n = (c.sampleRate * 0.6) | 0;
      this.nb = c.createBuffer(1, n, c.sampleRate);
      const d = this.nb.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { this.ctx = null; }
  },
  noise(dur, type, f0, f1, q, g, dl = 0) {
    const c = this.ctx, t = c.currentTime + dl, s = c.createBufferSource();
    s.buffer = this.nb;
    const f = c.createBiquadFilter();
    f.type = type; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur); f.Q.value = q;
    const a = c.createGain();
    a.gain.setValueAtTime(g, t); a.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(a); a.connect(this.out); s.start(t); s.stop(t + dur + 0.03);
  },
  tone(f0, f1, dur, type, g, dl = 0) {
    const c = this.ctx, t = c.currentTime + dl, o = c.createOscillator();
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const a = c.createGain();
    a.gain.setValueAtTime(g, t); a.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(a); a.connect(this.out); o.start(t); o.stop(t + dur + 0.03);
  },
  play(n) {
    if (!this.ctx || this.muted) return;
    try {
      switch (n) {
        case 'hit': this.noise(0.12, 'bandpass', 2200, 500, 1.2, 0.9); this.tone(170, 55, 0.14, 'sine', 0.9); break;
        case 'heavy': this.noise(0.22, 'bandpass', 1500, 220, 1, 1); this.tone(115, 36, 0.26, 'sine', 1); break;
        case 'block': this.noise(0.07, 'highpass', 2600, 1800, 0.7, 0.6); this.tone(720, 500, 0.06, 'triangle', 0.25); break;
        case 'parry': this.tone(1500, 1460, 0.5, 'sine', 0.38); this.tone(2250, 2210, 0.38, 'sine', 0.2); this.noise(0.1, 'highpass', 4200, 3000, 0.5, 0.55); break;
        case 'whoosh': this.noise(0.13, 'bandpass', 500, 1700, 2.5, 0.2); break;
        case 'roll': this.noise(0.22, 'lowpass', 900, 200, 0.7, 0.32); break;
        case 'land': this.tone(95, 40, 0.25, 'sine', 0.8); this.noise(0.2, 'lowpass', 600, 150, 0.7, 0.5); break;
        case 'ko': this.tone(72, 28, 0.9, 'sine', 1); this.noise(0.7, 'lowpass', 900, 80, 0.6, 0.7); break;
        case 'bell': this.tone(880, 870, 0.55, 'triangle', 0.32); this.tone(1320, 1300, 0.4, 'sine', 0.14, 0.02); break;
        case 'ui': this.tone(660, 880, 0.07, 'triangle', 0.22); break;
      }
    } catch (e) { /* 무시 */ }
  },
};
