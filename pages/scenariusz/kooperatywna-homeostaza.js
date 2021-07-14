import { gql } from "@apollo/client"
import client from "../../apollo-client"
import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Script from "next/script"

export default function scenariuszThree( {scenariuszinfo} ) {
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
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-ekonomia"><a>ekonomia kooperatyw</a></Link></li>
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-wychowanie"><a>wychowanie do innowacyjności</a></Link></li>
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-samowystarczalnosc"><a>samowystarczalność miejska</a></Link></li>
                    </ul>
                </div>
                <div className="quarter tr"><p className="matrix-title">Inspiruj się</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-miasto"><a>miasto dostępne</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-kompaktowe"><a>kompaktowe przestrzenie miejskie</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-nowa"><a>nowa jakośc żywności</a></Link></li>
                  </ul>
                </div>
                <div className="quarter bl"><p className="matrix-title">Obserwuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-wsiowienie"><a>wsiowienie miast</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-rosnaca"><a>rosnąca suburbanizacja</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-nieustanny"><a>niesutanny nadzór mieszkańców</a></Link></li>
                  </ul>
                </div>
                <div className="quarter br"><p className="matrix-title">Hamuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-elektrosmog"><a>elektrosmog</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-niezrownowazona"><a>niezrównoważona produkcja</a></Link></li>
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
                      map: loader.load("/webp/blob-rainbow-3-600x600.webp")
                    });
                  
                    var flag = new THREE.Mesh(geometry, material);
                    scene.add(flag);
                    camera.position.z = 1;
                    camera.position.x = 0;
                    camera.position.y = 0;
                  
                    var clock = new THREE.Clock();
                  
                  function animate(){
                    var time = clock.getElapsedTime();
                    
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
                tippy('#dictionary-blockchain', {
                  content: 'Technologia oparta na zdecentralizowanym łańcuchu bloków, za którego weryfikację odpowiedzialni są wyłącznie użytkownicy. Dzięki temu przechwytywanie danych jest prawie niemożliwe. Blockchain może być wykorzystywany we wszystkich sektorach.',
                });
                tippy('#dictionary-wsiowienie', {
                  content: 'Koncepcja oparta na projektowaniu środowiskowym skoncentrowanym na budowaniu miast przyjaznych środowisku i społecznie odpowiedzialnych. Dużą uwagę przykłada się tu także do rozwoju dzielnic i ich autonomii, nie zaś do miasta jako jednego, określonego tworu.',
                });
                tippy('#dictionary-gornictwo-miejskie', {
                  content: 'Metoda odzyskiwania surowców wtórnych, np. miedzi i stali z nieużywanej infrastruktury miejskiej. Nazywany też miejską kopalnią.',
                });
                tippy('#dictionary-agrihood', {
                  content: 'Koncepcja zakładająca tworzenie i prowadzenie dużych przestrzeni uprawnych w mieście. Pozwala na integrację rolnictwa z dzielnicami mieszkaniowymi, częściową autonomię żywnościową miasta przy jednoczesnym wzmacnianiu relacji społecznych.',
                });
                tippy('#dictionary-geoinzynieria-klimatu', {
                  content: 'Koncepcja zakładająca sztuczną modyfikację klimatu w celu odwrócenia negatywnych skutków zmian klimatycznych (np. wychwytywanie CO2 z atmosfery, zarządzanie promieniowaniem słonecznym poprzez wstrzykiwanie siarczanów do atmosfery czy technologie zapobiegające topnieniu lodowców).',
                });
                tippy('#dictionary-fitoplankton', {
                  content: 'Mikroorganizmy roślinne żyjące w wodze.',
                });
                tippy('#dictionary-kooperatywy-mieszkaniowe', {
                  content: 'Koncepcja współmieszkalnictwa oparta na wspólnym (w ramach jednej wspólnoty, np. przyjaciół lub osób o podobnych potrzebach lub wieku) budowaniu i zamieszkiwaniu budynków wielorodzinnych.',
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
        cptScenariuszBy(uri: "scenariusz/kooperatywna-homeostaza") {
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