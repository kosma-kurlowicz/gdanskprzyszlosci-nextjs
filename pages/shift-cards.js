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
          <article id="shiftcards-intro-metoda">
            <section className="block block-intro">
                <div className="column column-narrow">
                    <div className="sticky">
                        <h1>{pageinfo.pageBy.title}</h1>
                    </div>
                </div>
                <div className="column column-wide" dangerouslySetInnerHTML={{__html: pageinfo.pageBy.content}}></div>
            </section>
            <section className="block">
                <div clasNames="column column-narrow">
                    <h2>Przykładowa karta</h2>
                </div>
                <div className="column column-wide">
                    <div className="shift-card shift-card-mobilnosc">
                        <div className="shift-card-header">
                            <h3>Tytuł karty</h3>
                        </div>
                        <div className="shift-card-container">
                            <div className="shift-card-quest">
                                <b>Wyzwanie</b>
                                <p>Opis wyzwania</p>
                            </div>
                            <div className="shift-card-desc"><p>Opis karty. Poniżej znajdują się symbole rodzaju karty:</p>
                                <ul>
                                    <li>społeczna</li>
                                    <li>środowiskowa</li>
                                    <li>technologiczna</li>
                                    <li>ekonomiczno-gospodarcza</li>
                                </ul>
                            </div>
                            <div className="shift-card-symbols">
                                <div className="symbol number">
                                    <p>0</p>
                                </div>
                                <div className="shift-card-example-symbols">
                                    <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
                                    <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div>
                                    <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
                                    <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="block" id="block-nanosekunda">
                <div className="column column-narrow">
                    <div className="sticky">
                        <h2>Uczenie się w kulturze nanosekundy</h2>
                    </div>
                </div>
                <div className="column column-wide">
                
                    <div className="shift-card shift-card-nanosekunda" id="sc-edukacja">
                        <div className="shift-card-header">
                            <h3>Edukacja do różnorodności</h3>
                        </div>
                        <div className="shift-card-container">
                            <div className="shift-card-quest">
                                <b>Wyzwanie</b>
                                <p>Uczenie się w kulturze nanosekundy</p>
                            </div>
                            <div className="shift-card-desc">
                                <p>Zmienia się struktura społeczeństw. Mieszkańców edukuje się w zakresie nowych kompetencji społecznych (m.in. otwartości, komunikacji ponad podziałami, elastyczności). Taki model edukacji ma odpowiadać na globalne wyzwania – polaryzację czy kryzys migracyjny.</p>
                            </div>
                            <div className="shift-card-symbols">
                            <div className="symbol number"><p>1</p></div>
                            <div className="shift-card-example-symbols">
                  <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
                  <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
                  </div>
              </div>
          </div>
          </div>
          
          
          <div className="shift-card shift-card-nanosekunda" id="sc-poza">
              <div className="shift-card-header"><h3>POZA TRADYCYJNYM SYSTEMEM EDUKACJI</h3></div>
              <div className="shift-card-container">
              <div className="shift-card-quest"><b>Wyzwanie</b><p>Uczenie się w kulturze nanosekundy</p></div>
              <div className="shift-card-desc"><p>Edukacja jest procesem nieprzerwanym. Wychodzi poza ramy placówek edukacyjnych. Ludzie stale odnawiają i doskonalą swoje umiejętności. Proces edukacji staje się elastyczny i oparty o doświadczenia – te w świecie fizycznym, jak i wirtualnym.</p></div>
              <div className="shift-card-symbols">
                  <div className="symbol number"><p>2</p></div>
                  <div className="shift-card-example-symbols">
                  <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
                  <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
                </div>
              </div>
          </div>
          </div>
          
          
