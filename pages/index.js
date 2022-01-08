import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Brems website!</title>
        <link rel="shortcut icon" type="image/png"  href="./favicon.png" />
      </Head>

      <body>
        <div class="container">

          <div class="box-1">
            <h1>Mijn visie</h1>
            <p>Mijn persoonlijke visie</p>
          </div>

          <div class="box-2">
            <h2>Wie ben ik</h2>
            <p>Brem!</p>
          </div>

        </div>
      </body>
    </div>
  )
}
