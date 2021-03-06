import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

export default function Layout({ children }) {
    return <>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy="beforeInteractive" />
    <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" strategy="beforeInteractive" />
    <Script src="https://unpkg.com/@popperjs/core@2?ver=5.7.2" strategy="beforeInteractive" />
    <Script src='https://unpkg.com/tippy.js@6?ver=5.7.2' strategy="beforeInteractive" />
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-RP52EB93ZV" strategy="beforeInteractive"/>
    <Script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RP52EB93ZV');
                `}
    </Script>
    <div id="skip-to-content"><div className="skip-link-container"><a href="#main">Przejdź do treści</a></div></div>
    <button type="button" id="menu-toogle" aria-label="Zamyka i otwiera nawigację.">
      <span className="line line-long" id="lineone"></span>
      <span className="line line-med" id="linetwo"></span>
      <span className="line line-med" id="linethree"></span>
      <span className="line line-short" id="linefour"></span>
    </button>
    <header id="headertop">
      <div id="header-menu-container">
        <div>
          <div id="gps-logo-menu-container">
            <Link href="/"><a className="image-link" aria-label="Strona główna."><Image src="/svg/gdansk-przyszlosci-logo-dark.svg" alt="" width={160} height={160} id="gps-logo-menu" /></a></Link>
          </div>
          <nav id="header-vertical-menu">
            <ul>
              <li><Link href="/#scenariusze-przyszlosci"><a target="_self">Scenariusze Przyszłości</a></Link>
                <ul>
                  <li><Link href="/scenariusz/spolecznoczule-technium"><a target="_self">Społecznoczułe technium</a></Link></li>
                  <li><Link href="/scenariusz/pograzone-megapolis"><a target="_self">Pogrążone megapolis</a></Link></li>
                  <li><Link href="/scenariusz/kooperatywna-homeostaza"><a target="_self">Kooperatywna homeostaza</a></Link></li>
                  <li><Link href="/scenariusz/blekitna-autonomia"><a target="_self">Błękitna autonomia</a></Link></li>
                </ul>
              </li>
              <li><Link href="/metodologia"><a target="_self">Proces badawczy</a></Link></li>
              <li><Link href="/slownik-terminow"><a target="_self">Słownik terminów</a></Link></li>
              <li><Link href="/shift-cards"><a target="_self">Shift cards</a></Link></li>
            </ul>
          </nav>
          <a href="/pdf/Gdansk-przyszlosci-raport-z-badan.pdf" className="button" target="_blank">Pobierz Raport w PDF (11MB)</a>
        </div>
      </div>
      <div id="logo-patronage-header">
        <a href="https://www.gdansk.pl/" className="image-link" aria-label="Idź do strony Gdansk.pl" target="_blank" rel="noreferrer"><Image src="/svg/gdansk-logo-dark.svg" alt="" width={81} height={62} /></a>
        <a href="https://ikm.gda.pl/" className="image-link" aria-label="Idź do strony Instytutu Kultury Miejskiej w Gdańsku." target="_blank" rel="noreferrer"><Image src="/svg/ikm-logo-dark.svg" alt="" width={81} height={54} /></a>
        <a href="https://infuture.institute/" className="image-link" aria-label="Idź do strony infuture.institute." target="_blank" rel="noreferrer"><Image src="/svg/infuture-logo-dark.svg" alt="" width={81} height={38} /></a>
      </div>
    </header>
    <div className="container">
      {children}
    </div>
    <footer>
      <div id="footer-meritorical">
        <div>
          <Image src="/svg/gdansk-przyszlosci-logo-dark-120x120.svg" alt="" width={120} height={120} className="logo" id="gps-logo-footer" />
        </div>
        <div id="footer-navigation">
          <nav>
            <ul>
              <li><Link href="/polityka-prywatnosci"><a target="_self">Polityka prywatności</a></Link></li>
              <li><Link href="/regulamin"><a target="_self">Regulamin</a></Link></li>
              <li><Link href="/polityka-dostepnosci"><a target="_self">Polityka dostępności</a></Link></li>
              <li><Link href="/regulamin#regulamin-kontakt" ><a >Kontakt</a></Link></li>
            </ul>
          </nav>
          <div id="footer-meritorical-patronage">
            <a href="https://www.gdansk.pl/"  target="_blank" aria-label="Idź do strony Gdańsk.pl" rel="noreferrer"><Image src="/svg/gdansk-logo-dark.svg" alt="" width={81} height={62} /></a>
            <a href="https://ikm.gda.pl/" target="_blank" aria-label="Idź do strony Instytutu Kultury Miejskiej w Gdańsku." rel="noreferrer"><Image src="/svg/ikm-logo-dark.svg" alt="" width={81} height={54} /></a>
            <a href="https://infuture.institute/" target="_blank" aria-label="Idź do strony infuture.institute." rel="noreferrer"><Image src="/svg/infuture-logo-dark.svg" alt="" width={81} height={38} /></a>
          </div>
        </div>
      </div>
      <div id="footer-technical">
        <p><a href="https://ikm.gda.pl/" target="_blank" rel="noreferrer">Instytut Kultury Miejskiej</a> &#169; 2021</p>
      </div>
    </footer>
      <Script>
            {`
                    var menu = document.getElementById('headertop');
                    var el = document.getElementById('menu-toogle');
                    var lone = document.getElementById('lineone');
                    var ltwo = document.getElementById('linetwo');
                    var lthree = document.getElementById('linethree');
                    var lfour = document.getElementById('linefour');
                    menu.style.width = "0";
                    ltwo.style.marginLeft = "0px";
                    lthree.style.marginLeft = "0px";
                    lfour.style.marginLeft = "0px";
              
                    function menuSwitcher() {
                    if (menu.style.width == "0px") {
                    menu.style.width = "270px";
                    ltwo.style.marginLeft = "8px";
                    lthree.style.marginLeft = "8px";
                    lfour.style.marginLeft = "16px";
                    } else {
                    menu.style.width = "0px";
                    ltwo.style.marginLeft = "0px";
                    lthree.style.marginLeft = "0px";
                    lfour.style.marginLeft = "0px";
                    } 
                    }
            
                    // Add event listener to switcher
                    el.addEventListener("click", menuSwitcher, false);
            `}
          </Script>
    </>
  }