<div className="shift-card shift-card-nanosekunda" id="sc-wychowanie">
<div className="shift-card-header"><h3>WYCHOWANIE DO INNOWACYJNOŚCI</h3></div>
<div className="shift-card-container">
<div className="shift-card-quest"><b>Wyzwanie</b><p>Uczenie się w kulturze nanosekundy</p></div>
<div className="shift-card-desc"><p>Postęp technologiczny i transformacja cyfrowa wymuszają wdrożenie nowego modelu edukacji, opartego na innowacyjności. Rozwijanie umiejętności miękkich (kreatywność, krytyczne myślenie, ideacja) oraz cyfrowych (z zakresu cyberbezpieczeństwa, wykorzystywania i analizy danych) staje się konieczne ze względu na automatyzację i robotyzację pracy.</p></div>
<div className="shift-card-symbols">
    <div className="symbol number"><p>3</p></div>
    <div className="shift-card-example-symbols">
    <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
    <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
    </div>
</div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-mirror">
            <div className="column column-narrow"><div className="sticky">
              <h2>Bezpieczeństwo w mirror city</h2></div>
            </div>
            <div className="column column-wide">
              
 <div className="shift-card shift-card-mirror" id="sc-autonomia">
  <div className="shift-card-header"><h3>AUTONOMIA SZTUCZNEJ INTELIGENCJI</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>bezpieczeństwo w mirror city</p></div>
  <div className="shift-card-desc"><p>Sztuczna inteligencja wkracza w coraz więcej obszarów ludzkiego życia. Wspiera ludzi w optymalizacji ich działań i w podejmowaniu decyzji. W pewnych aspektach przewyższa inteligencję człowieka. Autonomizacja to jeden z kierunków rozwoju tej technologii.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>4</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
    </div>
  </div>
</div>
</div>

 
 <div className="shift-card shift-card-mirror" id="sc-nieustanny">
  <div className="shift-card-header"><h3>NIEUSTANNY NADZÓR MIESZKAŃCÓW</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>bezpieczeństwo w mirror city</p></div>
  <div className="shift-card-desc"><p>Za sprawą kamer i czujników większość przestrzeni (w tym urządzeń i obiektów miejskich) oraz mieszkańców jest nieustannie monitorowana. To zarówno szansa dla szybkiego reagowania na zagrożenia, ale także pierwszy krok do ograniczenia prywatności mieszkańców w przestrzeni miejskiej.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>5</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
    </div>
  </div>
</div>
</div>

 
 <div className="shift-card shift-card-mirror" id="sc-algorytmizacja">
  <div className="shift-card-header"><h3>ALGORYTMIZACJA ŻYCIA</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>bezpieczeństwo w mirror city</p></div>
  <div className="shift-card-desc"><p>Większością naszych wyborów w sieci rządzą algorytmy. Dostarczają użytkownikowi informacji zgodnych z jego przekonaniami. Bańki informacyjne utrudniają funkcjonowanie w różnorodnych środowiskach w świecie fizycznym. Trudniej jest nam dyskutować, być otwartym na zmiany i opinie innych.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>6</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
    </div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-technium">
            <div className="column column-narrow"><div className="sticky">
              <h2>Ekonomie napędzane technium</h2></div>
            </div>
            <div className="column column-wide">
              
 <div className="shift-card shift-card-technium" id="sc-technofeudalizm">
  <div className="shift-card-header"><h3>TECHNOFEUDALIZM</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>ekonomie napędzane technium</p></div>
  <div className="shift-card-desc"><p>Wraz z rozwojem społeczeństwa w erze cyfrowej, kapitalistyczny model przestaje być wystarczający, Uwidacznia się zjawisko technofeudalizmu, w który, korporacje i firmy technologiczne funkcjonuj, wedle modelu feudalnego (społeczeństwo jest o, nich zależne i ma tylko pozorny wpływ na zarządzani, swoimi danymi), wkraczając w coraz większy, stopniu w każdy obszar życia.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>7</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
    </div>
  </div>
</div>
</div>

 
 <div className="shift-card shift-card-technium" id="sc-praca">
  <div className="shift-card-header"><h3>PRACA JAKO DOBRO LUKSUSOWE</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>ekonomie napędzane technium</p></div>
  <div className="shift-card-desc"><p>Postępująca robotyzacja i automatyzacja pracy sprawiają, że maszyny w coraz większym stopniu zastępują ludzi w pracy. W przemyśle wytwórczym są likwidowane miejsca pracy. Państwa rozważają wprowadzenie dochodu podstawowego.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>8</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
      </div>
  </div>
