import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

export default function Layout({ children }) {
    return <>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy="beforeInteractive" />
    <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" strategy="beforeInteractive" />
    <Script src="https://unpkg.com/@popperjs/core@2?ver=5.7.2" strategy="beforeInteractive" />
    <Script src='https://unpkg.com/tippy.js@6?ver=5.7.2' strategy="beforeInteractive" />
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-RP52EB93ZV" strategy="beforeInteractive"/>
    <Script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RP52EB93ZV');
                `}
    </Script>
    <div id="skip-to-content"><div className="skip-link-container"><a href="#main">Przejdź do treści</a></div></div>
    <button type="button" id="menu-toogle" aria-label="Zamyka i otwiera nawigację.">
      <span className="line line-long" id="lineone"></span>
      <span className="line line-med" id="linetwo"></span>
      <span className="line line-med" id="linethree"></span>
      <span className="line line-short" id="linefour"></span>
    </button>
    <header id="headertop">
      <div id="header-menu-container">
        <div>
          <div id="gps-logo-menu-container">
            <Link href="/"><a className="image-link" aria-label="Strona główna."><Image src="/svg/gdansk-przyszlosci-logo-dark.svg" alt="" width={160} height={160} id="gps-logo-menu" /></a></Link>
          </div>
          <nav id="header-vertical-menu">
            <ul>
              <li><Link href="/#scenariusze-przyszlosci"><a target="_self">Scenariusze Przyszłości</a></Link>
                <ul>
                  <li><Link href="/scenariusz/spolecznoczule-technium"><a target="_self">Społecznoczułe technium</a></Link></li>
                  <li><Link href="/scenariusz/pograzone-megapolis"><a target="_self">Pogrążone megapolis</a></Link></li>
                  <li><Link href="/scenariusz/kooperatywna-homeostaza"><a target="_self">Kooperatywna homeostaza</a></Link></li>
                  <li><Link href="/scenariusz/blekitna-autonomia"><a target="_self">Błękitna autonomia</a></Link></li>
                </ul>
              </li>
              <li><Link href="/metodologia"><a target="_self">Proces badawczy</a></Link></li>
              <li><Link href="/slownik-terminow"><a target="_self">Słownik terminów</a></Link></li>
              <li><Link href="/shift-cards"><a target="_self">Shift cards</a></Link></li>
            </ul>
          </nav>
          <a href="/pdf/Gdansk-przyszlosci-raport-z-badan.pdf" className="button" target="_blank">Pobierz Raport w PDF (11MB)</a>
        </div>
      </div>
      <div id="logo-patronage-header">
        <a href="https://www.gdansk.pl/" className="image-link" aria-label="Idź do strony Gdansk.pl" target="_blank" rel="noreferrer"><Image src="/svg/gdansk-logo-dark.svg" alt="" width={81} height={62} /></a>
        <a href="https://ikm.gda.pl/" className="image-link" aria-label="Idź do strony Instytutu Kultury Miejskiej w Gdańsku." target="_blank" rel="noreferrer"><Image src="/svg/ikm-logo-dark.svg" alt="" width={81} height={54} /></a>
        <a href="https://infuture.institute/" className="image-link" aria-label="Idź do strony infuture.institute." target="_blank" rel="noreferrer"><Image src="/svg/infuture-logo-dark.svg" alt="" width={81} height={38} /></a>
      </div>
    </header>
    <div className="container">
      {children}
    </div>
    <footer>
      <div id="footer-meritorical">
        <div>
          <Image src="/svg/gdansk-przyszlosci-logo-dark-120x120.svg" alt="" width={120} height={120} className="logo" id="gps-logo-footer" />
        </div>
        <div id="footer-navigation">
          <nav>
            <ul>
              <li><Link href="/polityka-prywatnosci"><a target="_self">Polityka prywatności</a></Link></li>
              <li><Link href="/regulamin"><a target="_self">Regulamin</a></Link></li>
              <li><Link href="/polityka-dostepnosci"><a target="_self">Polityka dostępności</a></Link></li>
              <li><Link href="/regulamin#regulamin-kontakt" ><a >Kontakt</a></Link></li>
            </ul>
          </nav>
          <div id="footer-meritorical-patronage">
            <a href="https://www.gdansk.pl/"  target="_blank" aria-label="Idź do strony Gdańsk.pl" rel="noreferrer"><Image src="/svg/gdansk-logo-dark.svg" alt="" width={81} height={62} /></a>
            <a href="https://ikm.gda.pl/" target="_blank" aria-label="Idź do strony Instytutu Kultury Miejskiej w Gdańsku." rel="noreferrer"><Image src="/svg/ikm-logo-dark.svg" alt="" width={81} height={54} /></a>
            <a href="https://infuture.institute/" target="_blank" aria-label="Idź do strony infuture.institute." rel="noreferrer"><Image src="/svg/infuture-logo-dark.svg" alt="" width={81} height={38} /></a>
          </div>
        </div>
      </div>
      <div id="footer-technical">
        <p><a href="https://ikm.gda.pl/" target="_blank" rel="noreferrer">Instytut Kultury Miejskiej</a> &#169; 2021</p>
      </div>
    </footer>
    <script src="/js/whiteblob.js" defer></script>
      <Script id="vertexShader" type="x-shader/x-vertex">
        {`
        attribute vec4 a_position;
      
        uniform mat4 u_modelViewMatrix;
        uniform mat4 u_projectionMatrix;
        
        void main() {
          gl_Position = a_position;
        }
        `}
      </Script>
      <Script id="fragmentShader" type="x-shader/x-fragment">
        {`
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
        `}
      </Script>
      <Script>
            {`
                    var menu = document.getElementById('headertop');
                    var el = document.getElementById('menu-toogle');
                    var lone = document.getElementById('lineone');
                    var ltwo = document.getElementById('linetwo');
                    var lthree = document.getElementById('linethree');
                    var lfour = document.getElementById('linefour');
                    menu.style.width = "0";
                    ltwo.style.marginLeft = "0px";
                    lthree.style.marginLeft = "0px";
                    lfour.style.marginLeft = "0px";
              
                    function menuSwitcher() {
                    if (menu.style.width == "0px") {
                    menu.style.width = "270px";
                    ltwo.style.marginLeft = "8px";
                    lthree.style.marginLeft = "8px";
                    lfour.style.marginLeft = "16px";
                    } else {
                    menu.style.width = "0px";
                    ltwo.style.marginLeft = "0px";
                    lthree.style.marginLeft = "0px";
                    lfour.style.marginLeft = "0px";
                    } 
                    }
            
                    // Add event listener to switcher
                    el.addEventListener("click", menuSwitcher, false);
            `}
          </Script>
    </>
  }