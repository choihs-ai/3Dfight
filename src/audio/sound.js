// 효과음 — WebAudio로 합성 (파일 없음). 칼 휘두르기·베임·칼끼리 부딪힘·원소 효과음 + 잔향
export const Sound = {
  ctx: null, muted: false,
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running' && this.ctx.resume) this.ctx.resume(); return; }
    try {
      const C = window.AudioContext || window.webkitAudioContext;
      this.ctx = new C();
      const c = this.ctx;
      // 압축기로 큰 소리가 겹쳐도 깨지지 않게
      this.comp = c.createDynamicsCompressor(); this.comp.threshold.value = -14; this.comp.ratio.value = 6; this.comp.connect(c.destination);
      this.out = c.createGain(); this.out.gain.value = 0.6; this.out.connect(this.comp);
      // 잔향 (짧은 홀): 감쇠하는 노이즈를 임펄스 응답으로
      this.rev = c.createConvolver();
      const n = (c.sampleRate * 1.3) | 0, ir = c.createBuffer(2, n, c.sampleRate);
      for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3); }
      this.rev.buffer = ir;
      this.revIn = c.createGain(); this.revIn.gain.value = 0.35; this.revIn.connect(this.rev); this.rev.connect(this.out);
      const nn = (c.sampleRate * 0.8) | 0;
      this.nb = c.createBuffer(1, nn, c.sampleRate);
      const d = this.nb.getChannelData(0);
      for (let i = 0; i < nn; i++) d[i] = Math.random() * 2 - 1;
      // 살짝 찌그러뜨리는 웨이브쉐이퍼 (묵직한 타격용)
      this.shaper = c.createWaveShaper();
      const curve = new Float32Array(1024); for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 3); }
      this.shaper.curve = curve; this.shaper.connect(this.out);
    } catch (e) { this.ctx = null; }
  },
  dest(rv) { return rv ? [this.out, this.revIn] : [this.out]; },
  noise(dur, type, f0, f1, q, g, dl = 0, rv = false, sh = false) {
    const c = this.ctx, t = c.currentTime + dl, s = c.createBufferSource();
    s.buffer = this.nb; s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = c.createBiquadFilter();
    f.type = type; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur); f.Q.value = q;
    const a = c.createGain();
    a.gain.setValueAtTime(0.0001, t); a.gain.exponentialRampToValueAtTime(g, t + 0.005); a.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(a);
    if (sh) a.connect(this.shaper); else for (const o of this.dest(rv)) a.connect(o);
    s.start(t); s.stop(t + dur + 0.05);
  },
  tone(f0, f1, dur, type, g, dl = 0, rv = false) {
    const c = this.ctx, t = c.currentTime + dl, o = c.createOscillator();
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const a = c.createGain();
    a.gain.setValueAtTime(0.0001, t); a.gain.exponentialRampToValueAtTime(g, t + 0.004); a.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(a); for (const x of this.dest(rv)) a.connect(x); o.start(t); o.stop(t + dur + 0.05);
  },
  // 금속 울림: 배음이 정수배가 아닌 사인파 묶음 (칼끼리 부딪히는 소리)
  metal(base, dur, g, rv = true) {
    const ny = (this.ctx ? this.ctx.sampleRate : 44100) * 0.45; // 나이퀴스트 넘는 배음은 생략
    for (const [r, gg] of [[1, 1], [2.76, 0.6], [5.4, 0.4], [8.93, 0.25], [13.3, 0.15]]) if (base * r < ny) this.tone(base * r, base * r * 0.995, dur * (1.2 - r * 0.05), 'sine', g * gg * 0.35, 0, rv);
  },
  play(n, opt = {}) {
    if (!this.ctx || this.muted) return;
    const p = opt.power || 8;
    try {
      switch (n) {
        case 'whoosh': { // 칼 휘두르는 바람 소리 (강한 기술일수록 낮고 길게)
          const heavy = p >= 12;
          this.noise(heavy ? 0.24 : 0.15, 'bandpass', heavy ? 300 : 500, heavy ? 1600 : 2600, 2.2, heavy ? 0.4 : 0.28);
          this.noise(0.1, 'highpass', 5000, 8000, 0.7, 0.08, 0.04); break;
        }
        case 'hit': // 베임: 날카로운 째짐 + 둔탁한 몸통
          this.noise(0.06, 'highpass', 4000, 2500, 0.8, 0.7);
          this.noise(0.16, 'bandpass', 1800, 500, 1.4, 0.8);
          this.tone(150, 55, 0.14, 'sine', 0.9); break;
        case 'heavy':
          this.noise(0.08, 'highpass', 3500, 2000, 0.8, 0.8);
          this.noise(0.3, 'bandpass', 1400, 180, 1.1, 1, 0, false, true);
          this.tone(110, 32, 0.32, 'sine', 1); this.tone(55, 30, 0.4, 'triangle', 0.5, 0.01); break;
        case 'counter': this.play('heavy'); this.metal(880, 0.5, 0.5); break;
        case 'block': this.metal(620 + Math.random() * 80, 0.35, 0.9); this.noise(0.05, 'highpass', 3000, 2000, 0.7, 0.6); break;
        case 'guardbreak': this.metal(330, 0.7, 1); this.noise(0.25, 'lowpass', 1200, 150, 0.7, 0.9, 0, true); this.tone(90, 35, 0.4, 'sine', 0.9); break;
        case 'parry': this.metal(1250, 1.1, 1.1); this.metal(1880, 0.8, 0.5); this.noise(0.08, 'highpass', 6000, 4000, 0.5, 0.6); break;
        case 'roll': this.noise(0.22, 'lowpass', 900, 200, 0.7, 0.32); break;
        case 'land': this.tone(90, 38, 0.3, 'sine', 0.9); this.noise(0.25, 'lowpass', 600, 120, 0.7, 0.6, 0, true); break;
        case 'ko': this.tone(70, 25, 1.2, 'sine', 1); this.noise(0.9, 'lowpass', 900, 60, 0.6, 0.8, 0, true); this.metal(440, 1.4, 0.6); break;
        case 'bell': this.metal(660, 1.2, 0.7); break;
        case 'draw': this.noise(0.35, 'bandpass', 3000, 7000, 6, 0.25); this.metal(2400, 0.4, 0.25); break; // 칼 뽑는 '스릉'
        case 'sheath': this.noise(0.2, 'bandpass', 6000, 2500, 5, 0.2); this.tone(1800, 1700, 0.06, 'triangle', 0.3, 0.22); break; // 칼집에 넣는 '착'
        case 'ui': this.tone(660, 880, 0.07, 'triangle', 0.22); break;
        // 원소 효과음 (타격 위에 겹침)
        case 'el_fire': this.noise(0.35, 'lowpass', 2500, 300, 0.8, 0.45); for (let i = 0; i < 5; i++) this.noise(0.03, 'highpass', 3000, 2000, 1, 0.3, 0.03 + Math.random() * 0.2); break;
        case 'el_water': this.noise(0.3, 'bandpass', 2200, 400, 1.5, 0.5); for (let i = 0; i < 3; i++) this.tone(500 + Math.random() * 600, 1200 + Math.random() * 800, 0.07, 'sine', 0.25, 0.05 + i * 0.05); break;
        case 'el_thunder': this.noise(0.12, 'highpass', 2500, 1500, 0.6, 0.9); this.noise(0.6, 'lowpass', 400, 60, 0.6, 0.7, 0.05, true); break;
        case 'el_wind': this.noise(0.45, 'bandpass', 600, 2400, 4, 0.4); this.noise(0.4, 'bandpass', 1200, 400, 4, 0.25, 0.05); break;
      }
    } catch (e) { /* 무시 */ }
  },
};
