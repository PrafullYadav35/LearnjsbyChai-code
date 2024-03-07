
let countDownDate = new Date("2024-03-10 05:50:01").getTime();
let updateTimer = setInterval(function(){

//alert(countDownDate.toLocaleString());
let now =new Date().getTime();
let leftTime = countDownDate-now;

//convert millisecon into day hour minute and seconds

let days= Math.floor(leftTime/(1000*60*60*24));
let hours = Math.floor((leftTime %(1000*60*60*24))/(1000*60*60));
let minutes =Math.floor((leftTime %(1000*60*60))/(1000*60));
let seconds =Math.floor((leftTime %(1000*60))/(1000));

//​Display the output to users
document.getElementById('days').innerHTML=days;
document.getElementById('hours').innerHTML=hours;
document.getElementById('minutes').innerHTML=minutes;
document.getElementById('seconds').innerHTML=seconds;

},1000);
if(leftTime<0){
    clearInterval(updateTimer);
    document.getElementById('days').innerHTML="";
document.getElementById('hours').innerHTML="";
document.getElementById('minutes').innerHTML="";
document.getElementById('seconds').innerHTML="";
}

