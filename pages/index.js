import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import infoCall from './db'

export default function Home() { 
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Versus Bot Leaderboard" />
        <body>
          <div id = "table"></div>
          <script type = "text/javascript" src = "./db.js"></script>
          
       Hello everyon
        </body>
        <p className="description">
          helloo
        </p>
        
      </main>
      <Footer />
    </div>
  )
}