</div>
</div>

 
 <div className="shift-card shift-card-technium" id="sc-ekonomia">
  <div className="shift-card-header"><h3>EKONOMIA KOOPERATYW</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>ekonomie napędzane technium</p></div>
  <div className="shift-card-desc"><p>W miastach coraz silniejsze staje się zjawisko współdzielenia. Bazuje ono na modelu opartym o dostęp, a nie konieczność posiadania czegoś na własność. Nowymi wyznacznikami wymiany dóbr i transakcji zaczynają być współpraca, lokalność i transparentność.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>9</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      </div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-skorup">
            <div className="column column-narrow"><div className="sticky">
              <h2>Redefinicja miejskich skorup</h2></div>
            </div>
            <div className="column column-wide">
              
 <div className="shift-card shift-card-skorup" id="sc-microliving">
  <div className="shift-card-header"><h3>MICROLIVING</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>redefinicja miejskich skorup</p></div>
  <div className="shift-card-desc"><p>Ze względu na postępującą urbanizację i wzrost populacji, projektowanie przestrzeni zmierza w kierunku microlivingu. To koncepcja oparta na tworzeniu bardzo małych, ale wysoce funkcjonalnych przestrzeni.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>10</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

 
 <div className="shift-card shift-card-skorup" id="sc-zyjace">
  <div className="shift-card-header"><h3>ŻYJĄCE BUDYNKI</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>redefinicja miejskich skorup</p></div>
  <div className="shift-card-desc"><p>Wraz ze zmieniającymi się modelami życia mieszkańców, budynki stają się bardziej funkcjonalne i elastyczne. Do ich budowy wykorzystywane są nowe materiały (np. grafen czy materiały organiczne, grzyby, bambus). Żyjące budynki są w stanie dostosowywać się do zmieniających się potrzeb mieszkańców. Dodatkowo, są projektowane w sposób sprzyjający rozwijaniu więzi i interakcji pomiędzy mieszkańcami.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>11</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

 
 <div className="shift-card shift-card-skorup" id="sc-kompaktowe">
  <div className="shift-card-header"><h3>KOMPAKTOWE PRZESTRZENIE MIEJSKIE</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>redefinicja miejskich skorup</p></div>
  <div className="shift-card-desc"><p>W związku z dynamiczną urbanizacją, miasta oraz ich poszczególne części muszą stawać się coraz bardziej autonomiczne i kompaktowe. Coraz częściej mają gęstą, kwartałową zabudowę. W myśl koncepcji miasta 15-minutowego, usługi, praca czy szkoła znajdują się w niewielkiej odległości od miejsca zamieszkania danego mieszkańca.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>12</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

 
 <div className="shift-card shift-card-skorup" id="sc-rosnaca">
  <div className="shift-card-header"><h3>ROSNĄCA SUBURBANIZACJA</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>redefinicja miejskich skorup</p></div>
  <div className="shift-card-desc"><p>Mamy dziś do czynienia z tendencją nazywaną rozlewaniem się miast. Jedną z konsekwencji tego zjawiska jest suburbanizacja. To sytuacja, w ramach której więcej osób mieszka poza miastem (w strefach podmiejskich), niż w mieście, a jednocześnie osoby te aktywnie korzystają z miejskiego życia (pracują tam, uczą się, korzystają z usług).</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>13</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-mobilnosc">
            <div className="column column-narrow"><div className="sticky">
              <h2>Mobilność w erze door to door</h2></div>
            </div>
            <div className="column column-wide">
              
 <div className="shift-card shift-card-mobilnosc" id="sc-automatyzacja">
  <div className="shift-card-header"><h3>AUTOMATYZACJA MOBILNOŚCI</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>mobilność w erze door to door</p></div>
  <div className="shift-card-desc"><p>Automatyzacja mobilności w dużym stopniu wpłynie na zmianę w miejskiej infrastrukturze. Rozbudowanie infrastruktury IoT (Internet of Things – Internet Rzeczy) będzie wspierać szybsze przemieszczanie się. Zmniejszać się będzie liczba stałych przystanków, a nowe, tymczasowe, dostosowywane będą do potrzeb indywidualnych mieszkańców. Komunikacja naziemna zacznie ustępować komunikacji powietrznej.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>14</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-mobilnosc" id="sc-odwrocona">
  <div className="shift-card-header"><h3>ODWRÓCONA PIRAMIDA MOBILNOŚCI</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>mobilność w erze door to door</p></div>
  <div className="shift-card-desc"><p>W dużych europejskich miastach ulice są zwężane, a chodniki poszerzane. Ograniczony zostaje ruch aut na rzecz wdrażania koncepcji odwróconej piramidy mobilności. Pierwszeństwo w ruchu drogowym zyskują piesi i rowerzyści.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>15</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-mobilnosc" id="sc-natezenie">
  <div className="shift-card-header"><h3>NATĘŻENIE RUCHU AUT</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>mobilność w erze door to door</p></div>
  <div className="shift-card-desc"><p>W miastach mamy dziś do czynienia z natężeniem ruchu samochodowego i traktowaniem go jako podstawowego środka transportu w mieście. W obszar mobilności samochodowej inwestowane są ogromne fundusze. W miastach projektowanych dla samochodów trudniej jest wprowadzać elementy zrównoważonej mobilności.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>16</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-usprawnieni">
            <div className="column column-narrow"><div className="sticky">
              <h2>Usprawnieni, długowieczni mieszkańcy</h2></div>
            </div>
            <div className="column column-wide">
              
