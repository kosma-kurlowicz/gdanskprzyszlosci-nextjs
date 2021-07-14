import { gql } from "@apollo/client"
import client from "../apollo-client"
import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import Script from 'next/script'

export default function Home({frontinfo}) {
  return (
    <Layout>
      <Head>
        <title>{frontinfo.generalSettings.title}</title>
        <meta name="description" content={frontinfo.generalSettings.description} />
        <link rel="icon" href="/gp-icon.png" />
      </Head>
      <div id="landing-page-abovetf">
        <div id="landing-page-abovetf-col-left">
        <div>
          <Image src="/svg/gdansk-przyszlosci-logo.svg" width={280} height={280} alt="" />
        </div>
        <div dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.tekstIntroNaPierwszymWidoku}}></div>
        </div>
        <section id="flag"></section>
        <canvas id="landingpage-intro-webgl"></canvas>
      </div>
      <main id="main">
        <article>
          <section className="block">
            <div id="intro-blob-two">
              <section id="blob-two"></section>
            </div>
            <div className="column column-narrow">
              <div className="sticky">
                <h1 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.gdanskPrzyszlosciTytul}}></h1>
              </div>
            </div>
            <div className="column column-wide" dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.gdanskPrzyszlosciTresc}}>
            </div>
          </section>
          <section className="block" id="cytaty-badania">
            <div className="column column-narrow">
              <div className="sticky">
                <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.eksperciTytul}}></h2>
              </div>
            </div>
            <div className="column column-wide" id="column-quotes">
            <Splide
              options={ {
                rewind : false,
                arrows : false,
                width  : '80vw',
              } }
            >
              <SplideSlide>
              <figure>
                <blockquote>
                    <p>&#8222;Z perspektywy zdrowia psychicznego i fizycznego (...), ludzie nie mogą mieć kontaktów wyłącznie zapośredniczonych przez media społecznościowe. Jeżeli w miastach zanikać będą przestrzenie zaprojektowane do gromadzenia się, to powinno się je &lsquo;ujakościawiać&lsquo;, żeby zachęcać do gromadzenia się na zewnątrz, do wychodzenia, do spotykania.&#8221;</p>
                </blockquote>
                <figcaption>—Ewa Klekot</figcaption>
            </figure>
              </SplideSlide>
              <SplideSlide>
              <figure>
                <blockquote>
                    <p>&#8222;W mieście to wszystko jest wymieszane. Nie ma natury i kultury, tylko są naturkultury.&#8221;</p>
                </blockquote>
                <figcaption>—Ewa Klekot</figcaption>
            </figure>
              </SplideSlide>
              <SplideSlide>                <figure>
                  <blockquote>
                      <p>&#8222;Przyszłość to jest coś, co kształtujemy. Mi bliska jest narracja solarpunk, czyli wysoki rozwój technologiczny z dużą bioróżnorodnością. Solarpunk ma korzenie ekofeministyczne. To jest taka sytuacja, że siedzisz wokól zieleni, a sztuczna inteligencja wspiera.&#8221;</p>
                  </blockquote>
                  <figcaption>—Joanna Erbel</figcaption>
              </figure></SplideSlide>
              <SplideSlide>                <figure>
                  <blockquote>
                      <p>&#8222;Całe miasto ma dobrze działać, a nie jedna inwestycja z dużym budżetem. (...) Berlińskie podejście, żeby działać na niższych budżetach, ale w większej skali, to jest ciekawy trop do pomyślenia.&#8221;</p>
                  </blockquote>
                  <figcaption>—Paweł Jaworski</figcaption>
              </figure></SplideSlide>
              <SplideSlide>                <figure>
                  <blockquote>
                      <p>&#8222;Dla mnie wskaźnikiem mierzenia jakości życia w mieście jest (...) dostępność wyboru - we wszystkich sferach. Poczynając od możliwości zawierania ślubu z innymi osobami, kończąc na sieciówkach sklepów spożywczych. (...) im szerszy jest wybór we wszystkich sferach naszego życia, tym wyższa jest jakośc życia w mieście.&#8221;</p>
                  </blockquote>
                  <figcaption>—Olga Khabibulina</figcaption>
              </figure></SplideSlide>
              <SplideSlide>                <figure>
                  <blockquote>
                      <p>&#8222;Chciałbym, żeby w przyszłości zyskał na znaczeniu transport pibliczny, ale przede wszystkim aktywna mobilność. (...) Epidemia otyłości to też problem miast i tutaj ta mobilność jest doskonałym narzędziem. Odwrócona piramida mobilności zakłada coś takiego, że na samej górze jest ruch pieszy, później rowerowy, transport publiczny i samochód.&#8221;</p>
                  </blockquote>
                  <figcaption>—Marcin Chlewicki</figcaption>
                </figure></SplideSlide>
              <SplideSlide>                <figure>
                  <blockquote>
                      <p>&#8222;Wcale nie wiemy, czy mieszkańcy Jerycha nazywali je miastem. Rzymianie wiemy, że nazywali [Rzym] miastem, mieszkańcy Aten również uważali, że mieszkali w mieście. Ale te ich doświadczenia były inaczej konstruowane niż nasze. My sobie uzurpujemy prawa do nazywania różnych miejsc miastami, na tym opieramy swoje rozumienie miasta.&#8221;</p>
                  </blockquote>
                  <figcaption>—Ewa Klekot</figcaption>
                </figure></SplideSlide>
                <SplideSlide>                <figure>
                  <blockquote>
                      <p>&#8222;Miasta (...) śnią o większej autonomii. Państwo narodowe jest jedynym podmiotem w obecnej chwili,  które jest w stanie utrzymywać pokój (...) W związku z tym, że urbanizacja postępuje, musi też postępować polityka. Więc miasta śnią, by mieć większy potencjał polityczny.&#8221;</p>
                  </blockquote>
                  <figcaption>—Ewa Klekot</figcaption>
                </figure></SplideSlide>
                <SplideSlide>                <figure>
                  <blockquote>
                      <p>&#8222;Myślę, że największe pokłosie w życiu w mieście będzie miało to, jak sobie poradzimy w kontekście zdrowia psychicznego. To jest bomba, która kiedyś wybuchnie. Bo te dzieciaki kiedyś dorosną i będą tym [miastem] zarządzać.&#8221;</p>
                  </blockquote>
                  <figcaption>—Michał Pielechowski</figcaption>
                </figure></SplideSlide>
            </Splide>
            </div>
          </section>
          <section className="block" id="scenariusze-przyszlosci">
            <div className="block-bloby">
            </div>
            <div className="column column-narrow">
              <div className="sticky">
                <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.scenariuszePrzyszlosciTytul}}></h2>
              </div>
            </div>
            <div className="column column-wide" dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.scenariuszePrzyszlosciTresc}}></div>
          </section>
          <section className="block">
            <div className="column column-narrow">
              <div className="sticky">
                <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.procesBadawczyTytul}}></h2>
              </div>
            </div>
            <div className="column column-wide" dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.procesBadawczyTresc}}>
            </div>
          </section>
          <section className="block" style={{marginBottom:'8rem'}}>
            <div className="column column-narrow">
              <div className="sticky">
              <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.shiftCardsTytul}}></h2>
              </div>
            </div>
            <div className="column column-wide" id="pobierz-raport" dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.shiftCardsTresc}}>
            </div>
          </section>
        </article>
      </main>
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

        `}
      </Script>
      <Script>
        {`
  var section = document.querySelector('#flag');
  var scene = new THREE.Scene(); 
  var camera = new THREE.PerspectiveCamera( 46, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  }); 
  renderer.setSize( window.innerWidth, window.innerHeight ); 
  section.appendChild(renderer.domElement);

  var loader = new THREE.TextureLoader();
  var geometry = new THREE.PlaneGeometry(1, 1, 50, 50);

  var material = new THREE.MeshBasicMaterial({
    // color: 0xE69A12,
    // wireframe: true
    map: loader.load("/webp/blob-large-1200x1200.webp")
  });

  var flag = new THREE.Mesh(geometry, material);
  scene.add(flag);
  camera.position.z = 1;
  camera.position.x = -0.46;
  camera.position.y = -0.2;

  var clock = new THREE.Clock();

function animate(){
  const time = clock.getElapsedTime();
  
  flag.geometry.vertices.map(v => {
    const waveX1 = 0.01 * Math.cos(v.x * 6 + time/8);
    const waveX2 = 0.01 * Math.sin(v.x * 1.2 + time/8);
    const waveY1 = 0.01 * Math.sin(v.y * 12 + time/8);
    
    v.z = (waveX1 * 6) - waveX2 + (waveY1 * 6);

    flag.rotation.z += 0.0000002;
  })
  
  flag.geometry.verticesNeedUpdate = true;
  
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
        `}
      </Script>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query MyQuery {
      page(id: "cG9zdDoyMA==") {
        sekcjeFrontPage {
          tekstIntroNaPierwszymWidoku
          gdanskPrzyszlosciTresc
          gdanskPrzyszlosciTytul
          eksperciTytul
          eksperciTresc
          scenariuszePrzyszlosciTresc
          scenariuszePrzyszlosciTytul
          procesBadawczyTytul
          procesBadawczyTresc
          shiftCardsTytul
          shiftCardsTresc
        }
      }
      generalSettings {
        title
        description
      }
    }
    `,
  });

  return {
    props: {
      frontinfo: data,
    },
 };
}