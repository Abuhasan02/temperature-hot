const img = document.getElementById("weather-img");
const title = document.getElementById("weather-title");
const temperature = document.getElementById("temperature");
const weatherInfo = document.getElementById("weather-info");
const locationGet = document.getElementById("location-input");

function fetchData() {
  document.getElementById("search-btn").addEventListener("click", function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q= " +
        locationGet.value +
        " &appid=9e0e9987799c12a87768b297da84f8af"
    )
      .then((response) => response.json())
      .then((data) => weatherDataSet(data));
  });
}
fetchData();

function weatherDataSet(allData){
    title.innerText = allData.name;
    const temp = allData["main"]["temp"];
    const celsious = Math.floor((temp - 32) * 5/9);
    temperature.innerText = celsious;
    img.innerHTML = allData['weather'][0]['icon'];
    weatherInfo.innerText = allData['weather'][0]['main'];
}