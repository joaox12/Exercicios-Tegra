function calcularNotaFinal() {
  // Lê as notas do usuário
  var nota1 = parseFloat(document.getElementById('nota1').value)
  var nota2 = parseFloat(document.getElementById('nota2').value)

  // Calcula a média ponderada das notas
  var media = nota1 * 0.4 + nota2 * 0.6

  // Verifica se o aluno foi aprovado ou reprovado
  var situacao
  if (media >= 60) {
    situacao = 'APROVADO'
  } else {
    situacao = 'REPROVADO'
  }

  // Exibe a nota final e a situação do aluno na página
  var resultadoElement = document.getElementById('resultado')
  resultadoElement.innerHTML =
    'NOTA FINAL = ' + media.toFixed(1) + '<br>' + situacao
}
