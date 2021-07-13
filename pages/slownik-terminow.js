import { gql } from "@apollo/client"
import client from "../apollo-client"
import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function pageinfo({terminy}) {
    return (
        <Layout>
        <Head>
        <title>Słownik terminów</title>
        <meta name="description" content="" />
        <link rel="icon" href="../../gp-icon.png" />
        </Head>
        <main id="main">
          <article>
            <section className="block block-intro">
                <div className="column column-narrow">
                    <div className="sticky">
                        <h1>Słownik terminów</h1>
                    </div>
                </div>
                <div className="column column-wide">
                  <dl>
      {terminy.map((termin) => (
        <>
        <dt key={termin.id}>{termin.title}</dt>
        <dd dangerouslySetInnerHTML={{__html: termin.content}}></dd>
        </>
        ))}
                  </dl>
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
        cptTerminy(first: 100, where: {orderby: {field: TITLE, order: ASC}}) {
          nodes {
            title
            content
            id
          }
        }
      }
      `,
    });
  
    return {
      props: JSON.parse(JSON.stringify( {terminy: data.cptTerminy.nodes} )),
   };
  }