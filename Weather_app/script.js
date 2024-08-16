const apiKey="a30eb1afa56c50a8d4b267016fc1daaf";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

searchBtn.addEventListener("click",(e)=>{
   
    checkWeather(searchBox.value);
});


console.log(data)
//after api activation try and run ; read api in console



async function checkWeather(city){
    const response =await fetch(apiUrl+city+`&appid=${apiKey}`);
    // console.log(apiUrl+city+`&appid=${apiKey}`)
    var data = await response.json();
  

//we have to update the city , wind ,humidity, temp.. jo api se aa rha hai
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+" °C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="https://cdn-icons-png.flaticon.com/512/252/252035.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="https://cdn-icons-png.flaticon.com/512/4837/4837678.png";
}

}





