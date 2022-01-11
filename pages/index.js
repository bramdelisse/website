import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brems website!</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
      </Head>
      <body>
        <header id="main-header">
            <h1>My website</h1>
        </header>

        <div class="container">

          <div class="box amethyst">
            <h1>Mijn visie</h1>
            <p>Mijn persoonlijke visie</p>
          </div>

          <div class="box astronaut">
            <h1>Wie ben ik</h1>
            <p>Brem!</p>
          </div>

          <div class="box voodoo">
            <h1>Muziek</h1>
            <p>Nieuwe finds</p>
          </div>

          <div class="box astronaut">
            <h1>Personal</h1>
            <ul>
              <li>Journal entries</li>
              <li>Spraakberichtjes</li>
            </ul>
          </div>

        </div>

        <footer id="main-footer">
          <p>bram.delisse@pm.me | &copy; 2022</p>
        </footer>
      </body>
    </>
  )
}
