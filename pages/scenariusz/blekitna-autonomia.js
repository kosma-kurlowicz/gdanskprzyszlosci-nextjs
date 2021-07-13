import { gql } from "@apollo/client"
import client from "../../apollo-client"
import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Script from "next/script"

export default function scenariuszFour( {scenariuszinfo} ) {
    return (
        <Layout>
        <Head>
        <title>{scenariuszinfo.cptScenariuszBy.title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="../../gp-icon.png" />
        </Head>
        <div id="landing-page-spotec">
          <section id="spotec"></section>
        </div>
        <main id="main">
          <article>
            <section className="block block-intro">
              <div className="column column-narrow">
                <div className="sticky">
                  <h1>Scenariusz {scenariuszinfo.cptScenariuszBy.scenariuszeInformacjeStale.numerScenariusza}:<br /> {scenariuszinfo.cptScenariuszBy.title}</h1>
                </div>
              </div>
              <div className="column column-wide">
                <div className="column-animation-spacer"></div>
                <div dangerouslySetInnerHTML={{__html: scenariuszinfo.cptScenariuszBy.content}}></div>
              </div>
            </section>
            <section className="block">
              <div className="column column-narrow">
                <div className="sticky">
                  <h2>{scenariuszinfo.cptScenariuszBy.scenariuszeInformacjeStale.osWartosci}</h2>
                  <div dangerouslySetInnerHTML={{__html: scenariuszinfo.cptScenariuszBy.scenariuszeInformacjeStale.osWartosciOpisPodTytulem}}></div>
                </div>
              </div>
              <div className="column column-wide">
                <figure dangerouslySetInnerHTML={{__html: scenariuszinfo.cptScenariuszBy.scenariuszeInformacjeStale.osWartosciTabela}}>
                </figure>
              </div>
            </section>
            <section className="block">
              <div className="column column-narrow">
                <div className="sticky">
                  <h2>{scenariuszinfo.cptScenariuszBy.scenariuszeInformacjeStale.macierzReakcjiTytul}</h2>
                  <div dangerouslySetInnerHTML={{__html: scenariuszinfo.cptScenariuszBy.scenariuszeInformacjeStale.macierzReakcjiOpisPodTytulem}}></div>
                </div>
              </div>
              <div className="column column-wide">
                <figure className="macierz-reakcji">
                  <div className="quarter tl"><p className="matrix-title">Wspieraj</p>
                   <ul>
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-alternatywne"><a>alternatywne źródła energii</a></Link></li>
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-poza"><a>poza tradycyjnym systemem edukacji</a></Link></li>
                    </ul>
                </div>
                <div className="quarter tr"><p className="matrix-title">Inspiruj się</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-zyjace"><a>żyjące budynki</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-microliving"><a>microliving</a></Link></li>
                  </ul>
                </div>
                <div className="quarter bl"><p className="matrix-title">Obserwuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-inteligentny"><a>inteligentny dom</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-automatyzacja"><a>automatyzacja mobilności</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-algorytmizacja"><a>algorytmizacja życia</a></Link></li>
                  </ul>
                </div>
                <div className="quarter br"><p className="matrix-title">Hamuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-blekitny"><a>błękitny kryzys</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-walki"><a>walki społeczne</a></Link></li>
                  </ul>
                </div>
                </figure>
              </div>
            </section>
          </article>
        </main>
        <Script>
          {`
                    var section = document.querySelector('#spotec');
                    var scene = new THREE.Scene(); 
                    var camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
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
                      map: loader.load("https://gps.chaocos.online/webp/blob-rainbow-4-600x600.webp")
                    });
                  
                    var flag = new THREE.Mesh(geometry, material);
                    scene.add(flag);
                    camera.position.z = 1;
                    camera.position.x = 0;
                    camera.position.y = 0;
                  
                    var clock = new THREE.Clock();
                  
                  function animate(){
                    const time = clock.getElapsedTime();
                    
                    flag.geometry.vertices.map(v => {
                      const waveX1 = 0.004 * Math.cos(v.x * 6 + time/2);
                      const waveX2 = 0.004 * Math.sin(v.x * 1.2 + time/2);
                      const waveY1 = 0.004 * Math.sin(v.y * 6 + time/2);
                      
                      v.z = (waveX1 * 6) - waveX2 + (waveY1 * 6);
                  
                      flag.rotation.z += 0.00000002;
                    })
                    
                    flag.geometry.verticesNeedUpdate = true;
                    
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                  }
                  
                  animate();
          `}
        </Script>
        <Script>
          {`
               tippy('#dictionary-akwakultura', {
                content: 'Hodowla ryb i owoców morza w naturalnych lub sztucznych warunkach wodnych z wykorzystaniem technik zwiększających produkcję powyżej poziomu możliwego do osiągnięcia w środowisku naturalnym.',
               });
               tippy('#dictionary-hydroponika', {
                 content: 'Alternatywny sposób uprawy roślin, w którym nie wykorzystuje się ziemi, lecz granulat utrzymujący odpowiedni poziom nawodnienia.',
               });
               tippy('#dictionary-makroglony', {
                 content: 'Wielokomórkowe glony, których uprawa przemysłowa daje możliwość wytwarzania biomasy wykorzystywanej jako podstawa produkcji wielu artykułów. Makroglony mogą przyczynić się do zwiększenia samowystarczalności miasta czy dzielnicy w zakresie produkcji żywności i/lub bioenergii.',
               });
               tippy('#dictionary-naturokultura', {
                 content: 'Termin wprowadzony przez antropologa Bruno Latoura, który kwestionuje dualistyczny podział na naturę i kulturę. Latour podkreśla istnienie ciągłego wzajemnego przepływu natury i kultury, wskazując na naturokulturę jako obszar współdziałania i interakcji.',
               });
               tippy('#dictionary-internet-rzeczy', {
                 content: 'Koncepcja zakładająca, że dzięki podłączeniu do sieci bezprzewodowej urządzenia mogą się ze sobą kontaktować i przekazywać informacje w czasie rzeczywistym, m.in. w celu poprawy doświadczeń użytkownika.',
               });
               tippy('#dictionary-mobilnosc-jako', {
                 content: 'Koncepcja stawiająca pasażera w centrum doświadczeń, umożliwiając mu zaplanowanie podróży i wybranie najkorzystniejszej trasy składającej się z różnych środków transportu (np. roweru miejskiego, tramwaju, wspólnej taksówki) w ramach jednego kanału cyfrowego (np. aplikacji).',
               });
          `}
        </Script>
        </Layout>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query MyQuery {
        cptScenariuszBy(uri: "scenariusz/blekitna-autonomia") {
          id
          title
          scenariuszeInformacjeStale {
            numerScenariusza
            macierzReakcjiTytul
            macierzReakcjiOpisPodTytulem
            osWartosci
            osWartosciOpisPodTytulem
            osWartosciTabela
          }
          content
        }
      } 
      `,
    });
  
    return {
      props: {
        scenariuszinfo: data,
      },
   };
  }