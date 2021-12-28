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
          Current album recommendations:
          <hr />
          <ul>
            <li><a title="album_of_the_week" href="https://open.spotify.com/album/2zUWGNHT5fGrNW52apQa9q?si=760s8UcLT12BFv-HC6mw_A" target="_blank" rel="noopener noreferrer">Hayden Calnin - What It Means to Be Human</a> </li>
            <li><a title="album_of_the_week" href="https://open.spotify.com/album/0fk3Dd2Cz7esxje40DHoQQ?si=Na5lEB5KSv22yrRbmsSBOQ" target="_blank" rel="noopener noreferrer">Hundredth - Somewhere Nowhere</a> </li>
            <li><a title="album_of_the_week" href="https://open.spotify.com/album/0SFtIrRytNI4kcf93Tbhdf?si=74e65c03b1e845b0" target="_blank" rel="noopener noreferrer">Fred again... - Actual Life 2</a> </li>
          </ul>
        </p>
      </main>

      <Footer />
    </div>
  )
}
