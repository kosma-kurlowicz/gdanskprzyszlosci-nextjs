import { gql } from "@apollo/client"
import client from "../../apollo-client"
import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Script from "next/script"

export default function scenariuszTwo( {scenariuszinfo} ) {
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
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-demokratyzacja"><a>demokratyzacja miast</a></Link></li>
                      <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-agetech"><a>agetech</a></Link></li>
                    </ul>
                </div>
                <div className="quarter tr"><p className="matrix-title">Inspiruj si??</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-udoskonalony"><a>udoskonalony cz??owiek</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-haptyczne"><a>haptyczne wsp????odczuwanie</a></Link></li>
                  </ul>
                </div>
                <div className="quarter bl"><p className="matrix-title">Obserwuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-autonomia"><a>autonomia sztucznej inteligencji</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-zmiany"><a>zmiany populacji miast</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-nieustanny"><a>nieustanny nadz??r mieszka??c??w</a></Link></li>
                  </ul>
                </div>
                <div className="quarter br"><p className="matrix-title">Hamuj</p>
                  <ul>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-natezenie"><a>nat????enie ruchu aut</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-technofeudalizm"><a>technofeudalizm</a></Link></li>
                    <li><div className="yellow-dot"></div><Link href="/shift-cards#sc-nieekologiczne"><a>nieekologiczne materia??y</a></Link></li>
                  </ul>
                </div>
                </figure>
              </div>
            </section>
          </article>
        </main>
        <Script>
          {`
                          var sectionpoma = document.querySelector('#spotec');
                          var scene = new THREE.Scene(); 
                          var camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
                          var renderer = new THREE.WebGLRenderer({
                            alpha: true,
                            antialias: true,
                          }); 
                          renderer.setSize( window.innerWidth, window.innerHeight ); 
                          sectionpoma.appendChild(renderer.domElement);
                        
                          var loaderpoma = new THREE.TextureLoader();
                          var geometry = new THREE.PlaneGeometry(1, 1, 50, 50);
                        
                          var material = new THREE.MeshBasicMaterial({
                            // color: 0xE69A12,
                            // wireframe: true
                            map: loaderpoma.load("/webp/blob-rainbow-2-600x600.webp")
                          });
                        
                          var flag = new THREE.Mesh(geometry, material);
                          scene.add(flag);
                          camera.position.z = 1;
                          camera.position.x = 0;
                          camera.position.y = 0;
                        
                          var clockpoma = new THREE.Clock();
                        
                        function animate(){
                          var time = clockpoma.getElapsedTime();
                          
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
                tippy('#dictionary-grafen', {
                  content: 'Materia?? o grubo??ci zaledwie jednego atomu posiadaj??cy wyj??tkowe w??a??ciwo??ci: jest wytrzyma??y, elastyczny, transparentny oraz charakteryzuje si?? wysokim przewodnictwem cieplnym i elektrycznym.',
                });
                tippy('#dictionary-spieniony-metal', {
                  content: 'Niezwykle lekki metaliczny materia??, kt??rego pory wype??nione s?? gazem.',
                });
                tippy('#dictionary-interfejs-mozg', {
                  content: 'Trwaj?? zaawansowane badania nad stworzeniem interfejsu, kt??ry umo??liwia??by komunikacj?? pomi??dzy m??zgiem a urz??dzeniem zewn??trznym. Takie rozwi??zanie mo??e ca??kowicie zmieni?? nasz spos??b komunikacji oraz relacj?? z technologi?? w przysz??o??ci.',
                });
                tippy('#dictionary-citizen-twins', {
                  content: 'Technologia umo??liwiaj??ca stworzenie cyfrowych reprezentacji fizycznej istoty ludzkiej, a co za tym idzie ca??kowite przeniesienie analogowego mieszka??ca do przestrzeni cyfrowej.',
                });
                tippy('#dictionary-smog-mechaniczny', {
                  content: 'Rodzaje zanieczyszczenia przestrzennego spowodowane przedostawaniem si?? do atmosfery szkodliwych zwi??zk??w chemicznych oraz zanieczyszczenie ??wiat??em czy d??wi??kiem.',
                });
                tippy('#dictionary-farma-wertykalna', {
                  content: 'Rodzaj farm uprawianych pionowo zajmuj??cych znacznie mniej miejsca ni?? tradycyjne rolnictwo, co wp??ywa na wydajno???? przestrzenn??. Dzi??ki cz????ciowo sztucznemu o??wietleniu i wykorzystaniu technologii kontroli wzrostu farmy wertykalne s?? bardziej efektywne.',
                });
                tippy('#dictionary-uprawa-aeroponiczna', {
                  content: 'Uprawa ro??lin w ??rodowisku powietrznym lub aerozolowym, bez u??ycia gleby.',
                });
                tippy('#dictionary-hyperloop', {
                  content: 'Nowy ??rodek transportu tunelowego (pasa??erskiego i towarowego) umo??liwiaj??cy superszybkie przemieszczanie si?? dzi??ki aerodynamicznym kapsu??om. Planowana osi??galna pr??dko???? Hyperloop ma wynosi?? ponad 1200 km/h, a sama kapsu??a ma pomie??ci?? jednorazowo 16 os??b.',
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
        cptScenariuszBy(uri: "scenariusz/pograzone-megapolis") {
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