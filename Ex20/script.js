function calcularSoma() {
  var num1 = parseInt(document.getElementById('num1').value)
  var num2 = parseInt(document.getElementById('num2').value)
  var soma = 0
  for (var i = num1; i <= num2; i++) {
    soma += i
  }
  document.getElementById('resultado').innerHTML = 'Resultado: ' + soma
}
