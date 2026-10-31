// 판정: 상/중/하단, 가드, 패링, 카운터, 슈퍼아머, 공중 판정
import { clamp } from './util.js';

export function tryHit(sim, A, D) {
  const m = A.move;
  if (!(A.state === 'attack' && m && !A.hitDone && A.f >= m.startup && A.f < m.startup + m.active)) return null;
  if (D.invuln()) return null;
  const dx = D.x - A.x, dz = D.z - A.z, dist = Math.hypot(dx, dz) || 0.001;
  const air = D.state === 'launched';
  if (dist > m.range + 0.3 + (air ? 0.3 : 0)) return null;
  const fx = Math.sin(A.yaw), fz = Math.cos(A.yaw);
  if (dist > 0.55 && Math.acos(clamp((dx * fx + dz * fz) / dist, -1, 1)) > m.arc) return null; // 옆걸음으로 피하기
  if (air && D.y > 2.8) return null;
  if (!air && m.level === 'high' && D.isCrouching()) return null; // 앉으면 상단 회피
  const counter = D.state === 'attack' && D.move && D.f < D.move.startup;
  if (!air && D.state === 'attack' && D.armorOn) return { type: 'armor', m };
  const dfx = Math.sin(D.yaw), dfz = Math.cos(D.yaw), facing = (-dx * dfx - dz * dfz) / dist > -0.2;
  if (!air && D.canBlock() && facing) {
    const low = m.level === 'low', ok = low ? D.crouch : !D.crouch;
    if (ok) {
      if (D.state === 'idle' && sim.frame - D.lastGuardPress <= 8) return { type: 'parry', m };
      return { type: 'block', m };
    }
  }
  return { type: 'hit', counter, air, m };
}

export function applyHit(sim, A, D, r) {
  const m = r.m;
  A.hitDone = true;
  const base = { a: A.idx, d: D.idx, move: m.id, limb: m.limb, level: m.level, dmg: m.dmg };
  if (r.type === 'hit') {
    const dealt = D.takeHit(A, m, r.counter);
    D.combo++;
    sim.hitstop = Math.max(sim.hitstop, m.hitstop + (r.counter ? 3 : 0));
    sim.emit({ t: 'hit', ...base, counter: !!r.counter, air: !!r.air, launch: !!m.launch && !r.air, combo: D.combo, dealt, ko: D.hp <= 0 });
  } else if (r.type === 'block') {
    const brk = D.takeBlock(A, m);
    sim.hitstop = Math.max(sim.hitstop, brk ? 10 : 5);
    A.vx -= Math.sin(A.yaw) * m.bpush * 0.4; A.vz -= Math.cos(A.yaw) * m.bpush * 0.4;
    sim.emit({ t: 'block', ...base, brk });
  } else if (r.type === 'parry') {
    A.state = 'parried'; A.f = 0; A.stun = 52; A.move = null;
    D.state = 'idle'; D.f = 0; D.lastGuardPress = -99; D.st = Math.min(100, D.st + 15);
    sim.hitstop = Math.max(sim.hitstop, 14);
    sim.emit({ t: 'parry', ...base });
  } else if (r.type === 'armor') {
    D.hp = Math.max(0, D.hp - m.dmg * 0.6);
    sim.hitstop = Math.max(sim.hitstop, 6);
    sim.emit({ t: 'armor', ...base });
  }
}
