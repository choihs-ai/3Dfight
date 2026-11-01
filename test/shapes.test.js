import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SHAPES, scoreShape } from '../src/input/shapes.js';

const toScreen = (pts, s = 120, j = 0, seed = 3) => { let r = seed; const R = () => ((r = (r * 16807) % 2147483647) / 2147483647 - 0.5); return pts.map((p) => [200 + p[0] * s + R() * j, 300 + p[1] * s + R() * j]); };

test('문양 채점: 본보기대로 그리면 높은 점수, 다른 모양은 낮은 점수', () => {
  for (const id of Object.keys(SHAPES)) {
    const good = scoreShape(id, toScreen(SHAPES[id].res, 120, 14));
    assert.ok(good >= 70, `${id} 비슷하게 그림: ${good}`);
    for (const other of Object.keys(SHAPES)) if (other !== id) {
      const bad = scoreShape(id, toScreen(SHAPES[other].res, 120, 0));
      assert.ok(bad < good - 15, `${id}에 ${other}를 그림: ${bad} (정답 ${good})`);
    }
  }
  // 원은 시작점·방향이 달라도 인정
  const rev = SHAPES.fire.pts.slice().reverse();
  assert.ok(scoreShape('fire', toScreen(rev.slice(20).concat(rev.slice(0, 20)))) >= 85);
  assert.equal(scoreShape('fire', [[0, 0], [1, 1], [2, 2]]), 0, '너무 짧음');
});
