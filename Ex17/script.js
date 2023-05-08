function verificarMultiplos() {
  var num1 = parseInt(document.getElementById('numero1').value)
  var num2 = parseInt(document.getElementById('numero2').value)
  if (num1 % num2 === 0 || num2 % num1 === 0) {
    document.getElementById('resultado').innerHTML = 'São múltiplos.'
  } else {
    document.getElementById('resultado').innerHTML = 'Não são múltiplos.'
  }
}