<div className="shift-card shift-card-usprawnieni" id="sc-udoskonalony">
  <div className="shift-card-header"><h3>UDOSKONALONY CZŁOWIEK</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>usprawnieni, długowieczni mieszkańcy</p></div>
  <div className="shift-card-desc"><p>Ludzie żyją coraz dłużej, mówi się o zjawisku długowieczności. Praca nad technologiami HET (Human Enhancement Technologies – technologie ulepszające ludzi) i edytowaniem genów to krok w kierunku eliminacji wielu chorób, z którymi dziś się zmagamy.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>17</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-usprawnieni" id="sc-miasto">
  <div className="shift-card-header"><h3>MIASTO DOSTĘPNE</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>usprawnieni, długowieczni mieszkańcy</p></div>
  <div className="shift-card-desc"><p>O dobrej jakości przestrzeni miejskich mówi się coraz częściej w kontekście dostępności. Miasto, w tym głównie przestrzenie publiczne, mają odpowiadać na potrzeby zróżnicowanych grup (osób z niepełnosprawnościami, dzieci, kobiet czy zwierząt). Taki rodzaj projektowania wpływa na poczucie bezpieczeństwa (model 8-80, w którym zarówno 8-latkowie i 80-latkowie czują się w mieście bezpiecznie).</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>18</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-usprawnieni" id="sc-agetech">
  <div className="shift-card-header"><h3>AGETECH</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>usprawnieni, długowieczni mieszkańcy</p></div>
  <div className="shift-card-desc"><p>Starzejące się społeczeństwo staje się jednym z głównych wyzwań, również dla miast. Rozwój sektora technologii przeciwko starzeniu się (agetech) czy technologii HET (Human Enhancement Technologies – technologie ulepszające ludzi) może wpłynąć na poprawę jakości życia tej grupy w mieście.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>19</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-wirtualna">
            <div className="column column-narrow"><div className="sticky">
              <h2>Wirtualna bliskość i fizyczna samotność w mieście przyszłości</h2></div>
            </div>
            <div className="column column-wide">
              
