// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// APP DATA 
const weather = {};

weather.temperature = {
    unit : "celsius"
}

//APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0"

// CHECK IF BROWSER SUPPORTS GEOLOCATIN
if ('geolocation' in naviagtor){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.computedStyleMap.display = "block";
    notificationElement.innerHTML = "<p> Browser doesn't Support Geolocation</p>":
}

// SET USER'S POSITIN
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = psoition.coords.longitude;

    getWeather (latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.computedStyleMap.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}