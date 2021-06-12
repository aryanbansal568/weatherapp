//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi ={
     key:"2cd69f0a97876603bf893e1bbaec54e0",
     baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(event)=> {
    // Number 13 is the "Enter" key on the keyboard
    if(event.keyCode == 13){
             console.log(searchInputBox.value);
             getWeatherReport(searchInputBox.value);
            }
  });

// searchInputBox.addEventListener('keypress', (event) =>{
// console.log(event.keycode);
//     if(event.keycode == 13){
//     console.log(searchInputBox.value);
//     getWeatherReport(searchInputBox.value);
//     }
// });

//Get weather report

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
       // console.log(weather);
        return weather.json();
    }).then(showWeatherReport);
    //console.log(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`);
}

//Show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temperature=document.getElementById('temp');
    temperature.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML =`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date= document.getElementById('date');
    let todayDate = new Date();
    date.innerText= dateManage(todayDate);
}
//Date manage
function dateManage(dateArg){

    let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    
    let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} ${day} ${year}`;
}
