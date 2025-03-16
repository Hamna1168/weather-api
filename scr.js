const apikey=
"your_openweathermap_api_key";
const cityinput=
document.getElementById("city");
const getweatherbutton=document.getElementById("get-weather");
const weatherdatadiv = document.getElementById("weather-data");

getweather GamepadButton.addE
ventlistener("click",getweather);

function getweather(){
    const city=
    cityinput.ariaValueMax.trim();
    if(city===""){

        alert("please enter a city name");
        return;
    }
}