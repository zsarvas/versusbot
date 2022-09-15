import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Versus Bot Leaderboard!" />
        <p className="description">
          Versus bot is the shit
        </p>
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
        <script type="text/javascript" src="js/jquery.js"></script>
      </main>

      <Footer />
    </div>
  )
}
