import Image from 'next/image'
import Script from 'next/script'

export default function Layout({ children }) {
    return <>
    {children}
    <footer>
      <div id="footer-meritorical">
      <Image src="/svg/gdansk-przyszlosci-logo-dark.svg" alt="" width={120} height={120} className="logo" />
        <div id="footer-navigation">
          <nav>
            <ul>
              <li><a href="/polityka-prywatnosci" target="_self">Polityka prywatności</a></li>
              <li><a href="/regulamin" target="_self">Regulamin</a></li>
              <li><a href="/polityka-dostepnosci" target="_self">Polityka dostępności</a></li>
              <li><a href="/regulamin#regulamin-kontakt" target="_self">Kontakt</a></li>
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
      <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
    </>
  }