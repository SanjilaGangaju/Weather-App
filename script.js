const city = document.querySelector('.location');
const dateTime = document.querySelector('.date-time');
const weatherForecast= document.querySelector('.weather-forecast');
const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.temperature');
const minTemp = document.querySelector('#min-temp');
const maxTemp = document.querySelector('#max-temp');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity-data');
const windData = document.querySelector('.wind-data');
const pressure = document.querySelector('.pressure-data');

const weatherSearch = document.querySelector(".weather_search");
let userSearch="kathmandu";
weatherSearch.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("clicked");
    let inputData = document.querySelector('.city_name');

    userSearch = inputData.value;
    fetchWeatherData();
    inputData.value="";

})
const getCountryCode= (code)=>{
    return new Intl.DisplayNames([code], { type: "region" }).of(code);
}
const getDateTime =(dt) =>{
    const curDate = new Date(dt*1000);
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",

    }
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(curDate);
}
const fetchWeatherData = async ()=>{
    const weatherURL=`https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&APPID=4010ba45befc1979fbcf1417fb6480c8`;
    try{
    const res = await fetch(weatherURL);
    const data = await res.json();
    const {main, name, wind, sys, weather, dt}= data;
    city.textContent=`${name}, ${getCountryCode(sys.country)}`;
    dateTime.innerHTML= getDateTime(dt);
    
    weatherForecast.innerHTML= weather[0].main;
    weatherIcon.innerHTML=weather[0].icon;

    weatherTemp.innerHTML=`${main.temp}&#176`;
    minTemp.innerHTML= `${main.temp_min.toFixed()}&#176`;
    maxTemp.innerHTML= `${main.temp_max.toFixed()}&#176`;

    feelsLike.innerHTML=`${main.feels_like.toFixed()}&#176`;
    humidity.innerHTML=`${main.humidity}%`;
    pressure.innerHTML= `${main.pressure} hPa`;
    windData.innerHTML= `${wind.speed} m/s`;
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
};
window.addEventListener('load', fetchWeatherData());