<div className="shift-card shift-card-wirtualna" id="sc-haptyczne">
  <div className="shift-card-header"><h3>HAPTYCZNE WSPÓŁODCZUWANIE</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>wirtualna bliskość i fizyczna samotność w mieście przyszłości</p></div>
  <div className="shift-card-desc"><p>Rozwój rzeczywistych i wirtualnych środowisk (technologie VR czy AR) oraz technologii haptycznych (ich zadaniem jest multisensoryczne komunikowanie się z użytkownikiem, głównie przez oddziaływanie na zmysł dotyku) umożliwi współodczuwanie w świecie cyfrowym na poziomie podobnym do tego w świecie rzeczywistym. Mówi się o relacjach z robotami i internecie zmysłów, czyli o przenoszeniu możliwości odczuwania zmysłów innych niż wzrok i słuch do świata wirtualnego.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>20</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-wirtualna" id="sc-przypadkowosc">
  <div className="shift-card-header"><h3>PRZYPADKOWOŚĆ KONTAKTÓW</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>wirtualna bliskość i fizyczna samotność w mieście przyszłości</p></div>
  <div className="shift-card-desc"><p>Miasto to przestrzeń wymiany treści społecznych i kulturowych. Wraz z rozwojem technologii, a co za tym idzie mniejszą częstotliwością korzystania z usług w mieście, zmniejsza się poziom wzajemnych interakcji w świecie rzeczywistym. Coraz częściej mówi się o potrzebie ujakościowienia przestrzeni wspólnych i stymulowania mieszkańców do spędzania w nich czasu.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>21</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-wirtualna" id="sc-atomizacja">
  <div className="shift-card-header"><h3>ATOMIZACJA ŻYCIA SPOŁECZNEGO</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>wirtualna bliskość i fizyczna samotność w mieście przyszłości</p></div>
  <div className="shift-card-desc"><p>Samotność określana jest jako plaga XXI wieku. Ma to związek z jednej strony ze starzejącym się społeczeństwem i rosnącą liczbą gospodarstw jednoosobowych. Z drugiej, z atomizacją będącą konsekwencją nadmiernego korzystania z technologii, które nie są dziś w stanie umożliwić budowania relacji na tym samym poziomie w świecie wirtualnym, co w świecie fizycznym.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>22</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-spolaryzowane">
            <div className="column column-narrow"><div className="sticky">
              <h2>Kierowanie miastem w spolaryzowanym społeczeństwie</h2></div>
            </div>
            <div className="column column-wide">
              
<div className="shift-card shift-card-kierowanie" id="sc-demokratyzacja">
  <div className="shift-card-header"><h3>DEMOKRATYZACJA MIASTA</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>Kierowanie miastem w spolaryzowanym społeczeństwie</p></div>
  <div className="shift-card-desc"><p>W miastach zaczynają być widoczne rozwiązania oparte na demokratyzacji. Polegają one na stałym współdecydowaniu mieszkańców w kwestiach miejskich (składanie wniosków, komentowanie, głosowanie, prowadzenie procesów partycypacyjnych) oraz tworzeniu otwartych narzędzi, w ramach których cyfrowe dane o mieście są transparentne. Wpisany w to jest też cały system reagowania społecznego, niepisanych zasad i praw postępowania.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>23</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-kierowanie" id="sc-samowystarczalnosc">
  <div className="shift-card-header"><h3>Samowystarczalność miejska</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>Kierowanie miastem w spolaryzowanym społeczeństwie</p></div>
  <div className="shift-card-desc"><p>Samowystarczalność miejska to model, w którym poszczególne obszary miasta stają się coraz bardziej autonomiczne. Mówi się o urban mining (odzysk materiałów, np. miedzi i stali z nieużywanej infrastruktury miejskiej), autonomicznych gospodarstwach domowych, agrihood (intergracja rolnictwa z dzielnicami mieszkaniowymi) czy wymianie energii elektrycznej dzięki technologii blockchain.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>24</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-obcy">
            <div className="column column-narrow"><div className="sticky">
              <h2>Obcy i inny w miejskich strukturach mieszkańców</h2></div>
            </div>
            <div className="column column-wide">
              
