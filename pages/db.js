// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
import { data } from 'cypress/types/jquery'
require('dotenv').config()
const envVariables = process.env;

// Read vars from envVariables object
const {
    SUPABASE_URL,
    SUPABASE_KEY
} = envVariables;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Make a request
const { data: rocketleague, error } = await supabase.from('rocketleague').select('*')


console.log(rocketleague)


const content = `<table>
<tr>
  <th>Name</th>
  <th>MMR</th>
  <th>Wins</th>
  <th>Losses</th>
  <th>+/-</th>
  <th>Win Percentage</th>
</tr>
<tr>
  <td>${"Steven sondheim"}</td>
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
</table> `

document.body.innerHTML = content
