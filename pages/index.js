import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brems website!</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
      </Head>
      <body>
        <header id="main-header">
            <h1>Schat voel je de druk? Dan moet je water zijn toch bro?</h1>
        </header>

        <div id="container-index">
          <div class="box bird">
            <a href="vogeltjes"><h1>Vogeltjes</h1></a>
          </div>

          <div class="box voicememo">
            <h1>Spraak memos</h1>
          </div>

          <div class="box beautiful-world">
            <h1>Mooie dingen in deze wereld</h1>
          </div>

          <div class="box Bram">
            <h1>Bram</h1>
          </div>

        </div>

        <div class="quote-of-the-day">
          <p>
            There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. <br></br> There is another theory which states that this has already happened.</p>
        </div>

        <footer id="main-footer">
        <p>bram.delisse@pm.me | &copy; 2022</p>
        </footer>
      </body>
    </>
  )
}
