import { gql } from "@apollo/client";
import client from "../apollo-client";
import Layout from '../components/layout'
import Head from 'next/head'

export default function Home({frontinfo}) {
  return (
    <Layout>
      <Head>
        <title>{frontinfo.generalSettings.title}</title>
        <meta name="description" content={frontinfo.generalSettings.description} />
      </Head>

      <main>
          <section dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.tekstIntroNaPierwszymWidoku}}>
          </section>
        <section>
          <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.gdanskPrzyszlosciTytul}}>
          </h2>
          <div dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.gdanskPrzyszlosciTresc}}>
          </div>
        </section>
        <section>
          <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.eksperciTytul}}>
          </h2>
          <div dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.eksperciTresc}}>
          </div>
        </section>
        <section>
          <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.scenariuszePrzyszlosciTytul}}>
          </h2>
          <div dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.scenariuszePrzyszlosciTresc}}>
          </div>
        </section>
        <section>
          <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.procesBadawczyTytul}}>
          </h2>
          <div dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.procesBadawczyTresc}}>
          </div>
        </section>
        <section>
          <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.shiftCardsTytul}}>
          </h2>
          <div dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.shiftCardsTresc}}>
          </div>
        </section>
      </main>
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