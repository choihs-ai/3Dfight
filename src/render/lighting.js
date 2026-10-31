// 조명/안개 상수 + 림라이트 패치된 램버트 재질
import * as THREE from 'three';

const norm = (v) => { const l = Math.hypot(...v); return v.map((x) => x / l); };
export const SUN = norm([-0.45, 0.75, 0.4]);
export const MOON = norm([-0.5, 0.42, 0.75]);
export const SUN_COL = [0.62, 0.66, 0.85];
export const SKY_AMB = [0.36, 0.34, 0.48];
export const GND_AMB = [0.24, 0.15, 0.12];
export const FOGC = [0.27, 0.15, 0.13];
export const FOG = [22, 72];

// three의 램버트는 1/PI 가 곱해지므로 강도에 PI를 곱해 프로토타입 밝기와 맞춤
export function addLights(scene) {
  const hemi = new THREE.HemisphereLight(new THREE.Color(...SKY_AMB), new THREE.Color(...GND_AMB), Math.PI);
  const sun = new THREE.DirectionalLight(new THREE.Color(...SUN_COL), Math.PI);
  sun.position.set(...SUN);
  scene.add(hemi, sun, sun.target);
  return { hemi, sun };
}

// 림라이트(uRim) + 안개 smoothstep 버전으로 패치한 램버트
export function rimLambert(color, rimUniform) {
  const m = new THREE.MeshLambertMaterial({ color: new THREE.Color(...color) });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uRim = rimUniform;
    sh.fragmentShader = 'uniform vec3 uRim;\n' + sh.fragmentShader.replace(
      '#include <opaque_fragment>',
      'outgoingLight += uRim * pow(1.0 - max(dot(normal, normalize(vViewPosition)), 0.0), 2.5);\n#include <opaque_fragment>',
    ).replace('#include <fog_fragment>', `#ifdef USE_FOG
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, smoothstep(fogNear, fogFar, length(vViewPosition)));
#endif`);
  };
  m.customProgramCacheKey = () => 'rimLambert';
  return m;
}
