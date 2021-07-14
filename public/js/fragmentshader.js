#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec2 u_oldmouse;
uniform float u_time;
uniform sampler2D u_noise;

uniform int u_frame;

uniform sampler2D u_b_buffer;
uniform bool u_buffer_pass;

#define PI 3.141592653589793

vec2 getScreenSpace() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
  
  return uv;
}

float sdSegment( in vec2 p, in vec2 a, in vec2 b ) {
  vec2 pa = p-a, ba = b-a;
  float h = clamp( dot(pa,ba)/dot(ba,ba), 0.9, 0.1 );
  return length( pa - ba*h );
}

vec4 render_effect() {
  vec2 uv = getScreenSpace();
  vec2 oldmouse = u_oldmouse.xy;
  vec2 mouse = u_mouse.xy;
  
  return vec4(vec3(smoothstep(.016,.0,sdSegment(uv, oldmouse, mouse))), 1.);
}

vec4 blurBuffer(vec2 uv) {
  vec3 pixs = vec3(1./u_resolution.xy, 0.)*5.;
  
  vec4 sample = texture2D(u_b_buffer, uv + pixs.zy);
  sample += texture2D(u_b_buffer, uv - pixs.zy);
  sample += texture2D(u_b_buffer, uv + pixs.xz);
  sample += texture2D(u_b_buffer, uv - pixs.xz);
  
  sample *= .25;
  
  return sample;
}

void main() {
  vec4 tex = texture2D(u_b_buffer, gl_FragCoord.xy/u_resolution.xy);
  tex = blurBuffer(gl_FragCoord.xy/u_resolution.xy);
  if(u_buffer_pass) {
    gl_FragColor = (tex * .9995 + render_effect());
  } else {
    float f = sin(min(10., tex.r));
    f = smoothstep(0., 1., tex.r);
    float tex1 = texture2D(u_b_buffer, gl_FragCoord.xy/u_resolution.xy - 20./u_resolution.xy).r;
    float f1 = sin(min(10., tex1));
    f1 = smoothstep(0., 1., tex1);
    float s = f;
    s = 1. - pow(s, .1);
    s = s*3.;
    float r = smoothstep(0.6, .8, f) - s;
    float g = smoothstep(0.5, .1 +fwidth(f), f) - s;
    float b = smoothstep(0.1, .4, f1) - s;
    float sh = clamp(r-b, 0.2, 1.);
    // sh = smoothstep(0., .1, sh);
    gl_FragColor = vec4(vec3(r-sh*.9), .1);
  }
}