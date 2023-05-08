function encontrarMenor() {
  // Obter os valores dos inputs
  let num1 = parseInt(document.getElementById('num1').value)
  let num2 = parseInt(document.getElementById('num2').value)
  let num3 = parseInt(document.getElementById('num3').value)

  // Verificar qual é o menor
  let menor = num1
  if (num2 < menor) {
    menor = num2
  }
  if (num3 < menor) {
    menor = num3
  }

  // Exibir o resultado
  document.getElementById('resultado').textContent = 'MENOR = ' + menor
}
