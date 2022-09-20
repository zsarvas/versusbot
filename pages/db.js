// Initialize the JS client
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://zywthnmeikffxbzusxkb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5d3Robm1laWtmZnhienVzeGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI2NzIxODYsImV4cCI6MTk3ODI0ODE4Nn0.g8Nam0FhgnGb2-NFH3eGLc-GvUBuXBfE2RwtutKh6Zo")


export default async function infoCall(){
  
// Make a request
let { data: rocketleague, error } = await supabase.from('rocketleague').select('*')

var cols = [];
for (var k in rocketleague) {
  for (var c in rocketleague[k]) {
    if (cols.indexOf(c)===-1) cols.push(c);
  }
}
var html = '<table><tr>'+
    cols.map(function(c){ return '<th>'+c+'</th>' }).join('')+
    '</tr>';
for (var l in rocketleague) {
  html += '<tr>'+
      cols.map(function(c){ return '<td>'+(rocketleague[l][c]||'')+'</td>' }).join('')+
      '</tr>';
}
html += '</table>';
}
infoCall()