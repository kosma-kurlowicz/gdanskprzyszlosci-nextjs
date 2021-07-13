import { gql } from "@apollo/client"
import client from "../../apollo-client"
import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function scenariuszThree( {scenariuszinfo} ) {
    return (
        <Layout>
        <Head>
        <title>{scenariuszinfo.cptScenariuszBy.title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="../../gp-icon.png" />
        </Head>
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