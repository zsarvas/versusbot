// Initialize the JS client
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://zywthnmeikffxbzusxkb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5d3Robm1laWtmZnhienVzeGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI2NzIxODYsImV4cCI6MTk3ODI0ODE4Nn0.g8Nam0FhgnGb2-NFH3eGLc-GvUBuXBfE2RwtutKh6Zo")


export default async function infoCall(){
  
// Make a request
let { data: rocketleague, error } = await supabase.from('rocketleague').select('*').order('MMR', {ascending: false})

let tableStr = '';

// iterate over he array and create strings of the td's
rocketleague.forEach(function(rocketleague, index){

  //destructure the object to give nicer aliases for the iterations.
  const {id: id, Name: name, MMR: mmr, Wins: wins, Losses: losses, MatchUID: matchuid} = rocketleague;

  var differential = wins - losses;
  var divisor = losses
  var percentage = 100 * parseFloat(wins/divisor)
  if (divisor == 0){
    percentage = 100.00
  }
  if (wins == 0 && losses == 0) {
   percentage =   NaN
   differential = NaN
   mmr =  NaN
  }
  
  // build the string with the contents of the iterated row data
  tableStr +='<tr>';
  tableStr +='<td>' + (index + 1) + '</td>';
   tableStr +='<td>' + name + '</td>';
   tableStr +='<td>' + mmr + '</td>';
   tableStr +='<td>' + wins + '</td>';
   tableStr +='<td>' + losses + '</td>';
   tableStr +='<td>' + differential + '</td>';
   tableStr +='<td>' + percentage.toFixed(2) + '%</td>';
  tableStr +='</tr>';
 })

 // insert the string as the html of the tbody
 document.querySelector('#players-table tbody').innerHTML = tableStr
}
infoCall()