 prompt("Whats your last date?","");
let endDate = "8 April 2023 3:46 PM";
 document.getElementById('end-date').innerHTML = endDate;

//difference b/w present and given time , result is in millisecond

let input = document.querySelectorAll('input');

function clock(){
    let end = new Date(endDate);
    let now = new Date();
  if((end - now) < 0){
    document.getElementById('wish').innerHTML = "Welcome to your new Journey";
  
  }
  else{
    input[0].value =  Math.floor((end - now)/(1000*24*3600)) ;
    input[1].value = Math.floor((end - now)/(1000*60*60)%12) ;
    input[2].value = Math.floor((end - now)/(1000*60)%60) ;
    input[3].value = Math.floor((end - now)/(1000)%60) ;
  }
}

setInterval(clock,500);
