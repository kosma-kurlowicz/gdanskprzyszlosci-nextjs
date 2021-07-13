import { gql } from "@apollo/client"
import client from "../apollo-client"
import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function pageinfo( {pageinfo} ) {
    return (
        <Layout>
        <Head>
        <title>{pageinfo.pageBy.title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="../../gp-icon.png" />
        </Head>
        <main id="main">
          <article>
            <section className="block block-intro">
                <div className="column column-narrow">
                    <div className="sticky">
                        <h1>{pageinfo.pageBy.title}</h1>
                    </div>
                </div>
                <div className="column column-wide" dangerouslySetInnerHTML={{__html: pageinfo.pageBy.content}}></div>
            </section>
            <section className="block">
              <div className="column column-narrow">
                <div className="sticky"><h2>12 wyzwań dla miast w skali globalnej</h2>
                </div>
              </div>
              <div className="column column-wide">
                <figure>
                  <table id="tabela-wyzwania">
                    <thead>
                  <tr>
                    <td>Obszar</td>
                    <td>Wyzwanie (opisane w Shift Cards)</td>
                  </tr>
                </thead>
                    <tbody>
                  <tr>
                    <td><p>Praca, pieniądze, ekonomia</p></td>
                    <td><Link href="/shift-cards#block-technium"><a target="_self">Ekonomia napędzana technium</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Bydynki, dom</p></td>
                    <td><Link href="/shift-cards#block-skorup"><a target="_self">Redefinicja miejskich skorup</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Relacje</p></td>
                    <td><Link href="/shift-cards#block-wirtualna"><a target="_self">Wirtualna bliskość i fizyczna samotność w mieście przyszłości</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Podejmowanie decyzji, władza, system</p></td>
                    <td><Link href="/shift-cards#block-spolaryzowane"><a target="_self">Kierowanie miastem w spolaryzowanym społeczeństwie</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Społeczność</p></td>
                    <td><Link href="/shift-cards#block-obcy"><a target="_self">Obcy i inny w miejskich strukturach mieszkańców</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Bezpieczeństwo</p></td>
                    <td><Link href="/shift-cards#block-mirror"><a target="_self">Bezpieczeństwo w mirror city</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Klimat, środowisko, natura</p></td>
                    <td><Link href="/shift-cards#block-katastrofa"><a target="_self">Życie miejskie w katastrofie ekologicznej</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Jedzenie</p></td>
                    <td><Link href="/shift-cards#block-zasoby"><a target="_self">Kończące się zasoby dla rosnącej populacji mieszkańców</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Edukacja</p></td>
                    <td><Link href="/shift-cards#block-nanosekunda"><a target="_self">Uczenie się w kulturze nanosekundy</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Zdrowie, medycyna</p></td>
                    <td><Link href="/shift-cards#block-usprawnieni"><a target="_self">Usprawnieni, długowieczni mieszkańcy</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Technologie, innowacje</p></td>
                    <td><Link href="/shift-cards#block-strumienie"><a target="_self">Nieograniczone strumienie danych</a></Link></td>
                  </tr>
                  <tr>
                    <td><p>Transport, mobilność, infrastruktura</p></td>
                    <td><Link href="/shift-cards#block-mobilnosc"><a target="_self">Mobilność w erze door-to-door</a></Link></td>
                  </tr>
                </tbody>
                  </table>
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
        pageBy(uri: "proces-badawczy") {
          id
          title
          content
        }
      }      
      `,
    });
  
    return {
      props: {
        pageinfo: data,
      },
   };
  }