const weather = document.querySelector('pre')
function getInputValue() {
  let y = document.getElementById('choose').value
  let url = `http://api.openweathermap.org/data/2.5/weather?q= + ${y} + &appid=4eeed47b838f4ac6bd472be6f477d565`
  let request = new XMLHttpRequest()
  request.open('GET', url)
  request.responseType = 'json'
  request.onload = () => {
    let temperature = request.response.main.temp - `273.2`
    let fl = request.response.main.feels_like - `273.2`
    let p = Math.round(request.response.main.pressure * 0.750063755419211)
    let deg = request.response.wind.deg
    weather.textContent = `Температура повітря: ${temperature.toFixed(1)} Відчувається як: ${fl.toFixed(1)}
Атмосферний тиск: ${p} мм рт. ст.
Вітер: ${request.response.wind.speed} м/с ${getSide(deg)}
Хмaрність ${request.response.clouds.all} %
Вологість ${request.response.main.humidity} %`
  }
  onerror = () =>
    weather.textContent = `Invalid name or try in English please`
  request.send()
}


function getSide(deg) {
  switch (true) {
    case (deg < 23 || deg >= 337):
      return ` північний`
    case (deg < 68 && deg >= 23):
      return ` північно-східний`
    case (deg < 113 && deg >= 68):
      return ` східний`
    case (deg < 158 && deg >= 113):
      return ` південно-східний`
    case (deg < 202 && deg >= 158):
      return ` південний`
    case (deg < 248 && deg >= 202):
      return ` південно-західний`
    case (deg < 292 && deg >= 248):
      return ` західний`
    case (deg < 337 && deg >= 292):
      return ` північно-західний`
  }
}


