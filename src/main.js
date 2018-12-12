//12/12/2018 - github.com/anthonylan


//A minimal weather condition application built with the "https://openweathermap.org" API

let name = document.querySelector('.name')
let temperature = document.querySelector('.temp')
let description = document.querySelector('.desc')
let icon = document.querySelector('.icon')


//Get Current Weather
const getCurrentWeather = () => {
    const apiKey = '<YOUR API KEY>'; 
    const units = 'metric';  //Set units as celsius
    const cityName = document.querySelector('#keyword').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&&APPID=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
        name.innerHTML = `${data.name},${data.sys.country}`;
        temperature.innerHTML = data.main.temp;
        description.innerHTML = data.weather[0].description
        let weatherIcon = data.weather[0].icon 
        icon.innerHTML = weatherIcon;


        //Show weather Icon for different conditions for both day and night.
        //It would be alot messier if I use  if/if else statements, so I used swith instead
        switch(weatherIcon){
            //Icon 01 Clear Sky
            case '01n':
            icon.src = '../images/01.png'
            break;
            case '01d':
            icon.src = '../images/01.png'
            break;
            //Icon 02 Few Clouds
            case '02n':
            icon.src = '../images/02.png'
            break;
            case '02d':
            icon.src = '../images/02.png'
            break;
            //Icon 03 Scattered Clouds
            case '03n':
            icon.src = '../images/03.png'
            break;
            case '03d':
            icon.src = '../images/03.png'
            break;
            //Icon 04 Broken Clouds
            case '04n':
            icon.src = '../images/04.png'
            break;
            case '04d':
            icon.src = '../images/04.png'
            break;
            //Icon 09 Shower Rain
            case '09n':
            icon.src = '../images/09.png'
            break;
            case '09d':
            icon.src = '../images/09.png'
            break;
            //Icon 10  Rain
            case '10n':
            icon.src = '../images/10.png'
            break;
            case '10d':
            icon.src = '../images/10.png'
            break;
            //Icon 11 Thunderstorm
            case '11n':
            icon.src = '../images/11.png'
            break;
            case '11d':
            icon.src = '../images/11.png'
            break;
            //Icon 13 Snow
            case '13n':
            icon.src = '../images/13.png'
            break;
            case '13d':
            icon.src = '../images/13.png'
            break;
            //Icon 50 Mist
            case '50n':
            icon.src = '../images/50.png'
            break;
            case '50d':
            icon.src = '../images/50.png'
            break;
        }
    })
    .catch(err => {
        description.innerHTML = 'Invalid City Name, Address or Keyword'
    }) 
    
}

//Listen for submit event
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault() //Prevent default behaviour
    getCurrentWeather() //Call function
})



