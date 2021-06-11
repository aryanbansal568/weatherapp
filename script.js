//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi ={
     key:"2cd69f0a97876603bf893e1bbaec54e0",
     baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');


searchInputBox.addEventListener('keypress', (event) =>{

    if(event.keycode == 54){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    }
});

//Get weather report

function getWeatherReport(city) {
    fetch('${WeatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}')
    .then(weather =>{
        return weather.json();
    }).then();
}

//Show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText='${weather.name}, ${weather.sys.country}';
}
//Data manage

