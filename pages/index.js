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
        <Header title="Versus Bot Leaderboard" />
        <body>
        <table>
          <tr>
            <th>Name</th>
            <th>MMR</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>+/-</th>
            <th>Win Percentage</th>
         </tr>
         <tr>
            <td>Alfreds Futterkiste</td>
            <td>1000</td>
            <td>0</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
          </tr>
         <tr>
            <td>Centro comercial Moctezuma</td>
            <td>1040</td>
            <td>4</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table> 
      
   </body>
        <p className="description">
          Powered by Versus Bot
          
        </p>
        
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
        <script type="text/javascript" src="js/jquery.js"></script>
      </main>

      <Footer />
    </div>
  )
}