<div className="shift-card shift-card-obcy" id="sc-walki">
  <div className="shift-card-header"><h3>WALKI SPOŁECZNE</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>obcy i inny w miejskich strukturach mieszkańców</p></div>
  <div className="shift-card-desc"><p>Nierówności społeczne mają bezpośrednie przełożenie na funkcjonowanie miast. Podział przestrzeni dla wyższych i niższych klas, silna polaryzacja, silosowość, powodują segregację społeczną i przestrzenną (a co za tym idzie m.in. wykluczenie mieszkaniowe) i mogą doprowadzać do walk społecznych.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>25</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-obcy" id="sc-grupy">
  <div className="shift-card-header"><h3>GRUPY NIEWIDZIALNE</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>obcy i inny w miejskich strukturach mieszkańców</p></div>
  <div className="shift-card-desc"><p>Coraz więcej jest w miastach tzw. niewidzialnych. To grupy osób żyjących na marginesie życia miejskiego, których potrzeby nie są dostrzegane i uwzględniane w ogólnych strategiach. Mowa tu między innymi o imigrantach, osobach wykluczonych cyfrowo, z niepełnosprawnościami.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>26</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-obcy" id="sc-zmiany">
  <div className="shift-card-header"><h3>ZMIANY POPULACJI MIAST</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>obcy i inny w miejskich strukturach mieszkańców</p></div>
  <div className="shift-card-desc"><p>Zmienia się struktura populacji w miastach. Rośnie odsetek osób starszych, a spada odsetek dzieci. Mówi się już o pladze bezpłodności. Wciąż rośnie liczba gospodarstw bezdzietnych czy jednoosobowych.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>27</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-katastrofa">
            <div className="column column-narrow"><div className="sticky">
              <h2>Życie miejskie w katastrofie ekologicznej</h2></div>
            </div>
            <div className="column column-wide">
              
<div className="shift-card shift-card-katastrofa" id="sc-alternatywne">
  <div className="shift-card-header"><h3>ALTERNATYWNE ŹRÓDŁA ENERGII</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>życie miejskie w katastrofie ekologicznej</p></div>
  <div className="shift-card-desc"><p>Konieczność poszukiwania innych, alternatywnych źródeł energii to ogromne wyzwanie dla miast. Konieczne są rozwiązania zapewniające stały i nieograniczony dostęp do energii pozyskiwanej w sposób jak najbardziej zrównoważony. Rozwija się m.in. energetyka wodorowa, energetyka słoneczna, wodna, wiatrowa. Pojawiają się pomysły wykorzystywania śmieci jako zasobów - w tym także jako paliwa.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>28</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-katastrofa" id="blekitny">
  <div className="shift-card-header"><h3>BŁĘKITNY KRYZYS</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>życie miejskie w katastrofie ekologicznej</p></div>
  <div className="shift-card-desc"><p>Na świecie zmagamy się z niedoborem wody słodkiej. Ma to bezpośredni wpływ m.in. na produkcję i rolnictwo. Jednym z rozwiązań tego problemu może być odsalanie mórz i oceanów. Z kolei wskutek zmian klimatu, miasta – szczególnie te położone przy linii brzegowej – muszą brać pod uwagę ryzyko zalania.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>29</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-katastrofa" id="sc-nieekologiczne">
  <div className="shift-card-header"><h3>NIEEKOLOGICZNE MATERIAŁY</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>życie miejskie w katastrofie ekologicznej</p></div>
  <div className="shift-card-desc"><p>Beton to po wodzie jeden z najczęściej używanych materiałów na świecie. Produkcja cementu odpowiada za 8% światowych emisji co2. Deficyty piasku to istotny problem w branży budowlanej. Mamy do czynienia ze zjawiskiem starzejących się metropolii z nieekologiczną architekturą i infrastrukturą drogową.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>30</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-katastrofa" id="sc-wsiowienie">
  <div className="shift-card-header"><h3>WSIOWIENIE MIAST</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>życie miejskie w katastrofie ekologicznej</p></div>
  <div className="shift-card-desc"><p>Wsiowienie miast to koncepcja oparta o projektowanie środowiskowe, skoncentrowane na budowaniu miast przyjaznych środowisku i społecznie
 dpowiedzialnych. W jej ramach dużą uwagę przykłada się także do dzielnic i ich autonomii, a nie do miasta jako jednego, określonego tworu.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>31</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-zasoby">
            <div className="column column-narrow"><div className="sticky">
              <h2>Kończące się zasoby dla rosnącej populacji mieszkańców</h2></div>
            </div>
            <div className="column column-wide">
              
