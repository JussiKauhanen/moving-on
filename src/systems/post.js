import * as THREE from "three";
// Painterly-retro presentation: the scene is rendered small, then upscaled with
// posterised colour, ordered dithering, ink outlines, split-toning, RGB fringing
// and faint scanlines. Every knob lives in LOOK so the style is easy to tune.
export const LOOK = {
  pixelHeight: 540, // internal render height; lower = chunkier pixels
  exposure: 1.12, // pushes skies and sunlit surfaces towards blown-out white
  glow: 0.5, // bright areas bleed further towards white
  sky: 1.75, // sky and haze brightness; above 1 blows them out to soft white
  lift: 0.16, // raises the darkest tones towards liftColor (soft, milky shadows)
  liftColor: "#7073c4",
  levels: 48, // colour steps per channel (48 ≈ smooth)
  dither: 0, // 0 = no dither pattern
  saturation: 1.1,
  shadowTint: "#3d3fa6", // shadows drift towards soft lavender-blue
  highlightTint: "#fff0f2", // highlights drift towards pale pink-white
  split: 0.34, // strength of the shadow/highlight split-tone
  outline: 0.3, // ink-line strength at depth discontinuities
  outlineColor: "#2c3060",
  outlineFar: 40, // metres; outlines fade out before this distance
  aberration: 2.6, // RGB fringe, in low-res pixels at the screen edge
  scanlines: 0,
  grain: 0.012,
  vignette: 0.22,
};
const vertexShader = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`;
const fragmentShader = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform vec2 lowRes;
uniform float time, exposure, glow, lift, gloom, levels, dither, saturation, split, outline, outlineFar;
uniform float aberration, scanlines, grain, vignette, cameraNear, cameraFar, flash, warp;
uniform vec3 liftColor, shadowTint, highlightTint, outlineColor, flashColor;

float viewDepth(vec2 uv) {
  float z = texture2D(tDepth, uv).x * 2. - 1.;
  return (2. * cameraNear * cameraFar) / (cameraFar + cameraNear - z * (cameraFar - cameraNear));
}
vec3 aces(vec3 color) {
  // Same fitted ACES curve three.js uses, applied manually so grading happens after it.
  const mat3 m1 = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
  const mat3 m2 = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
  color *= 1.0 / 0.6;
  color = m1 * color;
  vec3 a = color * (color + 0.0245786) - 0.000090537;
  vec3 b = color * (0.983729 * color + 0.4329510) + 0.238081;
  return clamp(m2 * (a / b), 0., 1.);
}
vec3 toSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(c, vec3(1. / 2.4)) - 0.055, step(0.0031308, c));
}
float bayer4(vec2 p) {
  p = mod(p, 4.);
  float x = p.x, y = p.y;
  float a = mod(x, 2.), b = mod(y, 2.);
  float lo = 2. * a + 3. * b - 4. * a * b; // 2x2 Bayer: 0 2 / 3 1
  vec2 q = floor(p / 2.);
  float hi = 2. * q.x + 3. * q.y - 4. * q.x * q.y;
  return (4. * lo + hi + 0.5) / 16.;
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 uv = vUv;
  // A gentle, breathing lens warp used by the power cut.
  vec2 c = uv - 0.5;
  uv = 0.5 + c * (1. - warp * 0.06 * (1. - dot(c, c) * 2.));
  vec2 px = 1. / lowRes;
  vec2 cell = floor(uv * lowRes);
  vec2 cuv = (cell + 0.5) * px;
  vec2 fromCenter = uv - 0.5;
  vec2 fringe = fromCenter * length(fromCenter) * 2. * aberration * px * (1. + warp * 2.);
  vec3 col = vec3(
    texture2D(tColor, uv + fringe).r,
    texture2D(tColor, uv).g,
    texture2D(tColor, uv - fringe).b
  );
  // Ink outlines: the nearer side of a depth step is darkened toward ink.
  float d = viewDepth(cuv);
  float dn = max(
    max(viewDepth(cuv + vec2(px.x, 0.)), viewDepth(cuv - vec2(px.x, 0.))),
    max(viewDepth(cuv + vec2(0., px.y)), viewDepth(cuv - vec2(0., px.y)))
  );
  float edge = smoothstep(0.06, 0.22, (dn - d) / max(d, 0.001)) * (1. - smoothstep(outlineFar * 0.45, outlineFar, d));

  col *= exposure;
  col = toSRGB(aces(col));
  // Overblown light: bright areas wash out towards white.
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(col, vec3(1.), smoothstep(0.55, 1.0, lum) * glow);
  col = mix(col, liftColor, lift * (1. - smoothstep(0., 0.75, lum)));
  col = mix(col, col * outlineColor * 1.6, edge * outline);
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(l), col, saturation);
  vec3 sT = shadowTint - dot(shadowTint, vec3(1. / 3.));
  vec3 hT = highlightTint - dot(highlightTint, vec3(1. / 3.));
  col += sT * split * 2.2 * (1. - l) * (1. - l) + hT * split * l * l;
  col = mix(col, flashColor, flash);

  float b = bayer4(cell) - 0.5;
  col = floor(clamp(col, 0., 1.) * levels + 0.5 + b * dither) / levels;

  // Gloom: the world dims and the edges close in (near the house door).
  col *= 1. - gloom * 0.55;
  col *= 1. - (vignette + gloom * 0.9) * pow(clamp(length(fromCenter) * 1.25, 0., 1.), 2.4 - gloom);
  float line = 0.5 + 0.5 * cos(gl_FragCoord.y * 3.14159265 * 0.6667);
  col *= 1. - scanlines * line;
  col += (hash(gl_FragCoord.xy + fract(time * 7.1) * 91.) - 0.5) * grain;
  gl_FragColor = vec4(clamp(col, 0., 1.), 1.);
}`;
export class RetroPost {
  constructor(renderer, camera, look = LOOK) {
    this.renderer = renderer;
    this.camera = camera;
    this.look = look;
    this.enabled = true;
    this.target = new THREE.WebGLRenderTarget(4, 4, {
      type: THREE.HalfFloatType,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      depthBuffer: true,
      depthTexture: new THREE.DepthTexture(4, 4),
    });
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
      uniforms: {
        tColor: { value: this.target.texture },
        tDepth: { value: this.target.depthTexture },
        lowRes: { value: new THREE.Vector2(4, 4) },
        time: { value: 0 },
        exposure: { value: 1 },
        glow: { value: look.glow },
        gloom: { value: 0 },
        lift: { value: look.lift },
        liftColor: { value: new THREE.Color(look.liftColor) },
        cameraNear: { value: camera.near },
        cameraFar: { value: camera.far },
        levels: { value: look.levels },
        dither: { value: look.dither },
        saturation: { value: look.saturation },
        split: { value: look.split },
        shadowTint: { value: new THREE.Color(look.shadowTint) },
        highlightTint: { value: new THREE.Color(look.highlightTint) },
        outline: { value: look.outline },
        outlineColor: { value: new THREE.Color(look.outlineColor) },
        outlineFar: { value: look.outlineFar },
        aberration: { value: look.aberration },
        scanlines: { value: look.scanlines },
        grain: { value: look.grain },
        vignette: { value: look.vignette },
        flash: { value: 0 },
        flashColor: { value: new THREE.Color("#fff1c9") },
        warp: { value: 0 },
      },
    });
    // The UI colour-picker values are authored in sRGB; the grade runs in display space.
    for (const key of ["shadowTint", "highlightTint", "outlineColor", "liftColor"])
      this.material.uniforms[key].value.set(look[key]).convertLinearToSRGB();
    this.material.uniforms.flashColor.value.convertLinearToSRGB();
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3),
    );
    geometry.setAttribute(
      "uv",
      new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2),
    );
    this.quad = new THREE.Mesh(geometry, this.material);
    this.quad.frustumCulled = false;
    this.scene = new THREE.Scene();
    this.scene.add(this.quad);
    this.ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.resize(innerWidth, innerHeight);
  }
  // Swap the shadow tint for another space (the cove leans violet), or restore it.
  setShadowTint(color = this.look.shadowTint) {
    this.material.uniforms.shadowTint.value.set(color).convertLinearToSRGB();
  }
  resize(width, height) {
    const h = Math.max(120, Math.round(Math.min(this.look.pixelHeight, height)));
    const w = Math.max(160, Math.round((h * width) / height));
    this.target.setSize(w, h);
    this.material.uniforms.lowRes.value.set(w, h);
  }
  begin() {
    const r = this.renderer;
    r.setRenderTarget(this.enabled ? this.target : null);
    r.clear();
  }
  end(time) {
    if (!this.enabled) return;
    const u = this.material.uniforms,
      r = this.renderer;
    u.time.value = time;
    u.exposure.value = r.toneMappingExposure * this.look.exposure;
    u.cameraNear.value = this.camera.near;
    u.cameraFar.value = this.camera.far;
    r.setRenderTarget(null);
    r.clear();
    r.render(this.scene, this.ortho);
  }
}
