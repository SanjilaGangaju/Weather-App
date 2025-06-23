const location_info = document.querySelector('.location');
const dateTime = document.querySelector('.date-time');
const weatherForecast= document.querySelector('.weather-forecast');
const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.temperature');
const minTemp = document.querySelector('min-temp');
const maxTemp = document.querySelector('max-temp');
const humidity = document.querySelector('.humidity-data');
const wind = document.querySelector('.wind-data');
const pressure = document.querySelector('.pressure-data');


const fetchWeatherData = async ()=>{
    const weatherURL="https://api.openweathermap.org/data/2.5/weather?q=pune&APPID=4010ba45befc1979fbcf1417fb6480c8";
    try{
    const res = await fetch(weatherURL);
    const data = await res.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
};
window.addEventListener('load', fetchWeatherData);