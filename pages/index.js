import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Brems website!</title>
        <link rel="shortcut icon" type="image/png"  href="/favicon.png" />
      </Head>

      <main>
        <Header title="Welcome to my website!" />
        <p className="description">
          Ik doe mijn best hier wat moois te krijgen, maar het is nog allemaal nieuw voor me :)
        </p>
      </main>

      <Footer />
    </div>
  )
}
