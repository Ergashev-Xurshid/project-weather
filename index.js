const container = document.querySelector(".countainer")
const search = document.querySelector(".search-box button")
const weatherBox = document.querySelector(".weather-box")
const weatherDetals = document.querySelector(".weather-detals")
const error404 = document.querySelector(".not-fount")

search.addEventListener("click", () => {

  const APIKey = "49c080c5b9334348b72b1efb14c4c7e0"
  const city = document.querySelector(".search-box input").value

  if (city == "")
    return

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(res => res.json())
    .then(json => {


      if (json.cod == "404") {
        container.style.height = "400px"
        weatherBox.classList.remove("active")
        weatherDetals.classList.remove("active")
        error404.classList.add("active")
        return
      }

      container.style.height = "555px"
      weatherBox.classList.add("active")
      weatherDetals.classList.add("active")
      error404.classList.remove("active")



      const image = document.querySelector(".weather-box img")
      const temperatura = document.querySelector(".weather-box .temperatura")
      const description = document.querySelector(".weather-box .description")
      const humidity = document.querySelector(".weather-detals .humidity span ")
      const wind = document.querySelector(".weather-detals .wind span ")

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "img/sun.webp";
          break;
        case "Rain":
          image.src = "img/rain.webp";
          break;
        case "Snow":
          image.src = "img/snow.webp";
          break;
        case "Clouds":
          image.src = "img/cloud.webp";
          break;
        case "Mist":
          image.src = "img/mist.webp";
          break;
        case "Haze":
          image.src = "img/mist.webp";
          break;
        default:
          image.src = "/img/sun.webp"
      }

      temperatura.innerHTML = `${json.main.temp}°C`
      description.innerHTML = json.weather[0].description
      humidity.innerHTML = `${json.main.humidity}%`
      wind.innerHTML = `${json.wind.speed} km/h`


    })
})