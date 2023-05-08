function converterTemperatura() {
  var escala = document.getElementById('escala').value.toUpperCase()
  var tempCelsius = document.getElementById('temp-celsius').value
  var tempFahrenheit = document.getElementById('temp-fahrenheit').value

  if (escala == 'C') {
    var tempConvertida = tempCelsius * 1.8 + 32
    document.getElementById('resultado').value =
      tempConvertida.toFixed(2) + ' F'
  } else if (escala == 'F') {
    var tempConvertida = (tempFahrenheit - 32) / 1.8
    document.getElementById('resultado').value =
      tempConvertida.toFixed(2) + ' C'
  }
}
