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
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-przypadkowosc"><a>przypadkowo???? kontakt??w</a></Link></li>
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-edukacja"><a>edukacja dla r????norodno??ci</a></Link></li>
                    </ul>
                </div>
                <div className="quarter tr"><p className="matrix-title">Inspiruj si??</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-odwrocona"><a>odwr??cona piramida mobilno??ci</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-technologie"><a>technologie dla ludzko??ci</a></Link></li>
                  </ul>
                </div>
                <div className="quarter bl"><p className="matrix-title">Obserwuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-wirtualne"><a>wirtualne kopie ??wiadomo??ci</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-praca"><a>praca jako dobro luksusowe</a></Link></li>
                  </ul>
                </div>
                <div className="quarter br"><p className="matrix-title">Hamuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-atomizacja"><a>atomizacja ??ycia spo??ecznego</a></Link></li>
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
                  content: 'Koncentracja na relacjach i stopniu powi??za?? spo??ecznych (i nie tylko) mi??dzy osobami (oraz nie-lud??mi). Opiera si?? na etyce troski, kt??ra zak??ada, ??e nikt nie jest pozostawiony samemu sobie, a spo??ecze??stwo musi skupia?? si?? przede wszystkim na najs??abszych.',
                });
                tippy('#dictionary-obieg-cyrkularny', {
                  content: 'Za??o??enie, ??e warto???? produkt??w, materia????w i zasob??w ma by?? utrzymywana w gospodarce mo??liwie jak najd??u??ej, by w efekcie ograniczy?? wytwarzanie odpad??w do minimum.',
                });
                tippy('#dictionary-miasto-gabka', {
                  content: 'Koncepcja zak??adaj??ca stworzenie systemu gospodarowania wod?? w mie??cie, pozwalaj??cego retencjonowa?? (wch??ania??), magazynowa?? i uwalnia?? j?? w odpowiednim czasie np. podczas suszy lub upa????w.',
                });
                tippy('#dictionary-solarpunk', {
                  content: 'Wizja ??wiata przysz??o??ci, w kt??rym rozwi??zania technologiczne wspieraj?? ludzi w stawieniu czo??a kluczowym wyzwaniom wynikaj??cym ze zmian klimatu.',
                });
                tippy('#dictionary-ekonomia-empatii', {
                  content: 'Narastaj??ce konflikty i rozwarstwienie spo??eczne, zmiany ??rodowiskowe ??? ale i takie sytuacje jak pandemia ??? generuj?? coraz wyra??niejsz?? potrzeb?? poszukiwania i wdra??ania rozwi??za?? zbudowanych na empatii i wsp????odczuwaniu.',
                });
                tippy('#dictionary-jadalne-parki', {
                  content: 'Wielkopowierzchniowe parki ro??linne, w kt??rych rosn?? drzewa owocowe i warzywa. Zapewniaj?? otwarty dost??p do ??wie??ej ??ywno??ci dla mieszka??c??w.',
                });
                tippy('#dictionary-internet-rzeczy', {
                  content: 'Koncepcja zak??adaj??ca, ??e dzi??ki pod????czeniu do sieci bezprzewodowej urz??dzenia mog?? si?? ze sob?? kontaktowa?? i przekazywa?? informacje w czasie rzeczywistym, m.in. w celu poprawy do??wiadcze?? u??ytkownika.',
                });
                tippy('#dictionary-szklo-solarne', {
                  content: 'Szk??o, kt??re przekszta??ca energi?? s??oneczn?? w energi?? elektryczn??.',
                });
                tippy('#dictionary-sztuczne-slonce', {
                  content: 'Reaktor fuzji j??drowej, kt??ra mo??e sta?? si?? ??r??d??em najczystszej energii ??? podczas reakcji fuzji j??drowej wydzielane s?? ogromne ilo??ci energii bez r??wnoczesnego uwalniania jakichkolwiek gaz??w cieplarnianych. Reaktor odtwarza reakcje zachodz??ce w j??drze S??o??ca.',
                });
                tippy('#dictionary-materialy-biomimetyczne', {
                  content: 'Stworzone przez cz??owieka materia??y, kt??re imituj?? procesy zachodz??ce w przyrodzie.',
                });
                tippy('#dictionary-biosyntetyczny-jedwab', {
                  content: 'Wytrzyma??y, niezwykle trwa??y biomateria?? wytworzony przez cz??owieka ze szczepu bakterii. W??a??ciwo??ciami przypomina jedwab paj??czy.',
                });
                tippy('#dictionary-piramida-mobilnosci', {
                  content: 'Podej??cie w projektowaniu miast stawiaj??ce w centrum aktywn?? mobilno???? (ruch pieszy, rowerowy i transport zbiorowy) przy regularnym ograniczaniu ruchu samochodowego.',
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