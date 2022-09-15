import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const SUPABASE_URL="https://zywthnmeikffxbzusxkb.supabase.co"
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5d3Robm1laWtmZnhienVzeGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI2NzIxODYsImV4cCI6MTk3ODI0ODE4Nn0.g8Nam0FhgnGb2-NFH3eGLc-GvUBuXBfE2RwtutKh6Zo"

// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Make a request
const { data: rocketleague, error } = await supabase.from('rocketleague').select('*')
console.log(rocketleague)


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
          rocketleague
        </p>
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
        <script type="text/javascript" src="js/jquery.js"></script>
      </main>

      <Footer />
    </div>
  )
}

