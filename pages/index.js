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
<body>

<h2>A basic HTML table</h2>

<table style="width:100%">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

</body>
        <p className="description">
          Versus bot is the shit
        </p>
        <script type="text/javascript" src="component/db.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
        <script type="text/javascript" src="js/jquery.js"></script>
      </main>

      <Footer />
    </div>
  )
}