<div className="shift-card shift-card-zasoby" id="sc-niezrownowazona">
  <div className="shift-card-header"><h3>NIEZRÓWNOWAŻONA PRODUKCJA ŻYWNOŚCI</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>kończące się zasoby dla rosnącej populacji mieszkańców</p></div>
  <div className="shift-card-desc"><p>Populacja świata rośnie. Niezrównoważona produkcja i dystrybucja żywności (produkuje się dużo jedzenia kiepskiej jakości, z czego odsetek jest marnowany już na etapie produkcji czy transportu) pogłębiają kryzys klimatyczny. Drożejąca żywność staje się powodem wzrostu niepokojów społecznych.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>32</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-zasoby" id="sc-nowa">
  <div className="shift-card-header"><h3>NOWA JAKOŚĆ ŻYWNOŚCI</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>kończące się zasoby dla rosnącej populacji mieszkańców</p></div>
  <div className="shift-card-desc"><p>System produkcji żywności jest niezrównoważony i niewydolny. Produkcja mięsa ma negatywny wpływ na klimat. Poszukuje się alternatywnych źródeł białka. Powraca się do uprawy roślin wcześniej wypartych z procesu naturkulturowania w miastach.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>33</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-ekongo.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

            </div>
          </section>
          <section className="block" id="block-strumienie">
            <div className="column column-narrow"><div className="sticky">
              <h2>Nieograniczone strumienie danych</h2></div>
            </div>
            <div className="column column-wide">
              
<div className="shift-card shift-card-strumienie" id="sc-wirtualne">
  <div className="shift-card-header"><h3>WIRTUALNE KOPIE ŚWIADOMOŚCI</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>nieograniczone strumienie danych</p></div>
  <div className="shift-card-desc"><p>Granice pomiędzy światem rzeczywistym i wirtualnym są coraz mniej wyraźne. Prace nad technologią Brain-Computer Interface to krok w kierunku reagowania komputerów na ludzkie myśli, ale i przenoszenia świadomości człowieka do komputera i tworzenia jego wirtualnej kopii.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>34</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-strumienie" id="sc-inteligentny">
  <div className="shift-card-header"><h3>INTELIGENTNY DOM</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>nieograniczone strumienie danych</p></div>
  <div className="shift-card-desc"><p>Rozrastająca się infrastruktura IoT (Internet of Things – Internet Rzeczy) umożliwia inteligentne sterowanie urządzeniami domowymi. Część obowiązków domowych wykonywana jest przez inteligentne sprzęty, które coraz częściej zyskują charakter doradcy czy pomocnika.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>35</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-strumienie" id="sc-technologie">
  <div className="shift-card-header"><h3>TECHNOLOGIE DLA LUDZKOŚCI</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>nieograniczone strumienie danych</p></div>
  <div className="shift-card-desc"><p>Coraz częściej mówi się o technologiach, które mają wspierać zrównoważone życie w miastach. Koncepcja Solarpunk zakłada wykorzystanie technologii do rozwiązania współczesnych, miejskich problemów, głównie związanych z ekologią i zrównoważonym rozwojem.</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>36</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>


<div className="shift-card shift-card-strumienie" id="sc-elektrosmog">
  <div className="shift-card-header"><h3>ELEKTROSMOG</h3></div>
  <div className="shift-card-container">
  <div className="shift-card-quest"><b>Wyzwanie</b><p>nieograniczone strumienie danych</p></div>
  <div className="shift-card-desc"><p>Zanieczyszczenie cyfrowe to rodzaj zanieczyszczenia emitowanego przez korzystanie z technologii. Dotyczy wszystkich rozwiązań napędzanych przez technologie i internet. Wynikiem tego jest także zanieczyszczenie światłem i dźwiękiem. W miastach coraz większą uwagę zwraca się na osoby zmagające się z elektrowrażliwością (nadmierna wrażliwość na pole elektromagnetyczne).</p></div>
  <div className="shift-card-symbols">
      <div className="symbol number"><p>37</p></div>
      <div className="shift-card-example-symbols">
      <div className="symbol"><Image src="/svg/karta-technologiczna.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-srodowiskowa.svg" width={60} height={60} alt="" /></div>
      <div className="symbol"><Image src="/svg/karta-spoleczna.svg" width={60} height={60} alt="" /></div></div>
  </div>
</div>
</div>

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
        pageBy(uri: "shift-cards") {
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