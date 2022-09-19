import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import dataString from './db'



export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Versus Bot Leaderboard" />
        <script type = "text/javascript" src="db.js"></script> 
        <body>
          "${dataString()}"
        
   </body>
        <p className="description">
        </p>
        
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
        
      </main>
      <Footer />
    </div>
  )
}
