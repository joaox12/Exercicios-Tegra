function calcular() {
  var valor1 = parseInt(document.getElementById('valor1').value)
  var valor2 = parseInt(document.getElementById('valor2').value)
  var valor3 = parseInt(document.getElementById('valor3').value)
  var valor4 = parseInt(document.getElementById('valor4').value)
  var valor5 = parseInt(document.getElementById('valor5').value)

  var menor = valor1
  var maior = valor1

  if (valor2 < menor) {
    menor = valor2
  }
  if (valor3 < menor) {
    menor = valor3
  }
  if (valor4 < menor) {
    menor = valor4
  }
  if (valor5 < menor) {
    menor = valor5
  }

  if (valor2 > maior) {
    maior = valor2
  }
  if (valor3 > maior) {
    maior = valor3
  }
  if (valor4 > maior) {
    maior = valor4
  }
  if (valor5 > maior) {
    maior = valor5
  }

  document.getElementById('resultado').innerHTML =
    'Menor valor: ' + menor + '<br> Maior valor: ' + maior
}
