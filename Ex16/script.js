function calcularMaior() {
  // Obter as três medidas de lançamento
  var medida1 = parseFloat(document.getElementById('medida1').value)
  var medida2 = parseFloat(document.getElementById('medida2').value)
  var medida3 = parseFloat(document.getElementById('medida3').value)

  // Verificar qual é a maior medida
  var maior = medida1
  if (medida2 > maior) {
    maior = medida2
  }
  if (medida3 > maior) {
    maior = medida3
  }

  // Exibir o resultado
  document.getElementById('resultado').innerHTML =
    'MAIOR DISTÂNCIA = ' + maior.toFixed(2)
}
