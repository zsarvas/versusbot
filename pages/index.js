import Head from 'next/head'
import Header from '@components/Header'
import infoCall from './db'
import Footer from '@components/Footer'

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
          
   </body>
        <p className="description">
          hello
        </p>
        
        
        
      </main>
      <Footer />
    </div>
  )
}
