import { gql } from "@apollo/client"
import client from "../../apollo-client"
import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

export default function scenariuszOne( {scenariuszinfo} ) {
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
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-przypadkowosc"><a>przypadkowość kontaktów</a></Link></li>
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-edukacja"><a>edukacja dla różnorodności</a></Link></li>
                    </ul>
                </div>
                <div className="quarter tr"><p className="matrix-title">Inspiruj się</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-odwrocona"><a>odwrócona piramida mobilności</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-technologie"><a>technologie dla ludzkości</a></Link></li>
                  </ul>
                </div>
                <div className="quarter bl"><p className="matrix-title">Obserwuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-wirtualne"><a>wirtualne kopie świadomości</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-praca"><a>praca jako dobro luksusowe</a></Link></li>
                  </ul>
                </div>
                <div className="quarter br"><p className="matrix-title">Hamuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-atomizacja"><a>atomizacja życia społecznego</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-grupy"><a>grupy niewidzialne</a></Link></li>
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
                  map: loader.load("/webp/blob-rainbow-600x600.webp")
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
                tippy('#dictionary-miasto-relacyjne', {
                  content: 'Koncentracja na relacjach i stopniu powiązań społecznych (i nie tylko) między osobami (oraz nie-ludźmi). Opiera się na etyce troski, która zakłada, że nikt nie jest pozostawiony samemu sobie, a społeczeństwo musi skupiać się przede wszystkim na najsłabszych.',
                });
                tippy('#dictionary-obieg-cyrkularny', {
                  content: 'Założenie, że wartość produktów, materiałów i zasobów ma być utrzymywana w gospodarce możliwie jak najdłużej, by w efekcie ograniczyć wytwarzanie odpadów do minimum.',
                });
                tippy('#dictionary-miasto-gabka', {
                  content: 'Koncepcja zakładająca stworzenie systemu gospodarowania wodą w mieście, pozwalającego retencjonować (wchłaniać), magazynować i uwalniać ją w odpowiednim czasie np. podczas suszy lub upałów.',
                });
                tippy('#dictionary-solarpunk', {
                  content: 'Wizja świata przyszłości, w którym rozwiązania technologiczne wspierają ludzi w stawieniu czoła kluczowym wyzwaniom wynikającym ze zmian klimatu.',
                });
                tippy('#dictionary-ekonomia-empatii', {
                  content: 'Narastające konflikty i rozwarstwienie społeczne, zmiany środowiskowe – ale i takie sytuacje jak pandemia – generują coraz wyraźniejszą potrzebę poszukiwania i wdrażania rozwiązań zbudowanych na empatii i współodczuwaniu.',
                });
                tippy('#dictionary-jadalne-parki', {
                  content: 'Wielkopowierzchniowe parki roślinne, w których rosną drzewa owocowe i warzywa. Zapewniają otwarty dostęp do świeżej żywności dla mieszkańców.',
                });
                tippy('#dictionary-internet-rzeczy', {
                  content: 'Koncepcja zakładająca, że dzięki podłączeniu do sieci bezprzewodowej urządzenia mogą się ze sobą kontaktować i przekazywać informacje w czasie rzeczywistym, m.in. w celu poprawy doświadczeń użytkownika.',
                });
                tippy('#dictionary-szklo-solarne', {
                  content: 'Szkło, które przekształca energię słoneczną w energię elektryczną.',
                });
                tippy('#dictionary-sztuczne-slonce', {
                  content: 'Reaktor fuzji jądrowej, która może stać się źródłem najczystszej energii – podczas reakcji fuzji jądrowej wydzielane są ogromne ilości energii bez równoczesnego uwalniania jakichkolwiek gazów cieplarnianych. Reaktor odtwarza reakcje zachodzące w jądrze Słońca.',
                });
                tippy('#dictionary-materialy-biomimetyczne', {
                  content: 'Stworzone przez człowieka materiały, które imitują procesy zachodzące w przyrodzie.',
                });
                tippy('#dictionary-biosyntetyczny-jedwab', {
                  content: 'Wytrzymały, niezwykle trwały biomateriał wytworzony przez człowieka ze szczepu bakterii. Właściwościami przypomina jedwab pajęczy.',
                });
                tippy('#dictionary-piramida-mobilnosci', {
                  content: 'Podejście w projektowaniu miast stawiające w centrum aktywną mobilność (ruch pieszy, rowerowy i transport zbiorowy) przy regularnym ograniczaniu ruchu samochodowego.',
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
        cptScenariuszBy(uri: "scenariusz/spolecznoczule-technium") {
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