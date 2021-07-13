import { gql } from "@apollo/client"
import client from "../apollo-client"
import Layout from '../components/layout'
import Head from 'next/head'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import Script from 'next/script'

export default function Home({frontinfo}) {
  return (
    <Layout>
      <Head>
        <title>{frontinfo.generalSettings.title}</title>
        <meta name="description" content={frontinfo.generalSettings.description} />
        <link rel="icon" href="/gp-icon.png" />
      </Head>
      <main id="main">
        <article>
          <section className="block">
            <div id="intro-blob-two">
              <section id="blob-two"></section>
            </div>
            <div className="column column-narrow">
              <div className="sticky">
                <h1 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.gdanskPrzyszlosciTytul}}></h1>
              </div>
            </div>
            <div className="column column-wide" dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.gdanskPrzyszlosciTresc}}>
            </div>
          </section>
          <section className="block" id="cytaty-badania">
            <div className="column column-narrow">
              <div className="sticky">
                <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.eksperciTytul}}></h2>
              </div>
            </div>
            <div className="column column-wide" id="column-quotes">
            <Splide
              options={ {
                rewind : false,
                arrows : false,
                width  : '80vw',
              } }
            >
              <SplideSlide>
                <p>aaa</p>
              </SplideSlide>
              <SplideSlide>
                <p>bbb</p>
              </SplideSlide>
            </Splide>
            </div>
          </section>
          <section className="block" id="scenariusze-przyszlosci">
            <div className="block-bloby">
            </div>
            <div className="column column-narrow">
              <div className="sticky">
                <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.scenariuszePrzyszlosciTytul}}></h2>
              </div>
            </div>
            <div className="column column-wide" dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.scenariuszePrzyszlosciTresc}}></div>
          </section>
          <section className="block">
            <div className="column column-narrow">
              <div className="sticky">
                <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.procesBadawczyTytul}}></h2>
              </div>
            </div>
            <div className="column column-wide" dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.procesBadawczyTresc}}>
            </div>
          </section>
          <section className="block" style={{marginBottom:'8rem'}}>
            <div className="column column-narrow">
              <div className="sticky">
              <h2 dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.shiftCardsTytul}}></h2>
              </div>
            </div>
            <div className="column column-wide" id="pobierz-raport" dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.shiftCardsTresc}}>
            </div>
          </section>
        </article>
        <div dangerouslySetInnerHTML={{__html: frontinfo.page.sekcjeFrontPage.tekstIntroNaPierwszymWidoku}}></div>
      </main>
      <Script>
        {`
        
        `}
      </Script>
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