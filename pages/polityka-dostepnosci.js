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
          </article>
        </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query MyQuery {
        pageBy(uri: "polityka-dostepnosci") {
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