let weather = {
    
    fetchWeather : function (city) {
        fetch (
        "https://api.openweathermap.org/data/2.5/weather?q="+ city +
        "&units=metric&appid=7730362b251636df07895954cd1eab4e"
        ).then((response) => response.json())
        .then ((data) =>this.displayWeather(data))
    },
    displayWeather: function (data) {
        const {name} = data;
        const {icon} = data.weather[0];
        const {temp} = data.main;
        console.log(name,icon,temp)
        document.querySelector(".city").innerText = "Weather in"+ name;
        document.querySelector(".temperature").innerText = temp + "Degrees"   
    
    },
    search: function () {
        this.fetchWeather(document.querySelector(".bar").value)
    }
}
document.querySelector(".search button").addEventListener("click",function() {
     weather.search();
})
document
  .querySelector(".bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
